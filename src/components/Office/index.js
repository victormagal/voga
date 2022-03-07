import { Container } from "../Guide";

export default function Office({ id, title, summary, sourceImg, label, link }) {
  return (
    <Container key={id} className="bg-baby-blue flex items-center mb-16 p-16 rounded-3xl">
      <div className='col-span-5'>
        <h1 className='font-bold text-dark-gray text-6xl'>{title}</h1>
        <p className='text-2xl my-12'>{summary}</p>
        <a className="bg-white block font-bold py-6 rounded-full text-center text-2xl text-soft-blue uppercase w-1/2" href={link} title={label}>{label}</a>
      </div>
      <div className="col-span-5 col-end-13">
        <img src={sourceImg} alt={title} className='w-full h-auto' />
      </div>
    </Container>
  );
}
