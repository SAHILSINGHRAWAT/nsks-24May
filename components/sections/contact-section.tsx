"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export default function ContactSection() {
  const [sectionRef, isVisible] = useScrollAnimation()
  const [headerRef, isHeaderVisible] = useScrollAnimation()
  const [formRef, isFormVisible] = useScrollAnimation()
  const [infoRef, isInfoVisible] = useScrollAnimation()

  return (
    <section ref={sectionRef} id="contact" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div ref={headerRef} className="text-center mb-12">
          <h2 className={`text-3xl font-bold tracking-tight mb-4 text-black scroll-animate-down ${isHeaderVisible ? 'visible' : ''}`}>Contact Us</h2>
          <p className={`text-gray-600 max-w-3xl mx-auto scroll-animate-scale ${isHeaderVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            Get in touch with our team for inquiries, quotes, or technical support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div ref={formRef} className={`bg-white p-6 md:p-8 rounded-lg shadow-sm scroll-animate-left ${isFormVisible ? 'visible' : ''}`}>
            <h3 className={`text-2xl font-bold mb-6 text-black scroll-animate-left ${isFormVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-black">Full Name</Label>
                  <Input id="name" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-black">Company Name</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">Email Address</Label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-black">Phone Number</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="inquiry-type" className="text-black">Inquiry Type</Label>
                <Select>
                  <SelectTrigger id="inquiry-type">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="product">Product Inquiry</SelectItem>
                    <SelectItem value="quote">Request a Quote</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="custom">Custom Solution</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-black">Message</Label>
                <Textarea id="message" placeholder="Please describe your inquiry in detail" rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className={`space-y-8 scroll-animate-right ${isInfoVisible ? 'visible' : ''}`}>
            <div className={`bg-white p-6 rounded-lg shadow-sm scroll-animate-scale ${isInfoVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
              <h3 className={`text-2xl font-bold mb-6 text-black scroll-animate-right ${isInfoVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-black">Phone</h4>
                    <p className="text-gray-600">+91 1234 567 890</p>
                    <p className="text-gray-600">+91 9876 543 210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-black">Email</h4>
                    <p className="text-gray-600">info@nskscabletrays.com</p>
                    <p className="text-gray-600">sales@nskscabletrays.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-black">Address</h4>
                    <p className="text-gray-600">
                      NSKS Cable Trays Pvt Ltd,
                      <br />
                      123 Industrial Area, Phase II,
                      <br />
                      Mumbai, Maharashtra 400001, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-black">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`bg-white p-6 rounded-lg shadow-sm border scroll-animate-scale ${isInfoVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.5s' }}>
              <div className={`w-full aspect-[16/9] rounded-lg overflow-hidden scroll-animate-scale ${isInfoVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.7s' }}>
                <iframe
                  src="https://www.google.com/maps?hl=en&q=NSKS+CABLE+TRAYS+PVT+LTD,+Shop+No:+1,+Road+No:+3,+SIE,+Shivalayam+Rd,+Cooperative+Industrial+Estate,+Balanagar,+Hyderabad,+Telangana+500037&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                  className="w-full h-full border-0 rounded-lg"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NSKS Cable Trays Pvt Ltd Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
