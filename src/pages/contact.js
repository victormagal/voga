import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundImage from '../components/ContainerWithBackgroundImage';
import OpenAccount from '../components/OpenAccount';
import { getLocations } from '../utils/queries';
import client from '../utils/client';
import { Container } from '../components/Guide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Offices({ locations }) {
  return (
    <>
      <Header />
      <ContainerWithBackgroundImage uri='/bg-header-contact.png'>
        <div className='col-span-6 py-56'>
          <h1 className='font-bold text-6xl text-white'>Fale com a VOGA</h1>
        </div>
      </ContainerWithBackgroundImage>
      <Container className='py-48'>
        <div className='col-span-5'>
          <div className='flex'>
            <FontAwesomeIcon className='mr-4 pt-2' icon={faPhone} />
            <p className='text-2xl'>
              +55 61 3256-3080
            </p>
          </div>
          <div className='flex mt-12'>
            <FontAwesomeIcon className='mr-4 pt-2' icon={faEnvelope} />
            <p className='text-2xl'>
              contato@vogainvest.com
            </p>
          </div>
          {locations?.map(location => (
            <div className='flex mt-12' key={location.id}>
              <FontAwesomeIcon className='mr-4 pt-2' icon={faLocationDot} />
              <p className='text-2xl'>
                <span className='font-bold text-3xl'>{location.title}: </span>{location.content_escritorio.summary}
              </p>
            </div>  
          ))}
        </div>
        <div className='col-span-6 col-end-13'></div>
      </Container>
      <OpenAccount />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getLocations
  });

  const locations = data?.escritorios?.edges.map(({ node }) => node);
  
  return {
    props: {
      locations
    }
  }
}
