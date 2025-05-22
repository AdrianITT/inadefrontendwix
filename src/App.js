import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body/Body';


function App() {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
