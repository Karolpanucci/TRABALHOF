"use client"
import Link from 'next/link';
import 'src/app/globals.css'
import Image from 'next/image';
import { UserCircle, ShoppingCart, PlusCircle, Candy, Instagram } from 'lucide-react';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });
  const produtos = await req.json();
  console.log(produtos)
  return (
    <> 
     
<sidbar class="flex  h-36 px-20  items-center bg-stone-50">
<Image 
      className='mt-0'
      src="/logo.png"
      width={200}
      height={200}
      alt="Picture of the author"
    />
  <div class="flex items-center px-40">
    

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
</sidbar>
<nav className="flex h-14 bg-stone-50 ">

  <div className=" border border-gray-200 text-white w-24"> karol</div>
  <div className=" flex border  border-gray-200 w-96 bg-cyan-500 text-white transition-colors "><p className=" mt-3 ml-20 flex "> < PlusCircle/> <Link href="/cadastro" className="">Adicionar Novos Produtos </Link></p></div>
  <div className=" flex border  border-gray-200 w-96 hover:bg-cyan-500 hover:text-white transition-colors "><p className=" mt-3 ml-20 flex text-gray-700"> <Candy/> <Link href="/cadastro" className="">Sobre Nossos Produtos</Link></p></div>
  <div className=" flex border  border-gray-200 w-96 hover:bg-cyan-500 hover:text-white transition-colors "><p className=" mt-3 ml-20 flex text-gray-700"> <Instagram/> <Link href="/cadastro" className=""> Nosso Instagram </Link></p></div>
  <div className=" border border-gray-200 text-white w-24"> karol</div>



</nav>




      <div className="items-center">
        <Image
        src="/semana.png"
        width={200}
        height={200}/>
       </div>
<div className="grid grid-cols-4 ml-28 mr-28 gap-4 mt-10 ">
   
    {produtos.map(produtos=> (
      <div className="bg-slate-400 border w-full  h-full border-blue-900"> 
        <div key={produtos.codigo}>
          <img src={produtos.imagem}/>
          <p>{produtos.titulo}</p>
          <p>{produtos.descricao}</p>
          <Link href={`/produto/${produtos.codigo}`}>ver mais</Link>
        </div>
        </div>
      ))}
      
</div>
     
    </>
  )
}