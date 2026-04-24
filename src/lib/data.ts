export interface Destination {
  slug: string;
  name: string;
  region: string;
  country: string;
  tagline: string;
  lat: string;
  lng: string;
  image: string;
  video?: string;
}

export interface Package {
  slug: string;
  title: string;
  location: string;
  duration: string;
  from: string;
  rating: number;
  highlights: string[];
  image: string;
}

export const destinations: Destination[] = [
  {
    slug: "patagonia",
    name: "Patagonia",
    region: "South America",
    country: "Argentina / Chile",
    tagline: "Where wind carves the edge of the earth.",
    lat: "49.3°S",
    lng: "73.0°W",
    image:
      "https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "kyoto",
    name: "Kyoto",
    region: "East Asia",
    country: "Japan",
    tagline: "A thousand temples breathing in slow motion.",
    lat: "35.0°N",
    lng: "135.7°E",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    region: "North Africa",
    country: "Morocco",
    tagline: "Terracotta walls, rose light, silk smoke.",
    lat: "31.6°N",
    lng: "8.0°W",
    image:
      "https://images.unsplash.com/photo-1597212720291-936a6d2a9da6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "faroe",
    name: "Faroe Islands",
    region: "North Atlantic",
    country: "Denmark",
    tagline: "Eighteen green cathedrals rising from the sea.",
    lat: "62.0°N",
    lng: "6.8°W",
    image:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    region: "High Himalaya",
    country: "India",
    tagline: "A moonscape lit with monasteries and prayer flags.",
    lat: "34.1°N",
    lng: "77.5°E",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "amalfi",
    name: "Amalfi Coast",
    region: "Mediterranean",
    country: "Italy",
    tagline: "Lemons, limestone, and impossibly blue afternoons.",
    lat: "40.6°N",
    lng: "14.6°E",
    image:
      "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "namibia",
    name: "Namib Desert",
    region: "Southern Africa",
    country: "Namibia",
    tagline: "Red dunes older than memory.",
    lat: "24.7°S",
    lng: "15.3°E",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "iceland",
    name: "Reykjanes",
    region: "North Atlantic",
    country: "Iceland",
    tagline: "A planet still being invented.",
    lat: "63.8°N",
    lng: "22.5°W",
    image:
      "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1600&q=80",
  },
];

export const packages: Package[] = [
  {
    slug: "patagonia-traverse",
    title: "Patagonia Traverse",
    location: "Torres del Paine → El Chaltén",
    duration: "12 days",
    from: "$6,480",
    rating: 4.97,
    highlights: ["Glacier trekking", "Private refugio", "Puma tracking"],
    image:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "kyoto-slow-season",
    title: "Kyoto, Slow Season",
    location: "Kyoto & Nara",
    duration: "8 days",
    from: "$4,960",
    rating: 4.95,
    highlights: ["Temple dawn walk", "Tea ceremony", "Ryokan onsen"],
    image:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "sahara-nights",
    title: "Sahara Nights",
    location: "Marrakech → Merzouga",
    duration: "9 days",
    from: "$5,240",
    rating: 4.92,
    highlights: ["Atlas mountains", "Berber dinners", "Dune camp"],
    image:
      "https://images.unsplash.com/photo-1489493887464-892be6d1daae?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "faroe-expedition",
    title: "Faroe Expedition",
    location: "Tórshavn & the 18 isles",
    duration: "7 days",
    from: "$5,680",
    rating: 4.9,
    highlights: ["Sea-cliff hikes", "Puffin colonies", "Helicopter transit"],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "ladakh-silence",
    title: "Ladakh Silence",
    location: "Leh → Nubra → Pangong",
    duration: "11 days",
    from: "$4,120",
    rating: 4.94,
    highlights: ["Monastery stays", "High passes", "Starlit bivouacs"],
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    slug: "amalfi-private-coast",
    title: "Amalfi, Private Coast",
    location: "Positano → Ravello",
    duration: "6 days",
    from: "$7,240",
    rating: 4.96,
    highlights: ["Private yacht day", "Chef's table", "Cliffside villa"],
    image:
      "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?auto=format&fit=crop&w=1400&q=80",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "They don't plan trips. They compose them. Every meal, every pause, every road bend felt deliberate.",
    author: "Mira Okafor",
    title: "Architect, Lagos",
  },
  {
    quote:
      "The most thoughtful travel team I've worked with — and I've worked with most of them.",
    author: "Henrik Vale",
    title: "Photographer, Oslo",
  },
  {
    quote:
      "Four countries, zero logistics, endless surprise. My partner still talks about the dune dinner.",
    author: "Sana Rehman",
    title: "Founder, Karachi",
  },
  {
    quote:
      "A masterclass in restraint. Nothing flashy. Everything felt earned.",
    author: "David Park",
    title: "Writer, Seoul",
  },
];

export const heroVideos: string[] = [
  "https://videos.pexels.com/video-files/2169880/2169880-uhd_3840_2160_30fps.mp4",
  "https://videos.pexels.com/video-files/4763824/4763824-uhd_3840_2160_24fps.mp4",
];
