# quickpay

Site for payment on another domain

## Development

Requires the Node.js version from [`.nvmrc`](.nvmrc).

```sh
npm ci
npm start           # dev server on http://localhost:1234
npm run build       # production build into dist/
```

Pull requests are checked with:

```sh
npm run typecheck
npm run lint
npm run format:check   # npm run format fixes formatting
```

## Configuration

Build-time variables are read from the environment and from `.env.${NODE_ENV}`:

| Variable         | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| `SENTRY_DSN`     | DSN of the self-hosted Sentry project; error tracking is disabled when empty. |
| `SENTRY_RELEASE` | Release reported to Sentry; the deploy workflow sets it to the commit SHA.    |
| `BASE_URL`       | API base URL; defaults to the site origin without the `pay.` subdomain.       |
| `BUILD_TIME`     | Build time shown when double-clicking the footer copyright.                   |

## Deployment

Every push to `master` deploys the test site (`NODE_ENV=test`) to
[pay.test.l-l.cloud](https://pay.test.l-l.cloud) and production to
[pay.lovilave.com.ua](https://pay.lovilave.com.ua).
