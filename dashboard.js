console.log("Connected");
displayTransaction();

//constant URL value for API
const API_URL = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/10?from=01-01-2020&to=01-30-2020";

const API_HEADERS = {
	'Identity' : 'T17',
	'Token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc',
};
axios.get(API_URL, { headers: API_HEADERS })
	.then(response => {
		console.log(response.data);
	})
	.catch(error => console.error("On getting user data error", error))

    var test = response.data;
    var tmp = JSON.stringify(response.data);
	var obj = JSON.parse(tmp);





function displayTransaction(){
document.querySelector("user").textContent =
"Name: " + test.amount
}