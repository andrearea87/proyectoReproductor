class Cancion{    
    constructor(id,nombre,artista, duracion, portadaAlbum, anio, genero, url){
        this.id=id;
        this.nombre=nombre;
        this.artista=artista;
        this.duracion=duracion;
        this.portadaAlbum=portadaAlbum,
        this.anio=anio;
        this.genero=genero;
        this.url=url;
    }
    getId(){
        return this.id;
    }
    getNombre(){
        return this.nombre;
    }
    getArtista(){
        return this.artista;
    }
    getDuracion(){
        return this.duracion;
    }
    getPortadaAlbum(){
        return this.portadaAlbum;
    }
    getAnio(){
        return this.anio;
    }
    getGenero(){
        return this.genero;
    }
    getUrl(){
        return this.url;
    }
}

class Playlist{
    listaCanciones=[];
    constructor(nombrePlaylist, listaCanciones){
        this.nombrePlaylist=nombrePlaylist;
        this.listaCanciones=listaCanciones;
    }

    getNombrePlaylist(){
        return this.nombrePlaylist;
    }
    getListaCanciones(){
        return this.listaCanciones;
    }  
    agregarPlaylist(cancion){
        this.listaCanciones.push(cancion);
    }
    eliminarPlaylist(idCancion){
       this.listaCanciones=this.listaCanciones.filter(song => song.id != idCancion);
    }

}

class Reproductor{
    catalogoCanciones;
    cancionActual;   
    playlistActual;  //catalogo, favoritos, miplaylist, busqueda
    audio;
    miPlaylist;
    favoritos;
    estaPausado;
    filtroCanciones;
    constructor(){
        this.catalogoCanciones=[       
            new Cancion(1,"Stop Crying Your Heart Out", "Oasis", "5:02","HeathenChemistry.jpg", "2002", "Britpop", "stopCryingYourHeartOut.mp3"),
            new Cancion(2,"Dancing Queen", "ABBA", "4:03","Arrival.jpg", "1976", "Pop", "dancingQueen.mp3"),
            new Cancion(3,"Here With Me", "Dido", "3:02","noAngel.jpg", "1998", "Balada", "hereWithMe.mp3"),
            new Cancion(4,"Waterloo", "ABBA", "2:45","Waterloo.jpg", "1973", "Pop", "waterloo.mp3"),
            new Cancion(5,"A whole new world", "Zayn & Zhavia Ward", "4:02","aWholeNewWorld.jpg", "2019", "Pop", "aWholeNewWorld.mp3"),
            new Cancion(6,"I dont care", "Ed Sheeran & Justin Bieber ", "3:39","iDontCare.png", "2019", "Electropop", "iDontCare.mp3"),
            new Cancion(7,"Love by grace ", " Lara Fabian ", "4:07","loveByGrace.jpg", "1999", "Pop", "loveByGrace.mp3"), 
            new Cancion(8,"You and Me ", " Lifehouse ", "3:35","youAndMe.jpg", "2005", " rock alternativo", "youAndMe.mp3"),
            new Cancion(9,"Los caminos de la vida", "Vicentico", "3:56","Vicentico.jpg", "2004", "Rock en español", "cancion9.mp3"),
            new Cancion(10,"Irremediablemente tarde", "Verde 70", "4:30","Verde70.jpg", "2000", "Pop Rock", "cancion10.mp3"),
            new Cancion(11,"I hate everything about you", "Three Days Grace", "3:40","ThreeDaysGrace.jpg", "2003", "Post-grunge", "cancion11.mp3"),
            new Cancion(12,"There is no leaving now", "The Tallest Man on Earth", "4:30","The_Tallest_Man_on_Earth.jpg", "2012", "Indie/Folk", "cancion12.mp3"),
            new Cancion(13,"Papaoutai", "Stromae", "3:52","Stromae.jpg", "2013", "Synth Pop", "cancion13.mp3"),
            new Cancion(14,"First of the Year", "Skrillex", "3:14","Skrillex.jpg", "2011", "Dance/electrónica", "cancion14.mp3"),
            new Cancion(15,"Ojalá", "Silvio Rodríguez", "4:20","SilvioRodriguez.jpg", "1978", "Nueva Trova", "cancion15.mp3"),
            new Cancion(16,"¡Que Bonito!", "Rosario    ", "4:10","Rosario.jpg", "1996", "Pop", "cancion16.mp3"),
            new Cancion(17,"Se nos muere el amor", "Ricardo Arjona", "4:26","arjona.jpg", "2005", "Balada", "arjona.mp3"),
            new Cancion(18,"Ajedrez", "David Bisbal", "3:33","bisbal.webp", "2021", "Pop", "bisbal.mp3"),
            new Cancion(19,"Cosas Bonitas", "Fanny Lu", "3:19","fanny.webp", "2018", "Balada", "fanny.mp3"),
            new Cancion(20,"Que quieres de mi", "Luis Fonsi", "4:35","fonsi.jpg", "2008", "Balada", "fonsi.mp3"),
            new Cancion(21,"Inventame", "Mon Laferte", "3:22","laferte.jpg", "2017", "Balada", "laferte.mp3"),
            new Cancion(22,"Te necesito", "Paolo Plaza", "4:16","plaza.jpg", "2010", "Salsa", "plaza.mp3"),
            new Cancion(23,"Inevitable", "Shakira", "3:06","shakira.jpeg", "1995", "Balada", "shakira.mp3"),
            new Cancion(24,"Kiss me", "Ed Sheeran", "4:26","sheeran.png", "2015", "Balada", "sheeran.mp3"),
            new Cancion(25,"Dharma", "Sebastian Yatra", "3:03","yatra.jpg", "2021", "Balada", "yatra.mp3"),
            new Cancion(26,"All I ask", "Adele", "4:39","adele.jpg", "2015", "Pop", "alliAsk.mp3"),
            new Cancion(27,"Broken", "Amy Lee & Seether", "4:23","Broken.jpg", "2004", "Rock", "broken.mp3"),
            new Cancion(28,"Iris", "Goo goo dolls", "3:36","Iris.jpg", "1998", "Pop Rock", "iris.mp3"),
            new Cancion(29,"Talking to de Moon", "Bruno Mars", "3:35","BrunoMars.jpg", "2010", "pop", "brunoMars.mp3"),
            new Cancion(30,"Let me go", "three doors down", "3:59","letMeGo.jpg", "2005", "Rock", "letMeGo.mp3"),

        ];
        //Por defecto se coloca la primera cancion del catalogo como cancion actual
        this.cancionActual=this.catalogoCanciones[0];
        this.miPlaylist=new Playlist("miPlaylist",[]);
        this.favoritos=new Playlist("favoritos",[]);
        this.playlistActual="catalogo";
        this.audio=new Audio();
      
        
        //console.log("Audio es "+this.audio.src);
        this.estaPausado=true;
        this.filtroCanciones=[];
        this.mostrarCanciones();
    }

