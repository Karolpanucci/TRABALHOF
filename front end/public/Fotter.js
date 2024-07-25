import Link from 'next/link';

import Image from 'next/image';


export default async function Fotter() {
    return(
<>

<div className="mt-52 text-white bg-cyan-500 shadow-xs transition-shadow duration-300">
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
          </div>

</>
    );
}