## Playwright Template (TypeScript)

An opinionated Playwright testing template with TypeScript, strict compiler settings, page objects, environment-driven config, and examples for UI and API testing.

### Requirements
- Node.js 18+ (recommended) and npm
- Browsers installed via Playwright

### Quick Start
1. Install dependencies and browsers
   - `cd playwright-template`
   - `npm install`
   - `npx playwright install`
2. Configure environment
   - Copy `.env` and adjust values as needed (see Environment Variables).
3. Run tests
   - All tests: `npx playwright test`
   - UI mode: `npx playwright test --ui`
   - Show last report: `npx playwright show-report`

### Environment Variables
Stored in `playwright-template/.env`. This project uses namespaced keys to avoid collisions on Windows (where `USERNAME` is reserved by the OS).

- `BASE_URL`: Base URL for the web app
- `API_URL`: Base URL for API calls
- `E2E_USERNAME`: App username for test login
- `E2E_PASSWORD`: App password for test login
- `E2E_FULLNAME`: Full name shown in UI after login

Loaded in `playwright.config.ts` via `dotenv` with an explicit path so it works regardless of cwd.

### Project Structure
```
playwright-template/
  ├─ .env                    # Environment configuration
  ├─ .gitignore              # Ignores artifacts and auth states
  ├─ package.json
  ├─ playwright.config.ts    # Playwright config (dotenv, projects, reporters)
  ├─ tsconfig.json           # Strict TS config tuned for Playwright
  └─ src/
     ├─ pages/               # Page objects
     │  ├─ login.page.ts
     │  ├─ overview.page.ts
     │  └─ sidenav.page.ts   # Shared nav component (used directly in tests)
     ├─ test/
     │  ├─ api/
     │  │  └─ api.spec.ts    # Example API test
     │  └─ ui/
     │     ├─ _setup/
     │     │  └─ auth.spec.ts   # Logs in and saves storage state
     │     └─ test.spec.ts      # Example UI test
     └─ utils/
        └─ constants.ts
```

### Storage State (Auth)
- Recommended location: keep storage state JSON under a dedicated, ignored folder.
  - Current setup writes to `src/.auth/userA.json` (ignored in `.gitignore`).
- Generate state:
  - Run only the setup test: `npx playwright test src/test/ui/_setup/auth.spec.ts`
  - It logs in using `E2E_USERNAME`/`E2E_PASSWORD` and saves storage state.
- Reuse state:
  - Option A (per-test): `test.use({ storageState: 'src/.auth/userA.json' })`
  - Option B (fixtures): create a fixture that launches a context with `storageState` and share it across tests.
  - Option C (projects): add a project dependency on `setup` and set `use.storageState` in other projects.

### Page Objects and Components
- Pages live in `src/pages/*`. Shared UI like the side navigation is modeled as a component (`sidenav.page.ts`).
- Instantiate components as needed in tests or pages. Avoid duplicating selectors across pages.

### TypeScript Configuration
- Strict mode enabled with additional safety checks (`noUncheckedIndexedAccess`, `noImplicitOverride`, `exactOptionalPropertyTypes`).
- `lib` includes `ES2022` and `DOM` so both node and browser types are available.
- `types` includes `@playwright/test` and `node`.
- `noEmit` so TS won’t write JS; Playwright runs TS directly.

### Useful Commands
- Run all tests: `npx playwright test`
- Headed mode: `npx playwright test --headed`
- Single file: `npx playwright test src/test/ui/test.spec.ts`
- Debug: `npx playwright test --debug`
- UI mode: `npx playwright test --ui`
- Show report: `npx playwright show-report`

### Troubleshooting
- Windows shows the wrong username in tests
  - Cause: Windows defines `USERNAME` globally (e.g., `anton`).
  - Fix: This template uses `E2E_USERNAME`/`E2E_PASSWORD`/`E2E_FULLNAME` to avoid collisions.
- Env not loading
  - Ensure you run commands from `playwright-template/` or keep `.env` at `playwright-template/.env`.
  - Config loads dotenv with an explicit path: no cwd dependency.
- Browsers missing
  - Run `npx playwright install` after `npm install`.

### Notes
- Artifacts and auth states are ignored via `.gitignore` (`test-results/`, `playwright-report/`, `blob-report/`, `src/.auth/`, `playwright/.auth/`).
- API tests use Playwright’s `request` fixture and can run without a browser context.

---
Happy testing! If you want, we can add scripts (e.g., `npm run test`, `npm run test:ui`) and wire project dependencies so UI projects reuse the generated storage state automatically.
