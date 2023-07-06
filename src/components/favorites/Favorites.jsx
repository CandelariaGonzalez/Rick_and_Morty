import Card from '../card/Card'
import { connect } from 'react-redux';
import style from './Favorites.module.css'

const Favorites = ({myFavorites}) =>{
    return(
        <div className={style.bgContainer}>
            {
                myFavorites?.map(fav => {
                    return (
                        <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        origin={fav.origin}
                        image={fav.image}
                        />
                    )
                })
            }
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