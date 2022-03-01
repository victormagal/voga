import ContainerWithBackgroundImage from "../ContainerWithBackgroundImage";

export default function OpenAccount() {
  return (
    <ContainerWithBackgroundImage uri='/bg-open-account.png'>
      <div className='col-span-6 col-start-4 flex flex-col items-center py-72'>
        <h1 className='font-bold text-5xl text-white'>Abra sua conta agora</h1>
        <a className="bg-white block font-bold mt-12 py-6 rounded-full text-center text-3xl text-soft-blue w-1/2" href='#this' title='Abra sua conta'>Abra sua conta</a>
      </div>
    </ContainerWithBackgroundImage>
  );
}
