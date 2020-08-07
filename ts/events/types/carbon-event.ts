/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:41 PM -- January 18th, 2019.
 *	Project: @carbonui/core
 */

import { MillenniumDate } from "millennium";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 * The base class for Carbon-dispatched events.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonEvent<S extends CarbonContainerable = CarbonContainerable, E = Event> {
	
	protected source: S;
	protected timestamp: MillenniumDate;
	private internalEvent: E;
	
	protected constructor(source: S, event: E, time: MillenniumDate = MillenniumDate.fromNow()) {
		
		this.source = source;
		this.timestamp = time;
		this.internalEvent = event;
		
	}
	
	public getSource(): S {
		
		return this.source;
		
	}
	
	public getTimestamp(): MillenniumDate {
		
		return this.timestamp;
		
	}
	
	public getInternalEvent(): E {
		
		return this.internalEvent;
		
	}
	
}