import Link from 'next/link';
import Head from 'next/head';
import { Container } from '../Guide';

export default function Header() {
  return (
    <>
      <Head>
        <title>Voga Invest | XP</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='bg-dark-blue py-8'>
        <Container>
          <div className='lg:col-span-3 flex items-stretch'>
            <img
              src='/logo.svg'
              alt='Voga Invest'
              width='264'
              height='77'
            />
          </div>
          <ul className='lg:col-span-9 flex items-center justify-between'>
            <li>
              <Link href='/'>
                <a className='text-white hover:text-soft-blue' title='Voga Invest'>Home</a>
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <a className='text-white hover:text-soft-blue' title='Sobre a Voga'>Sobre a Voga</a>
              </Link>
            </li>
            <li>
              <Link href='/advisor'>
                <a className='text-white hover:text-soft-blue' title='Assessoria'>Assessoria</a>
              </Link>
            </li>
            <li>
              <Link href='/offices'>
                <a className='text-white hover:text-soft-blue' title='Nossos Escritórios'>Nossos Escritórios</a>
              </Link>
            </li>
            {/* <li>
              <Link href='/'>
                <a className='text-white hover:text-soft-blue' title='Voga Insights'>Voga Insights</a>
              </Link>
            </li> */}
            <li>
              <Link href='/contact'>
                <a className='text-white hover:text-soft-blue' title='Contato'>Contato</a>
              </Link>
            </li>
            <li>
              <a className='cursor-pointer font-bold bg-soft-blue px-6 py-4 rounded-full text-lg text-white uppercase' href='https://cadastro.xpi.com.br/desktop/step/1' target='_blank' rel='noreferrer' title='Abra sua conta'>Abra sua conta</a>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
