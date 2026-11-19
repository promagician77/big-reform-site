# Big Reform booking desk: demo page

Static files, no build step: `index.html`, `style.css`, `app.js`, `fonts/`, `kit/`.
Deploy on Vercel; `vercel.json` sends `X-Robots-Tag: noindex, nofollow` and `robots.txt` disallows crawling. Prepared by Santiago.

## Measured

Every number comes from `results/*.json`, written by `tools/measure.mjs`, `tools/mutate.mjs`, `tools/run_tests.mjs` and `tools/site_qa.mjs`.

| What | Result |
|---|---|
| Research list | 27 public buying units under 8 parent organizations, sharing 8 web domains; all within 120 straight-line miles of downtown Dallas (farthest 98 mi); checked 2026-11-19 |
| Company import matched on web domain (HubSpot default) | 8 records, 19 rows rejected as DUPLICATE_ALTERNATE_ID; re-importing updates 8 and rejects 19 again |
| Company import matched on buying-unit ID (this kit) | 27 records, 0 rejected; re-importing updates 27 and creates 0 |
| Follow-up dates, every business-day start in 2027 (249 starts, 1,245 touches) | 0 on a weekend or federal holiday; 246 if the same steps are counted in calendar days |
| Planted kit mistakes caught by the validator | 18 of 18 |
| Planted code bugs caught by the tests | 10 of 10 |
| Tests | 14 of 14 pass |
| Kit | 20 properties, pipelines of 8 and 7 stages, 27-row companies file; validator errors: 0 |
| Page checks | 39 of 39 (Playwright and axe, desktop and 375 px) |

## Not measured

- No live HubSpot portal. Import counts come from a model of HubSpot's published matching rules (domain key, DUPLICATE_ALTERNATE_ID on repeats in one file, update on a single match, error on several), not from a real import.
- How HubSpot associates a new contact when several companies share its email domain; the kit avoids relying on it.
- Marblism's connection to HubSpot, and the client's HubSpot tier.
- Driving distances; 7 of the 27 ZIPs are city centers, not street addresses.
- Whether each office books outside speakers or buys programs. The list holds offices only: no people, no emails.
- Reply rates, bookings or revenue. Nothing has been sent.
