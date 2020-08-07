/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:24 PM -- July 21st, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonTextElementEvents } from "./carbon-text-element-events";
import { CarbonKeyboardEvent } from "../types/carbon-keyboard-event";
import { CarbonContainerable } from "../../carbon-containerable";
import { CarbonKeyboardEventNotifierFactory } from "../notifier-factories/carbon-keyboard-event-notifier-factory";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonEditableTextElementEvents extends CarbonTextElementEvents {
	
	public readonly ELEMENT_TEXT_EDITED: AventNotifier<string>;
	
	public readonly KEY_PRESSED: AventNotifier<CarbonKeyboardEvent>;
	
	public readonly KEY_DOWN: AventNotifier<CarbonKeyboardEvent>;
	
	public readonly KEY_UP: AventNotifier<CarbonKeyboardEvent>;
	
	public constructor(element: CarbonContainerable, elementTextEdited: AventNotifier<string>) {
		
		super(element);
		
		this.ELEMENT_TEXT_EDITED = elementTextEdited;
		this.KEY_PRESSED = CarbonKeyboardEventNotifierFactory.KEY_PRESS.getNotifier(element);
		this.KEY_DOWN = CarbonKeyboardEventNotifierFactory.KEY_DOWN.getNotifier(element);
		this.KEY_UP = CarbonKeyboardEventNotifierFactory.KEY_UP.getNotifier(element);
		
	}
	
}