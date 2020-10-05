import React from "react";
import "./colorPicker.css";
import { canvasBackgroundColorState } from '../atom';
import {useRecoilState} from 'recoil';

function ColorPicker(params) {
	const [backgroundColor, setBackgroundColor] = useRecoilState(canvasBackgroundColorState);

	return (
		<div className="colorPicker">
			<label htmlFor="colorPickerInput">
				change canvas color to random color:
				<input id="colorPickerInput" type="color" onChange={
					(e) => {setBackgroundColor(e.target.value)}
				}/>
			</label>
		</div>
	);
}

export default ColorPicker;
