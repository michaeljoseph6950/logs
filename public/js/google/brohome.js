var firebaseConfig = {
	apiKey: "AIzaSyBBN4elJRDCog-yjgPa9pM0ZDr5fKlYvNA",
	authDomain: "logins-id7.firebaseapp.com",
	projectId: "logins-id7",
	storageBucket: "logins-id7.appspot.com",
	messagingSenderId: "353868186617",
	appId: "1:353868186617:web:ad7a3ea8742687c4c73328",
	measurementId: "G-Q32JQJ2BDH"
};
firebase.initializeApp(firebaseConfig);


var db = firebase.firestore();

const logoHolder = document.getElementById("logo");
const thePic = document.getElementById('the-pic');
const thenoPic = document.getElementById('the-nopic');
const theId = document.getElementById('the-id');
const theDate = document.getElementById('the-date');

const avatarHolder = document.getElementById("avatar");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");
const jinaHolder3 = document.getElementById('jinaHolder3');

const nameHolder1 = document.getElementById('nameBro1');
const nameHolder2 = document.getElementById('nameBro2');
const nameHolder3 = document.getElementById('nameBro3');
const email1 = document.getElementById('yourEmail1');
const email2 = document.getElementById('yourEmail2');
const email5 = document.getElementById('yourEmail5');

const displayNameField2 = document.getElementById('text2');
const editButton2 = document.getElementById('copy2');


const auth = firebase.auth();

