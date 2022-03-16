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
      {/* <div>
        <Container newClasses='py-44'>
          <h1 className='sm:col-span-12 col-span-4 font-bold pb-12 text-5xl text-dark-gray'>Timeline Voga</h1>
          <div className='sm:col-span-12 col-span-4 flex sm:flex-col flex-row'>
            <div className='bg-soft-blue sm:h-5 h-full sm:mt-0 sm:w-full w-4 rounded-full'></div>
            <div className='flex sm:flex-row flex-col sm:justify-around sm:ml-0 -ml-6 sm:-mt-9 w-full'>
              <div className='cursor-pointer flex sm:flex-col flex-row items-center sm:py-0 py-6'>
                <div className='bg-dark-blue sm:h-12 h-8 sm:mb-6 rounded-full sm:w-12 w-8'></div>
                <div className='ml-4 sm:ml-0'>
                  <p className='font-bold sm:text-4xl text-2xl text-dark-blue'>2017</p>
                </div>
              </div>
              <div className='cursor-pointer flex sm:flex-col flex-row items-center sm:py-0 py-6'>
                <div className='bg-dark-blue sm:h-12 h-8 sm:mb-6 rounded-full sm:w-12 w-8'></div>
                <div className='ml-4 sm:ml-0'>
                  <p className='font-bold sm:text-4xl text-2xl text-dark-blue'>2018</p>
                </div>
              </div>
              <div className='cursor-pointer flex sm:flex-col flex-row items-center sm:py-0 py-6'>
                <div className='bg-dark-blue sm:h-12 h-8 sm:mb-6 rounded-full sm:w-12 w-8'></div>
                <div className='ml-4 sm:ml-0'>
                  <p className='font-bold sm:text-4xl text-2xl text-dark-blue'>2019</p>
                </div>
              </div>
              <div className='cursor-pointer flex sm:flex-col flex-row items-center sm:py-0 py-6'>
                <div className='bg-dark-blue sm:h-12 h-8 sm:mb-6 rounded-full sm:w-12 w-8'></div>
                <div className='ml-4 sm:ml-0'>
                  <p className='font-bold sm:text-4xl text-2xl text-dark-blue'>2020</p>
                </div>
              </div>
              <div className='cursor-pointer flex sm:flex-col flex-row items-center sm:py-0 py-6'>
                <div className='bg-dark-blue sm:h-12 h-8 sm:mb-6 rounded-full sm:w-12 w-8'></div>
                <div className='ml-4 sm:ml-0'>
                  <p className='font-bold sm:text-4xl text-2xl text-dark-blue'>2021</p>
                </div>
              </div>
              <div className='cursor-pointer flex sm:flex-col flex-row items-center sm:py-0 py-6'>
                <div className='bg-dark-blue sm:h-12 h-8 sm:mb-6 rounded-full sm:w-12 w-8'></div>
                <div className='ml-4 sm:ml-0'>
                  <p className='font-bold sm:text-4xl text-2xl text-dark-blue'>2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:col-span-12 col-span-4 grid sm:grid-cols-12 grid-cols-4 gap-4 sm:mt-24 mt-8'>
            <div className='sm:col-span-5 col-span-4'>
              <Image
                alt='Timeline Voga'
                height={411}
                quality={100}
                src='/timeline.png'
                width={641}
              />
            </div>
            <div className='sm:col-span-6 col-span-4 sm:col-end-13 flex items-center'>
              <p className='text-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel tellus lacinia, bibendum nulla nec, pretium nisi. Curabitur consequat tempus massa egestas cursus. 
              </p>
            </div>
          </div>
        </Container>
      </div> */}
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
