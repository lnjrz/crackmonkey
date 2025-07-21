// app/about/page.tsx
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import {  
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const documentos = [
  {
    id: "homicidios",
    title: "Los homicidios en México: revisión de patrones y tendencias",
    image: "/Informacion/homicidios.jpg",
    resumen:"",
    url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/889463914686.pdf"
  },
  {
    id: "empresas",
    title: "Estadísticas de victimización delictiva y corrupción en las empresas",
    image: "/Informacion/empresas.jpg",
    resumen:"",
    url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/889463904205.pdf"
  },
  {
    id: "delitos",
    title: "Evolución y perfil delictivo en México: Una mirada estadística",
    image: "/Informacion/delitos.jpg",
    resumen:"",
    url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/889463920083.pdf"
  },
  {
    id: "gasto",
    title: "El gasto público frente a los resultados en seguridad pública y justicia",
    image: "/Informacion/gasto.jpg",
    resumen:"",
    url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/702825107260.pdf"
  }

];
export default function AboutPage() {
  return (
    <main className="bg-crack-beige min-h-screen px-6 py-12 text-crack-dark">
      <div className="max-w-4xl mx-auto ">
        <h1 className="text-4xl md:text-5xl font-extrabold text-crack-black mb-4 text-center">
          ¿Qué es CrackMonkey?
        </h1>
        <div className="mb-10 text-lg leading-relaxed text-zinc-800">
          <span className="text-black font-medium">
          <p className="mb-4">
            CrackMonkey es un proyecto educativo que busca construir puentes entre la universidad y el mundo laboral.
            Está pensado para estudiantes, jóvenes analistas y personas sin red que quieren aprender a trabajar con datos públicos,
            especialmente en temas de gobierno, seguridad y justicia.
          </p>
          <p className="mb-4">
            Todos los cursos son gratuitos, profesionales y están hechos para que cualquier persona, sin importar su origen,
            pueda acceder a herramientas reales para el análisis, la visualización y la toma de decisiones informadas.
          </p>
          <p>
            Esta iniciativa nació como una forma de devolver lo que yo mismo recibí: formación abierta que cambió mi vida profesional.
          </p>
          </span>
        </div>
        <hr className="border-t border-crack-orange my-10" />
        {/* Sección de perfil en dos columnas */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-10">
          {/* Foto e iconos a la izquierda */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/Informacion/Alan_perfil.png"
              alt="Foto del creador"
              width={160}
              height={160}
              className="rounded-full border-4 border-zinc-300 mb-4"
            />
            {/* Iconos de redes */}
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/alanjrz/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-crack-orange text-xl hover:scale-110 transition">
                <FaLinkedin />
              </a>
              <a href="https://x.com/Alan__Jrz" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-crack-orange text-xl hover:scale-110 transition">
                <BsTwitterX />
              </a>
              <a href="https://www.instagram.com/alan.jrz/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-crack-orange text-xl hover:scale-110 transition">
                <FaInstagram />
              </a>
                                          
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full text-crack-orange text-xl hover:scale-110 transition">
                <FaGithub />
              </a>
            </div>
          </div>
          {/* Descripción a la derecha */}
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-crack-orange mb-2">Alan Jrz</h2>
            <span className="text-black font-medium">
            <p className="mb-4">
              Trabajé durante siete años en el INEGI, donde me desempeñé como Jefe de Departamento de Análisis de Información Gubernamental y como Enlace Supervisor.
              </p>
              <p className="mb-4">
              Durante ese periodo adquirí experiencia en la explotación y análisis de encuestas, microdatos y registros administrativos generados por la Dirección General de Estadísticas de Gobierno.
              Entre los productos que desarrollé destacan los siguientes.
            </p>
            </span>          
            
          </div>
        </div> 
        {/*Documentos*/}
        <div className="overflow-x-auto flex space-x-4 pb-4 mb-10 px-4">
          {documentos.map((documento) => (
            <a
            key={documento.id}
            href={documento.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-64 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <Image
              src={documento.image}
              alt={`Documento ${documento.title}`}
              width={256}
              height={144}
              className="w-full h-40 object-contain object-center bg-white rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-base font-semibold text-crack-black break-words leading-snug w-full">{documento.title}</h2>
                
                </div>
                </a>
              ))}
         </div>  
      </div>
    </main>
  );
}
