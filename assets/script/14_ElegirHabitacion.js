/*Mi contraseña de forma ofuscada*/
function _0x2c6d(){const _0x6822ec=['5PpWnwj','functionIxl','4442696xbRwDP',
'14049QyGeZO','35572lraEai','5861149rOLFJc','11629611IZudiY','2229654lReAoO','584JqeOLq','1714022POhUlW'];
_0x2c6d=function(){return _0x6822ec;};return _0x2c6d();}
function _0x248a(_0x25a7e1,_0x5d04bf){_0x25a7e1=_0x25a7e1-0x1b7;
const _0x2c6d6d=_0x2c6d();let _0x248ac8=_0x2c6d6d[_0x25a7e1];return _0x248ac8;}
const _0x1ab84b=_0x248a;(function(_0x39af84,_0x1a8b99)
{const _0x24ab47=_0x248a,_0x1cba5c=_0x39af84();
while(!![]){try{const _0x5a244c=parseInt(_0x24ab47(0x1bf))/0x1+-
parseInt(_0x24ab47(0x1ba))/0x2+-
parseInt(_0x24ab47(0x1be))/0x3*(-parseInt(_0x24ab47(0x1b9))/0x4)+-
parseInt(_0x24ab47(0x1bb))/0x5*(parseInt(_0x24ab47(0x1b8))/0x6)+-
parseInt(_0x24ab47(0x1c0))/0x7+parseInt(_0x24ab47(0x1bd))/0x8+
parseInt(_0x24ab47(0x1b7))/0x9;if(_0x5a244c===_0x1a8b99)break;
else _0x1cba5c['push'](_0x1cba5c['shift']());}
catch(_0x12f7fb){_0x1cba5c['push'](_0x1cba5c['shift']());}}}(_0x2c6d,0x7a48f));CAREBOT_GLY=_0x1ab84b(0x1bc);

/*En el Modal, asignamos Clave-Valor al localStorage para posteriormente poder administrar las habitaciones */
/*👉Simulación de admin... Solo este valor (CAREBOT_GLY) tendrá privilegios*/
document.getElementById('ingresarBTN').addEventListener('click',()=>{
  if(document.getElementById('textID').value===CAREBOT_GLY){
    localStorage.setItem('objhuscater','chrushad')
    document.getElementById('textID').value=''
    document.getElementById('passID').value=''
    document.getElementById('emoji').innerHTML='<ion-icon name="checkmark-sharp"></ion-icon>'}
  else{
    document.getElementById('textID').value=''
    document.getElementById('textID').focus()
    document.getElementById('passID').value=''
    document.getElementById('emoji').innerHTML='<ion-icon name="close-sharp"></ion-icon>'}
})

/*Validamos el campo textID, que no se permita ingresar codigo ascii*/
document.getElementById("textID").addEventListener('input', function(){
  const valor=this.value
  const soloLetras=/^[a-zA-Z]*$/
  if(!soloLetras.test(valor)){
    document.getElementById('emoji').innerHTML='<ion-icon name="close-sharp"></ion-icon>'
    this.value=valor.slice(0,-1)}
  else{
    document.getElementById('emoji').innerHTML='<ion-icon name="person-circle-sharp"></ion-icon>'}
})
/*.........................................................................................................................*/

const socket=io()/*Nuevo*/

