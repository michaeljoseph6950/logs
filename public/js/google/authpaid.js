var firebaseConfig = {
	apiKey: "AIzaSyCu_nRoURohiSg1EiPq0-j688c7h8huVb0",
	authDomain: "darkweb-cx.firebaseapp.com",
	projectId: "darkweb-cx",
	storageBucket: "darkweb-cx.appspot.com",
	messagingSenderId: "1055160986860",
	appId: "1:1055160986860:web:c6111daab14ed88c6449c9",
	measurementId: "G-RHT9YVDQEG"
};
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const logoHolder = document.getElementById("logo");
const avatarHolder = document.getElementById("avatar");
const jinaHolder = document.getElementById("jinaHolder");
const jinaHolder2 = document.getElementById("jinaHolder2");
const paidText = document.getElementById('paid-text');

const jinaHolder3 = document.getElementById('jinaHolder3');

const theMail = document.getElementById('the-mail');
const theId = document.getElementById('the-id');
const thePic = document.getElementById('the-pic');
const thenoPic = document.getElementById('the-nopic');
const theDate = document.getElementById('the-date');

const labelMail = document.getElementById('label-mail');

const mailField = document.getElementById('exampleInputEmail');
const signUp = document.getElementById('signUp');

const vpn = document.getElementById('vpn');
const pros = document.getElementById('pros');
const sunset = document.getElementById('sunset-fyde');
const emailhr = document.getElementById('email-hr');

auth.onAuthStateChanged(user => {
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
		jinaHolder2.innerText = 'User ID: ' + user.uid;
        jinaHolder3.value = user.displayName;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		paidText.innerHTML = `
			The cost of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your email inbox @ <span>${user.email}</span>. 
			The bank log files will be in text format. 
		`;

		theMail.innerText = user.email;
		sunset.style.display = 'none';
		emailhr.style.display = 'none';
		pros.innerHTML = `
			Pro tip: Check your mail inbox spam folder @<span>${user.email}</span> after buying logs
		`;
		if(user.email.includes('yahoo.com')){
			vpn.innerHTML = `
				View Profile
				<img src="img/partners/yah.png">
			`;
		} else {
			vpn.innerHTML = `
				View Profile
				<img src="img/partners/google.png">
			`;
		}
	} else if (!user.displayName && user.email) {
		var themail = user.email;
		var theaddress = themail.substring(0, themail.indexOf('@'));

		jinaHolder.value = theaddress;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
        jinaHolder3.value = theaddress;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		paidText.innerHTML = `
			The cost of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your email inbox @ <span>${user.email}</span>. 
			The bank log files will be in text format. 
		`;

		theMail.innerText = user.email;
		sunset.style.display = 'none';
		emailhr.style.display = 'none';
		pros.innerHTML = `
			Pro tip: Check your mail inbox spam folder @<span>${user.email}</span> after buying logs
		`;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/mail.png">
		`;
	} else if(user.phoneNumber && user.displayName) {
		jinaHolder.value = user.displayName;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
        jinaHolder3.value = user.displayName;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		paidText.innerHTML = `
			The cost of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your text messages inbox @ <span>${user.phoneNumber}</span>. 
			The bank log files will be sent as a link to your phone number. 
		`;

		labelMail.innerText = "Your Phone Number:";
		sunset.style.display = 'none';
		emailhr.style.display = 'none';
		pros.innerHTML = `
			Pro tip: Check your sms inbox @<span>${user.phoneNumber}</span> after buying logs
		`;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/pho.jpg">
		`;
	} else if(user.phoneNumber && !user.displayName) {
		jinaHolder.value = user.phoneNumber;
        jinaHolder3.value = user.phoneNumber;
		jinaHolder.readOnly = true;
		jinaHolder3.readOnly = true;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		paidText.innerHTML = `
			The cost of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment check your text messages inbox @ <span>${user.phoneNumber}</span>. 
			The bank log files will be sent as a link to your phone number. 
		`;

		labelMail.innerText = "Your Phone Number:";
		sunset.style.display = 'none';
		emailhr.style.display = 'none';
		pros.innerHTML = `
			Pro tip: Check your sms inbox @<span>${user.phoneNumber}</span> after buying logs
		`;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/pho.jpg">
		`;
	} else 	if (user.isAnonymous && user.displayName) {
		jinaHolder.value = user.displayName;
		jinaHolder3.value = user.displayName;
		paidText.innerHTML = `
			The cost of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment a text file will be available for download.
			The bank log files will be in text format. 
		`;
		jinaHolder2.innerText = 'User ID: ' + user.uid;
		theMail.innerText = '** Signed in Anonymously **';
		pros.innerHTML = `
			Pro tip: Link an email address on the site when buying logs to get an <span>email invoice</span>
		`;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/anonymous.png">
		`;
	} else 	if (user.isAnonymous && !user.displayName) {
		jinaHolder.value = 'Anonymous';
        jinaHolder3.value = 'Anonymous';
		paidText.innerHTML = `
			The cost of acquiring tools for spamming, and also the process itself is expensive, 
			Send $100 to complete your download.
			Do not close this page or navigate to any other page otherwise this progress will be lost
			<br>
			After this payment a text file will be available for download.
			The bank log files will be in text format. 
		`;

		jinaHolder2.innerText = 'User ID: ' + user.uid;
		theMail.innerText = '** Signed in Anonymously **';
		pros.innerHTML = `
			Pro tip: Link an email address on the site when buying logs to get an <span>email invoice</span>
		`;
		vpn.innerHTML = `
			View Profile
			<img src="img/partners/anonymous.png">
		`;
	}

    if(user.uid){
		theId.innerHTML = user.uid;
		theDate.innerHTML = new Date(user.metadata.b * 1);
	}
});










