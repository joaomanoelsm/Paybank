import Header from './componentes/header/index';
import Bank from './pages/bank';
import Receive from './pages/receive';
import Transfer from './pages/transfer';
import Loan from './pages/loan';
import Footer from './componentes/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erro from './pages/erro';
import Credit from './pages/credit';
import AddCard from './pages/credit/addCard';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main id='main'>
        <Routes>
          <Route path='/Paybank' element={<Bank />} />
          <Route path='/Paybank/receive' element={<Receive />} />
          <Route path='/Paybank/transfer' element={<Transfer />} />
          <Route path='/Paybank/credit' element={<Credit />} />
          <Route path='/Paybank/credit/add-card' element={<AddCard />} />
          <Route path='/Paybank/loan' element={<Loan />} />
          <Route path='*' element={<Erro />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App
