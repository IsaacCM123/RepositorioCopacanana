const amburguesa = document.getElementById('burgerIconID');
cambiarAequis = false;
function cambiar(){
	if (cambiarAequis == false) {
		cambiarAequis = true;
		amburguesa.setAttribute("name", "close-sharp");
	}
	else{
		cambiarAequis = false;
		amburguesa.setAttribute("name", "reorder-three-sharp");
	}
}