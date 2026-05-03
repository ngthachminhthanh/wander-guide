"use client";

import { motion } from "framer-motion";
import { MapPin, Search, Navigation, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { destinations } from "@/data/mock";
import { useState } from "react";
import { useI18n } from "@/components/providers/i18n-provider";

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState(destinations[0]);
  const { t, locale } = useI18n();
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(selectedLocation.mapQuery)}&t=&z=10&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="flex flex-col-reverse lg:flex-row mt-14 h-auto lg:h-[calc(100vh-56px)] pb-10 lg:pb-0">
        {/* Sidebar */}
        <div className="w-full lg:w-[400px] bg-card lg:border-r flex flex-col z-20 shadow-xl h-auto lg:h-full shrink-0 rounded-b-[2rem] lg:rounded-none mb-6 lg:mb-0">
          <div className="p-4 md:p-6 border-b space-y-4 shrink-0">
            <h1 className="text-xl md:text-2xl font-bold flex items-center">
              <Navigation className="mr-2 text-primary" /> {t.map.title}
            </h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder={t.map.searchPlaceholder} className="pl-10 lg:text-sm text-base" />
            </div>
          </div>

          <ScrollArea className="flex-grow h-auto max-h-[60vh] lg:max-h-none lg:h-0">
            <div className="p-4 space-y-3 pb-16 lg:pb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest px-2 mb-2">
                {t.map.suggestedLocations}
              </p>
              {destinations.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setSelectedLocation(dest)}
                  className={`w-full text-left p-4 rounded-xl transition-all border ${
                    selectedLocation.id === dest.id 
                      ? "bg-primary/10 border-primary shadow-sm" 
                      : "bg-transparent border-transparent hover:bg-muted"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-bold text-lg leading-tight">{dest.name[locale]}</h3>
                    <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-0.5 rounded ml-2 shrink-0">
                      {dest.japaneseName}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{dest.description[locale]}</p>
                </button>
              ))}
            </div>
          </ScrollArea>


        </div>

        {/* Map Area */}
        <div className="w-full h-[55vh] lg:h-full lg:flex-grow relative z-10 bg-muted shrink-0 lg:shrink">
          <motion.div 
            key={selectedLocation.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full absolute inset-0"
          >
            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              className="grayscale-[0.1] contrast-[1.05] dark:invert-[0.9] dark:hue-rotate-180"
            />
          </motion.div>

          {/* Floating UI on Map */}
          <div className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-auto md:right-10 md:w-80 z-30 pointer-events-none">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={`card-${selectedLocation.id}`}
              className="bg-card/90 backdrop-blur-xl border border-border/50 p-5 rounded-3xl shadow-2xl pointer-events-auto"
            >
              <h2 className="text-xl md:text-2xl font-bold mb-2">{selectedLocation.name[locale]}</h2>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{selectedLocation.description[locale]}</p>
              <div className="flex space-x-2">
                 <Button className="flex-grow rounded-full shadow-lg h-12" asChild>
                   <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedLocation.mapQuery)}`} target="_blank" rel="noopener noreferrer">
                     <MapPin className="mr-2 w-4 h-4" /> {t.map.directions}
                   </a>
                 </Button>
                 <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-primary/50 shrink-0" asChild>
                    <a href={`/${locale}/destinations/${selectedLocation.id}`} title={t.map.viewDetails}>
                      <Info className="w-5 h-5" />
                    </a>
                 </Button>
              </div>
            </motion.div>
          </div>
        </div>
    </div>
  );
}
