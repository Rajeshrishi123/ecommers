import React from "react";
import February from "../components/sports/Sports.module.css";

const Cricket = (props) => {
  return (
    <div>
      <h1>{props.userName} love Cricket</h1>
    </div>
  );
};

export const FootBall = () => {
  return (
    <div className={February.game} style={{ color: "red" }}>
      <h1>I Love FootBall</h1>
    </div>
  );
};

export const VollyBall = () => {
  return (
    <div className="">
      <h1>VollyBall</h1>
    </div>
  );
};

export default Cricket;
