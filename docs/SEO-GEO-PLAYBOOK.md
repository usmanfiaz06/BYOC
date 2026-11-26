# BYOC — SEO & GEO Playbook (for an agent)

**Goal:** when someone searches Google/Bing for "BYOC", "Buy Your Own Coffee", or "founder coffee meetup in [city]", or asks ChatGPT / Perplexity / Gemini / Claude about BYOC, they find **www.byoc.global** and a correct description of BYOC.

**What's already done in the code** (branch `claude/focused-hopper-tvn4it`): page titles, descriptions, canonical URLs on `www.byoc.global`, `robots.txt` (open to search and AI crawlers), `sitemap.xml`, structured data (Organization, WebSite, FAQPage, Event), a visible FAQ, `llms.txt`, and a share image. **This playbook covers everything that has to happen outside the code.**

Work through the phases in order. Tick each box only when you have verified it, not when you have attempted it.

---

## 0. The facts (use these exact words everywhere)

Inconsistent facts confuse search engines and AI assistants. Copy from here; never paraphrase the numbers.

| Field | Value |
|---|---|
| Name | BYOC |
| Full name | BYOC — Buy Your Own Coffee |
| Also known as | Buy Your Own Coffee · BYOC Global |
| Website | https://www.byoc.global |
| Founded | 2020, Islamabad, Pakistan |
| What it is | A global community of founders, executives and operators who meet in cafés, in small groups, for about an hour. Everyone pays for their own cup. |
| Membership | **Invite-only.** Request an invitation at https://www.byoc.global/join |
| Scale | 212+ gatherings · 3,200+ members · 21 countries |
| Cities | Islamabad, Lahore, Karachi, Riyadh, Dubai, Doha, London, Dublin, Berlin, San Francisco, Dallas, Toronto, Kuala Lumpur, Singapore, Jakarta, Dhaka, Dar es Salaam |
| LinkedIn | https://www.linkedin.com/company/byoc-global |
| Instagram | https://www.instagram.com/byoc.global |
| Contact | usman.fiaz@byoc.global |

**Descriptions to paste:**

- **Short (≤160 characters):** BYOC (Buy Your Own Coffee): invite-only coffee meetups for founders, executives and operators. 212+ gatherings in 21 countries since 2020.
- **Medium (bios, ~300 characters):** BYOC — Buy Your Own Coffee. An invite-only community of founders, executives and operators who meet in cafés, in small groups, for an hour. Everyone pays for their own cup. Started in Islamabad in 2020; 212+ gatherings in 21 countries. www.byoc.global
- **Long (about sections):** BYOC (Buy Your Own Coffee) began in Islamabad in 2020, during the lockdowns, as a coffee between a few people who missed sitting across from someone. It is now an invite-only community of 3,200+ founders, executives and operators in 21 countries, from Riyadh and Dubai to Dublin, Singapore and San Francisco. Gatherings are one hour, in a café, in a small group. Everyone buys their own cup, brings a question rather than a pitch, and follows up within a week. Request an invitation at www.byoc.global/join.

> When the numbers change, update `byoc-website/src/data/cities.ts` (`stats`) **and** this table, then update every profile below. One number, everywhere.

---

## 1. Pre-flight: confirm the new site is live

The code changes only count once deployed.

- [ ] Branch `claude/focused-hopper-tvn4it` is merged to `main` and Vercel has deployed it.
- [ ] Each of these checks passes:

```bash
curl -s https://www.byoc.global/robots.txt | grep -i sitemap
```
```bash
curl -s https://www.byoc.global/sitemap.xml | grep -c "<loc>"
```
```bash
curl -s https://www.byoc.global/ | grep -o "<title>[^<]*"
```
```bash
curl -s https://www.byoc.global/ | grep -c "application/ld+json"
```
```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.byoc.global/llms.txt
```

**Expected:** the sitemap line is present; 6 `<loc>` entries; the title starts with "BYOC — Buy Your Own Coffee"; 3 or more JSON-LD blocks; `llms.txt` returns 200.

