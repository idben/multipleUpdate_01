<?php
require_once('setting.php');
header('Content-Type:text/html;charset=utf-8');
$return = new stdClass();
$sql = "// 沒有傳任何值進來";
if(isset($_POST["delIDs"])){
  $ids = json_decode($_POST["delIDs"]);
  $in = implode(',',$ids); 
  $sql = "UPDATE `資料庫`.`資料表` SET `欄位` = '0' WHERE `id` IN ($in)";
}
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./main.css">
    <script src="./main.js" defer></script>
    <title>軟刪除多筆資料的範例</title>
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <h1>
          產生的SQL語法為：
        </h1>
        <div class="row result">
          <div class="code">
            <?php echo $sql;?>
          </div>
        </div>
        <div class="row">
          再用 PDO prepare 後 execute 即可。
        </div>
      </div>
    </div>
  </body>
</html>

