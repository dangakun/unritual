<?php
header('Content-type: application/json');
$folder = $_REQUEST['folder'];
$file = $_REQUEST['file'];
echo file_get_contents("assets/$folder/$file");