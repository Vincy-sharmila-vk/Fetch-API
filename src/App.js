import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Layout from './Components/Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Register from './Components/Register';


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='register' element={<Register/>}/>

      </Route>
  )
)

function App() {
  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  );
}

export default App;
