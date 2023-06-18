import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AtualizarProduto() {
  const router = useRouter();
  const { codigo } = router.query;
  const [produto, setProduto] = useState(null);

  // Simulação de busca do produto no banco de dados
  useEffect(() => {
    // Substitua esta simulação com a lógica para buscar o produto pelo código no banco de dados
    const buscarProduto = async () => {
      // Simulação de requisição assíncrona para buscar o produto
      const response = await fetch(`http://localhost:3003/produto/${codigo}`);
      const data = await response.json();
      setProduto(data);
    };

    if (codigo) {
      buscarProduto();
    }
  }, [codigo]);

  // Função para atualizar o produto no banco de dados
  const atualizarProduto = async () => {
    // Substitua esta simulação com a lógica para atualizar o produto no banco de dados
    const response = await fetch(`http://localhost:3003/produto/${codigo}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(produto),
    });

    if (response.ok) {
      alert('Produto atualizado com sucesso!');
      // Redirecionar para a página de detalhes do produto após a atualização
      router.push(`/produto/${codigo}`);
    } else {
      alert('Erro ao atualizar o produto.');
    }
  };

  // Verificar se o produto está sendo carregado
  if (!produto) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <h1>Atualizar Produto</h1>
      <p>Código do Produto: {codigo}</p>

      {/* Formulário para atualizar os dados do produto */}
      <form>
        <input
          type="text"
          value={produto.titulo}
          onChange={(e) => setProduto({ ...produto, titulo: e.target.value })}
        />
        <input
          type="text"
          value={produto.descricao}
          onChange={(e) => setProduto({ ...produto, descricao: e.target.value })}
        />
        <input
          type="text"
          value={produto.preco}
          onChange={(e) => setProduto({ ...produto, preco: e.target.value })}
        />

        <button type="button" onClick={atualizarProduto}>
          Atualizar
        </button>
      </form>
    </div>
  );
}
