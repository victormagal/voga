import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Guide';

export default function Footer() {
  return (
    <>
      <div className='bg-dark-blue py-40'>
        <Container>
          <div className="lg:col-span-4">
            <Image
              src="/logo.svg"
              alt="Voga XP"
              width={351}
              height={86}
            />
          </div>
          <ul className='col-span-2 col-start-6'>
            <li>
              <Link href='/'>
                <a className='text-white'>Sobre a Voga</a>
              </Link>
            </li>
            <li className='my-8'>
              <Link href='/'>
                <a className='text-white'>Assessoria</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-white'>Voga Insights</a>
              </Link>
            </li>
          </ul>
          <ul className='col-span-2'>
            <li>
              <Link href='/'>
                <a className='text-white'>Contato</a>
              </Link>
            </li>
            <li className='mt-8'>
              <Link href='/'>
                <a className='text-white'>Termos de uso</a>
              </Link>
            </li>
          </ul>
          <div className='col-span-2 col-start-11'>
            <legend className='text-white mb-4'>Nossas redes:</legend>
            <ul className='flex flex-row justify-between'>
              <li>
                <a href='#this' target='_blank' title='Instagram'>
                  <Image
                    src="/instagram.svg"
                    alt="Instagram"
                    width={42}
                    height={42}
                  />
                </a>
              </li>
              <li>
                <a href='#this' target='_blank' title='Facebook'>
                  <Image
                    src="/facebook.svg"
                    alt="Facebook"
                    width={42}
                    height={42}
                  />
                </a>
              </li>
              <li>
                <a href='#this' target='_blank' title='LinkedIn'>
                  <Image
                    src="/linkedin.svg"
                    alt="LinkedIn"
                    width={42}
                    height={42}
                  />
                </a>
              </li>
              <li>
                <a href='#this' target='_blank' title='YouTube'>
                  <Image
                    src="/youtube.svg"
                    alt="YouTube"
                    width={42}
                    height={42}
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
                <a className='text-white'>Política de Privacidade</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-white'>Termos e Condições</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className='text-white'>Política de Cookies</a>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </>
  );
}
