<?php
error_reporting(1);
header("Access-Control-Allow-Origin: *");

header('Content-Type: application/json; charset=utf-8');

$json = file_get_contents('../../data/partners.json');
  
// Decode the JSON file
$json_data = json_decode($json,true);


die(json_encode(array(
    "status" => 200,
    "data" => json_decode($json)
)));

  