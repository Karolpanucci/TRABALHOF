"use client"
import Link from 'next/link';
import 'src/app/globals.css'
import Image from 'next/image';
import {  Instagram, Twitch, CreditCard, CircleDollarSign } from 'lucide-react';
import Menu from '../../componentes/menu';
import Carrossel from '../../componentes/carrosel';
import Fotter from '../../componentes/Fotter';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });
  const produtos = await req.json();
  console.log(produtos)
  return (
    <> 
        
       <Carrossel/>

     

          <div className="flex ml-96 mt-10">
            <div className="text-white w-52">espaço</div>
            <h1 className="font-extrabold text-cyan-500 text-3xl font-serif">Destaque
            <p className=" font-serif text-rose-400 -ml-4">Da semana !</p></h1>
            
              
          </div>
              


              
          <main className="grid grid-cols-4 ml-7 mr-7 gap-4 mt-8 ">
          {produtos.map((produto) => (
            <div
              key={produto.codigo}
              className="border border-gray-200 rounded-xl hover:shadow-2xl transition-shadow duration-300"
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
        </main>
            
        <footer className="mt-52 text-white bg-cyan-500 shadow-xs transition-shadow duration-300">
          <div className='flex'>
          <div> 
            <Image 
                className='mt-0 ml-10'
                src="/logo.png"
                width={200}
                height={200}
                alt="Picture of the author"
            />
          </div>
          <div className='mt-12 ml-28'>
                <p className=' hover:ml-5 transition'>Produtos</p>
                <p className=' hover:ml-5 transition'>Duvidas Frequentes</p>
                <p className=' hover:ml-5 transition'>Central de Atendimentos</p>
                <p className=' hover:ml-5 transition'>Aviso de Cokies</p>
                <p className=' hover:ml-5 transition'>Aviso de privacidade</p>
                <p className=' hover:ml-5 transition'>Termos de uso</p>
          </div>
        
          <div className='mt-12 ml-28'>
                <p className=' hover:ml-5 transition'>Entrar</p>
                <p className=' hover:ml-5 transition'>Cliente novo? Cadastre-se</p>
          </div>
          <div className='mt-12 ml-28'>
                <p className=' hover:ml-5 transition'>Redes</p>
                <p className=' hover:ml-5 transition'>sociais</p>
                <div className=' flex gap-4 mt-2 hover:ml-5 transition'> <Instagram/> <Twitch/> </div>
          </div>
          <div className='mt-12 ml-28'>
                <p className=' hover:ml-5 transition'>Formas de Pagamento</p>
                 <div className=' flex gap-4 mt-2 hover:ml-5 transition'> <CreditCard/> <CircleDollarSign/> e PIX </div>
          </div>
          </div>
          <div className='text-center mt-4'>
           <p>Cindk Brigadeiro e comercio de doces LTDA</p>
           <p>Cnpj:87.155.151/0001-05</p>
           <p>Rua São Jorge 98- Vila Santo Antonio</p>
           <p> Nova Andradina-MS/ (67) 998361639</p>
          </div>
          <div className='bg-cyan-700 h-11 '>
           <p className='m-5'>CoppyRigth 2023 © Cindk</p> 
          </div>
          </footer>
        
    </>
  )
}