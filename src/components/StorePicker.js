import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -> </button>
      </form>
    );
    // You can create element with React this way:
    // return React.createElement('p', { className: 'greeting'}, 'Good Morning!!');
    // return (
    //   // way to have all in one piece: <React.Fragment></React.Fragment>
    //   {/* "{}" informs React - I am doing js in here. And there is a way to add a commeent */}
    // )
  }
}

export default StorePicker;
