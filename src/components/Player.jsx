import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const btnCaption = "Edit";
  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };
  return isEditing ? (
    <li>
      <span className="player-info">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{btnCaption}</button>
    </li>
  ) : (
    <li>
      <span className="player-info">
        <input type="text" required value={name}></input>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>Save</button>
    </li>
  );
}
