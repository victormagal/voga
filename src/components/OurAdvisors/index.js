import ContainerWithBackgroundImage from "../ContainerWithBackgroundImage";
import { Container } from "../Guide";

export default function OurAdvisors() {
  return (
    <ContainerWithBackgroundImage uri='/bg-our-advisors.png'>
      <Container>
        <div className='col-span-8 col-start-3 flex flex-col items-center py-72'>
          <h1 className='font-bold text-5xl text-white'>Conheça nossos assessores</h1>
          <h2 className='my-12 text-2xl text-center text-white'>Esse é o time de parceiros que está preparado para transformar seu sonho em realidade através das melhores opções de investimento.</h2>
          <a className="bg-soft-blue block drop-shadow-md font-medium px-20 py-6 rounded-full text-center text-2xl text-white" href='#this' title='Conheça quem vai cuidar de você e do seu investimento'>Conheça quem vai cuidar de você e do seu investimento</a>
        </div>
      </Container>
    </ContainerWithBackgroundImage>
  );
}
