import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundVideo from '../components/ContainerWithBackgroundVideo';
import OpenAccount from '../components/OpenAccount';
import { getOffices } from '../utils/queries';
import client from '../utils/client';
import { Container } from '../components/Guide';
import Office from '../components/Office';

export default function Offices({ offices }) {
  return (
    <>
      <Header />
      <ContainerWithBackgroundVideo uri='/offices.mp4'>
        <Container>
          <div className='lg:col-span-6 col-span-4 pt-44 lg:pb-96 pb-0'>
            <h1 className='font-bold text-6xl text-white'>Cuidar do seu patrimônio é coisa séria.</h1>
          </div>
          <div className='lg:col-span-6 col-span-4 lg:pt-44 pt-0 lg:pb-96 pb-44'>
            <p className='text-xl text-white'>
              Por isso a Voga Invest mostra o respeito pelo seu investimento desde o primeiro contato. Nossos escritórios possuem estrutura robusta e moderna para receber bem você e para garantir que cuida do seu dinheiro trabalhe com a melhor condição para gerar melhores resultados. 
            </p>
            <p className='mt-8 text-xl text-white'>
              Atualmente a Voga Invest possuí 4 escritórios, sediados em Brasília, Goiânia e Belo Horizonte e Itajaí. Nosso quinto escritório começará em breve a funcionar em São Paulo.
            </p>
            <a className="bg-white block font-bold mt-12 py-6 rounded-full text-center text-2xl text-soft-blue uppercase lg:w-1/2 w-full" href='#this' title='Abra sua conta'>CTA de visita</a>
          </div>
        </Container>
      </ContainerWithBackgroundVideo>
      <Container newClasses='mb-16 lg:-mt-64 -mt-20 relative z-20'>
        <div className='lg:col-span-12 col-span-4'>
          <a href='https://goo.gl/maps/A4UZSBaAMQkQPj8b9' target='_blank' rel='noreferrer'>
            <img
              alt='Escritórios'
              className='w-full h-auto'
              src=' /map.png'
            />
          </a>
        </div>
      </Container>
      <Container>
        {offices?.map(office => (
          <Office
            key={office.id}
            title={office.title}
            summary={office.content_escritorio.summary}
            sourceImg={office.featuredImage.node.sourceUrl}
            label={office.content_escritorio.label}
            link={office.content_escritorio.link}
          />
        ))}
      </Container>
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
    },
    revalidate: 600
  }
}
