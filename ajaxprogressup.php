<?php
 
$filename = uniqid().$_FILES["file"]["name"];

try{
	if(move_uploaded_file($_FILES["file"]["tmp_name"], "/up"))
		echo json_encode(['url' => 'up/'.$filename,'status' =>'success','data'  =>'Fichier téléchargé avec success']);
}
catch(Exception $e){
	echo json_encode(['url'=> '', 'status' =>'error','data' =>$e ]);
}
  