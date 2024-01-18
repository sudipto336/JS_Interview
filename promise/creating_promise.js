const cart = ["Mobile", "Laptop"];

createOrder(cart)
  .then((orderId) => {
    console.log("Order id: " + orderId);
    return proceedToPayment(orderId);
  })
  .catch((err) => {
    console.log(err);
  })
  .then((paymentInfo) => {
    console.log("Payment info: " + paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then((orderSummary) => {
    console.log("Order Summary: " + orderSummary);
    return updateWallet(orderSummary);
  })
  .then((walletBalance) => {
    console.log("Wallet balance: " + walletBalance);
  })
  .catch((err) => {
    console.log(err);
  });

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart items are not valid");
      reject(err);
    }
    const dummyOrderId = 12345;
    if (dummyOrderId) {
      setTimeout(() => {
        resolve(dummyOrderId);
      }, 5000);
    } else {
      const err = new Error("Order id is not valid");
      reject(err);
    }
  });
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (!validateOrder(orderId)) {
      const err = new Error("Order id is not valid");
      reject(err);
    }
    const dummyPaymentId = 67890;
    if (dummyPaymentId) {
      resolve(
        `Payment received successfully with payment id: ${dummyPaymentId}`
      );
    } else {
      const err = new Error("Payment id is not valid");
      reject(err);
    }
  });
}

function showOrderSummary(paymentInfo) {
  return new Promise((resolve, reject) => {
    resolve(`This is your order summary and payment info is ${paymentInfo}`);
  });
}

function updateWallet(orderSummary) {
  return new Promise((resolve, reject) => {
    const walletBalance = 10;
    resolve(`${walletBalance}`);
  });
}

function validateCart(cart) {
  return cart !== null && cart !== undefined && cart.length > 0;
}

function validateOrder(orderId) {
  return orderId !== null && orderId !== undefined;
}
