export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: 'wildlife' | 'landscape';
    projectImages: string[];
  };
  
  export const projects: Project[] = [
    {
      id: 1,
      title: "Lions of the Serengeti",
      description: "A stunning series capturing the daily life of lion prides in Tanzania's Serengeti National Park.",
      image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
      category: "wildlife",
      projectImages: [
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d",
        "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60",
        "https://images.unsplash.com/photo-1562569633-622303bafef5",
        "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6",
        "https://images.unsplash.com/photo-1501706362039-c06b2d715385",
        "https://images.unsplash.com/photo-1585468274952-66591eb14165"
      ]
    },
    {
      id: 2,
      title: "Arctic Wilderness",
      description: "Documenting the harsh beauty of the Arctic and its remarkable wildlife.",
      image: "https://images.unsplash.com/photo-1494564605686-2e931f77a8e2",
      category: "landscape",
      projectImages: [
        "https://images.unsplash.com/photo-1494564605686-2e931f77a8e2",
        "https://images.unsplash.com/photo-1517783999520-f068d7431a60",
        "https://images.unsplash.com/photo-1520809227329-2f94844a9635",
        "https://images.unsplash.com/photo-1551730459-92db2a308d6a",
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48",
        "https://images.unsplash.com/photo-1579689189913-3017a3e0ac87"
      ]
    },
    {
      id: 3,
      title: "Amazonian Birds",
      description: "Vibrant portraits of rare bird species in the Amazon rainforest.",
      image: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890",
      category: "wildlife",
      projectImages: [
        "https://images.unsplash.com/photo-1452570053594-1b985d6ea890",
        "https://images.unsplash.com/photo-1591198936750-16d8e15edc9f",
        "https://images.unsplash.com/photo-1551085254-e96b210db58a",
        "https://images.unsplash.com/photo-1444464666168-49d633b86797",
        "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f",
        "https://images.unsplash.com/photo-1534278854415-d08e57435bda"
      ]
    },
    {
      id: 4,
      title: "Mountain Landscapes",
      description: "Dramatic vistas from the world's most remote mountain ranges.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
      category: "landscape",
      projectImages: [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99",
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        "https://images.unsplash.com/photo-1495107334309-fcf20f6a8343"
      ]
    },
    {
      id: 5,
      title: "African Elephants",
      description: "An intimate look at elephant families in their natural habitat.",
      image: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
      category: "wildlife",
      projectImages: [
        "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46",
        "https://images.unsplash.com/photo-1581852017103-68ac65514cf7",
        "https://images.unsplash.com/photo-1521651201144-634f700b36ef",
        "https://images.unsplash.com/photo-1575286368486-a9bd023a3d1e",
        "https://images.unsplash.com/photo-1544211652-37c31327dd6f",
        "https://images.unsplash.com/photo-1578326457399-3b34dbbf23b8"
      ]
    },
    {
      id: 6,
      title: "Desert Life",
      description: "Capturing the surprising biodiversity of desert ecosystems.",
      image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
      category: "wildlife",
      projectImages: [
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
        "https://images.unsplash.com/photo-1604537466158-719b1972feb8",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23",
        "https://images.unsplash.com/photo-1504731231146-c0f65dc6a950",
        "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e"
      ]
    },
    {
      id: 7,
      title: "Icelandic Fjords",
      description: "The raw beauty of Iceland's dramatic coastline and pristine fjords.",
      image: "https://images.unsplash.com/photo-1598691396645-77b871147e3d",
      category: "landscape",
      projectImages: [
        "https://images.unsplash.com/photo-1598691396645-77b871147e3d",
        "https://images.unsplash.com/photo-1529963183134-61a90db47eaf",
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67",
        "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27",
        "https://images.unsplash.com/photo-1500043357865-c6b8827edf10",
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7"
      ]
    },
    {
      id: 8,
      title: "Himalayan Peaks",
      description: "Majestic mountain ranges and valleys of the Himalayas.",
      image: "https://images.unsplash.com/photo-1516496636080-14fb876e029d",
      category: "landscape",
      projectImages: [
        "https://images.unsplash.com/photo-1516496636080-14fb876e029d",
        "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b",
        "https://images.unsplash.com/photo-1580716937095-cac2c8a1e69c",
        "https://images.unsplash.com/photo-1533130061792-64b345e4a833",
        "https://images.unsplash.com/photo-1515876305430-f06edab8282a",
        "https://images.unsplash.com/photo-1467139701929-18c0d27a7516"
      ]
    },
    {
      id: 9,
      title: "African Savanna",
      description: "A lion pride at sunset",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
      category: "wildlife",
      projectImages: [
        "https://images.unsplash.com/photo-1549366021-9f761d450615",
        "https://images.unsplash.com/photo-1534177616072-ef7dc120449d",
        "https://images.unsplash.com/photo-1547471080-3adc04dd4e63",
        "https://images.unsplash.com/photo-1535941339077-2dd1c7963098",
        "https://images.unsplash.com/photo-1504622956513-a661f0af9c00",
        "https://images.unsplash.com/photo-1516426122078-c23e76319801"
      ]
    },
    {
      id: 10,
      title: "Arctic Wonder",
      description: "Polar bears in their natural habitat",
      image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
      category: "wildlife",
      projectImages: [
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819",
        "https://images.unsplash.com/photo-1552053831-71594a27632d",
        "https://images.unsplash.com/photo-1590667046100-9c46b1e6d85d",
        "https://images.unsplash.com/photo-1582561424760-0321d75e81fa",
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36",
        "https://images.unsplash.com/photo-1517783999520-f068d7431a60"
      ]
    },
    {
      id: 11,
      title: "Rainforest Life",
      description: "Vibrant macaws in the Amazon",
      image: "https://images.unsplash.com/photo-1544923408-75c5cef46f14",
      category: "wildlife",
      projectImages: [
        "https://images.unsplash.com/photo-1544923408-75c5cef46f14",
        "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a",
        "https://images.unsplash.com/photo-1518479044931-404a08ccb383",
        "https://images.unsplash.com/photo-1504473089979-b1c4993a9653",
        "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5",
        "https://images.unsplash.com/photo-1596810474636-a69e0b3d148c"
      ]
    }
  ];
  