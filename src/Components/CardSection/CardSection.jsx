import { useEffect, useState } from 'react';

import CardCarouselSection from '../CardCarouselSection/CardCarouselSection';
import CardGridSection from '../CardGridSection/CardGridSection';
import Filters from '../Filters/Filters';
import './CardSection.css';

const CardSection = ({ name, songsData, showFilters }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [filteredSongsData, setFilteredSongsData] = useState([]);

  useEffect(() => {
    setFilteredSongsData([...songsData]);
  }, [songsData]);

  return (
    <div className="section-container">
      <div className="text-container">
        <p>{name}</p>
        <p
          className="collapse-btn"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
        >
          {isCollapsed ? 'Show all' : 'Collapse'}
        </p>
      </div>
      {showFilters ? (
        <Filters
          setFilteredSongsData={setFilteredSongsData}
          songsData={songsData}
        />
      ) : null}
      <div className="card-container">
        {isCollapsed ? (
          <CardCarouselSection name={name} songsData={filteredSongsData} />
        ) : (
          <>
            <CardGridSection songsData={filteredSongsData} />
          </>
        )}
      </div>
    </div>
  );
};

export default CardSection;
