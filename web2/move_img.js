/* 
 * Author : Ozumba Christopher
 * Date : 31 july 2024
 *
 */
const img = document.querySelectorAll('div > img');
const moving_img = document.querySelector('#move');
//console.log(img);
//let images=[];
/*
for(let k=0; k<img.length; k++){
	images[k]=img[k].src;
}
*/

/*
for (let i=1; i<img.length; i++){
	for(let j=1; j<i; j++){
		//img[j].src=moving_img.src;
		let delay=setInterval(function(){
			img[j].src=moving_img.src;
		},500);
	}
    img[i].src=images[i].src;
}
*/

/*
console.log(images);
function move_img(img,replace_img){
	img=repalce_img;
}
*/

let delay=setInterval(function(){
	let randomInt=Math.floor(Math.random() * img.length + 1);
	let fetch=img[randomInt].src;
	img[randomInt].src=moving_img.src;
	moving_img.src=fetch;
},10000);
