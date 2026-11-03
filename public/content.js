/*
  EVERYTHING YOU WILL WANT TO CHANGE LIVES IN THIS FILE.
  Business details, packages, vehicles, tours, stays, reviews, map places.
  Anything with `confirm: true`, "To confirm" or "₹ ____" still needs Jobin's answer.
*/
window.SITE = {
  business: {
    name: "White Pearl",
    fullName: "White Pearl Tours & Travels",
    phone: "+91 98477 71945",
    phoneLink: "+919847771945",
    phone2: "+91 99613 77736",
    phone2Link: "+919961377736",
    whatsapp: "919847771945",
    email: "jobinjosephktm@gmail.com",
    website: "whitepearltravels.com",
    // Jobin wrote "whitepearl143" but his link is "whitepeal143". CONFIRM which is right.
    instagram: "whitepeal143",
    address: "Mukkoottuthara, Erumeli, Kottayam district, Kerala",  // CONFIRM: full address + PIN
    hours: "Open every day. Day and night during the Sabarimala season.", // CONFIRM
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mukkoottuthara%2C+Erumeli%2C+Kerala" // CONFIRM: his exact pin
  },

  // The new Force Traveller. Feature points are from Jobin's own posters.
  newArrival: {
    features: [
      { icon: "seat", title: "Spacious & comfortable", body: "Push-back seats and room to stretch on the long drive up." },
      { icon: "snow", title: "Premium AC interior", body: "A cool, clean cabin for the plains and the ghat climb.", confirm: true },
      { icon: "shield", title: "Safe & reliable", body: "A brand-new vehicle and a careful driver." },
      { icon: "group", title: "Perfect for groups", body: "One vehicle for the whole family or the whole kettunira party." },
      { icon: "bag", title: "Luggage space", body: "Room for every irumudi, bag and pooja kit." }
    ],
    specs: [
      { k: "Vehicle", v: "Force Traveller" },
      { k: "Engine", v: "FM 2.6 CR diesel" },
      { k: "Seats", v: "To confirm", confirm: true },
      { k: "AC", v: "To confirm", confirm: true }
    ]
  },

  pilgrim: [
    { title: "Erumeli to Nilakkal and back", when: "Same day", body: "After prayers at Erumeli we drive you up to Nilakkal base camp, wait while you climb, and bring you back down.", vehicles: "Traveller · Car", price: "Price on request", ph: true },
    { title: "Railway station darshan trip", when: "1–2 days", body: "Pickup at Chengannur, Kottayam or Thiruvalla station, Erumeli on the way, Nilakkal, and back to your train.", vehicles: "Traveller · Car", price: "Price on request", ph: true },
    { title: "Airport darshan trip", when: "2 days", body: "Pickup at Kochi or Thiruvananthapuram airport, a room for the night, darshan, and a drop for your flight home.", vehicles: "Traveller · Car", price: "Price on request", ph: true },
    { title: "Petta Thullal at Erumeli", when: "January", body: "Join the Petta Thullal in Erumeli before the climb. We know the town's lanes on festival days.", vehicles: "Traveller", price: "Ask for group price", ph: true },
    { title: "Temple circuit on the way home", when: "1 day", body: "Pandalam Valiyakoyikkal, Aranmula Parthasarathy, Chengannur Mahadeva and more, in one unhurried day.", vehicles: "Any vehicle", price: "Price on request", ph: true },
    { title: "Darshan, then the hills", when: "3–4 days", body: "After darshan, two days in Munnar or Thekkady before you head home. One driver for the whole trip.", vehicles: "Traveller · Car", price: "Price on request", ph: true }
  ],

  // Real photos for the two Travellers. The sedan and SUV use sample photos (marked on the card)
  // until Jobin confirms which cars he has: change the note, or delete the card.
  fleet: [
    { name: "Force Traveller", badge: "New arrival", isNew: true, photo: "img/new-side.jpg", pos: "50% 55%", seats: "Seats to confirm", ac: "AC to confirm", note: "Brand new, ready for the 2026–27 season.", rate: "Rate on request" },
    { name: "Force Traveller", badge: "KL 67 9998", photo: "img/traveller-kl67.jpg", pos: "50% 64%", seats: "Seats to confirm", ac: "AC to confirm", note: "Our trusted Traveller, WHITE PEARL on the windscreen.", rate: "Rate on request" },
    { name: "Sedan", badge: "Toyota Etios or similar", photo: "img/stock/car.jpg", pos: "55% 62%", sample: true, seats: "4 seats", ac: "AC", note: "A comfortable car with a driver, for couples, small families and airport runs.", rate: "Rate on request", guess: true },
    { name: "SUV", badge: "Innova Crysta or similar", photo: "img/stock/suv.jpg", pos: "42% 55%", sample: true, seats: "7 seats", ac: "AC", note: "Room for a family of seven and their bags, for hill roads and long drives.", rate: "Rate on request", guess: true }
  ],

  // From Jobin's posters, plus Sabarimala and hotels
  services: [
    { icon: "hill", title: "Sabarimala trips", body: "Erumeli, Nilakkal, Petta Thullal and temple circuits." },
    { icon: "plane", title: "Airport transfers", body: "Kochi and Thiruvananthapuram, any hour." },
    { icon: "road", title: "Outstation trips", body: "Across Kerala and South India, by the day or by the km." },
    { icon: "brief", title: "Corporate travel", body: "Staff, guests and events, on time." },
    { icon: "map", title: "Tour packages", body: "Munnar, Thekkady, Alleppey and more." },
    { icon: "bed", title: "Hotel booking", body: "2-star to 5-star, home stays, tents and pool resorts." }
  ],

  // The corporate page (premium.html): the whole travel company, Sabarimala as one service.
  // `confirm: true` = Jobin must say yes before going live.
  corporate: {
    services: [
      { icon: "van", title: "Tempo Traveller hire", body: "Force Travellers with a driver, for families, groups, weddings and events." },
      { icon: "car", title: "Car & SUV hire", body: "Sedans and SUVs with a driver, for smaller groups.", confirm: true },
      { icon: "plane", title: "Airport & station transfers", body: "Kochi and Thiruvananthapuram airports; Kottayam, Chengannur and Thiruvalla stations. Any hour." },
      { icon: "map", title: "Kerala tour packages", body: "Munnar, Thekkady, Alleppey, Kumarakom, Vagamon and Kochi, planned day by day." },
      { icon: "hill", title: "Pilgrimage tours", body: "Sabarimala, Erumeli, Petta Thullal and temple circuits across Kerala." },
      { icon: "bed", title: "Hotel & resort booking", body: "2-star to 5-star hotels, home stays, tent stays and pool resorts." },
      { icon: "brief", title: "Corporate & event travel", body: "Staff transport, visiting guests and events, on time." },
      { icon: "road", title: "Outstation trips", body: "Across Kerala and South India, by the day or by the km." }
    ],
    // "Popular trips" cards. Prices read "Price on request" until Jobin sets them.
    offers: [
      { tag: "Season 2026–27", title: "Sabarimala trips", body: "Mandala–Makaravilakku bookings are open. Pickup from your home, the station or the airport.", price: "Price on request", photo: "img/stock/sabarimala.jpg", pos: "50% 28%", icon: "hill", c: ["#f0a23b", "#b8532a"], trip: "Pilgrimage", to: "Nilakkal / Pamba" },
      { tag: "2 days", title: "Munnar getaway", body: "Tea hills, Eravikulam and Mattupetty dam, with the hotel booked for you.", price: "Price on request", photo: "img/stock/munnar-wide.jpg", pos: "50% 60%", icon: "map", c: ["#3fae6a", "#0f5b47"], trip: "Kerala tour", to: "Munnar" },
      { tag: "1 night", title: "Alleppey houseboat", body: "A night on the backwaters, with the drive there and back.", price: "Price on request", photo: "img/stock/houseboat.jpg", pos: "50% 55%", icon: "bed", c: ["#22b3d6", "#12536b"], trip: "Kerala tour", to: "Alleppey" },
      { tag: "Any hour", title: "Airport pickup", body: "Kochi and Thiruvananthapuram airports, in a clean car or Traveller.", price: "Price on request", photo: "img/stock/airport.jpg", pos: "30% 40%", icon: "plane", c: ["#3a4a72", "#121a2e"], trip: "Station / airport transfer", from: "Kochi airport" }
    ],
    ticker: ["Kochi Airport", "Munnar", "Thekkady", "Alleppey", "Kumarakom", "Vagamon", "Fort Kochi", "Kottayam", "Thiruvananthapuram", "Erumeli", "Sabarimala", "Chengannur"],
    why: [
      { title: "A brand-new Force Traveller", body: "Clean, comfortable and on the road for the 2026–27 season." },
      { title: "Experienced drivers", body: "Hill roads, city traffic and night drives, with the same driver for your whole trip.", confirm: true },
      { title: "One team, one call", body: "Vehicle, driver, rooms and route arranged together. You deal with one person." },
      { title: "Price agreed before you go", body: "The fare is confirmed on WhatsApp before the trip. No surprises at the end." },
      { title: "Open every day", body: "Call or WhatsApp at any hour in season.", confirm: true },
      { title: "Pilgrims respected", body: "No alcohol, no smoking and no non-veg food in the vehicle during a vratham." }
    ]
  },

  tours: [
    { place: "Munnar", days: "2 days", body: "Tea hills, Eravikulam, Mattupetty dam and cool mornings.", hue: "#2f9e5f", sky: ["#62c3ff", "#d9f3ff"], scene: "hills", photo: "img/stock/munnar.jpg", pos: "55% 50%" },
    { place: "Thekkady", days: "1–2 days", body: "Periyar lake, spice gardens and a boat ride at dawn.", hue: "#4b9a3a", sky: ["#ff9f5a", "#ffe3a6"], scene: "lake", photo: "img/stock/thekkady.jpg", pos: "46% 50%" },
    { place: "Alleppey", days: "1 night", body: "A night on a houseboat through the backwaters.", hue: "#1aa3c9", sky: ["#46b7ff", "#c8efff"], scene: "boat", photo: "img/stock/alleppey.jpg", pos: "68% 50%" },
    { place: "Kumarakom", days: "1 day", body: "Vembanad lake, the bird sanctuary and a quiet lakeside stay.", hue: "#13a39a", sky: ["#ff7a5c", "#ffd29b"], scene: "palms", photo: "img/stock/kumarakom.jpg", pos: "32% 50%" },
    { place: "Vagamon", days: "1 day", body: "Meadows, pine forest and the hills closest to Erumeli.", hue: "#58b048", sky: ["#7fd0ff", "#eaf8ff"], scene: "hills", photo: "img/stock/vagamon.jpg", pos: "62% 50%" },
    { place: "Kochi", days: "1 day", body: "Fort Kochi, the Chinese fishing nets, Mattancherry, and the airport on the way.", hue: "#e0733d", sky: ["#ff6f61", "#ffc48a"], scene: "nets", photo: "img/stock/kochi.jpg", pos: "56% 50%" }
  ],

  // Stays: Jobin confirmed all of these are available
  stars: [2, 3, 4, 5],
  stays: [
    { title: "Hotel rooms", body: "Near Erumeli, Kottayam and Kochi, from simple rooms to luxury.", photo: "img/stock/hotel.jpg", pos: "50% 62%" },
    { title: "Home stays", body: "Stay with a Kerala family, with home-cooked food.", photo: "img/stock/homestay.jpg", pos: "45% 50%" },
    { title: "Tent stays", body: "Camps in the hills for a night under the stars.", photo: "img/stock/tent.jpg", pos: "50% 72%" },
    { title: "Pool resorts", body: "A resort with a pool to rest after the pilgrimage.", photo: "img/stock/pool.jpg", pos: "50% 60%" }
  ],

  // CONFIRM each of these with Jobin before going live
  why: [
    { title: "Based in Mukkoottuthara", body: "On the pilgrim road, minutes from Erumeli. We know every turn to Nilakkal." },
    { title: "Ghat-road drivers", body: "Experienced on hill roads in rain, fog and season traffic." },
    { title: "We respect the vratham", body: "No alcohol, no smoking, no non-veg food in the vehicle during your pilgrimage." },
    { title: "Price before you travel", body: "The fare is agreed on WhatsApp before the trip. No surprises at the end." },
    { title: "Day and night in season", body: "Someone answers the phone at 3 a.m. in Vrischikam." },
    { title: "Guests from everywhere", body: "Pilgrims from every state, and guests from abroad met at the airport." }
  ],

  // Real reviews only — never invent them. The Reviews section stays hidden while this list is empty.
  // Add one like: { text: "Two or three lines from the customer.", who: "Name, town", trip: "Sabarimala, Dec 2026" }
  reviews: [],

  // Places on the map. kind: base | pilgrim | transit | tour. Positions approximate.
  // The moving strip of place names under the booking form
  ticker: ["Erumeli", "Nilakkal", "Pamba", "Sabarimala", "Pandalam", "Chengannur", "Kottayam", "Kochi Airport", "Thiruvananthapuram", "Munnar", "Thekkady", "Vagamon", "Alleppey", "Kumarakom"],

  places: [
    { name: "Mukkoottuthara", lat: 9.445, lon: 76.875, kind: "base", dx: 0, dy: 30, anchor: "middle" },
    { name: "Erumeli", lat: 9.481, lon: 76.842, kind: "pilgrim", dx: -10, dy: -10, anchor: "end" },
    { name: "Nilakkal", lat: 9.365, lon: 76.99, kind: "pilgrim", dx: 8, dy: 22 },
    { name: "Pamba", lat: 9.39, lon: 77.06, kind: "pilgrim", dx: 10, dy: 18 },
    { name: "Sabarimala", lat: 9.435, lon: 77.081, kind: "pilgrim", dx: 10, dy: -8 },
    { name: "Pandalam", lat: 9.225, lon: 76.678, kind: "pilgrim", dx: 10, dy: 4 },
    { name: "Kottayam", lat: 9.594, lon: 76.522, kind: "transit", dx: 10, dy: 4 },
    { name: "Chengannur", lat: 9.318, lon: 76.611, kind: "transit", dx: -10, dy: 14, anchor: "end" },
    { name: "Thiruvalla", lat: 9.385, lon: 76.575, kind: "transit", dx: -10, dy: -6, anchor: "end" },
    { name: "Kochi Airport", lat: 10.152, lon: 76.401, kind: "transit", dx: 10, dy: 4 },
    { name: "Munnar", lat: 10.089, lon: 77.06, kind: "tour", dx: -10, dy: 4, anchor: "end" },
    { name: "Thekkady", lat: 9.602, lon: 77.161, kind: "tour", dx: -10, dy: -8, anchor: "end" },
    { name: "Vagamon", lat: 9.686, lon: 76.905, kind: "tour", dx: 10, dy: 4 },
    { name: "Kumarakom", lat: 9.617, lon: 76.43, kind: "tour", dx: -10, dy: -8, anchor: "end" },
    { name: "Alleppey", lat: 9.498, lon: 76.339, kind: "tour", dx: 10, dy: 16 }
  ]
};
