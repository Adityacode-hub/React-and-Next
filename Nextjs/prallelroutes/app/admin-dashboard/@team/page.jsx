import Link from "next/link"
const Teamroutepage = () => {
  return (
    <div className="bg-blue-500 h-full">
      <Link href={"/admin-dashboard/team-docs"}>Go to Team Docs</Link>
    </div>
  );
};

export default Teamroutepage;