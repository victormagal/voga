import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Office({ id, title, summary, sourceImg, label, link }) {
  return (
    <div key={id} className='bg-baby-blue lg:col-span-12 col-span-4 grid lg:grid-cols-12 grid-cols-4 gap-4 mb-16 lg:px-16 px-8 py-8 rounded-3xl'>
      <div className='lg:col-span-5 col-span-4 flex flex-col justify-center'>
        <h1 className='font-bold text-dark-gray text-6xl'>{title}</h1>
        <div className='flex my-12'>
          <FontAwesomeIcon className='mr-4 pt-2' icon={faLocationDot} />
          <p className='text-2xl'>{summary}</p>
        </div>
        <a className='bg-white block font-bold py-6 rounded-full text-center text-2xl text-soft-blue uppercase' href={link} title={label} target='_blank' rel='noreferrer'>{label}</a>
      </div>
      <div className='lg:col-span-5 col-span-4 mt-8 lt:mt-0 lg:col-end-13'>
        <img src={sourceImg} alt={title} className='w-full h-auto' />
      </div>
    </div>
  );
}
