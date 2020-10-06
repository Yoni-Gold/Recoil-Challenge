import React, { useState } from "react";
import recoil from 'recoil';
import { rectanglesArrayState , rectAtomFamily } from '../atom';
import "./menu.css";

function Menu() {
	// Input states
	const [widthInput, setWidthInput] = useState(75);
	const [heightInput, setHeightInput] = useState(75);
	const [colorInput, setColorInput] = useState("#769fcd");
	const [counter , setCounter] = useState(0);
	const setArray = recoil.useSetRecoilState(rectanglesArrayState);
	const [rectAtom, setFamily] = recoil.useRecoilState(rectAtomFamily(counter));

	// const submitShape = () => {setArray((oldArray) => [...oldArray , {widthInput , heightInput , colorInput}])};
	const submitShape = () => {setArray((oldArray) => [...oldArray , counter]); setFamily({widthInput , heightInput , colorInput})};

	return (
		<div className="sidebar__menu">
			<label htmlFor="widthInput">Width:</label>
			<input
				id="widthInput"
				type="number"
				placeholder="50"
				value={widthInput}
				onChange={({ target }) => setWidthInput(target.value)}
				min="0"
			/>
			<label htmlFor="heightInput">Height:</label>
			<input
				id="heightInput"
				type="number"
				placeholder="50"
				value={heightInput}
				onChange={({ target }) => setHeightInput(target.value)}
				min="0"
			/>
			<label htmlFor="colorPicker">Color:</label>
			<input
				type="color"
				id="colorPicker"
				value={colorInput}
				onChange={({ target }) => setColorInput(target.value)}
			/>
			<button onClick={() => {setCounter((counter) => ++counter); submitShape()}} id="add-shape">
				Add Shape
			</button>
			<div id="idCounter">Shape Counter: {counter}</div>
		</div>
	);
}
export default Menu;
