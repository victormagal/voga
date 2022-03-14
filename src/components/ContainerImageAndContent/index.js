import Image from 'next/image';

export default function ContainerImageAndContent({ uri, children }) {
  return (
    <div className='flex lg:flex-row flex-col items-center'>
      <div className='relative h-image lg:w-1/2 w-full'>
        <Image
          alt='Prazer, somos a Voga Invest, seu parceiro de investimentos'
          layout='fill'
          objectFit='cover'
          quality={100}
          src={uri}
        />
      </div>
      <div className='lg:px-20 px-4 lg:py-0 py-20 lg:w-1/2 w-full'>
        {children}
      </div>
    </div>
  );
}
