import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card>
        <Card.Header>
          <h2>Aditya Kumar</h2>
        </Card.Header>

        <Card.Body>
          <p>Frontend Developer | React Learner 🚀</p>
        </Card.Body>

        <Card.Footer>
          <button>Follow</button>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Header>
          <h2>Rahul</h2>
        </Card.Header>

        <Card.Body>
          <p>Backend Developer</p>
        </Card.Body>

        <Card.Footer>
          <button>Message</button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default App;