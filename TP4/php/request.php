<?php
    require_once('database.php');

    $db = dbConnect();

    function getRessource(){
        $request = substr($_SERVER['PATH_INFO'], 1); 
        $request = explode('/', $request); 
        return intval(array_pop($request));
    }

    function Respond($response){
        if($response != false){
            header('Content-Type: application/json; charset=utf-8');
            header('Cache-control: no-store, no-cache, must-revalidate');
            header('Pragma: no-cache');
            header('HTTP/1.1 200 OK');
            $response = json_encode($response);
            echo $response;
            exit;
    
        }else{
            header('HTTP/1.1 400 Bad Request');
            exit;
        }
    }

    if($_SERVER['REQUEST_METHOD']=='GET'){
        if(isset($_GET['login'])){
            $response = dbRequestTweets($db,$_GET['login']);
        }else{
            $response = dbRequestTweets($db);
        }
    }
    if($_SERVER['REQUEST_METHOD']=='POST'){
        $response = dbAddTweet($db,$_POST['login'],$_POST['text']);
    }
    if($_SERVER['REQUEST_METHOD']=='PUT'){
        parse_str(file_get_contents('php://input'), $_PUT);
        $response = dbModifyTweet($db,getRessource(),$_PUT['login'],$_PUT['text']);
    }
    if($_SERVER['REQUEST_METHOD']=='DELETE'){
        $response = dbDeleteTweet($db,getRessource(),$_GET['login']);
    }

    Respond($response); 
?>