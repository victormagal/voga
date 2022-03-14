import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from '../components/Guide';

export default function Offices() {
  return (
    <>
      <Header />
      <div className='bg-bottom bg-mail-response bg-no-repeat -my-mail'>
        <Container newClasses='h-screen flex items-center'>
          <div className='col-span-4 lg:col-start-5'>
            <h1 className='font-bold mb-6 text-5xl text-dark-gray text-center uppercase'>Tente mais tarde.</h1>
            <p className='text-2xl text-center'>Infelizmente sua solicitação não foi completada.</p>  
          </div>
        </Container>
      </div>
      <Footer />
    </>
  )
}
