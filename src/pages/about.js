import client from '../utils/client';
import { getQualitiesAndPrizes } from '../utils/queries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurAdvisors from '../components/OurAdvisors';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import ContainerWithBackgroundVideo from '../components/ContainerWithBackgroundVideo';
import Quality from '../components/Quality';
import Prize from '../components/Prize';
import Image from 'next/image';
import { Container } from '../components/Guide';

export default function About({ qualities, prizes }) {
  return (
    <>
      <Header />
      <ContainerWithBackgroundVideo uri='/about.mp4'>
        <Container>
          <div className='lg:col-span-6 col-span-4 lg:py-44 pt-44'>
            <h1 className='font-bold text-6xl text-white'>Nós sabemos quanto esforço é necessário para formar um bom patrimônio.</h1>
          </div>
          <div className='lg:col-span-6 col-span-4 lg:py-44 pb-44'>
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
        </Container>
      </ContainerWithBackgroundVideo>
      <ContainerWithBackgroundImage uri='/bg-qualities-about.png'>
        <Container>
          <div className='lg:col-span-6 col-span-4 flex flex-col justify-center lg:pt-0 pt-40'>
            <h1 className='font-bold mb-8 text-4xl text-dark-gray'>Nossos Valores</h1>
            <Image
              alt="Nossos Valores"
              height={369}
              quality={100}
              src="/qualities-about.png"
              width={582}
            />
          </div>
          <div className='lg:col-span-6 col-span-4 lg:py-40 pb-40'>
            {qualities?.map(quality => (
              <Quality key={quality.id} title={quality.title} excerpt={quality.excerpt} />
            ))}
          </div>
        </Container>
      </ContainerWithBackgroundImage>
      <ContainerWithBackgroundImage uri='/bg-prizes-about.png'>
        <Container>
          <h1 className='font-bold mb-4 pt-32 text-4xl text-white'>Prêmios</h1>
          <div className='lg:col-span-12 col-span-4 pb-32 grid lg:grid-cols-12 grid-cols-4 gap-4'>
            {prizes?.map(prize => (
              <Prize key={prize.id} title={prize.title} source={prize.featuredImage.node.sourceUrl} />
            ))}
          </div>
        </Container>
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
    },
    revalidate: 600
  }
}
