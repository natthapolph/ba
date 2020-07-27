import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Routing from "./routes";

const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
        </section>
      </div>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState((prev, props) => {
      const newState = !prev.modalState;

      return { modalState: newState };
    });
  }
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-light"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="">
                <img
                  src={"http://www.soc.ku.ac.th/logo/kulogo.png"}
                  alt="Ku"
                  width="40"
                  height="28"
                />
                <p> Kasetsart University</p>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <NavLink
                  exact
                  to="/"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/posts"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  Posts
                </NavLink>

                <NavLink
                  to="/about"
                  activeClassName="is-active"
                  className="navbar-item"
                >
                  About
                </NavLink>

                <a
                  className="navbar-item"
                  target="_blank"
                  onClick={this.toggleModal}
                >
                  Login <i className="fas fa-user"></i>
                </a>

                <Modal
                  closeModal={this.toggleModal}
                  modalState={this.state.modalState}
                  title="Login"
                >
                  <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </p>
                  </div>

                  <div className="field">
                    <p className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                  </div>
                  <div className="field is-centered">
                    <button className="button is-primary ">login</button>
                    <a href="#"> register now !</a>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </nav>

        <Routing />
      </div>
    );
  }
}

export default App;
