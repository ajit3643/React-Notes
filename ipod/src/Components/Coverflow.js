import Guitar from "../assets/Guitar.jpg";

function Coverflow(props) {
  return (
    <div id="coverflow">
      <img style={style} src={Guitar} alt="Coverflow"></img>
    </div>
  );
}

export default Coverflow;

const style = {
  width: 100.5 + "%",
  height: 185,
};
