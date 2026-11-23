# Technical foundation

## Website
- Next.js App Router with React and TypeScript.
- Responsive CSS with accessible semantic markup.
- Metadata configured for search and link previews.
- Static-first landing page; no database or secrets required to render it.

## Engineering workflow
- GitHub is the source of truth.
- Work in feature branches for substantial changes; use pull requests and review.
- Run `npm run typecheck` and `npm run build` before release.
- GitHub Actions runs the same checks on pushes and pull requests to `main`.

## Proposed product stack
Choose per product rather than forcing one stack everywhere:
- Frontend: React / Next.js / TypeScript.
- Backend: Node.js or Python.
- Data: PostgreSQL.
- Authentication: Supabase Auth or a suitable managed identity provider.
- Hosting: Vercel for web frontends; managed cloud or VPS where appropriate.
- Bots: Python with pyTelegramBotAPI when Telegram bot workloads fit.
- Observability: structured logs and an error-monitoring service.

## Security baseline
- Never commit `.env` files, access tokens, service-role keys, or private credentials.
- Use least-privilege access and separate development and production environments.
- Validate inputs on the server and protect privileged routes.
- Keep dependencies updated and review security advisories.
- Configure backups and test restoration before storing important production data.

## Local commands
```bash
npm install
npm run dev
npm run typecheck
npm run build
npm start
```
