/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let theExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoOption = Math.floor(Math.random() * who.length);
  let actionOption = Math.floor(Math.random() * action.length);
  let whatOption = Math.floor(Math.random() * what.length);
  let whenOption = Math.floor(Math.random() * when.length);

  return (
    who[whoOption] +
    "" +
    action[actionOption] +
    "" +
    what[whatOption] +
    "" +
    when[whenOption]
  );
};

window.onload = () => {
  //write your code here
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = theExcuse();
  });

  console.log("Hello Rigo from the console");
};
