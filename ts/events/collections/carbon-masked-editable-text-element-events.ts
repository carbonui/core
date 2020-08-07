/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:34 PM -- July 25th, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonEditableTextElementEvents } from "./carbon-editable-text-element-events";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonMaskedEditableTextElementEvents extends CarbonEditableTextElementEvents {
	
	public readonly ELEMENT_MASK_TEXT_UPDATED: AventNotifier<string>;
	
	public constructor(element: CarbonContainerable, elementTextEdited: AventNotifier<string>, maskTextUpdated: AventNotifier<string>) {
	
		super(element, elementTextEdited);
		
		this.ELEMENT_MASK_TEXT_UPDATED = maskTextUpdated;
	
	}
	
}