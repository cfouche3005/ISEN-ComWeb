// Define callbacks
// let envoyerB = document.querySelector(".secon");
// envoyerB.addEventListener("submit", login);

// let sedecB = document.querySelector(".sedec");
// sedecB.addEventListener("click", logout);



function getChannels(){
    ajaxRequest("GET","/ISEN-ComWeb/TP3/php/chat.php?request=channels",null,displayChannels);
}

function displayChannels(args){
    let channels = JSON.parse(args);
    let channelList = document.getElementById("channels-list");
    let list = ''
    for(let i = 0; i < channels.length; i++){
        list = list + '<option name="'+channels[i]['name']+'" value="'+channels[i]['id']+'">'+channels[i]['name']+'</option>';
    }
    channelList.innerHTML = list;
    getMessages();
}

function getMessages(){
    let channelList = document.getElementById("channels-list");
    let channel = channelList.options[channelList.selectedIndex].value;
    ajaxRequest("GET","/ISEN-ComWeb/TP3/php/chat.php?request=messages&channel_id="+channel,null,displayMessages);

}

function displayMessages(args){
    let messages = JSON.parse(args);
    let chat = document.getElementById("chat-room");
    let list = ''
    for(let i = 0; i < messages.length; i++){
        list = list + messages[i]['nickname'] + ' : ' + messages[i]['message'] +'\n';
    }
    chat.innerHTML = list;
    chat.scrollTop = chat.scrollHeight;
}

getChannels();

const channelList = document.getElementById("channels-list").addEventListener("change", getMessages);
