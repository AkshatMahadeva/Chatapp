import React from 'react';
import Navbar from './components/Navbar';
import Chat from './components/Chat';

import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `max-w-[728px] m-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative mt-4 overflow-auto`,
};

function App() {
  const [user] = useAuthState(auth);
   console.log(process.env.apiKey)
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default App;
