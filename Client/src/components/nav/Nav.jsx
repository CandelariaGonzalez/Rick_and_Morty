import React from "react";
import {Link} from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";

export default function Nav({onSearch, setAccess}){
    

    const handleLogOut = ()=>{
        setAccess(false);
    }

    return(
        <div className={style.navegacion}>

            <div className={style.logoS}>
                <img src="https://www.pngplay.com/wp-content/uploads/14/Rick-And-Morty-Logo-Transparent-File.png" alt="RyM" />
            </div>

            <div className={style.botones}>
                <Link to={"/home"}>
                <button>Home</button>
                </Link>
                <Link to={"/favorites"}>
                <button>Favorites</button>
                </Link>
                <Link to={"/about"}>
                <button>About</button>
                </Link>
                <button onClick={handleLogOut}>LogOut</button>
            </div>

            <div className={style.busquedaN}>
                <SearchBar onSearch= {onSearch}/>
            </div>

        </div>
    )
}