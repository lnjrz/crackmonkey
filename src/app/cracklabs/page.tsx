import Image from 'next/image'
import Link from 'next/link'

export default function CrackLabsPage() {
  return (
    <main className="bg-crack-beige min-h-screen px-6 py-12 text-crack-dark space-y-16">
      <h1 className="text-4xl font-bold text-center text-crack-black mb-4 mb-1">
        CrackLabs <span className="text-black font-medium text-center text-crack-black mb-16"><p>Laboratorios dividivos por temáticas de análisis</p></span>
      </h1>
      {/* Antes de comenzar */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/cracklabs/introfun.png"
            alt="Funciones basicas"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-crack-black">0.0 Introducción a R</h2>
          <span className="text-black font-medium">
          <p>
            En esta sección encontrarás cómo instalar R, Rstudio, packages y el uso de funciones básicas de R base como filtrar, crear variables, unir bases de datos, importar y exportar, entre otras. 
                        
          </p>
          <p>
            Estos labs te serviran para entrar de lleno al resto de secciones, si es tu primer acercamiento con R no te saltes esta sección.
          </p>
          
          </span>
          <Link href="/cracklabs/introduccionar" className="text-crack-orange font-semibold underline">
            Ver laboratorio →
          </Link>
          
        </div>
      </section>

      <hr className="border-t border-crack-orange/50" />

      {/* Sección: Gobierno */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/cracklabs/gobinero2.png"
            alt="Gobierno"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-crack-black">1.1 Función de Gobierno</h2>
          <span className="text-black font-medium">
          <p>
            Aprende a explorar información sobre la estructura, presupuesto y desempeño
            del gobierno federal, estatal y municipal.
            
          </p>
          <p>
            En este laboratorio trabajamos con datos del INEGI, CONEVAL, Hacienda, y el
            Subsistema de Gobierno.
          </p>
          <p>
            Aplicarás análisis con Excel, R y herramientas de visualización interactiva.
          </p>
          </span>
          <Link href="/cracklabs/gobierno" className="text-crack-orange font-semibold underline">
            Ver laboratorio →
          </Link>
          
        </div>
      </section>

      <hr className="border-t border-crack-orange/50" />

      {/* Sección: Seguridad Pública */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/cracklabs/seguridad2.png"
            alt="Seguridad Pública"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-crack-black">1.2 Seguridad Pública</h2>
          <span className="text-black font-medium">
          <p>
            Analiza información sobre incidencia delictiva, policías, operativos, patrullajes
            y percepción de seguridad en México.
          </p>
          <p>
            Usamos datos del SESNSP, INEGI (ENVIPE), CNI y registros locales.
          </p>
          </span>
          <Link href="/cracklabs/seguridad" className="text-crack-orange font-semibold underline">
            Ver laboratorio →
          </Link>
        </div>
      </section>

      <hr className="border-t border-crack-orange/50" />

      {/* Sección: Justicia */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src="/cracklabs/justicia2.png"
            alt="Justicia"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-crack-black">1.3 Justicia</h2>
          <span className="text-black font-medium">
          <p>
            Explora datos sobre denuncias, carpetas de investigación, sentencias,
            sistema penitenciario y procuración de justicia.
          </p>
          <p>
            Aquí usamos datos del INEGI, FGR, tribunales y fiscalías estatales.
          </p>
          </span>
          <Link href="/cracklabs/justicia" className="text-crack-orange font-semibold underline">
            Ver laboratorio →
          </Link>
        </div>
      </section>
    </main>
  )
}
