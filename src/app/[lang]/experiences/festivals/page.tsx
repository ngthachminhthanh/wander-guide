"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";

export default function FestivalsPage() {
  const { locale } = useI18n();

  const data = {
    title: { vi: "Lễ Hội & Sự Kiện", en: "Festivals & Events", ja: "祭りとイベント" },
    japaneseTitle: "祭り - Matsuri",
    description: {
      vi: "Hòa mình vào không khí sôi động của hàng ngàn lễ hội truyền thống diễn ra quanh năm trên khắp nước Nhật.",
      en: "Immerse yourself in the vibrant atmosphere of thousands of traditional festivals happening year-round across Japan.",
      ja: "日本中で年間を通じて開催される何千もの伝統的な祭りの活気に満ちた雰囲気に浸ってください。"
    },
    image: "https://trieuhaotravel.vn/Uploads/files/nhat_le.png_large.webp",
    highlights: {
      vi: [
        "Mặc Yukata tham gia lễ hội pháo hoa mùa hè",
        "Chiêm ngưỡng kiệu rước tại Gion Matsuri",
        "Khám phá lễ hội tuyết Sapporo hoành tráng",
        "Thưởng thức ẩm thực đường phố Yatai"
      ],
      en: [
        "Wear a Yukata to a summer fireworks festival",
        "Admire the floats at Gion Matsuri",
        "Explore the spectacular Sapporo Snow Festival",
        "Enjoy Yatai street food"
      ],
      ja: [
        "浴衣を着て夏の花火大会に参加する",
        "祇園祭の山鉾を鑑賞する",
        "壮大なさっぽろ雪まつりを探索する",
        "屋台のストリートフードを楽しむ"
      ]
    },
    content: {
      vi: `Lễ hội (Matsuri) là một phần không thể thiếu trong đời sống văn hóa tinh thần người Nhật. Ước tính có khoảng 300.000 lễ hội lớn nhỏ diễn ra mỗi năm, mỗi lễ hội lại mang một ý nghĩa tôn giáo hoặc lịch sử riêng biệt.\n\nMùa hè là mùa của những lễ hội rực rỡ nhất với pháo hoa (Hanabi) thắp sáng bầu trời đêm, người người mặc Yukata (kimono mùa hè) đổ ra đường hòa mình vào các điệu múa truyền thống (Bon Odori). Các lễ hội lớn như Gion Matsuri ở Kyoto hay Nebuta Matsuri ở Aomori luôn thu hút hàng triệu lượt khách.\n\nTham gia vào một lễ hội địa phương là cách tuyệt vời nhất để bạn trải nghiệm lòng hiếu khách (Omotenashi) và kết nối với dòng chảy văn hóa ngàn năm của Nhật Bản.`,
      en: `Festivals (Matsuri) are an indispensable part of the spiritual and cultural life of the Japanese people. It is estimated that around 300,000 festivals, large and small, take place every year, each with its own distinct religious or historical significance.\n\nSummer is the season of the most vibrant festivals with fireworks (Hanabi) lighting up the night sky, people wearing Yukata (summer kimono) pouring into the streets to join traditional dances (Bon Odori). Major festivals like Gion Matsuri in Kyoto or Nebuta Matsuri in Aomori always attract millions of visitors.\n\nParticipating in a local festival is the best way for you to experience hospitality (Omotenashi) and connect with the millennium-long cultural flow of Japan.`,
      ja: `祭り（まつり）は、日本人の精神的、文化的生活に欠かせない部分です。毎年大小合わせて約30万の祭りが開催されており、それぞれに独特の宗教的または歴史的意義があります。\n\n夏は最も活気のある祭りの季節で、花火が夜空を照らし、浴衣を着た人々が通りにあふれ、伝統的な盆踊りに参加します。京都の祇園祭や青森のねぶた祭などの主要な祭りは常に何百万人もの訪問者を惹きつけます。\n\n地元の祭りに参加することは、おもてなしを体験し、日本の千年にわたる文化の流れとつながる最良の方法です。`
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
