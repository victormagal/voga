import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Guide';

export default function Footer() {
  return (
    <>
      <div className='bg-dark-blue lg:py-40 py-20'>
        <Container>
          <div className='col-span-4'>
            <Image
              alt='Voga Invest'
              height={86}
              quality={100}
              src='/logo.svg'
              width={351}
            />
          </div>
          <ul className='lg:col-span-2 col-span-4 lg:col-start-6 flex flex-col lg:items-start items-center space-y-4'>
            <li>
              <Link href='/about'>
                <a className='text-white' title='Sobre a Voga'>Sobre a Voga</a>
              </Link>
            </li>
            <li>
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
          <ul className='lg:col-span-2 col-span-4 flex flex-col lg:items-start items-center space-y-4'>
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
          <div className='lg:col-span-2 col-span-4 lg:col-end-13'>
            <legend className='text-white mb-4 lg:text-left text-center'>Nossas redes:</legend>
            <ul className='flex flex-row lg:justify-between justify-around'>
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
          <ul className='lg:col-span-8 col-span-4 lg:col-start-3 flex lg:flex-row flex-col items-center space-y-4 justify-between'>
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
