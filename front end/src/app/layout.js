import { Import } from 'lucide-react'

import './page.module.css'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { UserCircle, ShoppingCart, PlusCircle, Candy, Instagram, Twitch, CreditCard, CircleDollarSign } from 'lucide-react';
import Menu from '../../componentes/menu'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CindyK Briagdeiros',
  description: 'Simulando consumo de api com JsonServer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
      <sidbar class="flex w-full  h-36   items-center bg-stone-50">
<div className="flex w-full  h-36   items-center">
<Image 
    className='mt-0 ml-10'
    src="/logo.png"
    width={200}
    height={200}
    alt="Picture of the author"
    />
<div class="flex items-center ml-40">
    

    <div class=" flex relative h-10 w-full min-w-[200px]">
    <input
    class="peer h-10 w-96 rounded-[5px] border border-black  px-3 py-2.5 font-sans text-sm font-bold text-blue-gray-500 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-cyan-500 placeholder-shown:border-t-blue-cyan-500 focus:border-2 focus:border-cyan-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
    placeholder="Procurando algum doce? "
    />

    <div className="bg-cyan-500 rounded-[5px] w-10 h-10  items-center">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 m-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
</div>
</div>


    <div class="flex items-center px-20">
    <div class=" flex font-bold text-gray-500 px-5"> <UserCircle /> ENTRAR</div>
    <div class=" flex ml-2 bg-cyan-500 rounded-[7px] w-40 h-10  items-center font-bold text-white"> <p className=" flex m-3 space-x-2"> <ShoppingCart/>Carrinho (0)</p></div>

    </div>
</div>
</div>
</sidbar>
<nav className="flex h-14 w-full bg-stone-50 ">

<div className=" border border-gray-200 text-stone-50 w-24"> karol</div>
<div className=" flex border  border-gray-200 w-96 hover:bg-cyan-500 hover:text-white  transition-colors "><p className=" mt-3 ml-20 flex "> < PlusCircle/> <Link href="/cadastro" className="">Adicionar Novos Produtos </Link></p></div>
<div className=" flex border  border-gray-200 w-96 hover:bg-cyan-500 hover:text-white  transition-colors"><p className=" mt-3 ml-20 flex"> <Candy/> <Link href="/" className="">Sobre Nossos Produtos</Link></p></div>
<div className=" flex border  border-gray-200 w-96 hover:bg-cyan-500 hover:text-white  transition-colors "><p className=" mt-3 ml-20 flex"> <Instagram/> <Link href="https://www.instagram.com/casadodoce/" className=""> Nosso Instagram </Link></p></div>
<div className=" border border-gray-200 text-stone-50 w-24"> karol</div>



</nav>
        {children}</body>
    </html>
  )
}
