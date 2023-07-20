import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-type';

// export const addFav = (character) => {
//     return{
//         type: ADD_FAV,
//         payload: character
//     }
// }

// ACTION | addFav
export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/favorites/';

   return async (dispatch) => {
   try{
      const response = await axios.post(endpoint, character)
      const {data} = response
      return dispatch({
         type: ADD_FAV,
         payload: data
      })
   } catch(error){
      alert(error.message);
   }
   }};

// export const removeFav = (id) => {
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

// ACTION | removeFav
export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/favorites/' + id;

    return async(dispatch) => {
      try{
         const response = await axios.delete(endpoint);
         const {data} = response;
            return dispatch({
               type: REMOVE_FAV,
               payload: data,
         });
      } catch(error){
         alert(error.message)
      }
      };
 };







export const filterCards = (gender) =>
{
    return{type: FILTER,
         payload: gender}
} 

export const orderCards = (order) =>
{
    return{type: ORDER,
            payload: order}
} 