- [ ] `https://byoc.global` permanently redirects (301/308) to `https://www.byoc.global`. Check with `curl -sI https://byoc.global`. If it's a 302/307, set the apex-to-www redirect to permanent in Vercel → Project → Settings → Domains.

---

## 2. Search engines (day 1)

### Google Search Console
1. Go to https://search.google.com/search-console and **add a Domain property** for `byoc.global`. A domain property covers www, the apex domain and https.
2. Verify with the **DNS TXT record** it gives you, added at the domain registrar (or in Vercel DNS if Vercel manages the domain). Wait for verification to go green.
3. **Sitemaps** → submit `https://www.byoc.global/sitemap.xml`. Status must read "Success".
4. **URL Inspection** → for each URL below, click "Request indexing":
   - `https://www.byoc.global/`
   - `https://www.byoc.global/join`
   - `https://www.byoc.global/opportunities`
   - `https://www.byoc.global/events`
   - `https://www.byoc.global/chapters`
   - `https://www.byoc.global/about`
5. Run the homepage through https://search.google.com/test/rich-results. It must detect **FAQ**, **Organization**, and **Event** (when an event is upcoming) with no errors.

- [ ] Property verified · [ ] sitemap Success · [ ] 6 URLs requested · [ ] rich results valid

### Bing Webmaster Tools
Bing's index also feeds ChatGPT search, Copilot and DuckDuckGo.

1. Go to https://www.bing.com/webmasters → **Import from Google Search Console**. This is the fastest route; otherwise verify by DNS.
2. Submit the sitemap. Use **URL Submission** for the same 6 URLs.
3. Optional: enable **IndexNow** (Settings → IndexNow) so future changes get picked up quickly.

- [ ] Verified · [ ] sitemap submitted · [ ] URLs submitted

### Schema check
- [ ] Paste the homepage URL into https://validator.schema.org and confirm there are no errors.

---

## 3. Consistent identity everywhere BYOC exists

Search engines and AI assistants decide "what BYOC is" by cross-checking profiles. Every profile below should carry the **same name, website and medium description** from section 0.

| Profile | What to set | Done |
|---|---|---|
| LinkedIn company page | Website = https://www.byoc.global; Tagline = Short description; About = Long description; Founded = 2020; HQ = Islamabad | [ ] |
| Instagram @byoc.global | Name field "BYOC — Buy Your Own Coffee"; bio = Medium description; link = https://www.byoc.global | [ ] |
| Luma calendar | Calendar name "BYOC — Buy Your Own Coffee"; description = Medium; website link set | [ ] |
| Every Luma event | First line: "BYOC (Buy Your Own Coffee) · invite-only · www.byoc.global"; title format: "BYOC [City] — [Month Year]" | [ ] |
| WhatsApp community / groups | Description includes the website | [ ] |
| Founder's personal LinkedIn | "Founder, BYOC — Buy Your Own Coffee" with a link to the site | [ ] |
| Any X / Threads / YouTube / TikTok | Same name, bio, link (create them only if they will be used) | [ ] |

### Wikidata (high value for AI assistants)
Create an item at https://www.wikidata.org/wiki/Special:NewItem:
- **Label:** BYOC · **Description:** "community of founders and executives meeting over coffee" · **Also known as:** Buy Your Own Coffee
- **Statements:**
  - instance of (P31) → organization
  - inception (P571) → 2020
  - headquarters location (P159) → Islamabad
  - official website (P856) → https://www.byoc.global
  - LinkedIn company ID (P4264) → byoc-global
  - Instagram username (P2003) → byoc.global
- Add a reference (URL) to each statement where possible: the website or a press article.

- [ ] Wikidata item created and its QID recorded here: ________

> Do **not** create a Wikipedia article yourself. That needs independent press coverage first (section 4), or it will be deleted.

---

## 4. Earn links and mentions (weeks 1–8)

