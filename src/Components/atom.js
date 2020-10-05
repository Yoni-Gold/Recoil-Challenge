import {atom , atomFamily} from 'recoil';

export const canvasBackgroundColorState = atom({
    key: 'canvasBackgroundColorState',
    default: '#ffffff',
});

export const rectanglesArrayState = atom({
    key: 'rectanglesArrayState',
    default: [],
});

export const rectAtomFamily = atomFamily({
	key: "rectAtom",
	default: id => ({
		name: `Rect ${id}`
	})
});