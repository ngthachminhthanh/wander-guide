const fs = require('fs');
const filepath = 'd:\\wander-guide\\wander-guide\\src\\app\\[lang]\\travel-guide\\[id]\\page.tsx';

let content = fs.readFileSync(filepath, 'utf8');

const etiquetteDataVi = `
    etiquetteTitle: "Văn hóa ứng xử",
    etiquetteSubtitle: "Học hỏi và thử thực hành các lễ nghi là một cách thú vị để trải nghiệm văn hóa Nhật Bản",
    etiquetteP1: "Nhật Bản có một nền văn hóa và phong tục độc đáo, chẳng hạn như cởi giày trước khi bước vào nhà. Có nhiều quy tắc khác nhau về quần áo hoặc vật dụng được phép sử dụng trong nhà tắm công cộng, suối nước nóng và hồ bơi.",
    etiquetteSections: [
      {
        title: "Quy tắc ứng xử cơ bản",
        desc: "Nhật Bản sở hữu nhiều phong tục xã hội độc đáo mang tính văn hóa và cách thức thể hiện sự tôn trọng. Mặc dù không thể kỳ vọng du khách trở nên thành thạo, nhưng việc học các quy tắc ứng xử cơ bản có thể là một phần của trải nghiệm du lịch phong phú và là cách tuyệt vời để tương tác với người dân.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Two_women_bowing_to_each_other_in_Japan.jpg/800px-Two_women_bowing_to_each_other_in_Japan.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ryokan_4284.jpg/800px-Ryokan_4284.jpg",
        caption: "Phòng nghỉ truyền thống Ryokan với chiếu tatami và đệm futon"
      },
      {
        title: "Cởi giày khi vào trong nhà",
        desc: "Văn hóa này bắt nguồn từ việc ngồi/ngủ trên sàn tatami. Bạn cởi giày ở lối vào (Genkan), mang dép đi trong nhà. Khi bước lên chiếu tatami, phải cởi dép. Hầu hết các nơi có dép riêng cho nhà vệ sinh.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Genkan.jpg/800px-Genkan.jpg",
        caption: "Genkan - Khu vực để giày dép ở lối cửa vào"
      },
      {
        title: "Quy tắc ứng xử khi tắm rửa (Onsen/Sento)",
        desc: "Hầu hết các cơ sở có bồn tắm riêng cho nam và nữ. Bạn phải cởi bỏ hoàn toàn quần áo trước khi vào bồn. Hãy tráng sạch cơ thể bằng xà phòng trước. Không đặt khăn vào trong nước và búi tóc lên gọn gàng. Nước có thể rất nóng, hãy nhúng chân vào trước.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kinosaki_Onsen_Goshonoyu.jpg/800px-Kinosaki_Onsen_Goshonoyu.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Japanese_food.jpg/800px-Japanese_food.jpg",
        caption: "Bữa ăn truyền thống tại Nhật Bản"
      },
      {
        title: "Phương tiện giao thông công cộng",
        desc: "Nói chuyện điện thoại trên tàu xe đều không được khuyến khích. Xếp hàng nhường hành khách xuống trước khi bước lên, và luôn nhường chỗ cho người già, phụ nữ mang thai. Hãy để điện thoại ở chế độ im lặng.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Inside_of_Yamanote_Line_E231_Series_Train.jpg/800px-Inside_of_Yamanote_Line_E231_Series_Train.jpg",
        caption: "Không gian yên tĩnh bên trong tàu điện ngầm Nhật Bản"
      },
      {
        title: "Không gian hút thuốc",
        desc: "Nhật Bản cấm hút thuốc khi đi bộ trên đường phố hoặc vứt tàn thuốc xuống đất. Hãy tìm các khu vực được quy định dành riêng cho việc hút thuốc ngoài trời qua ứng dụng bản đồ hoặc thông báo biển hiệu.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Smoking_area_in_Akihabara.jpg/800px-Smoking_area_in_Akihabara.jpg",
        caption: "Khu vực hút thuốc được chỉ định trên đường phố"
      }
    ],`;

const etiquetteDataEn = `
    etiquetteTitle: "Cultural Etiquette",
    etiquetteSubtitle: "Learning and practicing etiquette is a fun way to experience Japanese culture",
    etiquetteP1: "Japan has unique customs, such as taking off shoes before entering a home. There are various rules regarding clothing and items allowed in public baths, hot springs, and pools.",
    etiquetteSections: [
      {
        title: "Basic Etiquette",
        desc: "Japan possesses many unique social customs conveying respect. While tourists are not expected to be perfect, learning basic manners enhances the travel experience and helps you interact smoothly with locals.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Two_women_bowing_to_each_other_in_Japan.jpg/800px-Two_women_bowing_to_each_other_in_Japan.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ryokan_4284.jpg/800px-Ryokan_4284.jpg",
        caption: "Traditional Ryokan room with tatami mats and futon"
      },
      {
        title: "Taking Off Shoes Indoors",
        desc: "This custom stems from the tradition of sitting/sleeping on tatami mats. Take off your shoes at the entrance (Genkan) and wear indoor slippers. Remove slippers before stepping on tatami. Separate slippers are provided for restrooms.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Genkan.jpg/800px-Genkan.jpg",
        caption: "Genkan - The shoe area at the entrance"
      },
      {
        title: "Bathing Etiquette (Onsen/Sento)",
        desc: "Most facilities have separate baths for men and women. You must be completely naked. Wash your body with soap before entering the tub. Do not let your towel touch the water and tie up long hair.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kinosaki_Onsen_Goshonoyu.jpg/800px-Kinosaki_Onsen_Goshonoyu.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Japanese_food.jpg/800px-Japanese_food.jpg",
        caption: "A traditional Japanese meal"
      },
      {
        title: "Public Transportation",
        desc: "Talking on the phone on transit is frowned upon. Line up and let passengers off before boarding. Give up your seat to the elderly or pregnant. Keep your phone on silent mode.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Inside_of_Yamanote_Line_E231_Series_Train.jpg/800px-Inside_of_Yamanote_Line_E231_Series_Train.jpg",
        caption: "The quiet environment inside a Japanese commuter train"
      },
      {
        title: "Designated Smoking Areas",
        desc: "Smoking while walking or throwing cigarette butts on the ground is banned and finable. Look for designated outdoor smoking areas using navigation apps or public signs.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Smoking_area_in_Akihabara.jpg/800px-Smoking_area_in_Akihabara.jpg",
        caption: "Designated smoking area on the street"
      }
    ],`;