Links from real, relevant sites are the strongest ranking signal, and press mentions are what AI assistants quote. Anchor text should be **"Buy Your Own Coffee (BYOC)"** or **"BYOC"**, linking to https://www.byoc.global.

**Partners and venues (ask directly; these are the easiest wins):**
- [ ] Ecosystem partners that co-hosted or supported gatherings (for example Monsha'at in Riyadh): a link from their event or news page.
- [ ] Cafés and venues that hosted: a mention on their site or social with a link.
- [ ] Accelerators, VCs and universities in each city whose members attend: a link from community or ecosystem pages.

**Ecosystem directories (submit a listing; use the section 0 copy):**
- [ ] Regional startup-ecosystem directories and "communities" lists for Pakistan, the GCC, Ireland, Singapore and Malaysia. Search "[city] startup community directory", and list BYOC only where the site is legitimate and moderated.
- [ ] Global community and event directories that allow free, editorial listings.

**Press (the biggest lever for GEO):**
- [ ] One short news story: "BYOC passes 212 gatherings in 21 countries". Pitch it to 3–5 tech and business outlets in Pakistan, the GCC and Ireland. Include the facts table, 2–3 photos and a founder quote.
- [ ] Founder interviews and podcasts about "why people gather" (the origin story: lockdown, Islamabad, 2020).
- [ ] After each gathering, a LinkedIn post by the host and 2–3 attendees with a link to the site.

**Never:** buy links, use link farms or private blog networks, post fake reviews, or mass-submit to spam directories. These can get the site removed from search.

---

## 5. Content that keeps working (ongoing)

These are code or content tasks in the repo (`byoc-website/`).

- [ ] **Gathering recaps:** one page per gathering: city, date, number of people, 3 topics discussed (no names without consent), one photo, a "what happened next" line. Recaps rank for "[city] founder meetup" and give AI assistants specifics to cite.
- [ ] **City pages:** `/chapters/[city]`, each with the facts for that city, a local "what people here are carrying" paragraph, its next coffee, and its own title and description. Add each to `src/app/sitemap.ts`.
- [ ] **Opportunities refresh:** monthly. Remove expired items and add new ones from the sources noted in `src/data/opportunities.ts`. Fresh, useful pages earn links.
- [ ] **Keep `llms.txt` and the FAQ** (`src/lib/site.ts`) in step with the facts table.
- [ ] After any content change, resubmit the sitemap in Search Console and Bing.

---

## 6. Measure (weekly, 10 minutes)

**Search Console → Performance:** track impressions, clicks and position for these queries:
- `buy your own coffee`
- `byoc`
- `byoc global`
- `byoc community`
- `byoc riyadh`, `byoc islamabad`, `byoc dublin` (and the other cities)
- `founder coffee meetup [city]`

**AI assistant check:** ask each of ChatGPT (with search on), Perplexity, Gemini and Claude:
1. "What is BYOC, Buy Your Own Coffee?"
2. "Is there a founders' coffee meetup in Riyadh?" (rotate through the cities)
3. "How do I join BYOC?"

Record in a log for each question:
- date
- assistant
- whether it named BYOC
- whether the facts were correct (invite-only, 2020, Islamabad, 21 countries)
- which source it cited

If an answer is wrong, find the source it cited and fix or update that source. That is how AI answers get corrected.

**Targets:**
- **Week 2–4:** the homepage is indexed and is the #1 result for "buy your own coffee".
- **Week 4–8:** in the top 3 for "byoc community" and "byoc [city]", and at least 2 of the 4 AI assistants describe BYOC correctly.

---

## 7. Hand-back checklist (report these to the founder)

- [ ] Section 1 checks: all pass (paste the curl output)
- [ ] Search Console and Bing verified, sitemaps "Success"
- [ ] Rich Results Test: FAQ + Organization valid (screenshot)
- [ ] Profiles updated (list each, with link)
- [ ] Wikidata QID
- [ ] Links earned this period (list the URLs)
- [ ] Search Console query table for the tracked queries
- [ ] AI assistant log for this week
- [ ] Anything blocked, and why
