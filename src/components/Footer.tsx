import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#354542] text-white pt-8 pb-6 mt-1 text-center text-sm">
      {/* Sección de apoyo */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <p className="font-semibold">Acá me puedes invitar café</p>
        <a
          href="https://www.buymeacoffee.com/crackmonkey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/buymeacoffee.png"
            alt="Buy Me A Coffee"
            width={28}
            height={16}
            className="hover:opacity-90 transition-opacity duration-200"
          />
        </a>
      </div>

      {/* Créditos */}
      <div className="text-white/80 leading-relaxed px-4">
        <p>
          Una página de <span className="text-white font-medium">CrackMonkey</span> desplegada con{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            className="underline hover:text-white"
          >
            Vercel
          </a>.
        </p>
        <p>
          Construida con Next.js, Tailwind y ❤️ por{" "}
          <a
            href="https://www.linkedin.com/in/alanjrz/"
            target="_blank"
            className="underline hover:text-white"
          >
            Alan Jrz
          </a>
        </p>
        <p className="mt-2">
          El contenido está licenciado bajo una{" "}
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            className="underline hover:text-white"
          >
            Licencia Creative Commons Attribution 4.0 Internacional
          </a>.
        </p>
        <div className="flex justify-center mt-2">
          <Image
            src="/cc-by.png"
            alt="Licencia CC-BY"
            width={88}
            height={31}
          />
        </div>
      </div>
    </footer>
  );
}
