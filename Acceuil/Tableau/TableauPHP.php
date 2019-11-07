<?php

$data = file_get_contents('userData.json'); // put the contents of the file into a variable

$character = json_decode($data,false); // decode the JSON feed
echo $character->name;
?>