import albums from "../assets/TeaMusic.jpg";

function Albums(props) {
  return (
    <div>
      <img style={style} src={albums} alt="Albums"></img>
    </div>
  );
}

export default Albums;

const style = {
  width: 100.5 + "%",
  height: 184,
};
