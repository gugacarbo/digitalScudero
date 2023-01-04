<?php



define('TIMEZONE', 'America/Sao_Paulo');
date_default_timezone_set(TIMEZONE);

//hide error
error_reporting(1);



if (!function_exists('errHandledb')) {
    function errHandle($errNo, $errStr, $errFile, $errLine)
    {
        if ($errNo == E_NOTICE || $errNo == E_WARNING) {
            header('Content-Type: application/json; charset=utf-8');
            die(json_encode(array('status' => 507, 'message' => "Internal Server Error...!")));
        }
    }
    // set_error_handler('errHandle');
}




if (session_status() === PHP_SESSION_NONE) {
    session_start();
}


abstract class dbConnect
{

    public function connect()
    {


        $server = "digitalscudero.mysql.dbaas.com.br";
        $user = "digitalscudero";
        $password = "Dev91355756479";
        $db = "digitalscudero";

        try {
            $mysqli = new mysqli($server, $user, $password, $db);
            return $mysqli;
        } catch (Exception $e) {
            header('Content-Type: application/json; charset=utf-8');
            die(json_encode(array('status' => 500, 'message' => "Internal DB Error")));
            return ($e);
        }
    }

    public function error_log($type, $errorMessage)
    {

        $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

        $errorMessage['url'] = $actual_link;
        $errorMessage["post"] = json_encode($_POST);
        $errorMessage["get"] =  json_encode($_GET);
        $errorMessage["session"] =  json_encode($_SESSION);
        $errorMessage["server"] =  json_encode($_SERVER);

        $errorMessage = json_encode($errorMessage, JSON_UNESCAPED_UNICODE);
        $mysqli = $this->connect();
        $stmt = $mysqli->prepare("INSERT INTO error_log (type, message) VALUES (?, ?)");
        $stmt->bind_param("ss", $type, $errorMessage);
        if (!$stmt->execute()) {
            die(json_encode(array('status' => 500, 'message' => $stmt->error)));
        }
    }

    public function fetchAssocStatement($stmt)
    {
        if ($stmt->num_rows > 0) {
            $result = array();
            $md = $stmt->result_metadata();
            $params = array();
            while ($field = $md->fetch_field()) {
                $params[] = &$result[$field->name];
            }
            call_user_func_array(array($stmt, 'bind_result'), $params);
            if ($stmt->fetch())
                return $result;
        }

        return null;
    }
}
