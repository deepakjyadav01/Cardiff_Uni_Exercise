import React, { useState, useEffect } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

const SearchComponent = ({ data, settopics, setprograms }) => {
  const [originalData, setOriginalData] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [selectedProgramType, setSelectedProgramType] = useState("");

  useEffect(() => {
    setOriginalData(data);
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSearch = () => {
    if (data.topics) {
      const filteredData = data.topics.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      settopics([filteredData]);
    } else {
      const d = data
      const filteredData = d.filter((item) =>
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setprograms([filteredData]);
    }
  };

  const handleProgramTypeChange = (type) => {
    setSelectedProgramType(type);
    const filteredData = data.filter((item) =>
      item.programType.type.toLowerCase() === type.toLowerCase()
    );
    setprograms([filteredData]);
  };

  const sortAlphabetically = (programs) => {
    const sortedPrograms = [...programs].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setprograms([sortedPrograms]);
  };

  const clearFilter = () => {
    setprograms([originalData]);
    setSearchTerm("");
    setSelectedProgramType("");
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=" w-auto mx-auto mb-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex items-center justify-between">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSearch}
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600 "
          >
            Search
          </button>
          {!data.topics && (
            <div>
              <button onClick={() => setExpanded(!expanded)} className="ml-4 focus:outline-none">
                <HiOutlineChevronDown
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
        </div>
        {expanded && (
          <div className="mt-4">
            <button onClick={() => sortAlphabetically(data)} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300">
              Sort by Alphabet
            </button>
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Filter by Program Type:</p>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="Tour"
                  checked={selectedProgramType === "Tour"}
                  onChange={() => handleProgramTypeChange("Tour")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Tour</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Advice"
                  checked={selectedProgramType === "Advice"}
                  onChange={() => handleProgramTypeChange("Advice")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Advice</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Display"
                  checked={selectedProgramType === "Display"}
                  onChange={() => handleProgramTypeChange("Display")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Display</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Talk"
                  checked={selectedProgramType === "Talk"}
                  onChange={() => handleProgramTypeChange("Talk")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Talk</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Film"
                  checked={selectedProgramType === "Film"}
                  onChange={() => handleProgramTypeChange("Film")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Film</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Q&A"
                  checked={selectedProgramType === "Q&A"}
                  onChange={() => handleProgramTypeChange("Q&A")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Q&A</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Lunch"
                  checked={selectedProgramType === "Lunch"}
                  onChange={() => handleProgramTypeChange("Lunch")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Lunch</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Demo"
                  checked={selectedProgramType === "Demo"}
                  onChange={() => handleProgramTypeChange("Demo")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Demo</span>
              </label>
              <label className="inline-flex m-2 items-center">
                <input
                  type="radio"
                  value="Workshop"
                  checked={selectedProgramType === "Workshop"}
                  onChange={() => handleProgramTypeChange("Workshop")}
                  className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="ml-2">Workshop</span>
              </label>
              
            </div>
            <div className="mt-4">
              <button
                onClick={clearFilter}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg focus:outline-none hover:bg-gray-300"
              >
                Clear Filter
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
