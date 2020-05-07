<?php
 
$filename = uniqid().$_FILES["file"]["name"];

if (move_uploaded_file($_FILES["file"]["tmp_name"], "up/")) {
    echo json_encode(['url'       => 'up/'.$filename,'status'    =>'success','data'   =>'fichier téléchargé avec success'])
  } else {
    echo json_encode(['url'       => 'up/'.$filename,'status'    =>'success','data'   =>'fichier téléchargé avec success'])
  } 