"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";

export default function CulturePage() {
  const { locale } = useI18n();

  const data = {
    title: { vi: "Nghệ Thuật & Văn Hóa", en: "Arts & Culture", ja: "芸術と文化" },
    japaneseTitle: "文化 - Bunka",
    description: {
      vi: "Tìm hiểu tinh hoa văn hóa truyền thống, từ trà đạo đến tinh thần võ sĩ đạo Samurai.",
      en: "Learn about the essence of traditional culture, from tea ceremony to the Samurai spirit.",
      ja: "茶道から侍の精神まで、伝統文化の真髄について学びましょう。"
    },
    image: "https://toptentravel.com.vn/Data/Sites/1/News/8679/kham-pha-cac-loai-nghe-thuat-trinh-dien-truyen-thong-tai-nhat-ban-1.jpg",
    highlights: {
      vi: [
        "Xem biểu diễn nghệ thuật Kabuki và Noh",
        "Trải nghiệm mặc Kimono dạo phố cổ",
        "Học cách pha trà đạo truyền thống",
        "Thăm quan lâu đài của các Shogun lãnh chúa"
      ],
      en: [
        "Watch Kabuki and Noh performances",
        "Experience wearing Kimono walking through old towns",
        "Learn traditional tea ceremony",
        "Visit the castles of Shogun lords"
      ],
      ja: [
        "歌舞伎と能の公演を見る",
        "着物を着て古い町を散歩する体験",
        "伝統的な茶道（お茶）を学ぶ",
        "将軍の城を訪れる"
      ]
    },
    content: {
      vi: `Văn hóa Nhật Bản là một bức tranh đa sắc, nơi những nét đẹp truyền thống hàng ngàn năm tuổi vẫn tồn tại song hành và rực rỡ giữa lòng xã hội siêu hiện đại. Sự tỉ mỉ, tinh tế và lòng tôn kính là cốt lõi của tính cách Nhật Bản.\n\nTừ những ngôi đền Thần đạo (Shinto) tĩnh mịch đến những sân khấu kịch Kabuki rực rỡ sắc màu, mọi thứ đều được bảo tồn nguyên vẹn. Bạn có thể dành cả ngày chỉ để khám phá nghệ thuật gấp giấy Origami, nghệ thuật cắm hoa Ikebana hay thư pháp Shodo.\n\nĐặc biệt, tinh thần võ sĩ đạo Bushido của các Samurai và vẻ đẹp đài các của các Geisha vẫn luôn là niềm tự hào và là điều mà bất kỳ du khách nào cũng mong muốn được tìm hiểu khi đặt chân đến đây.`,
      en: `Japanese culture is a multi-colored tapestry where thousand-year-old traditional beauties still exist alongside and vibrantly within a hyper-modern society. Meticulousness, refinement, and reverence are the core of the Japanese character.\n\nFrom tranquil Shinto shrines to brightly colored Kabuki stages, everything is immaculately preserved. You can spend an entire day just exploring Origami, Ikebana flower arrangement, or Shodo calligraphy.\n\nIn particular, the Bushido spirit of the Samurai and the elegant beauty of the Geisha are always a source of pride and something that any traveler wishes to discover when visiting.`,
      ja: `日本文化は多彩なタペストリーであり、千年の伝統的な美しさが超近代的な社会の中に今なお鮮やかに存在しています。細心の注意、洗練、そして敬意は日本人の性格の中核です。\n\n静かな神道神社から鮮やかな色の歌舞伎の舞台まで、すべてが無傷で保存されています。折り紙、生け花、または書道を探求するだけで一日を過ごすことができます。\n\n特に、侍の武士道精神と芸者の優雅な美しさは常に誇りの源であり、すべての旅行者が訪れる際に発見したいと願うものです。`
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
