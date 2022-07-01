import React, { useState, useEffect } from 'react';
import Board from './Components/Board'
import Data from './data/data.json'
import './Components/Board.css'

function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {

    setJobs(Data)

  }, []);

  const filterFunc = ({ role, level, tools, languages }) => {
    if (filters.length === 0) {
      return true;
    }
    const tags = [role, level];
    if (tools) {
      tags.push(...tools);
    }
    if (languages) {
      tags.push(...languages);
    }
    return filters.every(filter=>tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) return;           // to avoid multiple entries
    setFilters([...filters, tag])

  }
  const handleFilterClick = (passedfilter) => {
    setFilters(filters.filter((f) => f !== passedfilter));   // X mark functinality
  }
  const clearFilters=()=>
{
  setFilters([]);                                            //clear functionality
};
  const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App" style={{ fontFamily: 'League Spartan' }}>
      <header className='background'>
        <img style={{ width: '100%', backgroundColor: 'hsl(180, 29%, 50%)', objectFit: 'fill' }} src='/images/bg-header-desktop.svg' alt='' />
      </header>

      {filters.length > 0 && (
        <>
          <div className="main">{filters.map((filter) => (<span onClick={() => handleFilterClick(filter)} className="btn_design">{filter}<span className='x_mark'>✖</span></span>))}
          <button  onClick={clearFilters} className='clear_btn'>Clear</button></div>
          
          </>)}

      {
        jobs.length === 0 ? (<p>jobs</p>) : (filteredJobs.map((job) => (<Board job={job} key={job.id} handleTagClick={handleTagClick} />)))
      }

    </div>
  );
}

export default App;
