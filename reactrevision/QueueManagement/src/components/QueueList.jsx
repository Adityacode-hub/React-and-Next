export default function QueueList({ queue }) {
  return (
    <>
      <h2>Queue</h2>

      {queue.length === 0 ? (
        <p>Queue is empty.</p>
      ) : (
        queue.map((patient) => (
          <div key={patient.id}>
            <p>Token: {patient.id}</p>
            <p>Name: {patient.name}</p>
            <p>Service: {patient.service}</p>
          </div>
        ))
      )}
    </>
  );
}