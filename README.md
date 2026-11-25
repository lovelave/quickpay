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

Personal payment links open the site at `/pay/{code}`. GitHub Pages has no rewrite rules,
so the build also writes `dist/404.html`, a copy of `index.html` that Pages serves for unknown paths,
and references assets by absolute URLs (`--public-url=/`).

## Payment flow

Once the debt is loaded (by the link code or the entered phone), the borrower picks:

- **Сплатити повністю** creates a Platon order for the whole debt and posts its form in the same tab.
- **Сплатити частково** asks for an amount up to the debt, then does the same.
- **Оплата в банку** opens the requisites PDF.
- **Продовжити строк** (only when the API returns `prolongation`) explains that prolongation documents are signed
  in the personal area and links to the main site's `/signin`. In the phone flow it adds `?phone=380XXXXXXXXX`,
  which the site uses to prefill the phone.

Platon returns the browser to the page the payment started from, with `?payment=success` or `?payment=fail`.
The phone is never put into that URL: the phone flow keeps it, with the amount and the debt before the payment,
in `sessionStorage` (`quickpay.payment`). The result screen reloads the debt: repaid, decreased, or unchanged
(the payment is not posted yet). `static/iframe.html` is kept only for orders created before this flow.
