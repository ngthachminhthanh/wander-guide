import { destinations } from "@/data/mock";
import { notFound } from "next/navigation";
import { MapPin, Navigation, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getDictionary, Locale } from "@/i18n";

import { TokyoContent } from "@/components/destinations/TokyoContent";
import { KyotoContent } from "@/components/destinations/KyotoContent";
import { OsakaContent } from "@/components/destinations/OsakaContent";

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ id: string; lang: string }>
}) {
  const { id, lang } = await params;
  const locale = lang as Locale;
  const t = getDictionary(locale);
  const destination = destinations.find((d) => d.id === id);

  if (!destination) {
    notFound();
  }

  // Google Maps embed URL simple approach
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(destination.mapQuery)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="flex flex-col flex-grow w-full">
      {/* Hero Header */}
      <div className="relative w-full h-[50vh] min-h-[400px]">
        <img 
          src={destination.image} 
          alt={destination.name[locale]} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="container mx-auto max-w-7xl">
            <span className="inline-block px-4 py-1 mb-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold tracking-wider shadow-sm">
              {destination.japaneseName}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-md">
              {destination.name[locale]}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl drop-shadow">
              {destination.description[locale]}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-16 flex-grow">
        
        {id === "tokyo" ? (
          <div className="mt-8 mb-16">
            <TokyoContent locale={locale} />
          </div>
        ) : id === "kyoto" ? (
          <div className="mt-8 mb-16">
            <KyotoContent locale={locale} />
          </div>
        ) : id === "osaka" ? (
          <div className="mt-8 mb-16">
            <OsakaContent locale={locale} />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info column */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card rounded-2xl p-6 border shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center border-b pb-4">
                  <Info className="mr-2 w-5 h-5 text-primary" /> {t.destinations.generalInfo}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t.destinations.generalInfoDesc}
                </p>
                
                <div className="mt-8">
                  <Button className="w-full h-12 text-lg text-primary-foreground shadow-sm" variant="default" asChild>
                    <Link href={`/${locale}/map`}>
                      <Navigation className="mr-2 w-5 h-5" />
                      {t.destinations.takeMeHere}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <MapPin className="mr-3 w-8 h-8 text-primary" /> {t.destinations.areaMap}
              </h2>
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-md border border-border/50">
                <iframe 
                  src={mapUrl}
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
          </div>
        )}
      </div>
    </div>
  );
}
