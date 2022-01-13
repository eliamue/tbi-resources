import React, { Component } from "react";
import { Link } from "react-router-dom";
import MailTo from "./MailTo";
import Nav from "./Nav";
import '../styles/App.css';
import "../styles/About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <Nav />
        <div className="suggestion-container">
          <h1 className="sug-header">Have a Suggestion?</h1>
          <h3 className="sug-description">
            Big or small, input is always welcome. Whether you have a resource
            you'd like to see added to the list, have a suggestion for improving
            the site's accessibility, or found a dead link, please reach out!
          </h3>
          <section className="sug-links">
            <Link to="/suggestions/add">Add Resource</Link>
            <div className="e-link">
              <MailTo label="Contact Me" mailto="mailto:eliamue@live.com" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}
