import { Suspense } from "react";

async function ProductResults({ searchParams }) {
    const { category, query } = await searchParams;

    const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return (
        <div>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <p>Category: {category}</p>
            <p>Query: {query}</p>
        </div>
    );
}

export default function SearchPage({ searchParams }) {
    return (
        <Suspense fallback={<p>Loading products...</p>}>
            <ProductResults searchParams={searchParams} />
        </Suspense>
    );
}