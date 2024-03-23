import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import fallbackImage from './assets/Cardiff.jpg';
import { Link } from 'react-router-dom';
import SearchComponent from "./SearchComponent";



function Page() {
 
  const { id } = useParams();
  const location = useLocation()
  const { data } = location.state

  
 useEffect(() => { settingProgram([data])}, []);
 const [Program, setProgram] = useState([data]);
 function settingProgram(data) {
  setProgram(data);
}
const handleRefresh = () => {
  window.location.reload();
};

  return (
    <div className=" bg-zinc-300 " >
    <div className=" container mx-auto py-5 ">
    <div>
      
      <button onClick={handleRefresh}>Refresh</button>
    </div>
      <div className="grid md:grid-cols-2 gap-12 mx-4 my-4 px-8">
      <div className='md:col-span-2'> 
      <SearchComponent data={Program[0]} setprograms={settingProgram} /> 
      </div>
        {Program[0].map(item => (
          <Card  
            data = {item}
            id={item.id}
            title={item.title}
            descriptionShort={item.description_short}
            coverImage={item.location.cover_image}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

function Card({ id,title, descriptionShort, coverImage, data }) {
  const [imageSrc, setImageSrc] = useState(coverImage);
  function handleImageError() {
    setImageSrc(fallbackImage);
  }
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex flex-col justify-between">
      <img src={imageSrc} alt={title} onError={handleImageError} className="w-full h-60 rounded-lg mb-4" />
      <h1 className="text-lg font-bold mb-2">{title}</h1>
      <p className="text-gray-700 font-semibold ">{descriptionShort}</p>
      
      <Link to={`/program/${id}`} state={{ Program: data }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
        View Details
      </Link>
    </div>
  );
}
export default Page;
