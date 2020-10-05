import React from "react";
import "./sideList.css";
import recoil from 'recoil';
import {rectanglesArrayState , rectAtomFamily} from '../atom';
import SideBarItem from '../SideBarItem/SideBarItem';
// DO NOT TOUCH THAT
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";
import { sideBarListRenderMeterState } from "../../ChallengeUtils/renderMeter";
// ---------------------

function SideBarList() {
	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState);
	// ----------------
	const arrayState = recoil.useRecoilValue(rectanglesArrayState);
	return <ul className="sidebar__list">{arrayState.map((e) => <SideBarItem num={e}/>)}</ul>;
}

export default SideBarList;
