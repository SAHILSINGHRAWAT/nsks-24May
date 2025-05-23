"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const productCategories = [
  { name: "Perforated Cable Trays", href: "/products/perforated-cable-trays" },
  { name: "Ladder Cable Trays", href: "/products/ladder-cable-trays" },
  { name: "Raceways", href: "/products/raceways" },
  { name: "Junction Boxes", href: "/products/junction-boxes" },
  { name: "Cable Tray Accessories", href: "/products/cable-tray-accessories" },
  { name: "Support Systems", href: "/products/cable-tray-support-systems" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center mb-2 sm:mb-0">
            <Phone className="h-4 w-4 mr-2" />
            <span className="mr-4">+91 1234 567 890</span>
            <Mail className="h-4 w-4 mr-2" />
            <span className="mr-4">+91 1234 567 890</span>
            <Mail className="h-4 w-4 mr-2" />
            <span>info@cabletrays.com</span>
          </div>
          <div className="flex items-center">
            <a href="#" className="hover:underline mr-4">
              Careers
            </a>
            <a href="#" className="hover:underline mr-4">
              News
            </a>
            <a href="#" className="hover:underline">
              Support
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b bg-white">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-primary mr-8">
                Cable Trays
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors ${isActive("/") ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                >
                  About Us
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center text-sm font-medium transition-colors ${isActive("/products") ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                    >
                      Products <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/products" className="w-full">
                        All Products
                      </Link>
                    </DropdownMenuItem>
                    {productCategories.map((category) => (
                      <DropdownMenuItem key={category.href} asChild>
                        <Link href={category.href} className="w-full">
                          {category.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link
                  href="/services"
                  className={`text-sm font-medium transition-colors ${isActive("/services") ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-primary" : "text-gray-600 hover:text-primary"}`}
                >
                  Contact
                </Link>
              </nav>
            </div>
            <div className="flex items-center">
              <Button asChild className="hidden md:flex">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between border-b pb-4">
                      <Link href="/" className="text-xl font-bold text-primary" onClick={() => setIsOpen(false)}>
                        Cable Trays
                      </Link>
                      <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </div>
                    <nav className="flex flex-col space-y-4 mt-6">
                      <Link
                        href="/"
                        className={`text-base font-medium transition-colors ${isActive("/") ? "text-primary" : "text-gray-600"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className={`text-base font-medium transition-colors ${isActive("/about") ? "text-primary" : "text-gray-600"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        About Us
                      </Link>
                      <div className="space-y-2">
                        <Link
                          href="/products"
                          className={`text-base font-medium transition-colors ${isActive("/products") ? "text-primary" : "text-gray-600"}`}
                          onClick={() => setIsOpen(false)}
                        >
                          Products
                        </Link>
                        <div className="pl-4 space-y-2 border-l border-gray-200">
                          {productCategories.map((category) => (
                            <Link
                              key={category.href}
                              href={category.href}
                              className="block text-sm text-gray-600 hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <Link
                        href="/services"
                        className={`text-base font-medium transition-colors ${isActive("/services") ? "text-primary" : "text-gray-600"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        Services
                      </Link>
                      <Link
                        href="/contact"
                        className={`text-base font-medium transition-colors ${isActive("/contact") ? "text-primary" : "text-gray-600"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        Contact
                      </Link>
                    </nav>
                    <div className="mt-auto pt-6 border-t">
                      <Button asChild className="w-full">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                          Get a Quote
                        </Link>
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
