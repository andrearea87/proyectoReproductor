let canciones=["Balada","Cancion 2", "Cancion 3","Cancion 4","Cancion 5", "Cancion 6", "Cancion 7",
"Cancion 8","Cancion 9","Cancion 10", "Cancion 2"];

let inputBuscar=document.getElementById("btnBuscar");
let resultadoBusqueda=[];

inputBuscar.addEventListener(
    "click",
    function(){
        let txtBuscar=document.getElementById("txtSearch").value;
        
        let expresion=new RegExp(txtBuscar,"i");
        resultadoBusqueda=canciones.filter(
            cancion=>expresion.test(cancion)
        )
        console.log(resultadoBusqueda);
        let contenedorBusqueda= document.getElementById("resultadosBuscador"); 
        let cadenaResultados="";     
        resultadoBusqueda.forEach(
            cancion => {
                cadenaResultados += `
                <tr> 
                    <td>${cancion}</td>
                    <td><i style="font-size:24px" class="fa">&#xf0da;</i></td>
                    <td><i style="font-size:16px" class="fa">&#xf004;</i></td>
                    <td><i class="fa fa-plus"></td>
                </tr>
                `;
        
            }
        
        ); 
        
        contenedorBusqueda.innerHTML=cadenaResultados;
        
    }
);


let contenedorBusqueda= document.getElementById("resultadosBuscador");
 
canciones.forEach(
    cancion => {
        contenedorBusqueda.innerHTML += `
        <tr> 
            <td>${cancion}</td>
            <td><i style="font-size:24px" class="fa">&#xf0da;</i></td>
            <td><i style="font-size:16px" class="fa">&#xf004;</i></td>
            <td><i class="fa fa-plus"></td>
        </tr>
        `;
 
    }
 
);