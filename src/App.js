import './App.css';
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

   //hooks
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();
   


   useEffect(() => {
      !access && navigate("/");
   }, [access]);

    //credenciales fake
      const email = 'm.candelariagonzalez.s@gmail.com';
      const password = 'mipass123';


   //events
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
         if (data.name && !characters.find((char) => char.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      })
      .catch((err) => window.alert("No characters with this ID!"));
      ;
   }


   const onClose = (id) =>{
      setCharacters(characters.filter((char) => char.id !== id));
   }


   const login = (userData) =>{
      if(userData.email === email && userData.password === password){
         setAccess(true);
         navigate('/home');
      } else{
         alert('incorrect credentials')
      }
   }


//render
   return (
      <div className='App'>
         {
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess}/>
         }
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );
}

export default App;
