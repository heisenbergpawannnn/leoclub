# Deploying to GitHub Pages (with Cloudflare)

Follow these steps to deploy this Vite site to GitHub Pages and configure a Cloudflare-managed custom domain.

- Push this branch to GitHub (`main`) and let the workflow build and publish to the `gh-pages` branch automatically.
- The repository includes `public/CNAME` set to `lckbudigandaki.org.np` so the deployed site will use that custom domain.

GitHub Pages settings
- After the first successful deployment, go to the repository Settings → Pages and set the source to the `gh-pages` branch and `/ (root)`.
- Verify the Custom domain is `lckbudigandaki.org.np` and enable "Enforce HTTPS" once DNS has propagated.

Cloudflare DNS notes
- For an apex domain (example.com / org.np) create A records pointing to GitHub Pages IPs:

  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

- For a `www` subdomain create a CNAME to `<your-github-username>.github.io` (replace with your username).
- IMPORTANT: In Cloudflare set the DNS entries to "DNS only" (grey cloud). GitHub Pages does not support Cloudflare's proxied traffic (orange cloud) for custom domains.
- After DNS changes, wait for propagation and then enable HTTPS enforcement in GitHub Pages settings.

If you'd like I can also:
- Add a `gh-pages` deploy script that uses `gh-pages` npm package, or
- Customize the Action to run on other branches.
