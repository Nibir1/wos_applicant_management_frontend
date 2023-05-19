import { useSession } from "@/session";
import "./UserSummary.scss";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

export default function UserSummary() {
  const navigate = useNavigate();
  const session = useSession();

  // This code can fetch image from database and show where we want
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://wosambackend-production.up.railway.app/get_user_image/${session?.user?.user_email}`
      )
      .then((response) => {
        console.log({ response: response });
        setData(response.data.rows[0].user_image);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleClick = () => navigate("/dashboard/user");

  if (!session) return <div>Error</div>;

  return (
    <div className="user-summary" onClick={handleClick}>
      <div className="user-summary-picture">
        <img
          src={`https://wosambackend-production.up.railway.app/images/` + data}
          alt="user_image"
          style={{ width: "65px", height: "65px" }}
        />
      </div>

      <div className="user-summary-info">
        <h2>{session.user?.name ?? "Unknown User"}</h2>
        <h3>{session.user?.designation ?? "Unknown Designation"}</h3>
      </div>
    </div>
  );
}
