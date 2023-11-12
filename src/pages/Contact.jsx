import { Form, redirect } from "react-router-dom";
import Button from "../ui/Button";

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f6bcd0d6] px-6 pb-6 pt-4">
      <h1 className="mb-4 text-5xl font-bold text-yellow-200">Contact Us</h1>
      <h3 className="mb-8 max-w-lg text-center text-xl font-light text-white">
        Got Issues? Want to send feedback? Fill out the form below.
      </h3>

      <Form
        method="POST"
        className="w-full max-w-lg rounded bg-white p-8 shadow-md"
      >
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Your email
          </label>
          <input
            className="w-full rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-pink-300"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="w-full rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-pink-300"
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter subject"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-medium text-gray-600"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            required
            className="w-full rounded-md border px-4 py-2 outline-none focus:ring-2 focus:ring-pink-300"
            name="message"
            id="message"
            rows="4"
            placeholder="Type your message"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <Button type="callToAction">Send</Button>
        </div>
      </Form>
    </div>
  );
}

export default Contact;

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);

  const userData = {
    email: data.email,
    subject: data.subject,
    message: data.message,
  };

  try {
    const response = await fetch("http://localhost:8080/contactHelp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Some error happened during sending message");
    }
  } catch (error) {
    console.error("Error:", error);
  }

  return redirect("/");
}
