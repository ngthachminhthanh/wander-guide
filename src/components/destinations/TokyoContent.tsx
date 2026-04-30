"use client";

import { motion } from "framer-motion";
import { Locale } from "@/i18n";
import { MapPin, Clock, Ticket, Navigation, Lightbulb, Camera, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TokyoContentProps {
  locale: Locale;
}

export function TokyoContent({ locale }: TokyoContentProps) {
  // Multilingual content
  const content = {
    vi: {
      title: "7 địa điểm du lịch Tokyo nổi tiếng bạn nên đến",
      intro1: "Khi nhắc đến Nhật Bản chắc chắn ai cũng từng nghe qua cái tên Tokyo, như thế đủ để chứng minh sức hút và sự nổi tiếng của địa danh này đúng không nè? Và nếu được tự mình đặt chân đến và tham quan từng góc phố, con đường và khuôn viên ngập tràn hoa anh đào thì còn tuyệt hơn biết bao nhiêu.",
      intro2: "Nếu có cơ hội, bạn nên làm một chuyến đi đến đây để cảm nhận nhịp sống của một thành phố bậc nhất là thế nào. Thế nên mới nói “người yêu có thể không có nhưng nhất định phải ghé thăm các địa điểm du lịch Tokyo” được Wander Guide bật mí cho bạn dưới đây nhé.",
      introImgTitle: "Các địa điểm du lịch Tokyo sẽ mang bạn đi tham quan những nơi làm nên tên tuổi của thành phố",
      intro3: "Là một trong những thành phố năng động bậc nhất thế giới, chắc chắn Tokyo sẽ là một điểm đến rất gì và này nọ dành cho bạn đấy. Không gian tại đây là sự kết hợp từ những công trình mang màu sắc truyền thống đậm chất Á Đông, cho đến không hiện đại dựa theo kiến trúc phương Tây độc đáo.",
      intro4: "Sau đó, thành phố này sẽ khoác lên mình lớp áo hoa anh đào đặc trưng để góp phần tạo nên một “xứ sở hoa anh đào”. Chính vì thế mà các địa điểm du lịch Tokyo sẽ luôn mang đến cho bạn những giây phút tuyệt vời.",
      places: [
        {
          title: "1. Hoàng cung Tokyo",
          desc: [
            "Hoàng cung Tokyo (皇居 (Hoàng Cư) Kōkyo, nghĩa đen là \"nơi Thiên hoàng ở\") là nơi cư trú chính của Thiên hoàng Nhật Bản. Khuôn viên Hoàng cung rộng lớn như một công viên, nằm trong khu Chiyoda của Tokyo, gần ga Tokyo và có nhiều tòa nhà bao gồm cả cung điện chính, nhà riêng của gia đình hoàng gia, một kho lưu trữ, bảo tàng và các cơ quan hành chính.",
            "Hoàng cung được xây dựng trên vị trí thành Edo cũ, tổng diện tích bao gồm các khu vườn là 1,15 km². Hoàng cung Tokyo nằm ngay ở trung tâm thành phố, là nơi dành cho hoàng gia Nhật Bản sinh sống và làm việc. Đây cũng có vai trò trong chính trị - ngoại giao quan trọng vì là nơi hoạt động ngoại giao với lãnh đạo các nước.",
            "Hơn nữa, nói về mặt lịch sử thì hoàng cung chính là nơi tôn nghiêm nhất của “quốc gia hoa anh đào”. Hoàng cung được xây dựng trong một khu công viên rộng lớn với cảnh vật tuyệt đẹp và được bao bọc bởi hào nước và tường thành bằng đá. Đây sẽ là địa điểm check-in Tokyo chất lượng nhất đấy nhé."
          ],
          image: "https://ik.imagekit.io/tvlk/blog/2023/03/hoang-cung-tokyo-4.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "Hoàng cung Tokyo"
        },
        {
          title: "2. Khu phố Shibuya",
          desc: [
            "Shibuya (渋谷区 (Sáp Cốc khu) Shibuya-ku) là một trong 23 khu đặc biệt của Tokyo, Nhật Bản.",
            "Shibuya thường được biết đến qua khu thương mại sầm uất chung quanh Nhà ga Shibuya. Đây là một điểm giao thông tấp nập bậc nhất ở Tokyo. Các cửa hiệu ở Shibuya thiên về thời trang giới trẻ nên nghiễm nhiên khu vực này có tiếng là nơi tụ tập đông đảo các dịch vụ may mặc thời trang như thương xá Shibuya 109.",
            "Tính đến hiện tại, khu phố thời trang Shibuya đang nơi sở hữu các cửa hiệu thời trang như: Shibuya PARCO, Cocoti,.. .Đặc biệt, địa điểm du lịch Tokyo này cũng được chọn là nơi tổ chức các sự kiện có liên quan đến thời trang."
          ],
          image: "https://mia.vn/media/uploads/blog-du-lich/khi-anh-den-chua-bao-gio-tat-tai-shibuya-1682866202.jpg",
          imageTitle: "Khu phố Shibuya"
        },
        {
          title: "3. Chùa Sensoji",
          desc: [
            "Nằm giữa lòng quận Asakusa nhộn nhịp, Senso-ji không chỉ là ngôi chùa cổ nhất Tokyo (xây dựng từ năm 645) mà còn là biểu tượng văn hóa không thể bỏ qua khi đến Nhật Bản. Đây là điểm đến hoàn hảo để bạn cảm nhận sự giao thoa giữa nét tâm linh truyền thống và nhịp sống hiện đại."
          ],
          info: {
            address: "2-3-1 Asakusa, Taito-ku, Tokyo.",
            hours: "Điện chính: 6:00 - 17:00 (Tháng 10 - Tháng 3 mở từ 6:30). Khuôn viên chùa: Luôn mở cửa.",
            ticket: "Miễn phí hoàn toàn.",
            transport: "Cách ga Asakusa (Tuyến Ginza, Asakusa, Tobu) chỉ 5 phút đi bộ.",
            tips: [
              "Đi sớm hoặc đi muộn: Để tránh đám đông, hãy đến trước 9:00 sáng hoặc sau 5:00 chiều. Khi tối đến, các cổng chùa được thắp đèn lồng cực kỳ lung linh và yên tĩnh.",
              "Thuê Kimono: Khu vực Asakusa quanh chùa có rất nhiều cửa hàng cho thuê Kimono. Diện trang phục truyền thống đi dạo tại Senso-ji sẽ giúp bạn có những bức ảnh đáng nhớ."
            ]
          },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cloudy_Sens%C5%8D-ji.jpg/1280px-Cloudy_Sens%C5%8D-ji.jpg",
          imageTitle: "Chùa Sensoji"
        },
        {
          title: "4. Đền Meiji Jingu",
          desc: [
            "Nằm ẩn mình trong một khu rừng nhân tạo rộng hơn 70 hecta với hơn 100.000 cây xanh, Meiji Jingu là đền thờ Thần đạo (Shinto) quan trọng nhất Tokyo. Đền được xây dựng để tưởng niệm Minh Trị Thiên Hoàng – người có công lớn trong công cuộc hiện đại hóa Nhật Bản."
          ],
          info: {
            address: "1-1 Yoyogikamizonocho, Shibuya, Tokyo.",
            hours: "Mở cửa lúc mặt trời mọc - Đóng cửa lúc mặt trời lặn (Thay đổi theo từng tháng).",
            ticket: "Miễn phí (Riêng khu vườn trong đền có phí khoảng 500 Yên).",
            transport: "Ngay sát ga Harajuku (Tuyến JR Yamanote) hoặc ga Meiji-jingumae.",
            tips: [
              "Rửa tay trước khi vào: Hãy ghé qua hồ nước nhỏ (Temizuya) gần lối vào chính để thực hiện nghi thức rửa tay và miệng để thanh tịnh bản thân.",
              "Kết hợp lịch trình: Sau khi tận hưởng không khí thanh tịnh tại đền, bạn chỉ cần đi bộ vài bước là đến ngay Phố Takeshita năng động – trung tâm văn hóa trẻ và thời trang độc lạ của Nhật Bản."
            ]
          },
          image: "https://dulichviet.com.vn/images/bandidau/kham-pha-den-meiji-jingu-nhat-ban.jpg",
          imageTitle: "Ốc Đảo Xanh Giữa Lòng Tokyo Hiện Đại"
        },
        {
          title: "5. Công viên Ueno",
          desc: [
            "Được thành lập vào năm 1873, Ueno Onshi Koen là một trong những công viên công cộng đầu tiên và lớn nhất Nhật Bản. Với diện tích hơn 50ha, đây không chỉ là một lá phổi xanh mà còn là \"thánh địa\" của những tâm hồn yêu nghệ thuật và lịch sử."
          ],
          info: {
            address: "Ueno-koen, Taito-ku, Tokyo.",
            hours: "Công viên: 5:00 - 23:00. (Các bảo tàng/sở thú thường từ 9:30 - 17:00).",
            ticket: "Miễn phí vào cổng công viên. (Các bảo tàng và sở thú có thu phí riêng).",
            transport: "Ngay sát Ga Ueno (Lối ra Park Exit) - điểm nút giao thông cực lớn của các tuyến JR, Metro và Shinkansen.",
            tips: [
              "Mùa hoa anh đào: Ueno là một trong những điểm ngắm hoa anh đào (Hanami) nổi tiếng nhất Tokyo với hơn 1.000 gốc cây nở rộ dọc con đường chính.",
              "Kết hợp tham quan: Vì khu vực này rất rộng, hãy dành ít nhất nửa ngày nếu bạn muốn đi sở thú hoặc tham quan một bảo tàng bất kỳ.",
              "Mua sắm & Ăn uống: Ngay cạnh công viên là khu chợ Ameyoko sầm uất – nơi bạn có thể mua quà lưu niệm giá rẻ và thưởng thức ẩm thực đường phố sau khi dạo công viên."
            ]
          },
          image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEsYW7Y45GniDPOvKVZeoCmvG2srOIWT_Q3Sn3ZMztzTZOdAmT25_kmOGfHsmNQKAZRTQ-KjGkcbJsiPSUj0RMW657LSuYg1apha_TEM-JxbeOcriuGJu4C-3k57c7PNJ0zgXoIcg=s1360-w1360-h1020-rw",
          imageTitle: "Trái Tim Văn Hóa Và Thiên Nhiên Của Tokyo"
        },
        {
          title: "6. Tháp truyền hình Tokyo SkyTree",
          desc: [
            "Với chiều cao 634 mét, Tokyo Skytree hiện là tòa tháp cao nhất Nhật Bản và là một trong những cấu trúc cao nhất thế giới. Không chỉ là tháp truyền hình, nơi đây còn là một tổ hợp giải trí, mua sắm và ngắm cảnh đẳng cấp quốc tế."
          ],
          info: {
            address: "1-1-2 Oshiage, Sumida-ku, Tokyo",
            hours: "10:00 - 21:00 (Nhận khách cuối cùng lúc 20:00)",
            ticket: "Dao động từ 2.100¥ - 3.100¥ (Tùy tầng quan sát và ngày thường/lễ)",
            transport: "Ga Tokyo Skytree hoặc ga Oshiage (Tuyến Asakusa Line, Hanzomon Line)",
            tips: [
              "Đặt vé trực tuyến: Skytree rất đông khách, bạn nên đặt vé trước qua website hoặc ứng dụng để tránh xếp hàng dài và thường sẽ có giá rẻ hơn mua trực tiếp.",
              "Thời điểm \"vàng\": Hãy đến đây vào khoảng 1 tiếng trước khi hoàng hôn. Bạn sẽ được chiêm ngưỡng khoảnh khắc thành phố chuyển mình từ ánh nắng rực rỡ sang ánh đèn đêm lung linh.",
              "Chiêm ngưỡng ánh sáng: Mỗi đêm, tòa tháp sẽ được thắp sáng theo các chủ đề màu sắc khác nhau (thường là màu Iki - xanh da trời hoặc Miyabi - tím truyền thống), tạo nên một khung cảnh cực kỳ lãng mạn bên dòng sông Sumida."
            ]
          },
          image: "https://admin.goldensmiletravel.com/upload/old/images/2023/06/28/tokyo-skytree-1024x576-1687921129.jpg",
          imageTitle: "Đỉnh Cao Công Nghệ & Tầm Nhìn Vô Cực"
        },
        {
          title: "7. Ga Tokyo",
          desc: [
            "Ga Tokyo là nhà ga bận rộn nhất Nhật Bản về số lượng chuyến tàu mỗi ngày. Với mặt tiền bằng gạch đỏ đặc trưng từ thời Meiji (phía Marunouchi) đối lập với các tòa nhà chọc trời hiện đại (phía Yaesu), nơi đây là trái tim của mạng lưới giao thông toàn quốc."
          ],
          info: {
            address: "Chiyoda, Tokyo (Nằm ngay trung tâm thành phố)",
            hours: "Theo giờ tàu chạy",
            ticket: "Vé tàu",
            transport: "Shinkansen (đi khắp Nhật Bản), JR Yamanote, Chuo Line, Tokyo Metro Marunouchi...",
            tips: [
              "Sử dụng biển báo màu sắc: Ga Tokyo rất lớn và phức tạp. Hãy luôn nhìn theo các biển báo chỉ dẫn màu sắc trên trần nhà hoặc dưới sàn để tìm đúng tuyến tàu hoặc lối ra.",
              "Gửi hành lý: Nếu bạn có vali lớn, hãy sử dụng hệ thống tủ khóa (Coin Locker) rất phổ biến tại các lối hành lang để thong thả đi dạo.",
              "Cung điện Hoàng gia (Imperial Palace): Từ lối ra Marunouchi, bạn chỉ mất khoảng 10 phút đi bộ dọc theo đại lộ tuyệt đẹp để đến được Cung điện Hoàng gia – một điểm tham quan nổi tiếng khác."
            ]
          },
          image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEO3ugXl470AaCTwCRLMOknCrbX1gVEWo3k55YkGFKfzo_aS49S6Vby_9p85N8W_dvt8Hqzqz54KUM1mFNv6ulYm9kQiWjUWh4vriPmjXcZJO5UVv4fPfHjFw8cTWrCeGwLCiyzAVQckyU=s1360-w1360-h1020-rw",
          imageTitle: "Điểm Giao Thoa Giữa Lịch Sử Và Hiện Đại"
        }
      ]
    },
    en: {
      title: "7 Famous Tourist Destinations in Tokyo You Must Visit",
      intro1: "When mentioning Japan, everyone has surely heard the name Tokyo, which is enough to prove the charm and popularity of this place, right? And it would be even more wonderful to set foot there yourself and visit every street corner, road, and campus filled with cherry blossoms.",
      intro2: "If you have the chance, you should take a trip here to feel the pace of life in a top-tier city. Therefore, it is often said that \"you might not have a lover, but you must visit Tokyo's tourist attractions\" revealed to you by Wander Guide below.",
      introImgTitle: "Tokyo tourist destinations will take you to visit the places that make the city's name",
      intro3: "As one of the most dynamic cities in the world, Tokyo will surely be an impressive destination for you. The space here is a combination of structures with bold Asian traditional colors, and unique Western-style modern architecture.",
      intro4: "After that, this city will put on its characteristic cherry blossom coat to contribute to creating a \"land of cherry blossoms\". That's why Tokyo tourist attractions will always bring you wonderful moments.",
      places: [
        {
          title: "1. Tokyo Imperial Palace",
          desc: [
            "Tokyo Imperial Palace (皇居 Kōkyo, literally \"Imperial Residence\") is the primary residence of the Emperor of Japan. The large park-like grounds are located in the Chiyoda ward of Tokyo, near Tokyo Station, and contain various buildings including the main palace, the private residences of the imperial family, an archive, museums, and administrative offices.",
            "The Imperial Palace is built on the site of the old Edo Castle. The total area including the gardens is 1.15 km². The Tokyo Imperial Palace is located right in the center of the city, where the Japanese imperial family lives and works. It also plays an important political and diplomatic role as a place for diplomatic activities with leaders of other countries.",
            "Furthermore, historically, the imperial palace is the most sacred place of the \"land of cherry blossoms\". The imperial palace is built in a large park area with beautiful scenery, surrounded by moats and stone walls. This will be the highest quality Tokyo check-in spot."
          ],
          image: "https://ik.imagekit.io/tvlk/blog/2023/03/hoang-cung-tokyo-4.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "Tokyo Imperial Palace"
        },
        {
          title: "2. Shibuya District",
          desc: [
            "Shibuya (渋谷区 Shibuya-ku) is one of the 23 special wards of Tokyo, Japan.",
            "Shibuya is often known for its bustling commercial area around Shibuya Station. This is one of the busiest transportation hubs in Tokyo. The shops in Shibuya are geared towards youth fashion, so naturally this area has a reputation as a gathering place for many fashion apparel services such as the Shibuya 109 department store.",
            "Currently, the Shibuya fashion district is home to fashion stores such as: Shibuya PARCO, Cocoti,... In particular, this Tokyo tourist destination is also chosen to host fashion-related events."
          ],
          image: "https://mia.vn/media/uploads/blog-du-lich/khi-anh-den-chua-bao-gio-tat-tai-shibuya-1682866202.jpg",
          imageTitle: "Shibuya District"
        },
        {
          title: "3. Sensoji Temple",
          desc: [
            "Located in the heart of the bustling Asakusa district, Senso-ji is not only Tokyo's oldest temple (built in 645) but also an unmissable cultural icon when visiting Japan. This is the perfect destination to feel the intersection between traditional spirituality and modern lifestyle."
          ],
          info: {
            address: "2-3-1 Asakusa, Taito-ku, Tokyo.",
            hours: "Main Hall: 6:00 - 17:00 (Oct - Mar opens from 6:30). Temple grounds: Always open.",
            ticket: "Completely free.",
            transport: "Just a 5-minute walk from Asakusa Station (Ginza, Asakusa, Tobu Lines).",
            tips: [
              "Go early or late: To avoid the crowds, arrive before 9:00 AM or after 5:00 PM. In the evening, the temple gates are lit up with incredibly sparkling and peaceful lanterns.",
              "Rent a Kimono: The Asakusa area around the temple has many Kimono rental shops. Wearing traditional clothes to stroll around Senso-ji will help you get memorable photos."
            ]
          },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cloudy_Sens%C5%8D-ji.jpg/1280px-Cloudy_Sens%C5%8D-ji.jpg",
          imageTitle: "Sensoji Temple"
        },
        {
          title: "4. Meiji Jingu Shrine",
          desc: [
            "Hidden in an artificial forest spanning over 70 hectares with more than 100,000 green trees, Meiji Jingu is Tokyo's most important Shinto shrine. The shrine was built to commemorate Emperor Meiji – who made great contributions to the modernization of Japan."
          ],
          info: {
            address: "1-1 Yoyogikamizonocho, Shibuya, Tokyo.",
            hours: "Opens at sunrise - Closes at sunset (Varies by month).",
            ticket: "Free (The inner garden has an admission fee of about 500 Yen).",
            transport: "Right next to Harajuku Station (JR Yamanote Line) or Meiji-jingumae Station.",
            tips: [
              "Wash hands before entering: Stop by the small water basin (Temizuya) near the main entrance to perform the ritual of washing hands and mouth to purify yourself.",
              "Combine itinerary: After enjoying the pure atmosphere at the shrine, just walk a few steps to the dynamic Takeshita Street – Japan's youth culture and unique fashion center."
            ]
          },
          image: "https://dulichviet.com.vn/images/bandidau/kham-pha-den-meiji-jingu-nhat-ban.jpg",
          imageTitle: "Green Oasis in Modern Tokyo"
        },
        {
          title: "5. Ueno Park",
          desc: [
            "Established in 1873, Ueno Onshi Koen is one of the first and largest public parks in Japan. Spanning over 50 hectares, this is not only a green lung but also a \"mecca\" for art and history lovers."
          ],
          info: {
            address: "Ueno-koen, Taito-ku, Tokyo.",
            hours: "Park: 5:00 - 23:00. (Museums/Zoos usually 9:30 - 17:00).",
            ticket: "Free park admission. (Museums and zoos have separate fees).",
            transport: "Right next to Ueno Station (Park Exit) - a massive transit hub for JR, Metro, and Shinkansen lines.",
            tips: [
              "Cherry blossom season: Ueno is one of the most famous cherry blossom viewing (Hanami) spots in Tokyo with over 1,000 trees blooming along the main path.",
              "Combined visit: Because this area is very large, dedicate at least half a day if you want to visit the zoo or any museum.",
              "Shopping & Dining: Right next to the park is the bustling Ameyoko market – where you can buy cheap souvenirs and enjoy street food after a park stroll."
            ]
          },
          image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEsYW7Y45GniDPOvKVZeoCmvG2srOIWT_Q3Sn3ZMztzTZOdAmT25_kmOGfHsmNQKAZRTQ-KjGkcbJsiPSUj0RMW657LSuYg1apha_TEM-JxbeOcriuGJu4C-3k57c7PNJ0zgXoIcg=s1360-w1360-h1020-rw",
          imageTitle: "The Cultural and Natural Heart of Tokyo"
        },
        {
          title: "6. Tokyo SkyTree",
          desc: [
            "Standing 634 meters tall, Tokyo Skytree is currently the tallest tower in Japan and one of the tallest structures in the world. Not just a broadcasting tower, this is also a world-class entertainment, shopping, and observation complex."
          ],
          info: {
            address: "1-1-2 Oshiage, Sumida-ku, Tokyo",
            hours: "10:00 - 21:00 (Last admission at 20:00)",
            ticket: "Ranges from 2,100¥ - 3,100¥ (Depending on the observation deck and weekday/holiday)",
            transport: "Tokyo Skytree Station or Oshiage Station (Asakusa Line, Hanzomon Line)",
            tips: [
              "Book tickets online: Skytree gets very crowded, you should book tickets in advance via the website or app to avoid long lines and usually it's cheaper than buying on-site.",
              "The \"golden\" hour: Arrive here about 1 hour before sunset. You will witness the moment the city transforms from bright sunlight to sparkling night lights.",
              "Admire the lighting: Every night, the tower is illuminated in different color themes (usually Iki - sky blue or Miyabi - traditional purple), creating a highly romantic scene by the Sumida River."
            ]
          },
          image: "https://admin.goldensmiletravel.com/upload/old/images/2023/06/28/tokyo-skytree-1024x576-1687921129.jpg",
          imageTitle: "Pinnacle of Technology & Infinity Vision"
        },
        {
          title: "7. Tokyo Station",
          desc: [
            "Tokyo Station is the busiest station in Japan in terms of the number of trains per day. With its characteristic red brick facade from the Meiji era (Marunouchi side) contrasting with modern skyscrapers (Yaesu side), this is the heart of the national transportation network."
          ],
          info: {
            address: "Chiyoda, Tokyo (Right in the city center)",
            hours: "According to train schedules",
            ticket: "Train ticket",
            transport: "Shinkansen (traveling across Japan), JR Yamanote, Chuo Line, Tokyo Metro Marunouchi...",
            tips: [
              "Use color signs: Tokyo Station is very large and complex. Always look for colored signs on the ceiling or floor to find the right train line or exit.",
              "Luggage storage: If you have large suitcases, use the Coin Locker system very common in the corridors to stroll leisurely.",
              "Imperial Palace: From the Marunouchi exit, it only takes about 10 minutes to walk along a beautiful avenue to reach the Imperial Palace – another famous attraction."
            ]
          },
          image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEO3ugXl470AaCTwCRLMOknCrbX1gVEWo3k55YkGFKfzo_aS49S6Vby_9p85N8W_dvt8Hqzqz54KUM1mFNv6ulYm9kQiWjUWh4vriPmjXcZJO5UVv4fPfHjFw8cTWrCeGwLCiyzAVQckyU=s1360-w1360-h1020-rw",
          imageTitle: "The Intersection of History and Modernity"
        }
      ]
    },
    ja: {
      title: "必ず訪れるべき東京の有名観光地7選",
      intro1: "日本といえば、誰もが一度は「東京」という名前を聞いたことがあるでしょう。それだけでこの地の魅力と人気が証明されますよね。そして、自分自身でその地に足を踏み入れ、桜が咲き誇る街角や通りを散策できれば、どんなに素晴らしいことでしょうか。",
      intro2: "機会があれば、一流都市の生活リズムを感じるために、ぜひ東京へ旅行してみてください。Wander Guideが以下に紹介する「東京の観光地は必ず訪れるべき」と言われる理由がわかるはずです。",
      introImgTitle: "東京の観光地は、都市の名声を作り上げた場所へとあなたを案内します",
      intro3: "世界で最もダイナミックな都市の一つである東京は、間違いなくあなたにとって印象的な目的地となるでしょう。アジアの伝統的な色合いを強く持つ建築物から、ユニークな西洋建築に基づく現代的な空間までが融合しています。",
      intro4: "その後、この都市は特徴的な桜のコートを羽織り、「桜の国」を作り上げるのに貢献します。だからこそ、東京の観光地は常に素晴らしい瞬間を提供してくれます。",
      places: [
        {
          title: "1. 皇居",
          desc: [
            "皇居（Kōkyo、文字通り「天皇の住まい」）は、日本の天皇の主な住居です。公園のような広大な敷地は東京の千代田区、東京駅の近くに位置し、宮殿、皇室の私邸、記録庫、博物館、行政機関など様々な建物があります。",
            "皇居は旧江戸城の跡地に建てられており、庭園を含む総面積は1.15平方キロメートルです。皇居は都市の中心に位置し、日本の皇室が生活し働く場所です。また、他国の指導者との外交活動の場としても重要な政治的・外交的役割を果たしています。",
            "さらに、歴史的に見ても皇居は「桜の国」の最も神聖な場所です。皇居は美しい景色の広大な公園エリアに建てられ、堀と石垣に囲まれています。ここは東京で最も質の高いチェックインスポットになるでしょう。"
          ],
          image: "https://ik.imagekit.io/tvlk/blog/2023/03/hoang-cung-tokyo-4.jpg?tr=q-70,c-at_max,w-1000,h-600",
          imageTitle: "皇居"
        },
        {
          title: "2. 渋谷",
          desc: [
            "渋谷（渋谷区）は、日本の東京23区の一つです。",
            "渋谷は、渋谷駅周辺の賑やかな商業エリアとしてよく知られています。これは東京で最も交通量の多いハブの一つです。渋谷の店舗は若者向けのファッションに重点を置いているため、当然のことながら、このエリアはSHIBUYA109など多くのファッションアパレルサービスが集まる場所として有名です。",
            "現在、渋谷ファッション地区には、渋谷PARCO、Cocotiなどのファッションストアがあります。特に、この東京の観光地はファッション関連のイベントを開催する場所としても選ばれています。"
          ],
          image: "https://mia.vn/media/uploads/blog-du-lich/khi-anh-den-chua-bao-gio-tat-tai-shibuya-1682866202.jpg",
          imageTitle: "渋谷"
        },
        {
          title: "3. 浅草寺",
          desc: [
            "賑やかな浅草の中心に位置する浅草寺は、東京最古の寺院（645年建立）であるだけでなく、日本を訪れる際に見逃せない文化的アイコンでもあります。伝統的な精神性と現代のライフスタイルの交差を感じるのに最適な目的地です。"
          ],
          info: {
            address: "東京都台東区浅草2-3-1",
            hours: "本堂：6:00 - 17:00（10月〜3月は6:30から）。境内：常に開放。",
            ticket: "完全無料。",
            transport: "浅草駅（銀座線、浅草線、東武線）から徒歩わずか5分。",
            tips: [
              "早く行くか遅く行くか：混雑を避けるため、午前9時前または午後5時以降に到着してください。夕方になると、寺院の門は信じられないほどきらびやかで平和な提灯で照らされます。",
              "着物をレンタルする：寺院周辺の浅草エリアには多くの着物レンタルショップがあります。伝統的な服を着て浅草寺を散策すれば、思い出に残る写真を撮ることができます。"
            ]
          },
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Cloudy_Sens%C5%8D-ji.jpg/1280px-Cloudy_Sens%C5%8D-ji.jpg",
          imageTitle: "浅草寺"
        },
        {
          title: "4. 明治神宮",
          desc: [
            "10万本以上の緑の木々が広がる70ヘクタール以上の人工の森に隠された明治神宮は、東京で最も重要な神道神社です。この神社は、日本の近代化に多大な貢献をした明治天皇を記念して建てられました。"
          ],
          info: {
            address: "東京都渋谷区代々木神園町1-1",
            hours: "日の出に開門 - 日の入りに閉門（月によって異なります）。",
            ticket: "無料（御苑は約500円の入場料がかかります）。",
            transport: "原宿駅（JR山手線）または明治神宮前駅のすぐ隣。",
            tips: [
              "入る前に手を洗う：正面玄関近くの小さな手水舎に立ち寄り、心身を清めるために手と口を洗う儀式を行ってください。",
              "旅程を組み合わせる：神社で清らかな雰囲気を楽しんだ後、数歩歩くだけでダイナミックな竹下通り（日本の若者文化とユニークなファッションの中心地）に到着します。"
            ]
          },
          image: "https://dulichviet.com.vn/images/bandidau/kham-pha-den-meiji-jingu-nhat-ban.jpg",
          imageTitle: "現代東京の緑のオアシス"
        },
        {
          title: "5. 上野公園",
          desc: [
            "1873年に設立された上野恩賜公園は、日本で最初で最大の公共公園の一つです。50ヘクタール以上の面積を持つここは、緑の肺であるだけでなく、芸術と歴史を愛する人々の「メッカ」でもあります。"
          ],
          info: {
            address: "東京都台東区上野公園",
            hours: "公園：5:00 - 23:00。（美術館/動物園は通常9:30 - 17:00）。",
            ticket: "公園への入場は無料。（美術館と動物園には別途料金がかかります）。",
            transport: "上野駅（公園口）のすぐ隣 - JR、地下鉄、新幹線の巨大な交通ハブ。",
            tips: [
              "桜の季節：上野は東京で最も有名な桜の名所（お花見）の一つで、メインストリート沿いに1,000本以上の桜が咲き誇ります。",
              "組み合わせて訪問：このエリアは非常に広いため、動物園や美術館を訪れたい場合は少なくとも半日を割り当ててください。",
              "買い物と食事：公園のすぐ隣には賑やかなアメ横市場があり、公園を散策した後に安いお土産を買ったり屋台の食べ物を楽しんだりできます。"
            ]
          },
          image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEsYW7Y45GniDPOvKVZeoCmvG2srOIWT_Q3Sn3ZMztzTZOdAmT25_kmOGfHsmNQKAZRTQ-KjGkcbJsiPSUj0RMW657LSuYg1apha_TEM-JxbeOcriuGJu4C-3k57c7PNJ0zgXoIcg=s1360-w1360-h1020-rw",
          imageTitle: "東京の文化と自然の中心"
        },
        {
          title: "6. 東京スカイツリー",
          desc: [
            "高さ634メルの東京スカイツリーは、現在日本で最も高い塔であり、世界で最も高い建造物の一つです。単なる電波塔ではなく、世界クラスのエンターテインメント、ショッピング、展望の複合施設でもあります。"
          ],
          info: {
            address: "東京都墨田区押上1-1-2",
            hours: "10:00 - 21:00（最終入場20:00）",
            ticket: "2,100円〜3,100円（展望台や平日/休日によって異なります）",
            transport: "とうきょうスカイツリー駅または押上駅（浅草線、半蔵門線）",
            tips: [
              "オンラインでチケットを予約する：スカイツリーは非常に混雑するため、長い列を避けるためにウェブサイトまたはアプリで事前にチケットを予約することをお勧めします。通常は現地で購入するよりも安いです。",
              "「ゴールデン」アワー：日没の約1時間前に到着してください。明るい日差しからきらめく夜の光へと街が変わる瞬間を目撃することができます。",
              "照明を鑑賞する：毎晩、塔は異なる色のテーマ（通常は「粋」- 水色、または「雅」- 伝統的な紫）でライトアップされ、隅田川沿いに非常にロマンチックなシーンを作り出します。"
            ]
          },
          image: "https://admin.goldensmiletravel.com/upload/old/images/2023/06/28/tokyo-skytree-1024x576-1687921129.jpg",
          imageTitle: "技術の頂点と無限のビジョン"
        },
        {
          title: "7. 東京駅",
          desc: [
            "東京駅は、1日の列車の本数に関して日本で最も忙しい駅です。明治時代からの特徴的な赤レンガのファサード（丸の内側）と現代の高層ビル（八重洲側）が対照的な、全国交通網の中心です。"
          ],
          info: {
            address: "東京都千代田区（市内中心部）",
            hours: "列車のスケジュールによる",
            ticket: "乗車券",
            transport: "新幹線（日本全国）、JR山手線、中央線、東京メトロ丸ノ内線...",
            tips: [
              "色の標識を使用する：東京駅は非常に広くて複雑です。正しい路線や出口を見つけるために、常に天井や床にある色の付いた標識を探してください。",
              "手荷物預かり：大きなスーツケースを持っている場合は、通路によくあるコインロッカーシステムを利用してゆっくり散策してください。",
              "皇居：丸の内口から美しい大通りを約10分歩くだけで、もう一つの有名な観光地である皇居に到着します。"
            ]
          },
          image: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEO3ugXl470AaCTwCRLMOknCrbX1gVEWo3k55YkGFKfzo_aS49S6Vby_9p85N8W_dvt8Hqzqz54KUM1mFNv6ulYm9kQiWjUWh4vriPmjXcZJO5UVv4fPfHjFw8cTWrCeGwLCiyzAVQckyU=s1360-w1360-h1020-rw",
          imageTitle: "歴史と現代の交差点"
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
    "Tokyo Imperial Palace",
    "Shibuya, Tokyo",
    "2-3-1 Asakusa, Taito-ku, Tokyo",
    "1-1 Yoyogikamizonocho, Shibuya, Tokyo",
    "Ueno-koen, Taito-ku, Tokyo",
    "1-1-2 Oshiage, Sumida-ku, Tokyo",
    "Tokyo Station"
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
            src="https://www.kkday.com/vi/blog/wp-content/uploads/feature-IMG.jpg" 
            alt="Tokyo overview" 
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
              src="https://vcdn1-dulich.vnecdn.net/2021/02/02/Tokyo-dong-duc-1436-1612237924.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=GbonC5REURUlra87V_efDg" 
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
        
        <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
          <p>{t.intro3}</p>
          <p>{t.intro4}</p>
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
