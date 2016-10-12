// determines if a date is between startDate and endDate
const isInRange = (date, startDate, endDate) => date >= startDate && date <= endDate;

// multiplies item price by its quantity
const itemTotal = item => item.product.price * item.quantity;

// sums items
const itemsAdder = (acc, item) => acc + itemTotal(item);

// sums oders
const ordersAdder = (acc, order) => acc + order.items.reduce(itemsAdder, 0);

const sumOrders = (orders, startDate, endDate) => orders
  .filter(({ date }) => isInRange(date, startDate, endDate))
  .reduce(ordersAdder, 0);

export default sumOrders;

