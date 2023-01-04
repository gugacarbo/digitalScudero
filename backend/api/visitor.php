<?php
include "db_connect.php";

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');
header("Accept: application/json");


if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

class Visitante extends dbConnect
{
    private $Id, $Ip, $Data, $Hora, $Limite, $mysqli;

    public function __construct()
    {

        $this->Id = 0;
        $this->Ip = $_SERVER['REMOTE_ADDR'];
        $this->Data = date("Y/m/d H:i:s");
        $this->Hora = date("H:i:s");
        $this->Limite = 20 * 60; //* 20 Min
        $this->mysqli = $this->connect();
        $this->VerificaUsuario();
    }

    public function VerificaUsuario()
    {
        $stmt = $this->mysqli->prepare("SELECT date FROM visitors WHERE ip = ? AND DATE(date) = ? ORDER BY id DESC");
        $dateNow = date("Y/m/d", strtotime($this->Data));
        $stmt->bind_param("ss", $this->Ip, $dateNow);
        $stmt->execute();

        $stmt->execute();
        $stmt->store_result();



        if ($stmt->num_rows == 0) {
            $stmt->close();

            return ($this->InserindoVisitas());
        } else {
            $result = $this->fetchAssocStatement($stmt);

            $HoraSubtracao = strtotime(date('Y-m-d H:i:s')) - strtotime($result['date']);
            $stmt->close();


            if ($HoraSubtracao > $this->Limite) {
                $this->InserindoVisitas();
            } else {
                die(json_encode(array(
                    'status' => 200
                )));
            }
        }
        return true;
    }

    private function InserindoVisitas()
    {
        $stmt =  $this->mysqli->prepare("INSERT INTO visitors (ip) VALUES (?)");
        $stmt->bind_param("s", $this->Ip);
        $stmt->execute();
        if ($stmt->affected_rows >= 1) {
            $stmt->close();
            $this->mysqli->close();
            die(json_encode(array(
                'status' => 200
            )));
        } else {
            $errorMessage = array(
                'status' => 500,
                'message' => "Erro ao inserir visita",
                'error2' => $stmt->error
            );
            $this->error_log("error", $errorMessage);
            $stmt->close();
            $this->mysqli->close();
            die(json_encode(array(
                'status' => 500
            )));
        }
    }
}



$visitor = new Visitante();
