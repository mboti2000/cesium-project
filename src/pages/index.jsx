import { Suspense, lazy } from 'react';
import { useSession } from 'next-auth/react';

import LoginButton from '@/components/LoginButton';

const Cesium = lazy(() => import('../components/Cesium'));

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="h-[100%] mt-[60px]">
      <div className="max-w-[1200px] mx-auto h-[600px] text-black">
        <Suspense fallback={'Loading...'}>
          {session ? (
            <Cesium />
          ) : (
            <div className="flex flex-col gap-5 items-center">
              <p className="font-bold text-[18px]">
                Please login with your Google account to use the application.
              </p>
              <LoginButton />
            </div>
          )}
        </Suspense>
      </div>
    </main>
  );
}
