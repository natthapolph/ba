import React from "react";
import "../Register/index.css";
export default () => (
  <form action="index.html" class="login-form">
    <h1 className="title">Register </h1>

    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email" />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
      </p>
    </div>

    <div className="field">
      <p className="control has-icons-left has-icons-right">
        <input className="input" type="email" placeholder="Email" />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
      </p>
    </div>

    <div className="field">
      <p className="control has-icons-left">
        <input className="input" type="password" placeholder="Password" />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </p>
    </div>
  </form>
);
