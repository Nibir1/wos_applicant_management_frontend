import "./WayOutTitle.scss";
import WayOutSolutionsLogo from "./Assets/WOS_Logo_IMG.png";

export default function WayOutTitle() {
  return (
    <div className="wayout-title">
      <div className="wayout-title-logo">
        <img
          src={WayOutSolutionsLogo}
          style={{ width: "30px", height: "30px" }}
        />
      </div>
      <span className="wayout-title-text">WayOut Solutions</span>
    </div>
  );
}
