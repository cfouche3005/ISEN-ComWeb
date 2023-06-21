<?php
include('constants.php');

function dbConnect(){
    try {
        return new PDO('pgsql:dbname='.DB_NAME.';host='.DB_SERVER.';port='.DB_PORT, DB_USER, DB_PASSWORD);
        } catch (PDOException $e) {
        echo 'Connexion échouée : ' . $e->getMessage();
        return null;
        }

};

function dbGetChannels($pdo){ 
    return $pdo->query('SELECT * FROM channels')->fetchAll(PDO::FETCH_ASSOC);
    };


function dbGetMessages($pdo, $channel){
    try{
        $query = $pdo->prepare('SELECT u.nickname,m.message FROM messages m JOIN users u ON u.login=m.userlogin WHERE m.channelid = :channel');
        $query->bindParam(':channel', $channel);
        $query->execute();
        return $query->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        echo 'Connexion échouée : ' . $e->getMessage();
        return null;
    }}
?>