"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";

export default function FoodPage() {
  const { locale } = useI18n();

  const data = {
    title: { vi: "Ẩm Thực & Đồ Uống", en: "Food & Drinks", ja: "食べ物と飲み物" },
    japaneseTitle: "和食 - Washoku",
    description: {
      vi: "Thưởng thức tinh hoa ẩm thực từ Sushi thượng hạng đến Ramen vỉa hè đầy lôi cuốn.",
      en: "Enjoy the culinary essence from premium Sushi to captivating street Ramen.",
      ja: "最高級の寿司から魅力的な屋台ラーメンまで、料理の神髄をお楽しみください。"
    },
    image: "https://ussinavietnam.vn/wp-content/uploads/2024/04/am-thuc-nhat-ban-1.jpg",
    highlights: {
      vi: [
        "Trải nghiệm tiệc truyền thống Kaiseki",
        "Thưởng thức hải sản tươi sống tại chợ cá",
        "Khám phá thế giới mì Ramen đa dạng",
        "Thử các loại rượu Sake truyền thống"
      ],
      en: [
        "Experience a traditional Kaiseki feast",
        "Enjoy fresh seafood at the fish market",
        "Explore the diverse world of Ramen",
        "Taste traditional Sake varieties"
      ],
      ja: [
        "伝統的な懐石料理を体験",
        "魚市場で新鮮なシーフードを楽しむ",
        "多様なラーメンの世界を探索する",
        "伝統的な日本酒を味わう"
      ]
    },
    content: {
      vi: `Ẩm thực Nhật Bản (Washoku) không chỉ là việc ăn uống mà còn là một môn nghệ thuật đề cao sự tươi ngon của nguyên liệu và vẻ đẹp trong trình bày. Washoku đã được UNESCO công nhận là Di sản văn hóa phi vật thể của nhân loại.\n\nMỗi vùng miền ở Nhật Bản đều có đặc sản riêng (Kyodo-ryori), phản ánh khí hậu và sản vật địa phương. Từ những miếng Sushi được chế biến tỉ mỉ ở Ginza đến những tô mỳ Ramen đậm đà tại Fukuoka, mỗi bữa ăn là một hành trình khám phá vị giác.\n\nBên cạnh đó, văn hóa trà đạo và thưởng thức rượu Sake cũng là những trải nghiệm tinh tế mà bạn không nên bỏ lỡ khi ghé thăm xứ sở mặt trời mọc.`,
      en: `Japanese cuisine (Washoku) is not just about eating; it is an art that emphasizes the freshness of ingredients and the beauty of presentation. Washoku has been recognized by UNESCO as an Intangible Cultural Heritage of Humanity.\n\nEach region in Japan has its own specialties (Kyodo-ryori), reflecting the local climate and produce. From meticulously prepared Sushi in Ginza to rich bowls of Ramen in Fukuoka, every meal is a journey of taste discovery.\n\nFurthermore, the tea ceremony culture and Sake tasting are exquisite experiences that you should not miss when visiting the Land of the Rising Sun.`,
      ja: `和食は単なる食事ではなく、食材の新鮮さと見栄えの美しさを強調する芸術です。和食はユネスコの世界無形文化遺産に登録されています。\n\n日本の各地域には、地元の気候と農産物を反映した特産品（郷土料理）があります。銀座の丁寧に作られた寿司から福岡の濃厚なラーメンまで、毎回の食事は味覚の旅です。\n\nさらに、茶道文化や日本酒のテイスティングは、日出ずる国を訪れる際に見逃せない絶妙な体験です。`
    }
  };

  return (
    <ExperienceDetails
      title={data.title[locale]}
      japaneseTitle={data.japaneseTitle}
      description={data.description[locale]}
      image={data.image}
      highlights={data.highlights[locale]}
      content={data.content[locale]}
    />
  );
}
