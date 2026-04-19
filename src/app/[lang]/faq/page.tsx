"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/providers/i18n-provider";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQPage() {
  const { locale } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: {
        vi: "Thời điểm nào lý tưởng nhất để du lịch Nhật Bản?",
        en: "When is the best time to visit Japan?",
        ja: "日本を訪れるのに最適な時期はいつですか？"
      },
      answer: {
        vi: "Mùa xuân (tháng 3 - tháng 5) với hoa anh đào và mùa thu (tháng 9 - tháng 11) với lá đỏ là hai thời điểm đẹp nhất. Tuy nhiên, mùa hè có nhiều lễ hội pháo hoa đặc sắc, còn mùa đông lại tuyệt vời cho các hoạt động trượt tuyết và tắm suối nước nóng.",
        en: "Spring (March - May) with cherry blossoms and autumn (September - November) with red leaves are the two most beautiful times. However, summer has many special fireworks festivals, and winter is great for skiing and hot springs.",
        ja: "桜が咲く春（3月〜5月）と紅葉が美しい秋（9月〜11月）が最も美しい2つの時期です。しかし、夏には多くの特別な花火大会があり、冬はスキーや温泉に最適です。"
      }
    },
    {
      question: {
        vi: "Tôi có cần xin visa để du lịch Nhật Bản không?",
        en: "Do I need a visa to travel to Japan?",
        ja: "日本旅行にはビザが必要ですか？"
      },
      answer: {
        vi: "Điều này phụ thuộc vào quốc tịch của bạn. Hiện tại du khách Việt Nam cần xin visa du lịch. Quá trình xin visa thường mất khoảng 1-2 tuần. Bạn có thể nộp qua các đại lý được ủy quyền hoặc trực tiếp tại đại sứ quán/lãnh sự quán.",
        en: "This depends on your nationality. Currently, Vietnamese tourists need a tourist visa. The visa process usually takes about 1-2 weeks. You can apply through authorized agents or directly at the embassy/consulate.",
        ja: "それはあなたの国籍によります。現在、ベトナム人観光客は観光ビザが必要です。ビザの申請手続きには通常1〜2週間かかります。認定代理店を通じて、または大使館/領事館で直接申請できます。"
      }
    },
    {
      question: {
        vi: "Chi phí du lịch tự túc Nhật Bản khoảng bao nhiêu?",
        en: "How much does independent travel in Japan typically cost?",
        ja: "日本での個人旅行の費用の目安はどのくらいですか？"
      },
      answer: {
        vi: "Chi phí trung bình cho một ngày khám phá khoảng 1,500,000 - 3,000,000 VNĐ tùy vào phong cách du lịch. Khách sạn con nhộng/hostel và đồ ăn tại siêu thị tiện lợi sẽ giúp tiết kiệm đáng kể chi phí so với khách sạn 4-5 sao và các nhà hàng đắt tiền.",
        en: "The average cost per day is about $60 - $120 USD depending on your travel style. Capsule hotels/hostels and convenience store food will save significantly compared to 4-5 star hotels and expensive restaurants.",
        ja: "旅行のスタイルによりますが、1日あたりの平均費用は約60〜120米ドルです。カプセルホテル/ホステルやコンビニの食事は、4〜5つ星ホテルや高価なレストランに比べて大幅に節約になります。"
      }
    },
    {
      question: {
        vi: "Người Nhật có nói tiếng Anh không?",
        en: "Do Japanese people speak English?",
        ja: "日本人は英語を話しますか？"
      },
      answer: {
        vi: "Tại các khu du lịch lớn, khách sạn và nhà ga trung tâm, các bảng hiệu đều có tiếng Anh và nhân viên có thể giao tiếp cơ bản. Tuy nhiên ở vùng nông thôn hoặc các quán ăn nhỏ, tiếng Anh ít phổ biến hơn. Google Translate và việc học thuộc một số câu giao tiếp cơ bản sẽ rất hữu ích.",
        en: "In major tourist areas, hotels, and central stations, signs have English and staff can communicate basically. However, in rural areas or small restaurants, English is less common. Google Translate and learning some basic phrases will be very helpful.",
        ja: "主要な観光地、ホテル、中央駅では、看板に英語表記があり、スタッフは基本的なコミュニケーションが取れます。しかし、農村部や小さなレストランでは、英語はあまり一般的ではありません。Google翻訳といくつかの基本的なフレーズを覚えることが非常に役立ちます。"
      }
    },
    {
      question: {
        vi: "Di chuyển từ sân bay quốc tế (Narita/Haneda, Kansai) về trung tâm thành phố thế nào?",
        en: "How to get from the international airport (Narita/Haneda, Kansai) to the city center?",
        ja: "国際空港（成田/羽田、関西）から都心への行き方は？"
      },
      answer: {
        vi: "Hầu hết các sân bay đều kết nối với các tuyến tàu tốc hành (Narita Express, Keisei Skyliner, Haruka) về thẳng ga trung tâm chỉ trong 40-60 phút. Ngoài ra, Airport Limousine Bus cũng là lựa chọn cực kỳ nhàn nhã vì thả khách tận sảnh nhiều khách sạn lớn.",
        en: "Most airports are connected by express trains (Narita Express, Keisei Skyliner, Haruka) to central stations in 40-60 minutes. Alternatively, the Airport Limousine Bus is a very relaxing option as it drops you off directly at many major hotels.",
        ja: "ほとんどの空港から特急電車（成田エクスプレス、京成スカイライナー、はるか）で主要駅へ40〜60分でアクセスできます。また、多くの主要ホテルに直接停まるエアポートリムジンバスも非常に快適な選択肢です。"
      }
    },
    {
      question: {
        vi: "Có được mang thực phẩm Việt Nam hoặc thuốc men sang Nhật Bản không?",
        en: "Can I bring Vietnamese food or medicines to Japan?",
        ja: "ベトナムの食品や医薬品を日本に持ち込むことはできますか？"
      },
      answer: {
        vi: "Nhật Bản kiểm soát cấm mang thịt, trái cây tươi, và rau củ quả dưới mọi hình thức (kể cả chà bông/ruốc, xúc xích). Đối với thuốc men, bạn được phép mang thuốc cảm/đau đầu thông thường đủ dùng trong thời gian lưu trú; một số thuốc đặc trị cần kê toa tiếng Anh.",
        en: "Japan strictly prohibits bringing meat, fresh fruits, and vegetables in any form (including meat floss, sausages). For medicinies, you can bring common cold/headache pills for your stay; some specialized drugs require an English prescription.",
        ja: "日本は、あらゆる形態の肉、生鮮果物、野菜（肉でんぶ、ソーセージを含む）の持ち込みを厳しく禁じています。薬については、滞在中に必要な一般的な風邪薬/頭痛薬は持ち込み可能です。一部の特殊な薬には英語の処方箋が必要です。"
      }
    },
    {
      question: {
        vi: "Ở Nhật có được hút thuốc tự do ngoài đường không?",
        en: "Is it allowed to smoke freely on the streets in Japan?",
        ja: "日本では路上で自由に喫煙することは許可されていますか？"
      },
      answer: {
        vi: "Tuyệt đối không. Tại Nhật, việc vừa đi vừa hút thuốc hoặc hút ngoài khu vực chỉ định bị nghiêm cấm và sẽ bị phạt tiền. Bạn chỉ được hút tại các phòng cách ly trong quán cafe, trạm dừng chân hoặc các khu smoking area chuyên biệt ngoài góc phố.",
        en: "Absolutely not. In Japan, smoking while walking or smoking outside designated areas is strictly prohibited and can result in fines. You can only smoke in isolated rooms in cafes, rest stops, or specialized smoking areas on street corners.",
        ja: "絶対にダメです。日本では、歩きタバコや指定された場所以外での喫煙は厳しく禁止されており、罰金の対象になります。カフェの隔離された部屋、休憩所、または街角の専用喫煙所でのみ喫煙可能です。"
      }
    },
    {
      question: {
        vi: "Nên mua gì làm quà và có thể mua ở đâu?",
        en: "What souvenirs should I buy and where?",
        ja: "何をお土産に買うべきで、どこで買えますか？"
      },
      answer: {
        vi: "Bạn có thể mua mỹ phẩm, thực phẩm chức năng ở chuỗi Don Quijote hoặc Matsumoto Kiyoshi; trà xanh, bánh mochi ở siêu thị địa phương; đồ lưu niệm truyền thống ở Nakamise-dori (Asakusa) hoặc Kyoto; và đồ điện tử ở Akihabara. Bánh kẹo thương hiệu lớn có thể mua miễn thuế ngay tại sân bay trước khi về.",
        en: "You can buy cosmetics and supplements at Don Quijote or Matsumoto Kiyoshi; green tea and mochi at local supermarkets; traditional souvenirs at Nakamise-dori (Asakusa) or Kyoto; and electronics in Akihabara. Branded sweets can be bought tax-free at the airport before leaving.",
        ja: "化粧品やサプリメントはドン・キホーテやマツモトキヨシで、緑茶や餅は地元のスーパーで、伝統的なお土産は仲見世通り（浅草）や京都で、電子機器は秋葉原で購入できます。有名ブランドのお菓子は、帰国前に空港の免税店で購入できます。"
      }
    }
  ];

  const title = {
    vi: "Câu Hỏi Thường Gặp",
    en: "Frequently Asked Questions",
    ja: "よくある質問"
  };

  const description = {
    vi: "Tổng hợp các thắc mắc phổ biến nhất của du khách khi chuẩn bị cho chuyến đi.",
    en: "A compilation of the most common questions from travelers preparing for their trip.",
    ja: "旅行の準備をする旅行者からの最も一般的な質問のまとめ。"
  };

  return (
    <div className="pt-24 pb-12 px-4 container mx-auto flex-grow max-w-3xl">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {title[locale as keyof typeof title] || title.vi}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg max-w-2xl mx-auto"
        >
          {description[locale as keyof typeof description] || description.vi}
        </motion.p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card 
                className={cn(
                  "overflow-hidden border-border/50 transition-all duration-300 cursor-pointer hover:border-primary/50",
                  isOpen ? "shadow-md ring-1 ring-primary/20" : ""
                )}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="p-6 flex justify-between items-center bg-card">
                  <h3 className="text-lg md:text-xl font-medium pr-8">
                    {faq.question[locale as keyof typeof faq.question] || faq.question.vi}
                  </h3>
                  <div className={cn(
                    "p-2 rounded-full transition-transform duration-300 flex-shrink-0",
                    isOpen ? "bg-primary text-primary-foreground rotate-180" : "bg-muted text-muted-foreground"
                  )}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <CardContent className="pt-0 pb-6 px-6">
                        <div className="w-full h-[1px] bg-border mb-4" />
                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                          {faq.answer[locale as keyof typeof faq.answer] || faq.answer.vi}
                        </p>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
