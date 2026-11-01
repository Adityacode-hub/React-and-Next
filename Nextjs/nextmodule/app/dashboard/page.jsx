import { Suspense } from "react";
import SearchBar from "./search-bar";

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>

            <Suspense fallback={<p>Loading search...</p>}>
                <SearchBar />
            </Suspense>
        </div>
    );
}