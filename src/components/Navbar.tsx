'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#59321B] text-white px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo + título */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-crackmonkey-mini.svg"
            alt="CrackMonkey logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-lg">CrackMonkey</span>
        </Link>

        {/* Menú hamburguesa en móvil */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex gap-6">
          <li>
            <Link href="/" className="hover:underline">Inicio</Link>
          </li>
          <li>
            <Link href="/cracklabs" className="hover:underline">CrackLabs</Link>
          </li>
          <li>
            <Link href="/Informacion" className="hover:underline">Saber más</Link>
          </li>
        </ul>
      </div>

      {/* Menú desplegable en móvil */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col items-center text-center gap-4 text-sm w-full">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:underline">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/cracklabs" onClick={() => setIsOpen(false)} className="hover:underline">
              CrackLabs
            </Link>
          </li>
          <li>
            <Link href="/Informacion" onClick={() => setIsOpen(false)} className="hover:underline">
              Saber más
            </Link>
          </li>
        </ul>
      )}
    </nav>
  )
}
