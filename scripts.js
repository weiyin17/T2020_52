//Login Functionality
var loginButton = document.querySelector('#loginButton');
var errorMessage = document.querySelector('#errorMessage');

//constant URL value for API
const API_URL = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com";

const API_HEADERS = {
	'Identity' : 'T17',
	'Token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc',
};

function validate(form) {
	// console.log("clicking");
	// console.log(form.userName.value);
	// console.log(form.customerId.value);
	// console.log(document.getElementById('customerId').value);
	let USER_NAME = form.userName.value;

	axios.get(`${API_URL}/customers/${USER_NAME}`, { headers: API_HEADERS })
	.then(response => {
		if(response.data.customerId === form.customerId.value) {
			window.location.href = "home.html";
		}
		else {
			loginFail(form);
		}
	})
	.catch(error => console.error("On getting user data error", error));
	
};

function loginFail() {
	errorMessage.textContent = "Login failed. Try again.";

}



