import React from 'react'

export default function Nav() {
  return (
    <nav className="flex justify-around bg-lime-800 w-screen h-[12] shadow-lg shadow-[#3f6212]">
        <h1 className="nuclear-text md:text-3xl pl-2">Cher & Noble Banking <span className="md:text-4xl text-2xl meltdown-text hover:text-rose-900">☢</span></h1>
        <ul className="pt-3 flex gap-2">
        <li><a href="">Banking</a></li>
        <li><a href="">Loans</a></li>
        <li><a href="">Investiments</a></li>
        <li><a href="">Why Us?</a></li>
        </ul>
    </nav>
  )
}
