"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";
import { motion } from "framer-motion";

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
    sections: {
      vi: [
        {
          title: "Gion Matsuri - Lễ hội lớn nhất Kyoto",
          text: "Với lịch sử hơn 1,100 năm, Gion Matsuri là niềm tự hào của cố đô Kyoto. Suốt cả tháng 7, thành phố chìm đắm trong không khí lễ hội. Điểm nhấn là buổi diễu hành Yamaboko Junko, nơi những chiếc xe rước khổng lồ được trang trí tỉ mỉ bằng thảm dệt tinh xảo và các tác phẩm nghệ thuật, diễu hành qua các đường phố lớn để xua đuổi bệnh tật và thiên tai.",
          image: "https://cdn.saigontimestravel.com/storage/images/retail/wp-content/uploads/2024/08/Le-hoi-Gion-1.jpg"
        },
        {
          title: "Aomori Nebuta Matsuri",
          text: "Lễ hội Nebuta tại Aomori là một trong những sự kiện mùa hè sống động nhất Nhật Bản. Hàng chục chiếc đèn lồng giấy khổng lồ, mô phỏng các dũng sĩ Samurai và các vị thần trong truyền thuyết, được thắp sáng và diễu hành qua các con đường. Tiếng trống Taiko vang dội kết hợp cùng những điệu nhảy sôi động của hàng ngàn vũ công Haneto tạo nên sức hút khó cưỡng.",
          image: "https://www.japan-guide.com/g20/3755_02.jpg"
        },
        {
          title: "Lễ hội Tuyết Sapporo",
          text: "Mỗi mùa đông, thành phố Sapporo lại biến thành một phòng triển lãm nghệ thuật khổng lồ bằng băng và tuyết. Những nghệ nhân điêu khắc từ khắp nơi trên thế giới tụ họp để tạo ra hàng trăm bức tượng tuyết tinh xảo, từ những tòa lâu đài hùng vĩ đến các nhân vật hoạt hình quen thuộc. Khi đêm xuống, ánh đèn màu huyền ảo biến nơi đây thành một vương quốc băng giá kỳ diệu.",
          image: "https://trieuhaotravel.vn/Uploads/images/leech/gdocs_1_20251003_090524_31c16769.png_large.webp"
        }
      ],
      en: [
        {
          title: "Gion Matsuri - Kyoto's Grandest Festival",
          text: "With a history stretching back over 1,100 years, Gion Matsuri is the pride of Kyoto. Throughout July, the city is immersed in a festive atmosphere. The highlight is the Yamaboko Junko parade, where massive wooden floats decorated with intricate tapestries and artworks march through major streets to ward off disease and disaster.",
          image: "https://cdn.saigontimestravel.com/storage/images/retail/wp-content/uploads/2024/08/Le-hoi-Gion-1.jpg"
        },
        {
          title: "Aomori Nebuta Matsuri",
          text: "The Nebuta Festival in Aomori is one of Japan's most vivid summer events. Dozens of enormous paper lanterns, depicting legendary Samurai and gods, are lit up and paraded through the streets. The thunderous roar of Taiko drums combined with the energetic dances of thousands of Haneto dancers creates an irresistible attraction.",
          image: "https://www.japan-guide.com/g20/3755_02.jpg"
        },
        {
          title: "Sapporo Snow Festival",
          text: "Every winter, the city of Sapporo transforms into a massive art gallery made of ice and snow. Sculptors from around the world gather to create hundreds of intricate statues, from majestic castles to familiar animated characters. At night, colorful lights turn the site into a magical frozen kingdom.",
          image: "https://trieuhaotravel.vn/Uploads/images/leech/gdocs_1_20251003_090524_31c16769.png_large.webp"
        }
      ],
      ja: [
        {
          title: "祇園祭 - 京都最大の祭り",
          text: "1,100年以上の歴史を持つ祇園祭は、古都・京都の誇りです。7月の一ヶ月間、街中が祭り一色に染まります。見どころは山鉾巡行で、豪華なタペストリーや美術品で飾られた巨大な山鉾が、厄除けと無病息災を願って大通りを練り歩きます。",
          image: "https://cdn.saigontimestravel.com/storage/images/retail/wp-content/uploads/2024/08/Le-hoi-Gion-1.jpg"
        },
        {
          title: "青森ねぶた祭",
          text: "青森のねぶた祭は、日本で最も鮮やかな夏祭りの一つです。伝説の武者や神々をかたどった数十台の巨大な灯籠（ねぶた）に明かりが灯され、街中をパレードします。響き渡る太鼓の音と、数千人の「跳人（ハネト）」によるエネルギッシュな踊りが、人々を魅了します。",
          image: "https://www.japan-guide.com/g20/3755_02.jpg"
        },
        {
          title: "さっぽろ雪まつり",
          text: "毎年冬、札幌市は氷と雪の巨大な美術館へと変わります。世界中から彫刻家が集まり、壮大な城からおなじみのキャラクターまで、数百もの精巧な雪像や氷像が作られます。夜になると、色とりどりのライトアップによって、会場は魔法のような氷の王国へと変貌します。",
          image: "https://trieuhaotravel.vn/Uploads/images/leech/gdocs_1_20251003_090524_31c16769.png_large.webp"
        }
      ]
    }
  };

  const currentSections = data.sections[locale as keyof typeof data.sections] || data.sections.vi;

  const content = (
    <div className="space-y-12">
      <p className="text-xl leading-relaxed mb-12">
        {locale === 'vi'
          ? "Lễ hội (Matsuri) là một phần không thể thiếu trong đời sống văn hóa tinh thần người Nhật. Ước tính có khoảng 300.000 lễ hội lớn nhỏ diễn ra mỗi năm, mỗi lễ hội lại mang một ý nghĩa tôn giáo hoặc lịch sử riêng biệt."
          : locale === 'ja'
            ? "祭り（まつり）は、日本人の精神的、文化的生活に欠かせない部分です。毎年大小合わせて約30万の祭りが開催されており、それぞれに独特の宗教的または歴史的意義があります。"
            : "Festivals (Matsuri) are an indispensable part of the spiritual and cultural life of the Japanese people. It is estimated that around 300,000 festivals, large and small, take place every year, each with its own distinct religious or historical significance."
        }
      </p>

      {currentSections.map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-foreground">{section.title}</h3>
          <div className="overflow-hidden rounded-2xl shadow-lg aspect-video">
            <img src={section.image} alt={section.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {section.text}
          </p>
        </motion.div>
      ))}

      <div className="bg-primary/5 p-8 rounded-3xl border border-primary/20 mt-12">
        <p className="italic text-primary-foreground/80 dark:text-primary/80">
          {locale === 'vi'
            ? "Mùa hè là mùa của những lễ hội rực rỡ nhất với pháo hoa (Hanabi) thắp sáng bầu trời đêm, người người mặc Yukata (kimono mùa hè) đổ ra đường hòa mình vào các điệu múa truyền thống (Bon Odori)."
            : locale === 'ja'
              ? "夏は最も活気のある祭りの季節で、花火が夜空を照らし、浴衣を着た人々が通りにあふれ、伝統的な盆踊りに参加します。"
              : "Summer is the season of the most vibrant festivals with fireworks (Hanabi) lighting up the night sky, people wearing Yukata (summer kimono) pouring into the streets to join traditional dances (Bon Odori)."
          }
        </p>
      </div>
    </div>
  );

  return (
    <ExperienceDetails
      title={data.title[locale as keyof typeof data.title] || data.title.vi}
      japaneseTitle={data.japaneseTitle}
      description={data.description[locale as keyof typeof data.description] || data.description.vi}
      image={data.image}
      highlights={data.highlights[locale as keyof typeof data.highlights] || data.highlights.vi}
      content={content}
    />
  );
}
