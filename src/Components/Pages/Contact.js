// Importing the Section component for styling
import Section from "../Layout/Section";

// Functional component for the Contact page
export default function Contact() {
  return (
    // Using the styled Section component with specific styling and positioning
    <Section className="col-lg-9 col-md-9 col-sm-12 mt-4 mb-2 d-flex justify-content-center align-items-center mx-auto">
      <div className="w-75">
        {/* Heading for the Contact page */}
        <h1 className="text-center text-white">Feel Free To Contact Us!</h1>
        {/* Form for user contact */}
        <form
          className="mt-3 border p-3 rounded-3 border-dark shadow"
          onSubmit={(event) => event.preventDefault()}
          style={{ backgroundColor: "#B9EDDD" }}
        >
          {/* Input field for email */}
          <input
            type="email"
            className="form-control mt-3 border-dark"
            name="email"
            placeholder="Email"
          />
          {/* Input field for full name */}
          <input
            type="text"
            className="form-control mt-3 border-dark"
            name="name"
            placeholder="Full Name"
          />
          {/* Input field for purpose */}
          <input
            type="text"
            className="form-control mt-3 border-dark"
            name="purpose"
            placeholder="Purpose"
          />
          {/* Textarea for user's message */}
          <textarea
            className="form-control mt-3 border-dark"
            name="message"
            placeholder="Message"
          />
          {/* Submit button */}
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