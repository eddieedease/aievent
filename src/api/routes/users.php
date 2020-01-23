<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

// Ok the users, we have 3 types
// 1. users
// 2. checklist users
// 3. admin/ superadmin users - they can login in the backend

// 

// get users
$app->get('/getusers', function (Request $request, Response $response) {
    include 'db.php';
    $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

    $sqlusers = 'SELECT * FROM users';
    $stmtusers = $dbh->prepare($sqlusers);
    $stmtusers->execute();
    $resultusers = $stmtusers->fetchAll(PDO::FETCH_ASSOC);
    //     NOTE colleting everything for converting
    $result = array();
    array_push($result, $resultusers);
    //     convert it all to jSON TODO change result
    $response = json_encode($result);
    return $response;
}
);

// get users
$app->get('/howmany', function (Request $request, Response $response) {
    include 'db.php';
    $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

    $sqlusers = 'SELECT * FROM users';
    $stmtusers = $dbh->prepare($sqlusers);
    $stmtusers->execute();
    $resultusers = $stmtusers->fetchAll(PDO::FETCH_ASSOC);

    $data = array('status' => count($resultusers));

    //     convert it all to jSON TODO change result
    $response = json_encode($data);
    return $response;
}
);


// TODO: SUBMIT FORM
$app->post('/submitform', function (Request $request, Response $response) {
    $grouplink = (int)$grouplink;
    $parsedBody = $request->getParsedBody();
    $naam = $parsedBody[naam];
    $org = $parsedBody[organisatie];
    $functie = $parsedBody[functie];
    $email = $parsedBody[email];
    $acc = $parsedBody[accreditatie];

    include 'db.php';
    $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

    // registering
    $sqlregister = "INSERT INTO users (naam, organisatie, functie, email, acc) VALUES ('$naam','$org', '$functie', '$email', '$acc')";
    $stmtregister = $dbh->prepare($sqlregister);
    $stmtregister->execute();
    $resultregister = $stmtregister->fetchAll(PDO::FETCH_ASSOC);
    // query
    $cb = array('status' => 'success');
    //     convert it all to jSON TODO change result
    $response = json_encode($cb);
    return $response;
}
);




?>