    cambiarAudio(cancionActualP, playlistActualP){
       // this.siguienteCancion(this.cancionActual.id,this.playlistActual);
        console.log('Evento Ended');
        console.log("Cancion actual "+cancionActualP);
        console.log("Playlist actual "+playlistActualP);          
        //console.log(this.catalogoCanciones);
        //let siguiente=this.siguienteCancion(this.cancionActual.id, this.playlistActual);
        let siguiente=this.siguienteCancion(cancionActualP.id, playlistActualP);
        this.mostrarDetalleCancion(siguiente.id, this.playlistActual);
    }
    

    mostrarDetalleCancion(idCancion, nombrePlaylist){
        console.log("IdCancion "+idCancion);
        this.playlistActual=nombrePlaylist;
        console.log(this.playlistActual);
        //let cancionSiguiente=this.siguienteCancion(idCancion, this.playlistActual);
        //console.log(cancionSiguiente);
        let datosCancion=document.getElementById('songData');
        let cancionPlay = this.catalogoCanciones.filter(cancion=>cancion.id == idCancion);
        this.cancionActual=cancionPlay[0];
        //console.log(cancionPlay);
        datosCancion.innerHTML=`
            <table class="detalleCancion">
                <tr id="name">
                    <td><b>Nombre:</b></td>
                    <td>${cancionPlay[0].nombre}</td>
                </tr>           
            <tr id="duracion">
                <td><b>Tiempo (seg):</b></td>
                <td>
                ${isNaN(this.audio.duration) ? 180.04:this.audio.duration}
                </td>
            </tr>
                <tr id="artista">
                    <td><b>Artista:</b></td>
                    <td>${cancionPlay[0].artista}</td>
                </tr>
                <tr id="year">
                    <td><b>Año:</b></td>
                    <td>${cancionPlay[0].anio}</td>
                </tr>
                <tr id="genre">
                    <td><b>Género:</b></td>
                    <td>${cancionPlay[0].genero}</td>
                </tr>                
                <tr id="nombrePlay">
                    <td><b>Playlist:</b></td>
                    <td>${this.playlistActual.toUpperCase()}</td>
                </tr>
            </table>        
        `;

        let imgAlbum=document.getElementById('fuenteImagen');
        imgAlbum.src='IMG/'+cancionPlay[0].portadaAlbum;
        this.reproducir();

    }

