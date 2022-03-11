import Image from 'next/image';
import { Container } from '../Guide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Office({ id, title, summary, sourceImg, label, link }) {
  return (
    <Container key={id} newClasses='bg-baby-blue flex items-center mb-16 p-16 rounded-3xl'>
      <div className='col-span-5'>
        <h1 className='font-bold text-dark-gray text-6xl'>{title}</h1>
        <div className='flex my-12'>
          <FontAwesomeIcon className='mr-4 pt-2' icon={faLocationDot} />
          <p className='text-2xl'>{summary}</p>
        </div>
        <a className='bg-white block font-bold py-6 rounded-full text-center text-2xl text-soft-blue uppercase' href={link} title={label} target='_blank' rel='noreferrer'>{label}</a>
      </div>
      <div className='col-span-5 col-end-13'>
        <img src={sourceImg} alt={title} className='w-full h-auto' />
      </div>
    </Container>
  );
}
