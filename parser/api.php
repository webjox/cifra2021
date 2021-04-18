<?php

if ($_GET['key'] != 'aasdkjgfiutnlmnbxhydgsfwersdf') exit;

require '../../vendor/autoload.php';

$db = new MysqliDb('localhost','','','');


if ($_GET['model'] == 'vacancy'){
$data = $db->get("vacancy",5000 );
}


if ($_GET['model'] == 'cv'){
$data = $db->get("cv",5000);
}


if ($_GET['model'] == 'city'){
$data = $db->get("city");
}

if ($_GET['model'] == 'oblast'){
$data = $db->get("oblast");
}

if ($_GET['model'] == 'region'){
$data = $db->get("region");
}


print_r(json_encode($data));