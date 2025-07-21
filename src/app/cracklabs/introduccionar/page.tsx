'use client'
import { useState } from 'react'
import Image from 'next/image'

const labs = [
  {
    id: 'r-basico',
    title: '0.1 | R y RStudio',
    description: '¿Cómo instalar R y RStudio?',
    image: '/cracklabs/thumb-r.png',
    video: 'https://www.youtube.com/embed/VluOHHbUmXE',
  },
  {
    id: 'r-datos',
    title: '0.2 | Importar y exportar',
    description: '¿Cómo abrir y crear archivos .xlsx, .csv o .dbf?',
    image: '/cracklabs/thumb-r.png',
    video: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    id: 'r-vis',
    title: '0.3 | Variables y filtrado',
    description: 'Construir variables condicionales y filtrar base de datos.',
    image: '/cracklabs/thumb-r.png',
    video: 'https://www.youtube.com/embed/VIDEO_ID_3',
  },
  {
    id: 'r-tablas',
    title: '0.4 | Unión de tablas',
    description: '¿Cómo unir dos tablas de datos mediante un ID?',
    image: '/cracklabs/thumb-r.png',
    video: 'https://www.youtube.com/embed/VIDEO_ID_3',
  },
  // Agrega 3 más si gustas
]

export default function IntroduccionCrackLab() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <main className="bg-crack-beige min-h-screen px-6 py-12 text-crack-dark">
      <h1 className="text-4xl font-bold text-center text-crack-black mb-10">
        Laboratorio 0 · Introducción a R
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {labs.map((lab) => (
          <div key={lab.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div onClick={() => setSelectedVideo(lab.video)} className="cursor-pointer">
              <Image
                src={lab.image}
                alt={lab.title}
                width={500}
                height={280}
                className="w-full object-cover h-48"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="font-bold text-crack-black text-lg">{lab.title}</h3>
              <p className="text-sm text-crack-dark">{lab.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="bg-[#56697B] p-4 rounded-lg shadow-lg max-w-2xl w-full"
               onClick={(e) => e.stopPropagation()}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={selectedVideo}
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80"
              />
            </div>
            <button
              onClick={() => setSelectedVideo(null)}
              className="mt-4 block mx-auto text-crack-orange font-semibold"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
