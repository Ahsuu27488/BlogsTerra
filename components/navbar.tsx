"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Moon, Sun, Menu, Home, BookOpen, User, Newspaper } from "lucide-react";
// import { Newspaper } from 'lucide-react';  // Commented out as requested

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/blog", label: "Blogs", icon: BookOpen },
    { href: "/about", label: "About Us", icon: User },
  ];

  return (
    <nav className="border-b">
      <div className="container flex h-14 md:h-16 items-center px-4">
        <Link href="/" className="flex items-center space-x-2">
          {/* <Newspaper className="h-5 w-5 md:h-6 md:w-6" /> */}
          <svg
            // className="h-5 w-5 md:h-6 md:w-6"
            viewBox="0 0 300 100"
            className="h-8 w-32 md:h-10 md:w-40 text-foreground" // Adjusted size and using text-foreground for theme support
          >
            {/* Main text */}
            <text
              x="80"
              y="50"
              fontFamily="Arial, sans-serif"
              fontSize="32"
              fontWeight="bold"
              fill="currentColor"
            >
              BlogsTerra
            </text>

            {/* Abstract tech symbol */}
            <g transform="translate(20, 15)">
              <path
                d="M 0 25 L 20 25 L 30 15 L 40 35 L 50 25"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <circle cx="0" cy="25" r="4" fill="currentColor" />
              <circle cx="50" cy="25" r="4" fill="currentColor" />
              <path
                d="M 35 0 L 45 0 L 45 50 L 35 50"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </g>

            {/* Tagline */}
            <text
              x="80"
              y="75"
              fontFamily="Arial, sans-serif"
              fontSize="12"
              fill="currentColor"
            >
              Tech • Code • Create
            </text>
          </svg>
        </Link>

        {/* Rest of the navbar remains the same */}
        <div className="hidden md:flex items-center space-x-6 ml-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex-1" />

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="h-8 w-8 md:h-10 md:w-10"
          >
            <Sun className="h-4 w-4 md:h-5 md:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 md:h-5 md:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="text-lg font-semibold mb-4">
                Navigation Menu
              </SheetTitle>
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
