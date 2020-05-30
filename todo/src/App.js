import React, { Component } from "react";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import TodoBuilder from "./Containers/TodoBuilder/TodoBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <TodoBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
