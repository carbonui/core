/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:30 PM -- July 29th, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonEvent } from "../types/carbon-event";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonNotifierFactory<E extends CarbonEvent> {
	
	private readonly eventName: string;
	
	protected constructor(eventName: string) {
	
		this.eventName = eventName;
	
	}
	
	protected getEventName(): string {
		
		return this.eventName;
		
	}
	
	public abstract getNotifier(source: CarbonContainerable): AventNotifier<E>;
	
}