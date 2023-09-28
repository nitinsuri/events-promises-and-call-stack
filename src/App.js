import React from 'react';
import './style.scss';

export default function App() {
  function logger() {
    console.log("I'm the FIRST log.");

    setTimeout(() => {
      console.log("I'm the SECOND log.");
    });

    new Promise((resolve, reject) => {
      resolve("I'm the THIRD log.");
    }).then((message) => console.log(message));

    console.log("I'm the LAST log.");
  }
  return (
    <div>
      <h1>Events, Promises, and call-stack</h1>
      <p>Look under the hood after hitting the button below!</p>
      <p>
        <button onClick={() => logger()}>Hit me hard!</button>
      </p>
    </div>
  );
}
