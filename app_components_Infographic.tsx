'use client'

import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const data = [
  { month: 'Jan', withoutAI: 100, withAI: 100 },
  { month: 'Feb', withoutAI: 105, withAI: 120 },
  { month: 'Mar', withoutAI: 110, withAI: 145 },
  { month: 'Apr', withoutAI: 115, withAI: 175 },
  { month: 'May', withoutAI: 120, withAI: 210 },
  { month: 'Jun', withoutAI: 125, withAI: 250 },
]

export default function Infographic() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">O Impacto da secretarIA</h2>
        <Card className="bg-white bg-opacity-10 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Crescimento de Agendamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={animate ? data : data.map(d => ({ ...d, withAI: d.withoutAI }))}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff30" />
                <XAxis dataKey="month" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip contentStyle={{ backgroundColor: '#1e3a8a', border: 'none' }} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="withoutAI" 
                  stroke="#8884d8" 
                  name="Sem IA" 
                />
                <Line 
                  type="monotone" 
                  dataKey="withAI" 
                  stroke="#82ca9d" 
                  name="Com secretarIA"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-2">37%</h3>
            <p>Aumento médio na taxa de agendamentos</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-2">12%</h3>
            <p>Redução média nos custos operacionais</p>
          </div>
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-2">3.5x</h3>
            <p>ROI médio do investimento</p>
          </div>
        </div>
      </div>
    </section>
  )
}

