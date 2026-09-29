import { useState ,useEffect } from "react";

import CurrentPatient from "../../QueueManagement/src/components/CurrentPatient";

function App() {
  const [patientName, setPatientName] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [queue, setQueue] = useState([]);
  const [error, setError] = useState("");
  const [currentPatient, setCurrentPatient] = useState(null);

  const handleNext = ()=>{
    if(queue.length==0) return;
    setCurrentPatient(queue[0]);
    setQueue(queue.slice(1));
  }
const handleClick = () =>{
 setCurrentPatient(null)
}
useEffect(() => {
  const data = localStorage.getItem("queue");

  if (data) {
    setQueue(JSON.parse(data));
  }
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (patientName === "" || serviceName === "") {
      setError("Please fill all fields");
      return;
    }

    {
      setQueue([
        ...queue,
        {
          id: queue.length + 1,
          name: patientName,
          service: serviceName,
        },
      ]);

      setPatientName("");
      setServiceName("");
    }
  };

  return (
    <>
      <div>
        <h1>State Management</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <input
            type="text"
            placeholder="service"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />

          {error && <p>{error}</p>}

          <button type="submit">ADD PATIENT</button>
        </form>

        <h2>Queue</h2>

       {queue.map((patient) => (
  <div>
    <p>{patient.id}</p>
    <p>{patient.name}</p>
    <p>{patient.service}</p>
  </div>
))}

        <div>
          <h2>Queue Serving</h2>

          {currentPatient && (
            <div>
              <p>{currentPatient.id}</p>
              <p>{currentPatient.name}</p>
              <p>{currentPatient.service}</p>
            </div>
          )}
        </div>
      </div>
      <button type="button" onClick={handleNext}>Call Next</button>
      <button type="button" onClick={handleClick}>Complete</button>
    </>
  );
}

export default App;