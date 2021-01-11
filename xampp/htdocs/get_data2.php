<?php
header('Access-Control-Allow-Origin');
$host = 'localhost';
$user = "root";
$pass = "";
$dbname = "test";
$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error){
  die ("connect failed! msg:".$conn->connect_error);
}

if (isset($_REQUEST["f"])){
  $cmd=$_REQUEST["f"];
  if ($cmd=="ins"){
    $sql="insert into stu_tbl (stu_id, name, gender, chi, eng, math)";
    $sql.="values(S00001,Tom,1,89,70,74)";
      if ($conn->query($sql)===TRUE)
        echo "INS SUCC!";
      else
        echo "Error:".$conn->error;
  }
  else if ($cmd=='query'){
    $stu_id="S00001";
    $sql = "select * from stu_tbl where stu_id = '$stu_id'";
    $result = $conn->query($sql);
    if ($result->num_rows>0){
      $row = $result->fetch_assoc();
      $str = json_encode($row);
      echo $str;
    }
  }
  else if ($cmd=='mod'){
    $input = '{"stu_id":"S00001","name":"Tom","gender":"1","chi":"77","eng":"66","math":"55"}';
    $data = json_encode($input, true);
    $sql = "update stu_tbl set";
    $sql. = "name='".$data['name']."'";
    $sql. = ",gender='".$data['gender'];
    $sql. = ",chi='".$data['chi'];
    $sql. = ",eng='".$data['eng'];
    $sql. = ",math='".$data['math'];
    $sql. = "where stu_id='".$data['stu_id']."'";
    if ($conn->query($sql)=== TRUE)
      echo "UPDATE SUCC!";
    else 
      echo "Error:".$conn->error;
    }
}
else {
  echo "Need param!";
}
?>