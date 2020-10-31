  
import Hikes from './hikes.js';
//on load grab the array and insert it into the page
const myHikes = new Hikes('hikes');
window.addEventListener('load', () => {
  myHikes.showHikeList();
});

// const name = document.getElementById("name");
// const comment = document.getElementById("content");



// function submit() {
// console.log('I ran')
//   const newComment = {
//     name: name.value(),
//     date: new Date(),
//     content: comment.value()
//   };

// const comments = JSON.parse(localStorage.getItem('comments')) || []; 

// comments.push(newComment); 

// localStorage.setItem('comments', JSON.stringify(comments));
// console.log(comments);
// }