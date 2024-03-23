import React, { useEffect, useState } from "react";
import OpenDayData from "./API/OpenDay.json";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

function Card({ id, title, content, photoUrl, programs }) {
  const truncatedContent =
    content.length > 80 ? content.substring(0, 80) + "..." : content;
  return (
    <div className="bg-white font-sans mx-3 my-6 py-4 rounded-lg shadow-xl p-6 h-full flex flex-col justify-between">
      <div>
        {photoUrl && (
          <img
            src={photoUrl}
            alt="Card"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
        )}
        <h2 className=" text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 font-semibold">{truncatedContent}</p>
      </div>
      <Link
        to={`/page/${id}?name=${encodeURIComponent(title)}`}
        state={{ data: programs }}
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
      >
        View Details
      </Link>
    </div>
  );
}

function OpenDay() {
  const [Data, setData] = useState([OpenDayData]);
  const [topics, settopics] = useState([OpenDayData.topics]);
  useEffect(() => {
    console.log(topics);
  }, []);

  const updateData = (newData) => {
    settopics(newData);
  };
  return (
    <div className=" py-6 ">
      {Data.map((D) => (
        <>
          <div className="bg-indigo-500 md:m-5 sm:m-2 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-6xl text-center font-bold mb-4">
              {D.description}
            </h2>
            <div className="flex mt-8 justify-between">
              <div>
                <p className="text-lg">Start Time:</p>
                <p className="text-xl font-semibold">{D.start_time}</p>
              </div>
              <div>
                <p className="text-lg">End Time:</p>
                <p className="text-xl font-semibold">{D.end_time}</p>
              </div>
            </div>
          </div>


          <div className="">
            <div className="h-full grid my-4 py-4 sm:grid-cols-2 lg:px-4 lg:grid-cols-3 gap-4 ">
            <div className=" mx-4 sm:col-span-2 lg:col-span-3">
                <SearchComponent data={D} settopics={updateData} /> 
              </div>
              {topics[0].map((T) => (
                <div className="h-full  w-full py-4">
                  <Card
                    programs={T.programs}
                    id={T.id}
                    title={T.name}
                    content={T.description}
                    photoUrl={T.cover_image}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default OpenDay;
