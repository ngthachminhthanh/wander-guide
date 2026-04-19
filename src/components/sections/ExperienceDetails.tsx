"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useI18n } from "@/components/providers/i18n-provider";

interface ExperienceDetailsProps {
  title: string;
  japaneseTitle: string;
  description: string;
  image: string;
  highlights: string[];
  content: string;
}

export function ExperienceDetails({ title, japaneseTitle, description, image, highlights, content }: ExperienceDetailsProps) {
  const { t, locale } = useI18n();

  return (
    <div className="flex flex-col flex-grow">
      {/* Hero Header */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden mt-16">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Link href={`/${locale}`} className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors drop-shadow-md">
              <ArrowLeft className="mr-2 w-4 h-4" /> {t.experience.backHome}
            </Link>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-2 tracking-tighter drop-shadow-lg">
              {title}
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-medium mb-6 uppercase tracking-widest drop-shadow-md">
              {japaneseTitle}
            </p>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 container mx-auto max-w-5xl flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.experience.overview}</h2>
              <div className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                {content}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/50 rounded-3xl p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{t.experience.highlights}</h3>
              <ul className="space-y-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="mr-3 w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="w-full mt-10 h-14 text-lg rounded-2xl text-primary-foreground shadow-sm" asChild>
                <Link href={`/${locale}/destinations`}>{t.experience.exploreDestinations}</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
