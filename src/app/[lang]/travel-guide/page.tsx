"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/components/providers/i18n-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plane, Train, Wallet, Utensils, Cloud, ShoppingBag, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TravelGuidePage() {
  const { t, locale } = useI18n();

  const guides = [
    {
      id: "transportation",
      icon: <Train className="w-8 h-8 text-primary" />,
      title: {
        vi: "Di chuyển tại Nhật Bản",
        en: "Transportation in Japan",
        ja: "日本での交通手段"
      },
      content: {
        vi: "Hệ thống đường sắt Nhật Bản được biết đến là một trong những hệ thống tốt nhất thế giới. Bạn nên mua Japan Rail Pass (JR Pass) nếu dự định di chuyển giữa nhiều thành phố. Tàu điện ngầm và xe buýt cũng rất phổ biến tại các đô thị lớn.",
        en: "Japan's railway system is known as one of the best in the world. You should buy a Japan Rail Pass (JR Pass) if you plan to travel between multiple cities. Subways and buses are also very common in major cities.",
        ja: "日本の鉄道システムは世界最高レベルとして知られています。複数の都市間を移動する予定がある場合は、ジャパンレールパス（JRパス）の購入をお勧めします。大都市では地下鉄やバスも非常に一般的です。"
      }
    },
    {
      id: "currency",
      icon: <Wallet className="w-8 h-8 text-primary" />,
      title: {
        vi: "Tiền tệ & Thanh toán",
        en: "Currency & Payments",
        ja: "通貨と支払い"
      },
      content: {
        vi: "Đơn vị tiền tệ chính thức là Yên Nhật (JPY). Mặc dù thẻ tín dụng ngày càng phổ biến, đặc biệt tại các trung tâm mua sắm và khách sạn, tiền mặt vẫn được sử dụng rộng rãi. Bạn luôn nên mang theo một ít tiền mặt khi du lịch.",
        en: "The official currency is the Japanese Yen (JPY). Although credit cards are increasingly popular, especially in shopping malls and hotels, cash is still widely used. You should always carry some cash when traveling.",
        ja: "公式通貨は日本円（JPY）です。特にショッピングモールやホテルではクレジットカードが普及してきていますが、現金は依然として広く使用されています。旅行中は常に現金を携帯することをお勧めします。"
      }
    },
    {
      id: "etiquette",
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: {
        vi: "Văn hóa ứng xử",
        en: "Cultural Etiquette",
        ja: "文化的エチケット"
      },
      content: {
        vi: "Người Nhật rất coi trọng phép lịch sự. Một số quy tắc cơ bản: cúi chào khi gặp gỡ, không nói chuyện điện thoại quá to trên phương tiện công cộng, xếp hàng trật tự, và cởi giày khi bước vào nhà hoặc một số nhà hàng truyền thống.",
        en: "Japanese people highly value politeness. Some basic rules: bow when meeting, avoid speaking loudly on your phone on public transport, line up properly, and take off your shoes when entering homes or traditional restaurants.",
        ja: "日本人は礼儀正しさを非常に重視します。いくつかの基本的なルール：挨拶でお辞儀をする、公共交通機関で大声で電話をしない、きちんと並ぶ、家や伝統的なレストランに入るときは靴を脱ぐなどです。"
      }
    },
    {
      id: "connectivity",
      icon: <Plane className="w-8 h-8 text-primary" />,
      title: {
        vi: "Internet & SIM",
        en: "Internet & SIM",
        ja: "インターネットとSIM"
      },
      content: {
        vi: "Wifi miễn phí đã phổ biến hơn nhưng vẫn có thể khó tìm ở vài nơi. Cách tốt nhất để luôn có kết nối là thuê thiết bị Pocket Wifi hoặc mua thẻ SIM du lịch/eSIM ngay tại sân bay hoặc đặt trước giao tận nơi.",
        en: "Free Wifi is more common now but can still be hard to find in some places. The best way to stay connected is to rent a Pocket Wifi or buy a travel SIM/eSIM at the airport or pre-order for delivery.",
        ja: "無料Wi-Fiは普及してきていますが、場所によっては見つけるのが難しい場合もあります。接続を維持する最良の方法は、ポケットWi-Fiをレンタルするか、空港でトラベルSIM/eSIMを購入するか、配達を事前注文することです。"
      }
    },

    {
      id: "shopping",
      icon: <ShoppingBag className="w-8 h-8 text-primary" />,
      title: {
        vi: "Mua sắm & Hoàn thuế",
        en: "Shopping & Tax Free",
        ja: "ショッピングと免税"
      },
      content: {
        vi: "Du khách nước ngoài được miễn thuế 10% tại hầu hết các cửa hàng lớn khi mua sắm trên 5,000 JPY. Đừng quên mang theo hộ chiếu gốc (không phải bản sao) để làm thủ tục hoàn thuế trực tiếp tại cửa hàng hoặc quầy dịch vụ.",
        en: "Foreign tourists enjoy a 10% tax exemption at most large stores for purchases over 5,000 JPY. Don't forget to bring your original passport (not a copy) to process the tax refund directly at the store or service counter.",
        ja: "外国人旅行者は、ほとんどの大型店舗で5,000円以上購入すると10％の免税が受けられます。店舗またはサービスカウンターで直接免税手続きを行うため、パスポートの原本（コピー不可）を忘れずにお持ちください。"
      }
    },
    {
      id: "weather",
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: {
        vi: "Thời tiết & Trang phục",
        en: "Weather & Clothing",
        ja: "天気と服装"
      },
      content: {
        vi: "Khí hậu Nhật Bản thay đổi theo cả 4 mùa vô cùng rõ rệt. Hãy chuẩn bị quần áo nhiều lớp vào mùa xuân và thu. Mùa Hè khá nóng ẩm, cần mang theo dù và kem chống nắng. Mùa đông ở phía Bắc và vùng núi rất lạnh, cần áo khoác dày.",
        en: "Japan's climate changes distinctly with all four seasons. Pack layers for spring and autumn. Summer is quite hot and humid, requiring an umbrella and sunscreen. Winter in the North and mountainous areas is very cold, requiring thick coats.",
        ja: "日本の気候は四季折々ではっきりと変化します。春と秋は重ね着できるよう準備してください。夏はかなり蒸し暑く、傘や日焼け止めが必要です。北部や山岳地帯の冬は非常に寒く、厚手のコートが必要です。"
      }
    },
    {
      id: "emergency",
      icon: <ShieldAlert className="w-8 h-8 text-primary" />,
      title: {
        vi: "Xử lý khẩn cấp",
        en: "Emergency Guide",
        ja: "緊急時の対応"
      },
      content: {
        vi: "Nếu gặp sự cố, bạn có thể gọi 110 cho cảnh sát và 119 cho cứu hỏa/cứu thương. Rất nhiều quầy cảnh sát khu vực (Koban) nằm rải rác khắp nơi, luôn sẵn lòng hướng dẫn đường hoặc giải quyết đồ thất lạc.",
        en: "In an emergency, you can dial 110 for police and 119 for fire/ambulance. Numerous local police boxes (Koban) are scattered everywhere, always ready to give directions or handle lost items.",
        ja: "緊急時には、警察は110番、消防・救急は119番にダイヤルできます。数多くの交番が至る所にあり、道案内をしたり、落とし物に対応したりする準備が常に整っています。"
      }
    }
  ];

  const title = {
    vi: "Cẩm Nang Du Lịch",
    en: "Travel Guide",
    ja: "旅行ガイド"
  };

  const description = {
    vi: "Những thông tin thiết yếu giúp chuyến đi Nhật Bản của bạn trở nên trọn vẹn và suôn sẻ hơn.",
    en: "Essential information to make your trip to Japan perfect and smooth.",
    ja: "日本への旅行を完璧かつスムーズにするための不可欠な情報。"
  };

  return (
    <div className="pt-24 pb-12 px-4 container mx-auto flex-grow max-w-4xl">
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
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
        >
          {description[locale as keyof typeof description] || description.vi}
        </motion.p>
      </div>

      <div className="space-y-8">
        {guides.map((guide, idx) => (
          <motion.div
            key={guide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Link href={`/${locale}/travel-guide/${guide.id}`} className="block block group">
              <Card className="overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4 bg-muted/30 border-b group-hover:bg-primary/5 transition-colors">
                  <div className="p-3 bg-background rounded-full shadow-sm group-hover:scale-110 transition-transform">
                    {guide.icon}
                  </div>
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                    {guide.title[locale as keyof typeof guide.title] || guide.title.vi}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 relative">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {guide.content[locale as keyof typeof guide.content] || guide.content.vi}
                  </p>
                  <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center text-primary font-medium">
                    {locale === 'vi' ? 'Xem chi tiết' : locale === 'ja' ? '詳細を見る' : 'Read more'} <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
