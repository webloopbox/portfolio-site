import React from "react";
import UnderLine from "./UnderLineEffect";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import validator from "validator";
import * as emailjs from "emailjs-com";

const initialState = {
  username: "",
  surname: "",
  email: "",
  phoneNumber: "",
  message: "",
  usernameError: "",
  surnameError: "",
  emailError: "",
  phoneNumberError: "",
  messageError: "",
  disableSubmit: true,
  submitMessage: false,
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initialIsCapital(word) {
    return word[0] !== word[0].toLowerCase();
  }

  validate() {
    let fields = [
      this.state.username,
      this.state.surname,
      this.state.phoneNumber,
      this.state.message,
      this.state.email,
    ];
    let errors = ["", "", "", "", ""];

    fields.map((item, index) => {
      if (!item) {
        errors[index] += "Uzupełnij brakujące pole";
      }
    });

    if (fields[0]) {
      if (!this.initialIsCapital(fields[0])) {
        errors[0] = "Pole powinno zaczynać się z dużej litery";
      }
    }
    if (fields[1]) {
      if (!this.initialIsCapital(fields[1])) {
        errors[1] = "Pole powinno zaczynać się z dużej litery";
      }
    }

    if (!validator.isMobilePhone(fields[2])) {
      errors[2] = "Niepoprawny numer telefonu";
    }

    if (!validator.isEmail(fields[4])) {
      errors[4] = "Niepoprawny adres email";
    }

    let usernameError = errors[0];
    let surnameError = errors[1];
    let phoneNumberError = errors[2];
    let messageError = errors[3];
    let emailError = errors[4];

    if (
      usernameError ||
      emailError ||
      surnameError ||
      phoneNumberError ||
      messageError
    ) {
      this.setState({
        usernameError,
        emailError,
        surnameError,
        phoneNumberError,
        messageError,
      });
      return false;
    }

    return true;
  }

  handleSubmit(e) {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      emailjs
        .sendForm(
          "smtp_server",
          "contact",
          ".contact_submit",
          "user_nybD6PQmmtceHmYidmfss"
        )
        .then()
        .catch();
      this.setState(initialState);
      this.setState((prev) => ({
        submitMessage: true,
      }));
      setTimeout(() => {
        this.setState((prev) => ({
          submitMessage: false,
        }));
      }, 1500);
    }
  }

  handleChange = (event) => {
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (
          this.state.username !== "" &&
          this.state.surname !== "" &&
          this.state.email !== "" &&
          this.state.phoneNumber !== "" &&
          this.state.message !== ""
        ) {
          this.setState((prev) => ({ disableSubmit: false }));
        } else {
          this.setState((prev) => ({ disableSubmit: true }));
        }
      }
    );
  };

  render() {
    return (
      <section id="contact-100w">
        <div id="contact" className="section-contact">
          <h2 className="section-title">
            <Fade left>KONTAKT</Fade>
          </h2>
          <UnderLine />

          <div className="contact-items">
            <div id="contact-form">
              <Fade delay={100}>
                <h4>
                  Dla usprawnienia współpracy przygotowałem formularz
                  kontaktowy, dzięki któremu mogę lepiej oszacować koszty
                  realizacji i opracować wstępną ofertę. Możesz również napisać
                  do mnie bezpośrednio na mój adres e-mail, który znajduje się
                  poniżej.
                </h4>

                <hr className="contact-divider" />
              </Fade>
              <Fade delay={200}>
                <form
                  onSubmit={this.handleSubmit.bind(this)}
                  className="contact_submit"
                >
                  <div className="form-field">
                    <input
                      id="username"
                      type="text"
                      value={this.state.username}
                      onChange={this.handleChange}
                      placeholder="Imię*"
                      name="username"
                    />
                    <p className="error-message">{this.state.usernameError}</p>
                  </div>
                  <div className="form-field">
                    <input
                      id="surname"
                      type="text"
                      value={this.state.surname}
                      onChange={this.handleChange}
                      placeholder="Nazwisko*"
                      name="surname"
                    />
                    <p className="error-message">{this.state.surnameError}</p>
                  </div>
                  <div className="form-field">
                    <input
                      id="email"
                      type="text"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Email*"
                      name="email"
                    />
                    <p className="error-message">{this.state.emailError}</p>
                  </div>
                  <div className="form-field">
                    <input
                      id="phonenumber"
                      type="text"
                      value={this.state.phoneNumber}
                      onChange={this.handleChange}
                      placeholder="Numer telefonu"
                      name="phoneNumber"
                    />
                    <p className="error-message">
                      {this.state.phoneNumberError}
                    </p>
                  </div>
                  <div className="form-field">
                    <textarea
                      name="message"
                      id="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      placeholder="Treść wiadomości*"
                    />
                    <p className="error-message">{this.state.messageError}</p>
                  </div>
                  <button
                    disabled={this.state.disableSubmit}
                    id="submit"
                    type="submit"
                  >
                    <i className="fas fa-paper-plane"></i> WYŚLIJ
                  </button>
                  <p
                    id={
                      this.state.submitMessage
                        ? "send-message"
                        : "send-message-none"
                    }
                  >
                    <i className="fas fa-check"></i> Wiadomość została wysłana
                  </p>
                </form>
              </Fade>
            </div>
            <div id="contact-more">
              <Reveal effect="fadeInUp">
                <div>
                  <svg id="envelope-icon" viewBox="0 0 270 214" fill="none">
                    <g clipPath="url(#prefix__clip0)">
                      <g id="left-down-envelope">
                        <path
                          d="M121.763 99L47 121.335l13.655 45.902 74.762-22.336L121.763 99z"
                          fill="url(#prefix__paint0_linear)"
                        />
                        <path
                          d="M120.507 100.696l-72.25 21.505 12.787 42.825 72.25-21.505-12.787-42.825z"
                          fill="#fff"
                        />
                        <g opacity={0.6} fill="#4C83E7">
                          <path
                            opacity={0.6}
                            d="M54.409 131.308l9.191-2.736-2.028-6.792-9.191 2.736 2.028 6.792zM65.893 142.277l35.298-10.506-.658-2.202-35.297 10.506.657 2.202zM76.878 144.201l25.738-7.661-.438-1.468-25.738 7.66.438 1.469z"
                          />
                        </g>
                      </g>
                      <g id="right-up-envelope">
                        <path
                          d="M130.167 56L121 103l76.599 14.894 9.167-47L130.167 56z"
                          fill="url(#prefix__paint1_linear)"
                        />
                        <path
                          d="M130.878 57.354l-8.556 43.864 74.003 14.389 8.555-43.864-74.002-14.389z"
                          fill="#fff"
                        />
                        <g opacity={0.6} fill="#4C83E7">
                          <path
                            opacity={0.6}
                            d="M132.07 68.27l9.414 1.831 1.357-6.956-9.414-1.83-1.357 6.956zM137.152 83.31l36.153 7.03.44-2.255-36.153-7.03-.44 2.255zM145.991 90.104l26.362 5.125.294-1.504-26.362-5.126-.294 1.505z"
                          />
                        </g>
                      </g>
                      <g id="right-down-envelope">
                        <path
                          d="M193.998 96L150 115.055l31.055 71.479 43.998-19.055L193.998 96z"
                          fill="url(#prefix__paint2_linear)"
                        />
                        <path
                          d="M193.28 97.351l-41.062 17.784 30.002 69.056 41.062-17.783-30.002-69.057z"
                          fill="#fff"
                        />
                        <g opacity={0.6} fill="#47E6B1">
                          <path
                            opacity={0.6}
                            d="M184.932 104.523l3.817 8.785 6.512-2.82-3.817-8.785-6.512 2.82zM175.389 117.215l14.658 33.737 2.11-.914L177.5 116.3l-2.111.915zM174.784 128.332l10.688 24.6 1.408-.61-10.688-24.6-1.408.61z"
                          />
                        </g>
                      </g>
                      <g id="left-up-envelope">
                        <path
                          d="M138.548 43L65 69.047l16.033 45.128 73.548-26.047L138.548 43z"
                          fill="url(#prefix__paint3_linear)"
                        />
                        <path
                          d="M137.357 44.688L66.302 69.852l14.962 42.117 71.056-25.164-14.963-42.117z"
                          fill="#fff"
                        />
                        <g opacity={0.6} fill="#D663FF">
                          <path
                            opacity={0.6}
                            d="M72.889 78.65l9.039-3.2-2.373-6.68-9.04 3.202 2.374 6.679zM84.92 89.024l34.713-12.293-.769-2.166L84.15 86.86l.77 2.165zM95.988 90.385l25.312-8.964-.513-1.444-25.312 8.964.513 1.444z"
                          />
                        </g>
                      </g>
                      <path
                        d="M135.095 2.851L44.238 88.25V214h181.71V88.249L135.095 2.851z"
                        fill="url(#prefix__paint4_linear)"
                      />
                      <path
                        d="M225.027 211.241H45.159V88.045l89.936-83.661 89.932 83.66v123.197z"
                        fill="#fff"
                      />
                      <g id="inside-envelope">
                        <path
                          d="M197.708 64H72.478v147.098h125.23V64z"
                          fill="url(#prefix__paint5_linear)"
                        />
                        <path
                          d="M196.127 65.226H74.059v145.872h122.068V65.226z"
                          fill="#fff"
                        />
                        <path
                          d="M118.058 93.418H92.581v4.291h25.477v-4.29z"
                          fill="#47E6B1"
                        />
                        <path
                          d="M177.605 104.759H92.581v4.291h85.024v-4.291zM177.605 112.112H92.581v4.291h85.024v-4.291zM177.605 119.468H92.581v4.291h85.024v-4.291zM177.605 126.821H92.581v4.291h85.024v-4.291zM131.256 134.177H92.581v4.292h38.675v-4.292z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M177.605 134.177H138.93v4.292h38.675v-4.292z"
                          fill="#638FFF"
                        />
                      </g>
                      <path
                        d="M45.159 88.045l89.936 61.598-89.936 61.599V88.045z"
                        fill="#F5F5F5"
                      />

                      <path
                        d="M225.027 88.045l-89.932 61.598 89.932 61.599V88.045z"
                        fill="#F5F5F5"
                      />
                      <path
                        d="M45.159 211.238l86.404-67.118a5.703 5.703 0 017.054 0l86.41 67.118H45.159z"
                        fill="url(#prefix__paint6_linear)"
                      />
                      <path
                        d="M45.159 211.238l86.404-64.186a5.91 5.91 0 017.054 0l86.41 64.186H45.159z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="prefix__paint0_linear"
                        x1={98.036}
                        y1={156.069}
                        x2={84.328}
                        y2={110.184}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="gray" stopOpacity={0.25} />
                        <stop
                          offset={0.54}
                          stopColor="gray"
                          stopOpacity={0.12}
                        />
                        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient
                        id="prefix__paint1_linear"
                        x1={5762.01}
                        y1={13695.1}
                        x2={8062.06}
                        y2={1865.73}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="gray" stopOpacity={0.25} />
                        <stop
                          offset={0.54}
                          stopColor="gray"
                          stopOpacity={0.12}
                        />
                        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient
                        id="prefix__paint2_linear"
                        x1={-27922.7}
                        y1={24804.8}
                        x2={-16855.7}
                        y2={19996.6}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="gray" stopOpacity={0.25} />
                        <stop
                          offset={0.54}
                          stopColor="gray"
                          stopOpacity={0.12}
                        />
                        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient
                        id="prefix__paint3_linear"
                        x1={-733.225}
                        y1={11866.1}
                        x2={-3205.88}
                        y2={4884.08}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="gray" stopOpacity={0.25} />
                        <stop
                          offset={0.54}
                          stopColor="gray"
                          stopOpacity={0.12}
                        />
                        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient
                        id="prefix__paint4_linear"
                        x1={79208.3}
                        y1={145951}
                        x2={79208.3}
                        y2={1947.53}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="gray" stopOpacity={0.25} />
                        <stop
                          offset={0.54}
                          stopColor="gray"
                          stopOpacity={0.12}
                        />
                        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient
                        id="prefix__paint5_linear"
                        x1={54630.4}
                        y1={80189.8}
                        x2={54630.4}
                        y2={10300.6}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="gray" stopOpacity={0.25} />
                        <stop
                          offset={0.54}
                          stopColor="gray"
                          stopOpacity={0.12}
                        />
                        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
                      </linearGradient>
                      <linearGradient
                        id="prefix__paint6_linear"
                        x1={108020}
                        y1={53904.1}
                        x2={108020}
                        y2={38819.7}
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="gray" stopOpacity={0.25} />
                        <stop
                          offset={0.54}
                          stopColor="gray"
                          stopOpacity={0.12}
                        />
                        <stop offset={1} stopColor="gray" stopOpacity={0.1} />
                      </linearGradient>
                      <clipPath id="prefix__clip0">
                        <path fill="#fff" d="M0 0h270v214H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </Reveal>

              <Fade>
                <div className="own-mail">
                  <img id="e-mail" src="./assets/e-mail-icon.svg" />
                  kontakt@pawelmarek.com
                </div>
              </Fade>
              <div className="contact-more">
                <Fade right cascade>
                  <a
                    href="https://www.facebook.com/profile.php?id=100006214383201"
                    target="_blank"
                  >
                    <img src="./assets/fb-icon.svg" />
                  </a>
                  <a href="http://m.me/100006214383201" target="_blank">
                    <img src="./assets/msg-icon.svg" />
                  </a>
                  <a href="https://github.com/webloopbox" target="_blank">
                    <img src="./assets/github.svg" />
                  </a>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
