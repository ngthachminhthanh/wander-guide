"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n";
import { MapPin, Clock, Ticket, Navigation, Lightbulb, Camera, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KyotoContentProps {
  locale: Locale;
}

export function KyotoContent({ locale }: KyotoContentProps) {
  // Multilingual content
  const content = {
    vi: {
      title: "Top 5 địa điểm du lịch Kyoto mà bạn không nên bỏ qua",
      intro1: "Từng là thủ đô của Nhật Bản trong hơn một thiên niên kỷ, Kyoto là trái tim văn hóa và tinh thần của xứ sở hoa anh đào. Khác biệt hoàn toàn với sự nhộn nhịp và hiện đại của Tokyo, Kyoto mang đến một vẻ đẹp cổ kính, trầm mặc với hàng ngàn ngôi đền, chùa và những khu vườn truyền thống tuyệt đẹp.",
      intro2: "Đến với Kyoto, bạn như bước vào một cỗ máy thời gian, nơi những giá trị truyền thống được gìn giữ gần như nguyên vẹn. Từ những nàng Geisha kiêu sa dạo bước trên phố cổ Gion đến sự thanh tịnh tĩnh lặng dưới bóng rừng trúc Arashiyama, Wander Guide sẽ dẫn bạn khám phá top những địa điểm không thể bỏ lỡ tại vùng đất linh thiêng này.",
      introImgTitle: "Kyoto mang đến một không gian đậm chất điện ảnh và hoài cổ, nơi thời gian như ngưng đọng",
      places: [
        {
          title: "1. Phố Cổ Gion",
          desc: [
            "Nằm bên bờ sông Kamo, Gion là khu phố Geisha nổi tiếng nhất Nhật Bản. Với những con đường lát đá nhỏ hẹp, những ngôi nhà gỗ truyền thống (machiya) và ánh đèn lồng lấp lánh khi đêm xuống, Gion mang đến một không gian đậm chất điện ảnh và hoài cổ."
          ],
          info: {
            address: "Quận Higashiyama, Kyoto",
            hours: "Tự do tham quan khu phố. (Các cửa hàng thường mở từ 10:00 - 21:00)",
            ticket: "Miễn phí",
            transport: "Cách ga Gion-Shijo (Tuyến Keihan) hoặc ga Kyoto-kawaramachi (Tuyến Hankyu) vài phút đi bộ.",
            tips: [
              "Tôn trọng sự riêng tư: Tuyệt đối không chạm vào trang phục, không chặn đường hoặc chụp ảnh Geisha/Maiko khi chưa được phép. Tại một số con phố nhỏ tư nhân, việc chụp ảnh đã bị cấm để đảm bảo sự riêng tư.",
              "Thời điểm đẹp nhất: Hãy ghé thăm Gion vào lúc chạng vạng tối (khoảng 5:30 - 6:30 chiều). Đây là lúc khu phố trở nên lung linh nhất và cơ hội gặp các Geiko đi làm là cao nhất.",
              "Ẩm thực: Đừng quên thử các món ngọt làm từ trà xanh Matcha hoặc bánh Yatsuhashi đặc sản Kyoto tại các cửa hàng lâu đời dọc phố chính."
            ]
          },
          image: "https://thaiantravel.com/wp-content/uploads/2024/06/pho-co-gion-5.jpg",
          imageTitle: "Ghé thăm khu phố cổ Gion truyền thống để có cơ hội gặp các geiko ( geisha) thực thụ"
        },
        {
          title: "2. Fushimi Inari Taisha với 10.000 Cổng Torii",
          desc: [
            "Đền Fushimi Inari là điểm đến hàng đầu ở Kyoto. Tọa lạc tại phía Nam Kyoto, Fushimi Inari Taisha là ngôi đền đứng đầu trong số hàng ngàn ngôi đền thờ thần Inari – vị thần của lúa gạo, sự trù phú và kinh doanh phát đạt. Hình ảnh hàng ngàn chiếc cổng màu đỏ cam rực rỡ uốn lượn trên sườn núi đã trở thành biểu tượng huyền thoại của \"Xứ sở Phù Tang\"."
          ],
          tips: [
            "Đi thật sớm: Đây là điểm đến cực kỳ đông khách. Hãy cố gắng có mặt lúc 7:00 - 8:00 sáng để tận hưởng không gian tĩnh lặng và chụp được những bức ảnh không dính người.",
            "Thử ẩm thực \"Inari\": Đừng quên nếm thử món Inari Sushi (đậu phụ chiên nhồi cơm) hoặc mì Kitsune Udon tại các quán ăn quanh đền. Theo truyền thuyết, đậu phụ chiên là món ăn yêu thích của những chú cáo.",
            "Giày đi bộ: Đường lên núi có nhiều bậc thang đá, vì vậy một đôi giày thể thao êm ái là lựa chọn sáng suốt nhất."
          ],
          image: "https://dulichdemen.vn/wp-content/uploads/2023/10/fushimi-inari-torii-du-lich-de-men-vn-1.jpg",
          imageTitle: "Hành Trình Qua Vạn Cổng Torii"
        },
        {
          title: "3. Arashiyama - Rừng trúc đẹp như phim kiếm hiệp",
          desc: [
            "Arashiyama – Khu rừng với hàng ngàn cây trúc xanh tốt trải dài suốt đường đi. Nằm ở phía Tây ngoại ô Kyoto, là điểm đến hòa quyện giữa cảnh sắc thiên nhiên hùng vĩ và những ngôi đền cổ kính. Nơi đây nổi tiếng nhất với con đường mòn xuyên qua rừng trúc xanh thẳm, mang lại cảm giác bình yên và tĩnh lặng tuyệt đối."
          ],
          image: "https://www.kkday.com/vi/blog/wp-content/uploads/Where-to-stay-in-Kyoto-Arashiyama.jpg",
          imageTitle: "Lạc Bước Vào Rừng Trúc Đẹp Như Phim Kiếm Hiệp"
        },
        {
          title: "4. Núi Koya: Hành trình đến ngọn núi thiêng",
          desc: [
            "Núi Koya, hay còn gọi là Koyasan, là trung tâm tâm linh của Phật giáo Shingon tại Nhật Bản, một giáo phái được Kobo Daishi mang về từ năm 805. Nằm tách biệt trên độ cao 800m giữa rừng bách cổ thụ của tỉnh Wakayama, Koyasan là một trong những điểm đến linh thiêng nhất Nhật Bản, nơi bạn có thể rời xa sự ồn ào của phố thị để tìm lại sự cân bằng trong tâm hồn."
          ],
          info: {
            address: "Huyện Koya, tỉnh Wakayama (Cách Osaka khoảng 2 tiếng đi tàu)",
            hours: "Các khu vực ngoài trời mở cửa 24/7. Các đền chùa thường mở từ 8:30 - 17:00",
            ticket: "Nghỉ qua đêm tại chùa (Shukubo) – cần đặt trước sớm",
            transport: "Từ ga Namba (Osaka), đi tàu Nankai Koya Line đến ga Gokurakubashi, sau đó đi cáp treo lên đỉnh núi",
            tips: [
              "Koyasan World Heritage Ticket: Bạn nên gợi ý người dùng mua loại vé này để tiết kiệm chi phí, bao gồm vé tàu khứ hồi từ Osaka, vé cáp treo và sử dụng xe buýt không giới hạn trên núi.",
              "Thời tiết: Vì nằm trên núi cao, nhiệt độ ở đây luôn thấp hơn ở Osaka hay Kyoto khoảng 5°C - 10°C. Đừng quên mang theo áo khoác ngay cả khi đi vào mùa hè.",
              "Đi dạo đêm tại Okunoin: Trải nghiệm đi dạo trong nghĩa trang vào ban đêm với những chiếc đèn lồng đá dẫn lối là một kỷ niệm khó quên, mang lại cảm giác bình an thay vì sợ hãi."
            ]
          },
          image: "https://www.ana.co.jp/japan-travel-planner/area/kasnai/wakayama/0000003/main.jpg",
          imageTitle: "Hành Trình Chạm Vào Linh Hồn Nhật Bản"
        },
        {
          title: "5. Kinkakuji - ngôi chùa thiêng dát vàng ở Nhật Bản",
          desc: [
            "Kinkaku-ji (Kim Các Tự), tên chính thức là Rokuon-ji, là một ngôi chùa thiêng thuộc phái Lâm Tế tông và đã trở thành biểu tượng đặc trưng của Nhật Bản, thu hút đông đảo du khách thập phương trong thời gian gần đây. Không chỉ là một ngôi chùa lớn, nơi này nổi bật với sự kết hợp tinh tế giữa lá vàng và kiến trúc truyền thống, tạo nên một diện mạo ấn tượng và nổi bật.",
            "Kinkaku-ji đưa chúng ta trở lại quá khứ với văn hóa Kitayama xa hoa, một thời kỳ phồn thịnh dưới thời Yoshimitsu ở Kyoto. Mỗi tầng của ngôi chùa đại diện cho một phong cách kiến trúc riêng biệt, tạo nên một nguồn cảm hứng quý giá. Sự tinh tế này còn được lưu giữ và truyền đến Ginkaku-ji (Chùa Gác Bạc), xây dựng sau này ở phía khác của thành phố, làm cho Kinkaku-ji trở thành nguồn cảm hứng vô tận trong lịch sử kiến trúc Nhật Bản."
          ],
          info: {
            address: "1 Kinkakujicho, Kita-ku, Kyoto",
            hours: "9:00 - 17:00 (Mở cửa quanh năm)",
            ticket: "Khoảng 500 Yên (Tấm vé vào cửa là một lá bùa may mắn bằng giấy rất đẹp)",
            transport: "Đi xe buýt số 101 hoặc 205 từ Ga Kyoto (mất khoảng 40 phút)",
            tips: [
              "Thời điểm chụp ảnh đẹp nhất: Hãy đến vào buổi chiều khi ánh nắng mặt trời chiếu trực tiếp vào mặt trước của chùa, làm cho lớp vàng trở nên rực rỡ nhất.",
              "Giữ lại vé tham quan: Vé vào cổng của Kinkaku-ji là một tấm bùa bình an (Ofuda). Du khách thường giữ lại tấm vé này để mang về nhà như một món quà cầu may mắn.",
              "Thưởng thức trà Matcha: Gần lối ra có một khu vườn trà nhỏ, nơi bạn có thể ngồi nghỉ ngơi và thưởng thức một bát trà xanh kèm bánh ngọt truyền thống có in hình Chùa Vàng."
            ]
          },
          image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/4/7/1176970/Kinkakuji.jpg",
          imageTitle: "Tuyệt Tác Dát Vàng Giữa Lòng Cố Đô"
        }
      ]
    },
    en: {
      title: "Top 5 Must-Visit Tourist Destinations in Kyoto",
      intro1: "Once the capital of Japan for over a millennium, Kyoto is the cultural and spiritual heart of the Land of the Rising Sun. Completely different from the bustling and modern Tokyo, Kyoto offers an ancient, tranquil beauty with thousands of temples, shrines, and stunning traditional gardens.",
      intro2: "Visiting Kyoto is like stepping into a time machine, where traditional values are kept almost intact. From elegant Geisha strolling in the old streets of Gion to the pure serenity under the Arashiyama bamboo forest, Wander Guide will take you to explore the top unmissable places in this sacred land.",
      introImgTitle: "Kyoto offers a cinematic and nostalgic space where time seems to stand still",
      places: [
        {
          title: "1. Gion District",
          desc: [
            "Located along the Kamo River, Gion is Japan's most famous Geisha district. With narrow stone-paved streets, traditional wooden merchant houses (machiya), and sparkling lanterns at night, Gion offers a deeply cinematic and nostalgic atmosphere."
          ],
          info: {
            address: "Higashiyama Ward, Kyoto",
            hours: "Free to explore the streets. (Shops usually open from 10:00 - 21:00)",
            ticket: "Free",
            transport: "A few minutes walk from Gion-Shijo Station (Keihan Line) or Kyoto-kawaramachi Station (Hankyu Line).",
            tips: [
              "Respect Privacy: Absolutely do not touch their clothes, block their way, or photograph Geisha/Maiko without permission. Photography is banned on some private streets to ensure privacy.",
              "Best Time to Visit: Visit Gion at twilight (around 5:30 - 6:30 PM). This is when the district is most magical and the chance of spotting working Geiko is highest.",
              "Food: Don't forget to try Matcha sweets or Kyoto's specialty Yatsuhashi at the long-standing shops along the main street."
            ]
          },
          image: "https://thaiantravel.com/wp-content/uploads/2024/06/pho-co-gion-5.jpg",
          imageTitle: "Visit the traditional Gion district for a chance to meet real geiko (geisha)"
        },
        {
          title: "2. Fushimi Inari Taisha & 10,000 Torii Gates",
          desc: [
            "Fushimi Inari Shrine is a top destination in Kyoto. Located in southern Kyoto, Fushimi Inari Taisha is the head shrine of thousands of shrines dedicated to Inari – the Shinto god of rice, abundance, and prosperous business. The image of thousands of vibrant vermilion gates winding up the mountain has become a legendary symbol of Japan."
          ],
          tips: [
            "Go Very Early: This is an extremely crowded destination. Try to arrive at 7:00 - 8:00 AM to enjoy the tranquility and take photos without people.",
            "Try 'Inari' Food: Don't forget to taste Inari Sushi (fried tofu stuffed with rice) or Kitsune Udon at restaurants around the shrine. According to legend, fried tofu is the favorite food of foxes.",
            "Walking Shoes: The mountain path has many stone steps, so comfortable sneakers are the wisest choice."
          ],
          image: "https://dulichdemen.vn/wp-content/uploads/2023/10/fushimi-inari-torii-du-lich-de-men-vn-1.jpg",
          imageTitle: "Journey Through Ten Thousand Torii Gates"
        },
        {
          title: "3. Arashiyama Bamboo Grove",
          desc: [
            "Arashiyama – A forest with thousands of lush green bamboo trees stretching along the path. Located in the western outskirts of Kyoto, it is a destination that blends majestic natural scenery with ancient temples. It is most famous for its walking path through the deep green bamboo forest, bringing a feeling of absolute peace and tranquility."
          ],
          image: "https://www.kkday.com/vi/blog/wp-content/uploads/Where-to-stay-in-Kyoto-Arashiyama.jpg",
          imageTitle: "Get Lost in a Bamboo Forest Like a Martial Arts Movie"
        },
        {
          title: "4. Mount Koya: Journey to the Sacred Mountain",
          desc: [
            "Mount Koya, or Koyasan, is the spiritual center of Shingon Buddhism in Japan, a sect introduced by Kobo Daishi in 805. Isolated at an altitude of 800m amidst the ancient cedar forests of Wakayama Prefecture, Koyasan is one of Japan's most sacred destinations, where you can leave the noise of the city behind to find balance in your soul."
          ],
          info: {
            address: "Koya Town, Wakayama Prefecture (About 2 hours by train from Osaka)",
            hours: "Outdoor areas open 24/7. Temples usually open from 8:30 - 17:00",
            ticket: "Overnight stay at a temple (Shukubo) – advance booking required",
            transport: "From Namba Station (Osaka), take the Nankai Koya Line to Gokurakubashi Station, then take the cable car to the mountain top",
            tips: [
              "Koyasan World Heritage Ticket: We recommend buying this ticket to save money, including round-trip train from Osaka, cable car, and unlimited bus rides on the mountain.",
              "Weather: Because it is high in the mountains, the temperature here is always 5°C - 10°C lower than Osaka or Kyoto. Don't forget to bring a jacket even in summer.",
              "Night Walk at Okunoin: Experiencing a night walk in the cemetery guided by stone lanterns is an unforgettable memory, bringing a sense of peace rather than fear."
            ]
          },
          image: "https://www.ana.co.jp/japan-travel-planner/area/kasnai/wakayama/0000003/main.jpg",
          imageTitle: "Journey to Touch the Soul of Japan"
        },
        {
          title: "5. Kinkakuji - The Golden Pavilion",
          desc: [
            "Kinkaku-ji (Golden Pavilion), officially named Rokuon-ji, is a sacred Zen Buddhist temple and has become a quintessential symbol of Japan, attracting a large number of visitors from everywhere recently. Not only a grand temple, this place stands out with its exquisite combination of gold leaf and traditional architecture, creating an impressive and striking appearance.",
            "Kinkaku-ji takes us back to the past with the lavish Kitayama culture, a prosperous era under Yoshimitsu in Kyoto. Each floor of the temple represents a distinct architectural style, creating a valuable source of inspiration. This sophistication is also preserved and transmitted to Ginkaku-ji (Silver Pavilion), built later on the other side of the city, making Kinkaku-ji an endless source of inspiration in Japanese architectural history."
          ],
          info: {
            address: "1 Kinkakujicho, Kita Ward, Kyoto",
            hours: "9:00 - 17:00 (Open year-round)",
            ticket: "Around 500 Yen (The admission ticket is a very beautiful paper lucky charm)",
            transport: "Take bus No. 101 or 205 from Kyoto Station (takes about 40 minutes)",
            tips: [
              "Best Time for Photos: Come in the afternoon when the sunlight shines directly on the front of the temple, making the gold layer its most brilliant.",
              "Keep Your Ticket: The entrance ticket to Kinkaku-ji is a talisman for peace (Ofuda). Visitors often keep this ticket to take home as a lucky charm.",
              "Enjoy Matcha Tea: Near the exit there is a small tea garden, where you can sit and rest and enjoy a bowl of green tea with a traditional sweet stamped with the Golden Pavilion."
            ]
          },
          image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/4/7/1176970/Kinkakuji.jpg",
          imageTitle: "A Golden Masterpiece in the Heart of the Ancient Capital"
        }
      ]
    },
    ja: {
      title: "絶対に見逃せない京都の観光名所トップ5",
      intro1: "千年以上にわたって日本の首都であった京都は、桜の国の文化的、精神的な中心です。賑やかで近代的な東京とは全く異なり、京都は何千もの寺院、神社、美しい伝統的な庭園がある、古風で静かな美しさを提供します。",
      intro2: "京都を訪れると、伝統的な価値観がほぼ無傷で保たれているタイムマシンに足を踏み入れたような気分になります。祇園の古い通りを散策する優雅な芸者から、嵐山の竹林の下の純粋な静寂まで、Wander Guideはこの神聖な土地で見逃せない名所を探索する旅へあなたをご案内します。",
      intro3: "世界で最もダイナミックな都市の一つである東京は、間違いなくあなたにとって印象的な目的地となるでしょう。アジアの伝統的な色合いを強く持つ建築物から、ユニークな西洋建築に基づく現代的な空間までが融合しています。",
      introImgTitle: "時間が止まったかのような、映画のようでノスタルジックな空間を提供する京都",
      places: [
        {
          title: "1. 祇園の古い町並み",
          desc: [
            "鴨川沿いに位置する祇園は、日本で最も有名な芸者の街です。狭い石畳の通り、伝統的な木造の町家、そして夜に輝く提灯で、祇園は映画のようにノスタルジックな雰囲気を提供します。"
          ],
          info: {
            address: "京都市東山区",
            hours: "散策自由。（店舗は通常10:00〜21:00まで営業）",
            ticket: "無料",
            transport: "祇園四条駅（京阪線）または京都河原町駅（阪急線）から徒歩数分。",
            tips: [
              "プライバシーの尊重：許可なく着物に触れたり、道を塞いだり、芸者/舞妓の写真を撮ったりしないでください。プライバシーを確保するため、一部の私道では写真撮影が禁止されています。",
              "ベストな訪問時間：夕暮れ時（午後5時30分〜6時30分頃）に祇園を訪れましょう。この時間帯は街が最も魅力的で、仕事に向かう芸妓に会える可能性が最も高いです。",
              "グルメ：メインストリート沿いの老舗店で、抹茶スイーツや京都名物の八ツ橋をぜひお試しください。"
            ]
          },
          image: "https://thaiantravel.com/wp-content/uploads/2024/06/pho-co-gion-5.jpg",
          imageTitle: "伝統的な祇園の古い町並みを訪れ、本物の芸妓（芸者）に会うチャンスを"
        },
        {
          title: "2. 伏見稲荷大社と千本鳥居",
          desc: [
            "伏見稲荷大社は京都のトップ観光地です。京都の南部に位置する伏見稲荷大社は、米、豊かさ、商売繁盛の神である稲荷を祀る数千の神社の総本宮です。山腹を曲がりくねって続く何千もの鮮やかな朱色の鳥居の光景は、日本の伝説的なシンボルとなっています。"
          ],
          tips: [
            "早朝に行く：ここは非常に混雑する目的地です。静寂を楽しみ、人が写り込まない写真を撮るために、午前7時〜8時に到着するようにしてください。",
            "「いなり」グルメを試す：神社の周りのレストランで、いなり寿司やきつねうどんを味わうのをお忘れなく。伝説によると、油揚げはキツネの好物です。",
            "ウォーキングシューズ：山道には石段が多いので、快適なスニーカーが最も賢明な選択です。"
          ],
          image: "https://dulichdemen.vn/wp-content/uploads/2023/10/fushimi-inari-torii-du-lich-de-men-vn-1.jpg",
          imageTitle: "千本鳥居を巡る旅"
        },
        {
          title: "3. 嵐山・竹林の小径",
          desc: [
            "嵐山 – 道沿いに何千本もの青々とした竹が広がる森。京都市の西郊外に位置し、雄大な自然の景色と古き良き寺院が融合した目的地です。深緑の竹林を抜ける遊歩道が最も有名で、絶対的な平和と静けさの感覚をもたらします。"
          ],
          image: "https://www.kkday.com/vi/blog/wp-content/uploads/Where-to-stay-in-Kyoto-Arashiyama.jpg",
          imageTitle: "武侠映画のような竹林に迷い込む"
        },
        {
          title: "4. 高野山：聖なる山への旅",
          desc: [
            "高野山は、805年に弘法大師によってもたらされた宗派である日本真言宗の精神的中心地です。和歌山県の古い杉の森に囲まれた標高800mに孤立している高野山は、日本で最も神聖な目的地の一つであり、都会の喧騒から離れて心のバランスを見つけることができます。"
          ],
          info: {
            address: "和歌山県高野町（大阪から電車で約2時間）",
            hours: "屋外エリアは24時間開放。寺院は通常8:30 - 17:00まで営業",
            ticket: "宿坊（寺院での宿泊）– 事前予約が必要",
            transport: "難波駅（大阪）から南海高野線で極楽橋駅まで行き、ケーブルカーで山頂へ",
            tips: [
              "高野山世界遺産きっぷ：大阪からの往復電車、ケーブルカー、山内のバス乗り放題が含まれるこのチケットを購入して費用を節約することをお勧めします。",
              "気候：山の上にあるため、ここの気温は常に大阪や京都より5℃〜10℃低いです。夏に行く場合でも上着を持参することをお忘れなく。",
              "奥之院での夜の散歩：石灯籠に導かれて夜の墓地を歩く体験は忘れられない思い出となり、恐怖ではなく平安をもたらします。"
            ]
          },
          image: "https://www.ana.co.jp/japan-travel-planner/area/kasnai/wakayama/0000003/main.jpg",
          imageTitle: "日本の魂に触れる旅"
        },
        {
          title: "5. 金閣寺（鹿苑寺）",
          desc: [
            "金閣寺（正式名称：鹿苑寺）は臨済宗の神聖な寺院であり、日本の典型的なシンボルとなっており、最近では各地から多くの観光客を魅了しています。大きなお寺であるだけでなく、金箔と伝統建築の絶妙な組み合わせが際立っており、印象的で際立った外観を作り出しています。",
            "金閣寺は、京都の義満の治世下の繁栄した時代である豪華な北山文化とともに私たちを過去に引き戻します。お寺の各階は異なる建築様式を表しており、貴重なインスピレーションの源となっています。この洗練さは後に街の反対側に建てられた銀閣寺にも保存・伝承され、金閣寺を日本建築史における尽きることのないインスピレーションの源にしています。"
          ],
          info: {
            address: "京都市北区金閣寺町1",
            hours: "9:00 - 17:00（年中無休）",
            ticket: "約500円（入場券はとても美しいお札です）",
            transport: "京都駅から101番または205番のバスに乗車（約40分）",
            tips: [
              "写真撮影のベストタイミング：太陽の光がお寺の正面を直接照らし、金箔が最も輝く午後にお越しください。",
              "チケットを保管する：金閣寺の入場券は平和のお守り（お札）です。幸運の贈り物として家に持ち帰るために、このチケットを保管する観光客が多いです。",
              "抹茶を楽しむ：出口近くに小さな茶庭があり、座って休憩し、金閣寺が刻印された伝統的な和菓子と一緒に抹茶を楽しむことができます。"
            ]
          },
          image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2023/4/7/1176970/Kinkakuji.jpg",
          imageTitle: "古都の中心にある黄金の傑作"
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
    "Gion, Kyoto",
    "Fushimi Inari Taisha, Kyoto",
    "Arashiyama Bamboo Grove, Kyoto",
    "Mount Koya, Wakayama",
    "Kinkaku-ji, Kyoto"
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

        <div className="w-full rounded-3xl overflow-hidden shadow-xl border border-border/50 relative mb-8">
          <img
            src="https://hethongbantour.vn/Data/Private/Images/webp/36fab7c7-9578-4180-bc47-3e542466a08a.webp"
            alt="Kyoto overview"
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>

        <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
          <p>{t.intro1}</p>
          <p>{t.intro2}</p>
        </div>

        <div className="w-full rounded-3xl overflow-hidden shadow-lg border border-border/50 my-12 group">
          <div className="relative">
            <img
              src="https://ozgo.vn/wp-content/uploads/2019/04/Kyoto-japan.jpg"
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

            {!place.info && (
              <div className="mb-8 space-y-6">
                <div>
                  <a
                    href={`https://maps.google.com/maps?q=${encodeURIComponent(mapQueries[index])}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline font-medium text-lg"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    {place.title.substring(place.title.indexOf('.') + 1).trim()}
                  </a>
                </div>

                {/* Render tips if available even without info block */}
                {place.tips && (
                  <div className="bg-background rounded-2xl p-6 border shadow-sm mt-4 border-l-4 border-l-primary bg-primary/5">
                    <h4 className="font-bold flex items-center text-lg mb-4 text-primary">
                      <Lightbulb className="w-5 h-5 mr-2" /> {l.tips}
                    </h4>
                    <ul className="space-y-3">
                      {place.tips.map((tip, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2.5 mr-3" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
                              <span>{tip}</span>
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