const etiquetteDataJa = `
    etiquetteTitle: "文化的エチケット",
    etiquetteSubtitle: "マナーを学び実践することは、日本の文化を体験する楽しい方法です",
    etiquetteP1: "日本には家に上がる前に靴を脱ぐなど、独自の文化や習慣があります。また、銭湯、温泉、プールで許可される服装や持ち物には様々なルールがあります。",
    etiquetteSections: [
      {
        title: "基本的なエチケット",
        desc: "日本には他者への敬意を表す独自の社会的習慣が多数あります。観光客が完璧であることは求められませんが、基本的なマナーを学ぶことで、地元の人々との交流が深まり旅行が豊かになります。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Two_women_bowing_to_each_other_in_Japan.jpg/800px-Two_women_bowing_to_each_other_in_Japan.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ryokan_4284.jpg/800px-Ryokan_4284.jpg",
        caption: "畳と布団が敷かれた伝統的な旅館の部屋"
      },
      {
        title: "室内で靴を脱ぐ習慣",
        desc: "畳の上で座ったり寝たりする文化から来ています。玄関で靴を脱ぎ、スリッパに履き替えます。畳の上を歩くときはスリッパも脱ぎます。トイレには専用のスリッパが用意されています。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Genkan.jpg/800px-Genkan.jpg",
        caption: "玄関 - 靴を脱ぐスペース"
      },
      {
        title: "入浴マナー（温泉・銭湯）",
        desc: "男女別の浴場があり、完全に裸になる必要があります。湯船に入る前に必ず石鹸で体を洗い流します。タオルを湯船に浸してはいけません。髪が長い場合は結びます。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Kinosaki_Onsen_Goshonoyu.jpg/800px-Kinosaki_Onsen_Goshonoyu.jpg",
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
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Japanese_food.jpg/800px-Japanese_food.jpg",
        caption: "日本の伝統的な食事"
      },
      {
        title: "公共交通機関でのマナー",
        desc: "電車やバス内での通話は控えましょう。乗車の際は列に並び、降りる人を優先します。お年寄りや妊婦には席を譲ります。スマートフォンはマナーモードに設定してください。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Inside_of_Yamanote_Line_E231_Series_Train.jpg/800px-Inside_of_Yamanote_Line_E231_Series_Train.jpg",
        caption: "静かな日本の電車内の風景"
      },
      {
        title: "指定された喫煙スペース",
        desc: "歩きタバコやポイ捨ては条例で禁止されており、罰金が科されることもあります。公共の場所で喫煙する場合は、必ず灰皿の設置された指定の喫煙所を利用してください。",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Smoking_area_in_Akihabara.jpg/800px-Smoking_area_in_Akihabara.jpg",
        caption: "路上に設置された喫煙スペース"
      }
    ],`;

content = content.replace(/(  vi: \{[\s\S]*?)(\n  \},)/, \`$1\n\${etiquetteDataVi}\$2\`);
content = content.replace(/(  en: \{[\s\S]*?)(\n  \},)/, \`$1\n\${etiquetteDataEn}\$2\`);
content = content.replace(/(  ja: \{[\s\S]*?)(\n  \}\n\};)/, \`$1\n\${etiquetteDataJa}\$2\`);

const etiquetteJsx = `
  if (unwrappedParams.id === "etiquette") {
    return (
      <div className="pt-24 pb-24 px-4 container mx-auto text-lg leading-relaxed max-w-4xl text-gray-800 dark:text-gray-200">
        <Link href={\`/\${locale}/travel-guide\`} className="inline-flex items-center text-primary hover:underline mb-12 font-medium transition-colors">
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
          <p>{t.etiquetteP1}</p>
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
                  <div className="bg-muted p-3 text-center text-sm text-muted-foreground border-b border-border/50">
                    {section.caption}
                  </div>
                </div>
              )}
              <div className="p-8 md:p-10">
                <h3 className="font-bold text-2xl md:text-3xl text-foreground mb-4">
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
`;

content = content.replace(/(return \(\n    <div className="pt-32 pb-32 px-4 container mx-auto)/, etiquetteJsx + '\n  $1');

fs.writeFileSync(filepath, content);
console.log("File updated successfully.");
