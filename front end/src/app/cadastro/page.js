'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
import 'src/app/globals.css'
import Image from 'next/image';
import { UserCircle, ShoppingCart, PlusCircle, Candy, Instagram, ChevronLeft, Twitch, CreditCard, CircleDollarSign } from 'lucide-react';
import Menu from '../../../componentes/menu';

export default function Cadastro() {
    const route = useRouter('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [dateCadastro, setDateCadastro] = useState('');
    const [imagen, setImagen] = useState('');
    
    const cadastrar = (e) => {
        e.preventDefault()
        
        const Produto = {
            titulo: titulo,
            descricao: descricao,
            preco: preco,
            dataCadastro: dateCadastro,
            imagem: imagen
        }
        alert('foi cadastrado com sucesso')

        const produtoJson = JSON.stringify(Produto);
       const req =  fetch("http://localhost:3003/produto", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
        console.log(req)
    } 
    
    
     
    return (
              <>
      <div><Link href="/" className=" flex ml-28 mt-7 "><ChevronLeft/> Voltar</Link></div>
      <h1 className="font-extrabold text-cyan-500 text-3xl font-serif text-center">Adcionar novos produtos</h1>

         <div  style={{ maxWidth: '500px', maxHeight: '1050px' }} className="border bg-stone-50  mt-7 text-center rounded-lg shadow-lg transition-shadow duration-300 justify-center ml-96">
            <form  onSubmit={cadastrar}>
                <div className="mb-4 mt-5 ">
                    <label className="block mb-2 font-bold text-2xl text-slate-600 " htmlFor="titulo">Título do produto:</label>
                    <input
                    type="text"
                    id="titulo"
                    className="w-96 px-4 py-2 border rounded"
                    placeholder="Título do produto"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                    />
            </div>
            <div className="mb-4">
                <label className="block mb-2 text-2xl text-slate-600 font-bold" htmlFor="descricao">Descrição do produto:</label>
                <textarea
                id="descricao"
                className="w-96 px-4 py-2 border rounded"
                placeholder="Descrição do produto"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
                ></textarea>
          </div>
          <div className="mb-4">
                <label className="block mb-2 font-bold text-2xl text-slate-600 " htmlFor="preco">Preço atual:</label>
                <input
                type="text"
                id="preco"
                className="w-96 px-4 py-2 border rounded"
                placeholder="Preço atual"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                required
                />
          </div>
          <div className="mb-4">
                <label className="block mb-2 font-bold text-2xl text-slate-600 " htmlFor="imagem">Imagem do produto:</label>
                <input
                type="text"
                id="imagem"
                className="w-96 px-4 py-2 border rounded"
                placeholder="Imagem do produto"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                required
                />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold text-2xl text-slate-600 " htmlFor="dataCadastro">Data atual:</label>
            <input
              type="date"
              id="dataCadastro"
              className="w-96 px-4 py-2 border rounded"
              value={dateCadastro}
              onChange={(e) => setDateCadastro(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="m-5 border border-cyan-500 text-base text-cyan-500 rounded-md w-44 h-11 items-center hover:bg-cyan-500 hover:text-white">
            Cadastrar
          </button>
         
            </form>

        </div>
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
    );
}