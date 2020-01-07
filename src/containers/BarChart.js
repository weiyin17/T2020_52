import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import axios from 'axios';

class BarChart extends React.Component {
  constructor() {
    super();
    this.state = {
      profit: 0,
      loss: 0,
      dataBar: {},
    };
    this.updateBarChartData = this.updateBarChartData.bind(this);
  }

  componentDidMount() {
    this.pullBarChartData();
  }

  state = {

  }

  pullBarChartData() {
    const API_URL = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com/transactions/10?from=01-01-2020&to=01-30-2020";

    const API_HEADERS = {
      'Identity': 'T17',
      'Token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc',
    };

    return new Promise((resolve, reject) => {
      axios({
        url: `${API_URL}`,
        method: 'get',
        headers: API_HEADERS,
      })
        .then(response => {
          if (response.data) {
            console.log(response.data);
            var count = Object.keys(response.data).length;
            var calcProfit = 0;
            var calcLoss = 0;
            console.log(count);
            for (var i = 0; i < count; i++) {
              if (response.data[i].type === "CREDIT") {
                calcProfit += response.data[i].amount;
                console.log(calcProfit);
              }
                else
                this.setState({ loss: this.state.loss + response.data[i].amount });

            }
            this.setState({profit: calcProfit, loss: calcLoss});
            resolve(true);
          }
          else {
            resolve(false);
          }
        })
        .catch(error => console.error("On getting user data error", error));
    })
  }

  updateBarChartData() {
    this.setState({
      dataBar: {
        labels: ["Profit", "Loss"],
        datasets: [
          {
            label: "% of Votes",
            data: [this.state.profit, this.state.loss],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 2,
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
            ]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              },
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    })
  }


  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Bar chart</h3>
        <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default BarChart;