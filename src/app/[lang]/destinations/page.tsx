"use client";

import { motion } from "framer-motion";
import { destinations } from "@/data/mock";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";

export default function DestinationsPage() {
  const { t, locale } = useI18n();

  return (
    <div className="pt-24 pb-12 px-4 container mx-auto flex-grow max-w-7xl">
      <div className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {t.destinations.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t.destinations.desc}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest, idx) => (
          <motion.div
            key={dest.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col bg-card border-border/50 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-72 overflow-hidden group shrink-0">
                <img 
                  src={dest.image} 
                  alt={dest.name[locale]} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-sm font-medium">
                  {dest.japaneseName}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MapPin className="mr-2 text-primary w-5 h-5" /> 
                  {dest.name[locale]}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {dest.description[locale]}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-primary-foreground" asChild>
                  <Link href={`/${locale}/destinations/${dest.id}`}>{t.destinations.explore} {dest.name[locale]}</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
