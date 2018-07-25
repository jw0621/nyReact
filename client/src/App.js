import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p> */}
        <div className="container">
          <div className="jumbotron" style="background-color: #20315A ; color: white;">
            <h1 className="text-center">
              <strong>
                <i className="fa fa-newspaper-o"></i> New York Times Search</strong>
            </h1>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <br />
              <div class="card">
                <div class="card-header">
                  <strong>
                    <i class="fa fa-list-alt"></i> Search Parameters</strong>
                </div>
                <div class="card-body">

                  <div role="form">

                    <div className="form-group">
                      <label for="search">Search Term:</label>
                      <input type="text" className="form-control" id="search-term">
                    </div>


                      <div className="form-group">
                        <label for="pwd">Number of Records to Retrieve:</label>
                        <select id="article-count" className="custom-select" aria-labelledby="dropdownMenuButton">
                          <option selected value="1">1</option>
                          <option value="5" selected>5</option>
                          <option value="10">10</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label for="start-year">Start Year (Optional):</label>
                        <input type="text" className="form-control" id="start-year">
                    </div>

                        <div className="form-group">
                          <label for="end-year">End Year (Optional):</label>
                          <input type="text" className="form-control" id="end-year">
                    </div>


                          <button type="submit" className="btn btn-default" id="run-search">
                            <i class="fa fa-search"></i> Search</button>
                          <button className="btn btn-default" id="clear-all">
                            <i class="fa fa-trash"></i> Clear Results</button>

                        </div>
                      </div>
                    </div>
                    </div>
                    </div>

                    );
                  }
                }
      
    export default App;
