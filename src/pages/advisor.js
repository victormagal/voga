import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundVideo from '../components/ContainerWithBackgroundVideo';
import ContainerImageAndContent from '../components/ContainerImageAndContent';
import OpenAccount from '../components/OpenAccount';
import { Container } from '../components/Guide';

export default function Advisor() {
  return (
    <>
      <Header />
      <ContainerWithBackgroundVideo uri='/advisor.mp4'>
        <Container>
          <div className='lg:col-span-5 col-span-4 lg:py-44 pt-44'>
            <h1 className='font-bold text-6xl text-white'>Não ter medo de sonhar alto. Essa é uma das sentenças que guia a equipe da Voga Invest.</h1>
          </div>
          <div className='lg:col-span-6 col-span-4 lg:col-end-13 lg:py-44 pb-44'>
            <p className='text-xl text-white'>
              Carregamos no nosso DNA, e no nosso nome, a missão de caminhar lado a lado e direcionar para o melhor caminho. E, apesar de darmos o ritmo, nós colocamos você, seus objetivos e seus interesses pessoais sempre à frente. Somado a essa filosofia, a Voga Invest uniu um time de assessores altamente capacitados e chancelados pela XP Investimentos. Essa é a receita que vai garantir que seu patrimônio seja cuidado, aumentado e respeitado pelos profissionais mais atentos do mercado.
            </p>
            <p className='mt-8 text-xl text-white'>
              A nossa função é entender como podemos ajudar os nossos clientes, dos mais variados, desde um autônomo no começo de sua carreria, até as maiores empresas do país à alcançar seus objetivos futuros, por meio dos investimentos e se planejando para tal. Esse é nosso trabalho e é desse jeito que mudamos a vida dos mais de 4 mil clientes que estão sob nosso escritório.
            </p>
            <p className='mt-8 text-xl text-white'>
              Esse é nosso trabalho e é desse forma que mudamos a vida dos mais de 4 mil clientes que estão sob nosso escritório e ultrapassamos a marca de R$ 1,3 bilhões sob custódia.
            </p>
            <p className='mt-8 text-xl text-white'>
              A Voga Invest une o tradicional ao contemporâneo alinhando as melhores estratégias e práticas atuais do mercado para garantir o melhor resultado para você.
            </p>
          </div>
        </Container>
      </ContainerWithBackgroundVideo>
      <ContainerImageAndContent uri='/sucession.png' reversed={true}>
        <h1 className='font-bold mb-12 text-4xl text-dark-gray'>Sucessão Patrimonial</h1>
        <p className='mb-6'>
          Ideal para quem gosta de planejamento e quer garantir qualidade e padrão de vida para a família. 
        </p>
        <p className='mb-6'>
          A sucessão patrimonial cuida para que bens e direitos de herdeiros e outras pessoas sejam garantidos da maneira correta, evitando desgastes e esforços desnecessários.
        </p>
      </ContainerImageAndContent>
      <ContainerImageAndContent uri='/managment.png'>
        <h1 className='font-bold mb-12 text-4xl text-dark-gray'>Sucessão Patrimonial</h1>
        <p className='mb-6'>
          Ideal para quem gosta de planejamento e quer garantir qualidade e padrão de vida para a família. 
        </p>
        <p className='mb-6'>
          A sucessão patrimonial cuida para que bens e direitos de herdeiros e outras pessoas sejam garantidos da maneira correta, evitando desgastes e esforços desnecessários.
        </p>
      </ContainerImageAndContent>
      <OpenAccount />
      <Footer />
    </>
  )
}
