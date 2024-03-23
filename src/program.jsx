// Program.jsx
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchComponent from "./SearchComponent";
function Program() {
  const location = useLocation();
  const { Program } = location.state;

  useEffect(() => {
    console.log(Program);
  }, []);

  if (!Program) {
    return <div>No data found for the specified program.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl mx-6 my-14 py-8 shadow-2xl p-12 max-w-screen-xl h-auto sm:w-2/3 md:mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-4  flex-grow">
          <div className="md:col-span-2 font-semibold bg-white rounded-xl p-6 shadow-2xl border-zinc-200 border-2">
            <h1 className="text-2xl mb-2 p-2">{Program.title}</h1>
            <p className="text-gray-700 mb-2">
              Start Time: {Program.start_time}
            </p>
            <p className="text-gray-700 mb-2">End Time: {Program.end_time}</p>
            <p className="text-gray-700 ">{Program.description}</p>
          </div>
          {Program.school.name && (
            <div className="md:col-span-1">
              <div className="bg-white font-semibold rounded-xl p-6 shadow-2xl border-zinc-200 border-2 h-full">
                <h3 className="text-xl font-bold  mb-2">School Data</h3>
                <p className="text-gray-700">Name: {Program.school.name}</p>
                <p className="text-gray-700">
                  Description: {Program.school.description}
                </p>
              </div>
            </div>
          )}
          <div
            className={Program.school.name ? "md:col-span-1" : "md:col-span-2"}
          >
            <div className="bg-white font-semibold rounded-xl p-6 shadow-2xl border-zinc-200 border-2 h-full">
              <h3 className="text-xl  mb-2">Location Data</h3>
              <p className="text-gray-700">
                Address: {Program.room}, {Program.floor}{" "}
                {Program.location.address}
              </p>
              <p className="text-gray-700">
                Postcode: {Program.location.postcode}
              </p>
            </div>
          </div>
          <div
            className={Program.school.name ? "md:col-span-2" : "md:col-span-2"}
          >
            <div className="bg-white font-semibold rounded-xl p-6 shadow-2xl border-zinc-200 border-2 h-full">
              <h3 className="text-xl mb-2">Additional Data</h3>
              <div className="md:flex gap-3 md:items-center md:mb-4">
                <div className="md:w-3/10 md:mb-0 mb-4">
                  <img
                    src={Program.location.cover_image}
                    alt="Location Cover"
                    className="mr-4 rounded-lg"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                <div className="md:w-7/10">
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Description:</span>{" "}
                    {Program.location.description}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className=" font-bold">Website:</span>{" "}
                    <a
                      className="underline"
                      href={Program.location.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {Program.location.website}
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-bold">Address:</span>{" "}
                    {Program.location.address}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Postcode:</span>{" "}
                    {Program.location.postcode}
                  </p>
                  <a
                    href={`https://www.google.com/maps?q=${Program.location.latitude},${Program.location.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
