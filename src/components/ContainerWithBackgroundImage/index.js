import Image from 'next/image';

export default function ContainerWithBackgroundImage({ uri, children }) {
  return (
    <div className='relative'>
      <Image
        alt='Background Image'
        className='z-0'
        layout='fill'
        quality={100}
        objectFit='cover'
        objectPosition='center'
        src={uri}
      />
      <div className='relative z-10'>
        {children}
      </div>
    </div>
  );
}
