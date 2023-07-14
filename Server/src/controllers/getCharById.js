var axios = require('axios')

const success = (response, res) =>{
    const { id, name, gender,origin,status, species,image } = response.data;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({id, name, gender, status, origin, species, image}))
}

const err = (error, res) => {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(error.message)
}

const getCharById = (res, id) => {
axios
.get(`https://rickandmortyapi.com/api/character/${id}`)
.then((response)=> success(response, res))
.catch((error) => err(error, err))
}


module.exports = getCharById;


