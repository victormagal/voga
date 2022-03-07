import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import OpenAccount from '../components/OpenAccount';
import { getOffices } from '../utils/queries';
import client from '../utils/client';

export default function Offices({ offices }) {
  console.log(offices);
  return (
    <>
      <Header />
      <ContainerWithBackgroundImage uri='/bg-header-about.png'>
        <div className='col-span-6 py-44'>
          <h1 className='font-bold text-6xl text-white'>Cuidar do seu patrimônio é coisa séria.</h1>
        </div>
        <div className='col-span-6 py-44'>
          <p className='text-xl text-white'>
            Por isso a Voga Invest mostra o respeito pelo seu investimento desde o primeiro contato. Nossos escritórios possuem estrutura robusta e moderna para receber bem você e para garantir que cuida do seu dinheiro trabalhe com a melhor condição para gerar melhores resultados. 
          </p>
          <p className='mt-8 text-xl text-white'>
            Atualmente a Voga Invest possuí 4 escritórios, sediados em Brasília, Goiânia e Belo Horizonte e Itajaí. Nosso quinto escritório começará em breve a funcionar em São Paulo.
          </p>
          <a className="bg-white block font-bold mt-12 py-6 rounded-full text-center text-2xl text-soft-blue uppercase w-1/2" href='#this' title='Abra sua conta'>CTA de visita</a>
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-sucession.png'>
        <div className='col-span-5 py-32'>
          <h1 className='font-bold mb-12 text-4xl text-dark-gray'>Sucessão Patrimonial</h1>
          <p className='mb-6'>
            Ideal para quem gosta de planejamento e quer garantir qualidade e padrão de vida para a família. 
          </p>
          <p className='mb-6'>
            A sucessão patrimonial cuida para que bens e direitos de herdeiros e outras pessoas sejam garantidos da maneira correta, evitando desgastes e esforços desnecessários.
          </p>
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-management.png'>
        <div className='col-span-5 col-start-8 py-32'>
          <h1 className='font-bold mb-12 text-4xl text-dark-gray'>Gestão Patrimonial</h1>
          <p>
            Para cuidar do fruto do seu trabalho, oferecemos uma consultoria focada na manutenção, administração e valorização dos patrimônios. Uma opção para quem busca tranquilidade, segurança e bons rendimentos.
          </p>
        </div>
      </ContainerWithBackgroundImage>
      <OpenAccount />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getOffices
  });

  const offices = data?.escritorios?.edges.map(({ node }) => node);
  
  return {
    props: {
      offices
    }
  }
}
