import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review'
import Inventory from './components/Inventory/Inventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Routes>
         
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/product/:productKey" element={<ProductDetails/>} />
          <Route exact path="/" element={<Shop />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
