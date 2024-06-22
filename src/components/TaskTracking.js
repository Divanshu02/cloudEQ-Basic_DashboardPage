import React from "react";
import styles from "./TaskTracking.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { aggregatedData } from "../data/Data";
import IndiviualTasks from "./IndiviualTasks";

const TaskTracking = () => {
  const { stories, Tasks, Planned, Logged, Capacity, Variance } =
    aggregatedData;
  // console.log(aggregatedData)
  // console.log(stories,Tasks)
  return (
    <div className={styles.TaskTracking}>
      <h2 style={{ fontWeight: "500",marginBottom:'.5em' }}>
        <span style={{ backgroundColor: "#F2F4F7" }}>INITIATIVE </span>
        <span style={{ color: "#667DE8", fontSize: ".9em",marginLeft:'10px' }}>MCD</span>
      </h2>
      <FontAwesomeIcon icon={faTrophy} size="1x" style={{ color: "gold",marginRight:'.8em' }} />
      <span style={{ color: "#7450A9", fontWeight: "500", fontSize: "1.5em" }}>
        FinOps Task Tracking
      </span>
      <hr></hr>
      <div className={styles.container_style}>
        <div className={styles.progress_bar1}></div>
        <div className={styles.progress_bar2}></div>
        <div className={styles.progress_bar3}></div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between",marginBottom:'1.5em' }}>
        <div className={styles.flex}>
          <h3 className={styles.light_font}>
            Stories <span className={styles.bold_font}>{stories}</span>
          </h3>
          <h3 className={styles.light_font}>
            Tasks <span className={styles.bold_font}>{Tasks}</span>
          </h3>
        </div>
        <div className={styles.flex}>
          <h3 className={styles.light_font}>
            Planned <span className={styles.bold_font}>{Planned}</span>
          </h3>
          <h3 className={styles.light_font}>
            Logged <span className={styles.bold_font}>{Logged}</span>
          </h3>
          <h3 className={styles.light_font}>
            Capacity <span className={styles.bold_font}>{Capacity}</span>
          </h3>
          <h3 className={styles.light_font} >
            Variance <span className={styles.bold_font} style={{backgroundColor:'#E35B5B',padding:'.3em .4em', borderRadius:'.3em',color:'white',fontWeight:'500'}}>{Variance}%</span>
          </h3>
        </div>
      </div>
      <IndiviualTasks />
    </div>
  );
};

export default TaskTracking;


