const express=require('express')
const path=require('path')
const http=require('http')
const fs=require('fs')
const {Server}=require('socket.io')
                                                            const nodemailer = require('nodemailer')/*Enviar Gmail*/
                                                            const cors = require('cors')
                                                            require('dotenv').config()

const app=express()
const PORT=3000
const server=http.createServer(app)
const io=new Server(server)

                                                            app.use(cors())
                                                            app.use(express.json())
app.use(express.static(path.join(__dirname)))

let estado=JSON.parse(fs.readFileSync('estado.json'))
io.on('connection',(socket)=>{
    console.log('Usuario conectado')
    socket.emit('estadoInicial',estado.habitaciones)
    socket.on('cambiarEstado',(index)=>{
        estado.habitaciones[index]=estado.habitaciones[index]===0?1:0
        fs.writeFileSync('estado.json',JSON.stringify(estado,null,2))
        io.emit('estadoActualizado',estado.habitaciones)
    })
    socket.on('disconnect',()=>{
        console.log('Usuario desconectado')
    })
})

                                                            app.post('/send-email',async(req, res)=>{
                                                              try {
                                                                const{nombre,telefono,correo,consulta}=req.body

                                                                let transporter=nodemailer.createTransport({
                                                                  host:'smtp.gmail.com',
                                                                  port:587,
                                                                  family:4,/*Forzar IP solo para desplegar a render lo borramos, no afecta*/
                                                                  secure:false,
                                                                  auth:{
                                                                    user:process.env.EMAIL_USER,
                                                                    pass:process.env.EMAIL_PASS
                                                                  }
                                                                })

                                                                await transporter.sendMail({
                                                                  from:correo,
                                                                  to:'condoriisaac06@gmail.com',
                                                                  subject:'Mensaje desde formulario web',
                                                                  text: `Nombre: ${nombre}\nTelefono: ${telefono}\nCorreo: ${correo}\nConsulta: ${consulta}`
                                                                })

                                                                res.status(200).json({success:true,message:'Correo enviado'})

                                                              }catch(error){
                                                                console.error(error)
                                                                res.status(500).json({success:false,message:'Error al enviar correo'})
                                                              }
                                                            })

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

server.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})