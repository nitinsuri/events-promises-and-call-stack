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
      fetch('https://random-data-api.com/api/beer/random_beer')
        .then((res) => {
          return res.json();
        })
        .then((res) => resolve(res.id));
    });
  }
}

function validateCart() {
  return true;
}
