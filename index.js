const jsonserver = require('json-server')

const MPServer = jsonserver.create()
const middleware = jsonserver.defaults()
const PORT = 3000
const route = jsonserver.router('db.json')

MPServer.use(middleware)
MPServer.use(route)

MPServer.listen(PORT,()=>{
    console.log(`MPServer started at port ${PORT} `);
    
})