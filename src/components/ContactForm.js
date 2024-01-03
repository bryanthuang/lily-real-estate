import React, { useRef, useState } from "react";
import { Image, Grid, Dropdown, Button } from "semantic-ui-react";

import emailjs from "@emailjs/browser";
import "../styles/ContactForm.scss";

function ContactForm() {
  const options = [
    { key: 0, text: "Select One", value: "select" },
    { key: 1, text: "Buying a Home", value: "Buying a Home" },
    { key: 2, text: "Selling a Home", value: "Selling a Home" },
    { key: 3, text: "General Questions", value: "General Questions" },
  ];
  const [backspacePressedLast, setBackspacePressedLast] = useState(false);;
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setEmailSending(true);
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_75te625",
        "template_mqw9fok",
        form.current,
        "IG0TcmGB-2JQYLIqY"
      )
      .then(
        (result) => {
          setEmailSending(false);
          setEmailSent(true);
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  function keyUp(e) {
    var currentKey = e.which;

    if (currentKey === 8 || currentKey === 46) {
      setBackspacePressedLast(true);
    } else {
      setBackspacePressedLast(false);
    }
  }

  function inputChange(e) {
    if (backspacePressedLast) return;
    console.log(e);
    var pressed = e.target,
      currentValue = e.target.value,
      newValue = currentValue.replace(/\D+/g, ""),
      formattedValue = formatToTelephone(newValue);

    pressed.value = formattedValue;
  }

  function formatToTelephone(str) {
    var splitString = str.split(""),
      returnValue = "";

    for (var i = 0; i < splitString.length; i++) {
      var currentLoop = i,
        currentCharacter = splitString[i];

      switch (currentLoop) {
        case 0:
          returnValue = returnValue.concat("(");
          returnValue = returnValue.concat(currentCharacter);
          break;
        case 2:
          returnValue = returnValue.concat(currentCharacter);
          returnValue = returnValue.concat(") ");
          break;
        case 5:
          returnValue = returnValue.concat(currentCharacter);
          returnValue = returnValue.concat("-");
          break;
        default:
          returnValue = returnValue.concat(currentCharacter);
      }
    }

    return returnValue;
  }
  return (
    <Grid className="contact-form">
      <Grid.Column computer={16} mobile={12} tablet={12} verticalAlign="middle">
        <div className="subtitle">
          Fill out the form below and I will get back to you shortly.{" "}
        </div>
        <form ref={form} onSubmit={sendEmail} className="form-fields">
          <label>First Name </label>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <label>Last Name</label>
          <input type="text" name="last_name" required placeholder="Last Name"
/>
          <label>Email Address</label>
          <input type="email" name="email" required placeholder="Email"/>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone_number"
            onKeyUp={keyUp}
            onChange={inputChange}
            maxLength={14}
            required
            placeholder="(___)___-____"
          />
          <label>Are you interested in buying or selling?</label>
          <select className="ddl-select" id="list" name="buysell">
            {options.map(option => 
              <option value={option.value}>{option.text}</option>
            )}
          </select>
          <label>How did you hear about me?</label>
          <textarea name="message" required />
          {!emailSent && !emailSending && <Button value='submit' basic>Submit</Button>}
          {!emailSent && emailSending && <Button loading basic>Loading</Button>}
          {emailSent && !emailSending && <Button disabled basic>Email Sent</Button>}
        </form>
      </Grid.Column>
    </Grid>
  );
}

export default ContactForm;
