<?php
//Declaration des variables


$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$classe = $_POST["classe"];
$role = $_POST["role"];
$maladie = $_POST["maladie"];
$abonnement = $_POST["abonnement"];
$nationalite = $_POST["nationalite"];


//Si le fichier est vide on met juste les données
if ('' == file_get_contents('userData.json')) {
    //Crée le tableau json
    $dataArray = array(['nom' => $nom,
        'prenom' => $prenom,
        'classe' => $classe,
        'role' => $role,
        'maladie' => $maladie,
        'abonnement' => $abonnement,
        'nationalite' => $nationalite]);
    $dataArray = json_encode($dataArray, true);
    file_put_contents('userData.json', $dataArray);
    //si le fichier est deja remplis on ajoute (donc reprends les donnees, push, upload)
} else {
    //Crée le tableau json
    $dataArray = array('nom' => $nom,
        'prenom' => $prenom,
        'classe' => $classe,
        'role' => $role,
        'maladie' => $maladie,
        'abonnement' => $abonnement,
        'nationalite' => $nationalite);
    $tempArray = file_get_contents('userData.json');
    $tempArray = json_decode($tempArray,true);
    array_push($tempArray, $dataArray);
    $dataArray = json_encode($tempArray, true);
    file_put_contents('userData.json', $dataArray);
}

?>

