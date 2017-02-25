import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Todo from '../Todo';
import './style.less';

function App() {
  return (
    <div className="app">
      <Header title="Hola!" />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
