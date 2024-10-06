import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/astrovisor.png';

const ExoplanetViewer = () => {
  const [exoplanets, setExoplanets] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  const fetchExoplanets = async (search = '') => {
    const url = "https://cors-anywhere.herokuapp.com/https://exoplanetarchive.ipac.caltech.edu/TAP/sync";

    const query = `
      SELECT pl_name, pl_bmassj, pl_bmassj_reflink, pl_orbsmax, pl_orbsmax_reflink, sy_snum 
      FROM pscomppars 
      WHERE sy_snum > 1
      ${search ? `AND pl_name LIKE '%${search}%'` : ''}
      ORDER BY pl_name
    `;

    const payload = new URLSearchParams({
      query,
      format: 'json',
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: payload,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setExoplanets(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchExoplanets();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchExoplanets(searchTerm);
  };

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className='flex'>
        <img className='w-14 mr-2 mb-2' src={logo} />
        <h1 className="text-2xl font-bold mb-2 mt-2">AstroVisor</h1>
      </div>
      <form onSubmit={handleSearchSubmit} className="mb-4 flex">
        <div 
          className={`flex transition-transform duration-300 ease-linear ${isFocused ? 'transform scale-110' : ''} w-full`} 
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)}
        >
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search for an exoplanet..."
            className={`border border-[#2C2C2C] rounded-lg p-2 w-full shadow bg-[#1E1E1E] hover:bg-[#292929] hover:shadow-2xl transition-colors duration-300 ease-linear focus:outline-none focus:ring-2 focus:ring-[#BB86FC] ${isFocused ? 'transform scale-110' : ''}`}
          />
          <button 
            type="submit" 
            className={`bg-[#BB86FC] hover:bg-[#D1A1FF] hover:shadow-2xl text-white rounded-lg p-2 ml-2 transition-transform duration-300 ease-out ${isFocused ? 'transform scale-110 translate-x-10' : ''}`}            >
            Search
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {exoplanets.map((planet, index) => (
          <Link
            key={index}
            to={`/planet/${planet.pl_name}`}
            className="border border-[#2C2C2C] rounded-lg p-4 shadow-[#BB86FC] shadow-lg hover:shadow-xl bg-[#1E1E1E] hover:bg-[#292929] transition-colors transition-shadow duration-300 ease-linear"
          >
            <img
              src={`https://placehold.co/600x400?text=${planet.pl_name}&font=source-sans-pro`}
              alt={planet.pl_name}
              className="w-full h-32 object-cover rounded-lg mb-2"
            />
            <h2 className="font-semibold">{planet.pl_name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExoplanetViewer;
