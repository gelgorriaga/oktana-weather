import React from "react";

const Form = ({getData}) => (
  <div className="Form">
    <form onSubmit={getData}>
      <input type="text" placeholder="City name" name="city" />

      <button>GO!</button>
    </form>
  </div>
);

export default Form;
