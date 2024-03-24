export default function PromiseCart() {
  const cart = ['shoes', 'kurta', 'jeans'];
  const promise = createOrder(cart);

  promise
    .then(function (ordID) {
      console.log(ordID);
    })
    .catch((err) => {
      console.log(err.message);
    });
  function createOrder(cart) {
    return new Promise((resolve, reject) => {
      if (!validateCart()) {
        const err = new Error('Something is not right!');
        reject(err);
      }
      setTimeout(function () {
        resolve(23423432);
      }, 1000);
    });
  }
}

function validateCart() {
  return true;
}
