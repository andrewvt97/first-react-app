import { useParams } from "react-router-dom";
import DefaultProfile from "./ErrorPage";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const Profile = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" && <Popeye />}
      {name === "spinach" && <Spinach />}
    </div>
  );
};

export default Profile;
