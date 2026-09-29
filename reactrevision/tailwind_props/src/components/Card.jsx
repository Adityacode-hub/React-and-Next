function Card({image,title,description,price,buttonText}) {
  return (
    <div className="w-full max-w-sm rounded-3xl bg-zinc-900 p-5 shadow-2xl">
         <img
         src={image}
        alt="Product"
        className="h-64 w-full rounded-xl object-cover"
      />
      <h2 className="mt-4 text-2xl font-bold">
              {title}
      </h2>
      <p className="mt-2 text-gray-600">
        {description}
      </p>
        <p className="mt-4 text-2xl font-bold">
        {price}
      </p>
       <button className="
  bg-blue-600
  text-white
  px-5
  py-3
  rounded-lg
  font-semibold
  hover:bg-blue-700
">
  {buttonText}
</button>
    </div>
  )
}

export default Card