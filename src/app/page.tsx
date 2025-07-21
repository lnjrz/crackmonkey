import Image from "next/image"
import Link from 'next/link'
const cursos = [
  {
    id: 'gobierno',
    title: 'Gobierno',
    image: '/cracklabs/Modu1.jpg',
    resumen: '',
  },
  {
    id: 'seguridad',
    title: 'Seguridad Pública',
    image: '/cracklabs/Modu2.jpg',
    resumen: '',
  },
  {
  id: 'justicia',
    title: 'Justicia',
    image: '/cracklabs/Modu3.jpg',
    resumen: '',
  }
 
  // Puedes añadir más cursos aquí
]

export default function Home() {
  return (
    <main className="bg-crack-beige min-h-screen px-6 py-12 text-crack-dark">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo y Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-crack-black mb-4">
          CrackMonkey
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl mb-8 text-crack-orange">            
              <span className="text-black font-medium">
                Aprende a analizar información pública de Gobierno, Seguridad Pública y Justicia como un profesional.  
                    Cursos hechos para estudiantes y consultores que quieren sacarle jugo a los datos de México.
              </span>
          </p>


        {/* Imagen destacada */}
        <div className="mb-10">
          <Image
            src="/hero.svg" // Asegúrate de tener esta imagen en /public
            alt="Banner CrackMonkey"
            width={1200}
            height={400}
            className="w-full h-auto shadow-none border-none rounded-none"
          />
        </div>

        {/* Botones */}
        <div className="flex justify-center gap-4 mb-10">
          <a
            href="/cracklabs"
            className="border-2 border-crack-orange text-crack-orange hover:bg-crack-orange hover:text-white font-bold py-2 px-6 rounded-full transition"
          >
            CrackLabs
          </a>
          <a
          href="/Informacion"
            className="border-2 border-crack-orange text-crack-orange hover:bg-crack-orange hover:text-white font-bold py-2 px-6 rounded-full transition"
          >
            Saber más
          </a>
        </div>
      </div>
      {/* Cursos */}
      
      <h2 className="text-2xl font-bold text-crack-black mb-2 text-center">Laboratorios principales</h2>
      <div className="overflow-x-auto whitespace-nowrap space-x-4 flex pb-4 mb-10" >
        {cursos.map((curso) => (
          <Link key={curso.id} href={`/cracklabs/${curso.id}`}>
            <div className="inline-block w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 cursor-pointer">
              <Image
                src={curso.image}
                alt={`Curso ${curso.title}`}
                width={256}
                height={144}
                className="w-full h-40 object-contain object-center bg-white rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-crack-black">{curso.title}</h2>
                <p className="text-sm text-crack-dark">{curso.resumen}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bloques informativos */}
      <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-crack-black mb-2">¿Qué es CrackMonkey?</h2>
          <p>
            <span className="text-black font-medium">
            Un espacio de aprendizaje centrado en el uso de datos abiertos, especialmente del INEGI y otros sistemas públicos. Aquí aprenderás a usar herramientas como Excel, R y visualización interactiva para resolver problemas reales.
            </span>
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-crack-black mb-2">¿A quién va dirigido?</h2>
          <p>
            <span className="text-black font-medium">
            A estudiantes de últimos semestres, practicantes, investigadores o consultores que quieran entender mejor cómo funcionan los datos del país y cómo aprovecharlos con herramientas modernas.
            </span>
          </p>
        </div>
      </section>

      

    </main>
  )
}
