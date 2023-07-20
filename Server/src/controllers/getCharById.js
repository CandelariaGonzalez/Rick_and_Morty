
var axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

async function getCharById(req, res){
   
    //                                  ASYNC AWAIT
    try {
    const apiRequest = await axios(`${URL}${req.params.id}`);
    const {data} = apiRequest;

    if(data.error){
        return res.status(404).send(data.error);
    }

    const {id,name, status, species, origin, image, gender} = data;
    const character = {
        id,name, status, species, origin, image, gender};
    return res.status(200).json(character)
    

    }  catch (axiosError) {
        //si hay error debes responder con un status 500, y un texto con la priopiedad message del error.
        return res.status(500).send(axiosError.message)
}
}




module.exports = getCharById;


