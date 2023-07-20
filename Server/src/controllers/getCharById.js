
// const successH = (response, res) =>{
//     const { id, name, gender,origin,image } = response.data;
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     return res.end(JSON.stringify({id, name, gender, origin, image}))
// }

// const err = (error, res) => {
//     res.writeHead(500, {'Content-Type': 'text/plain'});
//     return res.end(error.message)
// }

// const getCharById = (res, id) => {
// axios
// .get(`https://rickandmortyapi.com/api/character/${id}`)
// .then((response)=> successH(response, res))
// .catch((error) => err(error, err))
// }
var axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

function getCharById(req, res){
    const {id} = req.params;
    //dentro de la funcion haz una peticion a la api a partir del id que recibes por params.
    axios(`${URL}${id}`)
    .then((response) => {
        if(response.data.error){
            return res.status(400).send(data.error)
        }
        //destructuramos la data
        const {id,name, status, species, origin, image, gender} = response.data
        //puede hacer la solicitud
        return res.status(200).json({id,name, status, species, origin, image, gender})
    }).catch((axiosError) => {
        //si hay error debes responder con un status 500, y un texto con la priopiedad message del error.
        return res.status(500).send(axiosError.message)})

}



module.exports = getCharById;


