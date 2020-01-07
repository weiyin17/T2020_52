console.log("Connected");

//constant URL value for API
const API_URL = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/10?from=01-01-2020&to=01-30-2020";

const API_HEADERS = {
	'Identity' : 'T17',
	'Token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc',
};



function displayTransaction(){
axios.get(API_URL, { headers: API_HEADERS })
	.then(response => {
		console.log(response.data);
	})
	.catch(error => console.error("On getting user data error", error))
}