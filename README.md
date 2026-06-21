# A1 Vision — real estate listings site

A real estate website you can host for free on **GitHub Pages**: a public listings site (Buy / Rent / Sold, search, photo galleries) and a private **admin** area to manage listings.

Each page is a **single self-contained HTML file** — all styling and code is inside it, so it works whether you double-click it, preview it, or host it online.

> Rename "A1 Vision" to your agency wherever you see it.

## Files

```
index.html           Public site
admin.html           Admin panel (sign in, manage listings, manage accounts)
data/listings.json   The listings your live site publishes (optional)
README.md            This file
```

## Try it now

Double-click `index.html` to view the site (6 sample listings are built in).
Open `admin.html` and sign in with the starter account:

```
admin@a1vision.com.au  /  a1vision123
```

**Replace this starter account before you publish** (see "Admin accounts" below).

## Host on GitHub Pages

1. Upload the files to a repo (keep the `data/` folder).
2. **Settings -> Pages -> Deploy from a branch -> main + / (root) -> Save**.
3. Live in ~1 min at `https://<you>.github.io/<repo>/`. Admin at `.../admin.html`.

## Publishing listings

Static site = no server, so listings you add in admin save **in your browser** first.
To show them to everyone: in admin click **Export listings.json**, replace `data/listings.json`
in your repo with the download, and commit. Loop: *add -> Export -> commit.*

---

# Admin access & accounts

## Keeping the admin private
The admin page is **not linked** from the public site, so daily visitors won't see it.
For a bit more privacy you can rename `admin.html` to something unguessable
(e.g. `staff-7f3a91.html`) — just update the address you bookmark.

**Be clear-eyed:** on a static site this is *obscurity, not access control*. The page is still
publicly reachable by anyone who knows the URL, and the account list (below) is readable in the
page source. It's a reasonable gate for a starter site. For a **truly private** admin, use one of
the real options at the bottom.

## Provisioning staff accounts (owner)
There is **no open sign-up** — only accounts you create can sign in.

1. On the sign-in screen, click **"Owner: set up staff accounts."**
2. Enter the staff member's email and an initial password, click **Generate account line**, **Copy**.
3. Open `admin.html`, find `window.PROVISIONED_USERS = [ ... ]` (near the bottom), and paste the
   line inside the brackets. Remove the demo `admin@a1vision.com.au` line.
4. Commit `admin.html`. Give each person their email + initial password directly.

The generator stores only a salted **hash** in your code — plain passwords never go in the repo.

## Staff changing their password
After signing in, each person can set a new password under **Your account -> Change password**.

**Important limitation:** on a static site this change is saved **only in that browser** (localStorage).
It does not sync to other devices, and it cannot truly revoke the original password elsewhere — on a
fresh browser the provisioned password still works. This is fine for a starter, but it's the main
reason to move to a real backend when accounts matter.

---

# Real options (when the starter gate isn't enough)

For a genuinely private admin with real, revocable accounts and password changes that work everywhere:

- **Cloudflare Access (easiest):** put your site behind Cloudflare and protect the `/admin` path with
  a policy (email one-time-PIN or Google login). No code changes — Cloudflare blocks unauthorised
  users before the page loads. Best quick win for "private admin URL."
- **Netlify Identity:** host on Netlify (also free, also static) and use its built-in Identity +
  "Git Gateway" for real logins and an invite-only user list.
- **Supabase Auth (full solution):** real multi-user accounts, password resets, and a shared database
  so listings and logins work across all devices. In each HTML file, find the inline `Store` block
  (search `store.js — data layer`) and swap `Auth.login`, `Listings.loadForPublic`, `Listings.upsert`,
  `Listings.remove`, and the image upload to call Supabase. SQL to create the table:

  ```sql
  create table listings (
    id uuid primary key default gen_random_uuid(),
    created_at timestamptz default now(),
    title text, status text, type text, price numeric, price_text text,
    address text, suburb text, state text, postcode text,
    beds int, baths int, cars int, land text,
    description text, features text[],
    agent_name text, agent_phone text, agent_email text, images text[]
  );
  alter table listings enable row level security;
  create policy "public read" on listings for select using (true);
  create policy "admin write" on listings for all
    using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');
  ```

---

---

# Ready to host? (options)

When the site looks right, here are the realistic paths, cheapest first:

- **GitHub Pages (free)** — what this build targets. Static, fast, custom domain supported.
  Best while the soft-gate admin is acceptable. Steps are in "Host on GitHub Pages" above.
- **Cloudflare Pages (free) + Access** — host the static site on Cloudflare Pages, then use
  **Cloudflare Access** to lock the `/admin` page behind a real email/Google login. This is the
  quickest way to get a *genuinely private* admin without rewriting code.
- **Netlify (free)** — similar to GitHub Pages, with optional **Netlify Identity** for real,
  invite-only staff logins.
- **Supabase (free tier) for the backend** — combine with any of the hosts above to get real
  accounts, password resets, and a shared database so listings + logins work across all devices.
  This removes every "browser-only" limitation noted above. SQL + steps are in the section above.

A typical path: launch on GitHub Pages now -> add Cloudflare Access when you want the admin truly
private -> move to Supabase when multiple staff need shared, cross-device accounts and listings.

## Logo & colours

The A1 Vision logo is embedded directly in the files (base64), so there are no separate image
files to manage — it appears in the header, on each listing photo (a small badge), in the footer,
and as the full logo on the admin sign-in. The palette is built from the logo: navy `#16293F`
(primary) and gold `#BE9655` (accent), over a warm ivory background. These live in the `:root`
block at the top of each file as `--eucalypt` (navy/primary), `--clay` (gold/accent),
`--paper` (background) and `--ink` (text). To change the logo later, just send me a new file.

## Rebranding
Replace `A1 Vision` (and the placeholder phone/email/address in the footer of `index.html`) with your own. Colours live in the `:root` block at the top of each file: `--eucalypt` (primary), `--clay` (accent), `--paper` (background), `--ink` (text).
