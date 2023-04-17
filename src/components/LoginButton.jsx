import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const LoginButton = () => {
  const { data: session } = useSession();

  const handleAuth = () => {
    if (session) {
      signOut();
    } else {
      signIn('google');
    }
  };

  return (
    <button
      onClick={handleAuth}
      className="p-2 border-white border-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
    >
      {session ? 'Logout' : 'Login'}
    </button>
  );
};

export default LoginButton;
