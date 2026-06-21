# Northline Property — real estate listings site

A complete real estate website you can host for free on **GitHub Pages**. It has a public listings site (Buy / Rent / Sold, search & filters, photo galleries) and an **admin area** where you set your own email + password and manage listings with photo uploads.

Each page is a **single self-contained HTML file** — all the styling and code is inside it. So it renders correctly whether you double-click it, drop it in a preview, or host it online. No build step, no frameworks.

> Rename "Northline" to your own agency wherever you see it.

---

## Files

```
index.html           Public site  (open this to view the site)
admin.html           Admin panel  (set password, add/edit listings)
data/listings.json   The listings your live site publishes (optional)
README.md            This file
```

## Try it now

Just **double-click `index.html`** — it opens with the 6 sample listings built in.
Open **`admin.html`**, set your email + password, and start adding properties.

(You can also run `python3 -m http.server 8000` and visit `http://localhost:8000` — only needed if you want the site to read `data/listings.json` instead of the built-in samples.)

## Host on GitHub Pages (free)

1. Create a GitHub repo and upload the files (keep the `data/` folder).
2. Repo -> **Settings -> Pages**.
3. *Build and deployment -> Source* -> **Deploy from a branch** -> `main` + `/ (root)` -> **Save**.
4. After ~1 minute it's live at `https://<your-username>.github.io/<repo>/`. Admin is at `.../admin.html`.

## How publishing works (important)

This is a **static** site — no server. So:

- Listings you add in admin are saved **in your browser**, on that device. They appear for you right away, but not yet for the public.
- To publish them for **everyone**: in admin click **Export listings.json**, then replace `data/listings.json` in your repo with the downloaded file and commit it. The live site reads that file.

Loop: *add/edit in admin -> Export -> commit `data/listings.json`.*
**Import JSON** loads a file back into admin if you switch devices.

## About the admin password (read this)

On a static site the login runs **in the browser**, so it's a **basic gate, not real security** — a determined person could read the page source. Good enough to keep casual visitors out of a starter site. The password is stored hashed (SHA-256) on your device only. Forgot it? Use **"Reset admin on this device"** on the sign-in screen.

For genuinely secure login + a shared database + image hosting, use the upgrade below.

## Upgrade path -> Supabase (real backend, still free, still on GitHub Pages)

Supabase gives you real server-side auth, a Postgres database, and file storage; your frontend stays on GitHub Pages and just calls Supabase's API.

1. Create a free project at supabase.com; copy the project URL + public *anon* key.
2. Create the table (SQL editor):

   ```sql
   create table listings (
     id uuid primary key default gen_random_uuid(),
     created_at timestamptz default now(),
     title text, status text, type text,
     price numeric, price_text text,
     address text, suburb text, state text, postcode text,
     beds int, baths int, cars int, land text,
     description text, features text[],
     agent_name text, agent_phone text, agent_email text,
     images text[]
   );
   alter table listings enable row level security;
   create policy "public read" on listings for select using (true);
   create policy "admin write" on listings for all
     using (auth.role() = 'authenticated')
     with check (auth.role() = 'authenticated');
   ```

3. Add a Storage bucket for photos and add your admin user under **Authentication -> Users**.
4. In each HTML file, find the inline `Store` code block (search for `store.js — data layer`). Rewrite `Auth.login`, `Listings.loadForPublic`, `Listings.upsert`, `Listings.remove`, and the image upload to call Supabase instead of `localStorage`. Nothing else needs to change.

## Custom domain

**Settings -> Pages -> Custom domain** -> add `www.youragency.com.au` and create the DNS records GitHub shows. HTTPS is automatic.

## Rebranding

Search for `Northline` and replace it, plus the placeholder phone/email/address in the footer of `index.html`. Swap the `N` brand letter in the header if you like.
