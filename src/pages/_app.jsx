import { SessionProvider } from 'next-auth/react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import 'cesium/Build/Cesium/Widgets/widgets.css';
import { Ion } from 'cesium';

Ion.defaultAccessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYjA1NzEzZi1iZDUwLTQwNWItYTI5Yy1mYjQzNjkyMWY1NmQiLCJpZCI6MTMzNzc2LCJpYXQiOjE2ODE3MzgzOTF9.WmRIZMZgIyGHZV_vIJdghfg8xD8Fj1FqeJXXfj2RCSs';

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
