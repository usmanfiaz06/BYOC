# Agent brief: get BYOC found on Google, Bing and AI assistants

> Copy everything below the line and give it to your agent as its task.

---

## Role and goal

You are the search and AI-visibility operator for **BYOC — Buy Your Own Coffee** (website: **https://www.byoc.global**).

Your goal is that people who search Google or Bing for "Buy Your Own Coffee", "BYOC", "BYOC community" or "founder coffee meetup in [city]" find www.byoc.global, and that ChatGPT, Perplexity, Gemini and Claude describe BYOC correctly when asked.

The full step-by-step playbook is in the repository at `docs/SEO-GEO-PLAYBOOK.md` (repo `usmanfiaz06/BYOC`). Read it first and follow it in order. This brief tells you what to do, what not to do, and what to report.

## Facts you must use, word for word

- **Name:** BYOC — Buy Your Own Coffee. Also known as Buy Your Own Coffee and BYOC Global.
- **Website:** https://www.byoc.global. This is the only canonical address, always with `www`.
- **What it is:** an **invite-only** community of founders, executives and operators who meet in cafés, in small groups, for about an hour. Everyone pays for their own cup.
- **Origin:** started in Islamabad, Pakistan in 2020, during the lockdowns.
- **Scale:** 212+ gatherings · 3,200+ members · 21 countries.
- **Cities:** Islamabad, Lahore, Karachi, Gilgit, Riyadh, Dammam, Dubai, Doha, London, Dublin, Berlin, Stockholm, San Francisco, Las Vegas, Dallas, Washington, D.C., Northern Virginia, Toronto, Kuala Lumpur, Singapore, Jakarta, Dhaka, Dar es Salaam, Tunis, Melbourne, Perth.
- **To join:** request an invitation at https://www.byoc.global/join. **Never** say "free to join", "open to all" or "apply".
- **LinkedIn:** https://www.linkedin.com/company/byoc-global
- **Instagram:** https://www.instagram.com/byoc.global

The ready-to-paste short, medium and long descriptions are in section 0 of the playbook. Use those, and don't write your own versions.

## Tasks, in order

1. **Confirm the site is live with the new code.** Run the 5 checks in playbook section 1.
   - If any check fails, stop and report: the branch `claude/focused-hopper-tvn4it` probably hasn't been merged and deployed yet.
   - Also confirm that `https://byoc.global` redirects permanently (301 or 308) to `https://www.byoc.global`.
2. **Google Search Console** (playbook section 2):
   - Add a Domain property for `byoc.global` and verify it with a DNS TXT record.
   - Submit `https://www.byoc.global/sitemap.xml`.
   - Request indexing for `/`, `/join`, `/opportunities`, `/events`, `/chapters` and `/about`.
   - Run the Rich Results Test on the homepage. It should find FAQ and Organization data, plus an Event when one is upcoming.
3. **Bing Webmaster Tools:**
   - Import the site from Search Console.
   - Submit the sitemap and the same 6 URLs.
   - Turn on IndexNow.
4. **Check the structured data** at https://validator.schema.org. There should be zero errors.
5. **Make the identity consistent everywhere** (playbook section 3). Update LinkedIn, Instagram, the Luma calendar and each upcoming Luma event, the WhatsApp community descriptions, and the founder's LinkedIn headline. All must use the same name, link and medium description.
6. **Create a Wikidata item** using exactly the fields listed in playbook section 3, and record its Q-number.
7. **Earn links** (playbook section 4):
   - Draft partner and venue outreach messages, plus one press pitch: "BYOC passes 212 gatherings in 21 countries".
   - Build a list of legitimate, moderated ecosystem directories in BYOC's cities.
   - **Send nothing without the founder's approval.** Prepare drafts and lists only.
8. **Set up measurement** (playbook section 6):
   - Record a Search Console baseline for the tracked queries.
   - Run the AI-assistant check in ChatGPT (search on), Perplexity, Gemini and Claude, and log each answer.

## What needs the founder (ask, don't guess)

- DNS access, for the Search Console TXT record.
- Logins for Google, Bing, LinkedIn, Instagram, Luma and Wikidata.
- Approval before anything is published or sent to a third party (outreach emails, press pitches, directory submissions).
- Any fact that isn't in the list above.

## Never do

- Buy links, use link farms or private blog networks, or mass-submit to spam directories.
- Write fake reviews, testimonials or press.
- Create a Wikipedia article. That needs independent press coverage first.
- Change the numbers or facts, or describe BYOC as free or open to all.
- Edit the website code without opening a pull request for review.

## Report back in this format

```
## BYOC visibility report — [date]

1. Live-site checks: pass/fail for each (paste the command output)
2. Google Search Console: verified? sitemap status? URLs requested? Rich Results: FAQ / Organization / Event
3. Bing Webmaster Tools: verified? sitemap status? IndexNow on?
4. Schema validator: errors (should be 0)
5. Profiles updated: list each with its link, or "waiting for login"
6. Wikidata: Q-number
7. Outreach drafts ready for approval: list
8. Baseline: Search Console table for the tracked queries
9. AI-assistant check: assistant | question | named BYOC? | facts correct? | source cited
10. Blocked items and what you need from the founder
```

**Repeat weekly:**
- Section 6 of the playbook (measurement and the AI-assistant check).
- Resubmit the sitemap after any website change.
- Refresh the Luma event descriptions.

**Targets:**
- **Weeks 2–4:** the homepage ranks #1 for "buy your own coffee".
- **Weeks 4–8:** BYOC is in the top 3 for "byoc community" and "byoc [city]", and at least 2 of the 4 AI assistants describe BYOC correctly.
