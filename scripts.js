console.log("Connected");

//constant URL value for API
const API_URL = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com";

const API_HEADERS = {
	'Identity' : 'T17',
	'Token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc',
};

// variable to store user data
let USER_DATA = '';
let USER_NAME = 'limzeyang';

axios.get(`${API_URL}/customers/${USER_NAME}`, { headers: API_HEADERS })
	.then(response => {
		console.log(response.data);
	})
	.catch(error => console.error("On getting user data error", error))