var ctx = document.getElementById("myChart").getContext('2d');

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

    var profit = 0;
    var loss = 0;
    var count = Object.keys(myObject).length;

    for (var i = 0; i < count ; i++)
    {
        if(response.data.type = "CREDIT")
            profit+= response.data.amount;
        else
            loss+= response.data.amount;
    }


var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
datasets: [{
label: '# of Votes',
data: [profit, loss],
backgroundColor: [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',

],
borderColor: [
'rgba(255,99,132,1)',
'rgba(54, 162, 235, 1)',

],
borderWidth: 1
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});