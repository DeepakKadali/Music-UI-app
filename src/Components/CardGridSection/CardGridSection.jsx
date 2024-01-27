import Card from '../Card/Card';

import './CardGridSection.css';

const CardGridSection = ({ songsData }) => {
  return (
    <div className="grid-container">
      {songsData.map((song) => (
        <Card
          key={song.id}
          image={song.image}
          text={
            song.follows !== undefined
              ? `${song.follows} Follows`
              : `${song.likes} Likes`
          }
          title={song.title}
          tooltipText={song.songs?.length}
        />
      ))}
    </div>
  );
};

export default CardGridSection;
