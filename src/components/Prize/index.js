export default function Prize({ id, title, source }) {
  return (
    <div className='bg-white lg:col-span-3 col-span-4 flex flex-col items-center p-12 rounded-3xl' key={id}>
      <img src={source} alt={title} width='243' height='268' />
      <h1 className='font-bold mt-4 text-center text-2xl text-dark-gray'>{title}</h1>
    </div>
  );
}
