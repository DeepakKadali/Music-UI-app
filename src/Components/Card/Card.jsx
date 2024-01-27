import Tooltip from '@mui/material/Tooltip';
import './Card.css';

const Card = ({ image, text, title, tooltipText }) => {
  return (
    <Tooltip
      title={tooltipText ? `${tooltipText} songs` : ``}
      placement="top"
      arrow
    >
      <div className="card-box">
        <div className="card">
          <div className="card-image">
            <img src={image} alt={title} />
          </div>
          <div className="card-text">
            <p>{text}</p>
          </div>
        </div>
        <div className="title">{title}</div>
      </div>
    </Tooltip>
  );
};

export default Card;
