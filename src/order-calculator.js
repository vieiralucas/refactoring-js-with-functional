function sumOrders (orders, startDate, endDate) {
  var ordersFiltered = [];
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].date >= startDate && orders[i].date <= endDate) {
      ordersFiltered.push(orders[i]);
    }
  }

  var sum = 0;
  for (var o = 0; o < ordersFiltered.length; o++) {
    for (var i = 0; i < ordersFiltered[o].items.length; i++) {
      sum += ordersFiltered[o].items[i].product.price * ordersFiltered[o].items[i].quantity;
    }
  }

  return sum;
}

module.exports = sumOrders;

