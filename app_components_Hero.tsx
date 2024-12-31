import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-50" />
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10" />
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Bem-vindo ao Futuro da Secretaria Médica
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Aumente seus agendamentos em até 37% com nossa IA personalizada
        </p>
        <Button size="lg" className="animate-pulse" onClick={scrollToContact}>
          Participe do Futuro <ArrowRight className="ml-2" />
        </Button>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Atendimento 24/7</h3>
            <p>Nunca deixe seus clientes esperando por uma resposta</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Agendamento Automático</h3>
            <p>Integração perfeita com sua agenda existente</p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-4">Redução de Custos</h3>
            <p>Diminua custos operacionais e aumente a eficiência</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

