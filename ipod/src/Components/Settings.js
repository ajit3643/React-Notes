import setting from "../assets/settings.png";

function Settings(props) {
  return (
    <div id="settings">
      <img style={style} src={setting} alt=""></img>
    </div>
  );
}

export default Settings;

const style = {
  width: 100.5 + "%",
  height: 184,
};
