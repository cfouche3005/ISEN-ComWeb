function ajaxRequest(type,url,callback){

    let xhr = new XMLHttpRequest();
    xhr.open(type,url,true);

    xhr.onload = ()=>{
        switch(xhr.status){
            case 200: console.log(JSON.parse(xhr.responseText));
            case 201: callback(xhr.responseText);
            break;
        default: httpErrors(xhr.status);
        }
    }

    xhr.send();
}

function displayTimestamp(response){
    document.getElementById("timestamp").innerHTML = `<i class="fa-solid fa-clock"> ${response}</i>`;
}

function httpErrors(errorCode){
    document.getElementById("errors").style = "display: block";

    switch(errorCode){
        case 400: document.getElementById("errors").innerHTML = '<i class="fa-solid fa-circle-exclamation"> Requête incorrecte</i>';
        break;
        case 401: document.getElementById("errors").innerHTML = '<i class="fa-solid fa-circle-exclamation"> Authentifiez vous</i>';
        break;
        case 403: document.getElementById("errors").innerHTML = '<i class="fa-solid fa-circle-exclamation"> Accès interdit</i>';
        break;
        case 404: document.getElementById("errors").innerHTML = '<i class="fa-solid fa-circle-exclamation"> Page introuvable</i>';
        break;
        case 500: document.getElementById("errors").innerHTML = '<i class="fa-solid fa-circle-exclamation"> Erreur interne au serveur</i>';
        break;
        case 503: document.getElementById("errors").innerHTML = '<i class="fa-solid fa-circle-exclamation"> Service indisponible</i>';
        default: console.log("Error: "+ errorCode);
    }
}

function main(){
    
    var intervalID = setInterval(ajaxRequest,1000,"GET","php/timestamp.php",displayTimestamp)
}



main();