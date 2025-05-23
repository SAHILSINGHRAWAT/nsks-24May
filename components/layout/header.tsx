"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const productCategories = [
  { name: "Perforated Cable Trays", href: "/products/perforated-cable-trays" },
  { name: "Ladder Cable Trays", href: "/products/ladder-cable-trays" },
  { name: "Raceways", href: "/products/Raceways" },
  { name: "Junction Boxes", href: "/products/junction-boxes" },
  { name: "Cable Tray Accessories", href: "/products/cable-tray-accessories" },
  { name: "Support Systems", href: "/products/support-systems" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 font-sans shadow-md">
      {/* Top Bar */}
      <div className="bg-[#001f3f] text-white py-2 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center text-sm sm:text-base font-medium">
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-6 mb-2 sm:mb-0">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 1234 567 890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@nskscabletrays.com</span>
            </div>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end items-center gap-6 text-white">
            <a href="#" className="hover:underline">Careers</a>
            <a href="#" className="hover:underline">News</a>
            <a href="#" className="hover:underline">Support</a>
            <div className="hidden sm:flex items-center gap-4 ml-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            </div>
            <Button asChild className=" ml-6 hidden md:flex bg-gradient-to-r from-blue-900 to-green-800 text-white hover:from-green-600 hover:to-green-800">
              <a href="/brochure.pdf" download>Download Brochure</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center mr-10 md:mr-16 h-20">
                <Image
                  src="/services/logo.png"
                  alt="NSKS Logo"
                  width={48}
                  height={48}
                  className="object-contain mr-1 rounded-none w-12 h-12 md:w-[120px] md:h-20"
                  priority
                />
                <span className="text-2xl md:text-2xl font-bold text-gray-800 tracking-wide">Cable Trays Pvt.Ltd</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </a>
                <Link href="/about" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                  About Us
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                      Products <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {productCategories.map((category) => (
                      <DropdownMenuItem key={category.href} asChild>
                        <a href={category.href} className="w-full font-medium">
                          {category.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/services" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                  Clients
                </Link>
                <Link href="/certifications" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                  Certifications
                </Link>
                <Link href="/contact" className="text-base font-semibold text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-2 md:space-x-4">
              <Button asChild className="hidden md:flex bg-gradient-to-r from-blue-900 to-green-500 text-white hover:from-blue-600 hover:to-blue-800">
                <a href="#contact">Get a Quote</a>
              </Button>
              
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-primary"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[280px] sm:w-[350px]">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                      <Link href="/" className="flex items-center text-3xl font-bold text-gray-900 h-16" onClick={() => setIsOpen(false)}>
                        <Image
                          src="/services/logo.png"
                          alt="NSKS Logo"
                          width={40}
                          height={40}
                          className="object-contain mr-3 rounded-none w-10 h-10 md:w-[100px] md:h-16"
                          priority
                        />
                        <span>NSKS Cable Trays</span>
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="flex flex-col space-y-5 mt-6">
                      <a href="/" className="text-lg font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                        Home
                      </a>
                      <Link href="/about" className="text-lg font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                        About Us
                      </Link>
                      <div className="space-y-2">
                        <a href="/products" className="text-lg font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                          Products
                        </a>
                        <div className="pl-4 space-y-2 border-l border-gray-200">
                          {productCategories.map((category) => (
                            <a
                              key={category.href}
                              href={category.href}
                              className="block text-sm font-medium text-gray-600 hover:text-blue-600"
                              onClick={() => setIsOpen(false)}
                            >
                              {category.name}
                            </a>
                          ))}
                        </div>
                      </div>
                      <Link href="/services" className="text-lg font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                        Services
                      </Link>
                      <Link href="/certifications" className="text-lg font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                        Certifications
                      </Link>
                      <Link href="/contact" className="text-lg font-semibold text-gray-700" onClick={() => setIsOpen(false)}>
                        Contact
                      </Link>
                    </nav>
                    <div className="mt-auto pt-6 border-t">
                      <Button asChild className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800">
                        <a href="/#contact" onClick={() => setIsOpen(false)}>
                          Get a Quote
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
