import React, { useState } from 'react';

const VideoDescription: React.FC<{ description: string }> = ({ description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <p className={`text-nameChannel ${expanded ? 'expanded' : ''}`}>
        {description}
      </p>
      <button onClick={toggleDescription}>
        {expanded ? 'скрыть' : '...ещё'}
      </button>
    </div>
  );
};

export default VideoDescription;
