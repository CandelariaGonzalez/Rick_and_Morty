import { useState } from 'react';
import style from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {

   const [id, setId] = useState('');

   const handleChange = (event) =>{
      setId(event.target.value)
   };

   return (
      <div className={style.containerS}>
         <div className={style.busqueda}>
            
            <img className={style.lupa} src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-noir.png" alt="lupa" />

            <input className={style.inputS} type='search' placeholder='Search a character' onChange={handleChange}/>

            <button className={style.buttonSrc} onClick={() => onSearch(id)}>Search</button>
         </div>
      </div>
   );
}
