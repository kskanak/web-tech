import React from "react";

const Blog = () => {
  return (
    <div className="bg-slate-800 ">
      <h2 className="text-center text-accent underline dashe text-3xl pt-16">
        Web-tech Blog
      </h2>
      <div className="bg-slate-800 mx-auto w-4/5 py-16 md:grid grid-cols-3 gap-5">
        {/* blog  */}
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 hover:text-accent my-4 md:my-0">
          <article>
            <h2 className="text-xl font-bold">What is cors ?</h2>
            <p className="mt-4 text-gray-400 text-justify hover:text-accent">
              CORS stands for Cross-Origin Resource Sharing. It allows us to
              relax the security applied to an API. This is done by bypassing
              the Access-Control-Allow-Origin headers, which specify which
              origins can access the API.In other words, CORS is a browser
              security feature that restricts cross-origin HTTP requests with
              other servers and specifies which domains access your resources.
            </p>
          </article>
        </div>
        {/* blog  */}
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 hover:text-accent my-4 md:my-0 text-justify">
          <article>
            <h2 className="text-xl font-bold">
              {" "}
              Why using firebase? What other options are there to implement
              authentication??
            </h2>
            <h3 className="mt-4 text-gray-400 hover:text-accent">
              Firebase offers numerous easy-to-use SDKs, efficient back-end
              services, and user interface libraries for authenticating the
              users on the application. Typically, it takes months to establish
              a functional authentication process, but with Firebase, the whole
              system can be set up in minutes and less than 15 lines of code.
            </h3>
            <h3 className=" border-t-2 my-2 pt-2">
              Other option beside firebase to implement Authentication
              <ul className="list-disc mx-auto w-3/5 ">
                <li>Auth0.</li>
                <li>MongoDB.</li>
                <li>Passport.</li>
                <li>Okta.</li>
                <li>JSON Web Token.</li>
              </ul>
            </h3>
          </article>
        </div>
        {/* blog  */}
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 hover:text-accent my-4 md:my-0 text-justify">
          <article>
            <h2 className="text-xl font-bold">
              How does the private route work?
            </h2>
            <p className="mt-4 text-gray-400 hover:text-accent">
              The react private route component renders child components (
              children ) if the user is logged in. If not logged in the user is
              redirected to the /login page with the return url passed in the
              location state property.Protected routes are those routes that
              only grant access to authorized users. This means that users must
              first meet certain conditions before accessing that specific
              route. For instance, your application can require only logged-in
              users be able to visit the dashboard page.
            </p>
          </article>
        </div>
        {/* blog  */}
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow bg-gray-900 text-gray-100 hover:text-accent my-4 md:my-0">
          <article>
            <h2 className="text-xl font-bold">
              {" "}
              What is Node? How does Node work ?
            </h2>
            <p className="mt-4 dark:text-gray-400">
              Node Programming Language (NPL) is a simple programming language
              that is part of the Cartridge Development Kit (CDK) for use by
              nodes developed within the Offline Mediation Controller Framework.
              A node is a basic unit of a data structure, such as a linked list
              or tree data structure. Nodes contain data and also may link to
              other nodes. Links between nodes are often implemented by
              pointers.
            </p>
            <p className="border-t-2 mt-2 pt-2">
              Node allows developers to write JavaScript code that runs directly
              in a computer process itself instead of in a browser. Node can,
              therefore, be used to write server-side applications with access
              to the operating system, file system, and everything else required
              to build fully-functional applications.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blog;
