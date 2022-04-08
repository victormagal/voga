import client from '../utils/client';
import { getProducts } from '../utils/queries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenAccount from '../components/OpenAccount';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import ContainerWithBackgroundVideo from '../components/ContainerWithBackgroundVideo';
import ContainerImageAndContent from '../components/ContainerImageAndContent';
import Product from '../components/Product';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../components/Guide';
import Slider from '../components/Slider';

export default function Home({ products }) {
  return (
    <>
      <Header />
      <ContainerWithBackgroundVideo uri='/home.mp4'>
        <Container>
          <div className='lg:col-span-6 col-span-4 lg:col-start-4 flex flex-col items-center py-48'>
            <h1 className='font-bold text-5xl text-center text-white'>Invista agora e garanta o seu futuro</h1>
            <h2 className='my-11 text-xl text-center text-white'>Confie na autoridade de quem entende de verdade de investimento para conduzir você aos seus objetivos</h2>
            <Link href='/open_account'>
              <a className='bg-white block font-bold py-6 rounded-full text-center text-2xl text-soft-blue uppercase lg:w-1/2 w-full' title='Abra sua conta'>Abra sua conta</a>
            </Link>
          </div>
        </Container>
      </ContainerWithBackgroundVideo>
      <ContainerImageAndContent uri='/woman.png'>
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
        <Link href='/about'>
          <a className='bg-dark-gray block font-bold py-3 rounded-full text-center text-white uppercase lg:w-1/2 w-full' title='Conheça a Voga Invest'>Conheça a Voga Invest</a>
        </Link>
      </ContainerImageAndContent>
      <ContainerWithBackgroundImage uri='/bg-products-home.png'>
        <Container>
          <div className='lg:col-span-10 col-span-4 lg:col-start-2 flex flex-col items-stretch py-32'>
            {products?.map(product => (
              <Product key={product.id} title={product.title} excerpt={product.excerpt} />
            ))}
            <Link href='/advisor'>
              <a className='bg-soft-blue block font-bold py-3 rounded-full self-center text-center text-lg text-white uppercase lg:w-5/12 w-full'  title='Conheça a assessoria da Voga'>Conheça a assessoria da Voga</a>
            </Link>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-profiles-home.png'>
        <Container newClasses='py-32'>
          <div className='lg:col-span-6 col-span-4'>
            <h1 className='font-bold mb-16 text-4xl'>Solução para<br />todos os perfis</h1>
            <p className='text-xl mb-4'>
              A Voga entender que não importa qual o valor do investimento, mas qual a importância que você dá a ele. Investir é planejar um objetivo, um sonho e como sonhos não tem tamanho, na Voga você encontra soluções para todos os perfis. 
            </p>
            <p className='text-xl'>
              Nós acreditamos que a melhor maneira de entregar o resultado que você deseja é alinhando o seu perfil às opções mais coerentes com ele.
            </p>
          </div>
          <div className='lg:col-span-5 col-span-4 lg:col-end-13 lg:mt-0 mt-12'>
            <div className='bg-dark-blue flex items-center p-8 rounded-3xl'>
              <Image
                alt='Voga Digital'
                height={118}
                quality={100}
                src='/voga-digital-icon.svg'
                width={108}
              />
              <div className='ml-12'>
                <h1 className='mb-4 text-4xl text-white'>Voga Digital</h1>
                <p className='text-white'>para quem investe até <b>300 mil</b></p>
              </div>
            </div>
            <div className='bg-dark-blue flex items-center mt-12 p-8 rounded-3xl'>
              <Image
                alt='Voga Private'
                height={118}
                quality={100}
                src='/voga-private-icon.svg'
                width={108}
              />
              <div className='ml-12'>
                <h1 className='mb-4 text-4xl text-white'>Voga Private</h1>
                <p className='text-white'>para quem está no próximo nível e quer investir acida de <b>300 mil</b></p>
              </div>
            </div>
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      {/* <div className='bg-soft-blue'>
        <Container newClasses='py-44'>
          <Slider />
        </Container>
      </div>
      <ContainerWithBackgroundImage uri='/bg-midia.png'>
        <Container newClasses='py-44'>
          <h1 className='lg:col-span-12 col-span-4 font-bold pb-24 text-5xl text-center text-dark-gray'>Voga na Mídia</h1>
          <Slider />
        </Container>
      </ContainerWithBackgroundImage> */}
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
    },
    revalidate: 600
  }
}
