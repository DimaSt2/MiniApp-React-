import { useState, useEffect } from 'react';
import './loader.css'

const Loader = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 1
        );
      }, 50);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        {
        progress < 100 
        ? <span className="progress-bar-text">Loading {progress}%</span>
        : <span className="progress-bar-text">Complete!</span>
        }
      </div>
    );
};

export default Loader;