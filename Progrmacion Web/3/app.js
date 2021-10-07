let la
let lo
let re
  function loca(){
    la = document.getElementById('lat').value
    lo = document.getElementById('lon').value
    fetch('https://us1.locationiq.com/v1/reverse.php?key=pk.1c384892a89564d1e2c0561a819b0d08&lat='+la+'&lon='+lo+'&format=json')
    .then(response => response.json())
    .then(json => {
      document.getElementById("parra").innerHTML="<h3>Las cordenadas son de: "+json.address.country+" </h3> En la ciudad: "+json.address.city+"<br> Con el codigo postal: "+json.address.postcode
      tiempo(json.address.city)
  })

}

function tiempo(re) {
  fetch('http://api.weatherstack.com/current?access_key=f10e8af046326826802346286f9dd169&query='+re)
  .then(response => response.json())
  .then(json => {
  document.getElementById("parrar").innerHTML="La temperatura es de: "+json.current.temperature
})
}
 



