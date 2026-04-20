"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";
import { motion } from "framer-motion";

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
    sections: {
      vi: [
        {
          title: "Núi Phú Sĩ - Biểu tượng linh thiêng",
          text: "Núi Phú Sĩ không chỉ là ngọn núi cao nhất Nhật Bản mà còn là biểu tượng tâm linh và văn hóa sâu sắc. Với hình chóp nón đối xứng hoàn hảo phủ tuyết trắng, ngọn núi đã truyền cảm hứng cho vô vàn tác phẩm nghệ thuật, từ thơ ca đến tranh khắc gỗ ukiyo-e qua nhiều thế kỷ. Bạn có thể chinh phục đỉnh núi vào mùa hè hoặc chiêm ngưỡng nó từ xa tại khu vực Ngũ Hồ (Fuji Five Lakes).",
          image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "Rừng tre Arashiyama",
          text: "Nằm ở phía Tây Kyoto, rừng tre Arashiyama mang đến một trải nghiệm siêu thực như lạc vào một thế giới khác. Những cây tre xanh mướt cao vút vươn thẳng lên bầu trời, che khuất ánh nắng và tạo nên một không gian xanh tĩnh lặng. Tiếng gió rầm rì xào xạc qua lá tre đã được Bộ Môi trường Nhật Bản đưa vào danh sách '100 âm thanh của Nhật Bản' cần được bảo tồn.",
          image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "Thiên đường hoang sơ Shiretoko",
          text: "Bán đảo Shiretoko ở Hokkaido là một trong những khu vực hoang sơ cuối cùng còn sót lại ở Nhật Bản và được UNESCO công nhận là Di sản Thế giới. Đây là nơi cư ngụ của gấu nâu, đại bàng đuôi trắng và là điểm đến lý tưởng để đi bộ đường dài, ngắm cảnh từ thuyền hoặc trải nghiệm ngâm mình trong suối nước nóng lộ thiên giữa thiên nhiên hùng vĩ.",
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2000&auto=format&fit=crop"
        }
      ],
      en: [
        {
          title: "Mount Fuji - The Sacred Symbol",
          text: "Mount Fuji is not only the highest peak in Japan but also a profound spiritual and cultural icon. With its perfectly symmetrical snow-capped cone, the mountain has inspired countless works of art, from poetry to ukiyo-e woodblock prints over centuries. You can climb to the summit during summer or admire its majesty from the Fuji Five Lakes region.",
          image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "Arashiyama Bamboo Grove",
          text: "Located in western Kyoto, the Arashiyama Bamboo Grove offers a surreal experience as if stepping into another world. Towering stalks of green bamboo reach straight for the sky, filtering the sunlight and creating a quiet, verdant sanctuary. The sound of wind whispering through the bamboo leaves has been designated by the Ministry of the Environment as one of the '100 Soundscapes of Japan'.",
          image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "Primal Paradise Shiretoko",
          text: "The Shiretoko Peninsula in Hokkaido is one of the last remaining wild areas in Japan and is recognized as a UNESCO World Heritage site. It is home to brown bears, white-tailed eagles, and is the perfect destination for hiking, boat cruises, or experiencing open-air hot springs amidst breathtaking wilderness.",
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2000&auto=format&fit=crop"
        }
      ],
      ja: [
        {
          title: "富士山 - 聖なる象徴",
          text: "富士山は日本最高峰であるだけでなく、深い精神的・文化的象徴でもあります。完璧な左右対称の雪を頂いた円錐形の姿は、何世紀にもわたって詩から浮世絵まで無数の芸術作品にインスピレーションを与えてきました。夏には山頂を目指すこともできますし、富士五湖周辺からその雄大な姿を眺めることもできます。",
          image: "https://images.unsplash.com/photo-1578271887552-5ac3a72752bc?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "嵐山の竹林",
          text: "京都の西に位置する嵐山の竹林は、別世界に迷い込んだような超現実的な体験を提供します。高くそびえ立つ緑の竹が空に向かってまっすぐ伸び、日光を遮って静かな緑の聖域を作り出しています。竹の葉を通り抜ける風の音は、環境省によって「日本の音風景100選」の一つに指定されています。",
          image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "手付かずの楽園 知床",
          text: "北海道の知床半島は、日本に残された最後の手付かずの領域の一つであり、ユネスコの世界遺産に登録されています。ヒグマやオジロワシの生息地であり、ハイキング、クルーズ、あるいは大自然の中での露天風呂体験に最適な目的地です。",
          image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2000&auto=format&fit=crop"
        }
      ]
    }
  };

  const currentSections = data.sections[locale as keyof typeof data.sections] || data.sections.vi;

  const content = (
    <div className="space-y-12">
      <p className="text-xl leading-relaxed mb-12">
        {locale === 'vi' 
          ? "Nhật Bản là một quần đảo trải dài từ Bắc xuống Nam, mang đến sự đa dạng sinh thái vô cùng phong phú. Từ những đỉnh núi phủ tuyết trắng xóa ở Hokkaido đến những bãi biển xanh ngắt tại Okinawa, thiên nhiên Nhật Bản luôn biết cách làm say lòng lữ khách."
          : locale === 'ja'
          ? "日本は北から南へ広がる群島であり、信じられないほど豊かな生態系の多様性を提供しています。北海道の雪を頂いた峰から沖縄の透き通ったビーチまで、日本の自然は常に旅行者を魅了する方法を知っています。"
          : "Japan is an archipelago extending from North to South, offering incredibly rich ecological diversity. From the snow-capped peaks of Hokkaido to the crystal-clear beaches of Okinawa, Japan's nature always knows how to captivate travelers."
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
            ? "Chúng tôi mời bạn cùng khám phá những cung đường trekking tuyệt đẹp, những khu vườn thiền định tĩnh lặng và những kỳ quan thiên nhiên được UNESCO công nhận."
            : locale === 'ja'
            ? "息をのむようなトレッキングルート、静かな禅庭園、そしてユネスコに認められた自然の驚異を探索してみましょう。"
            : "We invite you to explore breathtaking trekking routes, tranquil Zen gardens, and UNESCO-recognized natural wonders."
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
