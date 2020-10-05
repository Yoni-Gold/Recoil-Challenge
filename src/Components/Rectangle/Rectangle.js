import React from "react";
import recoil from 'recoil';
import "./rectangle.css";
import { rectAtomFamily } from '../atom';

function Rectangle({num}) {
	const [rectangle, setFamily] = recoil.useRecoilState(rectAtomFamily(num));
	return <div className="rect" style={{backgroundColor: rectangle.colorInput , height: `${rectangle.heightInput}px`, width: `${rectangle.widthInput}px`}}>{num}</div>;
}

export default Rectangle;
