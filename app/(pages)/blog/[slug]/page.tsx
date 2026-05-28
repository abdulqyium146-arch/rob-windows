import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";
import { breadcrumbSchema, faqSchema, blogPostingSchema, howToSchema } from "@/lib/schema";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQAccordion from "@/components/FAQAccordion";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
  faqs?: Array<{ question: string; answer: string }>;
  relatedLinks?: Array<{ label: string; href: string }>;
  howTo?: { description: string; steps: Array<{ name: string; text: string }> };
}

function renderContent(markdown: string): string {
  const blocks = markdown.trim().split(/\n\n+/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      const bold = (s: string) => s.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
      if (trimmed.startsWith("## ")) return `<h2>${bold(trimmed.slice(3))}</h2>`;
      if (trimmed.startsWith("### ")) return `<h3>${bold(trimmed.slice(4))}</h3>`;
      const lines = trimmed.split("\n");
      if (lines.every((l) => l.trim().startsWith("- "))) {
        const items = lines.map((l) => `<li>${bold(l.trim().slice(2))}</li>`).join("");
        return `<ul>${items}</ul>`;
      }
      if (lines.every((l) => /^\d+\./.test(l.trim()))) {
        const items = lines.map((l) => `<li>${bold(l.replace(/^\d+\.\s+/, ""))}</li>`).join("");
        return `<ol>${items}</ol>`;
      }
      return `<p>${bold(trimmed.replace(/\n/g, " "))}</p>`;
    })
    .filter(Boolean)
    .join("\n");
}

