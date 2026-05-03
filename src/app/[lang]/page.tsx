"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { heroSlides, experiences, destinations } from "@/data/mock";
import { useI18n } from "@/components/providers/i18n-provider";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, locale } = useI18n();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0 bg-black"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="Hero image"
              className="w-full h-full object-cover opacity-60"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 bg-primary text-primary-foreground border-none py-1 px-3 text-sm md:text-base">
              {t.home.travelToJapan}
            </Badge>
            <h1 className="text-4xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
              {heroSlides[currentSlide].title[locale]}
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 mb-8 drop-shadow-lg font-light">
              {heroSlides[currentSlide].subtitle[locale]}
            </p>
            <div className="flex items-center justify-center space-x-3 md:space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full border-0 bg-black/20 hover:bg-black/50 text-white hover:text-white backdrop-blur-sm h-14 w-14 shrink-0 transition-all"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button size="lg" className="rounded-full shadow-lg text-lg px-6 md:px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground border-0" asChild>
                <Link href={`/${locale}/destinations`}>{t.home.startJourney}</Link>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="md:hidden rounded-full border-0 bg-black/20 hover:bg-black/50 text-white hover:text-white backdrop-blur-sm h-14 w-14 shrink-0 transition-all"
                onClick={nextSlide}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Desktop Slider Controls */}
        <div className="hidden md:block absolute z-20 top-1/2 left-8 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-0 bg-black/20 hover:bg-black/50 text-white hover:text-white backdrop-blur-sm h-12 w-12 transition-all"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
        </div>
        <div className="hidden md:block absolute z-20 top-1/2 right-8 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-0 bg-black/20 hover:bg-black/50 text-white hover:text-white backdrop-blur-sm h-12 w-12 transition-all"
            onClick={nextSlide}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </section>

      {/* Tinh Hoa Trải Nghiệm Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            {t.home.essenceExperiences}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            {t.home.essenceDesc}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={`/${locale}${exp.link}`} className="group block relative overflow-hidden rounded-2xl h-96 shadow-sm">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                <img
                  src={exp.image}
                  alt={exp.title[locale]}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title[locale]}</h3>
                  <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {exp.description[locale]}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Điểm Đến Nổi Bật Section */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{t.home.topDestinations}</h2>
              <p className="text-muted-foreground text-lg max-w-2xl">{t.home.topDestinationsDesc}</p>
            </div>
            <Button variant="link" className="mt-4 md:mt-0 text-primary p-0" asChild>
              <Link href={`/${locale}/destinations`} className="flex items-center text-lg">
                {t.home.viewAll} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.slice(0, 3).map((dest, idx) => (
              <motion.div
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="overflow-hidden bg-card border shadow-sm hover:shadow-xl transition-shadow flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden group shrink-0">
                    <img
                      src={dest.image}
                      alt={dest.name[locale]}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                    <Button variant="outline" className="w-full border-primary/20 bg-primary hover:bg-primary/80 text-primary-foreground dark:text-white transition-all" asChild>
                      <Link href={`/${locale}/destinations/${dest.id}`}>{t.home.exploreNow}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quảng bá Bản đồ */}
      <section className="py-24 px-4 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(255,0,0,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#60a5fa] to-primary animate-text-gradient drop-shadow-sm">
              {t.home.mapTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              {t.home.mapDesc}
            </p>
            <Button size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
              <Link href={`/${locale}/map`}>{t.home.openMap}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
