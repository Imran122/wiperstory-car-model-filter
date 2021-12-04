
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Shared/Footer/Footer';
import Login from './components/Authentication/LogIn/Login';
function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <Login></Login>
      <Footer></Footer>
    </div>
  );
}

export default App;
