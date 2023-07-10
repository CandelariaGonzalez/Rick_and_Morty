import {useState} from 'react';
import Card from '../card/Card'
import { connect, useDispatch} from 'react-redux';
import style from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions';

const Favorites = ({myFavorites}) =>{

    const dispatch = useDispatch()
    const [booleano, setBooleano] = useState(false)

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setBooleano(true)
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }

    return(
        
        <div className={style.bgContainer}>
           
            <div className={style.selects}>
            <select defaultValue="" onChange={handleOrder}>
                <option value="" disabled hidden>Ordenar por ID</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select defaultValue="" onChange={handleFilter}>
                <option value="" disabled hidden>Filtrar por</option>
                <option value="allCharacters">AllCharacters</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">Unknown</option>
            </select>

        </div>
        <div className={style.infoCont}>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        gender = {fav.gender}
                        origin={fav.origin}
                        image={fav.image}
                        />
                    )
                })
            }
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites)