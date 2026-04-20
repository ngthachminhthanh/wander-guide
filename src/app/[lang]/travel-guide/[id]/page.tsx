"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/components/providers/i18n-provider";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const contentMap = {
  vi: {
    back: 'Quay lại Cẩm nang du lịch',
    title: 'Di chuyển tại Nhật Bản',
    subtitle: 'Hướng dẫn chi tiết cách làm thẻ giao thông IC ở Nhật Bản',
    p1: 'Thẻ giao thông IC ở Nhật Bản (Integrated Circuit Card) là một loại thẻ thanh toán không tiếp xúc, giúp việc di chuyển bằng tàu điện, xe buýt, hay thậm chí mua sắm tại Nhật Bản trở nên nhanh chóng và tiện lợi.',
    p2: 'Với người Việt Nam lần đầu đến Nhật, dù là du học sinh, lao động, hay khách du lịch, việc sở hữu một thẻ giao thông IC ở Nhật Bản là bước chuẩn bị thiết yếu để tiết kiệm thời gian và tận hưởng hành trình suôn sẻ. Chi tiết về thẻ giao thông IC: từ cách làm, sử dụng, đến các mẹo hữu ích mà chia sẻ giúp bạn tận dụng tối đa tiện ích của thẻ.',
    h2: 'Các loại thẻ giao thông IC ở Nhật Bản phổ biến',
    p3: 'Nhật Bản có nhiều loại thẻ IC, mỗi loại được phát hành bởi các công ty đường sắt hoặc giao thông khác nhau, nhưng tất cả đều liên thông và sử dụng được trên toàn quốc. Dưới đây là các loại thẻ phổ biến:',
    suica: 'Phát hành bởi JR East, chủ yếu dùng ở Tokyo và khu vực phía Đông Nhật Bản. Đây là loại thẻ phổ biến nhất với du khách.',
    pasmo: 'Do các công ty tàu điện tư nhân và metro ở Tokyo phát hành, phù hợp cho các tuyến không thuộc JR.',
    icoca: 'Phát hành bởi JR West, phổ biến ở khu vực Kansai (Osaka, Kyoto, Kobe) và Hiroshima.',
    kitaca: 'Dùng ở Hokkaido, phát hành bởi JR Hokkaido.',
    others: 'Phổ biến ở Nagoya, Fukuoka, và các khu vực khác.',
    noteHeading: 'Lưu ý:',
    noteContent: 'Dù tên khác nhau, các thẻ này có thể dùng thay thế lẫn nhau trên hầu hết các hệ thống giao thông và cửa hàng hỗ trợ thanh toán IC. Ví dụ, bạn có thể dùng thẻ Suica ở Osaka hoặc thẻ ICOCA ở Tokyo mà không gặp trở ngại.',
    findOutMore: 'Hãy tìm hiểu các công dụng của thẻ IC để chuyến du lịch Nhật Bản của bạn dễ dàng và thuận lợi hơn.',
    caption1: 'Tàu Shinkansen là biểu tượng giao thông của Nhật Bản',
    caption2: 'Sử dụng thẻ giao thông IC giúp việc thanh toán trở nên vô cùng tiện lợi',
    suicaBtn: 'Thẻ Welcome Suica',
    updatingTitle: 'Đang cập nhật...',
    updatingDesc: 'Nội dung chi tiết cho trang này đang được xây dựng. Vui lòng quay lại sau!',

    currencyTitle: "Tiền tệ & thanh toán",
    currencySubtitle: "Hướng dẫn đổi tiền và phương thức thanh toán Nhật Bản",
    currencyP1: "Nhật Bản sử dụng văn hóa thanh toán lấy tiền mặt làm trung tâm, nhưng thanh toán điện tử ngày càng phổ biến ở các khu vực thành thị. Du khách nên biết về nội tệ, chấp nhận thanh toán và các quy định liên quan đến tiền mặt và sử dụng thẻ.",
    currencyItems: [
      { title: "Đơn vị tiền tệ chính thức", desc: "Yên Nhật (JPY, ký hiệu: ¥)" },
      { title: "Phương thức thanh toán", desc: "Tiền mặt được chấp nhận rộng rãi; thẻ tín dụng (Visa, Mastercard, JCB, American Express) được chấp nhận tại các khách sạn, cửa hàng bách hóa và nhà hàng lớn; thanh toán di động (Suica, PASMO, Apple Pay, Google Pay, Alipay, WeChat Pay) ngày càng phổ biến ở các thành phố." },
      { title: "Thanh toán không tiếp xúc", desc: "Thẻ IC (Suica, PASMO) thường được sử dụng để vận chuyển và một số bán lẻ; Apple Pay và Google Pay được chấp nhận tại một số địa điểm nhất định." },
      { title: "Tính khả dụng của ATM", desc: "Máy ATM được tìm thấy ở các bưu điện, 7-Eleven, Lawson và các ngân hàng lớn; không phải tất cả các máy ATM đều chấp nhận thẻ nước ngoài — máy ATM của 7-Eleven và Ngân hàng Bưu điện Nhật Bản là đáng tin cậy nhất đối với thẻ quốc tế." },
      { title: "Thu đổi ngoại tệ", desc: "Có sẵn tại sân bay, ngân hàng, văn phòng đổi tiền và một số khách sạn; Tỷ lệ và phí khác nhau." },
      { title: "Hạn chế ngoại tệ", desc: "Các giao dịch tiền mặt lớn có thể yêu cầu nhận dạng; Ngoại tệ không được chấp nhận để mua lẻ." },
      { title: "Hạn mức nhập/xuất tiền mặt", desc: "Du khách phải khai báo nếu mang theo trên 1.000.000 yên (khoảng 7.000 USD/6.500 EUR); yêu cầu khai báo tại hải quan." },
      { title: "Phí giao dịch", desc: "Rút tiền ATM bằng thẻ nước ngoài có thể phát sinh phí (thường là ¥110–¥220 cho mỗi giao dịch); Một số người bán thêm phụ phí khi sử dụng thẻ tín dụng." },
      { title: "Các vấn đề thường gặp", desc: "Một số khu vực nông thôn và doanh nghiệp nhỏ chỉ chấp nhận tiền mặt; Luôn mang theo đủ yên." },
      { title: "Các ngân hàng/nhà cung cấp dịch vụ thanh toán lớn", desc: "Ngân hàng MUFG, Ngân hàng Mizuho, SMBC, Ngân hàng Bưu điện Nhật Bản, Ngân hàng Seven Bank." }
    ],
    currencyImageCaption: "Đồng Yên Nhật (JPY) - tiền mặt vẫn đóng vai trò quan trọng tại Nhật Bản",

    etiquetteTitle: "Văn hóa ứng xử",
    etiquetteSubtitle: "Học hỏi và thử thực hành các lễ nghi là một cách thú vị để trải nghiệm văn hóa Nhật Bản",
    etiquetteP1: "Nhật Bản có một nền văn hóa và phong tục độc đáo, chẳng hạn như cởi giày trước khi bước vào nhà. Có nhiều quy tắc khác nhau về quần áo hoặc vật dụng được phép sử dụng trong nhà tắm công cộng, suối nước nóng và hồ bơi.",
    etiquetteSections: [
      {
        title: "Quy tắc ứng xử cơ bản",
        desc: "Nhật Bản sở hữu nhiều phong tục xã hội độc đáo mang tính văn hóa và cách thức thể hiện sự tôn trọng. Mặc dù không thể kỳ vọng du khách trở nên thành thạo, nhưng việc học các quy tắc ứng xử cơ bản có thể là một phần của trải nghiệm du lịch phong phú và là cách tuyệt vời để tương tác với người dân.",
        image: "https://haio.vn/upload/photos/shares/japanese-bow-2.jpg",
        caption: "Cúi chào là một nét văn hóa đặc trưng của Nhật Bản"
      },
      {
        title: "Tương tác hàng ngày & Chào hỏi",
        desc: "Nhìn chung, người Nhật ít có xu hướng tiếp xúc cơ thể (ôm, bắt tay) trong các tương tác hàng ngày. Người Nhật có thói quen cúi chào như một cách để chào hỏi và thể hiện sự tôn trọng. Một cái gật đầu hoặc cúi chào lịch sự sẽ giúp ích rất nhiều cho bạn."
      },
      {
        title: "Cụm từ hữu ích",
        desc: "“Sumimasen,” thường có nghĩa là “xin lỗi,” cũng có thể được sử dụng như “xin thứ lỗi” và “cảm ơn”. “Arigato gozaimasu” là lời cảm ơn trực tiếp hơn. “Yoroshiku onegaishimasu” dùng khi bạn được nhờ vả làm điều gì đó hoặc khi gặp gỡ."
      },
      {
        title: "Ở lại qua đêm tại Ryokan",
        desc: "Khách sạn phương Tây tuân theo các thông lệ quốc tế (không cần boa). Tuy nhiên, khách sạn ryokan truyền thống tuân theo các quy tắc lâu đời: từ việc cởi giày ở lối vào cho đến mặc Yukata, ngủ trên đệm futon. Đừng ngần ngại hỏi nhân viên nếu có thắc mắc.",
        image: "https://ru9.vn/cdn/shop/articles/nem-futon_6bdcb63a-7f3f-413d-bb72-0c06abcf931a.jpg?v=1757003162",
        caption: "Phòng nghỉ truyền thống Ryokan với chiếu tatami và đệm futon"
      },
      {
        title: "Cởi giày khi vào trong nhà",
        desc: "Văn hóa này bắt nguồn từ việc ngồi/ngủ trên sàn tatami. Bạn cởi giày ở lối vào (Genkan), mang dép đi trong nhà. Khi bước lên chiếu tatami, phải cởi dép. Hầu hết các nơi có dép riêng cho nhà vệ sinh.",
        image: "https://static-1.happynest.vn/storage/uploads/2026/04/httpsdocsgooglecomdocumentd1kzi1g8j2-8ki3ilxfk-kxumawv-1nss-zncw-on3nyuedittabt0_6.png",
        caption: "Genkan - Khu vực để giày dép ở lối cửa vào"
      },
      {
        title: "Quy tắc ứng xử khi tắm rửa (Onsen/Sento)",
        desc: "Hầu hết các cơ sở có bồn tắm riêng cho nam và nữ. Bạn phải cởi bỏ hoàn toàn quần áo trước khi vào bồn. Hãy tráng sạch cơ thể bằng xà phòng trước. Không đặt khăn vào trong nước và búi tóc lên gọn gàng. Nước có thể rất nóng, hãy nhúng chân vào trước.",
        image: "https://onsenspa.vn/wp-content/uploads/kham-pha-bi-an-ve-dich-vu-tam-onsen-tai-nhat-ban-2.jpg",
        caption: "Trải nghiệm tắm suối nước nóng Onsen Nhật Bản"
      },
      {
        title: "Bạn có thể vào nhưng hình xăm và quần áo thì không?",
        desc: "Hình xăm thường không được phép ở các onsen, bể bơi công cộng. Một số cơ sở cho phép nếu che bằng băng không thấm nước. Một số onsen nam nữ tắm chung yêu cầu mặc đồ tắm riêng gọi là yuami-gi. Luôn hỏi trước nhân viên nếu bạn không chắc chắn."
      },
      {
        title: "Cho thuê bồn tắm riêng",
        desc: "Nếu cảm thấy không thoải mái khi khỏa thân trước người lạ hoặc lo lắng về hình xăm, bạn có thể thuê bồn tắm riêng (kashikiriburo) hoặc phòng Ryokan có bồn tắm. Giá sẽ cao hơn nhưng trải nghiệm vô cùng trọn vẹn và riêng tư."
      },
      {
        title: "Quy tắc ăn uống",
        desc: "Nói “Itadakimasu” trước khi ăn và “Gochisosama-deshita” sau khi dùng xong bữa. Tuyệt đối không nên để lại thức ăn thừa và việc yêu cầu mang đồ thừa về nhà thường không được chấp nhận. Đừng hỏi gắp miếng ăn chung cuối cùng nếu bạn đang ăn theo nhóm.",
        image: "https://file.hstatic.net/1000275435/file/mon-an-truy-thong-cua-nhat-ban_93b7b771bbbb4289acdefdaf215dbf36_grande.jpg",
        caption: "Bữa ăn truyền thống tại Nhật Bản"
      },
      {
        title: "Phương tiện giao thông công cộng",
        desc: "Nói chuyện điện thoại trên tàu xe đều không được khuyến khích. Xếp hàng nhường hành khách xuống trước khi bước lên, và luôn nhường chỗ cho người già, phụ nữ mang thai. Hãy để điện thoại ở chế độ im lặng.",
        image: "https://cdn.saigontimestravel.com/storage/images/retail/wp-content/uploads/2024/01/tau-dien-ngam-nhat-ban-9.jpg",
        caption: "Không gian yên tĩnh bên trong tàu điện ngầm Nhật Bản"
      },
      {
        title: "Không gian hút thuốc",
        desc: "Nhật Bản cấm hút thuốc khi đi bộ trên đường phố hoặc vứt tàn thuốc xuống đất. Hãy tìm các khu vực được quy định dành riêng cho việc hút thuốc ngoài trời qua ứng dụng bản đồ hoặc thông báo biển hiệu.",
        image: "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2024/11/15/photo-1731658018782-17316580188562141193057.jpg",
        caption: "Khu vực hút thuốc được chỉ định trên đường phố"
      }
    ],
    shoppingTitle: "Mua sắm & Hoàn thuế",
    shoppingSubtitle: "Từ các mặt hàng cao cấp đến hàng giá rẻ, khi mua sắm ở Nhật Bản, bạn sẽ tìm thấy những thứ mà mình đang tìm",
    shoppingP1: "Từ các thương hiệu thiết kế sang trọng như Coach và Louis Vuitton tới các cửa hàng đồ cổ tư nhân nhỏ, bạn có thể trải nghiệm mọi kiểu mua sắm ở Nhật Bản. Đừng bỏ sót bất cứ thứ gì trong lúc tìm kiếm, từ thùng đựng giá rẻ đến những mặt hàng đặt làm riêng.",
    connectivityTitle: "Kết nối Internet & SIM",
    connectivitySubtitle: "Luôn kết nối mọi lúc mọi nơi trong hành trình khám phá Nhật Bản",
    connectivityP1: "Việc duy trì kết nối Internet là cực kỳ quan trọng để tra cứu tàu xe, bản đồ và dịch thuật. Nhật Bản cung cấp nhiều lựa chọn linh hoạt từ Wifi bỏ túi đến SIM du lịch.",
    connectivitySections: [
      {
        title: "Pocket Wifi (Wifi bỏ túi)",
        desc: "Lựa chọn tốt nhất nếu bạn đi theo nhóm hoặc mang theo nhiều thiết bị. Bạn có thể thuê trực tiếp tại sân bay hoặc đặt trước để giao tận khách sạn. Pocket Wifi cung cấp dung lượng lớn và pin bền bỉ cả ngày.",
        image: "https://bizweb.dktcdn.net/100/171/173/products/0922213pocketwifi3g-devicepage-462x387-jpeg.jpg?v=1569473157183"
      },
      {
        title: "SIM du lịch & eSIM",
        desc: "Tiện lợi cho cá nhân. SIM du lịch có thể mua tại các máy bán hàng tự động ở sân bay. Nếu điện thoại hỗ trợ, eSIM là lựa chọn nhanh nhất vì bạn có thể cài đặt ngay lập tức qua mã QR mà không cần tháo SIM vật lý.",
        image: "https://cdn-media.sforum.vn/storage/app/media/nhuy/nen-mua-esim-du-lich-hay-sim-vat-ly-3.jpg"
      },
      {
        title: "Wifi miễn phí (Free Wifi)",
        desc: "Có sẵn tại các ga tàu lớn, cửa hàng tiện lợi (7-Eleven, Lawson) và các chuỗi cà phê như Starbucks. Tuy nhiên, tốc độ có thể chậm và yêu cầu đăng ký tài khoản trước khi sử dụng."
      }
    ],

    weatherTitle: "Thời tiết & Trang phục",
    weatherSubtitle: "Hướng dẫn chuẩn bị hành lý phù hợp cho từng mùa đặc trưng",
    weatherP1: "Nhật Bản có bốn mùa rõ rệt, mỗi mùa mang một vẻ đẹp riêng nhưng cũng yêu cầu sự chuẩn bị trang phục khác nhau để đảm bảo sức khỏe và sự thoải mái.",
    weatherSections: [
      {
        title: "Mùa Xuân (Tháng 3 - Tháng 5)",
        desc: "Mùa của hoa anh đào. Thời tiết mát mẻ nhưng vẫn còn se lạnh vào buổi sáng và tối. Bạn nên mang theo áo khoác nhẹ, áo len mỏng và khăn choàng nhẹ.",
        image: "https://vietair.com.vn/Media/Images/mua-xuan-o-nhat-ban.jpg?w=1200&h=630&c=true"
      },
      {
        title: "Mùa Hè (Tháng 6 - Tháng 8)",
        desc: "Nóng và ẩm. Có mùa mưa (Tsuyu) vào tháng 6. Hãy mặc quần áo cotton thoáng mát, mang theo dù (ô) che nắng/mưa và đừng quên kem chống nắng.",
        image: "https://dulichviet.com.vn/images/bandidau/du%20l%E1%BB%8Bch%20nh%E1%BA%ADt%20b%E1%BA%A3n%20v%C3%A0o%20m%C3%B9a%20h%C3%A8%20(1).jpg"
      },
      {
        title: "Mùa Thu (Tháng 9 - Tháng 11)",
        desc: "Mùa lá đỏ (Momiji). Thời tiết cực kỳ dễ chịu và mát mẻ. Cách mặc đồ nhiều lớp (layering) là lý tưởng nhất vì nhiệt độ có thể thay đổi nhanh giữa ngày và đêm.",
        image: "https://ussinavietnam.vn/wp-content/uploads/2024/09/mua-thu-nhat-ban.jpg"
      },
      {
        title: "Mùa Đông (Tháng 12 - Tháng 2)",
        desc: "Lạnh giá, có tuyết rơi ở phía Bắc và vùng núi. Cần chuẩn bị áo phao dày, áo giữ nhiệt (heat-tech), găng tay, mũ len và giày có độ bám tốt để tránh trơn trượt trên tuyết.",
        image: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock725803120huge-1679304743374.jpg"
      }
    ],

    emergencyTitle: "An toàn & Khẩn cấp",
    emergencySubtitle: "Thông tin quan trọng để bạn luôn an tâm khi du lịch tại Nhật Bản",
    emergencyP1: "Nhật Bản là một trong những quốc gia an toàn nhất thế giới, nhưng việc nắm rõ các quy tắc khẩn cấp sẽ giúp bạn xử lý tình huống tốt hơn khi có sự cố không mong muốn.",
    emergencySections: [
      {
        title: "Số điện thoại khẩn cấp",
        desc: "Gọi 110 để liên lạc với Cảnh sát. Gọi 119 cho Cứu hỏa hoặc Cứu thương. Các tổng đài khẩn cấp thường có nhân viên hỗ trợ bằng tiếng Anh.",
        image: "https://kenh14cdn.com/2018/3/19/imgemergencycall01-1521396861915942882654.gif.png"
      },
      {
        title: "Ứng phó với Động đất",
        desc: "Nhật Bản thường xuyên có địa chấn. Nếu xảy ra động đất: Hãy bình tĩnh, tìm chỗ trú dưới gầm bàn vững chắc và tránh xa cửa kính. Chờ đến khi rung chấn dừng hẳn rồi mới di chuyển ra ngoài.",
        image: "https://riki.edu.vn/goc-chia-se/wp-content/uploads/2019/06/tim-cho-tru-khi-dong-dat.jpg"
      },
      {
        title: "Đồn cảnh sát (Koban)",
        desc: "Bạn có thể tìm thấy các đồn cảnh sát nhỏ (Koban) ở gần hầu hết các nhà ga và khu phố lớn. Đây là nơi bạn có thể hỏi đường, báo mất đồ hoặc nhờ giúp đỡ trực tiếp."
      },
      {
        title: "Bảo hiểm du lịch",
        desc: "Chi phí y tế tại Nhật Bản dành cho du khách rất đắt đỏ. Bạn nên mua bảo hiểm du lịch đầy đủ để được hỗ trợ chi phí trong trường hợp ốm đau hoặc tai nạn."
      }
    ],

    shoppingSections: [
      {
        title: "Cửa hàng bách hóa",
        desc: "Có mặt trên khắp Nhật Bản, bán các sản phẩm từ thực phẩm tới quần áo tới đồ trang sức, các cửa hàng bách hóa lớn bao gồm Mitsukoshi, Matsuzakaya, Sogo, Takashimaya, Isetan và Matsuya. Cả Matsuzakaya và Mitsukoshi đều được thành lập gần 400 năm trước với vai trò là đại lý bán vải kimono. Các chuỗi cửa hàng mới hơn như Tokyu, Odakyu và Keio được các công ty đường sắt thành lập và có mặt ở gần hoặc bên trong các nhà ga lớn. Thử đi từ dưới lên trên, từ các tầng hầm bán thực phẩm tới nhiều cửa hàng bán lẻ, nhà hàng trên tầng thượng."
      },
      {
        title: "Trung tâm mua sắm",
        desc: "Các tổ hợp này có mặt ở khắp các thành phố lớn, ở các tòa nhà cũ mới được chuyển đổi mục đích hoặc được kết nối với các tòa nhà cao tầng. Bên trong, bạn có thể tìm thấy khách sạn, rạp chiếu phim, nhà hát sân khấu và các chung cư sang trọng gắn với các khu mua sắm tuyệt vời. Chúng bao gồm các nhà hàng và quầy bar nổi tiếng, các cửa hàng quần áo được nhiều người biết đến và các cửa hàng độc lập, hợp thời thượng. Tokyo Midtown của Roppongi là ví dụ tuyệt vời của loại hình tổ hợp và là nơi có khách sạn Ritz-Carlton Tokyo và Bảo tàng nghệ thuật Suntory.",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1513937265/tokyo/Tokyo2256_2"]
      },
      {
        title: "Cửa hàng outlet",
        desc: "Nếu bạn đang muốn tận hưởng trải nghiệm mua sắm thư giãn hơn một chút, thì cửa hàng outlet có thể phù hợp với bạn. Ở Nhật có khoảng hơn 30 cửa hàng như vậy, thường nằm ngoài các trung tâm thành phố đông đúc nhưng vẫn thuận tiện, gần các điểm có phương tiện giao thông công cộng. Hãy vui chơi và thư giãn khi mua sắm với các lối đi rộng hơn và nhiều không gian hơn, với nhiều hàng hóa có thương hiệu và các lựa chọn đồ ăn độc đáo thường được bán với giá hợp lý hơn so với ở trung tâm thành phố."
      },
      {
        title: "Mua sắm ở Tokyo",
        desc: "Các cửa hàng lớn nhỏ mọc nhan nhản ở khu đô thị đông dân cư nhất trên thế giới này. Ginza tự hào là nơi có giá bất động sản đắt đỏ nhất, và do đó, nhiều thương hiệu nổi tiếng nhất mở các cửa hàng để quảng bá thương hiệu tại đây. Akihabara là nơi để mua sắm đồ điện tử, Nakano Broadway bán các sản phẩm hoạt hình anime, Omotesando dành cho quần áo cao cấp thời thượng, Harajuku là nơi dành cho các cô gái trẻ hơn và chắc chắn Shinjuku và Shibuya sẽ có một vài thứ mà bạn có thể muốn.",
        images: [
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1516980091/tokyo/Tokyo2333_13",
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1516980080/tokyo/Tokyo2324_6"
        ]
      },
      {
        title: "Mua sắm ở Kyoto",
        desc: "Trung tâm cố đô của Nhật Bản này có cả hàng Nhật hiện đại và cổ điển để phục vụ các nhu cầu mua sắm. Đến phố Shijo để tìm các cửa hàng bách hóa Takashimaya và Marui đã đề cập ở trên, cạnh đó là nhiều cửa hàng nhỏ hơn để bạn lướt xem. Chợ Nishiki có tất cả thực phẩm bạn cần với hơn 100 cửa hàng bán thực phẩm tươi sống và tất cả những thứ bạn cần để nấu bất kỳ món gì. Hoặc nếu bạn muốn săn hàng giá rẻ, hãy đến Chợ Kobo-ichi vào ngày 21 hàng tháng và dạo bước qua hơn 1.000 cửa hàng bán tất cả mọi thứ từ kimono đến đồ cổ.",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514372145/kyoto/Kyoto1068_8"]
      },
      {
        title: "Mua sắm ở Nagoya",
        desc: "Một trung tâm mua sắm Aeon lớn có thể được tìm thấy ở phía trước của Nagoya Dome. Nếu bạn đang muốn trải nghiệm mua sắm ở các cửa hàng nhỏ hơn, hãy tới phố Osu và khám phá vô số các cửa hàng và quầy thực phẩm nhỏ. Đối với người tiêu dùng ưa thích các thương hiệu quốc tế, hãy ghé qua khu Sakae và bạn sẽ thấy mình như lạc giữa các vì sao với nhiều cửa hàng như Gucci, Chanel và Dior.",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514369807/aichi/Aichi417_5"]
      },
      {
        title: "Mua sắm ở Osaka",
        desc: "Trung tâm thương mại của Nhật Bản này mang đến cho bạn nhiều trải nghiệm mua sắm. Grand Front Osaka, mở cửa vào năm 2013, có không gian mua sắm rộng lớn với diện tích 44.000 m2 trong ba tòa nhà. Có thể đến khu này dễ dàng từ Ga Osaka. Bạn thậm chí có thể nghỉ tại Ga Osaka và tận hưởng mua sắm ở khu phức hợp Osaka Station City. Khu phố Dotonbori là địa điểm tuyệt vời để ghé qua và ăn uống tới bến với tinh thần Osaka thực sự. Hoặc đến khu vực Shinsaibashi có niên đại từ thế kỷ 17. Nơi đây có một loạt các cửa hàng cả mới và cũ. Gần đó là Amerikamura, trung tâm thời trang và thời thượng dành cho giới trẻ.",
        images: [
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1517682366/osaka/Osaka799_9",
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1514373914/osaka/Osaka798_6"
        ]
      }
    ]
  },
  en: {
    back: 'Back to Travel Guide',
    title: 'Transportation in Japan',
    subtitle: 'A Detailed Guide to IC Cards in Japan',
    p1: 'An IC Card (Integrated Circuit Card) in Japan is a contactless payment card that makes traveling by train, bus, and even shopping fast and incredibly convenient.',
    p2: 'For anyone visiting Japan for the first time—whether as a student, worker, or tourist—owning an IC card is an essential step to save time and enjoy a smooth journey. Here are the details about getting, using, and maximizing your IC card experience.',
    h2: 'Popular Types of IC Cards in Japan',
    p3: 'Japan has many types of IC cards issued by different railway and transportation companies, but they are all interconnected and can be used nationwide. Below are the most popular ones:',
    suica: 'Issued by JR East, mainly used in Tokyo and Eastern Japan. This is the most popular card for tourists.',
    pasmo: 'Issued by private railways and the metro in Tokyo, ideal for non-JR lines.',
    icoca: 'Issued by JR West, widely popular in the Kansai region (Osaka, Kyoto, Kobe) and Hiroshima.',
    kitaca: 'Used in Hokkaido, issued by JR Hokkaido.',
    others: 'Popular in Nagoya, Fukuoka, and other regions.',
    noteHeading: 'Note:',
    noteContent: 'Despite having different names, these cards can be used interchangeably on almost all transportation systems and at stores supporting IC payments. For example, you can seamlessly use a Suica card in Osaka or an ICOCA card in Tokyo.',
    findOutMore: 'Learn more about the benefits of IC cards to make your trip to Japan easier and more convenient.',
    caption1: 'The Shinkansen is the iconic symbol of Japanese transportation',
    caption2: 'Using an IC card makes payments incredibly convenient',
    suicaBtn: 'Welcome Suica Card',
    updatingTitle: 'Coming Soon...',
    updatingDesc: 'Detailed content for this page is currently under construction. Please check back later!',

    currencyTitle: "Currency & Payments",
    currencySubtitle: "Guide to Currency Exchange and Payment Methods in Japan",
    currencyP1: "Japan has a cash-centric payment culture, but electronic payments are increasingly popular in urban areas. Tourists should know about the local currency, payment acceptance, and regulations regarding cash and card usage.",
    currencyItems: [
      { title: "Official Currency", desc: "Japanese Yen (JPY, symbol: ¥)" },
      { title: "Payment Methods", desc: "Cash is widely accepted; credit cards (Visa, Mastercard, JCB, American Express) are accepted at major hotels, department stores, and restaurants; mobile payments (Suica, PASMO, Apple Pay, Google Pay, Alipay, WeChat Pay) are increasingly common in cities." },
      { title: "Contactless Payments", desc: "IC Cards (Suica, PASMO) are commonly used for transit and some retail; Apple Pay and Google Pay are accepted at specific locations." },
      { title: "ATM Availability", desc: "ATMs are found in post offices, 7-Eleven, Lawson, and major banks; not all ATMs accept foreign cards — 7-Eleven and Japan Post Bank ATMs are the most reliable for international cards." },
      { title: "Currency Exchange", desc: "Available at airports, banks, currency exchange offices, and some hotels; rates and fees vary." },
      { title: "Foreign Currency Restrictions", desc: "Large cash transactions may require identification; foreign currencies are not accepted for retail purchases." },
      { title: "Cash Import/Export Limits", desc: "Travelers must declare if carrying over 1,000,000 yen (approx. $7,000 USD/€6,500 EUR); declaration required at customs." },
      { title: "Transaction Fees", desc: "ATM withdrawals with foreign cards may incur fees (typically ¥110–¥220 per transaction); some merchants add surcharges when using credit cards." },
      { title: "Common Issues", desc: "Some rural areas and small businesses only accept cash; always carry enough yen." },
      { title: "Major Banks/Payment Providers", desc: "MUFG Bank, Mizuho Bank, SMBC, Japan Post Bank, Seven Bank." }
    ],
    currencyImageCaption: "Japanese Yen (JPY) - cash still plays a major role in Japan",

    etiquetteTitle: "Cultural Etiquette",
    etiquetteSubtitle: "Learning and practicing etiquette is a fun way to experience Japanese culture",
    etiquetteP1: "Japan has unique customs, such as taking off shoes before entering a home. There are various rules regarding clothing and items allowed in public baths, hot springs, and pools.",
    etiquetteSections: [
      {
        title: "Basic Etiquette",
        desc: "Japan possesses many unique social customs conveying respect. While tourists are not expected to be perfect, learning basic manners enhances the travel experience and helps you interact smoothly with locals.",
        image: "https://haio.vn/upload/photos/shares/japanese-bow-2.jpg",
        caption: "Bowing is a signature cultural aspect of Japan"
      },
      {
        title: "Daily Interactions & Greetings",
        desc: "Japanese people tend to avoid physical contact (hugs, handshakes) in daily interactions. Bowing is the standard greeting and a sign of respect. A polite nod or bow goes a long way."
      },
      {
        title: "Useful Phrases",
        desc: "“Sumimasen” usually means “excuse me” but can also express gratitude or apologies. “Arigato gozaimasu” is a direct thank you. “Yoroshiku onegaishimasu” is used when meeting someone or requesting a favor."
      },
      {
        title: "Staying Overnight at a Ryokan",
        desc: "Western hotels follow global standards (no tipping required). However, traditional ryokans follow age-old rules: taking off shoes at the entrance, wearing Yukata, and sleeping on futons. Ask staff if you're unsure.",
        image: "https://ru9.vn/cdn/shop/articles/nem-futon_6bdcb63a-7f3f-413d-bb72-0c06abcf931a.jpg?v=1757003162",
        caption: "Traditional Ryokan room with tatami mats and futon"
      },
      {
        title: "Taking Off Shoes Indoors",
        desc: "This custom stems from the tradition of sitting/sleeping on tatami mats. Take off your shoes at the entrance (Genkan) and wear indoor slippers. Remove slippers before stepping on tatami. Separate slippers are provided for restrooms.",
        image: "https://static-1.happynest.vn/storage/uploads/2026/04/httpsdocsgooglecomdocumentd1kzi1g8j2-8ki3ilxfk-kxumawv-1nss-zncw-on3nyuedittabt0_6.png",
        caption: "Genkan - The shoe area at the entrance"
      },
      {
        title: "Bathing Etiquette (Onsen/Sento)",
        desc: "Most facilities have separate baths for men and women. You must be completely naked. Wash your body with soap before entering the tub. Do not let your towel touch the water and tie up long hair.",
        image: "https://onsenspa.vn/wp-content/uploads/kham-pha-bi-an-ve-dich-vu-tam-onsen-tai-nhat-ban-2.jpg",
        caption: "Experiencing a Japanese Onsen hot spring"
      },
      {
        title: "Tattoos and Clothing Restrictions",
        desc: "Tattoos are usually banned in public onsens and pools. Some places allow them if covered with waterproof bandages. Mixed-gender baths may require special bathing suits (yuami-gi). Always verify in advance."
      },
      {
        title: "Renting Private Baths",
        desc: "If uncomfortable being naked with strangers or if you have tattoos, rent a private bath (kashikiriburo) or a Ryokan room with a private bath. It costs more but offers a private, stress-free experience."
      },
      {
        title: "Dining Etiquette",
        desc: "Say “Itadakimasu” before meals and “Gochisosama-deshita” after finishing. Do not leave leftovers, and asking for a doggy bag is uncommon. When sharing dishes, taking the last piece without asking is impolite.",
        image: "https://file.hstatic.net/1000275435/file/mon-an-truy-thong-cua-nhat-ban_93b7b771bbbb4289acdefdaf215dbf36_grande.jpg",
        caption: "A traditional Japanese meal"
      },
      {
        title: "Public Transportation",
        desc: "Talking on the phone on transit is frowned upon. Line up and let passengers off before boarding. Give up your seat to the elderly or pregnant. Keep your phone on silent mode.",
        image: "https://cdn.saigontimestravel.com/storage/images/retail/wp-content/uploads/2024/01/tau-dien-ngam-nhat-ban-9.jpg",
        caption: "The quiet environment inside a Japanese commuter train"
      },
      {
        title: "Designated Smoking Areas",
        desc: "Smoking while walking or throwing cigarette butts on the ground is banned and finable. Look for designated outdoor smoking areas using navigation apps or public signs.",
        image: "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2024/11/15/photo-1731658018782-17316580188562141193057.jpg",
        caption: "Designated smoking area on the street"
      }
    ],
    connectivityTitle: "Internet & SIM",
    connectivitySubtitle: "Stay connected anytime, anywhere during your journey in Japan",
    connectivityP1: "Staying connected is crucial for checking train schedules, maps, and translations. Japan offers flexible options from pocket WiFi to travel SIMs.",
    connectivitySections: [
      {
        title: "Pocket WiFi",
        desc: "The best choice for groups or multiple devices. You can rent at the airport or pre-order for hotel delivery. It offers large data capacity and all-day battery life.",
        image: "https://bizweb.dktcdn.net/100/171/173/products/0922213pocketwifi3g-devicepage-462x387-jpeg.jpg?v=1569473157183"
      },
      {
        title: "Travel SIM & eSIM",
        desc: "Convenient for individuals. Travel SIMs can be bought at airport vending machines. If your phone supports it, eSIM is the fastest option as you can set it up instantly via QR code.",
        image: "https://cdn-media.sforum.vn/storage/app/media/nhuy/nen-mua-esim-du-lich-hay-sim-vat-ly-3.jpg"
      },
      {
        title: "Free WiFi",
        desc: "Available at major train stations, convenience stores (7-Eleven, Lawson), and cafe chains like Starbucks. However, speeds may be slow and registration is often required."
      }
    ],

    weatherTitle: "Weather & Clothing",
    weatherSubtitle: "Guide to packing appropriately for each unique season",
    weatherP1: "Japan has four distinct seasons, each with its own beauty and different clothing requirements for comfort and health.",
    weatherSections: [
      {
        title: "Spring (March - May)",
        desc: "The season of cherry blossoms. Cool weather but can still be chilly in the morning and evening. You should bring a light jacket, thin sweaters, and a light scarf.",
        image: "https://vietair.com.vn/Media/Images/mua-xuan-o-nhat-ban.jpg?w=1200&h=630&c=true"
      },
      {
        title: "Summer (June - August)",
        desc: "Hot and humid. The rainy season (Tsuyu) occurs in June. Wear breathable cotton clothes, carry an umbrella, and don't forget sunscreen.",
        image: "https://dulichviet.com.vn/images/bandidau/du%20l%E1%BB%8Bch%20nh%E1%BA%ADt%20b%E1%BA%A3n%20v%C3%A0o%20m%C3%B9a%20h%C3%A8%20(1).jpg"
      },
      {
        title: "Autumn (September - November)",
        desc: "Red leaf season (Momiji). Extremely pleasant and cool weather. Layering is ideal as temperatures can vary quickly between day and night.",
        image: "https://ussinavietnam.vn/wp-content/uploads/2024/09/mua-thu-nhat-ban.jpg"
      },
      {
        title: "Winter (December - February)",
        desc: "Cold with snow in the North and mountains. Bring thick coats, heat-tech layers, gloves, beanies, and shoes with good grip for snow.",
        image: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock725803120huge-1679304743374.jpg"
      }
    ],

    emergencyTitle: "Safety & Emergency",
    emergencySubtitle: "Important info for peace of mind while traveling in Japan",
    emergencyP1: "Japan is one of the safest countries, but knowing emergency protocols will help you handle unexpected situations better.",
    emergencySections: [
      {
        title: "Emergency Numbers",
        desc: "Dial 110 for Police. Dial 119 for Fire or Ambulance. Emergency operators usually have English-speaking staff available.",
        image: "https://kenh14cdn.com/2018/3/19/imgemergencycall01-1521396861915942882654.gif.png"
      },
      {
        title: "Earthquake Preparedness",
        desc: "Japan frequently has tremors. If an earthquake occurs: stay calm, take cover under a sturdy table, and stay away from glass. Wait until shakng stops before moving outside.",
        image: "https://riki.edu.vn/goc-chia-se/wp-content/uploads/2019/06/tim-cho-tru-khi-dong-dat.jpg"
      },
      {
        title: "Police Box (Koban)",
        desc: "Small police boxes (Koban) are located near most major stations and neighborhoods. These are places where you can ask for directions, report lost items, or get help."
      },
      {
        title: "Travel Insurance",
        desc: "Medical costs for tourists in Japan are very expensive. You should have comprehensive travel insurance to cover potential illness or accidents."
      }
    ],

    shoppingTitle: "Shopping & Tax Free",
    shoppingSubtitle: "From high-end luxury to bargains, when shopping in Japan, you will find what you are looking for",
    shoppingP1: "From luxury designer brands like Coach and Louis Vuitton to small private antique shops, you can experience all kinds of shopping in Japan. Don't miss anything while searching, from bargain bins to custom-made items.",
    shoppingSections: [
      {
        title: "Department Stores",
        desc: "Found all over Japan, selling everything from food to clothing to jewelry, major department stores include Mitsukoshi, Matsuzakaya, Sogo, Takashimaya, Isetan, and Matsuya. Both Matsuzakaya and Mitsukoshi were founded nearly 400 years ago as kimono fabric dealers. Newer chains like Tokyu, Odakyu, and Keio were founded by railway companies and are located near or inside major stations. Try working your way from the bottom up, from the basement food floors to the numerous retail shops and rooftop restaurants."
      },
      {
        title: "Shopping Malls",
        desc: "These hubs are found throughout major cities, in repurposed old buildings or attached to high-rises. Inside, you can find hotels, cinemas, stage theaters, and luxury apartments tied to fantastic shopping areas. They include famous restaurants and bars, well-known clothing stores, and trendy independent boutiques. Roppongi's Tokyo Midtown is an excellent example of this type of complex, housing the Ritz-Carlton Tokyo and the Suntory Museum of Art.",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1513937265/tokyo/Tokyo2256_2"]
      },
      {
        title: "Outlet Malls",
        desc: "If you want a slightly more relaxed shopping experience, outlet malls might be for you. There are about 30 such malls in Japan, usually located outside crowded city centers but still convenient, near public transportation links. Have fun and relax while shopping with wider aisles and more space, with many branded goods and unique food options often sold at more reasonable prices than downtown."
      },
      {
        title: "Shopping in Tokyo",
        desc: "Stores big and small are ubiquitous in this most densely populated metropolis in the world. Ginza boasts the most expensive real estate, and therefore, many of the most famous brands open promotional stores here. Akihabara is the place for electronics, Nakano Broadway for anime products, Omotesando for trendy high-end fashion, Harajuku for younger girls, and Shinjuku and Shibuya will surely have something you might want.",
        images: [
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1516980091/tokyo/Tokyo2333_13",
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1516980080/tokyo/Tokyo2324_6"
        ]
      },
      {
        title: "Shopping in Kyoto",
        desc: "Japan's ancient capital offers both modern and traditional Japanese goods for your shopping needs. Head to Shijo Street to find the Takashimaya and Marui department stores mentioned above, alongside many smaller shops to browse. Nishiki Market has all the food you need with over 100 stalls selling fresh produce and everything needed to cook any dish. Or if you're hunting for bargains, visit the Kobo-ichi Market on the 21st of every month and stroll past over 1,000 stalls selling everything from kimonos to antiques.",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514372145/kyoto/Kyoto1068_8"]
      },
      {
        title: "Shopping in Nagoya",
        desc: "A massive Aeon shopping mall can be found right in front of the Nagoya Dome. If you prefer shopping in smaller stores, head to Osu Street and explore a myriad of small shops and food stalls. For shoppers favoring international brands, drop by the Sakae district, where you'll feel like you're among the stars with many stores like Gucci, Chanel, and Dior.",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514369807/aichi/Aichi417_5"]
      },
      {
        title: "Shopping in Osaka",
        desc: "Japan's commercial center offers many shopping experiences. Grand Front Osaka, opened in 2013, features a massive shopping space spanning 44,000 sq meters across three buildings. It is easily accessible from Osaka Station. You can even stay at Osaka Station and enjoy shopping in the Osaka Station City complex. The Dotonbori area is a great place to stop by and eat to your heart's content in the true spirit of Osaka. Or visit the Shinsaibashi area dating back to the 17th century. It hosts a range of old and new shops. Nearby is Amerikamura, the fashion and trend center for youth.",
        images: [
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1517682366/osaka/Osaka799_9",
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1514373914/osaka/Osaka798_6"
        ]
      }
    ]
  },
  ja: {
    back: '旅行ガイドに戻る',
    title: '日本での交通手段',
    subtitle: '日本の交通系ICカードの作り方詳細ガイド',
    p1: '日本のICカード（Integrated Circuit Card）は、電車やバスの移動、さらには買い物を迅速かつ便利にする非接触型決済カードです。',
    p2: '留学生、労働者、観光客など、初めて日本に訪れる外国人にとって、ICカードを持つことは時間を節約し、スムーズな旅行を楽しむための不可欠な準備です。ICカードの作り方から使い方、そして利便性を最大限に活用するための役立つヒントをご紹介します。',
    h2: '日本で人気の交通系ICカードの種類',
    p3: '日本には多くの種類のICカードがあり、それぞれ異なる鉄道や交通機関から発行されていますが、すべて相互利用可能で全国的に使用できます。以下は最も人気のあるカードです：',
    suica: 'JR東日本が発行しており、主に東京および東日本で利用されています。観光客に最も人気のあるカードです。',
    pasmo: '東京の私鉄や地下鉄が発行しており、JR以外の路線に適しています。',
    icoca: 'JR西日本が発行しており、関西地方（大阪、京都、神戸）および広島で人気があります。',
    kitaca: 'JR北海道が発行しており、北海道で使用されます。',
    others: '名古屋、福岡、その他の地域で人気があります。',
    noteHeading: '注意：',
    noteContent: '名前は異なりますが、これらのカードはIC決済に対応しているほとんどの交通機関や店舗で互換的に使用できます。例えば、大阪でSuicaカードを使用したり、東京でICOCAカードを使用したりしても問題なく利用できます。',
    findOutMore: '日本旅行をより簡単かつ便利にするために、ICカードの利点について詳しく調べてみてください。',
    caption1: '新幹線は日本の交通の象徴です',
    caption2: 'ICカードを使用すると支払いが非常に便利になります',
    suicaBtn: 'Welcome Suicaカード',
    updatingTitle: '更新中...',
    updatingDesc: 'このページの詳細コンテンツは現在作成中です。後で戻ってきてください！',

    currencyTitle: "通貨と支払い",
    currencySubtitle: "日本での両替と支払い方法のガイド",
    currencyP1: "日本は現金中心の決済文化を持っていますが、都市部では電子決済がますます普及しています。観光客は、現地通貨、支払いの受け入れ状況、および現金とカードの使用に関する規制について知っておく必要があります。",
    currencyItems: [
      { title: "公式通貨", desc: "日本円（JPY、記号：¥）" },
      { title: "支払い方法", desc: "現金は広く受け入れられています。クレジットカード（Visa、Mastercard、JCB、American Express）は主要なホテル、デパート、レストランで受け入れられています。モバイル決済（Suica、PASMO、Apple Pay、Google Pay、Alipay、WeChat Pay）は都市部でますます一般的になっています。" },
      { title: "非接触型決済", desc: "ICカード（Suica、PASMO）は通常、交通機関や一部の小売店で使用されます。Apple PayとGoogle Payは一部の場所で受け入れられます。" },
      { title: "ATMの利用可能性", desc: "ATMは郵便局、セブンイレブン、ローソン、および主要銀行にあります。すべてのATMが外国のカードを受け入れるわけではありません。セブン銀行とゆうちょ銀行のATMが国際カードにとって最も信頼できます。" },
      { title: "外貨両替", desc: "空港、銀行、両替所、一部のホテルで利用可能です。レートや手数料は異なります。" },
      { title: "外貨の制限", desc: "高額の現金取引には身分証明が必要になる場合があります。小売店の購入に外貨は使用できません。" },
      { title: "現金の持ち込み・持ち出し制限", desc: "旅行者が1,000,000円（約7,000ドル/6,500ユーロ）以上を携帯する場合、税関での申告が必要です。" },
      { title: "取引手数料", desc: "外国カードでのATM引き出しには手数料（通常、1回の取引につき110円〜220円）がかかる場合があります。一部の店舗では、クレジットカードを使用すると追加料金がかかる場合があります。" },
      { title: "よくある問題", desc: "一部の農村地域や小規模店舗では現金のみを受け付けています。常に十分な円を持ち歩いてください。" },
      { title: "主要銀行/決済プロバイダー", desc: "三菱UFJ銀行、みずほ銀行、三井住友銀行、ゆうちょ銀行、セブン銀行。" }
    ],
    currencyImageCaption: "日本円（JPY）- 現金は依然として日本で重要な役割を果たしています",

    etiquetteTitle: "文化的エチケット",
    etiquetteSubtitle: "マナーを学び実践することは、日本の文化を体験する楽しい方法です",
    etiquetteP1: "日本には家に上がる前に靴を脱ぐなど、独自の文化や習慣があります。また、銭湯、温泉、プールで許可される服装や持ち物には様々なルールがあります。",
    etiquetteSections: [
      {
        title: "基本的なエチケット",
        desc: "日本には他者への敬意を表す独自の社会的習慣が多数あります。観光客が完璧であることは求められませんが、基本的なマナーを学ぶことで、地元の人々との交流が深まり旅行が豊かになります。",
        image: "https://haio.vn/upload/photos/shares/japanese-bow-2.jpg",
        caption: "お辞儀は日本の代表的な文化です"
      },
      {
        title: "日常のコミュニケーションと挨拶",
        desc: "一般的に日本人はハグや握手などの身体的接触を避ける傾向があります。挨拶や敬意の表現として「お辞儀」が一般的です。軽く会釈するだけでも印象がグッと良くなります。"
      },
      {
        title: "便利なフレーズ",
        desc: "「すみません」は謝罪や感謝を意味する万能なフレーズです。「ありがとうございます」は直接の感謝を伝えます。「よろしくお願いします」は誰かに頼み事をする時や初対面の時に使います。"
      },
      {
        title: "旅館での滞在",
        desc: "西洋風のホテルは世界基準と同様ですが（チップは不要）、伝統的な旅館では入り口で靴を脱ぐ、浴衣を着る、布団で寝るなど独自のルールがあります。不明な点はスタッフに尋ねましょう。",
        image: "https://ru9.vn/cdn/shop/articles/nem-futon_6bdcb63a-7f3f-413d-bb72-0c06abcf931a.jpg?v=1757003162",
        caption: "畳と布団が敷かれた伝統的な旅館の部屋"
      },
      {
        title: "室内で靴を脱ぐ習慣",
        desc: "畳の上で座ったり寝たりする文化から来ています。玄関で靴を脱ぎ、スリッパに履き替えます。畳の上を歩くときはスリッパも脱ぎます。トイレには専用のスリッパが用意されています。",
        image: "https://static-1.happynest.vn/storage/uploads/2026/04/httpsdocsgooglecomdocumentd1kzi1g8j2-8ki3ilxfk-kxumawv-1nss-zncw-on3nyuedittabt0_6.png",
        caption: "玄関 - 靴を脱ぐスペース"
      },
      {
        title: "入浴マナー（温泉・銭湯）",
        desc: "男女別の浴場があり、完全に裸になる必要があります。湯船に入る前に必ず石鹸で体を洗い流します。タオルを湯船に浸してはいけません。髪が長い場合は結びます。",
        image: "https://onsenspa.vn/wp-content/uploads/kham-pha-bi-an-ve-dich-vu-tam-onsen-tai-nhat-ban-2.jpg",
        caption: "日本の温泉体験"
      },
      {
        title: "タトゥーと服装の制限",
        desc: "公衆の温泉やプールでは原則タトゥーは禁止です。絆創膏で隠せばOKな場所や、男女混浴で湯あみ着の着用が必須の場所もあります。事前に確認することが最も安全です。"
      },
      {
        title: "貸切風呂の利用",
        desc: "他人の前で裸になることに抵抗がある場合やタトゥーがある場合は、貸切風呂（家族風呂）や露天風呂付き客室を利用するのがおすすめです。プライベートな空間で存分に楽しめます。"
      },
      {
        title: "食事のマナー",
        desc: "食前には「いただきます」、食後は「ごちそうさまでした」と言います。食べ残しは避け、持ち帰りの要求も一般的ではありません。大皿料理の最後の1つを黙って食べる事はマナー違反とされます。",
        image: "https://file.hstatic.net/1000275435/file/mon-an-truy-thong-cua-nhat-ban_93b7b771bbbb4289acdefdaf215dbf36_grande.jpg",
        caption: "日本の伝統的な食事"
      },
      {
        title: "公共交通機関でのマナー",
        desc: "電車やバス内での通話は控えましょう。乗車の際は列に並び、降りる人を優先します。お年寄りや妊婦には席を譲ります。スマートフォンはマナーモードに設定してください。",
        image: "https://cdn.saigontimestravel.com/storage/images/retail/wp-content/uploads/2024/01/tau-dien-ngam-nhat-ban-9.jpg",
        caption: "静かな日本の電車内の風景"
      },
      {
        title: "指定された喫煙スペース",
        desc: "歩きタバコやポイ捨ては条例で禁止されており、罰金が科されることもあります。公共の場所で喫煙する場合は、必ず灰皿の設置された指定の喫煙所を利用してください。",
        image: "https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2024/11/15/photo-1731658018782-17316580188562141193057.jpg",
        caption: "路上に設置された喫煙スペース"
      }
    ],
    connectivityTitle: "インターネットとSIM",
    connectivitySubtitle: "日本旅行中、いつでもどこでも接続を維持しましょう",
    connectivityP1: "列車の時刻表や地図、翻訳を確認するために、インターネット接続は極めて重要です。ポケットWi-FiからトラベルSIMまで、柔軟な選択肢があります。",
    connectivitySections: [
      {
        title: "ポケットWi-Fi",
        desc: "グループや複数のデバイスを使用する場合に最適です。空港で直接レンタルするか、ホテル配送を事前予約できます。大容量でバッテリーも一日中持続します。",
        image: "https://bizweb.dktcdn.net/100/171/173/products/0922213pocketwifi3g-devicepage-462x387-jpeg.jpg?v=1569473157183"
      },
      {
        title: "トラベルSIMとeSIM",
        desc: "個人利用に便利です。空港の自動販売機で購入できます。お使いの端末が対応していれば、QRコードで即座に設定できるeSIMが最も迅速な選択肢です。",
        image: "https://cdn-media.sforum.vn/storage/app/media/nhuy/nen-mua-esim-du-lich-hay-sim-vat-ly-3.jpg"
      },
      {
        title: "無料Wi-Fi",
        desc: "主要な駅やコンビニ、スターバックスなどのカフェチェーンで利用可能です。ただし、速度が遅い場合や、事前の登録が必要な場合があります。"
      }
    ],

    weatherTitle: "天気と服装",
    weatherSubtitle: "それぞれの季節に合わせた適切な準備ガイド",
    weatherP1: "日本にははっきりとした四季があり、それぞれの美しさがありますが、快適に過ごすために季節に応じた服装の準備が必要です。",
    weatherSections: [
      {
        title: "春 (3月 - 5月)",
        desc: "桜の季節です。涼しいですが、朝晩は冷え込むことがあります。薄手のジャケットやセーター、軽いストールを用意しましょう。",
        image: "https://vietair.com.vn/Media/Images/mua-xuan-o-nhat-ban.jpg?w=1200&h=630&c=true"
      },
      {
        title: "夏 (6月 - 8月)",
        desc: "蒸し暑いです。6月は梅雨の季節です。通気性の良い綿の服を着用し、日傘や雨具、日焼け止めを忘れずに用意してください。",
        image: "https://dulichviet.com.vn/images/bandidau/du%20l%E1%BB%8Bch%20nh%E1%BA%ADt%20b%E1%BA%A3n%20v%C3%A0o%20m%C3%B9a%20h%C3%A8%20(1).jpg"
      },
      {
        title: "秋 (9月 - 11月)",
        desc: "紅葉の季節です。非常に過ごしやすく涼しい気候です。昼夜の寒暖差があるため、重ね着（レイヤリング）が理想的です。",
        image: "https://ussinavietnam.vn/wp-content/uploads/2024/09/mua-thu-nhat-ban.jpg"
      },
      {
        title: "冬 (12月 - 2月)",
        desc: "寒く、北部や山岳地帯では雪が降ります。厚手のコート、ヒートテック、手袋、ニット帽、滑り止めのついた靴を準備してください。",
        image: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/shutterstock725803120huge-1679304743374.jpg"
      }
    ],

    emergencyTitle: "安全と緊急時",
    emergencySubtitle: "日本での旅行を安心して楽しむための重要な情報",
    emergencyP1: "日本は世界で最も安全な国の一つですが、緊急時の対応を知っておくことで、予期せぬ事態にも冷静に対処できます。",
    emergencySections: [
      {
        title: "緊急電話番号",
        desc: "警察は110番、火災や救急は119番です。緊急ダイヤルでは、通常、多言語対応 của nhân viên có sẵn.",
        image: "https://kenh14cdn.com/2018/3/19/imgemergencycall01-1521396861915942882654.gif.png"
      },
      {
        title: "地震への備え",
        desc: "日本は地震が多い国です。揺れを感じたら、まずは落ち着いて頑丈なテーブルの下などに隠れ、ガラスから離れてください。揺れが収まるまで待ってから移動しましょう。",
        image: "https://riki.edu.vn/goc-chia-se/wp-content/uploads/2019/06/tim-cho-tru-khi-dong-dat.jpg"
      },
      {
        title: "交番 (Koban)",
        desc: "ほとんどの主要な駅や街角に交番があります。道に迷ったときや落とし物をしたとき、直接助けを求めることができます。"
      },
      {
        title: "旅行保険",
        desc: "日本での外国人向けの医療費は非常に高額です。病気や事故に備えて、包括的な旅行保険に加入することをお勧めします。"
      }
    ],

    shoppingTitle: "ショッピングと免税",
    shoppingSubtitle: "高級品からお買い得品まで、日本でのショッピングなら欲しいものが見つかります",
    shoppingP1: "コーチやルイ・ヴィトンなどの高級ブランドから小さな個人経営のアンティークショップまで、日本ではあらゆる種類のショッピングを体験できます。特売品のワゴンからオーダーメイドの品まで、探している間に何も見逃さないでください。",
    shoppingSections: [
      {
        title: "デパート",
        desc: "日本全国にあり、食品から衣料品、宝飾品まであらゆるものを販売しています。主要な百貨店には三越、松坂屋、そごう、高島屋、伊勢丹、松屋などがあります。松坂屋も三越も、約400年前に着物の生地を扱う商人として設立されました。東急、小田急、京王などの新しいチェーンは鉄道会社によって設立され、主要駅の近くや駅内に位置しています。地下の食品フロアから小売店、屋上のレストランへと下から上へと順番に見て回るのがおすすめです。"
      },
      {
        title: "ショッピングモール",
        desc: "これらの施設は主要都市のいたるところにあり、改築された古い建物や高層ビルに併設されています。中にはホテル、映画館、劇場、高級マンションがあり、素晴らしいショッピングエリアと結びついています。有名なレストランやバー、人気のある衣料品店、トレンディな独立系ブティックなどがあります。六本木の東京ミッドタウンはこの種の複合施設の素晴らしい例であり、ザ・リッツ・カールトン東京やサントリー美術館を併設しています。",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1513937265/tokyo/Tokyo2256_2"]
      },
      {
        title: "アウトレットモール",
        desc: "もう少しリラックスしたショッピング体験を楽しみたい場合は、アウトレットモールがおすすめです。日本にはこのような施設が約30あり、通常は混雑した都心部から離れていますが、公共交通機関の近くで便利です。広い通路やスペースで買い物をしながら、リラックスして楽しむことができます。多くのブランド品やユニークな食べ物が多くの場合、都心よりリーズナブルな価格で販売されています。"
      },
      {
        title: "東京でのショッピング",
        desc: "世界で最も人口密度の高いこの大都市では、大小の店舗がどこにでもあります。銀座は最も高い不動産価格を誇り、それゆえに多くの有名ブランドがプロモーションのために店舗を構えています。秋葉原は電化製品、中野ブロードウェイはアニメグッズ、表参道はトレンドの高級ファッション、原宿は若い女性向け、そして新宿や渋谷にはあなたが欲しいと思えるものが確実に見つかるでしょう。",
        images: [
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1516980091/tokyo/Tokyo2333_13",
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1516980080/tokyo/Tokyo2324_6"
        ]
      },
      {
        title: "京都でのショッピング",
        desc: "日本の古都はショッピングのニーズに応えるために、モダンな商品と昔ながらの商品の両方を提供しています。上記の高島屋とマルイのデパートを見つけるには四条通へ向かい、その横には多くの小さな店舗があります。錦市場には鮮魚や生鮮食品を売る100以上の店舗があり、どんな料理を作るのにも必要なすべての食品が揃っています。手頃な品を探したい場合は、毎月21日に弘法市へ行き、着物から骨董品まであらゆるものを販売する1,000以上の店を見て回ってください。",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514372145/kyoto/Kyoto1068_8"]
      },
      {
        title: "名古屋でのショッピング",
        desc: "ナゴヤドームの前には巨大なイオンモールがあります。小さなお店でのショッピング体験を希望する場合は、大須商店街に行き、無数の小さな店や屋台を探索してください。海外ブランドを好む買い物客は栄地区に立ち寄ってください。ここでは、グッチ、シャネル、ディオールなどの多くのショップがあり、スターの中にいるような気分になります。",
        images: ["https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1514369807/aichi/Aichi417_5"]
      },
      {
        title: "大阪でのショッピング",
        desc: "日本の商業の中心地であるこの都市は、多くのショッピング体験を提供します。2013年に開業したグランフロント大阪は、3つの建物にまたがる延べ床面積44,000平方メートルの広大なショッピングスペースを誇ります。大阪駅から簡単にアクセスできます。大阪駅周辺に滞在し、大阪ステーションシティでショッピングを楽しむこともできます。道頓堀エリアは、大阪の真髄を感じながらお腹いっぱいになるまで食事を楽しむのに最適な場所です。または、17世紀から続く心斎橋エリアを訪れてみてください。ここは新旧の店舗が入り混じっています。近くには、若者のファッションとトレンドの中心であるアメリカ村があります。",
        images: [
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1517682366/osaka/Osaka799_9",
          "https://res.cloudinary.com/jnto/image/upload/w_670,h_450,fl_lossy,f_auto/v1514373914/osaka/Osaka798_6"
        ]
      }
    ]
  }
};

