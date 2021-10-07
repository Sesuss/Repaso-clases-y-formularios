class Inventario{
    constructor(){
        this.Personas=[]
      }
      Agregar(nuevo){
        this.Personas.push(nuevo)
    }
    }
    
class persona{
        constructor(a,b,c,d,e,f,g,h,i,j){
            this.Name=a
            this.Id=b
            this.Username=c
            this.Email=d
            this.Phone=e
            this.Website=f
            this.Company=g
            this.Address={"street": h,"city": i,"zipcode": j,"Full":(h+" "+i+" "+j)}
        }
    }
let Gente=new Inventario()
let n=0 
let f
let p
let h
function Agregar(){
let a=document.getElementById("txtName").value
let b=document.getElementById("txtId").value
let c=document.getElementById("txtUsername").value
let d=document.getElementById("txtEmail").value
let e=document.getElementById("txtPhone").value
let f=document.getElementById("txtWebsite").value
let g=document.getElementById("txtNameC").value
let h=document.getElementById("txtStreet").value
let i=document.getElementById("txtCity").value
let j=document.getElementById("txtZipcode").value
let per=new persona(a,b,c,d,e,f,g,h,i,j);
Gente.Agregar(per)
document.getElementById("txtName").value=" "
document.getElementById("txtId").value=""
document.getElementById("txtUsername").value=""
document.getElementById("txtEmail").value=""
document.getElementById("txtPhone").value=""
document.getElementById("txtWebsite").value=""
document.getElementById("txtNameC").value=""
document.getElementById("txtStreet").value=""
document.getElementById("txtCity").value=""
document.getElementById("txtZipcode").value=""

let s =document.getElementById("select")
s.insertAdjacentHTML("beforeend","<option value="+Gente.Personas[n].Id+" onclick=Musuario()  >"+Gente.Personas[n].Id+":"+Gente.Personas[n].Name+"</option>")
n++

}

function lista(){
    h=" "
    for (let index =0; index <= Gente.Personas.length; index++) {
    h=h+"Id:"+Gente.Personas[index].Id+"<br>"+"Name:"+Gente.Personas[index].Name+"<br>"+"Phone:"+Gente.Personas[index].Phone+"<br>"+"Company:"+Gente.Personas[index].Company+"<br>"+"<br>"+"<br>"
    document.getElementById("lis").innerHTML=h
        
    }
}

function Musuario (){
document.getElementById("conencabezado").style.display = 'block';
f=document.getElementById("select").value
for (let index =0; index <= Gente.Personas.length; index++) {
    if (f===Gente.Personas[index].Id) {
        document.getElementById("parra").value=" "
        p=null
        p="Datos personales:"+"<br>"+"Id:"+Gente.Personas[index].Id+"<br>"+"Name:"+Gente.Personas[index].Name+"<br>"+"Username:"+Gente.Personas[index].Username+"<br>"+"Email:"+Gente.Personas[index].Email+"<br>"+"Phone:"+Gente.Personas[index].Phone+"<br>"+"Website:"+Gente.Personas[index].Website+"<br>"+"Company:"+Gente.Personas[index].Company+"<br>"+"Address:"+Gente.Personas[index].Address.Full+"<br>"
        document.getElementById("parra").innerHTML=p
        return
    }
}
}

function Pusuraios(){
document.getElementById("Listado").style.display = 'none';
document.getElementById("Consulta").style.display = 'none';
document.getElementById("Usuario").style.display = 'block';
}
function Pconsulta(){
document.getElementById("Listado").style.display = 'none';
document.getElementById("Usuario").style.display = 'none';
document.getElementById("Consulta").style.display = 'block';
}
function Plista(){
document.getElementById("Usuario").style.display = 'none';
document.getElementById("Consulta").style.display = 'none';
document.getElementById("Listado").style.display = 'block';
lista()
}