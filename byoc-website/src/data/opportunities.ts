// Live opportunities, researched 26 Nov 2026. Every item links to its original source.
// `verified: false` means the listing was found but its open status should be re-checked.
// Refresh monthly (see README notes: Greenhouse / Lever / Ashby public feeds, UK & Irish public appointments).

export type OpportunityCategory = 'roles' | 'founders' | 'executives';

export interface Opportunity {
  title: string;
  org: string;
  location: string;
  summary: string;
  when: string;
  url: string;
  verified: boolean;
  category: OpportunityCategory;
  kind: string;
}

export const OPPORTUNITIES_UPDATED = '26 Nov 2026';

export const opportunities: Opportunity[] = [
  {
    "title": "Head of ASEAN, Applied AI",
    "org": "Anthropic",
    "location": "Singapore",
    "summary": "Leads Anthropic's Applied AI function across ASEAN markets.",
    "when": "Posted 2026-11-03",
    "url": "https://job-boards.greenhouse.io/anthropic/jobs/5424312008",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "VP, Customer Success and Support",
    "org": "Xendit",
    "location": "Singapore",
    "summary": "Payments scale-up hiring a VP to run customer success and support.",
    "when": "Posted 2026-10-17",
    "url": "https://job-boards.greenhouse.io/xendit/jobs/8034243003",
    "verified": true,
    "category": "roles",
    "kind": "VP"
  },
  {
    "title": "Product Director",
    "org": "Xendit",
    "location": "Jakarta / Kuala Lumpur / Singapore",
    "summary": "Product leadership role at Southeast Asian payments infrastructure company.",
    "when": "Posted 2026-11-16",
    "url": "https://job-boards.greenhouse.io/xendit/jobs/8204645003",
    "verified": true,
    "category": "roles",
    "kind": "Director"
  },
  {
    "title": "Head of AI Startups, EMEA",
    "org": "Stripe",
    "location": "Dublin / London / Berlin / Paris / Stockholm",
    "summary": "Leads Stripe's AI-startup segment across Europe, Middle East and Africa.",
    "when": "Posted 2026-10-23",
    "url": "https://stripe.com/jobs/search?gh_jid=8299649",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "Head of AML/CTF - Ireland",
    "org": "Stripe",
    "location": "Dublin, Ireland",
    "summary": "Leads anti-money-laundering and counter-terrorist-financing compliance for Stripe's Irish entity.",
    "when": "Posted 2026-11-20",
    "url": "https://stripe.com/jobs/search?gh_jid=8394657",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "Head of AMER Startups (AI Sales)",
    "org": "Stripe",
    "location": "San Francisco, USA",
    "summary": "Leads Stripe's sales to AI startups across the Americas.",
    "when": "Posted 2026-10-28",
    "url": "https://stripe.com/jobs/search?gh_jid=8267847",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "Director, Revenue Assurance & Ireland Country Lead",
    "org": "Databricks",
    "location": "Ireland (Dublin)",
    "summary": "Combines revenue-assurance leadership with country-lead responsibility for Databricks Ireland.",
    "when": "Posted 2026-09-24",
    "url": "https://databricks.com/company/careers/open-positions/job?gh_jid=8788172002",
    "verified": true,
    "category": "roles",
    "kind": "Director / Country Lead"
  },
  {
    "title": "Enterprise Sales Director, Retail",
    "org": "Databricks",
    "location": "London, UK",
    "summary": "Leads enterprise sales into UK retail accounts for the data and AI platform.",
    "when": "Posted 2026-10-26",
    "url": "https://databricks.com/company/careers/open-positions/job?gh_jid=8902290002",
    "verified": true,
    "category": "roles",
    "kind": "Director"
  },
  {
    "title": "Managing Director, Front Office (Geschaeftsleiter Markt) - SumUp Bank",
    "org": "SumUp",
    "location": "Berlin, Germany",
    "summary": "Board-level managing director for the market-facing side of SumUp's German bank.",
    "when": "Posted 2026-11-25",
    "url": "https://sumup.com/careers/positions/8960256002?gh_jid=8960256002",
    "verified": true,
    "category": "roles",
    "kind": "C-level / Managing Director"
  },
  {
    "title": "Head of Pricing & Monetisation",
    "org": "SumUp",
    "location": "London, UK (also Berlin)",
    "summary": "Owns pricing and monetisation strategy at the European merchant-payments fintech.",
    "when": "Posted 2026-10-13",
    "url": "https://sumup.com/careers/positions/8885084002?gh_jid=8885084002",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "Director, Revenue",
    "org": "Intercom",
    "location": "San Francisco, USA",
    "summary": "Revenue leadership role at the AI customer-service software company.",
    "when": "Posted 2026-11-18",
    "url": "https://job-boards.greenhouse.io/intercom/jobs/8375740",
    "verified": true,
    "category": "roles",
    "kind": "Director"
  },
  {
    "title": "VP of Sales - Public Sector",
    "org": "Cohere",
    "location": "Toronto, Canada (also London)",
    "summary": "Leads public-sector sales for the Toronto-founded enterprise AI company.",
    "when": "Posted 2026-10-22",
    "url": "https://jobs.ashbyhq.com/cohere/49a6485c-c449-4e07-8001-cafc97a39a13",
    "verified": true,
    "category": "roles",
    "kind": "VP"
  },
  {
    "title": "VP of Services, Customer Success & Support",
    "org": "Cohere",
    "location": "Toronto, Canada / San Francisco / New York",
    "summary": "Leads services, customer success and support at the enterprise AI company.",
    "when": "Posted 2026-11-06",
    "url": "https://jobs.ashbyhq.com/cohere/068e9b49-e22b-493c-824f-0cc52840c80c",
    "verified": true,
    "category": "roles",
    "kind": "VP"
  },
  {
    "title": "Head of Sales, Defense & Intelligence",
    "org": "Cohere",
    "location": "Toronto / London / Berlin",
    "summary": "Leads sales of enterprise AI to defence and intelligence customers.",
    "when": "Posted 2026-11-04",
    "url": "https://jobs.ashbyhq.com/cohere/334b2a07-0c6a-4764-b4a8-c8bf68513cde",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "Government Affairs Lead - Middle East",
    "org": "Cohere",
    "location": "Dubai, UAE or Riyadh, Saudi Arabia",
    "summary": "Leads government relations and AI policy engagement for Cohere across the Middle East.",
    "when": "Posted 2026-08-14",
    "url": "https://jobs.ashbyhq.com/cohere/2dc8b505-128a-4bc8-b8c1-7084e7d26530",
    "verified": true,
    "category": "roles",
    "kind": "Lead (senior)"
  },
  {
    "title": "Global Head of Sanctions",
    "org": "Binance",
    "location": "Singapore or UAE",
    "summary": "Global leadership of the sanctions-compliance programme at the crypto exchange.",
    "when": "Posted 2026-11-18",
    "url": "https://job-boards.eu.greenhouse.io/binance/jobs/5040761101",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "Compliance Head of Business Advisory",
    "org": "Binance",
    "location": "Singapore or UAE",
    "summary": "Leads compliance advisory to business lines at the crypto exchange.",
    "when": "Posted 2026-11-25",
    "url": "https://job-boards.eu.greenhouse.io/binance/jobs/5034453101",
    "verified": true,
    "category": "roles",
    "kind": "Head of"
  },
  {
    "title": "Growth Lead, Pakistan",
    "org": "Binance",
    "location": "Pakistan",
    "summary": "Country-level growth lead for Binance's Pakistan market.",
    "when": "Posted 2026-10-14",
    "url": "https://job-boards.eu.greenhouse.io/binance/jobs/5002463101",
    "verified": true,
    "category": "roles",
    "kind": "Lead (country)"
  },
  {
    "title": "Communications Lead, MENAT+",
    "org": "Spotify",
    "location": "Dubai, UAE",
    "summary": "Leads Spotify communications across Middle East, North Africa, Turkiye and Pakistan; reports to SAMEA comms head.",
    "when": "Posted 2026-08-24",
    "url": "https://jobs.lever.co/spotify/c152d042-642d-4a48-862b-8be8d6cdc819",
    "verified": true,
    "category": "roles",
    "kind": "Lead (regional)"
  },
  {
    "title": "VP, Real Estate Investments",
    "org": "Undisclosed private equity firm (via Michael Page)",
    "location": "Riyadh, Saudi Arabia",
    "summary": "Leads real-estate deals and fund oversight at a private equity firm.",
    "when": "Ref JN-112026 (likely Nov 2026); no closing date",
    "url": "https://www.michaelpage.ae/job-detail/vp-real-estate-investments/ref/jn-112026-7150879",
    "verified": true,
    "category": "roles",
    "kind": "VP"
  },
  {
    "title": "Sales Director (Retail)",
    "org": "Undisclosed Saudi retailer (via Michael Page)",
    "location": "Riyadh, Saudi Arabia",
    "summary": "Leads sales strategy and multi-branch operations for a Saudi retailer.",
    "when": "Ref JN-092026 (likely Sep 2026); no closing date",
    "url": "https://www.michaelpage.ae/job-detail/sales-director-retail/ref/jn-092026-7103808",
    "verified": true,
    "category": "roles",
    "kind": "Director"
  },
  {
    "title": "Marketing & Communications Director",
    "org": "Undisclosed Qatari holding group (via Michael Page)",
    "location": "Doha, Qatar",
    "summary": "Leads corporate messaging, media relations and reputation for a diversified Qatari group.",
    "when": "Ref JN-102026 (likely Oct 2026); no closing date",
    "url": "https://www.michaelpage.ae/job-detail/marketing-communications-director-conglomorate-qatar/ref/jn-102026-7131746",
    "verified": true,
    "category": "roles",
    "kind": "Director"
  },
  {
    "title": "Country Manager - Tanzania",
    "org": "Undisclosed technical solutions provider (via Michael Page Africa)",
    "location": "Tanzania (Dar es Salaam), covering East Africa",
    "summary": "Leads East African growth and sales team for an industrial solutions provider.",
    "when": "Ref JN-072026 (likely Jul 2026); no closing date",
    "url": "https://www.michaelpageafrica.com/job-detail/country-manager-tanzania/ref/jn-072026-7069303",
    "verified": true,
    "category": "roles",
    "kind": "Country Manager / GM"
  },
  {
    "title": "Director of Demand Generation",
    "org": "FieldPulse",
    "location": "Dallas, TX, USA",
    "summary": "Marketing leadership role at Dallas-based field-service software startup.",
    "when": "Listed 2026-11-26 (post date not shown)",
    "url": "https://ats.rippling.com/fieldpulse/jobs/39c19c23-b40e-426e-b81c-af9c47524bfe",
    "verified": true,
    "category": "roles",
    "kind": "Director"
  },
  {
    "title": "Field CTO",
    "org": "GitLab",
    "location": "Remote - Singapore or Australia",
    "summary": "Customer-facing CTO role for GitLab's Asia-Pacific region, remote.",
    "when": "Posted 2026-10-19",
    "url": "https://job-boards.greenhouse.io/gitlab/jobs/8884627002",
    "verified": true,
    "category": "roles",
    "kind": "C-level (field)"
  },
  {
    "title": "GSMA Innovation Fund for AI-Enabled Financial Health",
    "org": "GSMA (funded by UK FCDO)",
    "location": "Pakistan, Bangladesh, Tanzania, Indonesia, Malaysia and wider Africa / South & SE Asia",
    "summary": "Grants of GBP 100k-250k plus venture support for AI startups improving financial health.",
    "when": "Deadline 2026-12-17",
    "url": "https://digitalpakistan.pk/?p=23355",
    "verified": true,
    "category": "founders",
    "kind": "Grant"
  },
  {
    "title": "Founder Institute - Riyadh Spring 2027",
    "org": "Founder Institute",
    "location": "Riyadh, Saudi Arabia",
    "summary": "In-person idea-stage programme, 21 Mar-31 May 2027; USD 499 fee charged after acceptance.",
    "when": "Deadline 2026-12-29",
    "url": "https://fi.co/apply/15420",
    "verified": true,
    "category": "founders",
    "kind": "Pre-accelerator"
  },
  {
    "title": "Founder Institute - Silicon Valley Spring 2027",
    "org": "Founder Institute",
    "location": "San Francisco Bay Area, USA",
    "summary": "Idea-stage programme 17 Mar-3 Jun 2027; fee rises after next deadline.",
    "when": "Next deadline 2026-12-08",
    "url": "https://fi.co/apply",
    "verified": true,
    "category": "founders",
    "kind": "Pre-accelerator"
  },
  {
    "title": "Disruptive Technologies Innovation Fund (DTIF) Call 8",
    "org": "Dept. of Enterprise / Enterprise Ireland",
    "location": "Ireland",
    "summary": "EUR 40M fund; consortia of 3+ Irish partners incl. an SME; minimum EUR 1.5M request.",
    "when": "Deadline 2027-02-03 15:00 IST",
    "url": "https://enterprise.gov.ie/en/news-and-events/department-news/2026/october/minister-burke-seeks-new-applications-for-40-million-disruptive-technologies-funding.html",
    "verified": true,
    "category": "founders",
    "kind": "Grant (consortium)"
  },
  {
    "title": "Hub71 Access Programme - Cohort 21",
    "org": "Hub71 (Abu Dhabi)",
    "location": "Abu Dhabi, UAE (global applicants)",
    "summary": "12-month programme from Sep 2027; reported AED 250k incentives plus AED 250k SAFE; relocation expected.",
    "when": "Deadline Feb 2027 (per aggregators)",
    "url": "https://www.hub71.com/program/access-programme",
    "verified": false,
    "category": "founders",
    "kind": "Accelerator / incentive programme"
  },
  {
    "title": "LEAP 2027 Startup Programme / Rocket Fuel",
    "org": "LEAP (Tahaluf / MCIT)",
    "location": "Riyadh, Saudi Arabia",
    "summary": "Startup pitch competition for LEAP exhibitors; recent editions offered a USD 1M prize pool.",
    "when": "Pre-registration for 2027 (dates unconfirmed)",
    "url": "https://onegiantleap.com/startup",
    "verified": false,
    "category": "founders",
    "kind": "Competition / exhibition"
  },
  {
    "title": "EIC Accelerator",
    "org": "European Innovation Council (EU)",
    "location": "EU incl. Ireland and Germany",
    "summary": "Grant below EUR 2.5M plus EIC Fund equity; short applications accepted year-round.",
    "when": "Next full cut-off reported 2027-01-20 (2027 Work Programme pending)",
    "url": "https://eic.ec.europa.eu/eic-accelerator_en",
    "verified": false,
    "category": "founders",
    "kind": "Grant + equity"
  },
  {
    "title": "Startup SG Tech - Proof of Concept / Proof of Value",
    "org": "Enterprise Singapore",
    "location": "Singapore",
    "summary": "Up to SGD 250k (POC) or SGD 500k (POV) for deep-tech startups with 30% local shareholding.",
    "when": "Deadline 2026-12-31 (per aggregator)",
    "url": "https://www.enterprisesg.gov.sg/financial-support/startup-sg-tech",
    "verified": false,
    "category": "founders",
    "kind": "Grant"
  },
  {
    "title": "Antler Residency - Toronto and US (SF/NYC/Austin)",
    "org": "Antler",
    "location": "Toronto, Canada; San Francisco, USA",
    "summary": "Founder residency with pre-seed investment; Toronto and US run rolling intake.",
    "when": "Rolling intake",
    "url": "https://antler.co/cohort-start-dates",
    "verified": true,
    "category": "founders",
    "kind": "Pre-seed residency / investment"
  },
  {
    "title": "Y Combinator - Winter 2027 (late applications)",
    "org": "Y Combinator",
    "location": "San Francisco, USA (global)",
    "summary": "On-time W27 deadline passed 2 Nov; YC still reviews late applications.",
    "when": "On-time deadline passed; late apps accepted",
    "url": "https://www.ycombinator.com/apply",
    "verified": true,
    "category": "founders",
    "kind": "Accelerator"
  },
  {
    "title": "Web Summit Qatar 2027 - Startup Programme",
    "org": "Web Summit / Qatar GCO",
    "location": "Doha, Qatar",
    "summary": "Exhibit and pitch at Web Summit Qatar, 31 Jan-3 Feb 2027, DECC Doha.",
    "when": "Event 2027-01-31; deadline not stated",
    "url": "https://qatar.websummit.com/startups",
    "verified": true,
    "category": "founders",
    "kind": "Event startup programme"
  },
  {
    "title": "MIT DesignX Dubai",
    "org": "MIT DesignX with DTEC",
    "location": "Dubai, UAE",
    "summary": "Jan-Mar 2027 programme for early-stage MEA built-environment startups; no funding, no equity taken.",
    "when": "Programme Jan-Mar 2027; deadline not stated",
    "url": "https://designx.mit.edu/programs/dubai/",
    "verified": false,
    "category": "founders",
    "kind": "Accelerator (non-equity)"
  },
  {
    "title": "Cradle Elevate",
    "org": "Cradle Fund (MOSTI)",
    "location": "Malaysia (Kuala Lumpur)",
    "summary": "Up to RM2M for validated startups moving to growth; RM10M total.",
    "when": "Announced Apr 2026; deadline not stated",
    "url": "https://www.thestar.com.my/news/nation/2026/04/29/start-ups-can-now-access-up-to-rm2mil-in-funding",
    "verified": false,
    "category": "founders",
    "kind": "Equity funding"
  },
  {
    "title": "Kauffman Fellows - Class 32 (KF32)",
    "org": "Kauffman Fellows",
    "location": "Global (modules start NYC, Jun 2027)",
    "summary": "Two-year fellowship for venture investors; USD 80k tuition.",
    "when": "Final deadline 2027-01-11",
    "url": "https://www.kauffmanfellows.org/program/application-details",
    "verified": true,
    "category": "executives",
    "kind": "Fellowship (VC/investor)"
  },
  {
    "title": "Non-Executive Director (2 vacancies)",
    "org": "Office of Rail and Road (UK)",
    "location": "London, UK",
    "summary": "UK regulator NED; about 4 days/month; GBP 20,900 a year.",
    "when": "Closes 2026-12-09 23:59",
    "url": "https://apply-for-public-appointment.service.gov.uk/roles/9714",
    "verified": true,
    "category": "executives",
    "kind": "Board seat / NED"
  },
  {
    "title": "Chair, Adaptation Committee",
    "org": "Climate Change Committee (UK)",
    "location": "London, UK",
    "summary": "Chairs UK statutory climate-adaptation advisory committee; 5 days/month, GBP 1,000/day.",
    "when": "Closes 2026-12-11 12:00",
    "url": "https://apply-for-public-appointment.service.gov.uk/roles/9724",
    "verified": true,
    "category": "executives",
    "kind": "Chair"
  },
  {
    "title": "Non-Executive Director (Generalist)",
    "org": "Defence Safety Authority (UK MOD)",
    "location": "London, UK",
    "summary": "NED role at UK defence safety regulator; 20 days a year, GBP 750/day.",
    "when": "Closes 2026-12-22 10:00",
    "url": "https://apply-for-public-appointment.service.gov.uk/roles/9712",
    "verified": true,
    "category": "executives",
    "kind": "Board seat / NED"
  },
  {
    "title": "Board Member - Dublin Bus (Bus Atha Cliath)",
    "org": "Minister for Transport (Ireland), via Public Appointments Service",
    "location": "Dublin, Ireland",
    "summary": "Appointments to the board of Dublin's state-owned bus operator.",
    "when": "Closes 2026-12-15",
    "url": "https://publicjobs.tal.net/vx/lang-en-GB/mobile-0/appcentre-1/brand-6/candidate/so/pm/1/pl/14/opp/11238-Appointments-to-the-Board-of-Bus-%C3%81tha-Cliath-Dublin-Bus/en-GB",
    "verified": true,
    "category": "executives",
    "kind": "Board seat / state board"
  },
  {
    "title": "Ordinary Member - Board of Tailte Eireann",
    "org": "Dept. of Housing (Ireland), via Public Appointments Service",
    "location": "Ireland",
    "summary": "Board member for Ireland's national property registration, valuation and mapping body.",
    "when": "Closes 2026-12-10",
    "url": "https://publicjobs.tal.net/vx/lang-en-GB/mobile-0/appcentre-1/brand-6/candidate/so/pm/1/pl/14/opp/11038-Appointment-as-Ordinary-Member-to-the-Board-of-Tailte-%C3%89ireann/en-GB",
    "verified": true,
    "category": "executives",
    "kind": "Board seat / state board"
  },
  {
    "title": "Chairperson and Ordinary Member - Advisory Board, Office of the Planning Regulator",
    "org": "Minister for Housing (Ireland), via Public Appointments Service",
    "location": "Ireland",
    "summary": "Chair and member roles on the planning regulator's advisory board.",
    "when": "Closes 2026-12-09",
    "url": "https://publicjobs.tal.net/vx/lang-en-GB/mobile-0/appcentre-1/brand-6/candidate/so/pm/1/pl/14/opp/10978-Appointment-as-Chairperson-and-Ordinary-Member-to-the-Advisory-Board-of-the-Office-of-the-Planning-Regulator/en-GB",
    "verified": true,
    "category": "executives",
    "kind": "Chair / board seat"
  },
  {
    "title": "VC & Angel Investment Bootcamp - Cohort 02",
    "org": "Angels Den Academy",
    "location": "London, UK",
    "summary": "One-day in-person angel/VC bootcamp with masterclasses and investment-committee exercise; 50 places.",
    "when": "Event 2027-01-22; applications open",
    "url": "https://www.angelsden.com/academy",
    "verified": true,
    "category": "executives",
    "kind": "Angel investor programme"
  },
  {
    "title": "Sanabil Angel Investing Unlocked by 500 Global",
    "org": "500 Global with Sanabil Investments (PIF)",
    "location": "Riyadh, Saudi Arabia",
    "summary": "Training for emerging MENA angels with 1-3 years and 3-10 deals; USD 2,000 tuition.",
    "when": "Last cohort Jul 2026; waitlist for next",
    "url": "https://500.co/venture-education/aiu/mena",
    "verified": false,
    "category": "executives",
    "kind": "Angel investor programme"
  },
  {
    "title": "SGLN Fellowship 2027",
    "org": "Singapore Global Leaders Network (HCLI, supported by EDB)",
    "location": "Singapore",
    "summary": "Cohort programme for Singaporean leaders taking regional/global roles, Jan-Oct 2027.",
    "when": "Cohort Jan-Oct 2027; deadline not confirmed",
    "url": "https://www.sgln.hcli.org/wp-content/uploads/2026/07/SGLN-Fellowship-2027.pdf",
    "verified": false,
    "category": "executives",
    "kind": "Executive fellowship"
  }
];