auth.onAuthStateChanged(user => {
	let goodies = [];
	if (!user) {
		window.location.assign("index");
	}
	if (user.photoURL) {
		avatarHolder.setAttribute("src", user.photoURL);
		avatarHolder.style.display = 'block';
		thePic.setAttribute("src", user.photoURL);
		thePic.style.display = 'inline-block';
	} else if (!user.photoURL) {
		logoHolder.style.display = 'block';
		thenoPic.style.display = 'inline-block';
	}
	if (user.displayName && user.email) {
		jinaHolder.value = user.displayName;
		jinaHolder3.value = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.displayName;
		nameHolder2.value = user.displayName;
		nameHolder3.value = user.displayName;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = user.email;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		}
	} else if (!user.displayName && user.email) {
		var themail = user.email;
		var theaddress = themail.substring(0, themail.indexOf('@'));

		jinaHolder.value = theaddress;
		jinaHolder3.value = theaddress;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = theaddress;
		nameHolder2.value = theaddress;
		nameHolder3.value = theaddress;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = user.email;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = theaddress;
			}
		}
	} if (user.phoneNumber && user.displayName) {
		jinaHolder.value = user.displayName;
		jinaHolder3.value = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.displayName;
		nameHolder2.value = user.displayName;
		nameHolder3.value = user.displayName;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in with phone number ${user.phoneNumber}, you'll have to check your text messages for a link after buying any bank log`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		}
	}  if (user.phoneNumber && !user.displayName) {
		jinaHolder.value = user.phoneNumber;
		jinaHolder3.value = user.phoneNumber;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.phoneNumber;
		nameHolder2.value = user.phoneNumber;
		nameHolder3.value = user.phoneNumber;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in with phone number ${user.phoneNumber}, you'll have to check your text messages for a link after buying any bank log`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.phoneNumber;
			}
		}
	}  else if (user.isAnonymous && user.displayName) {
		jinaHolder.value = user.displayName;
		jinaHolder3.value = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = user.displayName;
		nameHolder2.value = user.displayName;
		nameHolder3.value = user.displayName;

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in anonymously, you can link a valid email address on the confirm page to get an email invoice`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = user.displayName;
			}
		}
	} else 	if (user.isAnonymous && !user.displayName) {
		jinaHolder.value = 'Anonymous';
		jinaHolder3.value = 'Anonymous';
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		nameHolder1.value = 'Anonymous';
		nameHolder2.value = 'Anonymous';
		nameHolder3.value = 'Anonymous';

		email2.innerHTML = `Use <strong>winrar software</strong> to extract bank log files from <strong>.zip</strong> format`;
		email5.innerHTML = `Logged in anonymously, you can link a valid email address on the confirm page to get an email invoice`;

		if (localStorage.getItem('banklogs') && ((JSON.parse(localStorage.getItem('banklogs')).length) > 0)) {
			goodies = JSON.parse(localStorage.getItem('banklogs'));
			for (var i = 0; i < goodies.length; i++) {
				document.getElementById(`name-on-table${items.indexOf(items[i])}`).innerHTML = 'Anonymous';
			}
		}
	}

	if(user.uid){
		theId.innerHTML = user.uid;
		theDate.innerHTML = new Date(user.metadata.b * 1);
	}

	if(platform.manufacturer !== null) {
		email1.innerHTML = `
		Bank log files will be saved on your <strong>${platform.manufacturer} 
		${platform.product} ${platform.os}</strong> Downloads folder
		`
	} else {
		email1.innerHTML = `
		Bank log files will be saved on your <strong>${platform.os}</strong> 
		Downloads folder from <strong>${platform.name}</strong> web browser 
		`
	}
});


const logOut = document.getElementById('logout');
logOut.addEventListener('click', () => {
    if(auth.currentUser.isAnonymous) {
		auth.currentUser.delete()
			.then(() => {
				window.location.assign('index');
			})
			.catch(error => {
				console.error(error);
			})
	} else {
		auth.signOut()
			.then(() => {
				window.location.assign('index');
			})
			.catch(error => {
				console.error(error);
			})
	}
})

jinaHolder.addEventListener("change", () => {
	auth.currentUser.updateProfile({
		displayName: jinaHolder.value
	})
	.then(() => {
		alert('Display Name Updated Successfully !');
		jinaHolder3.value = jinaHolder.value
	})
	.catch(error => {
		jinaHolder.focus();
	})
});

jinaHolder3.addEventListener("change", () => {
	auth.currentUser.updateProfile({
		displayName: jinaHolder3.value
	})
	.then(() => {
		alert('Display Name Updated Successfully !');
		jinaHolder.value = jinaHolder3.value;
	})
	.catch(error => {
		jinaHolder3.focus();
	})
});

var d = new Date();
var n = d.getMonth() + 1;
var y = d.getFullYear();
var m = d.getDate();

document.getElementById('photo2').addEventListener('change', (event) => {
	const file = event.target.files[0];
	const storageRef = firebase.storage().ref('images/images' + file.name);
	storageRef.put(file).on('state_changed', (snapshot) => {
		const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
		const progressBar_2 = document.getElementById("upload-pic");
		progressBar_2.style.width = progress + '%';
		document.getElementById('escoz-3').innerHTML = 'Upload Progress: ' + progress + '%';
	}, (err) => {
		console.log('an error has occurred')
	}, async () => {
		const url = await storageRef.getDownloadURL();

		var cartRow = document.createElement('div');
		cartRow.classList.add('col-xl-2', 'col-lg-3', 'col-md-4', 'col-6');
		var cartItems = document.getElementById('list');
		var cartRowContents = `
			<div class="bro">
				<div class="bro-img">
					<img src=${url}>
				</div>
				<div class="bro-text">
					<p>Uploaded on: ${n}/${m}/${y}</p>
					<p>Ticket ID: Tcr#4830</p>
				</div>
			</div>
		`;
		cartRow.innerHTML = cartRowContents;
		cartItems.prepend(cartRow);
	});
});
var storageRef2 = firebase.storage().ref();
var i = 0;
storageRef2.child('images/').listAll().then(function(result) {
	result.items.forEach(function(imageRef) {
		i++;
		displayImage(i, imageRef);
	})
})

function displayImage(row, images) {
	images.getDownloadURL().then(function(url) {
		var cartRow = document.createElement('div');
		cartRow.classList.add('col-xl-2', 'col-lg-3', 'col-md-4', 'col-6', 'items');
		var cartItems = document.getElementById('list');
		var cartRowContents = `
			<div class="bro">
				<div class="bro-img">
					<img src=${url}>
				</div>
				<div class="bro-text">
					<p>Uploaded on: ${n}/${m}/${y}</p>
					<p>Ticket ID: Tcr#4830</p>
				</div>
			</div>
		`;
		cartRow.innerHTML = cartRowContents;
		cartItems.prepend(cartRow);
	})
}




fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('footer-email').innerHTML = `
		Your IP address: ${data.ip}, ${data.city}, ${data.country_name}, ${data.org}, ${data.region}, ${data.country_calling_code}
		<img src="https://countryflagsapi.com/png/${data.country_code}" id="the-flag" />
    `;
	});

document.getElementById("thebodyz").oncontextmenu = function() {
	return false
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 1
setInterval(drawClock, 1000);

function drawClock() {
	drawFace(ctx, radius);
	drawNumbers(ctx, radius);
	drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
	var grad;
	ctx.beginPath();
	ctx.arc(0, 0, radius, 0, 2 * Math.PI);
	ctx.fillStyle = 'white';
	ctx.fill();
	grad = ctx.createRadialGradient(0, 0, radius * 0.05, 0, 0, radius * 2.5);
	grad.addColorStop(0, '#121d33');
	grad.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad.addColorStop(1, '#121d33');
	ctx.strokeStyle = grad;
	ctx.lineWidth = radius * 0;
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
	ctx.fillStyle = '#121d33';
	ctx.fill();
}

function drawNumbers(ctx, radius) {
	var ang;
	var num;
	ctx.font = radius * 0.33 + "px arial";
	ctx.textBaseline = "middle";
	ctx.textAlign = "center";
	for (num = 1; num < 13; num++) {
		ang = num * Math.PI / 6;
		ctx.rotate(ang);
		ctx.translate(0, -radius * 0.87);
		ctx.rotate(-ang);
		ctx.fillText(num.toString(), 0, 0);
		ctx.rotate(ang);
		ctx.translate(0, radius * 0.87);
		ctx.rotate(-ang);
	}
}

function drawTime(ctx, radius) {
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	//hour
	hour = hour % 12;
	hour = (hour * Math.PI / 6) +
		(minute * Math.PI / (6 * 60)) +
		(second * Math.PI / (360 * 60));
	drawHand(ctx, hour, radius * 0.5, radius * 0.07);
	//minute
	minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
	drawHand(ctx, minute, radius * 0.8, radius * 0.07);
	// second
	second = (second * Math.PI / 30);
	drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
	ctx.beginPath();
	ctx.lineWidth = width;
	ctx.lineCap = "round";
	ctx.moveTo(0, 0);
	ctx.rotate(pos);
	ctx.lineTo(0, -length);
	ctx.stroke();
	ctx.rotate(-pos);
}



function getItems() {
	db.collection("todo-items").onSnapshot((snapshot) => {
		let items = [];
		snapshot.docs.forEach((doc) => {
			items.push({
				id: doc.id,
				...doc.data()
			})
		})
		generateItems(items);
	})
}


function generateItems(items) {
	let todoItems = []
	items.forEach((item) => {

		let todoItem = document.createElement("div");
		todoItem.classList.add('alert', 'alert-primary', 'alert-dismissible');
		let checkContainer = document.createElement("div");
		checkContainer.classList.add("check");
		let checkMark = document.createElement("button");
		checkMark.classList.add("btn-close");
		checkMark.innerHTML = `&times;`;
		checkMark.addEventListener("click", function() {
			markCompleted(item.id);
		})
		checkContainer.appendChild(checkMark);
		todoItem.innerText = item.text;
		todoItem.appendChild(checkContainer);
		todoItems.push(todoItem)
	})
	document.querySelector(".todo-items").replaceChildren(...todoItems);
}



function addItem(event) {
	event.preventDefault();
	let text = document.getElementById("todo-input");
	let newItem = db.collection("todo-items").add({
		text: text.value,
		status: "active"
	})
	text.value = "";
}

function markCompleted(id) {
	let item = db.collection("todo-items").doc(id);
	item.get().then(function(doc) {
		if (doc.exists) {
			if (doc.data().status == "active") {
				item.update({
					status: "completed"
				});
				item.delete();
			} else {
				item.update({
					status: "active"
				})
			}
		}
	})
}

getItems();

















var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var radius2 = canvas2.height / 2;
ctx2.translate(radius2, radius2);
radius2 = radius2 * 1
setInterval(drawClock2, 1000);

function drawClock2() {
	drawFace2(ctx2, radius2);
	drawNumbers2(ctx2, radius2);
	drawTime2(ctx2, radius2);
}

function drawFace2(ctx2, radius2) {
	var grad2;
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2, 0, 2 * Math.PI);
	ctx2.fillStyle = 'white';
	ctx2.fill();
	grad2 = ctx2.createRadialGradient(0, 0, radius2 * 0.05, 0, 0, radius2 * 2.5);
	grad2.addColorStop(0, '#121d33');
	grad2.addColorStop(0.5, 'rgba(0,0,0,0)');
	grad2.addColorStop(1, '#121d33');
	ctx2.strokeStyle = grad2;
	ctx2.lineWidth = radius2 * 0;
	ctx2.stroke();
	ctx2.beginPath();
	ctx2.arc(0, 0, radius2 * 0.1, 0, 2 * Math.PI);
	ctx2.fillStyle = '#121d33';
	ctx2.fill();
}

function drawNumbers2(ctx2, radius2) {
	var ang2;
	var num2;
	ctx2.font = radius2 * 0.33 + "px arial";
	ctx2.textBaseline = "middle";
	ctx2.textAlign = "center";
	for (num2 = 1; num2 < 13; num2++) {
		ang2 = num2 * Math.PI / 6;
		ctx2.rotate(ang2);
		ctx2.translate(0, -radius2 * 0.87);
		ctx2.rotate(-ang2);
		ctx2.fillText(num2.toString(), 0, 0);
		ctx2.rotate(ang2);
		ctx2.translate(0, radius2 * 0.87);
		ctx2.rotate(-ang2);
	}
}

function drawTime2(ctx2, radius2) {
	var now2 = new Date();
	var hour2 = now2.getHours();
	var minute2 = now2.getMinutes();
	var second2 = now2.getSeconds();
	//hour
	hour2 = hour2 % 12;
	hour2 = (hour2 * Math.PI / 6) +
		(minute2 * Math.PI / (6 * 60)) +
		(second2 * Math.PI / (360 * 60));
	drawHand2(ctx2, hour2, radius2 * 0.5, radius2 * 0.07);
	//minute
	minute2 = (minute2 * Math.PI / 30) + (second2 * Math.PI / (30 * 60));
	drawHand2(ctx2, minute2, radius2 * 0.8, radius2 * 0.07);
	// second
	second2 = (second2 * Math.PI / 30);
	drawHand2(ctx2, second2, radius2 * 0.9, radius2 * 0.02);
}

function drawHand2(ctx, pos, length, width) {
	ctx2.beginPath();
	ctx2.lineWidth = width;
	ctx2.lineCap = "round";
	ctx2.moveTo(0, 0);
	ctx2.rotate(pos);
	ctx2.lineTo(0, -length);
	ctx2.stroke();
	ctx2.rotate(-pos);
}
