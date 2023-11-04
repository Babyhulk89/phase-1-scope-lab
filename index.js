var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'; // Note: This is not a good practice, but it's for demonstration purposes.
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // Modifies the global variable.
}


const leastFavoriteCustomer = 'someone';


function changeLeastFavoriteCustomer() {
  // This will throw an error because you cannot reassign a constant.
  leastFavoriteCustomer = 'new least favorite';
}
