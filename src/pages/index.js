import client from '../utils/client';
import { getProducts } from '../utils/queries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenAccount from '../components/OpenAccount';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import Product from '../components/Product';
import Image from 'next/image';

export default function Home({ products }) {
  return (
    <>
      <Header />
      <ContainerWithBackgroundImage uri='/bg-header-home.png'>
        <div className='col-span-6 col-start-4 flex flex-col items-center py-48'>
          <h1 className='font-bold text-5xl text-center text-white'>Invista agora e garanta o seu futuro</h1>
          <h2 className='my-11 text-xl text-center text-white'>Confie na autoridade de quem entende de verdade de investimento para conduzir você aos seus objetivos</h2>
          <a className="bg-white block font-bold py-6 rounded-full text-center text-2xl text-soft-blue uppercase w-1/2" href='#this' title='Abra sua conta'>Abra sua conta</a>
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-about-voga.png'>
        <div className='col-span-5 col-start-8 py-32'>
          <h1 className='font-bold mb-12 text-4xl text-dark-gray'>Prazer, somos a Voga Invest, seu parceiro de investimentos</h1>
          <p className='mb-6'>
            Nossa missão é cuidar da melhor maneira do que é importante para você. Fazermos isso com nossa autoridade no mercado financeiro e vasto conhecimento em investimentos.
          </p>
          <p className='mb-6'>
            Somos parceiros da plataforma XP Investimentos e queremos você também como parceiro.
          </p>
          <p className='font-bold mb-12'>
            Podemos ajudar você a chegar nos seus objetivos?
          </p>
          <a className="bg-dark-gray block font-bold py-3 rounded-full text-center text-white uppercase w-1/2" href='#this' title='Abra sua conta'>Conheça a Voga Invest</a>
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-products-home.png'>
        <div className='col-span-10 col-start-2 flex flex-col items-stretch py-32'>
          {products?.map(product => (
            <Product id={product.id} title={product.title} excerpt={product.excerpt} />
          ))}
          <a className="bg-soft-blue block font-bold py-3 rounded-full self-center text-center text-xl text-white uppercase w-5/12" href='#this' title='Abra sua conta'>Conheça a assessoria da Voga</a>
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-profiles-home.png'>
        <div className='col-span-6 py-32'>
          <h1 className='font-bold mb-16 text-4xl'>Solução para<br />todos os perfis</h1>
          <p className='text-xl mb-4'>
            A Voga entender que não importa qual o valor do investimento, mas qual a importância que você dá a ele. Investir é planejar um objetivo, um sonho e como sonhos não tem tamanho, na Voga você encontra soluções para todos os perfis. 
          </p>
          <p className='text-xl'>
            Nós acreditamos que a melhor maneira de entregar o resultado que você deseja é alinhando o seu perfil às opções mais coerentes com ele.
          </p>
        </div>
        <div className='col-span-5 col-start-8 py-32'>
          <div className='bg-dark-blue flex items-center p-8 rounded-3xl'>
            <Image
              src="/voga-digital-icon.svg"
              alt="Voga Digital"
              width={108}
              height={118}
            />
            <div className='ml-12'>
              <h1 className='mb-4 text-4xl text-white'>Voga Digital</h1>
              <p className='text-white'>para quem investe até <b>300 mil</b></p>
            </div>
          </div>
          <div className='bg-dark-blue flex items-center mt-12 p-8 rounded-3xl'>
            <Image
              src="/voga-private-icon.svg"
              alt="Voga Digital"
              width={108}
              height={118}
            />
            <div className='ml-12'>
              <h1 className='mb-4 text-4xl text-white'>Voga Private</h1>
              <p className='text-white'>para quem está no próximo nível e quer investir acida de <b>300 mil</b></p>
            </div>
          </div>
        </div>
      </ContainerWithBackgroundImage>
      <OpenAccount />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getProducts
  });

  const products = data?.produtos?.edges.map(({ node }) => node);
  
  return {
    props: {
      products
    }
  }
}
