export interface Service {
  slug: string;
  name: string;
  description: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceRange: string;
  commonIssues: string[];
  relatedServices: string[];
  image: string;
  seasonalNotes: string;
  vanRecommendation: string;
}

export const services: Service[] = [
  {
    slug: 'man-and-van-sheffield',
    name: 'Local Man and Van',
    description: 'Same-day and next-day man and van hire across Sheffield and South Yorkshire. Ideal for studio flats, single-room moves, quick clearances, and anything that doesn\'t need a full removals team.',
    heroHeading: 'Man and Van Sheffield — Same-Day & Next-Day Availability',
    metaTitle: 'Man and Van Sheffield | Same-Day Booking Available',
    metaDescription: 'Same-day and next-day man and van hire across Sheffield. Fixed-price quotes, fully insured, 7 days a week. LWB Sprinter and Luton vans for all Sheffield areas.',
    features: [
      'Same-day and next-day booking across Sheffield',
      'Fixed-price quotes with no hourly meter surprises',
      'Choice of LWB, Sprinter, or Luton van — right size for Sheffield\'s hilly streets',
      'Fully insured — goods-in-transit and public liability',
      'Available 7 days a week including bank holidays',
      'Single items to full studio flat moves covered',
    ],
    process: [
      { step: 'Tell us what you need moved', description: 'Send us a quick message or photo of your items. Include your collection and delivery postcodes and mention any access issues — steep gradient, tight terrace entry, tram stop nearby — so we can give you an accurate fixed price.' },
      { step: 'Get your fixed-price quote', description: 'We\'ll confirm the price, van size, and availability — usually within the hour. No obligation, no hidden fees.' },
      { step: 'We arrive and load up', description: 'Our driver arrives at your door with the right van for the job. We load carefully, securing items with blankets and straps. For gradient streets in Crookes or Crosspool, we account for extra loading time.' },
      { step: 'Delivered and unloaded', description: 'We transport your belongings to the destination and unload them exactly where you need them. Job done.' },
    ],
    faqs: [
      {
        question: 'How quickly can you send a man and van in Sheffield?',
        answer: 'Most local Sheffield jobs can be booked for the same day or next day. Contact us before midday and there\'s a good chance we can get a van to you that afternoon. Weekend slots fill faster, so booking a day ahead is advisable. Call us on 020 3318 4720 for urgent same-day requests.',
      },
      {
        question: 'What van size do you recommend for Sheffield\'s hilly streets?',
        answer: 'In Sheffield\'s gradient areas like Crosspool, Crookes, and Walkley, we generally recommend an LWB or Sprinter rather than a full Luton. The Luton is heavier and takes longer to load on inclines — the Sprinter gives you plenty of space and is easier to manoeuvre on steep or narrow streets. We\'ll advise based on your postcode.',
      },
      {
        question: 'Do I need to help with loading and unloading?',
        answer: 'Not unless you want to. Our driver handles all loading and unloading as standard. If you prefer to load yourself to keep costs down, we offer a self-loading rate. Just let us know when booking.',
      },
      {
        question: 'Is a man and van cheaper than a full removals service in Sheffield?',
        answer: 'For smaller moves — studio flats, single rooms, a few items — a man and van is almost always the most cost-effective option in Sheffield. You\'re only paying for the van and time you actually need. Full removals services make more sense for 2-bed properties and larger.',
      },
      {
        question: 'What areas in Sheffield do you cover?',
        answer: 'We cover all of Sheffield including City Centre (S1), Hillsborough, Ecclesall (S11), Crosspool, Crookes, Walkley (S6/S10), Nether Edge (S7), Woodseats (S8), Gleadless (S12), Beighton, Mosborough (S20), Stocksbridge (S36), and Rotherham. Long-distance moves to anywhere in the UK are also available.',
      },
    ],
    priceRange: 'From £120 (fixed-price) · From £25/h (hourly)',
    commonIssues: [
      'Underestimating load size and needing a larger van',
      'Narrow entries and ginnels on Sheffield terraces',
      'Supertram stop loading restrictions in city centre',
      'Steep gradient streets in Crosspool and Crookes requiring extra loading time',
    ],
    relatedServices: ['house-removals-sheffield', 'furniture-delivery-sheffield', 'clearance-collections-sheffield'],
    image: '/images/services/man-and-van-sheffield.webp',
    seasonalNotes: 'Busiest periods are June/July (University of Sheffield move-out) and September (both UoS and Hallam return). Sheffield Wednesday home matches cause parking chaos in Hillsborough — plan around those dates. Winter months are quieter with more same-day availability.',
    vanRecommendation: 'LWB van for most single-item and studio flat jobs. Sprinter recommended for terraced houses and Sheffield\'s steeper streets. Luton for 2+ bedroom house moves on flatter roads.',
  },
  {
    slug: 'house-removals-sheffield',
    name: 'House Removals',
    description: 'Full house removal service for 1, 2, 3, and 4+ bedroom properties across Sheffield and South Yorkshire. We handle the loading, transport, and unloading — carefully and on time.',
    heroHeading: 'House Removals Sheffield — Fixed-Price & Fully Insured',
    metaTitle: 'House Removals Sheffield | Fixed-Price Quotes',
    metaDescription: 'House removals in Sheffield for 1-4 bedroom properties. Fixed-price quotes, fully insured, two-man teams available. Covers all Sheffield areas and South Yorkshire.',
    features: [
      'Fixed-price quotes for 1 to 4+ bedroom Sheffield properties',
      'Two-man teams for larger moves',
      'Furniture disassembly and reassembly included on request',
      'Goods-in-transit insurance on all moves',
      'Available 7 days a week',
      'Experienced with Sheffield terraces, semis, and modern estates',
    ],
    process: [
      { step: 'Book your removal survey', description: 'Tell us the number of rooms, property type, and both postcodes. For terraces in S6/S10/S7, let us know about stair width and access — it helps us choose the right van and team.' },
      { step: 'Receive your fixed price', description: 'We quote a fixed price for the whole job — not hourly. You know the cost before we arrive.' },
      { step: 'Moving day — we handle everything', description: 'Our team arrives on time, loads methodically with furniture protection, and secures the van. We take special care with staircases in Sheffield\'s Victorian terraces.' },
      { step: 'Unloaded and placed exactly where you want', description: 'At your new home, we unload carefully and place items in whichever room you specify. We can reassemble beds and flat-pack furniture too.' },
    ],
    faqs: [
      {
        question: 'How do you handle narrow staircases in Sheffield terraces?',
        answer: 'Sheffield\'s Victorian terrace stock — particularly in S6 (Hillsborough, Walkley), S10 (Crookes), and S7 (Nether Edge) — often has tight stairwells with sharp turns. Our team is experienced in manoeuvring furniture through these. We use furniture blankets and strap systems, and we\'ll advise in advance if any item is likely to need disassembly.',
      },
      {
        question: 'Do you move between any Sheffield postcode?',
        answer: 'Yes — we cover all Sheffield postcodes from S1 to S36, plus Rotherham and surrounding South Yorkshire. We also do long-distance moves to any UK destination, including the popular Sheffield-to-London and Sheffield-to-Manchester routes.',
      },
      {
        question: 'What\'s included in your house removal service?',
        answer: 'Loading and unloading, furniture blankets and strapping, full goods-in-transit insurance, and placement of items in the correct rooms at your destination. Disassembly and reassembly of beds, wardrobes, and flat-pack furniture is available on request.',
      },
      {
        question: 'How far in advance do I need to book house removals in Sheffield?',
        answer: 'For standard moves we recommend booking at least one week ahead, especially for weekend dates. During the summer student move season (June to August) and September, we get very busy. January and February tend to have more flexibility. Call 020 3318 4720 to check availability.',
      },
      {
        question: 'Are house removal prices in Sheffield fixed or hourly?',
        answer: 'We offer fixed-price quotes for house removals — you know the total cost before we arrive and there\'s no meter running. For smaller, less predictable jobs (single item collections, quick flat clears) we also offer hourly rates. We\'ll recommend the right option when you describe your move.',
      },
    ],
    priceRange: 'From £250 (1-bed) · From £450 (2-3 bed) · From £650 (4+ bed)',
    commonIssues: [
      'Tight stairwells in Sheffield Victorian terraces requiring disassembly',
      'Limited parking on terraced streets in S6/S10/S7',
      'Hill gradients adding time to load in Crosspool, Crookes, Walkley',
      'Large furniture that won\'t fit through narrow terrace doorways',
    ],
    relatedServices: ['man-and-van-sheffield', 'packing-service-sheffield', 'storage-sheffield'],
    image: '/images/services/house-removals-sheffield.webp',
    seasonalNotes: 'Peak season is May through August. Moves to larger properties in Dore, Ecclesall, and Fulwood peak in spring and early summer as families look to settle before the new school year.',
    vanRecommendation: 'Sprinter for 1-2 bed properties. Luton van for 2-3 bed. Two-man team with Luton for 3+ bed or properties with difficult access.',
  },
  {
    slug: 'long-distance-removals-sheffield',
    name: 'Long-Distance Removals',
    description: 'Long-distance removals from Sheffield to anywhere in the UK. We handle Sheffield to London (M1), Sheffield to Manchester (A57/M67), Sheffield to Nottingham, Birmingham, and beyond.',
    heroHeading: 'Long-Distance Removals from Sheffield — UK-Wide Service',
    metaTitle: 'Long-Distance Removals Sheffield | UK-Wide from £450',
    metaDescription: 'Long-distance removals from Sheffield to London, Manchester, Nottingham, Birmingham and anywhere in the UK. Fixed-price quotes, fully insured, M1 corridor specialists.',
    features: [
      'Sheffield to London via M1 — fixed price from £450',
      'Sheffield to Manchester via trans-Pennine A57/M67',
      'All UK destinations covered — one fixed price, no per-mile meter',
      'Two-man teams for larger loads',
      'Overnight storage available for cross-country moves',
      'Fully insured with goods-in-transit cover on all journeys',
    ],
    process: [
      { step: 'Describe your route and load', description: 'Tell us your collection postcode in Sheffield (or surrounding area) and your destination. Include number of rooms and any access notes at both ends.' },
      { step: 'Receive a fixed route price', description: 'We price the whole journey as a fixed cost. No per-mile charges, no fuel surcharges.' },
      { step: 'Moving day — early start', description: 'Long-distance moves typically start early (7-8am) from Sheffield to ensure daytime delivery. We load carefully and secure all items for the motorway journey.' },
      { step: 'Delivered and unloaded at your destination', description: 'We unload and place items in the correct rooms. For Sheffield to London moves, we\'re familiar with Congestion Charge zones, ULEZ, and parking logistics in central London.' },
    ],
    faqs: [
      {
        question: 'What does a Sheffield to London removal cost?',
        answer: 'Sheffield to London (central London, SW/SE/E/N postcodes) is approximately 170-180 miles via the M1. Our fixed prices start from £450 for a van-load of a studio flat and go up to £850-£1,100 for a 2-3 bedroom house. The Congestion Charge applies on weekdays for vehicles over 3.5 tonnes — we factor this into your quote.',
      },
      {
        question: 'How long does a Sheffield to Manchester removal take?',
        answer: 'Sheffield to Manchester is 35-40 miles via the M67 motorway and typically takes about 45-60 minutes driving time. Via the A57 Snake Pass, it\'s more scenic but can take 75-90 minutes depending on conditions. We recommend M67 for large vans unless you specifically want the Peak District route in summer.',
      },
      {
        question: 'Can you do Sheffield to London in one day?',
        answer: 'Yes — Sheffield to London is comfortably a single-day job for most moves. We depart Sheffield by 7-8am and can reach London within 2.5-3 hours on the M1, allowing time for a full morning unload. For very large moves (4+ bed), we sometimes recommend an early Friday evening load in Sheffield and a Saturday morning London delivery.',
      },
      {
        question: 'Is storage available for long-distance moves from Sheffield?',
        answer: 'Yes. We have access to secure storage near the M1 Tinsley/Meadowhall junction, which is useful for part-load moves or where completion dates don\'t align. We can hold your items for days or weeks at a competitive daily rate.',
      },
      {
        question: 'Do you do removals from Sheffield to Edinburgh or Glasgow?',
        answer: 'Yes — we cover all UK destinations including Edinburgh and Glasgow. Sheffield to Edinburgh is approximately 215 miles via the A1/M1, typically 3.5-4 hours driving. For these longer routes we usually start very early (6-7am) and may require an overnight stop depending on the load. Call 020 3318 4720 for a quote.',
      },
    ],
    priceRange: 'From £350 (Sheffield to Nottingham) · From £450 (Sheffield to London/Manchester)',
    commonIssues: [
      'London Congestion Charge and ULEZ applying to larger vehicles',
      'Manchester city centre parking restrictions on arrival',
      'Completion date mismatches requiring short-term storage',
      'Underestimating packing time before the early morning long-distance start',
    ],
    relatedServices: ['house-removals-sheffield', 'packing-service-sheffield', 'storage-sheffield'],
    image: '/images/services/long-distance-removals-sheffield.webp',
    seasonalNotes: 'Sheffield to London and Sheffield to Manchester are popular year-round. Peak demand is May-September for graduate relocations. January moves from Sheffield are common for NHS and university appointments starting in the new year.',
    vanRecommendation: 'Sprinter for studio/1-bed long-distance. Luton with two-man team for 2-bed+. For Sheffield to London, book at least 2 weeks in advance.',
  },
  {
    slug: 'student-moves-sheffield',
    name: 'Student Moves',
    description: 'Affordable student moving service covering both University of Sheffield (S10 corridor) and Sheffield Hallam (city centre/S1). End-of-term, start-of-term, and mid-year moves handled with care.',
    heroHeading: 'Student Moves Sheffield — UoS & Hallam, Fixed Prices',
    metaTitle: 'Student Removals Sheffield | UoS & Hallam Moves from £80',
    metaDescription: 'Affordable student moves in Sheffield. Covering University of Sheffield (Crookes/Broomhill) and Sheffield Hallam (City Centre). Fixed prices, same-day booking available.',
    features: [
      'Specialist in University of Sheffield moves: Crookes, Broomhill, Walkley (S10)',
      'Sheffield Hallam moves: City Centre halls and surrounding S1/S2 areas',
      'End-of-year and start-of-year bookings taken months in advance',
      'LWB and Sprinter vans — right-sized for student house loads',
      'Fixed prices from £80 for single-room moves',
      'Available 7 days a week during peak term changeover periods',
    ],
    process: [
      { step: 'Book early — peak weeks fill fast', description: 'UoS move-out peaks in late June/early July. Hallam has a more varied calendar including January semester starts. Contact us as soon as you know your move dates.' },
      { step: 'Tell us your halls or house location', description: 'Let us know whether you\'re moving from UoS halls (Ranmoor, Halifax Hall, Endcliffe) or Hallam halls (Collegiate Campus, Furnival House), or a private student house in Crookes, Walkley, or Ecclesall Road.' },
      { step: 'We load quickly and carefully', description: 'Student moves are typically lighter than full house removals. We work efficiently to keep costs down. Let us know if you have any bulky items like a wardrobe or bike.' },
      { step: 'Dropped at your new address — or home for the summer', description: 'We deliver to your new house, another Sheffield address, or storage. Many students use us to move belongings to parents\' homes between academic years.' },
    ],
    faqs: [
      {
        question: 'What\'s the difference between moving near UoS vs Sheffield Hallam?',
        answer: 'University of Sheffield students are mainly concentrated in S10 (Crookes, Broomhill, Ranmoor) and S6 (Walkley). These streets are hilly with tight terrace access — LWB or Sprinter vans work best. Sheffield Hallam students are mostly based in S1 (City Centre halls), S2, and Ecclesall Road — city centre access requires navigating tram stops and loading restrictions but generally flatter terrain.',
      },
      {
        question: 'When is the busiest period for student moves in Sheffield?',
        answer: 'University of Sheffield academic year ends late June/early July — that\'s when we get the highest student move-out volume in Crookes, Broomhill, and Walkley. Sheffield Hallam\'s calendar is more varied: some courses end in May, others run to August. September is busy for both universities as students return. January is a secondary peak for Hallam semester 2 starts.',
      },
      {
        question: 'Can you move me from university halls to a private house in Sheffield?',
        answer: 'Absolutely — this is one of our most common bookings. Many UoS students move from Endcliffe or Ranmoor halls in their first year into private houses in Crookes or Walkley for second year. We know the access arrangements for the main halls sites and can pick up from residence car parks on move-out day.',
      },
      {
        question: 'How much does a student move in Sheffield cost?',
        answer: 'A single-room student move within Sheffield (one person\'s belongings) typically costs £80-£150 fixed price depending on distance and items. A full student house move (3-5 people moving together, 1 van) ranges from £200-£350. Call 020 3318 4720 for a quick quote based on your specific situation.',
      },
      {
        question: 'Can you move me from Sheffield to my parents\' home in another city?',
        answer: 'Yes — this is very common at end of term. We can move your belongings from your Sheffield student house to your family home anywhere in the UK. Popular routes include Sheffield to London, Sheffield to Manchester, and Sheffield to Birmingham. These are priced as standard long-distance moves.',
      },
    ],
    priceRange: 'From £80 (single room) · From £200 (full student house share)',
    commonIssues: [
      'Booking too late for June/July peak — book 4-6 weeks ahead',
      'Tight narrow access in UoS corridor streets (Crookes, Walkley)',
      'City centre tram restrictions near Hallam halls on loading',
      'Bulky items (bikes, large monitors) not flagged when booking',
    ],
    relatedServices: ['man-and-van-sheffield', 'packing-service-sheffield', 'storage-sheffield'],
    image: '/images/services/student-moves-sheffield.webp',
    seasonalNotes: 'Two peak periods: June/July for UoS move-out and September for return moves. Hallam has an additional January peak. Book at least 4-6 weeks ahead for end-of-year moves. Mid-term moves (November, February) are usually available with 48-72 hours notice.',
    vanRecommendation: 'LWB for one person\'s belongings. Sprinter for shared student house moves. Choose the LWB for S10 gradient streets to keep costs manageable.',
  },
  {
    slug: 'ikea-delivery-sheffield',
    name: 'IKEA Delivery',
    description: 'IKEA Meadowhall collection and delivery across Sheffield and South Yorkshire. We collect click-and-collect orders from IKEA Meadowhall and deliver to your home — including up flights of stairs and into position.',
    heroHeading: 'IKEA Meadowhall Delivery & Assembly Sheffield',
    metaTitle: 'IKEA Delivery Sheffield | Meadowhall Collection & Assembly',
    metaDescription: 'IKEA Meadowhall delivery and assembly across Sheffield. Click-and-collect collection, delivery to any room, and flat-pack assembly available. Fixed-price quotes.',
    features: [
      'Collection from IKEA Meadowhall (4 miles from Sheffield city centre)',
      'Delivery to any Sheffield or South Yorkshire address',
      'Carry upstairs, into position, or into any room',
      'Flat-pack assembly available on request',
      'Fixed price per delivery — no per-item charge',
      'Available 7 days a week',
    ],
    process: [
      { step: 'Place your IKEA order as click-and-collect', description: 'Choose "click and collect" at IKEA Meadowhall. You\'ll get a collection reference. Book us at the same time so the timing aligns.' },
      { step: 'We collect from IKEA Meadowhall', description: 'We pick up your order from the IKEA Meadowhall warehouse using your collection reference. No need for you to travel to Meadowhall.' },
      { step: 'Delivery to your Sheffield address', description: 'We drive from Meadowhall (M1 J34, easy access) to your Sheffield home and carry items to the room you specify — including up stairs in terraced houses.' },
      { step: 'Assembly (optional)', description: 'If you\'ve added assembly to your booking, we assemble your IKEA furniture on the spot. KALLAX shelves, PAX wardrobes, HEMNES beds — we know them all.' },
    ],
    faqs: [
      {
        question: 'How far is IKEA Meadowhall from Sheffield city centre?',
        answer: 'IKEA Meadowhall is approximately 4 miles from Sheffield city centre, off junction 34 of the M1. It\'s also accessible via the Sheffield Supertram to Meadowhall interchange. From there to most Sheffield postcodes is typically 15-25 minutes driving, depending on traffic and destination.',
      },
      {
        question: 'Can you collect IKEA Meadowhall orders without me being there?',
        answer: 'Yes — we collect on your behalf using your click-and-collect order reference. You don\'t need to go to Meadowhall at all. We\'ll ask for your order number and preferred collection time window, pick it up, and deliver directly to your door.',
      },
      {
        question: 'Do you assemble IKEA furniture after delivery?',
        answer: 'Yes, assembly is available as an add-on. We charge based on the number and complexity of items. Common assemblies include PAX wardrobes, KALLAX units, HEMNES beds, BESTA units, and BILLY bookcases. Let us know what you\'ve ordered when you book so we can allocate time.',
      },
      {
        question: 'What if my IKEA order doesn\'t fit in the van?',
        answer: 'For large IKEA orders, we\'ll advise you on van size when you share your order list. A single large flat-pack wardrobe (e.g. PAX 250cm) needs an LWB or Sprinter at minimum. We carry most standard IKEA furniture comfortably. Very large orders (full kitchen sets, multiple room orders) may require a Luton van — we\'ll confirm this in advance.',
      },
      {
        question: 'Can you also take away old furniture when you deliver from IKEA?',
        answer: 'Yes — if you\'re replacing old furniture, we can take it away for disposal at the same time as delivering your IKEA order. This saves a separate trip. Old items must be disassembled and ready to go. There is a small additional charge for disposal.',
      },
    ],
    priceRange: 'From £60 (small order, nearby Sheffield postcode) · From £90 (large order with assembly)',
    commonIssues: [
      'IKEA click-and-collect slots not aligned with delivery booking',
      'Items not fitting through narrow terrace doorways — wardrobe legs may need removing',
      'Assembly taking longer than expected for complex PAX or METOD systems',
      'Parking at destination in S10/S6 terraces requires planning',
    ],
    relatedServices: ['furniture-delivery-sheffield', 'man-and-van-sheffield', 'clearance-collections-sheffield'],
    image: '/images/services/ikea-delivery-sheffield.webp',
    seasonalNotes: 'IKEA Meadowhall is busiest on Saturdays and Bank Holidays — click-and-collect slots book up fast. For student move-ins in September, book IKEA collection at least a week in advance. January sales generate high delivery demand.',
    vanRecommendation: 'LWB for small to medium orders. Sprinter or Luton for full room sets or multiple large items.',
  },
  {
    slug: 'furniture-delivery-sheffield',
    name: 'Furniture Delivery',
    description: 'Single item and furniture delivery across Sheffield. Perfect for Facebook Marketplace collections, eBay pickups, Gumtree finds, and marketplace hauls — carried to any room including up stairs.',
    heroHeading: 'Single Item & Furniture Delivery Sheffield',
    metaTitle: 'Furniture Delivery Sheffield | Single Items & Marketplace Pickups',
    metaDescription: 'Furniture delivery in Sheffield for Facebook Marketplace, eBay, Gumtree, and retail collections. Fixed-price, fully insured, carried upstairs. Book online or call.',
    features: [
      'Single item or multiple item collections across Sheffield',
      'Facebook Marketplace, Gumtree, eBay pickup service',
      'Carried to any room including upstairs and into position',
      'Heavy lifting — sofas, wardrobes, washing machines handled',
      'Fixed-price quotes with no per-stair fees',
      'Same-day available for local Sheffield collections',
    ],
    process: [
      { step: 'Share the item details and pickup address', description: 'Tell us what you\'re collecting, where it\'s coming from (the seller\'s address in Sheffield), and your delivery address. Include any access notes — narrow doorways, steep stairs, no parking.' },
      { step: 'We quote a fixed price', description: 'Based on item size, weight, and distance, we give you one fixed price for collection and delivery. No surprises.' },
      { step: 'We collect and load', description: 'We collect directly from the seller, wrap the item in furniture blankets, and secure it in the van. The seller doesn\'t need to be present for Marketplace collections if they\'ve arranged access.' },
      { step: 'Delivered and placed', description: 'We deliver to your Sheffield address and carry the item into position — bedroom, lounge, kitchen, wherever. We don\'t just leave it in the hallway.' },
    ],
    faqs: [
      {
        question: 'Can you collect Facebook Marketplace furniture anywhere in Sheffield?',
        answer: 'Yes — we collect from any Sheffield postcode, including S1 through S36. If the seller is in Rotherham, Barnsley, or further afield, we can still collect for a small additional charge based on extra mileage. We\'re familiar with all Sheffield areas including the steeper streets in Crosspool and Walkley that can catch out larger vans.',
      },
      {
        question: 'What\'s the heaviest item you can deliver?',
        answer: 'We handle sofas, double wardrobes, chest freezers, washing machines, dining tables, and most standard domestic furniture. For very heavy or specialist items (pianos, antique sideboards, commercial gym equipment), we\'d recommend our dedicated piano moving or fragile items service.',
      },
      {
        question: 'Do you carry furniture upstairs in Sheffield terraces?',
        answer: 'Yes — stair carrying is included in our standard price. Sheffield\'s terrace housing in S6, S7, and S10 often means tight stairwells with sharp turns. We assess in advance whether any disassembly is needed (e.g. removing sofa legs or wardrobe doors) to navigate tight spaces.',
      },
      {
        question: 'How much does a single sofa delivery cost in Sheffield?',
        answer: 'A single sofa collection and delivery within Sheffield typically costs £70-£120 fixed price, depending on collection and delivery postcodes, stair carry requirements, and sofa size. Call 020 3318 4720 for a quick quote.',
      },
      {
        question: 'Can you take away my old furniture at the same time?',
        answer: 'Yes — we can remove old furniture as part of the same job. Old items must be disassembled where possible. There is an additional disposal charge. This is a popular combination: collect new sofa from Marketplace, take away old sofa at the same time.',
      },
    ],
    priceRange: 'From £60 (single item, short Sheffield run) · From £90 (multi-item or upstairs carry)',
    commonIssues: [
      'Seller not home or item not ready on arrival',
      'Item larger than described requiring a bigger van',
      'Tight stairwells in Sheffield terraces requiring disassembly',
      'Parking difficulties at collection or delivery address',
    ],
    relatedServices: ['man-and-van-sheffield', 'ikea-delivery-sheffield', 'clearance-collections-sheffield'],
    image: '/images/services/furniture-delivery-sheffield.webp',
    seasonalNotes: 'Marketplace delivery peaks in January (post-Christmas clear-outs and new furniture), and again in August-September (student arrivals buying second-hand furniture). Same-day slots are more available midweek.',
    vanRecommendation: 'LWB for single items. Sprinter for sofas, large wardrobes, or multi-item loads.',
  },
  {
    slug: 'office-removals-sheffield',
    name: 'Office Removals',
    description: 'Office and business removals across Sheffield. We move workstations, filing cabinets, servers, and office furniture — evenings and weekends available to minimise disruption.',
    heroHeading: 'Office Removals Sheffield — Evenings & Weekends Available',
    metaTitle: 'Office Removals Sheffield | Business Relocations',
    metaDescription: 'Office removals in Sheffield for businesses of all sizes. IT equipment, workstations, filing cabinets handled with care. Evenings and weekends to minimise downtime.',
    features: [
      'Evening and weekend moves to minimise business downtime',
      'IT equipment, servers, and monitors handled with care',
      'Workstation disassembly and reassembly included',
      'Filing cabinets, archive boxes, and document storage moved',
      'Fully insured with business equipment cover',
      'Covering Sheffield city centre, Meadowhall business parks, and Rotherham M1 corridor',
    ],
    process: [
      { step: 'Office survey and planning', description: 'We visit or call to understand the scope — number of workstations, any sensitive IT equipment, floor access, lift availability, and parking at both locations.' },
      { step: 'Agree timing — typically Friday evening or weekend', description: 'Most Sheffield office moves happen on Friday evenings or over the weekend. We work around your business hours so Monday morning the new office is ready.' },
      { step: 'Careful, labelled packing and loading', description: 'We label desks, cables, and boxes so everything is reassembled in the right position at the new office. IT equipment is wrapped and transported upright.' },
      { step: 'Reassembly and placement at new office', description: 'We reassemble workstations and desk clusters in the layout you specify. We leave the new office functional, not just moved.' },
    ],
    faqs: [
      {
        question: 'Can you move our office equipment over a weekend?',
        answer: 'Yes — weekend moves are our most common format for Sheffield office relocations. We work Friday evening through to Sunday so your team arrives to a fully set-up office on Monday morning. We\'re available 7 days a week.',
      },
      {
        question: 'Do you move IT equipment and servers safely?',
        answer: 'Yes. Monitors, servers, and desktop units are wrapped in anti-static bubble wrap and transported in upright orientation. We recommend backing up data and removing hard drives from servers before transit, but we handle the physical moving with the care IT equipment requires.',
      },
      {
        question: 'What areas of Sheffield do office moves typically come from?',
        answer: 'Sheffield city centre (S1 — offices on Fargate, Division Street, Arundel Gate), the Kelham Island/Neepsend tech cluster, Meadowhall area business parks, and Rotherham M1 corridor business parks (M1 J33-35). We also handle moves to and from Rotherham as a nearby town with its own business district.',
      },
      {
        question: 'How much does an office move cost in Sheffield?',
        answer: 'Small office moves (5-10 workstations, one van) typically cost £350-£600. Larger moves (20+ workstations, multiple vans) are quoted based on full scope. Call 020 3318 4720 for a tailored business quote.',
      },
      {
        question: 'Can you help with disposing of old office furniture?',
        answer: 'Yes — we can take away unwanted office furniture, filing cabinets, and equipment for disposal or recycling at the same time as the move. This is often more efficient than arranging separate collections.',
      },
    ],
    priceRange: 'From £350 (small office, 1 van) · Quoted per scope for larger moves',
    commonIssues: [
      'IT cabling not labelled before move, making reassembly slow',
      'Parking restrictions around Sheffield city centre during weekday moves',
      'Lift access at origin or destination requiring pre-coordination',
      'Insufficient packing boxes provided by client',
    ],
    relatedServices: ['house-removals-sheffield', 'storage-sheffield', 'clearance-collections-sheffield'],
    image: '/images/services/office-removals-sheffield.webp',
    seasonalNotes: 'Office moves peak in December/January (year-end lease changes) and March/April (financial year-end for many Sheffield businesses). Summer is also popular for office refurbs and moves. Always book at least 2 weeks ahead for weekend office moves.',
    vanRecommendation: 'Sprinter for small offices (up to 8 workstations). Luton or multiple vans for larger moves. We\'ll advise based on your floor plan.',
  },
  {
    slug: 'packing-service-sheffield',
    name: 'Packing Service',
    description: 'Professional packing service for Sheffield homes and businesses. We supply materials and pack everything — fragile items, kitchens, wardrobes, and awkward-shaped belongings — ready for a stress-free move.',
    heroHeading: 'Professional Packing Service Sheffield',
    metaTitle: 'Packing Service Sheffield | Full & Part-Pack Available',
    metaDescription: 'Professional packing service in Sheffield. Full packs, part-packs, and self-pack box supply available. Fragile items packed with specialist materials.',
    features: [
      'Full packing service — we pack everything from kitchen to loft',
      'Part-packing available — we handle fragile items only if preferred',
      'All packing materials supplied: double-wall boxes, tissue, bubble wrap',
      'Wardrobes packed using wardrobe boxes (clothes stay on hangers)',
      'Kitchen packing with dish-pack boxes for plates and glassware',
      'Available as a standalone service or added to any removal booking',
    ],
    process: [
      { step: 'Book a packing day (usually the day before your move)', description: 'Our packing team arrives the day before your removal date. For large Sheffield homes, we sometimes start two days before.' },
      { step: 'We supply all materials', description: 'No need to source boxes. We bring double-wall boxes, packing paper, bubble wrap, wardrobe boxes, and fragile tape.' },
      { step: 'Systematic room-by-room packing', description: 'We label every box by room and contents. Fragile items are individually wrapped. Sheffield terrace lofts are often the most time-consuming — we handle these last.' },
      { step: 'Boxes stacked and ready for loading day', description: 'Everything is stacked neatly for the removal team. You can move into your new Sheffield home knowing everything is labelled and packed safely.' },
    ],
    faqs: [
      {
        question: 'How many packers and how long does it take?',
        answer: 'A 2-bedroom Sheffield terrace takes a team of two packers approximately 4-5 hours. A 3-bedroom semi takes 6-7 hours. We\'ll advise on team size based on your property type. Sheffield terrace lofts tend to have more stored items than expected — it\'s worth doing a walkthrough estimate before confirming.',
      },
      {
        question: 'Do I need to empty wardrobes before the packing team arrives?',
        answer: 'No — we use wardrobe boxes so clothes stay on their hangers and go straight into the box. This is especially useful for Sheffield terrace houses where bedroom access can be tight. Heavy winter coats and suits are protected and stay wrinkle-free.',
      },
      {
        question: 'Can I just book packing for fragile items only?',
        answer: 'Yes — part-packing is available. Many Sheffield customers prefer to pack their own general items but want us to handle the kitchen (plates, glasses, valuables) and ornaments. This is a popular middle option that keeps costs down while protecting the things most likely to be damaged in transit.',
      },
      {
        question: 'Do you provide boxes for self-packing?',
        answer: 'Yes — if you want to pack yourself, we supply box-only packages. We stock double-wall removal boxes in standard, book, and wardrobe sizes. Delivery to Sheffield addresses is available.',
      },
      {
        question: 'Is packing included in your house removals service?',
        answer: 'Packing is a separate add-on to our house removals service. You can add it when booking and we\'ll schedule a packing day the day before your removal. Combined removal + packing bookings get a 10% packing discount.',
      },
    ],
    priceRange: 'From £150 (1-bed pack) · From £250 (2-3 bed full pack)',
    commonIssues: [
      'Not allowing enough time — underestimating how long packing takes',
      'Hidden loft or cellar contents adding significant extra time',
      'Mixing valuable items without labelling for unpacking priority',
      'Running out of boxes mid-pack for larger Sheffield semis',
    ],
    relatedServices: ['house-removals-sheffield', 'storage-sheffield', 'fragile-items-removals-sheffield'],
    image: '/images/services/packing-service-sheffield.webp',
    seasonalNotes: 'High demand June-August (family summer moves). Student packing requests peak in September and January in Sheffield due to two-university calendar. Pre-Christmas packing for storage also generates demand in November.',
    vanRecommendation: 'Packing is independent of van size — confirm your removal van separately. Packing team uses a small transit for materials.',
  },
  {
    slug: 'piano-moving-sheffield',
    name: 'Piano Moving',
    description: 'Specialist piano moving service across Sheffield. We handle upright and grand pianos with care, including through the tight stairwells and narrow doorways common in Sheffield\'s Victorian terrace stock.',
    heroHeading: 'Piano Moving Sheffield — Specialist Handling',
    metaTitle: 'Piano Moving Sheffield | Upright & Grand Piano Removals',
    metaDescription: 'Specialist piano moving in Sheffield. Upright and grand pianos moved safely. Experienced with Sheffield terrace staircases and narrow access. Fixed-price quotes.',
    features: [
      'Specialist upright and grand piano moving',
      'Experienced with Sheffield Victorian terrace stairwells',
      'Piano boards, skates, and specialist padding used',
      'Two-person minimum team for all piano moves',
      'Access route assessed before booking confirmed',
      'Fully insured including piano cover',
    ],
    process: [
      { step: 'Access route assessment', description: 'We assess the staircase width, doorway dimensions, and landing space at both origin and destination. In Sheffield\'s S6/S10/S7 Victorian terraces, stairwells are often 700mm wide or less — we confirm feasibility before any commitment.' },
      { step: 'Specialist equipment prepared', description: 'We use piano boards, skate trolleys, and specialist soft-wrap padding. For upright pianos on stairs, we use board-and-rope systems for controlled descent.' },
      { step: 'Two-man team moves the piano', description: 'Piano moving is never a one-person job. Our specialist team moves the piano methodically — never rushed.' },
      { step: 'Placed and levelled at destination', description: 'The piano is positioned in the room you specify and the castor brakes re-engaged. We check it\'s stable before we leave.' },
    ],
    faqs: [
      {
        question: 'Can you move a piano up the stairs of a Sheffield terrace?',
        answer: 'We assess each case individually. Most Victorian terrace staircases in Sheffield (S6, S10, S7) are tight, but upright pianos with a width under 1.4m can usually be manoeuvred with the right technique and equipment. We\'ll ask for photos of the staircase and piano dimensions before confirming. If it genuinely won\'t fit, we\'ll tell you honestly rather than attempt it and cause damage.',
      },
      {
        question: 'What\'s the difference between moving an upright and a grand piano?',
        answer: 'Upright pianos can be moved on skate boards through doorways in one piece, stairs permitting. Grand pianos must be disassembled — legs removed, lid off — and each piece carried separately. Grand piano moves take longer and require more team members. We handle both types in Sheffield.',
      },
      {
        question: 'Do you move pianos as part of a full house removal?',
        answer: 'Yes — if you\'re having a full house removal with us, we include the piano in the move. We treat it as a specialist item requiring dedicated planning rather than loading it alongside boxes. The piano is always moved last (loaded first, unloaded last) for stability.',
      },
      {
        question: 'How much does piano moving cost in Sheffield?',
        answer: 'Piano moving in Sheffield for a standard upright, same floor, short distance: from £150. Moving up or down one flight of stairs adds £50-£80. Grand piano disassembly and move: from £250. Cross-city Sheffield moves (e.g. Ecclesall to Hillsborough) add mileage. Call 020 3318 4720 for a specific quote.',
      },
      {
        question: 'Will moving affect the piano\'s tuning?',
        answer: 'It may. Even a well-handled move can cause slight tuning drift as the piano settles in a new environment. We recommend allowing 2-4 weeks for the piano to acclimatise to its new room before calling a tuner. This is normal and not a sign of damage during the move.',
      },
    ],
    priceRange: 'From £150 (upright, same floor) · From £250 (grand or stair move)',
    commonIssues: [
      'Staircase too narrow for piano — confirmed by pre-move assessment',
      'Doorway width insufficient without removing door frame',
      'Insufficient notice — specialist piano slots book up quickly',
      'Piano not tuned in advance and customer surprised by post-move drift',
    ],
    relatedServices: ['fragile-items-removals-sheffield', 'house-removals-sheffield', 'packing-service-sheffield'],
    image: '/images/services/piano-moving-sheffield.webp',
    seasonalNotes: 'Piano moves peak when families move house (spring and summer). Sheffield terrace piano moves require pre-assessment regardless of season. Book at least 2 weeks ahead for piano specialist availability.',
    vanRecommendation: 'Sprinter or Luton depending on piano size. Piano always loaded last, unloaded first.',
  },
  {
    slug: 'fragile-items-removals-sheffield',
    name: 'Fragile Items Removals',
    description: 'Specialist handling for fragile, valuable, and antique items across Sheffield. Artwork, mirrors, antique furniture, glassware, and collectibles moved with appropriate materials and care.',
    heroHeading: 'Fragile & Antique Item Removals Sheffield',
    metaTitle: 'Fragile Items Removals Sheffield | Antiques & Valuables',
    metaDescription: 'Specialist fragile and antique item removals in Sheffield. Artwork, mirrors, antiques, and valuables moved with specialist materials. Fully insured.',
    features: [
      'Specialist wrapping for artwork, mirrors, and antiques',
      'Double-wall and mirror-pack boxes supplied',
      'Individually wrapped with tissue and bubble wrap',
      'Blanket-wrap for furniture with veneer or lacquer finishes',
      'Loading position planned to prevent pressure and shifting',
      'Fully insured including declared valuable items',
    ],
    process: [
      { step: 'Item declaration and assessment', description: 'Tell us what fragile items you\'re moving and their approximate value. We\'ll advise on packing materials and whether any items need specialist crating.' },
      { step: 'Specialist packing on move day', description: 'Fragile items are packed last and loaded first (or separately). Each item is individually wrapped and labelled FRAGILE.' },
      { step: 'Loaded in designated position', description: 'Fragile items are placed upright or in the position specified, never stacked under heavy boxes. In the van, they go against the bulkhead rather than the doors.' },
      { step: 'Unloaded with same care', description: 'Fragile items are carried by hand by both team members where possible. Artwork is unwrapped and placed where you specify.' },
    ],
    faqs: [
      {
        question: 'What materials do you use for packing antiques?',
        answer: 'We use acid-free tissue for direct contact with wood and fabric surfaces, bubble wrap for padding, and double-wall boxes for rigidity. Large mirrors get purpose-made mirror boxes. Antique furniture is blanket-wrapped with multi-layer pads, not standard removal blankets.',
      },
      {
        question: 'Are fragile items insured during transit?',
        answer: 'Our standard goods-in-transit insurance covers declared items up to a standard limit. For high-value antiques, artwork, or declared valuables above this limit, we recommend specialist fine art transit insurance — we can advise on providers. Always declare high-value items when booking.',
      },
      {
        question: 'Can you move large paintings and framed artwork?',
        answer: 'Yes — framed artwork is wrapped in glassine paper and bubble wrap, then placed in picture boxes or custom-sized cardboard wraps. We never place artwork flat under other items. If the piece is very large (over 2m), we may arrange a dedicated run to keep it separate from the rest of the load.',
      },
      {
        question: 'Do you move vintage and antique furniture?',
        answer: 'Yes. Antique furniture with veneer, lacquer, or gilded surfaces requires different handling from standard furniture — no strapping directly against the surface, no stacking, and climate consideration for very long journeys. We\'ve moved antiques from Sheffield to London and Edinburgh without incident.',
      },
      {
        question: 'How much does fragile item moving cost in Sheffield?',
        answer: 'Fragile item handling adds 20-30% to standard moving costs due to specialist materials and extra handling time. A small collection of fragile items (artwork, mirrors, ornaments) added to a standard house move typically adds £80-£150 to the quote. Standalone fragile-item moves start from £120.',
      },
    ],
    priceRange: 'From £120 (small fragile collection) · Add-on from £80 to house removal',
    commonIssues: [
      'Items not declared as high value on booking — affects insurance coverage',
      'Antique furniture not properly assessed for stair/door clearance in Sheffield terraces',
      'Climate-sensitive items (antique veneers) moved in extreme cold without protection',
      'Insufficient packing time allocated for large fragile collections',
    ],
    relatedServices: ['packing-service-sheffield', 'house-removals-sheffield', 'piano-moving-sheffield'],
    image: '/images/services/fragile-items-removals-sheffield.webp',
    seasonalNotes: 'Fragile and antique moving peaks in spring and autumn when antiques fairs, auctions, and house moves coincide. Sheffield has an active antiques scene around Abbeydale Road area.',
    vanRecommendation: 'LWB or Sprinter for fragile items — less bulk movement than a Luton\'s roller shutter door. Items secured against bulkhead.',
  },
  {
    slug: 'clearance-collections-sheffield',
    name: 'Clearance Collections',
    description: 'Property clearance and collection service across Sheffield. House clearances, garage clear-outs, end-of-tenancy clearances, and bulk collection runs — loaded and removed efficiently.',
    heroHeading: 'Property Clearance & Collections Sheffield',
    metaTitle: 'House Clearance Sheffield | Property & Garage Clear-Outs',
    metaDescription: 'House clearance and property collections in Sheffield. End-of-tenancy clear-outs, garage clears, bulk furniture removal. Licensed waste carrier. Fixed-price quotes.',
    features: [
      'Full property clearance for houses, flats, and garages',
      'End-of-tenancy clearance for landlords and agents in Sheffield',
      'Licensed waste carrier — legal disposal guaranteed',
      'Recycling and charity donation sorting where possible',
      'Speed-loading for bulk clearances',
      'Available 7 days a week',
    ],
    process: [
      { step: 'Walk-through or photo estimate', description: 'Share photos of the items or areas to clear, or we do a quick walk-through. We\'ll confirm van size and team needed.' },
      { step: 'Fixed-price agreed before we start', description: 'Based on volume and access, we give a fixed price. For full house clearances in Sheffield\'s S6/S7/S10 terraces, we factor in stair carry and access time.' },
      { step: 'Fast, efficient clear-out', description: 'Our team clears quickly — everything loaded and out of the property. We separate recyclables from general waste and donate reusable items where possible.' },
      { step: 'Certified waste disposal', description: 'We dispose of all items at licensed Sheffield recycling facilities. We can provide a waste transfer note for landlord records.' },
    ],
    faqs: [
      {
        question: 'Do you do end-of-tenancy clearances in Sheffield student areas?',
        answer: 'Yes — end-of-tenancy clearances in Sheffield\'s student areas (Crookes, Walkley, Broomhill, Ecclesall Road corridor) are among our most common jobs. Landlords and letting agents use us regularly at the end of the academic year (July/August) to clear abandoned furniture and belongings. We work quickly to turn properties around for the September intake.',
      },
      {
        question: 'Are you a licensed waste carrier?',
        answer: 'Yes — we hold a current Environment Agency waste carrier licence. This means we can legally remove and dispose of household waste, furniture, and general rubbish from Sheffield properties. We can provide our licence number and a waste transfer note on request.',
      },
      {
        question: 'Can you clear a property if the occupant has passed away?',
        answer: 'Yes — we handle estate clearances with discretion and care. We work to the timescale of the solicitor or family, treat all items with respect, and can separate items for valuation, donation, or disposal as instructed. Call us on 020 3318 4720 to discuss your specific situation.',
      },
      {
        question: 'Do you take white goods (washing machines, fridges)?',
        answer: 'Yes — white goods, mattresses, and electrical items are all collected. Some items (mattresses, fridges) carry a small disposal surcharge due to specialist recycling requirements. We\'ll include this in your quote upfront.',
      },
      {
        question: 'How much does a property clearance cost in Sheffield?',
        answer: 'A single garage or small bedroom clearance (LWB van load) typically costs £150-£200. A full 2-bedroom terrace clearance (1-2 van loads) is £250-£450. Larger properties are quoted on inspection. Price includes disposal — we don\'t charge separately for tip runs.',
      },
    ],
    priceRange: 'From £150 (single room/garage) · From £300 (full house clearance)',
    commonIssues: [
      'Hazardous materials (paint, chemicals) requiring specialist disposal',
      'Larger than expected volume in lofts and cellars common in Sheffield terraces',
      'Access difficulties in S6 and S10 terraces for loading bulk items',
      'Items reserved by family not clearly separated before clearance team arrives',
    ],
    relatedServices: ['man-and-van-sheffield', 'house-removals-sheffield', 'storage-sheffield'],
    image: '/images/services/clearance-collections-sheffield.webp',
    seasonalNotes: 'Clearance demand peaks July-August (end of academic year, student area end-of-tenancy), and again December-January (estate clearances, year-end property handovers). Spring bank holiday is also busy for garage and garden clear-outs.',
    vanRecommendation: 'LWB for single rooms or garages. Luton for full house clearances — maximum capacity per run.',
  },
  {
    slug: 'storage-sheffield',
    name: 'Storage',
    description: 'Short and long-term storage in Sheffield and South Yorkshire. We can hold your belongings between moves, during renovations, or as part of a long-distance part-load move.',
    heroHeading: 'Short & Long-Term Storage Sheffield',
    metaTitle: 'Storage Sheffield | Short & Long-Term Removal Storage',
    metaDescription: 'Storage in Sheffield for moves, renovations, and part-load long-distance. Secure facilities near M1. Collect and deliver service available. Fixed weekly rates.',
    features: [
      'Secure storage near M1 Tinsley/Meadowhall junction',
      'Short-term (days to weeks) and long-term (months) options',
      'We collect your items and deliver them back when ready',
      'Ideal for chain-break storage between Sheffield house moves',
      'Part-load storage for long-distance moves with completion date gaps',
      'Contents insurance available for stored items',
    ],
    process: [
      { step: 'Confirm your storage requirement', description: 'Tell us the volume of items (rooms of furniture, box count), how long you need storage, and your collection and delivery postcodes in Sheffield or South Yorkshire.' },
      { step: 'We collect and bring items to storage', description: 'Our team loads your belongings and transports them to our secure storage facility. Items are catalogued and stored safely.' },
      { step: 'Your items are held securely', description: 'Access is restricted to authorised personnel. The facility is monitored and weather-tight. Insurance is available for declared value items.' },
      { step: 'We deliver back when you\'re ready', description: 'When you\'re ready — whether that\'s two weeks or six months later — we load your items and deliver them to your new Sheffield or UK address.' },
    ],
    faqs: [
      {
        question: 'Why would I need storage as part of a Sheffield house move?',
        answer: 'The most common reason is a gap between your sale completing and your purchase completing — chain-break storage. You move out of your Sheffield home on completion day, we store everything, and deliver to the new property when it\'s ready. This is preferable to the stress of trying to synchronise two completions exactly.',
      },
      {
        question: 'Where is the storage facility?',
        answer: 'Our primary facility is near the M1 Tinsley junction, close to the Meadowhall retail park in Sheffield. This gives good access from all Sheffield postcodes and makes it ideal for staging long-distance moves to London or Nottingham via the M1.',
      },
      {
        question: 'How long can I store items?',
        answer: 'There is no minimum or maximum storage period. Some customers store for 48 hours between a Friday completion and Monday delivery. Others store for six months during major renovations. Rates are weekly and reduce for longer-term storage.',
      },
      {
        question: 'Is my furniture insured while in storage?',
        answer: 'Basic cover is included. For high-value items (antiques, electronics), we recommend declaring the value so we can confirm appropriate cover or advise on specialist contents insurance. Let us know when booking if you have items of particular value.',
      },
      {
        question: 'Can you store items from a long-distance part-load Sheffield move?',
        answer: 'Yes. If you\'re moving from Sheffield to London but only half the London property is ready, we can store the other half near the M1 and deliver when the access is confirmed. This avoids multiple long-distance trips and is priced as one move with a storage fee for the holding period.',
      },
    ],
    priceRange: 'From £30/week (small unit) · From £60/week (2-3 bedroom home volume)',
    commonIssues: [
      'Not confirming storage duration upfront — helps us allocate space',
      'Items not labelled for specific delivery rooms, slowing unpacking',
      'Climate-sensitive items (antiques, electronics) needing specific conditions',
      'Short-notice storage requests without prior arrangement',
    ],
    relatedServices: ['house-removals-sheffield', 'long-distance-removals-sheffield', 'packing-service-sheffield'],
    image: '/images/services/storage-sheffield.webp',
    seasonalNotes: 'Storage demand is year-round but peaks during spring and summer house moving season. Sheffield student storage (June/July) from UoS students going home for summer is a notable seasonal demand. Book winter storage in advance as facilities near M1 are also used for M1 haulage customers.',
    vanRecommendation: 'Depends on volume stored — we confirm van size when you describe your storage requirement.',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
