import React from 'react';
import './style.css';

export default function App() {
  const [logMessages, setLogMessages] = React.useState([]);
  function logger() {
    setLogMessages([]);

    async function f() {
      setLogMessages((logMessages) => [
        ...logMessages,
        "I'm the FIRST message.",
      ]);
    }
    setLogMessages((logMessages) => [
      ...logMessages,
      "I'm the SECOND message.",
    ]);

    setTimeout(() => {
      setLogMessages((logMessages) => [
        ...logMessages,
        "I'm the THIRD message.",
      ]);
    });

    new Promise((resolve, reject) => {
      resolve("I'm the FOURTH message.");
    }).then((message) =>
      setLogMessages((logMessages) => [...logMessages, message])
    );

    setLogMessages((logMessages) => [...logMessages, "I'm the FIFTH message."]);
    f();
  }
  return (
    <div>
      <h1>Events, Promises, and call-stack</h1>
      <button onClick={() => logger()}>Hit me up to see the magic!</button>
      {logMessages?.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
}
