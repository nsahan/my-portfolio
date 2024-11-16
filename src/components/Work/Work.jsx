import React, { useState } from 'react';
import './Work.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Work = () => {
  const [visibleCount, setVisibleCount] = useState(3); // Number of projects to show initially

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Increase the count by 3 each time "Show More" is clicked
  };

  return (
    <div id='work' className='work'>
      <div className="work-title">
        <h1>My Projects</h1>
      </div>
      <div className="work-container">
        {mywork_data.slice(0, visibleCount).map((work, index) => {
          return (
            <div key={index} className="work-item">
              <img src={work.w_img} alt={work.w_name} />
              <p>{work.w_name}</p> {/* Display the work name here */}
              <a href={work.github_url} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          );
        })}
      </div>
      {visibleCount < mywork_data.length && (
        <div className="showmore" onClick={handleShowMore}>
          <p>Show More</p>
          <img src={arrow_icon} alt="Show More" />
        </div>
      )}
    </div>
  );
};

export default Work;