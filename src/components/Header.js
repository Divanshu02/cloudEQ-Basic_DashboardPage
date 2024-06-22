import React from "react";
import styles from "./Header.module.css";
import profilepic from "../images/profilepic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; 

const Header = () => {
  return (
    <>
      {/* shading div */}
      <FontAwesomeIcon
        icon={faTimes}
        style={{
          position: "absolute",
          right: "30px",
          top: "20px",
          border: "2px solid white",
          borderRadius: "50%",
          padding: "4px",
          color: "white",
          cursor: "pointer",
        }}
      />
      <div className={styles.shade}></div>
      <div className={styles.profilecontent}>
        {/* item1 */}
        <img src={profilepic} width={130} style={{border:'3px solid white'}}></img>
        {/* item2 */}
        <div className={styles.inner_profile_container}>
          <h2 className={styles.name}>Levi Hermann</h2>
          <div className={styles.inner_profile_child}>
            <h3>
              Engineer II
              <span className={styles.rounded_circle}>.</span>
              <span
                className={styles.font_style}
                style={{ marginLeft: ".3em" }}
              >
                {" "}
                levi.hermann@cloudeq.com
              </span>
            </h3>
            <h3 className={styles.font_style}>Team - Devops</h3>
            <a
              href="https://www.linkedin.com/company/cloudeq/mycompany/"
              target="_blank"
            >
              <button className={styles.button_style}>view profile</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
