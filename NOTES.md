# Dev Notes — Lessons Learned

## The Bug

After publishing `hello-world-button@1.0.3`, any React Native project that installed it would get Metro bundler errors like:

```
error: /node_modules/hello-world-button/node_modules/react-native/...
SyntaxError: Flow type annotations are not supported
```

The consuming project (e.g. using RN 0.83.6) couldn't parse the Flow-typed source files from the **separate** react-native 0.86.x that got installed inside our package's `node_modules`.

---

## Root Cause

`react-native` was listed as a **regular dependency** instead of a **peer dependency**.

```json
// ❌ WRONG — installs its own copy of react-native
"dependencies": {
  "react-native": "^0.86.2"
}
```

This caused npm to install a nested `node_modules/hello-world-button/node_modules/react-native/` with a completely different version than the host app. Metro then tried to bundle both copies, and the host app's codegen couldn't handle the newer one.

---

## The Fix

Move `react-native` to `peerDependencies` and keep it in `devDependencies` for local development:

```json
// ✅ CORRECT
"peerDependencies": {
  "react": ">=17.0.0",
  "react-native": ">=0.70.0"
},
"devDependencies": {
  "react": "^19.2.8",
  "react-native": "^0.86.2"
}
```

Also externalize it in `tsup.config.ts` so the bundler doesn't try to include it in the output:

```ts
external: ["react", "react-native"],
```

---

## Rule of Thumb: dependencies vs peerDependencies vs devDependencies

| Category | When to use | What happens on install |
|----------|-------------|------------------------|
| `dependencies` | Libraries your package bundles/ships (e.g. `lodash`, `date-fns`) | Installed inside your package's `node_modules` — consumer gets a copy |
| `peerDependencies` | Libraries the **consumer must provide** (e.g. `react`, `react-native`) | NOT installed automatically — consumer is expected to have it already |
| `devDependencies` | Tools/libs needed only for building/testing your package locally | Not installed when someone installs your package |

**For component libraries:** `react`, `react-native`, `react-dom` should almost always be **peer dependencies**. Putting them in `dependencies` causes duplicate copies and version conflicts.

---

## Other Mistakes Fixed

1. **`react-dom` was listed as a peer dependency** even though this is a React Native component (uses `TouchableOpacity`, `Text`). Removed it — it's irrelevant for RN.

2. **`tsup.config.ts` externalized `react-dom` instead of `react-native`** — the bundler config didn't match the actual imports. Always keep `external` in sync with your peer dependencies.

---

## Checklist Before Publishing a React Native Package

- [ ] `react` and `react-native` are in `peerDependencies`, not `dependencies`
- [ ] `react-dom` is only listed if the package actually supports web
- [ ] `tsup.config.ts` (or equivalent) externalizes all peer deps
- [ ] Run `npm pack --dry-run` and verify no `node_modules` or unnecessary files are included
- [ ] Test the package in a real consuming project before publishing (use `npm link` or `npm pack` + install from tarball)
- [ ] Bump the version before publishing (`npm version patch`)
