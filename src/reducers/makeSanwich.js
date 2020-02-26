const makeSandwich = (state = { person: "", sandwichType: "" }, action) => {
  switch (action.type) {
    case "MAKE_SANDWICH":
      return {
        person: action.person,
        sandwichType: action.sandwichType
      };
    default:
      return state;
  }
};
export default makeSandwich;
