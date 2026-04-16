export interface Route {
  slug: string;
  from: string;
  to: string;
  distance: string;
  driveTime: string;
  typicalCost: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  routeDetails: string;
  whatFits: { van: string; capacity: string; bestFor: string }[];
  faqs: { question: string; answer: string }[];
  tips: string[];
  relatedRoutes: string[];
}

export const routes: Route[] = [
  {
    slug: 'sheffield-to-london',
    from: 'Sheffield',
    to: 'London',
    distance: '170 miles',
    driveTime: '2.5–3.5 hours',
    typicalCost: '£350–£900',
    heroHeading: 'Man With A Van Sheffield to London',
    metaTitle: 'Man With A Van Sheffield to London | Fixed-Price Removals',
    metaDescription: 'Long-distance removal from Sheffield to London. Fixed-price quotes, dedicated van, no groupage. Typical cost £350–£900. M1 direct route, 7 days a week.',
    intro: 'Sheffield to London is our single most popular long-distance route — a direct M1 run of around 170 miles that our drivers do regularly enough to know the best travel windows and the most efficient approach to central London. Whether you\'re relocating for a new job, finishing university and heading south, or making a permanent move to the capital, we provide a fixed-price, dedicated van service. No shared loads, no hidden extras — your items go straight from your Sheffield address to your London door.',
    routeDetails: 'The route follows the M1 south from Sheffield (J33 or J34 for most Sheffield postcodes) all the way to London. Depending on your destination in London, we either join the M25 orbital or continue into central London via the A1(M) or A5. Journey time from Sheffield to central London is typically 2.5–3 hours outside peak hours — significantly shorter than the Leeds to London run. We recommend departing Sheffield by 7am for morning deliveries in London, avoiding M25 morning peak. For south London destinations, M1/M25/A2 is preferred. For north and east London, M1/A1(M) avoids the M25 entirely. We always check the congestion charge zone and ULEZ boundaries at the quoting stage and factor these into pricing.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Studio flat, single room, 20–30 boxes and a few small furniture items' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, including a sofa, bed, wardrobe, and 30–50 boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household including large furniture, appliances, and 50+ boxes' },
    ],
    faqs: [
      {
        question: 'How much does it cost to move from Sheffield to London?',
        answer: 'The cost depends on van size. An LWB van (studio or single room) typically costs £350–450. A Sprinter van (1–2 bed flat) is £500–650. A Luton van with a two-man team (2–3 bed house) runs £700–900. These are fixed prices — loading, transport, unloading, fuel, and any zone charges are all included. We\'ll give you an exact quote before you book.',
      },
      {
        question: 'What\'s the fastest route from Sheffield to London?',
        answer: 'For most Sheffield postcodes (S1–S20), we join the M1 at J33 or J34. The M1 runs directly to London without the need for motorway changes. Journey time is 2.5–3 hours in normal traffic — one of the most direct connections from any northern city to London. We depart by 7am to clear the M25 before peak, and we use real-time traffic apps to reroute around incidents. The A1(M) via Doncaster is an alternative for Sheffield\'s eastern postcodes (Rotherham, Beighton).',
      },
      {
        question: 'Do you cover the ULEZ and congestion charge zones?',
        answer: 'Yes. Our vans are ULEZ-compliant for inner London deliveries, and we cover the congestion charge zone. Any zone charges are factored into your quoted price — there are no surprise add-ons on the day. If you\'re moving to a London borough that requires a parking dispensation for the loading bay, we arrange that in advance as part of the booking process.',
      },
      {
        question: 'Is my load the only one on the van?',
        answer: 'Always. Every Sheffield to London booking is a dedicated run — your items are the only load on the van. No groupage, no waiting for another customer\'s collection, no detours. The van loads at your Sheffield address and goes directly to your London address. This is what a professional man and van service means — not shared loads with strangers.',
      },
      {
        question: 'Can you do a same-day Sheffield to London move?',
        answer: 'Yes, for collections departing Sheffield before 10am we can typically deliver to central or north London before 3pm. For south London and inner boroughs beyond the M25, we recommend allowing a full day. We always call ahead to confirm arrival time so you can arrange parking dispensations or building access at the London end.',
      },
    ],
    tips: [
      'Book at least a week ahead for weekend slots — Sheffield to London is our most requested route',
      'Departing before 7am from Sheffield clears the M25 before morning peak and gives you a full day to unload',
      'Check if your London destination is in the congestion charge zone or ULEZ — we\'ll include any charges in your quote',
      'Confirm lift access for flats above ground floor at the London end — no lift and multiple floors adds time and cost',
      'Midweek moves (Tuesday–Thursday) often have shorter journey times and more slot availability',
    ],
    relatedRoutes: ['sheffield-to-manchester', 'sheffield-to-leeds', 'sheffield-to-nottingham', 'sheffield-to-birmingham'],
  },
  {
    slug: 'sheffield-to-manchester',
    from: 'Sheffield',
    to: 'Manchester',
    distance: '38 miles',
    driveTime: '50 min–1.5 hours',
    typicalCost: '£180–£450',
    heroHeading: 'Man With A Van Sheffield to Manchester',
    metaTitle: 'Man With A Van Sheffield to Manchester | Fixed-Price Removals',
    metaDescription: 'Man and van from Sheffield to Manchester. 38 miles, fixed-price quotes. A57 or M67 route options. Typical cost £180–£450, 7 days a week.',
    intro: 'Sheffield to Manchester is a trans-Pennine run with two distinct character options — the fast M67 motorway route (55 miles via J35a of the M1) or the scenic A57 Snake Pass (38 miles but significantly narrower). For removal vans, the M67 is almost always the right choice: faster, more predictable, and accessible to all van sizes including Luton. We do this route regularly for graduates, young professionals relocating between the two cities, and families moving for work. A fixed-price quote covers everything from loading in Sheffield to unloading in Manchester.',
    routeDetails: 'Our standard Sheffield to Manchester route uses the M1 south to J35a, then the M67 westbound through Tameside to join the M60 Manchester ring road. From the M60, we route to your specific Manchester address via the most appropriate junction. Total distance via the M67 is approximately 55 miles and takes 50–75 minutes in normal traffic. The A57 Snake Pass (38 miles direct) is shorter in distance but crosses high moorland that is unsuitable for Luton vans in winter and slower in summer — we never use it for large removal vehicles. For Salford, Trafford, and west Manchester, we exit M60 at J12–15. For north Manchester and Bury, M60 to M62 junction.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, student move, small 1-bed flat' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, sofa, bed, wardrobe, 30–50 boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household move' },
    ],
    faqs: [
      {
        question: 'What\'s the best route from Sheffield to Manchester for a removal van?',
        answer: 'Always the M67, not the Snake Pass. The A57 Snake Pass is 38 miles and more direct, but it\'s a narrow B-road across high moorland with tight bends, 7.5-tonne weight limits in sections, and no hard shoulder. It\'s not suitable for Luton removal vans and is slow in summer with tourist traffic. The M67 via J35a of the M1 is 55 miles but fully motorway — faster, safer, and accessible to all van sizes. Allow 60–90 minutes in normal traffic.',
      },
      {
        question: 'How much does a Sheffield to Manchester man and van cost?',
        answer: 'An LWB van for a single room or small flat costs £180–250. A Sprinter for a 1–2 bed flat is £250–350. A Luton van with two men for a 2–3 bed house costs £350–450. These are fixed prices — no fuel surcharges, no mileage extras. We quote the full job price before you book.',
      },
      {
        question: 'Can you move me from Sheffield to Salford or Media City?',
        answer: 'Yes — Salford and Media City are straightforward for us. We route via the M60 to J12 or J13 and know the access routes around MediaCityUK. Parking in Salford Quays can be tight — many apartment blocks have loading bays and we coordinate with building management. Salford is one of the most common destinations for our Sheffield to Manchester moves as young professionals relocate for ITV, BBC, and the wider digital media sector.',
      },
      {
        question: 'Do you do the return journey if we\'re doing a house swap?',
        answer: 'Yes. For Sheffield–Manchester swaps or part-load situations, we can arrange a loaded return — the van collects in Sheffield, delivers in Manchester, then loads up anything coming back to Sheffield. This is significantly more cost-effective than booking two separate vans and works well for house swaps between the two cities.',
      },
    ],
    tips: [
      'Always use the M67 motorway route for removal vans — never the Snake Pass for anything larger than a small car',
      'Allow extra time for Manchester city centre deliveries: Piccadilly and Northern Quarter have restricted loading zones',
      'Salford Quays and Media City have managed loading bays — confirm your slot with building management before moving day',
      'Rush hour on the M60 ring road (7:30–9am and 4:30–6:30pm) adds 30–45 minutes to journey time — plan around these windows',
      'For Manchester Northern Quarter moves, arrive before 10am when deliveries are easiest in the side streets',
    ],
    relatedRoutes: ['sheffield-to-leeds', 'sheffield-to-liverpool', 'sheffield-to-london'],
  },
  {
    slug: 'sheffield-to-leeds',
    from: 'Sheffield',
    to: 'Leeds',
    distance: '33 miles',
    driveTime: '40–55 min',
    typicalCost: '£150–£380',
    heroHeading: 'Man With A Van Sheffield to Leeds',
    metaTitle: 'Man With A Van Sheffield to Leeds | Fixed-Price Removals',
    metaDescription: 'Man and van from Sheffield to Leeds. 33 miles on the M1, fixed-price quotes. Typical cost £150–£380. Graduate moves, student relocations, 7 days a week.',
    intro: 'Sheffield to Leeds is a short hop on the M1 — 33 miles and around 40–55 minutes — but one of our most frequently requested routes. The Sheffield–Leeds corridor sees significant movement of graduates heading north for work, students relocating between the two university cities, and professionals moving for jobs in the Leeds financial district. We provide a fixed-price, same-day service with no minimum notice required for smaller moves.',
    routeDetails: 'The route is straightforward: M1 north from Sheffield J33 or J34, staying on the M1 all the way to Leeds. We exit at J43 for South Leeds, J44 for the city centre, or J45 for the north and Headingley. Journey time is typically 40 minutes in off-peak and up to 55 minutes in weekday peak. This is one of the most congested motorway corridors in the UK — the M1 between Sheffield and Leeds sees heavy HGV traffic throughout the day. We recommend 9:30am–3pm departures for the smoothest run. Headingley, Hyde Park, and the student areas of LS6 are regular drop-off destinations for this route.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, student bedding move, 10–20 boxes' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, furniture and 30–50 boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household move Sheffield to Leeds' },
    ],
    faqs: [
      {
        question: 'How long does Sheffield to Leeds take?',
        answer: 'In normal traffic, 40–50 minutes on the M1. In peak hours (7:30–9am or 4:30–6:30pm), it can take up to 75 minutes. The stretch of M1 between J33 (Sheffield) and J43 (South Leeds) is among the busiest in the country. We plan departure times around peak traffic and can advise on the best window for your specific addresses and requirements.',
      },
      {
        question: 'How much does a Sheffield to Leeds removal cost?',
        answer: 'An LWB van for a small move (room or small flat) costs £150–200. A Sprinter for a 1–2 bed flat costs £200–300. A Luton van with two men for a full house costs £300–380. These are fixed prices — fuel, loading, and unloading are included. No mileage charges, no fuel surcharges.',
      },
      {
        question: 'Can you move me to a student house in Headingley?',
        answer: 'Yes — Headingley and Hyde Park are very familiar territory for us. We know the parking permit zones in LS6, the narrow back streets around Cardigan Road, and the challenge of loading on streets like Brudenell Road. For student moves to Headingley, we\'d recommend booking a morning slot — afternoon parking in LS6 can be extremely tight during the September move-in period.',
      },
      {
        question: 'Do you do part-loads from Sheffield to Leeds?',
        answer: 'Yes. For single items, small bedroom moves, or part-loads, an LWB Transit is the most cost-effective option. We\'ll come to your Sheffield address, load your items, and deliver directly to your Leeds address — no shared loads, no detours. Same-day service is usually available with less than 24 hours\' notice for LWB moves.',
      },
    ],
    tips: [
      'Avoid the M1 Sheffield–Leeds in peak hours — the 9am–3pm window is noticeably faster',
      'For Headingley student moves, book a morning slot and arrive before 10am when parking in LS6 is easiest',
      'The M1 J43–J44 Leeds merge is a consistent bottleneck — add 20 minutes to journey time if moving on a weekday afternoon',
      'Same-day Sheffield to Leeds moves are usually possible with 24 hours\' notice for LWB and Sprinter sizes',
      'Leeds city centre has loading bays in most apartment blocks — confirm lift access and loading bay times before moving day',
    ],
    relatedRoutes: ['sheffield-to-manchester', 'sheffield-to-london', 'sheffield-to-newcastle'],
  },
  {
    slug: 'sheffield-to-nottingham',
    from: 'Sheffield',
    to: 'Nottingham',
    distance: '40 miles',
    driveTime: '50 min–1.1 hours',
    typicalCost: '£160–£400',
    heroHeading: 'Man With A Van Sheffield to Nottingham',
    metaTitle: 'Man With A Van Sheffield to Nottingham | Fixed-Price Removals',
    metaDescription: 'Man and van from Sheffield to Nottingham. 40 miles on the M1, fixed-price quotes. Typical cost £160–£400. Fully insured, 7 days a week.',
    intro: 'Sheffield to Nottingham is a natural M1 south run — 40 miles and under an hour in normal traffic. The two cities sit at opposite ends of the same motorway corridor, and there\'s a steady flow of professional relocations, graduate moves, and student transfers between them. University of Sheffield and Nottingham both have large student populations with natural crossover. We do this route regularly and have a good knowledge of Nottingham\'s access points including the tram restrictions in the city centre.',
    routeDetails: 'From Sheffield\'s M1 junctions (J33 or J34), the route heads south on the M1 to J26 (Nottingham north) or J24 (Nottingham south, A453). For most Nottingham city addresses, J26 and the A610 is the most direct approach. For the city centre, Lace Market, and Hockley, we take J26/A610 and cut through Radford. For Nottingham\'s south side (West Bridgford, Clifton, Beeston), J24/A453 is more efficient. The Nottingham ring road is predictable but busy at peak times. City centre loading is restricted by the Nottingham Express Transit tram network — similar to Sheffield\'s Supertram, tram lanes create no-loading zones on the main streets.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, student move, small flat' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, sofa, bed, wardrobe, 30–50 boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household move' },
    ],
    faqs: [
      {
        question: 'How much does a Sheffield to Nottingham man and van cost?',
        answer: 'An LWB van (single room or small flat) is £160–220. A Sprinter (1–2 bed flat) is £220–320. A Luton with two men (full house) is £320–400. These are fully inclusive fixed prices — no fuel surcharges or mileage extras. You get an exact price before confirming your booking.',
      },
      {
        question: 'How long does the Sheffield to Nottingham journey take?',
        answer: 'In normal traffic, 50–60 minutes via the M1 from J33. The M1 south between Sheffield and Nottingham is generally less congested than the Sheffield–Leeds stretch northbound. Peak hour (7–9am, 4–6pm) can add 20–30 minutes, particularly around the Nottingham ring road. We recommend mid-morning departures for the smoothest run.',
      },
      {
        question: 'Can you move me to a student house near Nottingham Trent?',
        answer: 'Yes. Nottingham Trent\'s City Campus is in the centre, and the surrounding Arboretum and Lenton areas are the student hub. We know the loading restrictions around the Nottingham Express Transit tram stops on Market Street and Victoria Street. For student moves to Lenton (the main NTU student area), access is straightforward — wide Victorian terrace streets with good parking.',
      },
      {
        question: 'Do you cover the whole of Nottinghamshire?',
        answer: 'We deliver to all Nottingham postcodes and the wider Nottinghamshire area including West Bridgford, Beeston, Arnold, and Carlton. For outlying areas like Mansfield or Newark, an additional distance charge may apply — always confirmed in your quote. The M1 gives us fast access to most of Nottinghamshire within 75 minutes of Sheffield.',
      },
    ],
    tips: [
      'Mid-morning departures (9:30am–11am) from Sheffield give the smoothest M1 run to Nottingham',
      'Nottingham city centre tram lanes restrict van stopping — use the back streets for loading and unloading near the city centre',
      'West Bridgford is easy access — wide roads, good parking, straight run from J24/A453',
      'Lenton student areas have permit zones — check what day your move is before assuming you can park freely',
      'The M1 J25–J26 interchange near Nottingham can be slow at peak — allow an extra 20 minutes for afternoon moves',
    ],
    relatedRoutes: ['sheffield-to-london', 'sheffield-to-birmingham', 'sheffield-to-leeds'],
  },
  {
    slug: 'sheffield-to-birmingham',
    from: 'Sheffield',
    to: 'Birmingham',
    distance: '85 miles',
    driveTime: '1.5–2 hours',
    typicalCost: '£250–£600',
    heroHeading: 'Man With A Van Sheffield to Birmingham',
    metaTitle: 'Man With A Van Sheffield to Birmingham | Fixed-Price Removals',
    metaDescription: 'Man and van from Sheffield to Birmingham. 85 miles via M1/M42, fixed-price quotes. Typical cost £250–£600. Fully insured, 7 days a week.',
    intro: 'Sheffield to Birmingham is one of our most popular midland routes — 85 miles via the M1 and M42, typically done in under two hours. Sheffield sits at the northern apex of the M1\'s Birmingham–Sheffield–Leeds corridor, and there\'s a consistent flow of professionals relocating between the two cities for work in manufacturing, digital, and financial services. We provide a dedicated van service with fixed pricing regardless of van size chosen.',
    routeDetails: 'The route follows the M1 south from Sheffield J33 or J34, then the M42 westbound at J21 to access Birmingham and its surrounds. For Birmingham city centre, Digbeth, and Aston, we use the M42/A446 or M6/A38(M) depending on traffic. For south Birmingham (Moseley, Kings Heath, Bournville), J3 of the M42 and the A435 is efficient. Solihull and the NEC area are served via M42/J6. The M42 approach to Birmingham is generally less congested than the M6 — we route around the M6 spaghetti junction unless specifically needed. Journey time is 1.5–2 hours outside peak.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, student move, small flat' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, furniture and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household' },
    ],
    faqs: [
      {
        question: 'How much does Sheffield to Birmingham cost?',
        answer: 'An LWB van (single room or small 1-bed) costs £250–350. A Sprinter (1–2 bed flat) costs £350–480. A Luton with two men (2–3 bed house) costs £480–600. These are fixed prices including loading, transport, and unloading. No fuel extras.',
      },
      {
        question: 'Which route do you take from Sheffield to Birmingham?',
        answer: 'M1 south from J33 Sheffield, then M42 westbound at J21A. This avoids the M6 through Coventry and the famously congested M6 through Birmingham — the M42 is typically the faster approach. For deliveries in central Birmingham (B1–B5), we join the M6 at J6 and approach via the Aston Expressway. For south Birmingham (Moseley, Bournville), M42 J3 and the A435 is faster.',
      },
      {
        question: 'Can you do a same-day Sheffield to Birmingham move?',
        answer: 'Yes for smaller van sizes (LWB or Sprinter) with early morning departures — loading in Sheffield by 8am means delivery in Birmingham by 10:30am. For Luton van moves with two men and a full house, we recommend booking a morning start and allowing a full day. Return journey to Sheffield on the same day is possible for smaller moves.',
      },
      {
        question: 'Do you deliver to Solihull and the NEC area?',
        answer: 'Yes. Solihull, the NEC, and the M42/J6 business park corridor are familiar destinations. Many of our Birmingham moves are professional relocations for people working in the Solihull motor industry cluster (Jaguar Land Rover HQ is at Lode Lane). We know the access routes to all major Solihull postcodes.',
      },
    ],
    tips: [
      'M42 is almost always faster than M6 for approaching Birmingham from the north — avoid M6 unless your destination is Coventry or the motorway itself',
      'Birmingham city centre has clean air zone charges for older vehicles — our vans are compliant and any charges are in your quote',
      'For deliveries around Digbeth and the Custard Factory area, morning slots before 10am avoid the creative quarter\'s afternoon street activity',
      'Allow 30 extra minutes for south Birmingham (Moseley, Kings Heath) during school run hours 8–9am and 3–4pm',
      'The M42/M1 interchange at J21A can be slow in peak — departing Sheffield by 7:30am clears it before morning congestion',
    ],
    relatedRoutes: ['sheffield-to-london', 'sheffield-to-nottingham', 'sheffield-to-bristol'],
  },
  {
    slug: 'sheffield-to-liverpool',
    from: 'Sheffield',
    to: 'Liverpool',
    distance: '80 miles',
    driveTime: '1.5–2 hours',
    typicalCost: '£240–£580',
    heroHeading: 'Man With A Van Sheffield to Liverpool',
    metaTitle: 'Man With A Van Sheffield to Liverpool | Fixed-Price Removals',
    metaDescription: 'Man and van from Sheffield to Liverpool. 80 miles via M1/M62, fixed-price quotes. Typical cost £240–£580. Fully insured, 7 days a week.',
    intro: 'Sheffield to Liverpool runs along the M1/M62 trans-Pennine corridor — one of the great freight and migration routes of northern England. The journey takes 1.5–2 hours in normal traffic, crossing the Pennines via the M62. We do this route regularly for people relocating between Sheffield\'s tech and manufacturing sector and Liverpool\'s expanding digital, maritime, and creative industries. A fixed-price dedicated van service — your items are the only load.',
    routeDetails: 'From Sheffield J33 or J34, we take the M1 north to J35a (Rotherham/Doncaster junction), then the M18 westbound to join the M62 at J35. The M62 runs west across the Pennines through the landmark high-altitude stretch above Hartshead Moor — one of the highest motorways in England — before descending towards Manchester and continuing to Liverpool. We exit at M62 J4 for the Wavertree/Knotty Ash approach to Liverpool, or M57/J2 for the north and Anfield area. For Liverpool city centre and the waterfront, we use the A5080 approach. Journey total via M1/M18/M62 is approximately 80 miles.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, small flat, student move' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, furniture and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household move' },
    ],
    faqs: [
      {
        question: 'What route do you take from Sheffield to Liverpool?',
        answer: 'M1 north from Sheffield J33/J34 to J35a, then M18 westbound to join the M62. The M62 crosses the Pennines and runs west to Liverpool. This is the standard freight and removal route — faster and more reliable than routing through Manchester. Total distance approximately 80 miles. Allow 90 minutes in normal traffic; up to 2.5 hours at peak on the M62.',
      },
      {
        question: 'How much does a Sheffield to Liverpool move cost?',
        answer: 'An LWB van for a single room or small flat costs £240–320. A Sprinter for a 1–2 bed flat costs £320–440. A Luton with two men for a full house costs £440–580. Fixed prices — loading, transport, and unloading included.',
      },
      {
        question: 'Can you deliver to Liverpool\'s Baltic Triangle or Ropewalks?',
        answer: 'Yes. Liverpool\'s creative quarters — Baltic Triangle, Ropewalks, and the converted warehouse districts near the waterfront — are popular destinations for younger relocators from Sheffield. We know the access routes and loading restrictions in these areas. The Baltic Triangle in particular has tight cobbled streets where a Transit LWB is often more practical than a Luton van.',
      },
      {
        question: 'Can you also collect from Liverpool and deliver back to Sheffield?',
        answer: 'Yes. Return loads are possible — if you\'re moving in both directions or want a part-load return, we can arrange this at a reduced rate. Sheffield to Liverpool and back same-day is feasible for Sprinter-sized moves departing Sheffield by 8am.',
      },
    ],
    tips: [
      'M62 over the Pennines is exposed in winter — heavy snow can close the high section (near Hartshead Moor); check Met Office road alerts for winter moves',
      'Liverpool city centre loading is possible from 7am — move before 9am to avoid the waterfront\'s peak tourist and event traffic',
      'Baltic Triangle: Transit LWB or Sprinter is better than Luton for the narrow cobbled streets',
      'The M62/M57 Liverpool approach can be slow from 4pm — morning arrival is strongly recommended',
      'Liverpool\'s Concert Square and city centre have event-day restrictions; always check what\'s on at the Echo Arena or EXPO before planning a weekend move',
    ],
    relatedRoutes: ['sheffield-to-manchester', 'sheffield-to-leeds', 'sheffield-to-newcastle'],
  },
  {
    slug: 'sheffield-to-edinburgh',
    from: 'Sheffield',
    to: 'Edinburgh',
    distance: '215 miles',
    driveTime: '3.5–4.5 hours',
    typicalCost: '£500–£1,100',
    heroHeading: 'Man With A Van Sheffield to Edinburgh',
    metaTitle: 'Man With A Van Sheffield to Edinburgh | Long-Distance Removals',
    metaDescription: 'Long-distance man and van from Sheffield to Edinburgh. 215 miles via M1/A1, fixed-price quotes. Typical cost £500–£1,100. Dedicated van, 7 days a week.',
    intro: 'Sheffield to Edinburgh is a full day\'s work — 215 miles via the M1 and A1(M), typically 3.5–4.5 hours driving time. We do this route for professional relocations, academic moves (Sheffield academics taking up Edinburgh University posts and vice versa), and families making long-term moves to Scotland. A dedicated van with a fixed price — no groupage, no shared loads, no surprises. For full house moves, we recommend a two-day booking with overnight accommodation near the Scottish border.',
    routeDetails: 'From Sheffield J33/J34, we take the M1 north to J47, then the A1(M) northbound all the way to Scotland. The A1(M) runs through Wetherby, Doncaster bypass, Durham, and Newcastle, crossing into Scotland at the Tweed and entering Edinburgh via the A1 through Musselburgh. This is the preferred removal route over the M62/M6 alternative — the A1(M) has better services, fewer toll implications, and more predictable journey times for removals. We break at Durham Services (approximately midway) on longer Luton van moves. Edinburgh access via the A1 into Portobello or directly to the city centre ring road works well for all van sizes.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, student move between the two cities' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, furniture and 30–50 boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household move — may require two-day booking' },
    ],
    faqs: [
      {
        question: 'How much does Sheffield to Edinburgh cost?',
        answer: 'An LWB van (single room or small flat) costs £500–650. A Sprinter (1–2 bed flat) costs £650–850. A Luton with two men (2–3 bed house) costs £850–1,100. These are fixed prices inclusive of all fuel, loading, and unloading. For two-day moves with Luton vans, overnight accommodation is booked separately but we can recommend options near the A1(M) services.',
      },
      {
        question: 'Can you do Sheffield to Edinburgh in one day?',
        answer: 'For LWB and Sprinter moves, yes — departing Sheffield by 6:30am means arrival in Edinburgh by 11am–12pm, leaving a full afternoon for unloading. For Luton van moves with a large house load, we recommend a two-day schedule: load in Sheffield in the morning, drive to Edinburgh, unload the next morning. This gives the team adequate rest time and avoids rushing the unload.',
      },
      {
        question: 'Do you know Edinburgh\'s parking and tram restrictions?',
        answer: 'Yes. Edinburgh\'s Princes Street and the city centre have a tram network similar to Sheffield\'s Supertram — tram lanes restrict van stopping on the main routes. For city centre deliveries, we use loading bays on adjacent streets. Leith and Newington have good van access. The New Town\'s Georgian streets are wide and accessible. Edinburgh has a congestion charge scheme in development — we\'ll advise of any applicable charges at quoting stage.',
      },
      {
        question: 'What\'s the best route from Sheffield to Edinburgh?',
        answer: 'The A1(M) via Wetherby, York bypass, Doncaster, Durham, and Newcastle is our preferred route. It\'s fully dual carriageway or motorway standard throughout (except for brief A1 sections in Northumberland). The M6 western alternative through Carlisle adds distance and passes through potentially more congested urban sections. For Edinburgh specifically, the A1 eastern route is correct — it goes directly to Edinburgh rather than approaching from the west via Glasgow.',
      },
    ],
    tips: [
      'Depart Sheffield by 6:30am for a morning Edinburgh arrival and maximum unloading time',
      'The A1(M)/A1 services at Durham are the ideal halfway stop — fuel, food, and rest for a north-bound move',
      'Check Edinburgh\'s local parking restrictions — Marchmont and Newington have permit zones',
      'August in Edinburgh is Festival season — avoid moving week during the Edinburgh Fringe if possible as access is extremely difficult',
      'For two-day moves, Scotch Corner services or Durham area hotels are convenient overnight stops for removal crews',
    ],
    relatedRoutes: ['sheffield-to-newcastle', 'sheffield-to-leeds', 'sheffield-to-london'],
  },
  {
    slug: 'sheffield-to-bristol',
    from: 'Sheffield',
    to: 'Bristol',
    distance: '155 miles',
    driveTime: '2.5–3 hours',
    typicalCost: '£350–£800',
    heroHeading: 'Man With A Van Sheffield to Bristol',
    metaTitle: 'Man With A Van Sheffield to Bristol | Fixed-Price Removals',
    metaDescription: 'Man and van from Sheffield to Bristol. 155 miles via M1/M5, fixed-price quotes. Typical cost £350–£800. Graduate relocations, fully insured, 7 days a week.',
    intro: 'Sheffield to Bristol is one of the longer day-trip removal routes we cover regularly — 155 miles via the M1 and M5, around 2.5–3 hours in normal traffic. The Sheffield–Bristol corridor carries a steady flow of graduate relocations (both cities have large universities with significant graduate mobility) and professional moves for people entering or leaving the southwest tech and aerospace sector. A fixed-price dedicated service with no groupage.',
    routeDetails: 'From Sheffield J33/J34, we head south on the M1 to the M1/M5 interchange at J15a (Brinklow, near Coventry). The M5 southbound then carries us through Worcester, Tewkesbury, and into Bristol via J16 (Aztec West/Cribbs Causeway) or J19 (Portishead junction) for the south side. For Bristol city centre, Clifton, and Stokes Croft, we route via J17/A4018. For the east side (Easton, St George, Fishponds), J18/M32. Total distance approximately 155 miles. Journey time 2.5–3 hours off-peak, up to 4 hours through the M5 at peak on Fridays.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, graduate move, small 1-bed' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, furniture and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household move' },
    ],
    faqs: [
      {
        question: 'How much does Sheffield to Bristol cost?',
        answer: 'An LWB van (single room or small flat) costs £350–480. A Sprinter (1–2 bed flat) costs £480–650. A Luton with two men (full house) costs £650–800. Fixed prices including all fuel and labour. No fuel surcharges.',
      },
      {
        question: 'Can you deliver to Clifton or Cotham in Bristol?',
        answer: 'Yes — Clifton, Cotham, Redland, and Montpelier are familiar Bristol destinations. These areas have narrow Victorian terrace streets not unlike Sheffield\'s Crookes or Walkley — tight parking, steep hills (Clifton is famously hilly), and residents\' permit zones throughout. We\'ll arrange parking dispensations for loading in permit zones. Clifton\'s Georgian properties with multiple floors require a 2-man team for larger items.',
      },
      {
        question: 'What\'s the best time to do Sheffield to Bristol?',
        answer: 'Tuesday to Thursday mornings are the best combination of clear M1/M5 and available parking at the Bristol end. Avoid Friday afternoons — the M5 southbound toward Bristol is extremely congested from 2pm onwards as it carries weekend leisure traffic to the southwest. We recommend departing Sheffield by 8am on a weekday for Bristol arrival by 11am.',
      },
      {
        question: 'Do you know Bristol\'s clean air zone?',
        answer: 'Yes. Bristol operates a Clean Air Zone in the city centre. Our vans meet the required emission standards for the zone and any applicable charges are included in your quote. If you\'re moving to a suburb outside the CAZ (Bedminster, Bishopsworth, Henleaze), the CAZ doesn\'t apply.',
      },
    ],
    tips: [
      'Avoid Friday afternoon departures — M5 south is the worst-affected route for weekend traffic in England',
      'Clifton parking: apply for a loading exemption from Bristol City Council 5 working days before your move date',
      'For Stokes Croft and St Pauls moves, early morning (before 9am) arrival is essential for practical street access',
      'M1/M5 interchange at J15a/J15 can have significant daytime congestion — the A46 ring road around Coventry is a useful alternative if the M1 is slow near J17',
      'Bristol Clean Air Zone applies to diesel vehicles pre-Euro 6 and petrol pre-Euro 4 — our vans are compliant',
    ],
    relatedRoutes: ['sheffield-to-birmingham', 'sheffield-to-london', 'sheffield-to-nottingham'],
  },
  {
    slug: 'sheffield-to-newcastle',
    from: 'Sheffield',
    to: 'Newcastle',
    distance: '130 miles',
    driveTime: '2–2.5 hours',
    typicalCost: '£300–£700',
    heroHeading: 'Man With A Van Sheffield to Newcastle',
    metaTitle: 'Man With A Van Sheffield to Newcastle | Fixed-Price Removals',
    metaDescription: 'Man and van from Sheffield to Newcastle. 130 miles via M1/A1, fixed-price quotes. Typical cost £300–£700. Fully insured, 7 days a week.',
    intro: 'Sheffield to Newcastle is a clean north-north run — 130 miles up the M1 and A1(M) through Yorkshire, County Durham, and into Tyneside. Around 2–2.5 hours in normal traffic. The route carries graduate moves between Newcastle and Sheffield universities, professional relocations into and out of the northeast, and family moves between South Yorkshire and Tyne & Wear. We provide a dedicated van service with a fixed price: no groupage, no shared loads.',
    routeDetails: 'From Sheffield J33/J34, we take the M1 north to J46 (Leeds), then join the A1(M) northbound through Wetherby, Doncaster bypass, and the A1(M) through Durham to Newcastle. We approach Newcastle via the A1(M)/A184 east or via the A19 depending on destination. For the city centre, Jesmond, and the Quayside, we cross the Tyne Bridge and use the A167. Gateshead is served via J67 of the A1. Sunderland adds an extra 20 minutes via the A19. Total A1(M) route: approximately 130 miles.',
    whatFits: [
      { van: 'LWB Van', capacity: '~10 cubic metres', bestFor: 'Single room, student move, small flat' },
      { van: 'Sprinter Van', capacity: '~14 cubic metres', bestFor: '1–2 bed flat, furniture and boxes' },
      { van: 'Luton Van', capacity: '~20 cubic metres', bestFor: '2–3 bed house, full household move' },
    ],
    faqs: [
      {
        question: 'How much does Sheffield to Newcastle cost?',
        answer: 'An LWB van (single room or small flat) costs £300–420. A Sprinter (1–2 bed flat) costs £420–570. A Luton with two men (full house) costs £570–700. Fixed prices including loading, transport, and unloading. No fuel extras.',
      },
      {
        question: 'What\'s the route from Sheffield to Newcastle?',
        answer: 'M1 north from Sheffield J33 to J46 Leeds, then A1(M) northbound through Wetherby, Doncaster, Durham, and into Newcastle upon Tyne. The A1(M) is dual carriageway standard throughout. Journey time 2–2.5 hours off-peak. The A1(M) through Durham City can be slow in peak hours — the Durham bypass section sometimes queues at the M1 junction.',
      },
      {
        question: 'Can you deliver to Jesmond or the Quayside?',
        answer: 'Yes. Jesmond and Heaton are the most common student and young professional areas for Newcastle moves — similar in character to Sheffield\'s Crookes, with Victorian terraces and permit parking zones throughout NE2. The Quayside has modern apartment buildings with loading bays. We know both areas well from regular deliveries.',
      },
      {
        question: 'Do you do Sheffield to Sunderland or Durham?',
        answer: 'Yes — Durham and Sunderland are both on or near our A1(M) route and we deliver to both. Durham adds only 15 minutes to the Newcastle run. Sunderland is served via the A19 from Washington — typically 20–30 minutes from Newcastle. Both are quoted on the same basis as Newcastle.',
      },
    ],
    tips: [
      'A1(M) through Durham City is the most likely congestion point — allow 30 extra minutes for peak-hour passages through the Durham section',
      'Newcastle Quayside loading bays fill quickly on weekend mornings — confirm your slot with building management in advance',
      'Jesmond permit zones (NE2) require dispensations for full-day loading — apply via Newcastle City Council 5 working days in advance',
      'For Gateshead moves, approach via A184 from J65 of the A1 — avoids the Tyne Bridge city centre queue',
      'Depart Sheffield by 7:30am for a pre-peak Newcastle arrival and easiest access to city centre and quayside addresses',
    ],
    relatedRoutes: ['sheffield-to-edinburgh', 'sheffield-to-leeds', 'sheffield-to-london'],
  },
];

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find((r) => r.slug === slug);
}

export function getRelatedRoutes(slugs: string[]): Route[] {
  return slugs.map((slug) => routes.find((r) => r.slug === slug)).filter(Boolean) as Route[];
}
