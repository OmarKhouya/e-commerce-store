import React from "react";
import Section from "../Section";

export default function Contact() {
  return (
    <Section className="col-lg-9 col-md-9 col-sm-12 mt-4 mb-2 d-flex justify-content-center ">
        <form className="mt-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="example@domain.com"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Alex diana"
            />
            <label htmlFor="purpose">Purpose</label>
            <input
              type="text"
              className="form-control"
              name="purpose"
              placeholder="Explain your purpos briefly"
            />
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              name="message"
              placeholder="tell us how could we help you"
            />
            <input type="submit" name="submit" className="btn btn-outline-dark mt-3" />
        </form>
    </Section>
  );
}
