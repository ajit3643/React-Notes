import games from "../assets/game.jpg";

function Games(props) {
  return (
    <div id="games">
      <img style={style} src={games} alt=""></img>
    </div>
  );
}

export default Games;

const style = {
  width: 100.5 + "%",
  height: 184,
};
