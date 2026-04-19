"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Map, MapPin, Tent, Menu, X, Home, Compass, Leaf, Palette, Utensils, BookOpen, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/components/providers/i18n-provider";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { DualClock } from "@/components/ui/dual-clock";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [navValue, setNavValue] = React.useState("");
  const { t, locale } = useI18n();
  const pathname = usePathname();

  const isHomePage = pathname === `/${locale}` || pathname === '/';
  const isSolid = isScrolled || mobileMenuOpen || !isHomePage;

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: `/${locale}`, label: t.navbar.home, icon: <Home className="mr-2 h-4 w-4" /> },
    { href: `/${locale}/destinations`, label: t.navbar.destinations, icon: <MapPin className="mr-2 h-4 w-4" /> },
    { href: `/${locale}/map`, label: t.navbar.map, icon: <Map className="mr-2 h-4 w-4" /> },
  ];

  const experiencesLinks = [
    { href: `/${locale}/experiences/nature`, label: t.footer?.nature || "Thiên nhiên", icon: <Leaf className="mr-2 h-4 w-4" /> },
    { href: `/${locale}/experiences/culture`, label: t.footer?.culture || "Văn hóa & Nghệ thuật", icon: <Palette className="mr-2 h-4 w-4" /> },
    { href: `/${locale}/experiences/food`, label: t.footer?.food || "Ẩm thực", icon: <Utensils className="mr-2 h-4 w-4" /> },
    { href: `/${locale}/travel-guide`, label: t.footer?.travelGuide || "Cẩm nang du lịch", icon: <BookOpen className="mr-2 h-4 w-4" /> },
    { href: `/${locale}/faq`, label: t.footer?.faq || "Câu hỏi thường gặp", icon: <HelpCircle className="mr-2 h-4 w-4" /> },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isSolid
          ? "bg-background/90 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent hover:bg-background/60 hover:backdrop-blur-sm transition-colors"
      )}
    >
      <div className="container mx-auto px-4 py-2 flex flex-col">
        <div className="flex items-center justify-between h-14">
          <Link href={`/${locale}`} className="flex items-center space-x-2 z-50 relative">
            <Tent className={cn(
              "h-8 w-8 transition-colors",
              isSolid ? "text-primary" : "text-white drop-shadow-md"
            )} />
            <span className={cn(
              "font-bold text-2xl tracking-tight transition-colors",
              isSolid ? "text-foreground" : "text-white drop-shadow-md"
            )}>
              Wander<span className="text-primary">Guide</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu value={navValue} onValueChange={setNavValue}>
              <NavigationMenuList className="space-x-1">
                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink render={<Link href={link.href} />} className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent transition-colors outline-none",
                      isSolid 
                        ? "hover:bg-primary/10 focus:bg-primary/10 data-active:bg-primary/10 data-active:hover:bg-primary/10 text-foreground focus:text-foreground hover:text-foreground data-active:text-foreground data-active:hover:text-foreground" 
                        : "hover:bg-white/20 focus:bg-white/20 data-active:bg-white/20 data-active:hover:bg-white/20 text-white hover:text-white focus:text-white data-active:text-white data-active:hover:text-white font-medium drop-shadow-sm"
                    )}>
                      {link.icon}
                      {link.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
                
                {/* Experiences Dropdown */}
                <NavigationMenuItem value="experiences">
                  <NavigationMenuTrigger className={cn(
                      "bg-transparent transition-colors outline-none",
                      isSolid 
                        ? "hover:bg-primary/10 focus:bg-primary/10 data-open:bg-primary/10 data-popup-open:bg-primary/10 text-foreground focus:text-foreground hover:text-foreground data-open:text-foreground data-popup-open:text-foreground" 
                        : "hover:bg-white/20 focus:bg-white/20 data-open:bg-white/20 data-popup-open:bg-white/20 data-open:hover:bg-white/20 data-popup-open:hover:bg-white/20 text-white hover:text-white focus:text-white data-open:text-white data-popup-open:text-white data-open:hover:text-white data-popup-open:hover:text-white font-medium drop-shadow-sm"
                    )}>
                    <Compass className="mr-2 h-4 w-4" />
                    {t.footer?.explore || "Khám Phá"}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-1 p-2 bg-background border rounded-md shadow-lg">
                      {experiencesLinks.map((link) => (
                        <li key={link.href}>
                          <NavigationMenuLink 
                            render={
                              <Link 
                                href={link.href} 
                                onClick={() => setNavValue("")}
                              />
                            } 
                            className="flex w-full items-center justify-start rounded-md p-3 text-sm font-medium transition-colors hover:bg-muted focus:bg-muted text-foreground"
                          >
                            {link.icon}
                            {link.label}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <DualClock />
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden p-2 z-50 relative",
              isSolid ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 72px)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-[72px] left-0 w-full bg-background border-b shadow-xl overflow-y-auto overflow-x-hidden pt-6 pb-12 px-6 flex flex-col space-y-6"
          >
            <div className="flex justify-center mb-4">
              <DualClock />
            </div>
            
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center text-xl font-medium p-3 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border"
                >
                  {link.icon}
                  <span className={link.icon ? "ml-2" : ""}>{link.label}</span>
                </Link>
              ))}

              {/* Experiences Mobile Group */}
              <div className="flex flex-col space-y-2 mt-2 pt-4 border-t border-border/50">
                <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider px-3 pb-2 flex items-center">
                  <Compass className="mr-2 w-4 h-4" />
                  {t.footer?.explore || "Khám Phá"}
                </span>
                {experiencesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center text-lg font-medium p-3 rounded-xl hover:bg-muted transition-colors border border-transparent hover:border-border pl-6"
                  >
                    {link.icon}
                    <span className="ml-2">{link.label}</span>
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex flex-col items-center space-y-6 mt-8 p-6 bg-muted/30 rounded-3xl border">
              <LanguageSwitcher />
              <div className="flex items-center space-x-4 mt-4">
                 <span className="text-sm font-medium text-muted-foreground">Chế độ giao diện:</span>
                 <ThemeToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
