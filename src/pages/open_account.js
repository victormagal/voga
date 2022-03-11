import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundVideo from '../components/ContainerWithBackgroundVideo';
import { Container } from '../components/Guide';

export default function Offices() {
  return (
    <>
      <Header />
      <ContainerWithBackgroundVideo uri='/home.mp4'>
        <Container>
          <div className='col-span-6 py-60'>
            <h1 className='font-bold text-6xl text-white'>Abra sua conta!</h1>
          </div>
        </Container>
      </ContainerWithBackgroundVideo>
      <Container newClasses='mb-16 -mt-32 relative z-20'>
        <div className='col-span-12'>
          <iframe className='w-full' height={1200} src="https://cadastro.xpi.com.br/desktop/step/1" title="Abra sua conta"></iframe>
        </div>
      </Container>
      <Footer />
    </>
  )
}
