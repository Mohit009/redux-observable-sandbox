export const makeSandwich = (person, sandwichType) => {
  return {
    type: "MAKE_SANDWICH",
    person,
    sandwichType
  };
};

export const chargeForSanwich = amount => {
  return {
    type: "CHARGE",
    amount
  };
};

export const chargeUsingThunk = amount => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(chargeForSanwich(amount));
    }, 300);
  };
};
