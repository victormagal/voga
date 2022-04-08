import Image from 'next/image';

export default function Home({ products }) {
  return (
    <div className='h-screen w-screen'>
      <Image
        alt='Em constução'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        quality={100}
        src='/breve.jpg'
      />
    </div>
  )
}
