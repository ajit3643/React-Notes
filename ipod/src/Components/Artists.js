import artists from "../assets/hero-guitar.jpg";

function Artists(props) {
  return (
    <div>
      <img style={style} src={artists} alt=""></img>
    </div>
  );
}

export default Artists;

const style = {
  width: 100.5 + "%",
  height: 184,
};
