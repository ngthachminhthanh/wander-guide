"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";

export default function NaturePage() {
  const { locale } = useI18n();

  const data = {
    title: { vi: "Thiên Nhiên", en: "Nature", ja: "自然" },
    japaneseTitle: "自然 - Shizen",
    description: {
      vi: "Chiêm ngưỡng vẻ đẹp hùng vĩ của núi Phú Sĩ, những hẻm núi sâu thẳm và các hòn đảo hoang sơ tuyệt đẹp.",
      en: "Admire the majestic beauty of Mount Fuji, deep canyons, and pristine, stunning islands.",
      ja: "富士山の雄大な美しさ、深い峡谷、そして手付かずの美しい島々を鑑賞してください。"
    },
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop",
    highlights: {
      vi: [
        "Leo núi và trekking tại dãy Alps Nhật Bản",
        "Chiêm ngưỡng hoa Anh Đào mùa xuân",
        "Tắm suối nước nóng (Onsen) giữa rừng",
        "Khám phá các hòn đảo ở Okinawa"
      ],
      en: [
        "Mountain climbing and trekking in the Japanese Alps",
        "Admire cherry blossoms in spring",
        "Bathe in forest hot springs (Onsen)",
        "Explore the islands in Okinawa"
      ],
      ja: [
        "日本アルプスでの登山とトレッキング",
        "春の桜を鑑賞する",
        "森の中の温泉に入る",
        "沖縄の島々を探索する"
      ]
    },
    content: {
      vi: `Nhật Bản là một quần đảo trải dài từ Bắc xuống Nam, mang đến sự đa dạng sinh thái vô cùng phong phú. Từ những đỉnh núi phủ tuyết trắng xóa ở Hokkaido đến những bãi biển xanh ngắt tại Okinawa, thiên nhiên Nhật Bản luôn biết cách làm say lòng lữ khách.\n\nCảnh sắc thay đổi rõ rệt theo bốn mùa, mỗi mùa mang một vẻ đẹp đặc trưng: màu hồng rực rỡ của hoa anh đào mùa xuân, màu xanh mướt của cây cỏ mùa hạ, sắc đỏ vàng rực rỡ của lá phong mùa thu và màu trắng tinh khôi của tuyết mùa đông.\n\nChúng tôi mời bạn cùng khám phá những cung đường trekking tuyệt đẹp, những khu vườn thiền định tĩnh lặng và những kỳ quan thiên nhiên được UNESCO công nhận.`,
      en: `Japan is an archipelago extending from North to South, offering incredibly rich ecological diversity. From the snow-capped peaks of Hokkaido to the crystal-clear beaches of Okinawa, Japan's nature always knows how to captivate travelers.\n\nThe scenery changes distinctly across four seasons, each bringing a unique characteristic beauty: the vibrant pink of spring cherry blossoms, the lush green of summer flora, the brilliant red and gold of autumn maple leaves, and the pure white of winter snow.\n\nWe invite you to explore breathtaking trekking routes, tranquil Zen gardens, and UNESCO-recognized natural wonders.`,
      ja: `日本は北から南へ広がる群島であり、信じられないほど豊かな生態系の多様性を提供しています。北海道の雪を頂いた峰から沖縄の透き通ったビーチまで、日本の自然は常に旅行者を魅了する方法を知っています。\n\n風景は四季を通じてはっきりと変化し、それぞれに特有の美しさをもたらします。春の鮮やかなピンクの桜、夏の緑豊かな植物、秋の鮮やかな赤や金の紅葉、そして冬の純白の雪です。\n\n息をのむようなトレッキングルート、静かな禅庭園、そしてユネスコに認められた自然の驚異を探索してみましょう。`
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
