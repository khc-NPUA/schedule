// libs
import React from "react";

// constants
import { listTypes } from "../../constants/updates";

// styles
import classes from "./styles.module.css";

export default function Update({ data }) {
  const { version, list } = data;
  
  return (
    <div className={classes.root}>
      <h2 className={classes.version}>{version}</h2>

      <div className={classes.list}>
        {list.map(([type, content], ind) => (
          <React.Fragment key={ind}>
            {type === listTypes.text && (
              <p className={classes.text}>{content}</p>
            )}
            {type === listTypes.img && (
              <img className={classes.preview} src={content} alt="preview" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
