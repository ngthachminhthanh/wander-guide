"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";
import { motion } from "framer-motion";

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
    sections: {
      vi: [
        {
          title: "Trà Đạo (Chado) - Nghệ thuật của sự tĩnh lặng",
          text: "Trà đạo không chỉ đơn thuần là việc pha và uống trà, mà là một nghi thức tinh thần hướng đến bốn nguyên tắc: Hòa (hòa hợp), Kính (tôn trọng), Thanh (tinh khiết) và Tịch (tĩnh lặng). Mỗi cử chỉ, từ cách cầm chén trà đến cách rót nước, đều được thực hiện với sự tập trung tuyệt đối nhằm tôn vinh vẻ đẹp của sự giản đơn và khoảnh khắc hiện tại.",
          image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "Samurai và Những Lâu Đài Hùng Vĩ",
          text: "Tinh thần võ sĩ đạo Bushido vẫn luôn là kim chỉ nam cho đạo đức người Nhật. Lâu đài Himeji (Di sản Thế giới UNESCO), hay còn gọi là Lâu đài Diệc Trắng, là minh chứng tuyệt mỹ cho kiến trúc quân sự đỉnh cao. Tại đây, bạn có thể tìm hiểu về cuộc đời của các Samurai, chiêm ngưỡng những bộ giáp sắt kiên cố và khám phá hệ thống phòng thủ tinh vi của các lãnh chúa thời xưa.",
          image: "https://photo.znews.vn/w660/Uploaded/ayplbuo/2021_10_01/Matsumoto_Castle.jpg"
        },
        {
          title: "Geisha và Nghệ Thuật Truyền Thống",
          text: "Tại quận Gion ở Kyoto, hình ảnh những nàng Geisha trong bộ Kimono lộng lẫy đã trở thành biểu tượng của sự thanh cao và bí ẩn. Họ là những nghệ sĩ thực thụ, được đào tạo bài bản về múa, nhạc cụ truyền thống và kỹ năng giao tiếp tinh tế. Nghệ thuật biểu diễn này là di sản sống, kết nối con người hiện đại với vẻ đẹp đài các của thời Edo xa xưa.",
          image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2000&auto=format&fit=crop"
        }
      ],
      en: [
        {
          title: "Tea Ceremony (Chado) - Art of Stillness",
          text: "The tea ceremony is not merely about making and drinking tea; it is a spiritual ritual focused on four principles: Harmony, Respect, Purity, and Tranquility. Every gesture, from holding the tea bowl to pouring water, is performed with absolute focus to honor the beauty of simplicity and the present moment.",
          image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "Samurai and Mighty Castles",
          text: "The Bushido code remains a guiding light for Japanese ethics. Himeji Castle (a UNESCO World Heritage site), also known as the White Heron Castle, is a magnificent testament to peak military architecture. Here, you can learn about Samurai life, admire sturdy iron armor, and explore the sophisticated defense systems of ancient lords.",
          image: "https://photo.znews.vn/w660/Uploaded/ayplbuo/2021_10_01/Matsumoto_Castle.jpg"
        },
        {
          title: "Geisha and Traditional Arts",
          text: "In the Gion district of Kyoto, the image of Geisha in splendid Kimonos has become a symbol of elegance and mystery. They are true artists, highly trained in dance, traditional instruments, and refined conversation. This performing art is a living heritage, connecting modern people with the aristocratic beauty of the distant Edo period.",
          image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2000&auto=format&fit=crop"
        }
      ],
      ja: [
        {
          title: "茶道 - 静寂の芸術",
          text: "茶道は単にお茶を点てて飲むだけのことではありません。「和・敬・清・寂」という四つの原則に基づいた精神的な儀式です。茶碗の持ち方からお湯の注ぎ方まで、あらゆる仕草が絶対的な集中力を持って行われ、簡素の美といまこの瞬間の尊さを称えます。",
          image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2000&auto=format&fit=crop"
        },
        {
          title: "侍と壮大な城",
          text: "武士道精神は今なお日本人の倫理観の指針であり続けています。ユネスコ世界遺産である姫路城（白鷺城）は、軍事建築の最高傑作です。ここでは、侍の生活について学び、頑丈な甲冑を鑑賞し、かつての領主たちが築いた精巧な防御システムを探索することができます。",
          image: "https://photo.znews.vn/w660/Uploaded/ayplbuo/2021_10_01/Matsumoto_Castle.jpg"
        },
        {
          title: "芸者と伝統芸能",
          text: "京都の祇園地区では、華やかな着物に身を包んだ芸妓の姿が、優雅さと神秘の象徴となっています。彼女たちは舞、伝統楽器、洗練された会話の訓練を積んだ真の芸術家です。この芸能は生きた遺産であり、現代の人々を遠い江戸時代の高貴な美しさへと結びつけます。",
          image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2000&auto=format&fit=crop"
        }
      ]
    }
  };

  const currentSections = data.sections[locale as keyof typeof data.sections] || data.sections.vi;

  const content = (
    <div className="space-y-12">
      <p className="text-xl leading-relaxed mb-12">
        {locale === 'vi'
          ? "Văn hóa Nhật Bản là một bức tranh đa sắc, nơi những nét đẹp truyền thống hàng ngàn năm tuổi vẫn tồn tại song hành và rực rỡ giữa lòng xã hội siêu hiện đại. Sự tỉ mỉ, tinh tế và lòng tôn kính là cốt lõi của tính cách Nhật Bản."
          : locale === 'ja'
            ? "日本文化は多彩なタペストリーであり、千年の伝統的な美しさが超近代的な社会の中に今なお鮮やかに存在しています。細心の注意、洗練、そして敬意は日本人の性格の中核です。"
            : "Japanese culture is a multi-colored tapestry where thousand-year-old traditional beauties still exist alongside and vibrantly within a hyper-modern society. Meticulousness, refinement, and reverence are the core of the Japanese character."
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
            ? "Đặc biệt, tinh thần võ sĩ đạo Bushido của các Samurai và vẻ đẹp đài các của các Geisha vẫn luôn là niềm tự hào và là điều mà bất kỳ du khách nào cũng mong muốn được tìm hiểu khi đặt chân đến đây."
            : locale === 'ja'
              ? "特に、侍の武士道精神と芸者の優雅な美しさは常に誇りの源であり、すべての旅行者が訪れる際に発見したいと願うものです。"
              : "In particular, the Bushido spirit of the Samurai and the elegant beauty of the Geisha are always a source of pride and something that any traveler wishes to discover when visiting."
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
