import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../Guide';

export default function Header() {
  return (
    <div className="bg-dark-blue py-8">
      <Container>
        <div className="lg:col-span-3 flex items-stretch">
          <Image
            className="self-center"
            src="/logo.svg"
            alt="Voga XP"
            width={264}
            height={77}
          />
        </div>
        <ul className="lg:col-span-9 flex items-center justify-between">
          <li>
            <Link href="/">
              <a className="text-white hover:text-soft-blue">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="text-white hover:text-soft-blue">Sobre a Voga</a>
            </Link>
          </li>
          <li>
            <Link href="/advisor">
              <a className="text-white hover:text-soft-blue">Assessoria</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-white hover:text-soft-blue">Nossos Escritórios</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-white hover:text-soft-blue">Voga Insights</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-white hover:text-soft-blue">Contato</a>
            </Link>
          </li>
          <li>
            <a className="cursor-pointer font-bold bg-soft-blue px-6 py-4 rounded-full text-lg text-white uppercase" href="#this">Abra sua conta</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}
