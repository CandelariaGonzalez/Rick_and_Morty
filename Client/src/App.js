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


   //events
   const onSearch = (id) => {
      axios(`http://localhost:3001/character/${id}`)
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


   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/user/login/';
      axios(URL + `?email=${email}&password=${password}`).then((response) => {
         const { access } = response.data;
         setAccess(access);
         access && navigate('/home');
      });
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