export default function TravelGuideDetailPage({ params }: { params: Promise<{ lang: string, id: string }> }) {
  const unwrappedParams = use(params);
  const { locale } = useI18n();
  const t = contentMap[locale as keyof typeof contentMap] || contentMap.vi;

  if (unwrappedParams.id === "transportation") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-4xl text-gray-800 dark:text-gray-200">
        <Link href={`/${locale}/travel-guide`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.title}</h1>
          <p className="text-2xl text-muted-foreground font-light mb-8">
            {t.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 overflow-hidden rounded-3xl shadow-xl border border-border/50 group"
        >
          <div className="relative overflow-hidden">
            <img
              src="https://images.trainspread.com/allpicture/2020/01/1f4703cfcea24f4b842e719a_800x533.jpg"
              alt="Shinkansen"
              className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="bg-muted p-4 text-center text-sm font-medium text-muted-foreground border-t">
            {t.caption1}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-6"
        >
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-6"
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">{t.h2}</h2>
          <p>{t.p3}</p>
          <ul className="list-disc pl-6 space-y-4">
            <li><strong className="text-foreground font-semibold">Suica:</strong> {t.suica}</li>
            <li><strong className="text-foreground font-semibold">Pasmo:</strong> {t.pasmo}</li>
            <li><strong className="text-foreground font-semibold">ICOCA:</strong> {t.icoca}</li>
            <li><strong className="text-foreground font-semibold">Kitaca:</strong> {t.kitaca}</li>
            <li><strong className="text-foreground font-semibold">TOICA, SUGOCA, nimoca, manaca:</strong> {t.others}</li>
          </ul>
          <div className="bg-primary/5 p-6 rounded-3xl border border-primary/20 mt-8 shadow-sm">
            <p className="font-semibold text-primary mb-2 flex items-center">
              {t.noteHeading}
            </p>
            <p>{t.noteContent}</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 space-y-8"
        >
          <p className="text-xl font-medium text-foreground text-center">
            {t.findOutMore}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button asChild variant="outline" className="w-full md:w-auto text-base h-12 px-6 rounded-full hover:bg-primary hover:text-white transition-colors border-primary/50 text-primary hover:border-primary">
              <a href="https://www.jreast.co.jp/multi/welcomesuica/welcomesuica.html" target="_blank" rel="noopener noreferrer">
                {t.suicaBtn} <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full md:w-auto text-base h-12 px-6 rounded-full hover:bg-primary hover:text-white transition-colors border-primary/50 text-primary hover:border-primary">
              <a href="https://www.jreast.co.jp/multi/en/wsmlp/" target="_blank" rel="noopener noreferrer">
                Welcome Suica Mobile <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full md:w-auto text-base h-12 px-6 rounded-full hover:bg-primary hover:text-white transition-colors border-primary/50 text-primary hover:border-primary">
              <a href="https://www.pasmo.co.jp/visitors/en/" target="_blank" rel="noopener noreferrer">
                PASMO <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="overflow-hidden rounded-3xl shadow-xl border border-border/50 group">
            <div className="relative overflow-hidden bg-muted flex items-center justify-center p-8">
              <img
                src="https://file.smiletrip.vn/posts/vi-vn/2025/06/15/1497/the-icoca-la-mot-loai-the-giao-thong-ic-kha-pho-bien-o-nhat-ban.webp"
                alt="IC Card"
                className="max-w-full h-auto object-contain max-h-[500px] group-hover:scale-105 transition-transform duration-700 drop-shadow-md"
              />
            </div>
            <div className="bg-background p-4 text-center text-sm font-medium text-muted-foreground border-t">
              {t.caption2}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  if (unwrappedParams.id === "currency") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-4xl text-gray-800 dark:text-gray-200">
        <Link href={`/${locale}/travel-guide`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.currencyTitle}</h1>
          <p className="text-2xl text-muted-foreground font-light mb-8">
            {t.currencySubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 overflow-hidden rounded-3xl shadow-xl border border-border/50 group"
        >
          <div className="relative overflow-hidden">
            <img
              src="https://wa-magazine.com/wp-content/uploads/2023/09/japanese_yen_1-884x599.jpg"
              alt="Japanese Yen"
              className="w-full h-[300px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="bg-muted p-4 text-center text-sm font-medium text-muted-foreground border-t">
            {t.currencyImageCaption}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p>{t.currencyP1}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.currencyItems.map((item: any, idx: number) => (
              <div key={idx} className="bg-card p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-xl text-primary mb-3 flex items-start">
                  <span className="bg-primary/10 p-1.5 rounded-full mr-3 text-primary shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed pl-11">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }


  if (unwrappedParams.id === "shopping") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-5xl text-gray-800 dark:text-gray-200">
        <Link href={`/${locale}/travel-guide`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.shoppingTitle}</h1>
          <p className="text-2xl text-muted-foreground font-light mb-8">
            {t.shoppingSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="border-l-4 border-primary pl-6 py-2 italic bg-muted/30 rounded-r-xl">
            {t.shoppingP1}
          </p>
        </motion.div>

        <div className="space-y-16">
          {t.shoppingSections.map((section: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {section.images && section.images.length === 1 && (
                <div className="w-full">
                  <img
                    src={section.images[0]}
                    alt={section.title}
                    className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              {section.images && section.images.length === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="overflow-hidden">
                    <img
                      src={section.images[0]}
                      alt={section.title + " 1"}
                      className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="overflow-hidden">
                    <img
                      src={section.images[1]}
                      alt={section.title + " 2"}
                      className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              )}
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-2xl md:text-3xl text-primary mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mr-4 shrink-0">
                    {idx + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }


  if (unwrappedParams.id === "connectivity") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-5xl text-gray-800 dark:text-gray-200">
        <Link href={`/${locale}/travel-guide`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.connectivityTitle}</h1>
          <p className="text-2xl text-muted-foreground font-light mb-8">
            {t.connectivitySubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="border-l-4 border-primary pl-6 py-2 italic bg-muted/30 rounded-r-xl">
            {t.connectivityP1}
          </p>
        </motion.div>

        <div className="space-y-16">
          {t.connectivitySections.map((section: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              {section.image && (
                <div className="w-full relative overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-2xl md:text-3xl text-primary mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mr-4 shrink-0">
                    {idx + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (unwrappedParams.id === "weather") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-5xl text-gray-800 dark:text-gray-200">
        <Link href={`/${locale}/travel-guide`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.weatherTitle}</h1>
          <p className="text-2xl text-muted-foreground font-light mb-8">
            {t.weatherSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="border-l-4 border-primary pl-6 py-2 italic bg-muted/30 rounded-r-xl">
            {t.weatherP1}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.weatherSections.map((section: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              {section.image && (
                <div className="w-full relative overflow-hidden h-[200px] md:h-[250px]">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-6 md:p-8 flex-grow">
                <h3 className="font-bold text-xl md:text-2xl text-primary mb-4 flex items-center">
                  {section.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (unwrappedParams.id === "emergency") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-5xl text-gray-800 dark:text-gray-200">
        <Link href={`/${locale}/travel-guide`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.emergencyTitle}</h1>
          <p className="text-2xl text-muted-foreground font-light mb-8">
            {t.emergencySubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="border-l-4 border-destructive/50 pl-6 py-2 italic bg-destructive/5 rounded-r-xl">
            {t.emergencyP1}
          </p>
        </motion.div>

        <div className="space-y-12">
          {t.emergencySections.map((section: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="group flex flex-col md:flex-row gap-8 items-center bg-card/50 p-6 rounded-3xl border border-border/50 hover:bg-card transition-colors"
            >
              {section.image && (
                <div className="w-full md:w-2/5 shrink-0 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[200px] md:h-[250px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="flex-grow">
                <h3 className="font-bold text-2xl text-foreground mb-4">{section.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{section.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (unwrappedParams.id === "etiquette") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-4xl text-gray-800 dark:text-gray-200">
        <Link href={`/${locale}/travel-guide`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{t.etiquetteTitle}</h1>
          <p className="text-2xl text-muted-foreground font-light mb-8">
            {t.etiquetteSubtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="border-l-4 border-primary pl-6 py-2 italic bg-muted/30 rounded-r-xl">
            {t.etiquetteP1}
          </p>
        </motion.div>

        <div className="space-y-16">
          {t.etiquetteSections.map((section: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {section.image && (
                <div className="relative overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="bg-muted p-3 text-center text-sm font-medium text-muted-foreground border-b border-border/50">
                    {section.caption}
                  </div>
                </div>
              )}
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-2xl md:text-3xl text-primary mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl mr-4 shrink-0">
                    {idx + 1}
                  </span>
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {section.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-32 px-4 container mx-auto text-center min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-muted-foreground">
        {t.updatingTitle}
      </h1>
      <p className="text-xl text-muted-foreground/70 mb-10 max-w-lg mx-auto">
        {t.updatingDesc}
      </p>
      <Button asChild size="lg" className="rounded-full">
        <Link href={`/${locale}/travel-guide`}>
          <ArrowLeft className="mr-2 w-4 h-4" />
          {t.back}
        </Link>
      </Button>
    </div>
  );
}
