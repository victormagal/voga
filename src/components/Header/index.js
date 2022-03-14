import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { Container } from '../Guide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Voga Invest | XP</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className='bg-dark-blue py-8'>
        <Container>
          <div className='col-span-3 flex items-stretch'>
            <Image
              alt='Voga Invest XP'
              height={77}
              quality={100}
              src='/logo.svg'
              width={264}
            />
          </div>
          <ul className='col-span-1 lg:hidden flex items-center justify-end'>
            <li>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <FontAwesomeIcon
                  className='text-white h-8 w-8'
                  icon={faBars}
                />
              </button>
            </li>
          </ul>
          {menuOpen &&
            <ul className='col-span-4 lg:hidden flex flex-col items-center space-y-6 pb-8'>
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
                <Link href='/open_account'>
                  <a className='cursor-pointer font-bold bg-soft-blue px-6 py-4 rounded-full text-lg text-white uppercase' title='Abra sua conta'>Abra sua conta</a>
                </Link>
              </li>
            </ul>
          }
          <ul className='lg:col-span-9 lg:flex hidden items-center justify-between'>
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
              <Link href='/open_account'>
                <a className='cursor-pointer font-bold bg-soft-blue px-6 py-4 rounded-full text-lg text-white uppercase' title='Abra sua conta'>Abra sua conta</a>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
