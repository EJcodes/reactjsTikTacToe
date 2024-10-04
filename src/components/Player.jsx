import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const reaction = () => {
    setIsEditing(!isEditing);
    console.log(isEditing);
  };
  return isEditing ? (
    <li>
      <span className="player-info">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={reaction}>Edit</button>
    </li>
  ) : (
    <li>
      <span className="player-info">
        <input></input>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={reaction}>Edit</button>
    </li>
  );
}
