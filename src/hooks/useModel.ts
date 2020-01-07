import { useEffect } from 'react';

import { 
	action
} from "mobx";

import {
	IMenuItem,
} from "../interfaces/MenuItems";

export const useModel = ((modelValues: IMenuItem, object: Partial<IMenuItem>) => {

	const setValues = action((modelValues: IMenuItem, object: Partial<IMenuItem>) => {
		if(object) {
			modelValues.id = object.id!;
			modelValues.title = object.title!;
			modelValues.type = object.type!;
			modelValues.items = object.items!;
		}
	});

    useEffect(() => {

		return () => {
			setValues(modelValues, object);
        };

    }, [object, modelValues, setValues]);
 });