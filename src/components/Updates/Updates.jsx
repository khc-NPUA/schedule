// libs
import { useState } from "react";

// components
import Update from "../Update";

// constants
import updates from "../../constants/updates";

// styles
import classes from "./styles.module.css";

export default function Updates() {
  const [isShowOldUpdates, setIsShowUpdates] = useState(true);
  const { versions } = updates;

  const [lastUpdate, ...otherUpdates] = versions;

  return (
    <div className={classes.root}>
      <div className={classes.versions}>
        <Update data={lastUpdate} />

        {isShowOldUpdates ? (
          otherUpdates.map((version, ind) => (
            <Update key={ind} data={version} />
          ))
        ) : (
          <button className={classes.button} onClick={() => setIsShowUpdates(true)}>show prev updates</button>
        )}
      </div>
    </div>
  );
}
