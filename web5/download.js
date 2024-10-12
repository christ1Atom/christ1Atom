const vid=document.querySelectorAll('.vid');
const download=document.querySelector('.download');
const cancle=document.querySelector('#cancle');

vid.forEach((ev)=>{
	ev.children[0].addEventListener('click',()=>{
		download.style.display='block';		
		console.log(ev.children[1].innerHTML);
		download.querySelector('img').src=ev.children[0].src;
		download.querySelector('.title').innerHTML=ev.children[1].innerHTML;
	});
});

cancle.addEventListener('click',()=>{
	download.style.display='none';
});
