import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header></Header>
        </div>
        <Inventory></Inventory>
      </div>
      <Order></Order>
    )
  }
}

export default App;
