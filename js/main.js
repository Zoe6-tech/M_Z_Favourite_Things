import {fetchData} from "./modules/animeMiner.js"

(()=>{
  let 
  videoBox=document.querySelector('.animeVideobox'),
  videoBoxTemplate = document.querySelector('#videobox-template').content,

  videoBoxT = document.querySelector('#videobox-template'),
  animeVideo=videoBoxT.querySelector("video"),

  closeButton= videoBox.querySelector('.close-button');


  function handleDataSet(data) { 
    let currentAnimeContent=videoBoxTemplate.cloneNode(true),
      currentAnimeInfo=currentAnimeContent.querySelector('.inbox').children;
    for (let anime of data) {
      currentAnimeInfo[0].controls = true;
      // currentAnimeInfo[0].autoplay = true;
      currentAnimeInfo[0].id = anime.anime_ID;
      currentAnimeInfo[0].src = `videos/${anime.anime_video}`;
      currentAnimeInfo[1].textContent = anime.airDates;
      currentAnimeInfo[2].textContent = anime.anime_description;
      videoBox.appendChild(currentAnimeContent);
    }
  }

  function showVideoBox(data){
    videoBox.classList.add("show-animeVideobox");
    
   // fetchData('./includes/index.php?id=${data.target.id}').then(data => handleDataSet(data)).catch(err => console.log(err));
    if (!data.target.id) {return}
    fetchData('./includes/index.php?id='+data.target.id).then(data => handleDataSet(data)).catch(err => console.log(err));
} 
 
    

    function hideVideoBox(){
     videoBox.classList.remove("show-animeVideobox");
     animeVideo.pause();
     animeVideo.currentTime=0;
    }

    // function retrieveProjectInfo(){
    //   if (!event.target.id) {return}
    //   fetchData('./includes/index.php').then(data => showVideoBox(data)).catch(err => console.log(err));
//}
   
function getAnimeData(animes){
     let 
     animeSection = document.querySelector('.animes-section'),
     animeTemplate = document.querySelector('#animes-template').content;

   for(let anime in animes){//in/of
     let 
     currentAnime=animeTemplate.cloneNode(true),
     currentAnimeText=currentAnime.querySelector('.anime').children;    
      
     currentAnimeText[0].textContent = animes[anime].anime_name;
     currentAnimeText[1].src = `images/${animes[anime].anime_image}`;
     currentAnimeText[1].id = animes[anime].anime_ID;
    //  currentAnimeText[2].textContent = animes[anime].airDates;
    //  currentAnimeText[3].textContent = animes[anime].anime_description;
    //  currentAnimeText[4].src = `videos/${animes[anime].anime_video}`;

     animeSection.appendChild(currentAnime);
   }
   
     animeSection.addEventListener("click", showVideoBox);
 }

      fetchData("./includes/index.php").then(data=>getAnimeData(data)).catch(error=>console.log(error));
 
   
      closeButton.addEventListener("click",hideVideoBox);
    })();