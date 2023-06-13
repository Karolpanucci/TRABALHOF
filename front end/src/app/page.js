"use client"
import Link from 'next/link';

export default async function Home() {

  const req = await fetch("http://localhost:3003/produto", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <main> <Link href="/cadastro" className='voltar'> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.codigo}>
          <p>{produtos.titulo}</p>
          <p>{produtos.descricao}</p>
          <Link href={`/produto/${produtos.codigo}`}>ver mais</Link>
        </div>
      ))}
    </main>
  )
}