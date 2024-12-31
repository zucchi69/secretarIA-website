import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-blue-900 bg-opacity-80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/robot-logo.svg" alt="secretarIA Logo" width={40} height={40} className="animate-pulse" />
          <div className="text-3xl font-bold text-white">secretarIA</div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-white hover:text-blue-300 transition">Recursos</a>
          <a href="#testimonials" className="text-white hover:text-blue-300 transition">Depoimentos</a>
          <a href="#faq" className="text-white hover:text-blue-300 transition">FAQ</a>
          {/* <Button variant="outline" className="text-white border-white hover:bg-white hover:text-blue-900">
            Contato
          </Button> */}
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6 text-white" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 p-4">
          <a href="#features" className="block py-2 text-white">Recursos</a>
          <a href="#testimonials" className="block py-2 text-white">Depoimentos</a>
          <a href="#faq" className="block py-2 text-white">FAQ</a>
          {/* <Button variant="outline" className="mt-2 w-full text-white border-white hover:bg-white hover:text-blue-900">
            Contato
          </Button> */}
        </div>
      )}
    </header>
  )
}

