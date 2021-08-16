document.getElementById('btn').addEventListener("click", function() {
	let email = document.getElementById('email').value;
	let pass = document.getElementById('pass').value;


	if (email == "admin@gmail.com" && pass == "12345") {
		window.location.href = "admin.html";
	}else if(email == "demo@gmail.com" && pass == "a") {
		window.location.href = "user.html";
	}else{
		alert("This is wronge Information")
	};

});