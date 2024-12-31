'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "A secretarIA consegue escutar áudios?",
    answer: "Sim, a secretarIA é capaz de escutar e responder a áudios, proporcionando uma experiência de comunicação natural e eficiente."
  },
  {
    question: "Como a secretarIA lida com dúvidas sobre procedimentos?",
    answer: "A secretarIA é treinada pelos melhores vendedores, realizando uma completa quebra de objeções durante a conversa e induzindo o cliente a agendar uma consulta."
  },
  {
    question: "Quanto tempo leva para implementar a secretarIA?",
    answer: "Nossa equipe rápida e eficiente conclui o treinamento e a implementação da sua nova secretária em menos de 1 semana."
  },
  {
    question: "A secretarIA pode ser personalizada para minha clínica?",
    answer: "Absolutamente! A secretarIA é 100% personalizável, incluindo a escolha do nome da sua nova secretária virtual."
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-blue-900 to-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-blue-800 p-6 rounded-lg shadow-lg">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6" />
                ) : (
                  <ChevronDown className="h-6 w-6" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-4 text-blue-200">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