    siguienteCancion(idCancionActual, nombrePlaylist){
        let i;
        let posicion=0;
        let posicionSig=0;
        if(nombrePlaylist === 'catalogo'){
            for(i=0;i< this.catalogoCanciones.length;i++){
                if(this.catalogoCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionSig=posicion+1;
            if(posicionSig === this.catalogoCanciones.length){
                posicionSig=0;
            }
            return this.catalogoCanciones[posicionSig];          
        }else if(nombrePlaylist === 'favoritos'){
            for(i=0;i< this.favoritos.listaCanciones.length;i++){
                if(this.favoritos.listaCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionSig=posicion+1;
            console.log("Sig "+posicionSig);
            if(posicionSig === this.favoritos.listaCanciones.length){
                posicionSig=0;
            }
            return this.favoritos.listaCanciones[posicionSig];      
        }else if(nombrePlaylist === 'miplaylist'){
            for(i=0;i< this.miPlaylist.listaCanciones.length;i++){
                if(this.miPlaylist.listaCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionSig=posicion+1;
            console.log("Sig "+posicionSig);
            if(posicionSig === this.miPlaylist.listaCanciones.length){
                posicionSig=0;
            }
            return this.miPlaylist.listaCanciones[posicionSig];      
        }else if(nombrePlaylist === 'busqueda'){
            for(i=0;i< this.filtroCanciones.length;i++){
                if(this.filtroCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionSig=posicion+1;
            console.log("Sig "+posicionSig);
            if(posicionSig === this.filtroCanciones.length){
                posicionSig=0;
            }
            return this.filtroCanciones[posicionSig];      
        }else{ 
            for(i=0;i< this.catalogoCanciones.length;i++){
                if(this.catalogoCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionSig=posicion+1;
            if(posicionSig === this.catalogoCanciones.length){
                posicionSig=0;
            }
            return this.catalogoCanciones[posicionSig];  
        }

    }

    anteriorCancion(idCancionActual, nombrePlaylist){
        let i;
        let posicion=0;
        let posicionAnt=0;
        if(nombrePlaylist === 'catalogo'){
            for(i=0;i< this.catalogoCanciones.length;i++){
                if(this.catalogoCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionAnt=posicion-1;
            if(posicionAnt === -1){
                posicionAnt=this.catalogoCanciones.length-1;
            }
            return this.catalogoCanciones[posicionAnt];          
        }else if(nombrePlaylist === 'favoritos'){
            for(i=0;i< this.favoritos.listaCanciones.length;i++){
                if(this.favoritos.listaCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionAnt=posicion-1;
            //console.log("Sig "+posicionSig);
            if(posicionAnt === -1){
                posicionAnt=this.favoritos.listaCanciones.length-1;
            }
            return this.favoritos.listaCanciones[posicionAnt];      
        }else if(nombrePlaylist === 'miplaylist'){
            for(i=0;i< this.miPlaylist.listaCanciones.length;i++){
                if(this.miPlaylist.listaCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionAnt=posicion-1;
            //console.log("Sig "+posicionSig);
            if(posicionAnt === -1){
                posicionAnt=this.miPlaylist.listaCanciones.length-1;
            }
            return this.miPlaylist.listaCanciones[posicionAnt];      
        }else if(nombrePlaylist === 'busqueda'){
            for(i=0;i< this.filtroCanciones.length;i++){
                if(this.filtroCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionAnt=posicion-1;
            //console.log("Sig "+posicionSig);
            if(posicionAnt === -1){
                posicionAnt=this.filtroCanciones.length-1;
            }
            return this.filtroCanciones[posicionAnt];      
        }else{ 
            for(i=0;i< this.catalogoCanciones.length;i++){
                if(this.catalogoCanciones[i].id===idCancionActual){
                    posicion=i;
                    break;
                }
            }
            posicionAnt=posicion-1;
            if(posicionAnt === -1){
                posicionAnt=this.catalogoCanciones.length-1;
            }
            return this.catalogoCanciones[posicionAnt];   
        }

    }


    reproducir(){
        this.audio.pause();
        this.audio.currentTime=0;
        //this.audio =new Audio('canciones/'+this.cancionActual.url);
        this.audio.src='canciones/'+this.cancionActual.url;
        //this.audio.currentTime=180;
        //console.log(this.audio);
        this.estaPausado=true;
        this.audio.play();
    }

    detener(){          
       console.log("detener");
       this.estaPausado=false;
       this.audio.pause();
       this.audio.currentTime=0;
       //console.log(this.audio);
    }

    pause(){
        this.audio.pause();
    }

    forward(){
        console.log("forward >>");        
        console.log(this.cancionActual);
        let siguiente=this.siguienteCancion(this.cancionActual.id, this.playlistActual);
        this.mostrarDetalleCancion(siguiente.id, this.playlistActual);
    }
    backward(){
        console.log("<< backward");       
        let anterior=this.anteriorCancion(this.cancionActual.id, this.playlistActual);
        this.mostrarDetalleCancion(anterior.id, this.playlistActual);
    }
    mute(){
      this.audio.muted=true;
    }

    unMute(){
        this.audio.muted=false;
    }

    mostrarCanciones(){
        let resultadosBuscador = document.getElementById('resultadosBuscador');        
        this.catalogoCanciones.forEach(
            cancion => {
                resultadosBuscador.innerHTML+=
                    `<li id="res_${cancion.id}" class="cancion">${cancion.nombre}
                        <i style="font-size:24px" class="fa" onclick="miReproductor.mostrarDetalleCancion(${cancion.id}, 'catalogo');">&#xf0da;</i>
                        <i style="font-size:16px" class="fa" onclick="miReproductor.addfavoritos(${cancion.id});">&#xf004;</i>
                        <i class="fa fa-plus" onclick="miReproductor.addPlaylist(${cancion.id});"></li>`
            }
        )
        //console.log(this.catalogoCanciones) ; 
        //let imgAlbum=document.getElementById('fuenteImagen');
       // imgAlbum.src='IMG/'+this.cancionActual.portadaAlbum;

        this.mostrarDetalleCancion(this.cancionActual.id, "catalogo");
       
    }

    buscarCancionNombre(nombre){
        console.log("Buscar por Nombre");
    }
    buscarCancionArtista(artista){
        console.log("Buscar por Artista");
    }
    buscarCancionGenero(genero){
        console.log("Buscar por Genero");
    }
    buscarCancion(cancionBuscada){
        cancionBuscada=(cancionBuscada.trim(cancionBuscada)).toLowerCase();       
        let resultadoNombre=this.catalogoCanciones.filter(cancion=>(cancion.nombre.toLowerCase()).match(cancionBuscada));
        let resultadoArtista=this.catalogoCanciones.filter(cancion=>(cancion.artista.toLowerCase()).match(cancionBuscada));
        let resultadoGenero=this.catalogoCanciones.filter(cancion=>(cancion.genero.toLowerCase()).match(cancionBuscada));
        this.filtroCanciones=[...resultadoNombre, ...resultadoArtista, ...resultadoGenero];
        this.filtroCanciones=[...new Set(this.filtroCanciones)];        
        this.mostrarBusqueda(this.filtroCanciones);

    }
    mostrarBusqueda(filtroCanciones){
        let resultadosBuscador = document.getElementById('resultadosBuscador');
        resultadosBuscador.innerHTML="";
        if(filtroCanciones.length>0){
            filtroCanciones.forEach(
                cancion => {
                    resultadosBuscador.innerHTML+=
                        `<li id="res_${cancion.id}" class="cancion">${cancion.nombre}
                            <i style="font-size:24px" class="fa" onclick="miReproductor.mostrarDetalleCancion(${cancion.id},'busqueda');">&#xf0da;</i>
                            <i style="font-size:16px" class="fa" onclick="miReproductor.addfavoritos(${cancion.id});">&#xf004;</i>
                            <i class="fa fa-plus" onclick="miReproductor.addPlaylist(${cancion.id});"></li>`
                }
            )
        }else{
            resultadosBuscador.innerHTML="No se encontraron resultados."
        }

        
    }

    addPlaylist(idCancion){  
        let cancionPlaylist=this.miPlaylist.listaCanciones.find(cancion => cancion.id == idCancion);
        if(cancionPlaylist === undefined){
            let cancion=this.catalogoCanciones.find(cancion => cancion.id == idCancion);
            this.miPlaylist.agregarPlaylist(cancion);
            //console.log(this.miPlaylist);
            this.imprimirPlaylist();    
        } 
    }

    removePlaylist(idCancion){        
        this.miPlaylist.eliminarPlaylist(idCancion);
        console.log(this.miPlaylist);
        this.imprimirPlaylist(); 
    }

    imprimirPlaylist(){
        let divMiPlaylist=document.getElementById('miPlaylist');
        divMiPlaylist.innerHTML="";
        this.miPlaylist.listaCanciones.forEach(
                cancion => {
                    divMiPlaylist.innerHTML+=
                        `<li id="res_${cancion.id}" class="cancion">${cancion.nombre}
                            <i style="font-size:24px" class="fa" onclick="miReproductor.mostrarDetalleCancion(${cancion.id}, 'miplaylist');">&#xf0da;</i>
                            <i style="font-size:16px" class="fa" onclick="miReproductor.addfavoritos(${cancion.id});">&#xf004;</i>
                            <i class="material-icons" onclick="miReproductor.removePlaylist(${cancion.id});">&#xe872;</i>`
                }
        ) 
    }


    addfavoritos(idCancion){  
        let cancionPlaylist=this.favoritos.listaCanciones.find(cancion => cancion.id == idCancion);
        if(cancionPlaylist === undefined){
            let cancion=this.catalogoCanciones.find(cancion => cancion.id == idCancion);
            this.favoritos.agregarPlaylist(cancion);
            //console.log(this.miPlaylist);
           this.imprimirFavoritos();
        }      
        
    }

    removeFavoritos(idCancion){        
        this.favoritos.eliminarPlaylist(idCancion);
        console.log(this.favoritos);
        this.imprimirFavoritos();
    }


    imprimirFavoritos(){
        let divFavoritos=document.getElementById('favoritos');
        divFavoritos.innerHTML="";
        this.favoritos.listaCanciones.forEach(
            cancion => {
                divFavoritos.innerHTML+=
                    `<li id="res_${cancion.id}" class="cancion">${cancion.nombre}
                        <i style="font-size:24px" class="fa" onclick="miReproductor.mostrarDetalleCancion(${cancion.id}, 'favoritos');">&#xf0da;</i>
                        <i class="fa fa-heart-o" onclick="miReproductor.removeFavoritos(${cancion.id});"></i>
                        <i class="fa fa-plus" onclick="miReproductor.addPlaylist(${cancion.id});">`
            }
        )  
    }

    imprimirVariables(valor){
        console.log(valor);       
    }


    
    


   
}

//Creacion del Reproductor
let miReproductor = new Reproductor();

//Busqueda
let txtBuscar=document.getElementById("txtBuscar");

let btnBuscar=document.getElementById("btnBuscar");
btnBuscar.addEventListener(
    "click",
    function(){
       miReproductor.buscarCancion(txtBuscar.value); 
    }
);

//Agregar evento al boton play del HTML
document.getElementById("play").addEventListener("click", reproducirCancion);
document.getElementById("stop").addEventListener("click", detenerCancion);
document.getElementById("forward").addEventListener("click", avanzarCancion);
document.getElementById("back").addEventListener("click", regresarCancion);
document.getElementById("btnMute").addEventListener("click", silenciarCancion);
document.getElementById("btnUnmute").addEventListener("click", activarCancion);


function reproducirCancion() {
    miReproductor.reproducir();
}
    
function detenerCancion() {
     miReproductor.detener();
}

function avanzarCancion(){
    miReproductor.forward();
}

function regresarCancion(){
    miReproductor.backward();
}

function silenciarCancion(){
    miReproductor.mute();
}
function activarCancion(){
    miReproductor.unMute();
}

miReproductor.audio.addEventListener('ended', () => miReproductor.cambiarAudio(miReproductor.cancionActual,miReproductor.playlistActual));

const logoutBtn = document.getElementById('logout')
logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('isLogged')
  window.location.href = 'login.html'
})