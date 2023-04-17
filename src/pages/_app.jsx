import { SessionProvider } from 'next-auth/react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import 'cesium/Build/Cesium/Widgets/widgets.css';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