const imagenesDeLasHabitaciones=[ // Array de objetos.
  {
    laFotoDeHabitacion:"./../img/habitaciones/1.png",
    nombreHabitacion:"HABITACIÓN PREMIUM",
    privilegiosAlUsuario:"<ion-icon name='wifi-sharp'></ion-icon><ion-icon name='tv-sharp'></ion-icon><ion-icon name='bed-sharp'></ion-icon><ion-icon name='alarm-sharp'></ion-icon><ion-icon name='fast-food-sharp'></ion-icon><ion-icon name='car-sport-sharp'></ion-icon><ion-icon name='barbell-sharp'></ion-icon>",
    detalleHabitacion:"<h4>Detalles del Premium.</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    disponibleOcupado:"Cargando..."/*Nuevo*/
  },
  {
    laFotoDeHabitacion:"./../img/habitaciones/2.png",
    nombreHabitacion:"HABITACIÓN DELUXE",
    privilegiosAlUsuario:"<ion-icon name='wifi-sharp'></ion-icon><ion-icon name='tv-sharp'></ion-icon><ion-icon name='bed-sharp'></ion-icon><ion-icon name='alarm-sharp'></ion-icon><ion-icon name='fast-food-sharp'></ion-icon>",
    detalleHabitacion:"<h4>Detalles del Deluxe.</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    disponibleOcupado:"Cargando..."/*Nuevo*/
  },
  {
    laFotoDeHabitacion:"./../img/habitaciones/3.png",
    nombreHabitacion:"HABITACIÓN SUITE",
    privilegiosAlUsuario:"<ion-icon name='wifi-sharp'></ion-icon><ion-icon name='tv-sharp'></ion-icon><ion-icon name='bed-sharp'></ion-icon>",
    detalleHabitacion:"<h4>Detalles del Suite.</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    disponibleOcupado:"Cargando..."/*Nuevo*/
  },
  {
    laFotoDeHabitacion:"./../img/habitaciones/4.png",
    nombreHabitacion:"HABITACIÓN STANDARD",
    privilegiosAlUsuario:"<ion-icon name='wifi-sharp'></ion-icon><ion-icon name='bed-sharp'></ion-icon>",
    detalleHabitacion:"<h4>Detalles del Standard.</h4><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
    disponibleOcupado:"Cargando..."/*Nuevo*/
  }
]

let inicio=0
let unoCero=[]/*Nuevo*/

function mostrarImagen(){
  document.getElementById('imagenPNG').src=imagenesDeLasHabitaciones[inicio].laFotoDeHabitacion
  document.getElementById('nombreHabitacionID').textContent=imagenesDeLasHabitaciones[inicio].nombreHabitacion
  document.getElementById('privilegiosAlUsuarioID').innerHTML=imagenesDeLasHabitaciones[inicio].privilegiosAlUsuario
  document.getElementById('detalleHabitacionID').innerHTML=imagenesDeLasHabitaciones[inicio].detalleHabitacion
  if(unoCero[inicio]===0){/*Nuevo*/
    document.getElementById('estadoID').textContent='Disponible'/*Nuevo*/
    document.getElementById('estadoID').className='disponible'}/*Nuevo, Ahora a la clase hay que darle estilo en css*/
  else{
    document.getElementById('estadoID').textContent='Ocupado'/*Nuevo*/
    document.getElementById('estadoID').className='ocupado'}/*Nuevo, Ahora a la clase hay que darle estilo en css*/
}

function siguiente() {
  inicio = (inicio + 1) % imagenesDeLasHabitaciones.length
  mostrarImagen()
}

function anterior() {
  inicio = (inicio - 1 + imagenesDeLasHabitaciones.length) % imagenesDeLasHabitaciones.length
  mostrarImagen()
}

// 👤 Solo admin puede cambiar estado
document.getElementById('estadoID').onclick=()=>{/*Nuevo*/
  if(localStorage.getItem('objhuscater')!=='chrushad')return/*Nuevo*/
    socket.emit('cambiarEstado',inicio)/*Nuevo*/
}

// 📡 Recibir estado inicial
socket.on('estadoInicial',(data)=>{/*Nuevo*/
  unoCero=data/*Nuevo*/
  mostrarImagen()/*Nuevo*/
})

// 🔄 Actualización en tiempo real
socket.on('estadoActualizado',(data)=>{/*Nuevo*/
  unoCero=data/*Nuevo*/
  mostrarImagen()/*Nuevo*/
})



// Inicializar
//mostrarImagen() pendiente...