<?php
include('database.php');

ini_set('display_errors', 1);
error_reporting(E_ALL);

$pdo = dbConnect();

if($_SERVER['REQUEST_METHOD']=='GET'){
    if (isset($_GET['request'])&& $_GET['request']=='channels'){
        $channels = dbGetChannels($pdo);
        header('Content-Type: application/json; charset=utf-8');
        header('Cache-control: no-store, no-cache, must-revalidate');
        header('Pragma: no-cache');
        header('HTTP/1.1 200 OK');
        $channels = json_encode($channels);
        echo $channels;
        exit;
    }
    if (isset($_GET['request'])&& $_GET['request']=='messages'){
        if (isset($_GET['channel_id'])){
            $messages = dbGetMessages($pdo, $_GET['channel_id']);
            header('Content-Type: application/json; charset=utf-8');
            header('Cache-control: no-store, no-cache, must-revalidate');
            header('Pragma: no-cache');
            header('HTTP/1.1 200 OK');
            $messages = json_encode($messages);
            echo $messages;
            exit;
        }else{
            header('HTTP/1.1 400 Bad Request');
            exit;
        }
    }

    header('HTTP/1.1 400 Bad Request');
    exit;

}


?>