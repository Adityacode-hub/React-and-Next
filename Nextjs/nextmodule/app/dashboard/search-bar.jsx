"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");

    return (
        <input
            type="text"
            placeholder="Search..."
            defaultValue={search || ""}
        />
    );
}