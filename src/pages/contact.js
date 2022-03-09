import Header from '../components/Header';
import Footer from '../components/Footer';
import ContainerWithBackgroundVideo from '../components/ContainerWithBackgroundVideo';
import OpenAccount from '../components/OpenAccount';
import { getLocations } from '../utils/queries';
import client from '../utils/client';
import { Container } from '../components/Guide';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

export default function Offices({ locations }) {
  return (
    <>
      <Header />
      <ContainerWithBackgroundVideo uri='/contact.mp4'>
        <Container>
          <div className='col-span-6 py-56'>
            <h1 className='font-bold text-6xl text-white'>Fale com a VOGA</h1>
          </div>
        </Container>
      </ContainerWithBackgroundVideo>
      <Container newClasses='flex items-center py-48'>
        <div className='col-span-5'>
          <div className='flex'>
            <FontAwesomeIcon className='mr-4 pt-2' icon={faPhone} />
            <p className='text-2xl'>
              +55 61 3256-3080
            </p>
          </div>
          <div className='flex mt-12'>
            <FontAwesomeIcon className='mr-4 pt-2' icon={faEnvelope} />
            <p className='text-2xl'>
              contato@vogainvest.com
            </p>
          </div>
          {locations?.map(location => (
            <div className='flex mt-12' key={location.id}>
              <FontAwesomeIcon className='mr-4 pt-2' icon={faLocationDot} />
              <p className='text-2xl'>
                <span className='font-bold text-3xl'>{location.title}: </span>{location.content_escritorio.summary}
              </p>
            </div>
          ))}
        </div>
        <div className='col-span-6 col-end-13'>
          <Formik
            initialValues={{
              nome: '',
              email: '',
              telefone: '',
              mensagem: ''
            }}
            validationSchema={Yup.object({
              nome: Yup.string().required('Campo obrigatório'),
              email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
              telefone: Yup.string().required('Campo obrigatório'),
              mensagem: Yup.string().required('Campo obrigatório')
            })}
            onSubmit={async values => {
              fetch('/api/mail', {
                method: 'POST',
                body: JSON.stringify(values)
              }).then(res => {
                res.status === 200 ? console.log('Email enviado') : console.log('Ocorreu algum erro, tente novamente mais tarde');
              })
            }}
          >
            {({ errors, values }) => (
              <Form>
                <ul className='flex flex-col'>
                  <li className='mb-12'>
                    <Field className={`${errors.nome ? 'bg-baby-red' : 'bg-baby-blue'} font-medium placeholder:text-dark-blue p-8 rounded-3xl text-2xl text-dark-blue w-full`} name='nome' placeholder='Nome' type='text' value={values.nome} />
                    {errors.nome && <p className='mt-2 text-red'>{errors.nome}</p>}
                  </li>
                  <li className='mb-12'>
                    <Field className={`${errors.email ? 'bg-baby-red' : 'bg-baby-blue'} font-medium placeholder:text-dark-blue p-8 rounded-3xl text-2xl text-dark-blue w-full`} name='email' placeholder='E-mail' type='email' value={values.email} />
                    {errors.email && <p className='mt-2 text-red'>{errors.email}</p>}
                  </li>
                  <li className='mb-12'>
                    <Field className={`${errors.telefone ? 'bg-baby-red' : 'bg-baby-blue'} font-medium placeholder:text-dark-blue p-8 rounded-3xl text-2xl text-dark-blue w-full`} name='telefone' placeholder='Telefone' type='text' value={values.telefone} />
                    {errors.telefone && <p className='mt-2 text-red'>{errors.telefone}</p>}
                  </li>
                  <li className='mb-12'>
                    <Field as='textarea' className={`${errors.mensagem ? 'bg-baby-red' : 'bg-baby-blue'} font-medium h-56 placeholder:text-dark-blue p-8 rounded-3xl text-2xl text-dark-blue w-full`} name='mensagem' placeholder='Mensagem' value={values.mensagem} />
                    {errors.mensagem && <p className='mt-2 text-red'>{errors.mensagem}</p>}
                  </li>
                  <li>
                    <button className='cursor-pointer font-bold bg-soft-blue px-12 py-4 rounded-full text-lg text-white' type='submit'>Enviar Mensagem</button>
                  </li>
                </ul>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
      <OpenAccount />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getLocations
  });

  const locations = data?.escritorios?.edges.map(({ node }) => node);

  return {
    props: {
      locations
    }
  }
}
