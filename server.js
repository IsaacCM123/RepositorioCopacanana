const express=require('express')
const path=require('path')
                            const http=require('http')
                            const fs=require('fs')
                            const {Server}=require('socket.io')

const app=express()
const PORT=3000
                            const server=http.createServer(app)
                            const io=new Server(server)

app.use(express.static(path.join(__dirname)))

                            let estado=JSON.parse(fs.readFileSync('estado.json'))

                            // 📡 Conexión WebSocket
                            io.on('connection',(socket)=>{
                                console.log('Usuario conectado')

                                // Enviar estado actual
                                socket.emit('estadoInicial',estado.habitaciones)

                                // Admin cambia estado
                                socket.on('cambiarEstado',(index)=>{
                                    estado.habitaciones[index]=estado.habitaciones[index]===0?1:0

                                    // Guardar en JSON
                                    fs.writeFileSync('estado.json',JSON.stringify(estado,null,2))

                                    // Enviar a TODOS
                                    io.emit('estadoActualizado',estado.habitaciones)
                                })

                                socket.on('disconnect',()=>{
                                    console.log('Usuario desconectado')
                                })
                            })

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

server.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})