import { Container } from '../Guide';

export default function ContainerWithBackgroundVideo({ uri, children }) {
  return (
    <div className='relative'>
      <video
        autoPlay
        className='absolute h-full w-full object-cover z-0'
        loop
        muted
      >
        <source src={uri} type='video/mp4' />
      </video>
      <Container className='relative z-10'>
        {children}
      </Container>
    </div>
  );
}
