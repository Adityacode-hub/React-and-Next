const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm">
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      <p className="text-gray-600">{description}</p>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        View More
      </button>
    </div>
  );
};

export default Card;