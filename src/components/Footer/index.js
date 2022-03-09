import Link from 'next/link';
import { Container } from '../Guide';

export default function Footer() {
  return (
    <>
      <div className='bg-dark-blue py-40'>
        <Container>
          <div className="lg:col-span-4">
            <img
              src='/logo.svg'
              alt='Voga Invest'
              width='351'
              height='86'
            />
          </div>
          <ul className='col-span-2 col-start-6'>
            <li>
              <Link href='/about'>
                <a className='text-white' title='Sobre a Voga'>Sobre a Voga</a>
              </Link>
            </li>
            <li className='my-8'>
              <Link href='/advisor'>
                <a className='text-white' title='Assessoria'>Assessoria</a>
              </Link>
            </li>
            {/* <li>
              <Link href='/'>
                <a className='text-white' title='Voga Insights'>Voga Insights</a>
              </Link>
            </li> */}
          </ul>
          <ul className='col-span-2'>
            <li>
              <Link href='/offices'>
                <a className='text-white' title='Nossos Escritórios'>Nossos Escritórios</a>
              </Link>
            </li>
            <li className='mt-8'>
              <Link href='/contact'>
                <a className='text-white' title='Contato'>Contato</a>
              </Link>
            </li>
          </ul>
          <div className='col-span-2 col-start-11'>
            <legend className='text-white mb-4'>Nossas redes:</legend>
            <ul className='flex flex-row justify-between'>
              <li>
                <a href='https://www.instagram.com/vogainvest/' target='_blank' rel='noreferrer' title='Instagram'>
                  <img
                    src='/instagram.svg'
                    alt='Instagram'
                    width='42'
                    height='42'
                  />
                </a>
              </li>
              <li>
                <a href='https://www.facebook.com/vogainvest' target='_blank' rel='noreferrer' title='Facebook'>
                  <img
                    src='/facebook.svg'
                    alt='Facebook'
                    width='42'
                    height='42'
                  />
                </a>
              </li>
              <li>
                <a href='https://www.linkedin.com/company/vogainvest/' target='_blank' rel='noreferrer' title='LinkedIn'>
                  <img
                    src='/linkedin.svg'
                    alt='LinkedIn'
                    width='42'
                    height='42'
                  />
                </a>
              </li>
              <li>
                <a href='https://www.youtube.com/channel/UC-QSaUjQOgNz6MdBUSt3rVg' target='_blank' rel='noreferrer' title='YouTube'>
                  <img
                    src='/youtube.svg'
                    alt='YouTube'
                    width='42'
                    height='42'
                  />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className='bg-soft-blue py-8'>
        <Container>
          <ul className='col-span-8 col-start-3 flex flex-row justify-between'>
            <li>
              <Link href='/'>
                <a className='text-white' title='Política de Privacidade'>Política de Privacidade</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-white' title='Termos e Condições'>Termos e Condições</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-white' title='Política de Cookies'>Política de Cookies</a>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
