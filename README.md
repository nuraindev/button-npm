# blue-hello-button

A simple blue button React component that displays "hi" and logs "hello world" to the console when clicked.

---

## Understanding the Package Structure

```
button-npm/
├── src/
│   └── index.tsx       ← Source component (React + TypeScript)
├── dist/               ← Built output (auto-generated, don't edit)
│   ├── index.js        ← CommonJS build (for require())
│   ├── index.mjs       ← ESM build (for import)
│   ├── index.d.ts      ← TypeScript type definitions
│   └── index.d.mts     ← ESM type definitions
├── package.json        ← Package metadata, scripts, dependencies
├── tsconfig.json       ← TypeScript configuration
├── tsup.config.ts      ← Bundler configuration (tsup)
└── README.md           ← This file
```

### Key files explained

- **src/index.tsx** — The actual component code. This is what you edit.
- **tsup.config.ts** — Configures the build tool (tsup). It bundles your source into CJS and ESM formats, generates type definitions, and excludes React from the bundle (since consumers provide their own React).
- **package.json**:
  - `main` → points to CJS build for `require()`
  - `module` → points to ESM build for `import`
  - `types` → points to TypeScript definitions
  - `files` → only the `dist/` folder gets published to npm
  - `peerDependencies` → tells consumers they need React installed

---

## How to Test Locally

### Option 1: Test with `npm link` (recommended)

1. **Build the package:**

   ```bash
   npm run build
   ```

2. **Create a global symlink:**

   ```bash
   npm link
   ```

3. **In a separate React project** (e.g., a Vite or Next.js app):

   ```bash
   npm link blue-hello-button
   ```

4. **Use the component in that project:**

   ```jsx
   import { BlueHelloButton } from "blue-hello-button";

   function App() {
     return <BlueHelloButton />;
   }

   export default App;
   ```

5. **Run the React project** and click the button — you should see "hello world" in the browser console.

6. **To unlink when done:**

   ```bash
   # In the test project
   npm unlink blue-hello-button

   # In the package directory
   npm unlink
   ```

### Option 2: Test with `npm pack`

1. **Build and pack:**

   ```bash
   npm run build
   npm pack
   ```

   This creates a `.tgz` file (e.g., `blue-hello-button-1.0.0.tgz`).

2. **In a separate React project, install from the tarball:**

   ```bash
   npm install /path/to/blue-hello-button-1.0.0.tgz
   ```

3. **Use it the same way as Option 1.**

### Option 3: Quick sanity check with Node

```bash
node -e "const { BlueHelloButton } = require('./dist/index.js'); console.log(BlueHelloButton.toString())"
```

This won't render anything, but it confirms the export works and the function is defined.

---

## How to Publish to npm

### First time setup

1. **Create an npm account** at [https://www.npmjs.com/signup](https://www.npmjs.com/signup)

2. **Log in from your terminal:**

   ```bash
   npm login
   ```

   Follow the prompts to enter your username, password, and email.

### Before publishing

3. **Make sure the package name is available:**

   ```bash
   npm search blue-hello-button
   ```

   If taken, change the `name` in `package.json` to something unique (e.g., `@yourusername/blue-hello-button` for a scoped package).

4. **Build the package:**

   ```bash
   npm run build
   ```

5. **Verify what will be published:**

   ```bash
   npm pack --dry-run
   ```

   This lists all files that will be included. You should only see files from `dist/`, `package.json`, and `README.md`.

### Publish

6. **Publish (public package):**

   ```bash
   npm publish
   ```

   For scoped packages (`@yourusername/blue-hello-button`):

   ```bash
   npm publish --access public
   ```

### After publishing

7. **Verify it's live:**

   ```bash
   npm info blue-hello-button
   ```

   Or visit `https://www.npmjs.com/package/blue-hello-button`.

### Publishing updates

8. **Bump version, then publish again:**

   ```bash
   # Patch (1.0.0 → 1.0.1) for bug fixes
   npm version patch

   # Minor (1.0.0 → 1.1.0) for new features
   npm version minor

   # Major (1.0.0 → 2.0.0) for breaking changes
   npm version major

   # Then publish
   npm publish
   ```

---

## Installation (for consumers)

```bash
npm install blue-hello-button
```

## Usage

```jsx
import { BlueHelloButton } from "blue-hello-button";

function App() {
  return <BlueHelloButton />;
}
```

## License

MIT
