<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
if(isset($_REQUEST["f"])){
  if ($_REQUEST["f"]==1){
    $total = $_POST["A"]+$_POST["B"];
    echo json_encode(array("total"=>$total));
  }
  else if ($_REQUEST["f"]==2){
    $input = file_get_contents("php://input");
    $data = json_decode($input,true);
    $total = $data["A"]+$data["B"];
    echo json_encode(array("total"=>$total));
  }
}
else{
  $data=array(
    "val"=>1234,
    "key"=>"test"
  );
  $json = json_encode($data);
  echo $json;
}
?>