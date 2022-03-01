import client from '../utils/client';
import { getOffices } from '../utils/queries';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OpenAccount from '../components/OpenAccount';

export default function Home({ offices }) {
  return (
    <>
      {/* {offices?.map(office => (
        <div key={office.id}>
          <h1>{office.title}</h1>
          <p dangerouslySetInnerHTML={{
            __html: office.excerpt
          }} />
        </div>
      ))} */}
      <Header />
      <OpenAccount />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getOffices
  });

  const offices = data?.escritorios?.edges.map(({ node }) => node);
  
  return {
    props: {
      offices
    }
  }
}
