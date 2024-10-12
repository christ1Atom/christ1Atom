/* validation first */
const imgStore = document.querySelector('.img-store');
const fileInput = document.getElementById('loadImg');
const img = document.querySelector('img');
const button = document.querySelector('.btn');
const showInfo = document.querySelector('.show-info');
const showInfoHide = document.querySelector('#show-close'); 
	

// setting variable from yet to upload data

// mouse object 
let mouse={
	x:undefined,
	y:undefined
}

// mouse movement detersion

addEventListener('mousemove',(ev)=>{
	mouse.x=ev.clientY;
	mouse.y=ev.clientX;
});

button.addEventListener('click',function(){
	validate();
});


function loadProfile(uid,age,email,mobile){
	// create the div for {loaded-image,name-space}
	let loadedImage = document.createElement('div');
	let image = document.createElement('img');
	let nameSpace = document.createElement('div');

	// --------------- p values -----------------
	let userNameP = document.createElement('p');
	let ageP = document.createElement('p');
	let emailP = document.createElement('p');
	let mobileP = document.createElement('p');
			

	loadedImage.className='loaded-image';	
	nameSpace.className='name-space';

	// ------- appending text && appending to namSpace---------
	userNameP.innerText=uid;
	mobileP.innerText=mobile;
	emailP.innerText=email;
	ageP.innerText=age;

	nameSpace.append(userNameP);
	nameSpace.append(ageP);
	nameSpace.append(emailP);
	nameSpace.append(mobileP);

	// Appending  
	image.src=img.src;

	loadedImage.append(image);
	loadedImage.append(nameSpace);
	imgStore.append(loadedImage);

	// add event listener with the loadedImage for getting access to the uploaded files ...
	/*
	loadedImage.forEach((ev,i)=>{
		console.log(ev, i);
	});
	*/

	loadedImage.addEventListener('click',function(ev){
		//console.log(loadedData[i].children[1].children[0].innerHTML);
		//console.log('Hello Number : ', i);
		/* testing if the click function can detect the dom load with input */
		showInfo.style.display='block';
		showInfo.style.backgroundColor='blue';
		/* End of the testing click */
		showInfo.querySelector('.show-body-img > img').src=loadedImage.children[0].src;
		showInfo.querySelector('.show-body-txt .name > li > h5').innerHTML=loadedImage.children[1].children[0].innerHTML;
		showInfo.querySelector('.show-body-txt .about-01 .info-01').innerHTML=loadedImage.children[1].children[1].innerHTML;
		showInfo.querySelector('.show-body-txt .about-01 .info-02').innerHTML=loadedImage.children[1].children[2].innerHTML;
		showInfo.querySelector('.show-body-txt .about-01 .info-03').innerHTML=loadedImage.children[1].children[3].innerHTML;
		//console.log(showInfo.querySelector('.show-body-txt .name > li > h5').innerText);
		
		/* Editing profile ...*/
		showInfo.querySelector('#show-update').addEventListener('click',(ev)=>{
			showInfo.querySelector('.show-body-txt .about-01 .info-01').setAttribute('contenteditable','true');
			showInfo.querySelector('.show-body-txt .about-01 .info-02').setAttribute('contenteditable','true');
			showInfo.querySelector('.show-body-txt .about-01 .info-03').setAttribute('contenteditable','true');
			showInfo.querySelector('#show-header #infor').innerHTML='Editing Profile...'; 
		});

		/* Deleting profile ...*/
		showInfo.querySelector('#show-delete').addEventListener('click',(ev)=>{
			showInfo.querySelector('#show-header #infor').innerHTML='Deleting profile...'; 
			imgStore.removeChild(loadedImage);
		});

		/* Saving profile ...*/
		showInfo.querySelector('#show-save').addEventListener('click',(ev)=>{
			showInfo.querySelector('#show-header #infor').innerHTML='Saving Profile...'; 
			loadedImage.children[1].children[1].innerHTML=showInfo.querySelector('.show-body-txt .about-01 .info-01').innerHTML;
			loadedImage.children[1].children[2].innerHTML=showInfo.querySelector('.show-body-txt .about-01 .info-02').innerHTML;
			loadedImage.children[1].children[3].innerHTML=showInfo.querySelector('.show-body-txt .about-01 .info-01').innerHTML;
		});
	});
	
	/* closing the show information by hiding it ...*/
	showInfoHide.addEventListener('click',(ev)=>{
		showInfo.style.display='none';
	});
}

function validate(){
	let regexMobile=/^[7-9]\d{9}$/;
	let regexEmail=/^([aA0-zZ9 \. _]+)@([aA0-zZ9]).([aA-zZ]{2,6})(.[a-z]{2,6})?$/;
	let uid = document.getElementById('uid').value;
	let age = document.getElementById('age').value;
	let email = document.getElementById('email').value;
	let mobile = document.getElementById('mobile').value;
	
	if(uid.trim() == "" || age.trim() == "" ||
	   email.trim() == "" || mobile.trim() == ""){
		alert("Missing Crendential..!");
		return false;
	}else if(!regexMobile.test(mobile)){
		alert("Invalid Mobile,OR please exclude the zero(0) ..!");
		return false;
	}else if(!regexEmail.test(email)){
		alert("Invalid Email ...!");
		return false;	
	}else{
		alert("All fields filled ..!");
		loadProfile(uid,age,email,mobile);
	}
}

addEventListener('DOMContentLoaded',(ev)=>{
	addEventListener('change',(ev)=>{
		if(fileInput.files[0].type.indexOf('image/') > -1){
			img.src=window.URL.createObjectURL(fileInput.files[0]);
		}
	});
});
/*
addEventListener('mousedown',(ev)=>{
	console.log(ev);
});

addEventListener('mouseup',(pv)=>{
	console.log(pv);
});
*/
