document.getElementById('formID').addEventListener('submit',async(e)=>{
e.preventDefault()

  const data={
    nombre:document.getElementById('nombreID').value,
    telefono:document.getElementById('telefonoID').value,
    correo:document.getElementById('emailID').value,
    consulta:document.getElementById('consultaID').value
  }

  const response=await fetch('http://localhost:3000/send-email',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })

  const result=await response.json()

  if(result.success){
    alert('Correo enviado correctamente')
  }else{
    alert('Error al enviar')
  }
})