"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import { useI18n } from "@/components/providers/i18n-provider";
import { Clock } from "lucide-react";

export function DualClock() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date());
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-6 text-sm font-medium bg-muted/50 px-4 py-1.5 rounded-full border border-border/50 shadow-sm backdrop-blur-md">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">{t.clock?.vnTime || "Giờ Việt Nam"}:</span>
          <span className="font-mono text-foreground opacity-0">00:00</span>
        </div>
        <div className="w-px h-4 bg-border"></div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-muted-foreground">{t.clock?.jpTime || "Giờ Nhật Bản"}:</span>
          <span className="font-mono text-foreground opacity-0">00:00</span>
        </div>
      </div>
    );
  }

  // Time in Vietnam (UTC+7)
  const vnTime = new Date(time.toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }));
  // Time in Japan (UTC+9)
  const jpTime = new Date(time.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));

  return (
    <div className="flex items-center space-x-6 text-sm font-medium bg-muted/50 px-4 py-1.5 rounded-full border border-border/50 shadow-sm backdrop-blur-md">
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground">{t.clock?.vnTime || "Giờ Việt Nam"}:</span>
        <span className="font-mono text-foreground">{format(vnTime, "HH:mm")}</span>
      </div>
      <div className="w-px h-4 bg-border"></div>
      <div className="flex items-center space-x-2">
        <Clock className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground">{t.clock?.jpTime || "Giờ Nhật Bản"}:</span>
        <span className="font-mono text-foreground">{format(jpTime, "HH:mm")}</span>
      </div>
    </div>
  );
}
