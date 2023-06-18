'use client'

import { useRouter } from "next/navigation";
import Menu from "../../../../componentes/menu";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default async function Produto({ params }) {
    const router = useRouter();

    const req = await fetch("http://localhost:3003/produto/" + params.codigo, {
        method: "GET",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' }
    })
    const res = await req.json();
    const produto = res[0];

    const remover = () => {
        const codigoJson= JSON.stringify({codigo: produto.codigo})
     
        try {
            fetch("http://localhost:3003/produto", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body:codigoJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }

    const produtos = {
        dataCadastro: new Date() // Data de exemplo
      };
      
      // Obtém as partes da data
      const dia = produtos.dataCadastro.getDate().toString().padStart(2, '0');
      const mes = (produtos.dataCadastro.getMonth() + 1).toString().padStart(2, '0');
      const ano = produtos.dataCadastro.getFullYear();
      
      // Formata a data no formato "dd/mm/aaaa"
      const dataFormatada = `${dia}/${mes}/${ano}`;

    return (
        
        <div>
            <Menu/>
              <div><Link href="/" className=" flex ml-28 mt-7 "><ChevronLeft/>Voltar</Link></div>
            <div className="font-normal text-sm text-slate-900 ml-28 mt-10">Você esta vizualiznado:<spam className="font-medium text-base text-slate-800 "> {produto.titulo}</spam> </div>
           
           <div className="grid grid-cols-2">
                      <div className="ml-28  mt-8"> <img className="rounded-[5px]" width={500} height={600} src={produto.imagem}/></div>
                   <div className="mt-10 "> <spam className="font-bold text-2xl text-slate-600 " >{produto.titulo}</spam>
                     <div className=" font-normal text-base w-80 text-cyan-500">{produto.descricao}</div>
                    <div className=" mt-5 font-normal text-sm w-80 text-slate-800 ">A partir de :</div>
                    <div className=" font-bold text-5xl w-80 mt-3  text-cyan-500">R{produto.preco}</div>
                    <button className="mt-5 border border-cyan-500 text-base text-cyan-500 rounded-md w-44 h-11 items-center hover:bg-cyan-500 hover:text-white" onClick={e => e.preventDefault(remover())}>REMOVER</button>
                    <div className=" mt-5 font-normal text-sm w-80 text-slate-800  ">Data de cadastro: {dataFormatada}</div>
                   
                        </div>   

           </div>
        </div>

    )
}