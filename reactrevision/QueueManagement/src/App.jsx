import { useState } from "react";
import PatientForm from "./components/PatientForm";
import QueueList from "./components/QueueList";
import CurrentPatient from "./components/CurrentPatient";
export default function App() {
  const [queue, setQueue] = useState([]);
  const [currentPatient, setCurrentPatient] = useState(null);

 const handleAddPatient = (patient) => {
  setQueue((prevQueue) => [
    ...prevQueue,
    {
      id: prevQueue.length + 1,
      name: patient.name,
      service: patient.service,
    },
  ]);
};
  const handleNext = () => {
    if (queue.length === 0) return;

    setCurrentPatient(queue[0]);
  setQueue((prevQueue) => prevQueue.slice(1));
  };

  const handleComplete = () => {
    setCurrentPatient(null);
  };

  return (
    <>
      <h1>Queue Management System</h1>

      <PatientForm onAddPatient={handleAddPatient} />
      <CurrentPatient currentPatient={currentPatient}
         handleNext={handleNext}
         handleComplete={handleComplete}   
      />

     
      <QueueList queue={queue}/>
    </>
  );
}