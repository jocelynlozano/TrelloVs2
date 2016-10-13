window.addEventListener("load", function(){
	var spanAnadirLista = document.getElementById("spanAnadirLista");
	var form = document.getElementById("form");
	var textoInput = document.getElementById("textoInput");
	var botonGuardarLista = document.getElementById("botonGuardarLista");
	var subContenedor = document.getElementById("subContenedor");
	var enlace = document.createElement("a");
	var botonCreadoEnJs = document.createElement("button");
	var contenedorNuevo = document.createElement("div");


	spanAnadirLista.addEventListener("click", mostrarForm);
	botonGuardarLista.addEventListener("click", mostrarNombreLista);
	enlace.addEventListener("click", toShowTextArea);
	botonCreadoEnJs.addEventListener("click", nuevaTarjeta);
	

	function mostrarForm(){
		//form.classList.remove("block");
		//spanAnadirLista.classList.add("none");
		
		textoInput.focus();
		spanAnadirLista.style.display = "none";
		form.style.display = "block";
	};

	function mostrarNombreLista(e){
		e.preventDefault();
		var nombreLista = document.createElement("div");

		subContenedor.appendChild(nombreLista);
		subContenedor.appendChild(enlace);


		nombreLista.innerHTML = textoInput.value;
		textoInput.value = "";

		//form.classList.add("block");
		form.style.display = "none";
		enlace.textContent = "Añadir tarjeta..";

		moviendoTarjeta();
	};

	function moviendoTarjeta(){
		//var contenedorGrande = document.getElementById("contenedorGrande");

		//subContenedor.appendChild(contenedorNuevo);

		contenedorGrande.insertBefore(contenedorNuevo, subContenedor);

		//contenedorNuevo.insertBefore(form, contenedorNuevo.childNodes[1]);
		//contenedorNuevo.setAttribute("class", "contenedorNuevo");
	};

	function toShowTextArea(){
		var nuevoForm = document.createElement("form");
		var textAreaCreado = document.createElement("textarea");
		

		subContenedor.appendChild(nuevoForm);
		nuevoForm.appendChild(textAreaCreado);
		nuevoForm.appendChild(botonCreadoEnJs);

		botonCreadoEnJs.textContent = "Guardar";

		textAreaCreado.focus();
		enlace.style.display = "none";
	};

	function nuevaTarjeta(e){
		e.preventDefault();
		var tarjetaNueva = document.getElementById("span");

		contenedorNuevo.appendChild(tarjetaNueva);
		subContenedor.appendChild(enlace);

		botonCreadoEnJs.style.display = "inline-block";
		tarjetaNueva.textContent = textAreaCreado.value;

		nuevoDiv();
	};

	function nuevoDiv(){
		var divNuevo = document.createElement("div");
		
		contenedorGrande.appendChild(nuevoDiv);
		divNuevo.appendChild(spanAnadirLista);
		divNuevo.appendChild(nuevoForm);

		spanAnadirLista.style.display = "inline-block";

	};

});