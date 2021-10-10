function car() {
fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
    .then(json => {
        for (let index = 0; index < json.length; index++) {
            document.getElementById("seluser").insertAdjacentHTML("beforeend","<option value="+json[index].id+" onclick=caruser() id="+json[index].name+">"+json[index].name+"</option>")
        }
  })
  document.getElementById("bt").style.display = 'none'
  document.getElementById("seluser").style.display = 'block'

}

function caruser(){
    document.getElementById("user").style.display ='block'
    document.getElementById("user").innerHTML=""
    let contenido= ""
    let f = document.getElementById("seluser")
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
        .then(json => {
            for (let index = 0; index < json.length; index++) {
               if (json[index].userId==f.value) {
                   contenido=contenido+"<h3>"+json[index].title+"</h3> <p>"+json[index].body+"</p> <br><button onclick=show("+json[index].id+") id=btt>Ver comentarios</button> <br> <div id=coments"+json[index].id+"></div>"
                   document.getElementById("user").innerHTML=contenido
               }
            }
      })
}

function show(id){
    let comen="Comentarios: <br>"
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
        .then(json => {
            for (let index = 0; index < json.length; index++) {
                if (json[index].postId==id) {
                    comen=comen+"<p>"+json[index].body+"</p>"
                    document.getElementById("coments"+id).innerHTML=comen
                }
            }
      })
}