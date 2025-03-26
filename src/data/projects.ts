export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'wildlife' | 'landscape';
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Lions of the Serengeti",
    description: "A stunning series capturing the daily life of lion prides in Tanzania's Serengeti National Park.",
    image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
    category: "wildlife"
  },
  {
    id: 2,
    title: "Arctic Wilderness",
    description: "Documenting the harsh beauty of the Arctic and its remarkable wildlife.",
    image: "https://images.unsplash.com/photo-1494564605686-2e931f77a8e2",
    category: "landscape"
  },
  {
    id: 3,
    title: "Amazonian Birds",
    description: "Vibrant portraits of rare bird species in the Amazon rainforest.",
    image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890",
    category: "wildlife"
  },
  {
    id: 4,
    title: "Mountain Landscapes",
    description: "Dramatic vistas from the world's most remote mountain ranges.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    category: "landscape"
  },
  {
    id: 5,
    title: "African Elephants",
    description: "An intimate look at elephant families in their natural habitat.",
    image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
    category: "wildlife"
  },
  {
    id: 6,
    title: "Desert Life",
    description: "Capturing the surprising biodiversity of desert ecosystems.",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    category: "wildlife"
  },
  {
    id: 7,
    title: "Icelandic Fjords",
    description: "The raw beauty of Iceland's dramatic coastline and pristine fjords.",
    image: "https://images.unsplash.com/photo-1598691396645-77b871147e3d",
    category: "landscape"
  },
  {
    id: 8,
    title: "Himalayan Peaks",
    description: "Majestic mountain ranges and valleys of the Himalayas.",
    image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d",
    category: "landscape"
  },
  // Featured works from Home page
  {
    id: 9,
    title: "African Savanna",
    description: "A lion pride at sunset",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    category: "wildlife"
  },
  {
    id: 10,
    title: "Arctic Wonder",
    description: "Polar bears in their natural habitat",
    image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
    category: "wildlife"
  },
  {
    id: 11,
    title: "Rainforest Life",
    description: "Vibrant macaws in the Amazon",
    image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14",
    category: "wildlife"
  }
];
