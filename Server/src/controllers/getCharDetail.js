var axios = require('axios')

const successH = (response, res) =>{
    const { name, gender,origin,image, species, status } = response.data;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ name, gender,origin,image, species, status }))
}

const err = (error, res) => {
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end(error.message)
};

const getCharDetail = (res, id) => {
axios
.get(`https://rickandmortyapi.com/api/character/${id}`)
.then((response)=> successH(response, res))
.catch((error) => err(error, err))
}


module.exports = getCharDetail;


