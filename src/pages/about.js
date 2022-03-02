import client from '../utils/client';
import { getQualitiesAndPrizes } from '../utils/queries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurAdvisors from '../components/OurAdvisors';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import Quality from '../components/Quality';
import Prize from '../components/Prize';
import Image from 'next/image';

export default function Home({ qualities, prizes }) {
  console.log(qualities);
  console.log(prizes);
  return (
    <>
      <Header />
      <ContainerWithBackgroundImage uri='/bg-header-about.png'>
        <div className='col-span-6 flex items-stretch py-44'>
          <h1 className='font-bold text-6xl text-white self-center'>Nós sabemos quanto esforço é necessário para formar um bom patrimônio.</h1>
        </div>
        <div className='col-span-6 py-44'>
          <p className='text-xl text-white'>
            E assim como você, jamais deixaríamos o fruto de tanto trabalho nas mãos de qualquer pessoa para cuidar.   
          </p>
          <p className='mt-8 text-xl text-white'>
            A Voga Invest nasce desse propósito para tratar com seriedade, autoridade e parceria bem próxima do que é importante para você.
          </p>
          <p className='mt-8 text-xl text-white'>
            Para quem quer fazer o dinheiro render tempo é fundamental. Por isso formamos um time com alta expertise para que você não desperdice seu tempo à toa e não precise quebrar a cabeça tentando pesquisar tudo por conta própria.
          </p>
          <p className='mt-8 text-xl text-white'>
            Com a Voga como parceira, você está cada vez mais perto dos seus objetivos e cada vez sonhando mais alto.
          </p>
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-qualities-about.png'>
        <div className='col-span-6 flex flex-col justify-center'>
          <h1 className='font-bold mb-8 text-4xl text-dark-gray'>Nossos Valores</h1>
          <Image
            src="/qualities-about.png"
            alt="Nossos Valores"
            width={582}
            height={369}
          />
        </div>
        <div className='col-span-6 py-40'>
          {qualities?.map(quality => (
            <Quality key={quality.id} title={quality.title} excerpt={quality.excerpt} />
          ))}
        </div>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-prizes-about.png'>
        <h1 className='font-bold mb-4 pt-32 text-4xl text-white'>Prêmios</h1>
        <div className='col-span-12 pb-32 grid grid-cols-12 gap-4'>
          {prizes?.map(prize => (
            <Prize key={prize.id} title={prize.title} source={prize.featuredImage.node.sourceUrl} />
          ))}
        </div>
      </ContainerWithBackgroundImage>
      <OurAdvisors />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getQualitiesAndPrizes
  });

  const qualities = data?.valores?.edges.map(({ node }) => node);
  const prizes = data?.premios?.edges.map(({ node }) => node);
  
  return {
    props: {
      qualities,
      prizes
    }
  }
}