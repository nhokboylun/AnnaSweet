import React from "react";
import Button from "../ui/Button";

function About() {
  return (
    <div className="space-y-8 bg-gray-100 p-6">
      <section>
        <h2 className="mb-4  pb-2 text-xl font-semibold">Our Story</h2>
        <p>
          We recognized a significant demand for panna cotta in America, yet
          there were limited providers. Driven by this, we introduced a unique
          panna cotta recipe from our hometown in Vietnam. Our goal? To ensure
          every American household gets to savor this delightful dessert.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Our Mission</h2>
        <p>
          Why travel to a store just for a dessert? We aim to make sure every
          fridge is stocked with a sweet treat. Let us deliver right to your
          doorstep!
        </p>
      </section>

      <section>
        <h2 className="mb-4 pb-2 text-xl font-semibold">How It Works</h2>
        <ol className="list-decimal space-y-2 pl-5">
          <li>Open the app.</li>
          <li>Add your favorite dessert to the cart.</li>
          <li>Proceed to checkout.</li>
          <li>Relax, and wait for your dessert to arrive at your door.</li>
        </ol>
      </section>

      <section>
        <h2 className="mb-4 pb-2 text-xl font-semibold">
          Customer Testimonials and Stories
        </h2>
        <p>Over 50+ satisfied customers and counting!</p>
      </section>

      <section className="mt-6">
        <Button
          to="/Home"
          type="callToAction"
          className="rounded-2xl bg-yellow-300"
        >
          Order Us
        </Button>
      </section>
    </div>
  );
}

export default About;
