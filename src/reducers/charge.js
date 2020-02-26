const charge = (state = "0.00", action) => {
  switch (action.type) {
    case "CHARGE":
      return action.amount;
    default:
      return state;
  }
};
export default charge;
