import {useState, useEffect} from 'react';
import style from './Card.module.css';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';

function Card({ 
   id, 
   name,
   gender,
   origin, 
   image, 
   onClose,
   addFav,
   removeFav,
   myFavorites
}) {
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
       setIsFav(false);
         removeFav(id); // Aquí asegúrate de que 'id' esté definido y sea correcto
      } else {
       setIsFav(true);
         addFav({id, name,gender ,origin, image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (
      <div className={style.containerC}>
         <div className={style.divButton}>
            <button className={style.close} onClick={() => onClose(id)}>✖</button>
         </div>
         <button className={style.fav} onClick={handleFavorite}>{isFav ? '❤' : '🤍'}</button>

         <div className={style.infoC}>
            <h1>{name}</h1>
            <h2>{gender}</h2>
            <Link to={`/detail/${id}`}>
               <img className={style.imgC} src={image} alt={name} />
            </Link>
            <h2><span>Origin:</span> {origin}</h2>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return{
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
