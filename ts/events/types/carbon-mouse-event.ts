/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:10 PM -- January 18th, 2019.
 *	Project: @carbonui/core
 */

import { MillenniumDate } from "millennium";
import { CarbonEvent } from "./carbon-event";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 * A Carbon-dispatched event originating from a mouse-related action.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonMouseEvent<C extends CarbonContainerable = CarbonContainerable, E extends MouseEvent = MouseEvent> extends CarbonEvent<C, E> {
	
	public constructor(source: C, event: E, time: MillenniumDate = MillenniumDate.fromNow()) {
		
		super(source, event, time);
		
	}
	
	public getOffsetY(): number {
		
		return this.getInternalEvent().offsetY;
		
	}
	
	public getOffsetX(): number {
		
		return this.getInternalEvent().offsetX;
		
	}
	
	public getClientY(): number {
		
		return this.getInternalEvent().clientY;
		
	}
	
	public getClientX(): number {
		
		return this.getInternalEvent().clientX;
		
	}
	
	public getMovementY(): number {
		
		return this.getInternalEvent().movementY;
		
	}
	
	public getMovementX(): number {
		
		return this.getInternalEvent().movementX;
		
	}
	
	public getPageY(): number {
		
		return this.getInternalEvent().pageY;
		
	}
	
	public getPageX(): number {
		
		return this.getInternalEvent().pageX;
		
	}
	
	public getScreenY(): number {
		
		return this.getInternalEvent().screenY;
		
	}
	
	public getScreenX(): number {
		
		return this.getInternalEvent().screenX;
		
	}
	
}