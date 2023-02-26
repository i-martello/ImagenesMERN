import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import ImgDetails from './pages/ImgDetails'
import ImgForm from './pages/ImgForm'
import ImgGallery from './pages/ImgGallery'
import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp';

function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<ImgGallery />}></Route>
        <Route path='/imagenes/:id' element={<ImgDetails />}></Route>
        <Route path='/publicar' element={<ImgForm />}></Route>
        <Route path='/registro' element={<SingUp />}></Route>
        <Route path='/login' element={<SingIn />}></Route>
      </Routes>
    </main>
  );
}

export default App;
