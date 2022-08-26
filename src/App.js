import Header from './componentes/header/index';
import Bank from './pages/bank';
import Receive from './pages/receive';
import Transfer from './pages/transfer';
import Loan from './pages/loan';
import Footer from './componentes/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erro from './pages/erro';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id='main'>
        <Routes>
          <Route path='/' element={<Bank />} />
          <Route path='receive' element={<Receive />} />
          <Route path='transfer' element={<Transfer />} />
          <Route path='loan' element={<Loan />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App
