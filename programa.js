// Visualizar mi barrio en open stretmap
var map = L.map('map').setView([4.574366807166772, -74.11646968009038], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Agregando Poligigono del barrio
async function loadPolygon (){
    let myData = await fetch('El_Pesebre.geojson');
    let myPolygon = await myData.json();
        L.geoJSON(myPolygon,
        {
            style:{
                color:'purple',
                
            }
        }
    ).addTo(map);
}
loadPolygon();
// Agregar funcion al boton Arboles 
let btnTrees = document.getElementById("btnTrees");
// Agregar evento al boton Arboles para mostrar los arboles
btnTrees.addEventListener('click', 
    async function loadPoint(){
        let myData2= await fetch("arboles_pesebre.geojson");
        let mypoints= (await myData2.json());
        //Agregar la capa al mapa
        L.geoJSON(
            mypoints,
            {
                pointToLayer: (feature, latlong)=>{

                    return L.circleMarker(latlong, {
                        radius:3,
                        fillColor:'green',
                        weight:1,
                        opacity:1,
                        fillOpacity: 0.8,
                    })

                }
            }
        ).addTo(map);

    }
    
)
let btnDistance = document.getElementById("btnDistance");

btnDistance.addEventListener('click', 
    async function(){
        let response = await fetch('arboles_pesebre.geojson');
        let datos = await response.json();
        let trees = datos.features.map((myElement, index)=>({
            id: index+1,
            coordinates: myElement.geometry.coordinates
        }));

        
        let distances=[];
        trees.forEach( (treeA)=>{trees.forEach(

            
                (treeB)=>{
                    if(treeA.id != treeB.id){
                        let distance = turf.distance( 
                            turf.point(treeA.coordinates),
                            turf.point(treeB.coordinates),
                        );
                        distances.push(
                            [
                                `Árbol ${treeA.id}`,
                                `Árbol ${treeB.id}`,
                                distance.toFixed(3)                            
                            ]
                        )
                }
            }
            )
        }
        )
        generatePDF(distances, trees.lenght);
    }
)

function  generatePDF(distances, totalTrees){
    let { jsPDF } = window.jspdf;
    let documentPDF = new jsPDF();
    documentPDF.text("Reporte de Arboles Barrio El Pesebre",10,10);    
    
    documentPDF.autoTable(
        {
        head: [['Arbol 1', 'Arbol 2', 'Distance']],
        body: distances
        }
    );
    documentPDF.save("Pesebre.pdf")

}