const posts: Record<string, BlogPost> = {
  "how-often-should-windows-be-cleaned-cornwall": {
    slug: "how-often-should-windows-be-cleaned-cornwall",
    title: "How Often Should Windows Be Cleaned in Cornwall?",
    description:
      "Cornwall's coastal climate means windows need more frequent cleaning than the national average. We explain why and how to determine the right schedule for your property.",
    date: "2025-04-01",
    readTime: "4 min read",
    category: "Window Cleaning",
    tags: ["window cleaning", "Cornwall", "coastal properties", "cleaning schedule"],
    content: `
Cornwall's unique coastal and maritime climate creates conditions that cause windows to become dirty faster than in most other parts of the UK. Understanding why — and how to set the right cleaning schedule — can save you money and keep your property looking its best year-round.

## Why Windows Get Dirty Faster in Cornwall

The main culprit is salt air. When sea breezes carry microscopic salt particles inland, they deposit on every surface they touch — including your windows. Salt is hygroscopic, meaning it attracts moisture, which causes streaking, hazing and eventually pitting on glass if left uncleaned.

Cornwall also experiences high rainfall, which contrary to popular belief does not clean windows. Rain carries airborne dust, pollen and pollution which bond to the glass surface. As rainwater evaporates, these contaminants are left behind as visible deposits.

Add in the algae-friendly mild, damp climate and you have the perfect conditions for green biological growth on frames and sills — especially on north and east-facing elevations.

## Recommended Cleaning Frequencies

**Coastal properties (within 1 mile of the sea):** Every 4 weeks. Properties in Newquay, Perranporth, Padstow, Falmouth and other coastal towns are directly exposed to salt-laden air and should be cleaned monthly to prevent salt etching.

**Inland rural properties:** Every 6–8 weeks. Reduced salt exposure but increased organic debris (pollen, spores, dust) from surrounding countryside means bi-monthly cleans are typically sufficient.

**Urban and town-centre properties:** Every 6 weeks. Reduced salt but higher traffic pollution means regular cleaning is still important for appearance and glass protection.

**Commercial properties:** Every 2–4 weeks. First impressions matter for businesses. Most shops, restaurants and offices in Newquay and Truro benefit from fortnightly or monthly commercial window cleaning.

## Signs Your Windows Need Cleaning

- Visible salt haze or white streaking on the glass
- Green algae growth on frames or sills
- Water spots that don't disappear after rain
- Difficulty seeing clearly through the glass in bright sunlight
- Dark deposits in the corners of frame and glass junctions

## The Cost of Neglect

Regularly cleaned windows last significantly longer than neglected ones. Salt deposits, if left, will eventually etch into the glass surface causing permanent damage that no cleaning can reverse. Algae growth in rubber seals degrades them faster, leading to draughts and water ingress.

The cost of regular window cleaning is a fraction of the cost of replacing damaged glass or seals.

## Setting Up a Regular Schedule

The easiest approach is to set up a regular cleaning round with a trusted local window cleaner. At Rob's Window Cleaning, we text you the day before every visit, clean to the same high standard every time, and you can adjust or pause your schedule whenever needed — no contract.

For most Newquay homeowners, we recommend starting with a 4–6 weekly schedule and adjusting based on how quickly your windows visibly soil between cleans.
    `,
    faqs: [
      {
        question: "How often should windows be cleaned in a coastal location like Newquay?",
        answer:
          "For coastal properties in Newquay and similar locations, we recommend window cleaning every 4 weeks. Salt air deposits build up rapidly on glass near the sea, and monthly cleaning prevents salt etching and keeps your views clear.",
      },
      {
        question: "Does rain clean windows?",
        answer:
          "No — rain does not clean windows. Rainwater carries dust, pollen and pollutants which bond to the glass. As rain evaporates, these deposits are left behind, often making windows appear dirtier than before.",
      },
      {
        question: "What happens if I don't clean windows regularly?",
        answer:
          "Salt and mineral deposits will eventually etch into the glass surface, causing permanent damage. Algae growth in seals degrades rubber faster, potentially leading to draughts and water ingress. Regular cleaning is protective maintenance.",
      },
    ],
    relatedLinks: [
      { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall" },
      { label: "Window Cleaning Newquay", href: "/window-cleaning-newquay" },
    ],
  },
  "what-is-pure-water-window-cleaning": {
    slug: "what-is-pure-water-window-cleaning",
    title: "What Is Pure Water Window Cleaning? The Complete Guide",
    description:
      "Pure water window cleaning delivers better results than traditional methods. We explain exactly how the technology works and why it's better for your windows.",
    date: "2025-03-15",
    readTime: "5 min read",
    category: "Window Cleaning",
    tags: ["pure water", "window cleaning technology", "streak-free windows"],
    content: `
Pure water window cleaning has become the industry standard for professional window cleaners across the UK — and for good reason. It delivers consistently better results than traditional methods, is safer for both cleaners and properties, and is more environmentally friendly.

## What Is Pure Water?

Ordinary tap water contains dissolved minerals — calcium, magnesium, silica and various other compounds. These minerals are what cause the white streaky residue left behind when tap water dries on glass.

Pure water has had these minerals removed through a multi-stage filtration process. The water we use in our systems is typically purified to a TDS (Total Dissolved Solids) reading of zero parts per million — meaning it contains absolutely nothing but H₂O.

## How the Purification Process Works

Professional pure water systems use a combination of filtration stages:

1. **Sediment filter** — removes particles, rust and debris from the supply water
2. **Carbon filter** — removes chlorine and organic compounds
3. **Reverse osmosis membrane** — removes up to 98% of dissolved minerals
4. **Deionisation resin** — removes the remaining dissolved solids to achieve zero TDS

The resulting water is aggressively "hungry" for dissolved minerals — which is precisely what makes it so effective for cleaning glass.

## How Pure Water Cleaning Works in Practice

The purified water is stored in a tank on our vehicle and pumped to a soft-bristle brush on the end of a telescopic pole. The brush agitates and dissolves dirt, grime and mineral deposits on the glass surface.

The pure water then rinses away everything — and as it dries, it leaves absolutely no residue. No minerals, no smears, no streaks. Just perfectly clean glass.

## Why It's Better Than Traditional Methods

Traditional window cleaning uses a squeegee and a solution of water mixed with detergent. This method works well at ground floor level but has limitations:

- Requires ladders for upper floors, creating safety risks
- Squeegee technique leaves thin lines of moisture which can attract dust
- Detergent residue can cause faster resoiling
- Access to some windows (above conservatory roofs, bay windows) is difficult

Pure water systems use poles extending to 30 feet or more, allowing us to clean second and third-floor windows safely from the ground. The zero-residue finish also means windows stay cleaner for longer between visits.

## Is Pure Water Cleaning Safe for All Windows?

Yes. Pure water is gentle on glass, frames and seals. It contains no chemicals or solvents. It is safe for UPVC, timber and aluminium frames, and for tinted and double-glazed units.

The brush head is made from soft microfibre bristles that agitate without scratching.

## Environmental Benefits

Pure water cleaning uses no chemicals — just water. The water used in the process eventually evaporates harmlessly. Our systems are designed to minimise water usage, typically using less water per clean than a traditional bucket-and-squeegee approach.
    `,
    faqs: [
      {
        question: "What is pure water window cleaning?",
        answer:
          "Pure water window cleaning uses water filtered to zero dissolved minerals. This ultra-pure water is applied to glass via a soft brush on a telescopic pole. As it dries, it leaves no residue — giving a perfectly streak-free finish without any chemicals.",
      },
      {
        question: "Does pure water window cleaning leave streaks?",
        answer:
          "No — it produces the opposite result. Because pure water contains no minerals, there is nothing to leave behind when it dries. The result is a perfectly clear, streak-free and spot-free glass surface.",
      },
      {
        question: "Is pure water cleaning safe for double glazing?",
        answer:
          "Yes. Pure water contains no chemicals or solvents and is entirely safe for all types of glazing including double-glazed units, triple glazing, tinted glass and Low-E coatings.",
      },
    ],
    relatedLinks: [
      { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall" },
      { label: "Residential Window Cleaning", href: "/residential-window-cleaning-newquay" },
    ],
    howTo: {
      description: "How to use pure water technology for streak-free window cleaning",
      steps: [
        { name: "Fill the pure water tank", text: "Fill the vehicle tank with water purified to zero TDS using sediment filter, carbon filter, reverse osmosis and deionisation resin stages." },
        { name: "Attach the water-fed pole and brush", text: "Connect the soft-bristle brush head to the telescopic pole and feed the pure water supply line through it." },
        { name: "Apply pure water to the glass", text: "Use the brush to agitate and dissolve dirt, salt and mineral deposits on the glass surface while the pure water flows." },
        { name: "Rinse thoroughly", text: "Rinse the glass and frames with pure water, flushing all loosened dirt away from the window surface." },
        { name: "Allow to dry naturally", text: "Pure water leaves zero mineral residue as it dries, producing a perfectly streak-free and spot-free finish." },
      ],
    },
  },
  "gutter-cleaning-guide-cornwall": {
    slug: "gutter-cleaning-guide-cornwall",
    title: "The Complete Guide to Gutter Cleaning in Cornwall",
    description:
      "Blocked gutters cause damp, leaks and structural damage. Our complete guide covers when to clean gutters, what's involved and how to spot the warning signs.",
    date: "2025-03-01",
    readTime: "6 min read",
    category: "Gutter Cleaning",
    tags: ["gutter cleaning", "Cornwall", "property maintenance", "damp prevention"],
    content: `
Gutters are one of the most overlooked parts of a property — until they fail. In Cornwall's wet, leaf-heavy environment, blocked gutters are one of the most common causes of damp, water damage and premature building deterioration. This guide explains everything you need to know about gutter cleaning in Cornwall.

## Why Gutters Block Faster in Cornwall

Cornwall's combination of mature trees, high rainfall and coastal debris creates particularly challenging conditions for gutters:

- **Leaf fall:** Oak, sycamore and ash trees common across Cornwall shed large volumes of leaves that compact rapidly in gutters
- **Moss and lichen:** Cornwall's damp climate encourages rapid biological growth inside and on top of gutters
- **Salt deposits:** Coastal properties accumulate salt residue that corrodes gutter joints and brackets over time
- **Storm debris:** Atlantic storms bring significant quantities of twigs, seeds and airborne debris into guttering systems

The result is gutters that can block within months of being cleared, particularly in autumn and after major storms.

## The Consequences of Blocked Gutters

Blocked or overflowing gutters are not a cosmetic problem — they cause serious structural damage:

- **Damp penetration:** Overflowing water saturates brickwork, causing internal damp patches and mould growth
- **Fascia rot:** Water sitting behind blocked gutters rots the wooden fascia boards that support them
- **Foundation damage:** Repeated water discharge near foundations can cause subsidence in severe cases
- **Soffit damage:** Water backing up under the eaves deteriorates soffits and encourages rot in roof structures
- **Staining:** Overflow tracks leave permanent black staining on rendered and painted walls

## Warning Signs Your Gutters Need Cleaning

- Water pouring over the top of gutters during rain
- Dark staining on exterior walls below the gutterline
- Plants or moss visibly growing from gutters
- Sagging sections of guttering
- Damp patches appearing on internal walls near the eaves
- Dripping from gutter joints that were previously watertight

## When to Clean Gutters in Cornwall

Most properties in Cornwall benefit from gutter cleaning **twice a year**:

**Late autumn (November–December):** After the main leaf fall. This is the most critical clean of the year — clearing accumulated organic matter before winter rains arrive.

**Spring (March–April):** To remove moss, algae and any debris accumulated through winter storms. A spring clean also allows inspection of brackets and joints before summer.

Properties near dense tree cover or in exposed coastal locations may need quarterly cleaning.

## What Professional Gutter Cleaning Involves

A professional gutter clean by Rob's Window Cleaning includes:

- Full clearance of all debris from gutters and downpipe hoppers
- Downpipe flushing to confirm clear drainage to ground level
- Gutter condition inspection — checking for cracks, sagging and failed joints
- Before and after photographs provided as standard
- Debris removed and disposed of (not left on your driveway)
- Gutter guard fitting available to slow future blockage

## DIY vs Professional Gutter Cleaning

While gutter cleaning can theoretically be done from a ladder, professional cleaning is strongly recommended for several reasons:

- **Safety:** Falls from ladders account for thousands of injuries annually in the UK. Our vacuum systems clean gutters from the ground in most cases
- **Effectiveness:** Professional vacuum systems remove compacted debris that brushing by hand leaves behind
- **Inspection:** An experienced eye spots early signs of gutter failure that untrained homeowners miss
- **Insurance:** Work carried out by an insured professional protects you in the event of any property damage

## Gutter Cleaning Costs in Cornwall

Gutter cleaning prices in Cornwall typically range from **£50 to £150** depending on:

- Property size and number of storeys
- Volume and compaction of debris
- Accessibility and gutter configuration
- Whether downpipe clearing is required

At Rob's Window Cleaning we provide free no-obligation quotes before starting any work.
    `,
    faqs: [
      {
        question: "How often should gutters be cleaned in Cornwall?",
        answer:
          "Most Cornwall properties benefit from two gutter cleans per year — late autumn after leaf fall and spring after winter storms. Properties near heavy tree cover or on the coast may need quarterly cleaning.",
      },
      {
        question: "What does professional gutter cleaning include?",
        answer:
          "A professional gutter clean includes full debris clearance, downpipe flushing, a condition inspection, and before/after photographs. At Rob's Window Cleaning, debris is fully removed and disposed of — not left on your property.",
      },
      {
        question: "Can blocked gutters cause damp inside the house?",
        answer:
          "Yes. Overflowing gutters saturate exterior brickwork which then allows moisture to penetrate through to interior walls. This is one of the most common causes of damp in Cornish properties and is entirely preventable with regular gutter maintenance.",
      },
      {
        question: "How much does gutter cleaning cost in Cornwall?",
        answer:
          "Gutter cleaning in Cornwall typically costs between £50 and £150 depending on property size, number of storeys and the volume of debris. We provide free no-obligation quotes for all properties.",
      },
    ],
    relatedLinks: [
      { label: "Gutter Cleaning Cornwall", href: "/gutter-cleaning-cornwall" },
      { label: "Gutter Cleaning Newquay", href: "/gutter-cleaning-newquay" },
    ],
  },
  "conservatory-roof-cleaning-guide": {
    slug: "conservatory-roof-cleaning-guide",
    title: "How to Clean a Conservatory Roof Safely",
    description:
      "Green algae and black streaking on conservatory roofs is a common problem in Cornwall. Learn why it happens, what not to do, and how professionals approach the cleaning.",
    date: "2025-02-15",
    readTime: "5 min read",
    category: "Conservatory",
    tags: ["conservatory cleaning", "roof algae", "Cornwall", "soft wash"],
    content: `
A green, streaky or blackened conservatory roof is one of the most common property maintenance issues across Cornwall — and one of the most frequently mishandled. This guide explains why conservatory roofs deteriorate so quickly in our climate, what you should never do, and how professional cleaning restores them safely.

## Why Conservatory Roofs Get So Dirty in Cornwall

Cornwall's maritime climate provides ideal conditions for biological growth:

- **High humidity:** Cornwall's damp air provides constant moisture for algae and lichen colonisation
- **Mild temperatures:** Year-round mild conditions prevent the frost that kills algae in colder regions
- **Salt air:** Coastal properties experience additional mineral deposition that discolours polycarbonate and glass panels
- **Shaded aspects:** Conservatories on north and east-facing aspects receive less direct sun, accelerating green algae growth

Most Cornwall conservatories develop visible green algae within 12–18 months of installation. Without treatment, lichen and black mould follow, causing permanent staining if left too long.

## Types of Conservatory Roof — Different Cleaning Requirements

Understanding your roof type determines the correct cleaning method:

**Polycarbonate panels:** The most common type. Polycarbonate is lightweight and translucent but prone to surface scratching and UV degradation. It must be cleaned with low-pressure soft-wash methods — never high-pressure washing.

**Glass panels:** More durable than polycarbonate but still sensitive to high-pressure cleaning at close range. Glass conservatory roofs respond well to pure water cleaning with specialist cleaning solutions.

**Solid tiled roofs:** Require the same approach as standard roof tiles — biocide treatment and careful low-pressure rinsing. The gutters and UPVC frames need specialist attention.

## What NOT to Do — Common Mistakes

**Never use a pressure washer on polycarbonate panels.** This is the single most damaging mistake homeowners make. High-pressure water:
- Cracks and crazes the polycarbonate surface irreversibly
- Blows water past rubber gaskets and seals, causing internal leaks
- Destroys the UV-protective coating on the panel surface
- Can void warranty on relatively new conservatories

**Never use undiluted bleach.** Neat bleach damages UPVC frames, rubber seals and surrounding garden planting. It also doesn't prevent regrowth — only specialist biocide treatments do.

**Never walk on polycarbonate panels.** They are not load-bearing and will crack under a person's weight.

## How Professional Conservatory Roof Cleaning Works

Professional conservatory roof cleaning uses a soft-wash approach:

1. **Pre-treatment:** A specialist biodegradable biocide is applied to the roof surface and allowed to dwell. This kills algae, lichen and mould at the root.

2. **Low-pressure rinsing:** After the biocide dwell period, the roof is rinsed at low pressure using pure water. This removes the dead biological material without damaging panels or seals.

3. **Frame and gutter cleaning:** UPVC frames, cills and gutters are cleaned as part of the service using UPVC-safe solutions.

4. **Post-treatment:** A residual biocide treatment is applied to slow regrowth — typically extending the time before the next clean is needed.

## How Often Should a Conservatory Roof Be Cleaned?

In Cornwall's climate, most conservatory roofs require professional cleaning **every 12–24 months**. Factors that influence frequency include:

- Proximity to trees (leaf debris and shade accelerates growth)
- Aspect (north and east-facing conservatories require more frequent cleaning)
- Proximity to the coast (salt air increases mineral deposition)
- Whether a biocide post-treatment was applied

## Cost of Conservatory Roof Cleaning in Cornwall

Conservatory roof cleaning in Cornwall typically costs between **£120 and £350**, depending on the size of the conservatory and the level of biological growth. This includes cleaning of all roof panels, gutters and UPVC frames.

Severe lichen colonisation may require a two-stage treatment — an initial biocide application followed by a return visit for full removal.
    `,
    faqs: [
      {
        question: "Can I pressure wash my polycarbonate conservatory roof?",
        answer:
          "No — pressure washing polycarbonate panels will crack the surface, destroy the UV coating and force water past seals causing internal leaks. Polycarbonate must always be cleaned using low-pressure soft-wash methods.",
      },
      {
        question: "How do you remove green algae from a conservatory roof?",
        answer:
          "Professional conservatory roof cleaning uses a biodegradable biocide applied to kill algae at the root, followed by low-pressure pure water rinsing to remove dead matter. This is safer and more effective than any DIY approach.",
      },
      {
        question: "How often does a conservatory roof need cleaning in Cornwall?",
        answer:
          "Most Cornwall conservatories need professional cleaning every 12–24 months depending on location, aspect and tree cover. Biocide post-treatment can extend the interval between cleans.",
      },
      {
        question: "How much does conservatory roof cleaning cost?",
        answer:
          "Conservatory roof cleaning in Cornwall typically costs between £120 and £350 including panels, gutters and UPVC frames. We provide free no-obligation quotes for all conservatory sizes.",
      },
    ],
    relatedLinks: [
      { label: "Conservatory Roof Cleaning Cornwall", href: "/conservatory-roof-cleaning-cornwall" },
      { label: "Conservatory Cleaning Newquay", href: "/conservatory-roof-cleaning-newquay" },
    ],
    howTo: {
      description: "How to clean a conservatory roof safely using professional soft-wash methods",
      steps: [
        { name: "Apply biodegradable biocide", text: "Apply a specialist biodegradable biocide to the entire roof surface. Allow it to dwell for the recommended period to kill algae, mould and lichen at the root." },
        { name: "Low-pressure pure water rinse", text: "Rinse the roof at low pressure using pure water to remove the dead biological material without damaging panels or gasket seals." },
        { name: "Clean UPVC frames and gutters", text: "Clean all UPVC frames, sills and gutters using UPVC-safe cleaning solutions as part of the service." },
        { name: "Apply post-treatment biocide", text: "Apply a residual biocide treatment to slow future regrowth, extending the time before the next professional clean is needed." },
      ],
    },
  },
  "window-cleaning-newquay-seasonal-guide": {
    slug: "window-cleaning-newquay-seasonal-guide",
    title: "Seasonal Window Cleaning Guide for Newquay Homeowners",
    description:
      "Each season brings different challenges for windows in Newquay. Our seasonal guide helps you know exactly when and why to book professional window cleaning.",
    date: "2025-01-20",
    readTime: "4 min read",
    category: "Local Guide",
    tags: ["Newquay", "seasonal cleaning", "window cleaning", "Cornwall weather"],
    content: `
Newquay's position on the Atlantic coast means its weather is dramatically more challenging for windows than most of the UK. Each season brings distinct conditions that affect how quickly windows become dirty and what type of cleaning is most effective. This seasonal guide is written specifically for Newquay homeowners and property owners.

## Spring (March–May): Pollen and Post-Winter Recovery

Spring is the season of renewal — and of pollen. Cornwall's mild climate means flowering begins earlier than most of the UK, and the combination of tree, grass and coastal plant pollen creates a yellow-green film on windows from late February through May.

Spring is also when algae that has been dormant through winter begins actively growing again on frames, sills and north-facing glass.

**Spring priority:** A thorough clean in March or April removes winter grime, salt accumulation and early pollen — giving your property a fresh start before summer. Pay particular attention to north-facing windows and frames where winter algae growth is heaviest.

## Summer (June–August): Salt Spray and Tourism Season

Summer in Newquay brings high visitor numbers, and for property owners — especially holiday let owners — kerb appeal is directly tied to revenue. First impressions of clean, bright windows contribute meaningfully to guest satisfaction and review scores.

Summer also brings the strongest salt-laden onshore winds. Properties along Fistral, Towan, Porth and other Newquay beaches receive heavy salt spray deposits during summer southwesterly and westerly winds. These deposits dry rapidly in summer sun, etching into glass if not removed.

**Summer priority:** Monthly window cleaning is recommended for properties within half a mile of the coast. Holiday let owners should schedule cleans to coincide with changeover days for maximum impact.

## Autumn (September–November): Leaf Debris and Atlantic Storms

September to November is the most challenging season for property maintenance in Newquay. Atlantic storm systems arrive from the southwest, bringing heavy rain, wind and significant debris. Leaf fall from surrounding trees fills gutters rapidly and deposits organic matter across windows, frames and sills.

The combination of autumn moisture and decreasing daylight accelerates algae and mould growth. This is the season when windows left uncleaned will visibly green up on frames within weeks.

**Autumn priority:** A clean in late September or October removes summer salt and pollen accumulation. A second clean in November or early December addresses leaf debris and prepares your property for winter. This is also the most important time for gutter cleaning.

## Winter (December–February): Storm Residue and Salt Damage

Newquay winters are mild but extremely wet and windy. Atlantic fronts deliver intense rainfall and strong winds that drive salt-laden spray far inland. Salt deposits are particularly problematic in winter because lower temperatures slow evaporation — meaning salt sits on glass surfaces longer before drying.

Despite the weather, winter window cleaning is entirely possible using pure water systems, which work in cold and wet conditions. Many customers prefer to maintain their schedule year-round to prevent salt etching.

**Winter priority:** Even a single professional clean in January or February removes damaging salt accumulation and keeps your property looking maintained through the darker months. This is particularly important for properties marketed to winter holiday let guests or those with sea views to protect.

## Building Your Annual Schedule

For most Newquay properties we recommend the following minimum schedule:

- **Coastal homes:** Every 4–6 weeks year-round
- **Inland Newquay properties:** Every 6–8 weeks
- **Holiday lets:** Before each rental season and between major changeovers
- **Commercial properties:** Monthly or bi-monthly

At Rob's Window Cleaning, we manage your schedule and send a reminder text the day before every visit — so you never have to think about it.
    `,
    faqs: [
      {
        question: "When is the best time of year to clean windows in Newquay?",
        answer:
          "Spring and early summer are ideal for a thorough clean after winter salt and grime accumulation. But for coastal properties in Newquay, we recommend cleaning every 4–6 weeks year-round to prevent salt etching and algae build-up.",
      },
      {
        question: "Does summer make windows dirtier in Newquay?",
        answer:
          "Yes. Summer onshore winds bring heavy salt spray deposits from the Atlantic. Combined with summer pollen, coastal properties can experience rapid window soiling in July and August. Monthly cleaning is recommended during peak summer.",
      },
      {
        question: "Should I get my windows cleaned in winter in Newquay?",
        answer:
          "Yes. Winter salt deposits are particularly damaging because cold temperatures slow evaporation, leaving salt on glass longer. Pure water cleaning works effectively in cold weather. A winter clean prevents etching damage and keeps your property well-maintained year-round.",
      },
    ],
    relatedLinks: [
      { label: "Window Cleaning Newquay", href: "/window-cleaning-newquay" },
      { label: "Window Cleaning Cornwall", href: "/window-cleaning-cornwall" },
    ],
  },
  "holiday-let-window-cleaning-cornwall": {
    slug: "holiday-let-window-cleaning-cornwall",
    title: "Window Cleaning for Holiday Lets in Cornwall: Everything Owners Need to Know",
    description:
      "Holiday let owners in Cornwall face unique cleaning challenges. We explain how to set up a reliable cleaning schedule that works around guest changeovers.",
    date: "2025-01-05",
    readTime: "5 min read",
    category: "Commercial",
    tags: ["holiday let", "Cornwall", "Airbnb", "commercial window cleaning"],
    content: `
Cornwall is one of the UK's most popular holiday destinations, and the county has one of the highest concentrations of holiday let properties in England. For holiday let owners, property presentation directly affects review scores, repeat bookings and revenue. Clean windows are one of the most visible signals of a well-maintained property — and one of the most frequently commented on in guest reviews.

## Why Holiday Lets Need More Frequent Window Cleaning

Holiday let properties have different cleaning requirements to residential homes for several reasons:

**Higher turnover means higher scrutiny.** Guests arriving fresh from home notice dirt and grime that regular occupants stop seeing. Streaky or green-framed windows are frequently mentioned in negative reviews.

**Coastal Cornwall's salt environment.** Most Cornwall holiday properties are within a few miles of the coast. Salt air deposits on windows between changeovers — sometimes within days of a professional clean. Properties in Newquay, Padstow, Falmouth and Perranporth are particularly exposed.

**Gap between housekeeper visits and window cleaning.** Many holiday let owners use housekeeping services for internal cleaning but don't schedule regular external window cleaning. The result is interiors that look pristine but exteriors that let the property down on arrival.

**Sea view properties.** For properties marketed with sea views — which command premium rates across Cornwall — dirty or hazed windows directly undermine the main selling point. A guest paying £2,000 a week for a sea view expects to actually see the sea.

## Setting Up a Window Cleaning Schedule for Holiday Lets

The most effective approach is a **regular round** rather than reactive cleaning:

**Option 1: Fixed date monthly round.** Works well for properties with consistent occupancy. We visit on the same day each month regardless of occupancy, keeping windows consistently clean.

**Option 2: Changeover-coordinated cleaning.** We coordinate with your changeover schedule to clean windows before guest arrivals — particularly before long stays or peak season bookings. Requires flexible scheduling.

**Option 3: Seasonal deep clean plus monthly maintenance.** A full external clean at the start of each rental season (Easter and July are key for Cornwall), with monthly maintenance cleans between.

For most Cornwall holiday lets, we recommend a minimum of monthly window cleaning from April through October, with bi-monthly cleans November through March.

## What to Include in a Holiday Let Window Clean

A professional holiday let window clean typically covers:

- All external window glass — frames, sills and reveals included
- Patio doors and bi-fold door glass
- Conservatory or orangery glass
- External door panels and sidelights
- Any glazed lanterns or roof lights

For changeover cleans, we can also include:

- Fascia and soffit wipe-down
- Conservatory roof clean (by separate arrangement)
- Gutter inspection and clearance

## Working with a Local Window Cleaner for Your Holiday Let

Choosing a local, reliable window cleaner removes the need for you to manage scheduling remotely. Key questions to ask:

- Can they work around changeover dates with short notice?
- Do they send confirmation and reminders before each visit?
- Can they access the property without you being present (key safe)?
- Are they insured for commercial work?
- Do they provide regular invoicing for accounting purposes?

At Rob's Window Cleaning, we work with dozens of holiday let owners across Newquay, Padstow, Perranporth, Falmouth and the wider Cornwall area. We offer key-safe access, next-day confirmation messages, and flexible scheduling that fits around your booking calendar.

## The Return on Investment

Regular professional window cleaning for a holiday let is genuinely commercial maintenance, not cosmetic luxury. Properties with consistently clean exteriors:

- Receive better arrival-day photographs shared on social media by guests
- Generate fewer negative comments about presentation in reviews
- Command higher repeat booking rates from returning guests
- Maintain higher nightly rates as kerb appeal and photography hold up over time

The cost of monthly professional window cleaning across a full season is typically recovered from a single additional booking generated by improved reviews.
    `,
    faqs: [
      {
        question: "How often should holiday let windows be cleaned in Cornwall?",
        answer:
          "We recommend monthly window cleaning for Cornwall holiday lets from April through October (peak season), with bi-monthly cleans over winter. Properties on the coast or with sea views benefit from more frequent cleaning due to salt air.",
      },
      {
        question: "Can you clean windows between guest changeovers?",
        answer:
          "Yes. We work with many Cornwall holiday let owners to coordinate window cleaning with their changeover schedule. With key-safe access, we can clean windows between guests without you needing to be present.",
      },
      {
        question: "Do dirty windows affect holiday let reviews?",
        answer:
          "Yes — property presentation including window cleanliness is frequently mentioned in holiday let reviews. Guests notice dirty or streaky windows on arrival, and this impacts overall presentation scores on Airbnb, Sykes and similar platforms.",
      },
      {
        question: "Do you clean sea view holiday let properties in Newquay?",
        answer:
          "Yes. We cover sea view properties across Newquay, Perranporth, Padstow and the wider Cornwall coast. Coastal properties require more frequent cleaning due to salt spray — we recommend monthly cleans for the best presentation.",
      },
    ],
    relatedLinks: [
      { label: "Commercial Window Cleaning Newquay", href: "/commercial-window-cleaning-newquay" },
      { label: "Residential Window Cleaning Newquay", href: "/residential-window-cleaning-newquay" },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${siteConfig.url}/blog/${slug}` },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${siteConfig.url}/blog/${slug}`,
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
      images: [
        {
          url: `${siteConfig.url}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${siteConfig.url}/images/og-image.jpg`],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema(post)) }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
        />
      )}
      {post.howTo && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              howToSchema(post.title, post.howTo.description, `${siteConfig.url}/blog/${slug}`, post.howTo.steps)
            ),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: siteConfig.url },
              { name: "Blog", url: `${siteConfig.url}/blog` },
              { name: post.title, url: `${siteConfig.url}/blog/${slug}` },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 to-brand-900 pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: post.category }]}
            className="mb-6 text-brand-300/60"
          />
          <div className="max-w-3xl">
            <div className="badge badge-brand mb-4">{post.category}</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 text-balance">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-brand-300/60">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                {post.description}
              </p>
              <div
                className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-strong:text-slate-800 prose-ul:my-4 prose-ol:my-4"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-100">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* FAQs */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion faqs={post.faqs} />
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-2xl border border-brand-100 bg-brand-50 p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Need Professional Cleaning in Cornwall?
                </h3>
                <p className="text-sm text-slate-600 mb-5">
                  Get a free, no-obligation quote from Rob&apos;s Window Cleaning — Newquay&apos;s
                  trusted local specialists.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  <Link href="/free-quote" className="btn-primary text-sm">
                    Get a Free Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  {post.relatedLinks?.map((link) => (
                    <Link key={link.href} href={link.href} className="btn-secondary text-sm">
                      {link.label}
                    </Link>
                  ))}
                  {!post.relatedLinks && (
                    <Link href="/window-cleaning-cornwall" className="btn-secondary text-sm">
                      Window Cleaning Cornwall
                    </Link>
                  )}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="sticky top-24">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">
                    About Rob&apos;s Window Cleaning
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    Newquay&apos;s trusted window cleaning and exterior property maintenance
                    specialists. Serving Cornwall for 10+ years.
                  </p>
                  <Link
                    href="/free-quote"
                    className="btn-primary w-full justify-center text-sm"
                  >
                    Get a Free Quote
                  </Link>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <h3 className="text-sm font-semibold text-slate-900 mb-4">Related Posts</h3>
                  <div className="space-y-3">
                    {Object.values(posts)
                      .filter((p) => p.slug !== slug)
                      .slice(0, 3)
                      .map((p) => (
                        <Link
                          key={p.slug}
                          href={`/blog/${p.slug}`}
                          className="block text-sm text-slate-700 hover:text-brand-600 transition-colors leading-snug"
                        >
                          {p.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Back to blog */}
      <div className="py-8 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    </>
  );
}
