"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setShowSuccess(true)
    setFormData({ name: "", phone: "", message: "" })

    setTimeout(() => setShowSuccess(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const socialChannels = [
    {
      name: "Instagram",
      icon: <Instagram className="w-12 h-12" />,
      description: "Message us for custom orders and quick responses",
      action: "Send DM",
      href: "https://instagram.com/direct/new/",
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-12 h-12" />,
      description: "Join our community and stay updated",
      action: "Visit Page",
      href: "https://facebook.com",
      color: "from-blue-600 to-blue-500",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="w-12 h-12" />,
      description: "Direct chat for immediate assistance",
      action: "Chat Now",
      href: "https://wa.me/1234567890",
      color: "from-green-500 to-green-400",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-[var(--blush)]/20 to-[var(--light-pink)]/20">
        <div className="container-custom text-center">
          <h1 className="font-playfair mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our candles, need custom orders, or just want
            to say hello.
          </p>
        </div>
      </section>

      {/* Social Channels */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair mb-4">Connect With Us</h2>
            <p className="text-gray-600">Choose your preferred way to reach out</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {socialChannels.map((channel, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
                <div className={`h-32 bg-gradient-to-br ${channel.color} flex items-center justify-center text-white`}>
                  {channel.icon}
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-xl mb-3">{channel.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{channel.description}</p>
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block"
                  >
                    {channel.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="font-playfair text-2xl mb-6">Send us a Message</h3>

              {showSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  Thanks! We'll reply shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-pink)] focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-pink)] focus:border-transparent transition-all duration-300"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--deep-pink)] focus:border-transparent transition-all duration-300 resize-vertical"
                    placeholder="Tell us about your inquiry, custom order, or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info & Image */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="font-playfair text-2xl mb-6">Visit Our Workshop</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[var(--deep-pink)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Our Studio</p>
                      <p className="text-gray-600 text-sm">123 Artisan Street, Cairo, Egypt</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[var(--deep-pink)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600 text-sm">+20 123 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[var(--deep-pink)] mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600 text-sm">hello@pinycandle.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-md">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Our cozy workshop"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-playfair text-lg mb-3">How do I place an order?</h4>
              <p className="text-gray-600">
                Simply browse our collection, choose your favorite candles, and message us on Instagram or WhatsApp with
                your selection. We'll guide you through the rest!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-playfair text-lg mb-3">Do you offer custom scents?</h4>
              <p className="text-gray-600">
                Yes! We love creating custom fragrances. Contact us with your ideas and we'll work together to create
                your perfect scent.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-playfair text-lg mb-3">What's your delivery time?</h4>
              <p className="text-gray-600">
                Most orders are ready within 3-5 business days. Custom orders may take 7-10 days. We'll keep you updated
                throughout the process.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-playfair text-lg mb-3">Are your candles eco-friendly?</h4>
              <p className="text-gray-600">
                We use 100% natural soy wax, cotton wicks, and eco-friendly packaging. Our candles burn clean and are
                completely biodegradable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
