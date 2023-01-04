<?php
header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header("Accept: application/json");


error_reporting(1);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

include "db_connect.php";

class RegisterNewsletter extends dbConnect
{
    public function __construct()
    {
        $postData = json_decode(file_get_contents("php://input"));

        $name = $postData->{'name'};
        $email = $postData->{'email'};

        if (
            empty($name) || strlen($name) > 50
            || empty($email) || strlen($email) > 100
        ) {
            die(json_encode(array(
                'status' => 400,
                'message' => 'Dados Incompletos',
                'errorMessage' => 'Bad Request'
            )));
        }

        if (
            !filter_var($email, FILTER_VALIDATE_EMAIL)
        ) {
            die(json_encode(array(
                'status' => 400,
                'message' => 'Email Inválido',
                'errorMessage' => 'Bad Request'
            )));
        }



        $mysqli = $this->connect();



        $stmt =  $mysqli->prepare("SELECT registered FROM newsletter WHERE email = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->store_result();
        if ($stmt->num_rows != 0) {

            die(json_encode(array(
                'status' => 400,
                'message' => 'Email Já Registrado!'
            )));
        }
   


        $stmt =  $mysqli->prepare("INSERT INTO newsletter (name, email) VALUES (?,?)");
        $stmt->bind_param("ss", utf8_decode($name), $email);


        $stmt->execute();

        if ($stmt->affected_rows >= 1) {
            $stmt->close();
            $mysqli->close();

            die(json_encode(array(
                'status' => 200,
                'message' => 'Cadastrado com Sucesso!'
            )));
        } else {

            $errorMessage = array(
                'status' => 503,
                'message' => "Erro ao Cadastrar ",
                'error2' => $stmt->error
            );
            $this->error_log("error", $errorMessage);
            $stmt->close();
            $mysqli->close();

            die(json_encode(array(
                'status' => 503,
                'message' => 'Erro Inesperado Tente Novamente Mais Tarde!'
            )));
        }

        die(json_encode($postData));
    }
}

$set = new RegisterNewsletter();

function replaceCh($string)
{
    $unwanted_array = array(
        'Š' => 'S', 'š' => 's', 'Ž' => 'Z', 'ž' => 'z', 'À' => 'A', 'Á' => 'A', 'Â' => 'A', 'Ã' => 'A', 'Ä' => 'A', 'Å' => 'A', 'Æ' => 'A', 'Ç' => 'C', 'È' => 'E', 'É' => 'E',
        'Ê' => 'E', 'Ë' => 'E', 'Ì' => 'I', 'Í' => 'I', 'Î' => 'I', 'Ï' => 'I', 'Ñ' => 'N', 'Ò' => 'O', 'Ó' => 'O', 'Ô' => 'O', 'Õ' => 'O', 'Ö' => 'O', 'Ø' => 'O', 'Ù' => 'U',
        'Ú' => 'U', 'Û' => 'U', 'Ü' => 'U', 'Ý' => 'Y', 'Þ' => 'B', 'ß' => 'Ss', 'à' => 'a', 'á' => 'a', 'â' => 'a', 'ã' => 'a', 'ä' => 'a', 'å' => 'a', 'æ' => 'a', 'ç' => 'c',
        'è' => 'e', 'é' => 'e', 'ê' => 'e', 'ë' => 'e', 'ì' => 'i', 'í' => 'i', 'î' => 'i', 'ï' => 'i', 'ð' => 'o', 'ñ' => 'n', 'ò' => 'o', 'ó' => 'o', 'ô' => 'o', 'õ' => 'o',
        'ö' => 'o', 'ø' => 'o', 'ù' => 'u', 'ú' => 'u', 'û' => 'u', 'ý' => 'y', 'þ' => 'b', 'ÿ' => 'y'
    );
    return (strtr($string, $unwanted_array));
}
