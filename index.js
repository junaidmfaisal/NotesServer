const jsonserver = require('json-server')

const NotesServer = jsonserver.create()
const middleware = jsonserver.defaults()
const PORT = 3000
const route = jsonserver.router('db.json')

NotesServer.use(middleware)
NotesServer.use(route)

NotesServer.listen(PORT,()=>{
    console.log(`MPServer started at port ${PORT} `);
    
})