
var elements = [];

function addElement(){
    if(document.querySelector("#addTask").value.trim()!=""){
        elements.push(document.querySelector("#addTask").value)
        
        
        
    }
    display();
}

function display(){
    document.querySelector(".itens").innerHTML ="";
    for(var i = 0; i < elements.length ; i++)
    document.querySelector(".itens").innerHTML += "<center><div class='element'>" +elements[i]+ "<button onclick='del("+i+")'>deletar</button></center> </div>"
}

function del(index){
    elements.splice(index, 1);
    display();

}

function delAll(index){
    if(elements.length >= 1)
    if(confirm("Você realmente deseja limpar a lista?") == true){

      elements.splice(index, 1000000000000000000000);
}else{

    }
    
    
    display();
}

function resetForm(){

    document.querySelector("#form").reset();
    
}