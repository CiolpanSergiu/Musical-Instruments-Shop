import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div>
      <h1>Account</h1>
      <Link to="/contact">Contact</Link>
      <Link to="/">Home</Link>
    </div>
  );
}
