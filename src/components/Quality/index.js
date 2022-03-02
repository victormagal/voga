export default function Quality({ id, title, excerpt }) {
  return (
    <div className='border-b border-soft-blue mb-8' key={id}>
      <h1 className='font-bold text-4xl text-dark-gray'>{title}</h1>
      <div className='py-2 text-2xl' dangerouslySetInnerHTML={{
        __html: excerpt
      }} />
    </div>
  );
}
