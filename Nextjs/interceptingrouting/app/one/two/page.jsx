import Link from "next/link";

export default function Second() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/one/two">
        <h1 className="cursor-pointer hover:text-blue-500">
          Go to One Two
        </h1>
      </Link>

      <Link href="/three">
        <h1 className="cursor-pointer hover:text-blue-500">
          Go to Three
        </h1>
      </Link>

      <Link href="/four">
        <h1 className="cursor-pointer hover:text-blue-500">
          Go to Four
        </h1>
      </Link>
    </div>
  );
}