<?php
    $db = new mysqli('localhost' , 'root' , '' , 'kirulive');
    if($db->connect_error){
        return "There is connection error";
    }
    $sql = "SELECT customer_id , customer_name , created_at FROM customer";
    $result = $db->query($sql);
    if(!$result){
        echo "No data finding";
        return "No data finding";
    }  
    if($result->num_rows > 0){
      while($row = $result->fetch_assoc()){
          $record[] = $row; 
      }
      $data = json_encode(['record' => $record]);
      die($data);
      return $data;
    }
?>