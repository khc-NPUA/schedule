import { useState } from "react";

export default function useVersion(key, lastVersion) {
  const keyFormat = `v_${key}`;
  
	const [userVersion, setUserVersion] = useState(+localStorage.getItem(keyFormat) ?? 0);

	const isShowUpdate = lastVersion > userVersion;
	
	const updateVersion = () => {
		if (lastVersion === 0) return;
		
		setUserVersion(lastVersion);
		localStorage.setItem(keyFormat, lastVersion);
	};

	return [isShowUpdate, updateVersion, userVersion, lastVersion];
}