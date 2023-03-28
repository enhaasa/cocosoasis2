<?php

$servername = 'lin-13330-7942-mysql-primary.servers.linodedb.net';
$username = 'linroot';
$password = 'nk7PTUbmdz0Xl^62';
$database = 'coconut_cocosoasis';

$mysqli = mysqli_init();
$mysqli->options(MYSQLI_OPT_SSL_VERIFY_SERVER_CERT, true);
$mysqli->ssl_set(NULL, NULL, __DIR__ ."/../../certs/EnhasicSoftware-ca-certificate.crt", NULL, NULL);
$mysqli->real_connect($servername, $username, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    echo("Something went wrong");
}
if ($mysqli->error) {
    die("Error: " . $conn->error);
    echo("Something went wrong");
}

$query = isset($_GET['query']) ? $_GET['query'] : "";

$queryText = "";
switch($query) {
    case "getMenu":
        $queryText = "SELECT * FROM menu";
        break;
    case "getStaff":
        $queryText = "SELECT * FROM staff";
        break;
}

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

if ($queryText == "") {
    echo(json_encode("No results"));
} else {
    $result = $mysqli->query($queryText);
    $obj_array = array();
    while ($row = mysqli_fetch_object($result)) {
        $obj_array[] = $row;
    }

    echo json_encode($obj_array);
}

mysqli_close($mysqli);

?>