// write your code here!
//Variables
let currentDuck;
let duckData;
let dimg = document.querySelector('#duck-display-image');
let nameDuck = document.querySelector('#duck-display-name');
let likes = document.querySelector('#duck-display-likes');
//Fetch the data
fetch('http://localhost:3000/ducks')
 .then(response => response.json())
 .then(duckData => {
    renderDucks(duckData);
    duckInfo(duckData[0]);
    addLikes();
    //function
 });

 function renderDucks(duckData){
    let duckList = document.querySelector('#duck-nav');
    duckData.forEach(item =>{
        let duckItem = document.createElement('img');
        duckItem.src = item.img_url;
        duckList.appendChild(duckItem);
        //console.log(duckItem);
        duckItem.addEventListener('click', () => {
         duckInfo(item);
     })
    })
 }
function duckInfo(duck){
   selectedDuck = duck;
   dimg.src = duck.img_url;
   nameDuck.textContent = duck.name;
   likes.textContent = `${duck.likes} likes`;
}

function addLikes() {
   likeButton = document.querySelector('#duck-display-likes');
   likeButton.addEventListener('click', () => {
      currentDuck.likes = currentDuck.likes + 1;
      duckInfo(currentDuck);
      //document.querySelector('#duck-display-likes').textContent = `${currentDuck.likes} likes`;
   })
}
// function hookUpLikeButton(){
//    const likeButton = document.querySelector('#duck-display-likes');
//    likeButton.addEventListener('click', (event) => {
//       currentDuck.likes = currentDuck.likes + 1;
//       event.preventDefault();
//       //likeButton.textContent = `${currentDuck.likes+1} likes`;
//       //const addLike = event.target['duck-display-likes'].value;
//       //currentDuck.likes = e.target[currentDuck.likes + 1].value;
//       //document.querySelector('#likes').textContent = 
//       //duckInfo(currentDuck);
//       //likeButton.reset(); 
//    })
// }

function newDucks() {
   let newDuckData = [] 
}