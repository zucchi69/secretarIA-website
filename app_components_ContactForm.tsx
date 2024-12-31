'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', phone: '', message: '' })
    // Redirect to thank you page
    window.location.href = '/obrigado'
  }

  return (
    <section id="contact-form" className="py-20 px-4 bg-gradient-to-b from-blue-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5" />
      <div className="container mx-auto max-w-2xl relative z-10">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Participe do Futuro
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            type="text"
            name="name"
            placeholder="Seu Nome"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-blue-800 bg-opacity-50 backdrop-blur-lg border-blue-700 text-white placeholder-blue-300"
          />
          <Input
            type="email"
            name="email"
            placeholder="Seu Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-blue-800 bg-opacity-50 backdrop-blur-lg border-blue-700 text-white placeholder-blue-300"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Seu Telefone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-blue-800 bg-opacity-50 backdrop-blur-lg border-blue-700 text-white placeholder-blue-300"
          />
          <Textarea
            name="message"
            placeholder="Sua Mensagem (opcional)"
            value={formData.message}
            onChange={handleChange}
            className="bg-blue-800 bg-opacity-50 backdrop-blur-lg border-blue-700 text-white placeholder-blue-300"
          />
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Quero Participar do Futuro
          </Button>
        </motion.form>
        <motion.p 
          className="mt-8 text-center text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Entraremos em contato para uma avaliação personalizada e orçamento específico para o seu caso.
        </motion.p>
        <motion.p 
          className="mt-4 text-center text-blue-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Ou entre em contato diretamente: (11) 97179-0417
        </motion.p>
      </div>
    </section>
  )
}

