import { Calendar, MessageCircle, FileText, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5" />
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Recursos Inovadores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="flex items-start bg-blue-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg"
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <MessageCircle className="h-12 w-12 mr-4 text-blue-300" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Comunicação Avançada</h3>
              <p>Escuta e envia áudios, proporcionando uma experiência humanizada para seus pacientes.</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-start bg-blue-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg"
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Calendar className="h-12 w-12 mr-4 text-blue-300" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Agendamento Inteligente</h3>
              <p>Integração direta com seu calendário para agendar consultas de forma eficiente.</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-start bg-blue-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg"
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FileText className="h-12 w-12 mr-4 text-blue-300" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Relatórios Detalhados</h3>
              <p>Receba relatórios diários com o número de clientes atendidos e consultas agendadas.</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-start bg-blue-800 bg-opacity-50 backdrop-blur-lg p-6 rounded-lg"
            variants={featureVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Settings className="h-12 w-12 mr-4 text-blue-300" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Personalização Total</h3>
              <p>100% personalizável, incluindo a escolha do nome da sua nova secretária virtual.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

