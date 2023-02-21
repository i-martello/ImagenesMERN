import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import ImgDetails from './pages/ImgDetails'
import ImgForm from './pages/ImgForm'
import ImgGallery from './pages/ImgGallery'

function App() {

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<ImgGallery />}></Route>
        <Route path='/imagenes/:id' element={<ImgDetails />}></Route>
        <Route path='/publicar' element={<ImgForm />}></Route>
      </Routes>
    </main>
  );
}

export default App;
