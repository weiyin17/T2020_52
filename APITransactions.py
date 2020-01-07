import requests
import json
import matplotlib.pyplot as plt

url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/10?from=01-01-2018&to=12-31-2018"

payload = {}
headers = {
  'Identity': 'T17',
  'Token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc'
}

response = requests.request("GET", url, headers=headers, data = payload)

json_data = json.loads(response.content)

credamt = 0
debitamt = 0
tagamt = []
transtag = ['TRANSFER', 'ONLINE', 'F&B', 'ATM', 'LEISURE', 'TRANSPORT'], tagamt


for i in range(len(json_data)):
    print(json_data[i]['type'])
    label = json_data[i]['type']
    print(json_data[i]['amount'])
    amt = json_data[i]['amount']
    if label == "CREDIT":
        credamt = credamt + round(float(amt), 2)
    else:
        debitamt = debitamt + round(float(amt), 2)

    print(json_data[i]['tag'])
    cattag = json_data[i]['tag']
    # df = pd.read_json(json_data)
    # print(df)

    # for r in range(len(transtag)):
    #     if cattag == transtag[r]:
    #         transtag[r].append(amt)

print(transtag)
labels = ['Credit', 'Debit']
amt = [credamt, debitamt]
print('Credit Amount: ' + '%.2f' % credamt)
print('Debit Amount: ' + '%.2f' % debitamt)
savings = credamt - debitamt
print('Savings accrued: ' + '%.2f' % savings)
plt.pie(amt, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)
plt.legend(labels,
          title="Credit / Debit",
          loc="best")
plt.title('2018 Transaction Summary')
plt.axis('equal')
plt.show()


# plt.axis('equal')


