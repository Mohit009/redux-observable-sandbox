import * as React from "react";
import { chargeUsingThunk } from "../actions";
import { connect } from "react-redux";

class ThunkMiddlewareExample extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      charge: 0
    };
  }

  chargeSandwich = () => {
    const { chargeForSandwich } = this.props;
    chargeForSandwich(Math.random(0, 1) * 10);
  };

  render() {
    return (
      <>
        <h1>
          Thunk: Redux provides a slot into dispatch pipeline to add middleware.
          Here we can access the actions being dispatched and dispatch new
          actions.
        </h1>
        <h2>
          This makes components to stay simple, just dispatch actions and
          middleware will intercept these actions -> perform async logic ->
          dispatch actions to update store.
        </h2>
        <p>
          redux-thunk -> instead of dispatching plain objects as actions, now we
          can also dispatch functions (called thunks). (action) => action
          creator functions return (dispatch, getState) =>
        </p>
        <div>
          <input
            type="button"
            onClick={this.chargeSandwich}
            value="Charge Btn"
          />
        </div>
        <div>Charged Amount: {JSON.stringify(this.props.amount)}</div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.charge
});
const mapDispatchToProps = dispatch => ({
  chargeForSandwich: charge => dispatch(chargeUsingThunk(charge))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThunkMiddlewareExample);
