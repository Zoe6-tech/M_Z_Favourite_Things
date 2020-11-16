<?php
//result will store the database request rsults 
//so that we can encode and return them to indx.php
$result=array();

function getAllAnimes($conn){        
   $query = "SELECT * FROM fav_animes";
   $runQuery=$conn->query($query);
   while($row=$runQuery->fetchALL(PDO::FETCH_ASSOC)){
       //store the result
       $result[]=$row;
   }
   //return $result;
  echo(json_encode($result));
  //translate --window use echo, mac use var_dump   
    }


    //get a specific user
    function getSingleAnime($conn,$id){        
        $query = "SELECT * FROM fav_animes where anime_ID=". $id ."";
        $runQuery=$conn->query($query);
        while($row=$runQuery->fetchALL(PDO::FETCH_ASSOC)){
            $result[]=$row;
        }
       echo(json_encode($result));
         }



