// var http = require('http');

// http
//     .createServer((req, res)=>{
//         res.setHeader('Access-Control-Allow-Origin', '*');
        
//         const { url } = req;

//         if(url.includes('/rickandmorty/onsearch/')){
//             const id = url.split('/').at(-1);
//             getCharById(res, id)
//             console.log('toy en onsearch')

//         }

//         if(url.includes('/rickandmorty/detail/')){
//             const id = url.split('/').at(-1);
//             getCharDetail(res, id)
//             console.log('toy en detalles')
//         }
//     })
//     .listen(3001, 'localhost')

const morgan = require('morgan')
const PORT = 3001
//rutas
const characterRouter = require('./routes/character');
const userRouter = require('./routes/user');
const favoriteRouter = require('./routes/favorites');
//express
const express = require('express');
const server  = express();

//middlewars
server.use(express.json())//para poder recibir JSON por req.body
server.use(morgan('dev'))//no muestra en consola como sale la req y la res



//permisos -> cors
server.use((req, res, next) => { //se puede sustitur todo estp usando cors
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });


//routes => cuales voy a usar
server.use('/character', characterRouter)
server.use('/user', userRouter)
server.use("/favorites", favoriteRouter)

server.get('/health-check/', (req, res)=>{
    res.send('Working')
})



server.listen(PORT, ()=>{
    console.log('Server raised in port: ' + PORT)
})