const sendVerificationEmail = () => {
	auth.currentUser.sendEmailVerification()
}

const signUpFunction = () => {
	event.preventDefault();
	const email = mailField.value;
	var actionCodeSettings = {
		url: 'https://www.logins.id/bitcoin',
		handleCodeInApp: true,
	};
	if(email.includes('@gmail.com')) {
		const googleProvider = new firebase.auth.GoogleAuthProvider;
		auth.signInWithPopup(googleProvider).then(() => {
			sendVerificationEmail();
			window.location.reload();
		}).catch(error => {
			alert(error.message)
		});
	} else if(email.includes('@yahoo.com')) {
		const yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
		auth.signInWithPopup(yahooProvider).then(() => {
			sendVerificationEmail();
			window.location.reload();
		}).catch(error => {
			alert(error.message);
		})
	} else {
		auth.sendSignInLinkToEmail(email, actionCodeSettings)
		.then(() => {
			alert('Verification link sent to your email ' + email + " check the spam / junk folder");
			window.localStorage.setItem('emailForSignIn', email);
		})
		.catch(error => {
			alert(error.message);
		});
	}
}
signUp.addEventListener('click', signUpFunction);
document.getElementById('the-form').addEventListener('submit', signUpFunction);

if (auth.isSignInWithEmailLink(window.location.href)) {
	var email = window.localStorage.getItem('emailForSignIn');
	if (!email) {
		localStorage.setItem('the-email', true)
		email = window.prompt('Enter your email for confirmation');
	}
	auth.signInWithEmailLink(email, window.location.href)
		.then((result) => {
			if (localStorage.getItem('the-email')) {
				sendVerificationEmail();
				window.location.reload();
			} else {
				alert('Return to previous tab, email has been confirmed');
				sendVerificationEmail();
				window.close();
			}
		})
		.catch((error) => {
			console.log('Wrong email entered')
		});
}


































if(!localStorage.getItem('received-funds')) {
	document.getElementById('logsection').style.display = 'none'
	document.getElementById('predat').style.display = 'flex';
} else {
	document.getElementById('you-sent').innerText = '$' + localStorage.getItem('received-funds').toLocaleString();
}



jinaHolder.addEventListener("change", () => {
	auth.currentUser.updateProfile({
		displayName: jinaHolder.value
	})
	.then(() => {
		alert('Display Name Updated Successfully !');
		jinaHolder3.value = jinaHolder.value;
	})
	.catch(error => {
		jinaHolder.focus()
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


fetch('https://ipapi.co/json/')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		document.getElementById('label-ip').innerHTML = `
			IP address: <span>${data.ip}</span> ${data.country_calling_code} <img src="https://countryflagsapi.com/png/${data.country_code}" id="the-flag" />
		`;
		document.getElementById('the-ip').innerHTML = ` ${data.region},  ${data.org}, ${data.city}, ${data.country_name}`;
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
