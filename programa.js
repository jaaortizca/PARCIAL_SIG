var map = L.map('map').setView([4.574366807166772, -74.11646968009038], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
async function loadPolygon (){
    let myData = await fetch('El_Pesebre.geojson');
    let myPolygon = await myData.json();
        L.geoJSON(myPolygon,
        {
            style:{
                color:'blue',
                
            }
        }
    ).addTo(map);
}
loadPolygon();