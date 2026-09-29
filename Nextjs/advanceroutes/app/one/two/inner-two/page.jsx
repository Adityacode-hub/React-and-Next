import Link from "next/link";

const InnerTwopage = () => {
  return (
    <div className="flex items-center font-bold text-pink-500 hover:text-pink-800">
      <Link href="/final">
        GO to Final
      </Link>
    </div>
  );
};

export default InnerTwopage;