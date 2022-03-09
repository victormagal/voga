import Image from 'next/image';

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
      <div className='relative z-10'>
        {children}
      </div>
    </div>
  );
}
