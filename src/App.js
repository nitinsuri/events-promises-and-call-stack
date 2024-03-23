import React from 'react';
import './style.css';

export default function App() {
  const [logMessages, setLogMessages] = React.useState([]);
  function logger() {
    setLogMessages([]);

    setLogMessages((logMessages) => [...logMessages, "I'm the FIRST message."]);

    setTimeout(() => {
      setLogMessages((logMessages) => [
        ...logMessages,
        "I'm the SECOND message.",
      ]);
    });

    new Promise((resolve, reject) => {
      setTimeout(() => {
        new Promise((resolve, reject) => {
          resolve("I'm the nested time out message inside the promise.");
        }).then((message) =>
          setLogMessages((logMessages) => [...logMessages, message])
        );
      });
      resolve("I'm the THIRD message.");
    }).then((message) =>
      setLogMessages((logMessages) => [...logMessages, message])
    );

    setLogMessages((logMessages) => [
      ...logMessages,
      "I'm the FOURTH message.",
    ]);
  }
  return (
    <div>
      <h1>Events-loop, Promises, and Call-stack</h1>
      <button onClick={() => logger()}>Hit me up to see the magic!</button>
      {logMessages?.map((message, idx) => (
        <p key={idx}>{message}</p>
      ))}
    </div>
  );
}
