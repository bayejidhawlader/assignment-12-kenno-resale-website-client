import React from "react";
import Loading from "../Loading/Loading";
import Spinner from "../Spinner/Spinnner";

const Blog = ({ isLoading }) => {
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  return (
    <div>
      <div>
        {/* 01 */}
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300  rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the different ways to manage a state in a React
            application?
          </div>
          <div className="collapse-content">
            <p>
              Beau Carnes. React state management is a process for managing the
              data that React components need in order to render themselves.
              This data is typically stored in the component's state object.
              When the state object changes, the component will re-render
              itself. React state management is basically half of a React app
            </p>
          </div>
        </div>

        {/* 02 */}
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            How does prototypical inheritance work?
          </div>
          <div className="collapse-content">
            <p>
              Every object with its methods and properties contains an internal
              and hidden property known as [[Prototype]]. The Prototypal
              Inheritance is a feature in javascript used to add methods and
              properties in objects. It is a method by which an object can
              inherit the properties and methods of another object.
              Traditionally, in order to get and set the [[Prototype]] of an
              object, we use Object.getPrototypeOf and Object.setPrototypeOf.
              Nowadays, in modern language, it is being set using __proto__
            </p>
          </div>
        </div>

        {/* 03 */}
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is a unit test? Why should we write unit tests?
          </div>
          <div className="collapse-content">
            <p>
              The main objective of unit testing is to isolate written code to
              test and determine if it works as intended. Unit testing is an
              important step in the development process, because if done
              correctly, it can help detect early flaws in code which may be
              more difficult to find in later testing stages.
            </p>
          </div>
        </div>

        {/* 04 */}
        <div
          tabIndex={0}
          className="collapse collapse-open border border-base-300 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            React vs. Angular vs. Vue?
          </div>
          <div className="collapse-content">
            <p>
              <span className="text-lg text-red-400">Angular</span> has a steep
              learning curve, considering it is a complete solution, and
              mastering Angular requires you to learn associated concepts like
              TypeScript and MVC. Even though it takes time to lea <br /> <br />
              <span className="text-lg text-red-400">React</span> - offers a
              Getting Started guide that should help one set up React in about
              an hour. The documentation is thorough and complete, with
              solutions to common issues already present on Stack Overflow.
              React is not a complete framework and advanced features require
              the use of third-party libraries. This makes the learning curve of
              the core framework not so steep but depends on the path you take
              with additional functionality. However, learning to use React does
              not necessarily mean that you are using the best practices. <br />{" "}
              <br />
              <span className="text-lg text-red-400">Vue</span> - provides
              higher customizability and hence is easier to learn than Angular
              or React. Further, Vue has an overlap with Angular and React with
              respect to their functionality like the use of components. Hence,
              the transition to Vue from either of the two is an easy option.
              However, simplicity and flexibility of Vue is a double-edged sword
              — it allows poor code, making it difficult to debug and test.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
