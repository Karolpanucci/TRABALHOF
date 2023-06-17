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
      


      
<div className="grid grid-cols-4 ml-28 mr-28 gap-4  mt-8 ">
   
    {produtos.map(produtos=> (
      <div  className=" border w-full justify-center items-center rounded-[7px] h-full border-gray-200 hover:border-cyan-500"> 
        <div key={produtos.codigo}>
        <div className="w-40 h-40 ml-12  mt-8"> <img className="rounded-[5px]" src={produtos.imagem}/></div>  
          <div className=" font-medium text-base text-slate-800 px-24 mt-2">{produtos.titulo}</div>
          <div className=" font-normal text-sm text-rose-400 ml-28 mt-3">por:</div>
          <div className=" font-bold text-xl text-slate-900 px-24 mt-5" >{produtos.preco}</div>
          <button className="m-10 border border-cyan-500 font-bold text-base text-cyan-500 rounded-[7px] w-44 h-11 items-center   hover:bg-cyan-500 hover:text-white"><Link  href={`/produto/${produtos.codigo}`}>VER DETALHES</Link></button>
        </div>
        </div>
      ))}
      
</div>
     
    </>
  )
}