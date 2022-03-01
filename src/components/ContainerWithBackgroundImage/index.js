import Image from 'next/image';
import { Container } from '../Guide';

export default function ContainerWithBackgroundImage({ uri, children }) {
  return (
    <div className='relative'>
      <Image
        className='z-0'
        src={uri}
        alt='Background Image'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <Container className='relative z-10'>
        {children}
      </Container>
    </div>
  );
}
