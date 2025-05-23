import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Cable Trays</h3>
              <p className="mb-4">
                Leading manufacturer of high-quality cable management solutions for industrial, commercial, and
                residential applications.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/products/perforated-cable-trays" className="hover:text-white transition-colors">
                    Perforated Cable Trays
                  </Link>
                </li>
                <li>
                  <Link href="/products/ladder-cable-trays" className="hover:text-white transition-colors">
                    Ladder Cable Trays
                  </Link>
                </li>
                <li>
                  <Link href="/products/raceways" className="hover:text-white transition-colors">
                    Raceways
                  </Link>
                </li>
                <li>
                  <Link href="/products/junction-boxes" className="hover:text-white transition-colors">
                    Junction Boxes
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    View All Products
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
              <p className="mb-4">
                Subscribe to our newsletter for the latest product updates, industry news, and special offers.
              </p>
              <form className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-800">
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-3 text-primary" />
              <div>
                <h4 className="text-white font-medium">Phone</h4>
                <p>+91 1234 567 890</p>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-3 text-primary" />
              <div>
                <h4 className="text-white font-medium">Email</h4>
                <p>info@cabletrays.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-3 text-primary" />
              <div>
                <h4 className="text-white font-medium">Address</h4>
                <p>123 Industrial Area, Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 px-4 md:px-6 lg:px-8 bg-gray-950">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Cable Trays. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
