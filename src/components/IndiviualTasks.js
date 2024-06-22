import React from "react";
import styles from "./IndiviualTasks.module.css";
import bookmark_icon from "../images/bookmark_icon.png";
import { Tasks } from "../data/Data";

const IndiviualTasks = () => {
//   console.log(Tasks);
  return (
    <div style={{marginBottom:'3em'}}>
      {/* item1 */}
      <div className={styles.header} style={{marginBottom:'1em',padding:'.5em'}}>
        <h3 className={styles.custom_fontweight}>Tasks</h3>
        <div className={styles.flex}>
          <h3 className={styles.custom_fontweight}>Planned Hrs</h3>
          <h3 className={styles.custom_fontweight}>Logged Hrs</h3>
        </div>
      </div>
      {/* item2 */}
      <div>
        {Tasks.map((task) => {
          return (
            <div style={{display:'flex',flexDirection:'column',gap:'.5em',padding:'0px .6em'}}>
              <div style={{display:'flex',justifyContent:'space-between'}}>  
              <div className={styles.flex}>
                <img src={bookmark_icon}></img>
                <h3 className={styles.custom_fontweight} style={{color:'#2C75DB'}}>{task.id}</h3>
                <h3 className={styles.custom_fontweight}>{task.description}</h3>
              </div>
              <div className={styles.flex} style={{width:'12%',justifyContent:'space-between'}}>
                <h3 className={styles.light_font}>{task.Planned_Hrs}</h3>
                <h3 className={styles.light_font}>{task.Logged_Hrs}</h3>
              </div>    
              </div>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IndiviualTasks;
