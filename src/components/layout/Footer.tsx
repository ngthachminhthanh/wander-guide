"use client";

import Link from "next/link";
import { Tent } from "lucide-react";
import { useI18n } from "@/components/providers/i18n-provider";

export function Footer() {
  const { t, locale } = useI18n();

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-white/10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <Tent className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl tracking-tight">
              Wander<span className="text-primary">Guide</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400">
            {t.footer?.desc || "Khám phá vẻ đẹp truyền thống và sự tĩnh lặng của Nhật Bản cùng Wander Guide."}
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-primary">{t.footer?.explore || "Khám Phá"}</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href={`/${locale}/destinations`} className="hover:text-white transition">{t.footer?.topDestinations || "Điểm đến nổi bật"}</Link></li>
            <li><Link href={`/${locale}/experiences/nature`} className="hover:text-white transition">{t.footer?.nature || "Thiên nhiên"}</Link></li>
            <li><Link href={`/${locale}/experiences/culture`} className="hover:text-white transition">{t.footer?.culture || "Văn hóa & Nghệ thuật"}</Link></li>
            <li><Link href={`/${locale}/experiences/food`} className="hover:text-white transition">{t.footer?.food || "Ẩm thực"}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-primary">{t.footer?.support || "Hỗ Trợ"}</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href={`/${locale}/travel-guide`} className="hover:text-white transition">{t.footer?.travelGuide || "Cẩm nang du lịch"}</Link></li>
            <li><Link href={`/${locale}/faq`} className="hover:text-white transition">{t.footer?.faq || "Câu hỏi thường gặp"}</Link></li>
            <li><Link href={`/${locale}/map`} className="hover:text-white transition">{t.footer?.routeMap || "Bản đồ lộ trình"}</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-primary">{t.footer?.connect || "Kết Nối"}</h4>
          <p className="text-sm text-gray-400 mb-2">{t.footer?.newsletter || "Đăng ký để nhận thông tin mới nhất về các địa điểm."}</p>
          <form className="flex mt-2">
            <input 
              type="email" 
              placeholder={t.footer?.emailPlaceholder || "Email của bạn..."}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-l-md focus:outline-none focus:border-primary text-sm w-full"
            />
            <button className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md text-sm font-medium transition">
              {t.footer?.send || "Gửi"}
            </button>
          </form>
        </div>
      </div>
      
      <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} {t.footer?.copyright || "Wander Guide. Đã bảo đảm mọi quyền lợi."}</p>
      </div>
    </footer>
  );
}
