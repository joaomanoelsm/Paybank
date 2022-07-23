import Header from './componentes/header/index';
import Bank from './pages/bank';
import Receive from './pages/receive';
import Transfer from './pages/transfer';
import Input from './componentes/input';
import Search from './componentes/search';
import Footer from './componentes/footer';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id='main'>
        <Routes>
          <Route path='/' element={<Bank />} />
          <Route path='receive' element={<Receive />} />
          <Route path='transfer' element={<Transfer />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
