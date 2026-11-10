"use client";
import { useQuery } from "@tanstack/react-query";
export default function Home() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["ip-geolocation"],

    queryFn: async () => {
      const res = await fetch("https://ipapi.co/json/");

      if (!res.ok) {
        throw new Error("Failed to fetch location");
      }

      return res.json();
    },
  });

  if (isPending) return <h1>Loading...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <div>
      <h1>IP Geolocation</h1>
      <p>IP: {data.ip}</p>
      <p>City: {data.city}</p>
      <p>Region: {data.region}</p>
      <p>Country: {data.country_name}</p>
      <p>Latitude: {data.latitude}</p>
      <p>Longitude: {data.longitude}</p>
    </div>
  );
}
 