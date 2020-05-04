import React from "react";
import Header from "../../components/header/index";

export default function About(props) {
    console.log(props)
  return (
    <div>
      <Header history={props.history}/>
    </div>
  );
}
