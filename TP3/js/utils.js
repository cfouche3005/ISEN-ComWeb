function ajaxRequest(type,url,data = null,callback = null){

    let xhr = new XMLHttpRequest();

    xhr.open(type,url,true);

    xhr.onload = ()=>{
        switch(xhr.status){
            case 200: callback(xhr.responseText);
            break;
            case 201: callback(xhr.responseText);
            break;
        default: httpErrors(xhr.status);
        }
    }

    xhr.send();
}

function httpErrors(errorCode){
    switch(errorCode){
        case 400: document.getElementById("errors").innerHTML = '<div class="fa-solid fa-circle-exclamation"> Requête incorrecte</div>';
        break;
        case 401: document.getElementById("errors").innerHTML = '<div class="fa-solid fa-circle-exclamation"> Authentifiez vous</div>';
        break;
        case 403: document.getElementById("errors").innerHTML = '<div class="fa-solid fa-circle-exclamation"> Accès interdit</div>';
        break;
        case 404: document.getElementById("errors").innerHTML = '<div class="fa-solid fa-circle-exclamation"> Page introuvable</div>';
        break;
        case 500: document.getElementById("errors").innerHTML = '<div class="fa-solid fa-circle-exclamation"> Erreur interne au serveur</div>';
        break;
        case 503: document.getElementById("errors").innerHTML = '<div class="fa-solid fa-circle-exclamation"> Service indisponible</div>';
        default: console.log("Error: "+ errorCode);
    }
    document.getElementById("errors").classList.remove("d-none");
    const errorTime = setTimeout(()=>{document.getElementById("errors").classList.add("d-none");},5000);
}

function consoleLOG(args){
    console.log(JSON.parse(args));
}

