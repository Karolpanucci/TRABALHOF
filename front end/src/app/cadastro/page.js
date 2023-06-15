'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    const [preco, setPreco] = useState();
    const [dateCadastro, setDateCadastro] = useState();
    const [imagen, setImagen] = useState();
    
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
        <div className={styles.main}>
            <form  onSubmit={cadastrar}>
                <input
                    type="text"
                    placeholder='Titulo do produto:'
                    nome="titulo"
                    onChange={e => setTitulo(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='descrição do produto:'
                    nome="descricao"
                    onChange={e => setDescricao(e.target.value)}
                /><br/>
                <input
                    type="text"
                    placeholder='Preço atual:'
                    nome="preco"
                    onChange={e => setPreco(e.target.value)}
                /><br/>
                   <input
                    type="text"
                    placeholder='Imagen do produto:'
                    nome="imagen"
                    onChange={e => setImagen(e.target.value)}
                /><br/>
                   <input
                    type="date"
                    placeholder='Data Atual:'
                    nome="dateCadastro"
                    onChange={e => setDateCadastro(e.target.value)}
                /><br/>
                


                <button type='submit'>Cadastrar</button>
                <div>
                    <a href='/'>Voltar</a>
                </div>
            </form>
        </div>
    );
}