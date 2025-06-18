"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendContactEmail } from "@/lib/sendContactEmail"
import { useToast } from "@/hooks/use-toast"

export default function ContactFormClient({ isFormVisible, formRef }: { isFormVisible: boolean, formRef: any }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: ""
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  function handleChange(e: any) {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  function handleSelectChange(value: string) {
    setForm((prev) => ({ ...prev, inquiryType: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await sendContactEmail(form)
      toast({ title: "Message sent!", description: "Thank you for contacting us. We will get back to you soon." })
      setForm({ name: "", company: "", email: "", phone: "", inquiryType: "", message: "" })
    } catch (err) {
      toast({ title: "Failed to send", description: "There was an error sending your message. Please try again later.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={formRef} className={`bg-white p-6 md:p-8 rounded-lg shadow-sm scroll-animate-left ${isFormVisible ? 'visible' : ''}`}>
      <h3 className={`text-2xl font-bold mb-6 text-black scroll-animate-left ${isFormVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>Send Us a Message</h3>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-black">Full Name</Label>
            <Input id="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-black">Company Name</Label>
            <Input id="company" placeholder="Your company name" value={form.company} onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-black">Email Address</Label>
            <Input id="email" type="email" placeholder="Your email address" value={form.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-black">Phone Number</Label>
            <Input id="phone" placeholder="Your phone number" value={form.phone} onChange={handleChange} />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="inquiry-type" className="text-black">Inquiry Type</Label>
          <Select value={form.inquiryType} onValueChange={handleSelectChange}>
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
          <Textarea id="message" placeholder="Please describe your inquiry in detail" rows={5} value={form.message} onChange={handleChange} required />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  )
}
