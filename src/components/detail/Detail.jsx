import React, {useState, useEffect} from "react";
import style from "./Detail.module.css"
import { useParams } from 'react-router-dom'
import axios from "axios";

export default function Detail(){
    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        }
    ).catch(error =>{
        console.error(error)
        window.alert('error al cargar los datos');
    });
    

    return () =>{
        console.log('me desmonto, adios!');
    };
     }, [id]);


     
    return(
        <div className={style.containerDetail}>
            <div className={style.infoD}>
                <h1 className={style.detalles}>Details:</h1>
                <h2 className={style.nombreD}>{character.name && character.name}</h2>
                <img className={style.imgD} src={character.image} alt={character.name} />
                <h2 className={style.datosD}><span className={style.spanD}>Status:</span>{character.status ? character.status : ":( no hay status"}</h2>
                <h2 className={style.datosD}><span className={style.spanD}>Specie:</span> {character.species}</h2>
                <h2 className={style.datosD}><span className={style.spanD}>Gender:</span> {character.gender}</h2>
                <h2 className={style.datosD}><span className={style.spanD}>Origin:</span> {character.origin?.name}</h2>
            </div>
        </div>
    )
} //npm i -g 