<?php
$upload_path = $_SERVER['DOCUMENT_ROOT']."/";
$dest_file = $upload_path.basename($_FILES['myfile']['name']);

if(move_uploaded_file($_FILES['myfile']['tmp_name'],$dest_file)){
          echo "文件已上传至服务器根目录的upload目录下";
}else{
          echo "上传错误".$_FILES['myfile']['error'];
}
?>
