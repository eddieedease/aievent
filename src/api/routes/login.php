<?php
use \Psr\Http\Message\ResponseInterface as Response;
use \Psr\Http\Message\ServerRequestInterface as Request;
// API
// LOGIN WITH KEY, give back group ID.

// TODO: Make DOC


// LOGIN WITH KEY, give back group ID.
$app->post('/admnlogin', function (Request $request, Response $response) {
    
    $parsedBody = $request->getParsedBody();
    $email = $parsedBody[email];
    $pwd = $parsedBody[ww];


    include 'db.php';
	$dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

    // SQL QUERY FOR getting group id with key
    $sqlgetuser = "SELECT * FROM ausers WHERE email = '$email'";
    $stmtgetuser = $dbh->prepare($sqlgetuser);
    $stmtgetuser->execute();
    $resultgetuser = $stmtgetuser->fetchAll(PDO::FETCH_ASSOC);
    $aipassword = $resultgetuser[0]['ww'];


    if (md5($pwd) == $aipassword) {
        // succesfull inlog
        $data = array('status' => 'success', 'type' => $resultgetuser[0]['type'], 'aid' => $resultgetuser[0]['id']);
    } else {
        $data = array('status' => 'failed');
    }

    // TODO: MMust also give back the auser type
    // Must also give back the groups which this user may access
    $response = json_encode($data);
    return $response;
});

?>