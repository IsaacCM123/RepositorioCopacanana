document.getElementById('contactoCuerpoID').innerHTML = `
    <div class="portadaContacto">
        <div class="contenidoTextContacto">
            <p class="contactanos">CONTÁCTANOS</p>
            <p class="descripcion">
                loremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div class="contenedorIMG">
            <img src="./../img/contact.png">
        </div>
    </div>

    <div class="bloqueFormulario">
        <div class="contenidoForm">
            <p class="textoEnviarEmail">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. <strong>copacabana982@gmail.com</strong>.
            </p>
            <form id="formID">
                <input type="text" id="nombreID" placeholder="Nombre:" required><br>
                <input type="tel" id="telefonoID" placeholder="Telefono:" required><br>
                <input type="email" id="emailID" placeholder="Correo Electrónico:" required><br>
                <textarea rows="7" id="consultaID" placeholder="Consulta:" required></textarea><br>
                <button type="submit">Enviar</button>
            </form>
        </div>
        <div class="contactoRedes">
            <a href="#" class="MovScroll1">
                <ion-icon name="logo-facebook"></ion-icon>
                <p class="referencias">Casa de huéspedes<br>Copacabana - Cochabamba</p>
            </a>
            <a href="#" class="MovScroll2">
                <ion-icon name="logo-tiktok"></ion-icon>
                <p class="referencias">Casa de huéspedes<br>Copacabana - Cochabamba</p>
            </a>
            <a href="#" class="MovScroll3"><ion-icon name="logo-whatsapp"></ion-icon>
                <p class="referencias">BO +591 62793377<br>Reservas.</p>
            </a>
            <a href="#" class="MovScroll4">
                <ion-icon name="location"></ion-icon>
                <p class="referencias">Av. Papa Paulo Esq.<br>Calle Ismael Vásquez. N°982</p>
            </a>
        </div>
    </div>
`;