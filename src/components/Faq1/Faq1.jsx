import React from "react";

const Faq1 = () => {
  return (
    <div>
      <section className="bg-gray-800 text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-gray-700 text-left">
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is web technology ?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Web Technology refers to the various tools and techniques that
                are utilized in the process of communication between different
                types of devices over the internet. A web browser is used to
                access web pages. Web browsers can be defined as programs that
                display text, data, pictures, animation, and video on the
                Internet.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What are the 3 technologies of the web ?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                The three core languages that make up the World Wide Web are
                HTML, CSS, and JavaScript. In the IT world, the internet is an
                essential platform, whether it`s for developing or for consumer
                use. When developing a website, typically three main languages
                come into play. These languages are JavaScript, CSS, and HTML.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                web design vs web development ?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                Web designers make sure the site looks clear and clean-cut and
                that customers instinctively know how to interact with it. They
                are sometimes referred to as user experience, or “UX,”
                designers. Web development focuses on the behind-the-scenes
                programming that makes a website work.
              </p>
            </div>
            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
              <h3 className="font-semibold md:col-span-5">
                What is MERN in web development ?
              </h3>
              <p className="md:pl-0 md:col-span-7">
                MERN stands for MongoDB, Express, React, Node, after the four
                key technologies that make up the stack. MongoDB — document
                database. Express(.js) — Node.js web framework. React(.js) — a
                client-side JavaScript framework.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq1;
