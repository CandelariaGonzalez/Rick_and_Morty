import Card from "../card/Card";
import style from './Cards.module.css';

export default function Cards({ characters, onClose }) {
   return (
   <div className={style.container}>
      {characters.map(({ id, name, status, species, gender, image, origin }) => (
               <Card
                  key = {id}
                  id = {id}
                  name = {name}
                  status={status}
                  species={species}
                  gender={gender}
                  image={image}
                  origin={origin?.name}
                  onClose={onClose}
               />
            ))}
   </div>
   );
}