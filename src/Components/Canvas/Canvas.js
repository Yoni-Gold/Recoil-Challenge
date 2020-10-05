import React from "react";
import "./canvas.css";
import { canvasBackgroundColorState , rectanglesArrayState } from '../atom';
import  Rectangle  from '../Rectangle/Rectangle';
import recoil from 'recoil';
// DO NOT TOUCH THAT
import { canvasRenderMeterState } from "../../ChallengeUtils/renderMeter.js";
import { useRenderMeter } from "../../ChallengeUtils/hooks.js";

function Canvas(params) {
	// TOUCH THAT IF YOU WANT TO GET KILLED
	useRenderMeter(canvasRenderMeterState);
	// ---------------------------------------------
	const arrayState = recoil.useRecoilValue(rectanglesArrayState);
	const [backgroundColor, setBackgroundColor] = recoil.useRecoilState(canvasBackgroundColorState);
	return (
		<div
			className="canvas"
			id="canvas"
			style={{ backgroundColor: backgroundColor }}>
				{arrayState.map((e) => <Rectangle num={e}/>)}
			</div>
	);
}

export default Canvas;
