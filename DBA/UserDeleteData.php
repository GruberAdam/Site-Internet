<?php
$jsonData = file_get_contents('userData.json');
$jsonData = json_decode($jsonData, true);

if ('' == $jsonData){
    echo 'nothing in the file' . '<br>';
}
else{
    $jsonDataLenght = count($jsonData);
    echo 'lenght of array :' . $jsonDataLenght . '<br>';
    echo 'something in the file' . '<br>';

    print_r($jsonData);
    echo '<br>' .'<br>' .'<br>';
    unset($jsonData[$jsonDataLenght - 1]);
    $jsonData = json_encode($jsonData, true);
    print_r($jsonData);
    file_put_contents('userData.json', $jsonData);
}

?>