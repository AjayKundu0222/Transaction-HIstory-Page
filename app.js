let data={
  "userId": 1,
  "receipeintId": 1,
  "transactions": [
    {
      "id": 1957,
      "startDate": "2021-02-24T22:24:00",
      "endDate": "2021-02-24T22:24:02",
      "amount": 10000.0,
      "direction": 1,
      "type": 1,
      "status": 2,
      "statusType":"You Paid",
      // paid
      "description": "Rent",
      "customer": {
        "vPayId": 1,
        "vPay": "manindersingh@onebanc"
      },
      "partner": {
        "vPayId": 2,
        "vPay": "johnDoe@oenabanc"
      }
    },
    {
      "id": 1958,
      "startDate": "2021-02-24T21:28:00",
      "endDate": "0001-01-01T00:00:00",
      "amount": 250.0,
      "direction": 1,
      "type": 2,
      "status": 1,
      "statusType":"You Requested",
      // requested
      "description": "",
      "customer": {
        "vPayId": 1,
        "vPay": "manindersingh@onebanc"
      },
      "partner": {
        "vPayId": 2,
        "vPay": "johnDoe@oenabanc"
      }
    },
    {
      "id": 1959,
      "startDate": "2021-02-25T00:00:00",
      "endDate": "0001-01-01T00:00:00",
      "amount": 760.0,
      "direction": 2,
      "type": 1,
      "status": 2,
      "statusType":"You Received",
      // recieved
      "description": "",
      "customer": {
        "vPayId": 1,
        "vPay": "manindersingh@onebanc"
      },
      "partner": {
        "vPayId": 2,
        "vPay": "johnDoe@oenabanc"
      }
    },
    {
      "id": 1960,
      "startDate": "2021-02-25T21:28:40",
      "endDate": "0001-01-01T00:00:00",
      "amount": 1000.0,
      "direction": 2,
      "type": 2,
      "status": 1,
      "statusType":"Request Received",
      // request recieved
      "description": "Food",
      "customer": {
        "vPayId": 1,
        "vPay": "manindersingh@onebanc"
      },
      "partner": {
        "vPayId": 2,
        "vPay": "johnDoe@oenabanc"
      }
    },
    {
      "id": 1961,
      "startDate": "2021-02-27T22:24:40",
      "endDate": "2021-02-27T22:24:40",
      "amount": 1000.0,
      "direction": 1,
      "type": 1,
      "status": 2,
      "statusType":"You Paid",
      // confirmed
      "description": "Rent",
      "customer": {
        "vPayId": 1,
        "vPay": "manindersingh@onebanc"
      },
      "partner": {
        "vPayId": 2,
        "vPay": "johnDoe@oenabanc"
      }
    }
  ]
}

let str=''
for(let item of data.transactions)
{	
	 str+=`
				<div class="title">
					<span>${item.startDate}</span>
				</div>
				<div class="${item.direction===2?'row':'row active'}">
					<div class="card">
						<div class="line1">
							<div class="l">
								<big><i class="fa fa-rupee"></i>${item.amount}</big>
								<br>
								<tt>Transaction ID</tt>
								<br>
								<code>${item.id}</code>
							</div>
							<div class="r">
								<big><i class="fa fa-check"></i>${item.statusType}</big>
								<br>
								<br>
								<i class="fa   fa-chevron-right"></i>
							</div>
						</div>
						<div class="line2">
							${item.endDate}
						</div>
					</div>
					<div class="item"></div>
				</div>
	`
	document.querySelector(".modal-body").innerHTML=str
}