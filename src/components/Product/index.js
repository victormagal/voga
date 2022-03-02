export default function Product({ id, title, excerpt }) {
  return (
    <div className=' border-b border-dark-gray mb-8' key={id}>
      <h1 className='font-bold text-3xl text-dark-gray'>{title}</h1>
      <div className='py-2 text-lg text-dark-gray' dangerouslySetInnerHTML={{
        __html: excerpt
      }} />
    </div>
  );
}
