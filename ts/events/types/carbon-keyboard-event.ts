/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:48 PM -- January 18th, 2019.
 *	Project: @carbonui/core
 */

import { MillenniumDate } from "millennium";
import { CarbonEvent } from "./carbon-event";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 * A Carbon-dispatched event originating from a keyboard-related action.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonKeyboardEvent<C extends CarbonContainerable = CarbonContainerable, E extends KeyboardEvent = KeyboardEvent> extends CarbonEvent<C, E> {
	
	public constructor(source: C, event: E, time: MillenniumDate = MillenniumDate.fromNow()) {
		
		super(source, event, time);
		
	}
	
	public getKey(): string {
		
		return this.getInternalEvent().key;
		
	}
	
}