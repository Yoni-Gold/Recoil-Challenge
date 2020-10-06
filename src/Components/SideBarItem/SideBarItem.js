import React, {useState , useEffect} from "react";
import "./sideBarItem.css";
import recoil from 'recoil';
import { rectanglesArrayState  , rectAtomFamily } from '../atom';

function SideBarItem({num}) {

	//const setArray = recoil.useSetRecoilState(rectanglesArrayState);
	const [rectangle, setFamily] = recoil.useRecoilState(rectAtomFamily(num));

	const [widthInput, setWidthInput] = useState(rectangle.widthInput);
	const [heightInput, setHeightInput] = useState(rectangle.heightInput);
	const [colorInput, setColorInput] = useState(rectangle.colorInput);

	//const change = () => {setArray((oldArray) => [...oldArray.slice(0, num) , {widthInput , heightInput , colorInput}, ...oldArray.slice(num + 1)])};

	const change = () => {setFamily({widthInput , heightInput , colorInput})};

	useEffect(change, [widthInput, heightInput, colorInput]);

	return (
		<li className="sidebar__row">
			<span className="sidebarItemName">{num}</span>
			<label>width :</label>
			<input id="shapeWidthInput" type="number" value={widthInput} placeholder={rectangle.widthInput} min="0" onChange={({ target }) => {setWidthInput(target.value);}} />
			<label>height :</label>
			<input id="shapeHeightInput" type="number" value={heightInput} placeholder={rectangle.heightInput} min="0" onChange={({ target }) => {setHeightInput(target.value);}}/>
			<label>color :</label>
			<input type="color" id="colorModifier" value={colorInput} onChange={({ target }) => {setColorInput(target.value);}}/>
		</li>
	);
}

export default SideBarItem;
