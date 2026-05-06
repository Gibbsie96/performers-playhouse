# Performers Playhouse

Landing page for Performers Playhouse Summer Camps — week-long music & theater workshops for kids ages 6–10 and 10–14 in Eastmark, Mesa, AZ.

The page is a static single-pager linked from Facebook group posts so parents can read the details and click through to the Google interest form.

## Local preview

No build step. Open `index.html` directly in a browser, or serve the folder with any static server:

```bash
# Python
python -m http.server 8000

# Or Node
npx serve .
```

## Deploy (GitHub Pages)

1. Push to `main`.
2. In the GitHub repo: **Settings → Pages → Source = "Deploy from a branch", Branch = `main`, Folder = `/ (root)`** → Save.
3. Wait ~1 minute. Site lives at `https://gibbsie96.github.io/performers-playhouse/`.
4. (Optional) Add a custom domain via the **Custom domain** field — that creates/updates the `CNAME` file automatically.
