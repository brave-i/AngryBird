<?php
	//echo $_POST["myfile"];

	$data = $_POST["myfile"];
	$filename = $_POST["filename"];
	list($type, $data) = explode(';', $data);
	list(, $data)      = explode(',', $data);
	$data = base64_decode($data);

	file_put_contents('./uploads/'.$filename, $data, LOCK_EX);
	
	echo 'Done';

?>