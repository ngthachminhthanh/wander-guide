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
    <div className="flex flex-col h-[calc(100vh-64px)] mt-16 overflow-hidden">
      <div className="flex flex-col md:flex-row h-full">
        
        {/* Sidebar */}
        <div className="w-full md:w-96 bg-card border-r flex flex-col z-20 shadow-xl">
          <div className="p-6 border-b space-y-4">
            <h1 className="text-2xl font-bold flex items-center">
              <Navigation className="mr-2 text-primary" /> {t.map.title}
            </h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder={t.map.searchPlaceholder} className="pl-10 lg:text-sm text-base" />
            </div>
          </div>

          <ScrollArea className="flex-grow">
            <div className="p-4 space-y-3">
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

          <div className="p-6 border-t bg-muted/50 hidden md:block">
            <div className="flex items-center space-x-4 mb-4">
               <div className="h-12 w-12 shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                  <Info className="text-primary w-6 h-6" />
               </div>
               <div>
                  <h4 className="font-bold text-sm">{t.map.routeSuggestion}</h4>
                  <p className="text-xs text-muted-foreground">{t.map.routeDesc}</p>
               </div>
            </div>
            <Button className="w-full" variant="outline">{t.map.viewDetails}</Button>
          </div>
        </div>

        {/* Map Area */}
        <div className="flex-grow relative h-full">
          <motion.div 
            key={selectedLocation.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
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
          <div className="absolute bottom-6 left-4 right-4 md:bottom-10 md:left-auto md:right-10 md:w-80 z-30">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={`card-${selectedLocation.id}`}
              className="bg-card/90 backdrop-blur-xl border border-border/50 p-6 rounded-3xl shadow-2xl"
            >
              <h2 className="text-2xl font-bold mb-2">{selectedLocation.name[locale]}</h2>
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
    </div>
  );
}
