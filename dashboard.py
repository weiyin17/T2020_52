import requests
import json
first = 0
i=0
url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/10?from=01-01-2018&to=01-30-2020"

myResponse = requests.get(
    url,
    headers={'identity': 'T17', 'token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc'},
)

if(myResponse.ok):
    json_data = myResponse.json()
    length = len(json_data)

    amount = 0
    #print balance
    for i in range(length):
        if(json_data[i]['type'] == "CREDIT"):
            amount += float(json_data[i]['amount'])
        else:
            amount -= float(json_data[i]['amount'])

        #print every amount
        #print(json_data[i]['date']+": "+json_data[i]['amount'])
    print(round(amount,2))


