"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n";
import { MapPin, Clock, Ticket, Navigation, Lightbulb, Camera, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface OsakaContentProps {
  locale: Locale;
}

export function OsakaContent({ locale }: OsakaContentProps) {
  // Multilingual content
  const content = {
    vi: {
      title: "Top 5 địa điểm du lịch Osaka mà bạn nên thử ít nhất 1 lần",
      intro1: "Nếu Tokyo hiện đại, Kyoto cổ kính, thì Osaka là thành phố của sự hiếu khách, những tiếng cười. Được mệnh danh là \"Tenka no Daidokoro\" (Nhà bếp của thiên hạ), Osaka là thành phố lớn thứ hai Nhật Bản.",
      intro2: "Đây là nơi bạn sẽ tìm thấy sự kết hợp hoàn hảo giữa các di tích lịch sử uy nghiêm và những khu phố giải trí rực rỡ ánh đèn neon.",
      introImgTitle: "Thành Phố Của Những Tâm Hồn Ăn Uống & Sự Náo Nhiệt",
      intro3: "",
      intro4: "",
      introImg: "https://file.smiletrip.vn/posts/vi-vn/2024/07/20/1009/thumbs/kinh-nghiem-du-lich-osaka-sieu-chi-tiet-tu-a-z.jpg",
      places: [
        {
          title: "1. Lâu Đài Osaka",
          desc: [
            "Được xây dựng vào cuối thế kỷ 16 bởi vị tướng huyền thoại Toyotomi Hideyoshi, Lâu đài Osaka không chỉ là một kiệt tác kiến trúc mà còn là chứng nhân cho những thăng trầm lịch sử trong công cuộc thống nhất Nhật Bản. Với vẻ ngoài uy nghi, mái ngói xanh ngọc và các chi tiết mạ vàng rực rỡ, đây là điểm đến thu hút hàng triệu du khách mỗi năm."
          ],
          info: {
            address: "1-1 Osakajo, Chuo-ku, Osaka",
            hours: "9:00 - 17:00 (Nhận khách cuối cùng lúc 16:30)",
            ticket: "600 Yên cho tòa tháp chính (Khuôn viên công viên xung quanh miễn phí)",
            transport: "Xuống tại ga Osakajokoen (Tuyến JR Loop Line) hoặc ga Tanimachi 4-chome",
            tips: [
              "Đi thuyền Gozabune: Trải nghiệm đi thuyền quanh hào nước của lâu đài để ngắm nhìn những bức tường đá đồ sộ từ một góc nhìn hoàn toàn khác.",
              "Mùa hoa anh đào: Nếu đến vào đầu tháng 4, hãy chuẩn bị tinh thần vì đây là một trong những điểm ngắm hoa đông đúc và đẹp nhất Nhật Bản.",
              "Kết hợp ẩm thực: Sau khi tham quan, bạn có thể đi bộ sang khu vực Miraiza Osaka-jo ngay bên cạnh – một tòa nhà gạch đỏ cổ kính nay đã trở thành tổ hợp nhà hàng, quán cà phê và cửa hàng quà lưu niệm cao cấp.",
              "* Lưu ý nhỏ: Lối vào lâu đài có một đoạn dốc và bậc thang khá dài. Đối với người cao tuổi hoặc người đi cùng trẻ em, nên sử dụng thang máy bên trong tòa tháp để di chuyển lên các tầng cao trước khi đi bộ xuống tham quan từng tầng."
            ]
          },
          image: "https://thaiantravel.com/wp-content/uploads/2024/06/lau-dai-osaka-6.jpg",
          imageTitle: "Biểu Tượng Kiêu Hùng Của Thành Phố Cảng"
        },
        {
          title: "2. Dotonbori",
          desc: [
            "Nếu Tokyo có Shibuya, thì Osaka tự hào có Dotonbori. Chạy dọc theo con kênh cùng tên, khu phố này là một \"bữa tiệc\" thị giác với hàng ngàn biển hiệu neon khổng lồ, những âm thanh náo nhiệt và hương vị thức ăn thơm lừng lan tỏa khắp các ngõ ngách."
          ],
          info: {
            address: "Quận Namba, Osaka (Dọc theo kênh Dotonbori)",
            hours: "Các cửa hàng thường mở từ 11:00. Đẹp nhất là từ 18:00 - 23:00 (Khi lên đèn)",
            ticket: "Tham quan tự do. Vé đi thuyền khoảng 1.000 - 1.200 Yên",
            transport: "Chỉ cách ga Namba (Midosuji Line, Nankai Line) hoặc ga Shinsaibashi vài phút đi bộ",
            tips: [
              "Check-in cùng Glico Running Man: Bức biển hiệu đèn LED khổng lồ hình vận động viên chạy bộ đã trở thành biểu tượng toàn cầu của Osaka. Đừng rời đi nếu chưa có bức ảnh tạo dáng \"giơ tay\" giống như anh ấy!",
              "Biển hiệu 3D \"biết cử động\": Chiêm ngưỡng con cua khổng lồ của nhà hàng Kani Doraku vẫy càng, hay mô hình đầu bếp Kushikatsu Daruma với gương mặt nghiêm nghị. Đây là nét đặc trưng \"độc nhất vô nhị\" chỉ có tại khu vực này.",
              "Thuyền du ngoạn trên kênh (Tombori River Cruise): Chuyến tàu dài 20 phút đưa bạn lướt dưới những cây cầu và ngắm nhìn ánh đèn rực rỡ từ mặt nước – một góc nhìn cực kỳ lãng mạn vào ban đêm.",
              "Cầu Ebisu-bashi: Điểm giao thoa bận rộn nhất, nơi bạn có thể đứng quan sát nhịp sống hối hả và dòng người qua lại tấp nập của thành phố Osaka."
            ]
          },
          image: "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-dotonbori-4.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "Thiên Đường Ánh Sáng Và Ẩm Thực \"Quên Lối Về\""
        },
        {
          title: "3. Universal Studios Japan (USJ)",
          desc: [
            "Tọa lạc tại thành phố Osaka, USJ là một trong bốn công viên giải trí Universal Studios trên toàn thế giới và là công viên được ghé thăm nhiều nhất tại châu Á. Với các khu vực chủ đề được đầu tư công phu, USJ mang đến trải nghiệm nhập vai chân thực vào những bộ phim bom tấn và các trò chơi điện tử huyền thoại."
          ],
          info: {
            address: "2-1-33 Sakurajima, Konohana-ku, Osaka",
            hours: "Thường từ 8:30 - 21:00 (Thay đổi tùy theo ngày và mùa)",
            ticket: "Dao động từ 8.600¥ - 10.400¥ (Tùy ngày thường hay lễ)",
            transport: "Đi tàu tuyến JR Yumesaki Line đến ga Universal City",
            tips: [
              "Mua vé và Express Pass sớm: Ngoài vé vào cổng (Studio Pass), bạn nên mua thêm Express Pass để rút ngắn thời gian xếp hàng các trò chơi phổ biến (có thể phải chờ 2-3 tiếng nếu không có thẻ này).",
              "Ứng dụng USJ: Hãy tải ứng dụng chính thức của USJ để theo dõi thời gian chờ đợi thực tế của các trò chơi và đăng ký \"Area Timed Entry Ticket\" cho khu vực Nintendo.",
              "Thưởng thức ẩm thực chủ đề: Mỗi khu vực đều có món ăn đặc trưng như bánh bao hình Mario, bắp rang bơ thùng Minion hay bữa ăn kiểu phù thủy tại quán Three Broomsticks."
            ]
          },
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/49/48/super-nintendo-world.jpg?w=1200&h=-1&s=1",
          imageTitle: "Thế Giới Giải Trí Đẳng Cấp Quốc Tế"
        },
        {
          title: "4. Umeda Sky Building",
          desc: [
            "Umeda Sky Building là biểu tượng kiêu hãnh của quận Kita, Osaka. Với thiết kế độc đáo gồm hai tòa tháp 40 tầng được nối liền với nhau ở đỉnh bằng một \"Vườn treo\" khổng lồ, tòa nhà mang đến một trải nghiệm thị giác cực kỳ ấn tượng và tầm nhìn vô cực ra toàn cảnh thành phố."
          ],
          info: {
            address: "1-1-88 Oyodonaka, Kita-ku, Osaka.",
            hours: "9:30 - 22:30 (Nhận khách cuối cùng lúc 22:00).",
            ticket: "Khoảng 1.500 Yên (Miễn phí cho chủ thẻ Osaka Amazing Pass trước 16:00).",
            transport: "Khoảng 10 phút đi bộ từ ga Osaka hoặc ga Umeda.",
            tips: [
              "Săn hoàng hôn: Thời điểm lý tưởng nhất để ghé thăm là khoảng 30 phút trước khi mặt trời lặn. Bạn sẽ được chứng kiến khoảnh khắc thành phố chuyển từ ánh vàng sang ánh đèn neon lung linh.",
              "Góc chụp ảnh \"thần thánh\": Hãy đứng từ dưới chân tòa nhà ngắm nhìn lên để thấy sự phản chiếu của bầu trời trên các tấm kính khổng lồ và lỗ hổng hình tròn đặc trưng trên đỉnh tháp.",
              "Kết hợp nghỉ ngơi: Sau khi ngắm cảnh, bạn có thể ghé qua quán cà phê Cafe Sky 40 ngay tại đài quan sát để nhâm dịch đồ uống trong khi tận hưởng tầm nhìn triệu đô."
            ]
          },
          image: "https://ik.imagekit.io/tvlk/blog/2023/11/umeda-sky-building-1.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "Cổng Trời Giữa Lòng Thành Phố"
        },
        {
          title: "5. Shinsekai",
          desc: [
            "Shinsekai (nghĩa là \"Thế giới mới\") được xây dựng từ năm 1912 với thiết kế lấy cảm hứng từ Paris và New York. Sau hàng trăm năm, nơi đây không thay đổi nhiều, tạo nên một không gian Retro độc đáo với những biển hiệu rực rỡ, các quán ăn bình dân và bầu không khí vô cùng đặc trưng của người dân lao động Osaka."
          ],
          info: {
            address: "Quận Naniwa, Osaka.",
            hours: "Các quán ăn thường mở từ sáng đến đêm muộn.",
            ticket: "Đây là một trong những khu vực có giá ẩm thực rẻ nhất Osaka.",
            transport: "Xuống tại ga Shin-Imamiya (Tuyến JR Loop Line) hoặc ga Dobutsuen-mae (Tuyến Midosuji).",
            tips: [
              "Vẻ đẹp về đêm: Shinsekai thực sự \"sống lại\" khi trời tối. Ánh đèn neon từ tháp Tsutenkaku và các quán ăn tạo nên một bối cảnh chụp ảnh đường phố (street photography) tuyệt vời.",
              "Kết hợp tham quan: Ngay cạnh Shinsekai là Sở thú Tennoji và Chùa Shitennoji (ngôi chùa cổ nhất Nhật Bản). Bạn có thể dành cả buổi chiều để khám phá cụm địa điểm này.",
              "An toàn: Dù Shinsekai rất thú vị, nhưng khu vực lân cận phía Nam (Kamagasaki) đôi khi hơi lộn xộn. Du khách nên đi theo các trục đường chính và tránh đi sâu vào các con hẻm quá vắng người lúc nửa đêm."
            ]
          },
          image: "https://images.trvl-media.com/place/6277000/329095e5-d05d-42b9-a4e8-43c88e9f9e59.jpg",
          imageTitle: "\"Thế Giới Mới\" Mang Màu Sắc Hoài Cổ"
        }
      ]
    },
    en: {
      title: "Top 5 Osaka Tourist Destinations You Should Try At Least Once",
      intro1: "If modern Tokyo and ancient Kyoto are famous, then Osaka is the city of hospitality and laughter. Known as \"Tenka no Daidokoro\" (The Nation's Kitchen), Osaka is the second largest city in Japan.",
      intro2: "This is where you will find the perfect combination of majestic historical monuments and vibrant neon entertainment districts.",
      introImgTitle: "The City of Food Lovers & Bustle",
      intro3: "",
      intro4: "",
      introImg: "https://file.smiletrip.vn/posts/vi-vn/2024/07/20/1009/thumbs/kinh-nghiem-du-lich-osaka-sieu-chi-tiet-tu-a-z.jpg",
      places: [
        {
          title: "1. Osaka Castle",
          desc: [
            "Built in the late 16th century by legendary shogun Toyotomi Hideyoshi, Osaka Castle is not only an architectural masterpiece but also a witness to historical ups and downs in the unification of Japan. With its majestic appearance, emerald green tiled roofs and brilliant gilded details, this is a destination that attracts millions of visitors every year."
          ],
          info: {
            address: "1-1 Osakajo, Chuo-ku, Osaka",
            hours: "9:00 - 17:00 (Last admission at 16:30)",
            ticket: "600 Yen for main tower (Surrounding park grounds are free)",
            transport: "Get off at Osakajokoen Station (JR Loop Line) or Tanimachi 4-chome Station",
            tips: [
              "Gozabune Boat Ride: Experience a boat ride around the castle moat to see the massive stone walls from a completely different perspective.",
              "Cherry Blossom Season: If visiting in early April, be prepared as this is one of the most crowded and beautiful blossom viewing spots in Japan.",
              "Food Combination: After visiting, you can walk to the Miraiza Osaka-jo area right next door - an ancient red brick building now turned into a high-end restaurant, cafe and souvenir shop complex.",
              "* Minor note: The entrance to the castle has a fairly long slope and stairs. For the elderly or those with children, use the elevator inside the tower to go up to the top floors before walking down to visit each floor."
            ]
          },
          image: "https://thaiantravel.com/wp-content/uploads/2024/06/lau-dai-osaka-6.jpg",
          imageTitle: "The Proud Symbol of the Port City"
        },
        {
          title: "2. Dotonbori",
          desc: [
            "If Tokyo has Shibuya, Osaka is proud of Dotonbori. Running along the canal of the same name, this neighborhood is a visual \"feast\" with thousands of giant neon signs, bustling sounds and the delicious aroma of food spreading through the alleys."
          ],
          info: {
            address: "Namba District, Osaka (Along Dotonbori Canal)",
            hours: "Shops usually open from 11:00. Most beautiful from 18:00 - 23:00 (When lights are on)",
            ticket: "Free sightseeing. Boat ticket about 1,000 - 1,200 Yen",
            transport: "Just a few minutes walk from Namba Station (Midosuji Line, Nankai Line) or Shinsaibashi Station",
            tips: [
              "Check-in with Glico Running Man: The giant LED sign of the runner has become a global symbol of Osaka. Don't leave without a photo striking a \"hands up\" pose like him!",
              "3D \"moving\" signs: Admire the giant crab of Kani Doraku restaurant waving its claws, or the strict-faced Kushikatsu Daruma chef model. This is a \"unique\" feature only found in this area.",
              "Tombori River Cruise: The 20-minute boat ride takes you gliding under bridges and admiring the brilliant lights from the water - an extremely romantic perspective at night.",
              "Ebisu-bashi Bridge: The busiest intersection, where you can stand and observe the fast pace of life and the bustling flow of people in Osaka."
            ]
          },
          image: "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-dotonbori-4.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "Paradise of Light and Food \"Forgetting the Way Back\""
        },
        {
          title: "3. Universal Studios Japan (USJ)",
          desc: [
            "Located in Osaka, USJ is one of four Universal Studios theme parks worldwide and the most visited park in Asia. With elaborately invested themed areas, USJ offers an authentic immersive experience into blockbuster movies and legendary video games."
          ],
          info: {
            address: "2-1-33 Sakurajima, Konohana-ku, Osaka",
            hours: "Usually from 8:30 - 21:00 (Varies by day and season)",
            ticket: "Ranges from 8,600¥ - 10,400¥ (Depending on weekday or holiday)",
            transport: "Take JR Yumesaki Line to Universal City Station",
            tips: [
              "Buy tickets and Express Pass early: Besides the admission ticket (Studio Pass), you should buy an Express Pass to shorten the queuing time for popular rides (you may have to wait 2-3 hours without this pass).",
              "USJ App: Download the official USJ app to track real-time wait times and register for an \"Area Timed Entry Ticket\" for the Nintendo area.",
              "Enjoy themed food: Each area has signature dishes like Mario-shaped buns, Minion popcorn buckets or a wizard-style meal at Three Broomsticks."
            ]
          },
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/49/48/super-nintendo-world.jpg?w=1200&h=-1&s=1",
          imageTitle: "World-Class Entertainment World"
        },
        {
          title: "4. Umeda Sky Building",
          desc: [
            "Umeda Sky Building is the proud symbol of Kita ward, Osaka. With a unique design consisting of two 40-story towers connected at the top by a giant \"Floating Garden\", the building offers an extremely impressive visual experience and infinity views over the city."
          ],
          info: {
            address: "1-1-88 Oyodonaka, Kita-ku, Osaka.",
            hours: "9:30 - 22:30 (Last admission at 22:00).",
            ticket: "About 1,500 Yen (Free for Osaka Amazing Pass holders before 16:00).",
            transport: "About 10 minutes walk from Osaka Station or Umeda Station.",
            tips: [
              "Sunset hunting: The ideal time to visit is about 30 minutes before sunset. You will witness the moment the city turns from golden light to sparkling neon lights.",
              "\"Divine\" photo angle: Stand at the base of the building and look up to see the sky's reflection on the giant glass panels and the signature circular hole at the top of the tower.",
              "Rest combination: After sightseeing, you can drop by Cafe Sky 40 right at the observatory to sip a drink while enjoying the million-dollar view."
            ]
          },
          image: "https://ik.imagekit.io/tvlk/blog/2023/11/umeda-sky-building-1.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "Heaven's Gate in the Heart of the City"
        },
        {
          title: "5. Shinsekai",
          desc: [
            "Shinsekai (meaning \"New World\") was built in 1912 with a design inspired by Paris and New York. After hundreds of years, this place has not changed much, creating a unique Retro space with vibrant signs, affordable eateries and the distinct atmosphere of Osaka's working class."
          ],
          info: {
            address: "Naniwa District, Osaka.",
            hours: "Eateries usually open from morning to late night.",
            ticket: "This is one of the cheapest dining areas in Osaka.",
            transport: "Get off at Shin-Imamiya Station (JR Loop Line) or Dobutsuen-mae Station (Midosuji Line).",
            tips: [
              "Nighttime beauty: Shinsekai really \"comes alive\" after dark. The neon lights from Tsutenkaku Tower and eateries create a great backdrop for street photography.",
              "Sightseeing combination: Right next to Shinsekai is Tennoji Zoo and Shitennoji Temple (Japan's oldest temple). You can spend a whole afternoon exploring this cluster of attractions.",
              "Safety: Although Shinsekai is fun, the neighboring southern area (Kamagasaki) can sometimes be a bit chaotic. Tourists should stick to main roads and avoid walking deep into deserted alleys at midnight."
            ]
          },
          image: "https://images.trvl-media.com/place/6277000/329095e5-d05d-42b9-a4e8-43c88e9f9e59.jpg",
          imageTitle: "\"New World\" with Nostalgic Colors"
        }
      ]
    },
    ja: {
      title: "少なくとも一度は行くべき大阪の観光スポットトップ5",
      intro1: "現代的な東京、古都の京都に対して、大阪はおもてなしと笑顔の街です。「天下の台所」として知られる大阪は、日本で2番目に大きな都市です。",
      intro2: "ここは、荘厳な歴史的建造物と、ネオンが輝く活気ある歓楽街が完璧に融合した場所です。",
      introImgTitle: "食い倒れと賑わいの街",
      intro3: "",
      intro4: "",
      introImg: "https://file.smiletrip.vn/posts/vi-vn/2024/07/20/1009/thumbs/kinh-nghiem-du-lich-osaka-sieu-chi-tiet-tu-a-z.jpg",
      places: [
        {
          title: "1. 大阪城",
          desc: [
            "16世紀後半に伝説的な武将・豊臣秀吉によって築かれた大阪城は、建築の傑作であるだけでなく、日本の天下統一における歴史の変遷の証人でもあります。その威風堂々とした姿、エメラルドグリーンの瓦屋根、そして鮮やかな金箔の装飾により、毎年数百万人の観光客を惹きつけています。"
          ],
          info: {
            address: "大阪府大阪市中央区大阪城1-1",
            hours: "9:00 - 17:00（最終入館16:30）",
            ticket: "天守閣600円（周辺の公園は無料）",
            transport: "JR大阪環状線「大阪城公園駅」または地下鉄「谷町四丁目駅」下車",
            tips: [
              "御座船に乗る: お堀を巡る舟遊びを体験し、全く異なる角度から巨大な石垣を眺めましょう。",
              "桜の季節: 4月上旬に訪れるなら、日本で最も混雑し、最も美しい花見スポットの一つであるため、覚悟が必要です。",
              "グルメとの組み合わせ: 観光の後は、すぐ隣のミライザ大阪城へ。古い赤レンガの建物が、現在はおしゃれなレストラン、カフェ、お土産屋の複合施設になっています。",
              "* ちょっとした注意点: 城への入り口には、かなり長い坂と階段があります。高齢者や子供連れの場合は、塔内のエレベーターを利用して上の階に行き、その後階段で各階を見学することをお勧めします。"
            ]
          },
          image: "https://thaiantravel.com/wp-content/uploads/2024/06/lau-dai-osaka-6.jpg",
          imageTitle: "港町の誇り高きシンボル"
        },
        {
          title: "2. 道頓堀",
          desc: [
            "東京に渋谷があるなら、大阪が誇るのが道頓堀です。同名の運河沿いに続くこの街は、数千もの巨大なネオンサイン、賑やかな音、そして路地に広がる美味しい香りが織りなす視覚と味覚の「ごちそう」です。"
          ],
          info: {
            address: "大阪府大阪市中央区難波周辺（道頓堀川沿い）",
            hours: "店舗は通常11:00から営業。最も美しいのは18:00 - 23:00（ライトアップ時）",
            ticket: "見学自由。クルーズ船は約1,000〜1,200円",
            transport: "なんば駅（御堂筋線、南海線）または心斎橋駅から徒歩数分",
            tips: [
              "グリコのランナーと記念撮影: ランナーの巨大なLED看板は、大阪の世界的シンボルとなっています。彼と同じように「両手を挙げて」ポーズをとらずに帰るわけにはいきません！",
              "「動く」3D看板: かに道楽の動く巨大なカニや、厳しい顔をした串カツだるまの料理人モデルを鑑賞しましょう。これらはこのエリアならではの「ユニーク」な特徴です。",
              "とんぼりリバークルーズ: 約20分の船旅で橋の下をくぐり、水面から鮮やかなネオンを眺めます。夜は非常にロマンチックな視点です。",
              "戎橋: 最も交差点で、大阪の速いペースの生活と人々の賑やかな流れを観察できる場所です。"
            ]
          },
          image: "https://ik.imagekit.io/tvlk/blog/2023/03/du-lich-dotonbori-4.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "帰り道を忘れる光とグルメの楽園"
        },
        {
          title: "3. ユニバーサル・スタジオ・ジャパン (USJ)",
          desc: [
            "大阪市にあるUSJは、世界に4つあるユニバーサル・スタジオのテーマパークの1つであり、アジアで最も訪問者が多いパークです。精巧に作られたテーマエリアで、大ヒット映画や伝説的なビデオゲームの世界への本格的な没入体験を提供します。"
          ],
          info: {
            address: "大阪府大阪市此花区桜島2-1-33",
            hours: "通常8:30 - 21:00（日や季節により異なります）",
            ticket: "8,600円〜10,400円（平日や休日により異なります）",
            transport: "JRゆめ咲線「ユニバーサルシティ駅」下車",
            tips: [
              "チケットとエクスプレス・パスを早めに購入する: 入場券（スタジオ・パス）に加えて、人気アトラクションの待ち時間を短縮するためにエクスプレス・パスを購入することをお勧めします（これがないと2〜3時間待つこともあります）。",
              "USJ公式アプリ: USJ公式アプリをダウンロードして、アトラクションのリアルタイムの待ち時間を確認し、任天堂エリアの「エリア入場確約券」を取得しましょう。",
              "テーマフードを楽しむ: 各エリアには、マリオの帽子を模したパン、ミニオンのポップコーンバケツ、三本の箒での魔法使い風の食事など、特色あるメニューがあります。"
            ]
          },
          image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/33/49/48/super-nintendo-world.jpg?w=1200&h=-1&s=1",
          imageTitle: "ワールドクラスのエンターテインメントの世界"
        },
        {
          title: "4. 梅田スカイビル",
          desc: [
            "梅田スカイビルは、大阪市北区の誇り高きシンボルです。40階建ての2つのタワーが頂上で巨大な「空中庭園」で結ばれたユニークなデザインで、非常に印象的な視覚体験と街全体のパノラマビューを提供します。"
          ],
          info: {
            address: "大阪府大阪市北区大淀中1-1-88",
            hours: "9:30 - 22:30（最終入場22:00）",
            ticket: "約1,500円（大阪アメイジングパスの所持者は16:00まで無料）",
            transport: "大阪駅または梅田駅から徒歩約10分",
            tips: [
              "夕日を狙う: 訪れるのに理想的な時間は、日没の約30分前です。街が黄金色の光からきらめくネオンへと変わる瞬間を目撃できます。",
              "「神」の撮影アングル: ビルの足元に立って見上げ、巨大なガラスパネルに空が反射する様子と、タワー頂上の特徴的な円形の穴を撮影しましょう。",
              "休憩を組み合わせる: 景色を楽しんだ後は、展望台にあるカフェ「Cafe Sky 40」で、百万ドルの夜景を楽しみながらドリンクを味わうことができます。"
            ]
          },
          image: "https://ik.imagekit.io/tvlk/blog/2023/11/umeda-sky-building-1.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "都会の真ん中にある天空の扉"
        },
        {
          title: "5. 新世界",
          desc: [
            "新世界は、パリやニューヨークにインスピレーションを得たデザインで1912年に建設されました。数百年経った今もあまり変わらず、鮮やかな看板、手頃な価格の飲食店、そして大阪の労働者階級の独特な雰囲気が漂うユニークなレトロ空間を作り出しています。"
          ],
          info: {
            address: "大阪府大阪市浪速区",
            hours: "飲食店は通常、朝から深夜まで営業しています。",
            ticket: "大阪で最も飲食費が安いエリアの一つです。",
            transport: "JR環状線「新今宮駅」または地下鉄御堂筋線「動物園前駅」下車",
            tips: [
              "夜の美しさ: 新世界は暗くなると本当に「活気づき」ます。通天閣や飲食店からのネオンが、ストリート写真の素晴らしい背景を作り出します。",
              "観光を組み合わせる: 新世界のすぐ隣には天王寺動物園と四天王寺（日本最古の仏教寺院）があります。午後まるごと使ってこのエリアを探索できます。",
              "安全: 新世界は楽しいですが、南側の隣接エリア（釜ヶ崎）は少し雑然としていることがあります。観光客は大通りに留まり、深夜に人通りの少ない路地の奥深くを歩くのは避けるべきです。"
            ]
          },
          image: "https://images.trvl-media.com/place/6277000/329095e5-d05d-42b9-a4e8-43c88e9f9e59.jpg",
          imageTitle: "ノスタルジックな色彩の「新世界」"
        }
      ]
    }
  };

  const labels = {
    vi: {
      address: "Địa chỉ",
      hours: "Giờ mở cửa",
      ticket: "Giá vé",
      access: "Cách đi lại",
      tips: "Mẹo nhỏ"
    },
    en: {
      address: "Address",
      hours: "Hours",
      ticket: "Ticket",
      access: "Access",
      tips: "Tips"
    },
    ja: {
      address: "住所",
      hours: "営業時間",
      ticket: "入場料",
      access: "アクセス",
      tips: "ヒント"
    }
  };

  const t = content[locale] || content.vi;
  const l = labels[locale] || labels.vi;

  const mapQueries = [
    "Osaka Castle",
    "Dotonbori",
    "Universal Studios Japan",
    "Umeda Sky Building",
    "Shinsekai, Osaka"
  ];

  return (
    <div className="w-full max-w-5xl mx-auto space-y-16">
      
      {/* Introduction Section */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            {t.title}
          </h2>
        </div>
        
        <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
          {t.intro1 && <p>{t.intro1}</p>}
          {t.intro2 && <p>{t.intro2}</p>}
        </div>
        
        {t.introImg && (
          <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-border/50 my-12 group">
            <div className="relative">
              <img 
                src={t.introImg} 
                alt={t.introImgTitle} 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-white/90 font-medium italic border-l-4 border-primary pl-4">
                  {t.introImgTitle}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
          {t.intro3 && <p>{t.intro3}</p>}
          {t.intro4 && <p>{t.intro4}</p>}
        </div>
      </section>

      {/* Places List */}
      <section className="space-y-24">
        {t.places.map((place, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <h3 className="text-3xl font-bold mb-8 text-foreground flex items-center">
              <span className="text-primary mr-4 drop-shadow-sm">{place.title.split('.')[0]}.</span> 
              {place.title.substring(place.title.indexOf('.') + 1).trim()}
            </h3>
            
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 relative border border-border/50 bg-muted/30">
              <img 
                src={place.image} 
                alt={place.imageTitle} 
                className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium border shadow-sm">
                <Camera className="w-4 h-4 inline mr-2 text-primary" />
                {place.imageTitle}
              </div>
            </div>

            <div className="space-y-4 mb-8 text-lg text-muted-foreground leading-relaxed">
              {place.desc.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            {place.info && (
              <div className="space-y-6">
                <Card className="border-l-4 border-l-primary bg-primary/5 shadow-sm overflow-hidden">
                  <CardContent className="p-6 md:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <MapPin className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground mb-1">{l.address}</p>
                            <a 
                              href={`https://maps.google.com/maps?q=${encodeURIComponent(mapQueries[index])}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center group/link text-muted-foreground hover:text-primary transition-colors"
                            >
                              {place.info.address}
                              <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                            </a>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Clock className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground mb-1">{l.hours}</p>
                            <p className="text-muted-foreground">{place.info.hours}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Ticket className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground mb-1">{l.ticket}</p>
                            <p className="text-muted-foreground">{place.info.ticket}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Navigation className="w-6 h-6 text-primary mr-4 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground mb-1">{l.access}</p>
                            <p className="text-muted-foreground">{place.info.transport}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-background rounded-2xl p-6 border shadow-sm">
                        <h4 className="font-bold flex items-center text-lg mb-4 text-primary">
                          <Lightbulb className="w-5 h-5 mr-2" /> {l.tips}
                        </h4>
                        <ul className="space-y-3">
                          {place.info.tips.map((tip, i) => (
                            <li key={i} className="flex items-start text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5 mr-3" />
                              <span className="text-muted-foreground">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Embedded Map */}
                <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-sm border border-border/50">
                  <iframe 
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQueries[index])}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale-[0.1] contrast-[1.05] dark:invert-[0.9] dark:hue-rotate-180"
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
}
