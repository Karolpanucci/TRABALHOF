'use client'

import { useRouter } from "next/navigation";

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

    return (
        
        <div>
       <img src={produto.imagem}/>
          <p>{produto.titulo}</p>
          <p>{produto.descricao}</p>
          <p>{produto.preco}</p>
          <p>{produto.datacadastro}</p>
            <button onClick={e => e.preventDefault(remover())}>REMOVER</button>

        </div>

    )
}