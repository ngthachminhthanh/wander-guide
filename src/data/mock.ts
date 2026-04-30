export type TranslatedString = {
  vi: string;
  en: string;
  ja: string;
};

export interface Destination {
  id: string;
  name: TranslatedString;
  japaneseName: string;
  description: TranslatedString;
  image: string;
  mapQuery: string;
}

export const destinations: Destination[] = [
  {
    id: "tokyo",
    name: { vi: "Tokyo", en: "Tokyo", ja: "東京" },
    japaneseName: "東京",
    description: {
      vi: "Thủ đô nhộn nhịp, nơi giao thoa giữa truyền thống và tương lai hiện đại.",
      en: "A bustling capital where ancient tradition and modern future intersect.",
      ja: "古代の伝統と近代的な未来が交差する活気ある首都。"
    },
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop",
    mapQuery: "Tokyo, Japan"
  },
  {
    id: "kyoto",
    name: { vi: "Kyoto", en: "Kyoto", ja: "京都" },
    japaneseName: "京都",
    description: {
      vi: "Trái tim văn hóa của Nhật Bản với những ngôi chùa cổ kính và đền thờ Thần đạo.",
      en: "The cultural heart of Japan with its ancient Buddhist temples and Shinto shrines.",
      ja: "古代の仏教寺院や神道神社がある日本の文化的な中心地。"
    },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
    mapQuery: "Kyoto, Japan"
  },
  {
    id: "osaka",
    name: { vi: "Osaka", en: "Osaka", ja: "大阪" },
    japaneseName: "大阪",
    description: {
      vi: "Vương quốc ẩm thực và giải trí với nhịp sống sôi động cả ngày lẫn đêm.",
      en: "The kingdom of food and entertainment with a vibrant lifestyle day and night.",
      ja: "昼夜を問わず活気あるライフスタイルを持つ食とエンターテインメントの王国。"
    },
    image: "https://phetravel.com/uploads/osaka-4.jpg.webp",
    mapQuery: "Osaka, Japan"
  },
  {
    id: "mt-fuji",
    name: { vi: "Núi Phú Sĩ", en: "Mt. Fuji", ja: "富士山" },
    japaneseName: "富士山",
    description: {
      vi: "Biểu tượng thiêng liêng của Nhật Bản, thu hút hàng triệu du khách đến chiêm ngưỡng.",
      en: "A sacred symbol of Japan, attracting millions of visitors to admire its beauty.",
      ja: "日本の神聖な象徴であり、その美しさを称賛するために何百万もの訪問者を惹きつけます。"
    },
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2000&auto=format&fit=crop",
    mapQuery: "Mount Fuji, Japan"
  },
  {
    id: "hokkaido",
    name: { vi: "Hokkaido", en: "Hokkaido", ja: "北海道" },
    japaneseName: "北海道",
    description: {
      vi: "Thiên đường tuyết mùa đông và những cánh đồng hoa rực rỡ vào mùa hè.",
      en: "A winter snow paradise and dazzling flower fields in the summer.",
      ja: "冬の雪の楽園と夏の見事な花畑。"
    },
    image: "https://intertour.vn/wp-content/uploads/2022/03/ec870fd3-88ba-4729-809b-c337c8e29028-1.jpg",
    mapQuery: "Hokkaido, Japan"
  }
];

export interface HeroSlide {
  id: number;
  image: string;
  title: TranslatedString;
  subtitle: TranslatedString;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=2500&auto=format&fit=crop",
    title: { vi: "Khám Phá Vẻ Đẹp", en: "Discover the Beauty", ja: "美しさを発見する" },
    subtitle: { vi: "Nhật Bản Mùa Hoa Anh Đào", en: "Japan Through Sakura Season", ja: "桜の季節の日本" }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2500&auto=format&fit=crop",
    title: { vi: "Trải Nghiệm Văn Hóa", en: "Cultural Experience", ja: "文化体験" },
    subtitle: { vi: "Ngôi Đền Cổ Kính ngàn năm", en: "A Millennium Old Ancient Temple", ja: "千年の歴史を持つ古寺" }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=2500&auto=format&fit=crop",
    title: { vi: "Phố Đêm Rực Rỡ", en: "Dazzling Night Streets", ja: "眩しい夜の街" },
    subtitle: { vi: "Ánh Sáng Của Tương Lai Tại Tokyo", en: "The Light of the Future in Tokyo", ja: "東京の未来の光" }
  }
];

export interface Experience {
  id: string;
  title: TranslatedString;
  description: TranslatedString;
  image: string;
  link: string;
}

export const experiences: Experience[] = [
  {
    id: "nature",
    title: { vi: "Thiên nhiên", en: "Nature", ja: "自然" },
    description: {
      vi: "Khám phá phong cảnh hùng vĩ, núi non và các khu vườn truyền thống.",
      en: "Explore majestic landscapes, mountains, and traditional gardens.",
      ja: "雄大な風景、山々、そして伝統的な庭園を探索してください。"
    },
    image: "https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=1500&auto=format&fit=crop",
    link: "/experiences/nature"
  },
  {
    id: "festivals",
    title: { vi: "Lễ hội & Sự kiện", en: "Festivals & Events", ja: "祭りとイベント" },
    description: {
      vi: "Hòa mình vào âm nhạc, ánh sáng và văn hóa đặc sắc tại các lễ hội truyền thống.",
      en: "Immerse yourself in music, light, and unique culture at traditional festivals.",
      ja: "伝統的な祭りで音楽、光、ユニークな文化に浸ってください。"
    },
    image: "https://trieuhaotravel.vn/Uploads/files/nhat_le.png_large.webp",
    link: "/experiences/festivals"
  },
  {
    id: "food",
    title: { vi: "Ẩm thực", en: "Food", ja: "グルメ" },
    description: {
      vi: "Thưởng thức Ramen, Sushi và văn hóa ẩm thực đường phố đa dạng.",
      en: "Enjoy Ramen, Sushi, and diverse street food culture.",
      ja: "ラーメン、寿司、多種多様なストリートフード文化をお楽しみください。"
    },
    image: "https://ussinavietnam.vn/wp-content/uploads/2024/04/am-thuc-nhat-ban-1.jpg",
    link: "/experiences/food"
  },
  {
    id: "culture",
    title: { vi: "Nghệ thuật & Văn hóa", en: "Arts & Culture", ja: "芸術と文化" },
    description: {
      vi: "Tìm hiểu lịch sử Samurai, Geisha và tinh hoa nghệ thuật xứ Phù Tang.",
      en: "Learn about the history of Samurai, Geisha, and the essence of Japanese art.",
      ja: "侍、芸者の歴史、そして日本美術の真髄について学びましょう。"
    },
    image: "https://file.hstatic.net/1000310443/file/kich-1_cb4e5d7dd52947c58f1b97d82420c226_grande.jpg",
    link: "/experiences/culture"
  }
];
