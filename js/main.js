import {fetchData} from "./modules/animeMiner.js"

(()=>{
  let 
  videoBox=document.querySelector('.animeVideobox'),
  inboxq=document.querySelector('.inbox').children,
  videoBoxTemplate = document.querySelector('#videobox-template').content,

  closeButton= videoBox.querySelector('.close-button'),
  playButton = document.querySelector('.play-button'),
  rewindButton = document.querySelector('.rewind-button');


  function handleDataSet(data) { 
  
    for (let anime of data) {    
      inboxq[0].controls = true;
      inboxq[0].autoplay = true;
      inboxq[0].id = anime.anime_ID;
      inboxq[0].src = `videos/${anime.anime_video}`;
      inboxq[1].textContent = anime.airDates;
      inboxq[2].textContent = anime.anime_description;    
    }
    console.log(inboxq)  
    
   /* let currentAnimeContent=videoBoxTemplate.cloneNode(true),
      currentAnimeInf=currentAnimeContent.querySelector('.inbox'),
      currentAnimeInfo=currentAnimeContent.querySelector('.inbox').children    
    for (let anime of data) {    
      currentAnimeInfo[0].controls = true;
      currentAnimeInfo[0].autoplay = true;
      currentAnimeInfo[0].id = anime.anime_ID;
      currentAnimeInfo[0].src = `videos/${anime.anime_video}`;
      currentAnimeInfo[1].textContent = anime.airDates;
      currentAnimeInfo[2].textContent = anime.anime_description;    
    }*/

    // console.log(videoBox.children)
   // videoBox.append(currentAnimeContent);
  }

  function showVideoBox(data){
    videoBox.classList.add("show-animeVideobox");
    fetchData('./includes/index.php?id='+data.target.id).then(data => handleDataSet(data)).catch(err => console.log(err));
    if (!data.target.id) {return}
} 
// fetchData('./includes/index.php?id=${data.target.id}').then(data => handleDataSet(data)).catch(err => console.log(err));
    

    function hideVideoBox(){
     videoBox.classList.remove("show-animeVideobox");
    }

    // function PlayandPause() {
    //   if(houseVideo.paused) 
    //     houseVideo.play();
    //   else
    //     houseVideo.pause();
    // }
  
    //    function rewindVideo() {
    //   houseVideo.currentTime=0;
    // }

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
      playButton.addEventListener('click',PlayandPause);
      rewindButton.addEventListener('click',rewindVideo);
    })();