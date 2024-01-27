import { useState, useEffect } from 'react';
import { getGenresData } from '../../utils/util';

import './Filters.css';

const Filters = ({ setFilteredSongsData, songsData }) => {
  const [isActive, setIsActive] = useState('All');
  const [genresData, setGenresData] = useState([]);

  useEffect(() => {
    (async () => {
      const genresData = await getGenresData();
      setGenresData([...genresData]);
    })();
  }, []);

  const filterSongs = (tab) => {
    if (tab === 'All') {
      setFilteredSongsData(songsData);
    } else {
      const result = songsData.filter((song) => song.genre.label === tab);
      setFilteredSongsData(result);
    }
  };
  return (
    <div className="filters">
      {genresData.length !== 0 ? (
        <>
          <p
            className={isActive === 'All' ? 'active' : ''}
            onClick={(e) => {
              setIsActive(e.target.innerText);
              filterSongs(e.target.innerText);
            }}
          >
            All
          </p>
          {genresData?.map((genre) => (
            <p
              key={genre.key}
              className={isActive === genre.label ? 'active' : ''}
              onClick={(e) => {
                setIsActive(e.target.innerText);
                filterSongs(e.target.innerText);
              }}
            >
              {genre.label}
            </p>
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Filters;
