// var user_customer_id = null;
// // Landing Functionality
// if (user_customer_id) {
//   console.log(user_customer_id);
//   window.location.href = "home.html";
// } else {
//   window.location.replace("login.html");
// }

// //Login Functionality
// var loginButton = document.querySelector('#loginButton');
// var errorMessage = document.querySelector('#errorMessage');

import axios from 'axios';
//constant URL value for API
const API_URL = "http://techtrek-api-gateway.ap-southeast-1.elasticbeanstalk.com";

const API_HEADERS = {
  'Identity': 'T17',
  'Token': 'b80d2754-ff74-4b67-b7b3-59e362a047bc',
};

const validateLogin = function(userName, customerId) {
  // console.log("clicking");
  console.log(userName);
  // console.log(form.customerId.value);
  // console.log(document.getElementById('customerId').value);
  let USER_NAME = userName;
  return new Promise((resolve, reject) => {
    axios({
      url: `${API_URL}/customers/${USER_NAME}`,
      method: 'get',
      headers: API_HEADERS,
    })
      .then(response => {
        console.log(response.data.customerId, customerId);
        if (response.data.customerId === customerId) {
          resolve(true);
        }
        else {
          resolve(false);
        }
      })
      .catch(error => console.error("On getting user data error", error));

  })
}

export default validateLogin;

// function loginFail() {
//   errorMessage.textContent = "Login failed. Try again.";