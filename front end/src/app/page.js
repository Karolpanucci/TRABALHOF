"use client"
import Link from 'next/link';
import 'src/app/globals.css'
import Image from 'next/image';
import { UserCircle, ShoppingCart, PlusCircle, Candy, Instagram } from 'lucide-react';
import Menu from '../../componentes/menu';
import Carrossel from '../../componentes/carrosel';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });
  const produtos = await req.json();
  console.log(produtos)
  return (
    <> 
           <Menu/>
         <Carrossel/>
     

  <div className="flex ml-96 mt-10">
    <div className="text-white w-52">espaço</div>
     <h1 className="font-extrabold text-cyan-500 text-3xl font-serif">Destaque
     <p className=" font-serif text-rose-400 -ml-4">Da semana !</p></h1>
     
       
  </div>
      


      
  <div className="grid grid-cols-4 ml-7 mr-7 gap-4 mt-8 ">
  {produtos.map((produto) => (
    <div
      key={produto.codigo}
      className="border border-gray-200 rounded-md hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="w-40 h-40 mx-auto mt-8">
        <img className="rounded-md" src={produto.imagem} alt={produto.titulo} />
      </div>
      <div className="text-base text-slate-800 px-4 mt-2 font-medium text-center">{produto.titulo}</div>
      <div className="text-sm text-rose-400 ml-4 mt-3 text-center">por:</div>
      <div className="text-xl text-slate-900 px-4 mt-5 font-bold text-center">R{produto.preco}</div>
      <div className="flex justify-center">
        <button className="m-10 border border-cyan-500 text-base text-cyan-500 rounded-md w-44 h-11 items-center hover:bg-cyan-500 hover:text-white">
          <Link href={`/produto/${produto.codigo}`}>VER DETALHES</Link>
        </button>
      </div>
    </div>
  ))}
</div>
     
    </>
  )
}