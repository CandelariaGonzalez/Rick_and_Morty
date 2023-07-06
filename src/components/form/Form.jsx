import React, {useState} from "react";
import validation from "./validation";
import style from "./Form.module.css";


export default function Form({login}){

    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });



    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({
            ...userData, 
            [property]: value
        });

        setErrors(validation({
            ...userData, 
            [property]: value}));
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        login(userData);
    }
    

    return(
        <div className={style.containerForm}>
            <img className={style.logoForm} src="https://cdn.shopify.com/s/files/1/0292/8427/0159/collections/RICK_MORTY.png?v=1662751284" alt="logo" />
            <form className={style.form} onSubmit={submitHandler}>
                <h1 className={style.find}>Find out more about your favorite characters!<span>&#128071;&#127996;</span></h1>
                <h2 className={style.login}>Login</h2>

                <input 
                    className={style.inputForm}
                    onChange={handleChange} 
                    value={userData.email} 
                    type="email" 
                    name='email'
                    placeholder="email address">
                </input>
                {errors.email && <p className={style.error}>{errors.email}</p>}


                <hr />

                <input 
                    className={style.inputForm}
                    onChange={handleChange} 
                    value={userData.password} 
                    type="password" 
                    name='password' placeholder="password">
                </input>
                    {errors.password && <p className={style.error}>{errors.password}</p>}


                <button className={style.submitForm} type="submit">Submit</button>
            </form>
        </div>
    )
}