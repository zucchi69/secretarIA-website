import Image from 'next/image'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-blue-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">O Que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Image src="/placeholder.svg?height=60&width=60" alt="Dr. Luciana" width={60} height={60} className="rounded-full mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Dra. Luciana</h3>
                <p className="text-blue-300">Odontologia</p>
              </div>
            </div>
            <p className="italic">
              "Em 20 anos de odontologia, nunca tive tantos agendamentos sem ter que investir mais em anúncios. 
              A secretarIA revolucionou minha clínica!"
            </p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
  <div className="flex items-center mb-4">
    <Image src="/placeholder.svg?height=60&width=60" alt="Dr. Jonathan" width={60} height={60} className="rounded-full mr-4" />
    <div>
      <h3 className="text-xl font-semibold">Dr. Jonathan</h3>
      <p className="text-blue-300">Médico da Saúde</p>
    </div>
  </div>
  <p className="italic">
    "A secretarIA transformou minha prática médica. A eficiência no agendamento e atendimento ao paciente é incomparável. 
    É como ter uma equipe inteira em um único assistente virtual."
  </p>
</div>
        </div>
      </div>
    </section>
  )
}

