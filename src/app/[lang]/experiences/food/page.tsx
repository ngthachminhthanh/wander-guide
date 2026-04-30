"use client";

import { ExperienceDetails } from "@/components/sections/ExperienceDetails";
import { useI18n } from "@/components/providers/i18n-provider";
import { motion } from "framer-motion";

export default function FoodPage() {
  const { locale } = useI18n();

  const data = {
    title: { vi: "Ẩm thực", en: "Food", ja: "グルメ" },
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
      vi: (
        <div className="space-y-12">
          <div>
            <p className="mb-4">Mặc dù sushi có thể là món ăn nổi tiếng toàn cầu nhưng đó chỉ là phần nổi của tảng băng ẩm thực Nhật Bản</p>
            <p>Khi ở Nhật Bản thì bạn nhất định phải nếm thử món sushi. Tuy nhiên, để trải nghiệm trọn vẹn ẩm thực Nhật Bản, bạn nên ăn teishoku vào bữa trưa và thưởng thức món kaiseki thịnh soạn vào bữa tối. Hãy đặt bàn tại một nhà hàng được xếp hạng cao hoặc ghé thăm quán ăn vỉa hè để nếm thử món mì nóng hổi mới ra lò.</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Kaiseki</h3>
            <img src="https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1521134291/wat/Wat2909_2" alt="Kaiseki" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>Kaiseki là bữa ăn truyền thống Nhật Bản gồm nhiều món khác nhau, kích thích mọi giác quan. Một bữa tối kaiseki điển hình sẽ gồm các món ăn ngon nhất theo mùa và các đặc sản địa phương. Mỗi món đều là sự kết hợp hài hòa giữa hương vị, kết cấu và bày trí. Kiểu bữa ăn này sẽ cung cấp cho bạn kiến thức tuyệt vời về văn hóa ẩm thực Nhật Bản và tầm quan trọng của việc bày trí món ăn.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Các nhà hàng được đánh giá cao trong cẩm nang những nhà hàng được tôn vinh</h3>
            <p>Nhật Bản tự hào sở hữu nhiều nhà hàng được xếp hạng cao và được gắn sao bởi các cẩm nang nổi tiếng toàn thế giới. Trong số đó, hầu hết tập trung tại Tokyo, Osaka và Kyoto. Có thể bạn sẽ băn khoăn về giá cả ở nhà hàng được gắn sao, nhưng đừng sợ. Những lựa chọn nhà hàng rất đa dạng, từ các nhà hàng Pháp, Ý và Kaiseki cao cấp đến các quán mì ramen vỉa hè bình dân, và Nhật Bản chính là nơi lý tưởng để thử. Nếu bạn chưa từng trải nghiệm bữa ăn gắn sao Michelin thì Nhật Bản chính là nơi lý tưởng để thử.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Teishoku</h3>
            <img src="https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1527659403/story_guide/Sg004_3068_4" alt="Teishoku" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>Teishoku là bữa ăn cố định món và các món đều được cho lên cùng lúc. Teishoku gồm có cơm trắng và súp miso. Đĩa chính sẽ là cá, thịt heo, thịt gà hoặc thịt bò và sẽ bao gồm nhiều loại rau theo mùa. Dưa muối, được gọi là tsukemono, cũng là món cố định trong bữa ăn cố định món teishoku. Tonkatsu teishoku là một bữa ăn cố định gồm côtlet thịt heo chiên giòn, cơm, súp miso, dưa muối, salad macaroni, mù tạt cay và xốt BBQ mặn-ngọt.</p>
            <p className="mt-4">Teishoku thường có giá khá rẻ. Một vài nhà hàng teishoku vận hành theo phong cách căng tin. Theo đó, thực khách mua vé từ máy bán vé tự động rồi đưa cho nhân viên bếp. Nhân viên này sẽ chuẩn bị bữa ăn teishoku cho bạn. Một bữa teishoku no và giàu dinh dưỡng sẽ có giá khoảng 1.000 Yên.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Mì udon và mì soba</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1522744736/local_specialties/Lf077_2913_321"
                  alt="Udon"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1522744086/local_specialties/Lf047_2913_216"
                  alt="Soba"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <p>Ramen không là món loại mì duy nhất tại Nhật Bản. Mì soba làm từ kiều mạch và mì udon làm từ bột mì là những món phải thử đối với bất kỳ người yêu mì nào. Những món mì này có thể được ăn ở dạng nước hoặc khô, nóng hoặc lạnh. Mì thường được bao gồm hành lá, gừng, nước tương, nước cá kho và các nguyên liệu khác.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Cơm hộp Bento</h3>
            <img src="https://vcdn1-giadinh.vnecdn.net/2020/10/11/v15-1602388162-9085-1602390130.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=o6iZIQVOP2xcAOpeLM-Ynw" alt="Bento Box" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>Cơm hộp Bento là một phần không thể thiếu trong cuộc sống Nhật Bản. Chúng có thể được mua tại các cửa hàng chuyên bán cơm hộp, siêu thị và các cửa hàng tiện lợi. Bento có nhiều phong cách khác nhau và không chỉ bao gồm mỗi đồ ăn Nhật Bản. Bento sẽ được gói kèm dụng cụ ăn và khăn ướt để ăn tiện lợi khi đang di chuyển, là bữa trưa hoàn hảo khi tham quan công viên hoặc khi đi tàu shinkansen.</p>
          </motion.div>
        </div>
      ),
      en: (
        <div className="space-y-12">
          <div>
            <p className="mb-4">Although sushi might be globally famous, it's just the tip of the iceberg of Japanese cuisine</p>
            <p>When in Japan, you absolutely must try sushi. However, to fully experience Japanese cuisine, you should eat teishoku for lunch and enjoy a hearty kaiseki for dinner. Make a reservation at a highly rated restaurant or visit a street food stall to taste a fresh, steaming bowl of noodles.</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Kaiseki</h3>
            <img src="https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1521134291/wat/Wat2909_2" alt="Kaiseki" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>Kaiseki is a traditional multi-course Japanese dinner that stimulates all the senses. A typical kaiseki dinner will include the best seasonal dishes and local specialties. Each dish is a harmonious combination of flavor, texture, and presentation. This type of meal will provide you with excellent insight into Japanese food culture and the importance of food presentation.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Highly rated restaurants</h3>
            <p>Japan proudly boasts many highly rated and starred restaurants recognized by world-renowned guides. Among them, most are concentrated in Tokyo, Osaka, and Kyoto. You might worry about the prices at a starred restaurant, but fear not. The restaurant choices are highly diverse, ranging from high-end French, Italian, and Kaiseki restaurants to casual street ramen shops, and Japan is the ideal place to try them. If you've never experienced a Michelin-starred meal, Japan is the perfect place to start.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Teishoku</h3>
            <img src="https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1527659403/story_guide/Sg004_3068_4" alt="Teishoku" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>Teishoku is a set meal where all dishes are served together. A teishoku includes white rice and miso soup. The main dish will be fish, pork, chicken, or beef, and it will include various seasonal vegetables. Pickles, known as tsukemono, are also a staple in a teishoku set meal. Tonkatsu teishoku is a set meal consisting of a crispy fried pork cutlet, rice, miso soup, pickles, macaroni salad, spicy mustard, and a sweet-savory BBQ sauce.</p>
            <p className="mt-4">Teishoku is usually quite cheap. Some teishoku restaurants operate in a cafeteria style. Accordingly, diners buy a ticket from a vending machine and hand it to the kitchen staff, who will prepare the teishoku meal for you. A filling and nutritious teishoku will cost about 1,000 Yen.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Udon and Soba Noodles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1522744736/local_specialties/Lf077_2913_321"
                  alt="Udon"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1522744086/local_specialties/Lf047_2913_216"
                  alt="Soba"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <p>Ramen isn't the only type of noodle in Japan. Soba noodles made from buckwheat and udon noodles made from wheat flour are must-tries for any noodle lover. These noodles can be eaten in broth or dry, hot or cold. The noodles are typically served with green onions, ginger, soy sauce, dashi, and other ingredients.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">Bento Boxes</h3>
            <img src="https://vcdn1-giadinh.vnecdn.net/2020/10/11/v15-1602388162-9085-1602390130.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=o6iZIQVOP2xcAOpeLM-Ynw" alt="Bento Box" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>Bento boxes are an indispensable part of Japanese life. They can be purchased at specialty bento shops, supermarkets, and convenience stores. Bento comes in various styles and includes more than just Japanese food. Bentos are packed with eating utensils and a wet wipe for convenient eating on the go, making them the perfect lunch for a park visit or a shinkansen ride.</p>
          </motion.div>
        </div>
      ),
      ja: (
        <div className="space-y-12">
          <div>
            <p className="mb-4">寿司は世界的に有名かもしれませんが、それは日本料理のほんの一部に過ぎません</p>
            <p>日本にいるときは絶対に寿司を試さなければなりません。しかし、日本料理を完全に体験するには、昼食に定食を食べ、夕食にボリュームたっぷりの懐石料理を楽しむべきです。高く評価されているレストランを予約するか、屋台のラーメン屋を訪れて熱々の麺を味わってみてください。</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">懐石料理</h3>
            <img src="https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1521134291/wat/Wat2909_2" alt="Kaiseki" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>懐石料理は、すべての五感を刺激する伝統的な日本のコース料理です。典型的な懐石料理のディナーには、最高の旬の料理や地元の特産品が含まれます。各料理は、味、食感、見栄えの調和のとれた組み合わせです。この種の食事は、日本の食文化と料理の盛り付けの重要性についての素晴らしい知識を提供します。</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">高く評価されているレストラン</h3>
            <p>日本は、世界的に有名なガイドブックで高く評価され、星を獲得したレストランを多数誇っています。そのほとんどが東京、大阪、京都に集中しています。星付きレストランの価格について心配するかもしれませんが、恐れることはありません。レストランの選択肢は、高級なフレンチ、イタリアン、懐石料理からカジュアルな屋台のラーメン店まで多岐にわたり、日本はそれらを試すのに理想的な場所です。ミシュランの星付きの食事を経験したことがないなら、日本は挑戦するのに最適な場所です。</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">定食</h3>
            <img src="https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1527659403/story_guide/Sg004_3068_4" alt="Teishoku" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>定食は、すべての料理が同時に提供されるセットメニューです。定食には白ご飯と味噌汁が含まれます。メインディッシュは魚、豚肉、鶏肉、または牛肉で、季節の野菜が添えされています。「漬物」と呼ばれる漬物も定食に欠かせません。とんかつ定食は、サクサクの豚カツ、ご飯、味噌汁、漬物、マカロニサラダ、洋辛子、甘辛いBBQソースからなる定食です。</p>
            <p className="mt-4">定食は通常かなり安いです。一部の定食屋は食堂スタイルで運営されています。そのため、客は券売機で食券を買い、厨房のスタッフに渡します。栄養満点でボリュームのある定食は約1,000円です。</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">うどんと蕎麦</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1522744736/local_specialties/Lf077_2913_321"
                  alt="Udon"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1522744086/local_specialties/Lf047_2913_216"
                  alt="Soba"
                  className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <p>ラーメンは日本で唯一の麺料理ではありません。そば粉から作られる蕎麦と小麦粉から作られるうどんは、麺好きにはたまらない料理です。これらの麺は、温かいものや冷たいもの、スープありやスープなしで食べることができます。麺には通常、ネギ、生姜、醤油、出汁、その他の具材が添えられます。</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">お弁当</h3>
            <img src="https://vcdn1-giadinh.vnecdn.net/2020/10/11/v15-1602388162-9085-1602390130.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=o6iZIQVOP2xcAOpeLM-Ynw" alt="Bento Box" className="w-full h-auto rounded-2xl mb-6 shadow-md object-cover" />
            <p>お弁当は日本の生活に欠かせないものです。お弁当専門店、スーパーマーケット、コンビニエンスストアで購入できます。お弁当にはさまざまなスタイルがあり、日本料理だけではありません。お弁当には、移動中に便利に食べられるように箸やおしぼりが付いており、公園や新幹線でのランチに最適です。</p>
          </motion.div>
        </div>
      )
    }
  };

  return (
    <ExperienceDetails
      title={data.title[locale as keyof typeof data.title] || data.title.vi}
      japaneseTitle={data.japaneseTitle}
      description={data.description[locale as keyof typeof data.description] || data.description.vi}
      image={data.image}
      highlights={data.highlights[locale as keyof typeof data.highlights] || data.highlights.vi}
      content={data.content[locale as keyof typeof data.content] || data.content.vi}
    />
  );
}
