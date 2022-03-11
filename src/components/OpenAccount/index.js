import Link from 'next/link';
import ContainerWithBackgroundImage from '../ContainerWithBackgroundImage';
import { Container } from '../Guide';

export default function OpenAccount() {
  return (
    <ContainerWithBackgroundImage uri='/bg-open-account.png'>
      <Container>
        <div className='col-span-6 col-start-4 flex flex-col items-center py-72'>
          <h1 className='font-bold text-5xl text-white'>Abra sua conta agora</h1>
          <Link href='/open_account'>
            <a className='bg-white block font-bold mt-12 py-6 rounded-full text-center text-2xl text-soft-blue uppercase w-1/2' title='Abra sua conta'>Abra sua conta</a>
          </Link>
        </div>
      </Container>
    </ContainerWithBackgroundImage>
  );
}
