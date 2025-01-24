import "../Styles/All-Songs.css";
import Cover from "../assets/Diljit-Dosanjh.jpg";
import song from "../assets/Songs/Do-You-Know.mp3";

function AllSongs(props) {
  return (
    <div id="allSongs">
      <div className="thumnail">
        <img src={Cover} alt="thumbnail"></img>
        <div className="song-details">
          <span>Do You Know</span>
        </div>
      </div>
      <audio src={song} controls autoPlay></audio>
    </div>
  );
}

export default AllSongs;
