import "./App.css";
import Profile from "./profile/Profile";
import profile_Pic from "./profile/image/my-visit-to-he-mercedes.jpg";
// import { Alertfunction } from "./Alertfunction";

function App() {
  const profile_data = {
    fullName: "Mohamed",
    bio: "16/11/1992",
    profession: "petroleum engineer",
  };
  const handle_name = () => {
    alert(`this is the full name ${profile_data.fullName}`);
  };
  const style_css = {color:"red"};
  return (
    <div className="App">
      {/* <Profile fullName="Mohamed" bio="16/11/1992" profession="petroleum engineer"> */}
      {/* </Profile> */}
      <Profile style={style_css} profile_props={profile_data} message={handle_name} />
      {/* <button onclick={Alertfunction(profile_data.fullName)}>Click me</button> */}
      <img src={profile_Pic} alt="" />
    </div>
  );
}

export default App;
