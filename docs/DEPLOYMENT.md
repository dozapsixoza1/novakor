# Deployment guide

## Vercel
1. Import the GitHub repository `dozapsixoza1/novakor` into Vercel.
2. Keep the framework preset as Next.js.
3. Use the repository root as the project root.
4. No environment variables are required for the current landing page.
5. Deploy the production branch `main`.
6. Add the final custom domain after ownership and DNS are confirmed.

## Before public launch
- Replace `hello@novacore.example` in `app/page.tsx` with a verified contact address.
- Add the final site URL to metadata once the domain is active.
- Publish appropriate privacy and terms pages before collecting personal data or offering paid services.
- Verify mobile layout, metadata, contact links, and accessibility after deployment.

## Rollback
Use the previous successful Vercel deployment if a release causes a production issue. Keep the Git commit SHA in the release notes so the deployed source is traceable.
