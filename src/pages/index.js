import Image from 'next/image';
import { Container } from '../components/Guide';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';

export default function Offices() {
  return (
    <>
      <ContainerWithBackgroundImage uri='/bg-breve.png'>
        <Container newClasses='h-screen'>
          <div className='col-span-12 flex flex-col justify-center'>
            <Image
              alt='Voga Invest'
              height={86}
              quality={100}
              src='/logo.svg'
              width={351}
            />
            <h1 className='font-bold mb-6 text-3xl text-white text-center uppercase'>Site em manutenção...</h1>  
          </div>
        </Container>
      </ContainerWithBackgroundImage>
    </>
  )
}
