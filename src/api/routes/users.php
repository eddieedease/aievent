<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;

// Ok the users, we have 3 types
// 1. users
// 2. checklist users
// 3. admin/ superadmin users - they can login in the backend

// 

// so what calls do we need

// TODO: THERE MUST BE A MAIL SEND TO THE USER WITH THE PWD

$app->post('/fillinform', function (Request $request, Response $response) {
    $grouplink = (int)$grouplink;
    $parsedBody = $request->getParsedBody();
    
    $email = $parsedBody[email];
    $name = $parsedBody[name];
    $lastname = $parsedBody[lastname];
    $typee = $parsedBody[typee];
    include 'db.php';
    $dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

    // registering
    $sqlregister = "INSERT INTO ausers (name, lastname, email, ww, type) VALUES ('$name','$lastname', '$email', '$newpwd', '$typee')";
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