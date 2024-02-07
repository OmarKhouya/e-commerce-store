import React from "react";
import Section from "../Layout/Section";

export default function Contact() {
  return (
    <Section className="col-lg-9 col-md-9 col-sm-12 mt-4 mb-2 d-flex justify-content-center align-items-center">
      <div className=" w-75 ">
        <h1 className="text-center text-white">Feel Free To Contact Us!</h1>
        <form className="mt-3 border p-3 rounded-3 border-dark shadow" onSubmit={(event)=>event.preventDefault()} style={{backgroundColor: "#B9EDDD"}}>
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            className="form-control mt-3 border-dark" /* style={{backgroundColor: "#91D8E1",borderColor: "#BFEAF5"}} */
            name="email"
            placeholder="email"
          />
          {/* <label htmlFor="name">Name</label> */}
          <input
            type="text"
            className="form-control mt-3 border-dark"
            name="name"
            placeholder="full name"
          />
          {/* <label htmlFor="purpose">Purpose</label> */}
          <input
            type="text"
            className="form-control mt-3 border-dark"
            name="purpose"
            placeholder="Purpose"
          />
          {/* <label htmlFor="message">Message</label> */}
          <textarea
            className="form-control mt-3 border-dark"
            name="message"
            placeholder="Message"
          />
          <input
            type="submit"
            name="submit"
            className="btn btn-success mt-3"
          />
        </form>
      </div>
    </Section>
  );
}
