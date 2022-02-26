import { ApolloProvider } from '@apollo/client';
import client from '../utils/client';
import GlobalStyles from '../styles/global';
import '../styles/fonts.css';
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
