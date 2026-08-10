# NPM Publish Guide

## Prerequisites

- Node.js and npm installed
- An npm account ([signup here](https://www.npmjs.com/signup))
- Logged in to npm CLI:
  ```bash
  npm login
  ```

---

## Publishing a New Package

1. **Choose a unique package name** in `package.json`:
   ```json
   "name": "your-package-name"
   ```
   Check availability: `npm search your-package-name`

2. **Set the version** (start at `1.0.0`):
   ```json
   "version": "1.0.0"
   ```

3. **Make sure `files` field is set** so only necessary files are published:
   ```json
   "files": ["dist"]
   ```

4. **Build the package**:
   ```bash
   npm run build
   ```

5. **Preview what will be published** (optional):
   ```bash
   npm pack --dry-run
   ```

6. **Publish**:
   ```bash
   npm publish
   ```
   This will open a browser for authentication, then publish to the registry.

---

## Publishing an Update to an Existing Package

1. **Make your code changes**.

2. **Bump the version** (choose one):
   ```bash
   npm version patch   # 1.0.0 → 1.0.1 (bug fixes)
   npm version minor   # 1.0.0 → 1.1.0 (new features, backward compatible)
   npm version major   # 1.0.0 → 2.0.0 (breaking changes)
   ```
   Or manually edit the `"version"` field in `package.json`.

3. **Build and publish**:
   ```bash
   npm publish
   ```
   The `prepublishOnly` script will automatically run the build before publishing.

---

## Unpublishing & Republishing

- **Unpublish a specific version**:
  ```bash
  npm unpublish your-package-name@1.0.0
  ```

- **Unpublish entire package** (only within 72 hours of publish):
  ```bash
  npm unpublish your-package-name --force
  ```

- **After unpublishing**, npm enforces a **24-hour cooldown** before the same package name can be republished. Options:
  - Wait 24 hours, then publish again
  - Publish under a different name immediately

---

## Scoped Packages (Optional)

To publish under your username/org scope:

```json
"name": "@your-username/your-package-name"
```

Publish as public (scoped packages are private by default):
```bash
npm publish --access public
```

---

## Quick Reference

| Command | Description |
|---------|-------------|
| `npm login` | Authenticate with npm |
| `npm run build` | Build the package |
| `npm pack --dry-run` | Preview published files |
| `npm publish` | Publish to registry |
| `npm version patch` | Bump patch version |
| `npm unpublish pkg@version` | Remove a version |
| `npm deprecate pkg@version "msg"` | Deprecate a version |
