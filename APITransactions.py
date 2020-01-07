import requests
import json
import matplotlib.pyplot as plt

url = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/79?from=01-01-2018&to=01-30-2020"

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
transtag = ['TRANSPORT', 'TRANSFER', 'ONLINE', 'F&B', 'ATM', 'LEISURE']
transferamt = 0
onlineamt = 0
fandbamt = 0
atmamt = 0
leisureamt = 0
transportamt = 0



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
    # Recommend sending marketing messages for transport based on transport expenses
    for r in range(len(transtag)):
        if cattag == "TRANSPORT":
            transportamt = transportamt + round(float(amt), 2)
        elif cattag == "TRANSFER":
            transferamt = transferamt + round(float(amt), 2)
        elif cattag == "ONLINE":
            onlineamt = onlineamt + round(float(amt), 2)
        elif cattag == "F&B":
            fandbamt = fandbamt + round(float(amt), 2)
        elif cattag == "ATM":
            atmamt  = atmamt + round(float(amt), 2)
        elif cattag == "LEISURE":
            leisureamt = leisureamt + round(float(amt), 2)


print('Transport: $' + '%.2f' % transportamt)
print('Transfer: $' + '%.2f' % transferamt)
print('Online: $' + '%.2f' % onlineamt)
print('F&B: $' + '%.2f' % fandbamt)
print('ATM: $' + '%.2f' % atmamt)
print('Leisure: $' + '%.2f' % leisureamt)

expenses = [transportamt, transferamt, onlineamt, fandbamt, atmamt, leisureamt]

labels = ['Credit', 'Debit']
amt = [credamt, debitamt]
print('Credit Amount: $' + '%.2f' % credamt)
print('Debit Amount: $' + '%.2f' % debitamt)
savings = credamt - debitamt
print('Savings accrued: $' + '%.2f' % savings)
plt.pie(amt, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)
plt.legend(labels,
          title="Credit / Debit",
          loc="best")
plt.title('2018 - 2020 Transaction Summary')
plt.axis('equal')
plt.show()

# plt.hist(x=transtag, y=expenses, bins=40)
# plot.hist(weightList,density=1, bins=20)
plt.xlabel('Expenses')
plt.ylabel('($)')
plt.bar(transtag, expenses, align='center')
plt.show()
# plt.axis('equal')


