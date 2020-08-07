/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:47 AM -- August 25th, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonContainerable } from "../../carbon-containerable";
import { CarbonKeyboardEvent } from "../types/carbon-keyboard-event";
import { CarbonNotifierFactory } from "./carbon-notifier-factory";

/**
 * Various {@link AventNotifier} factories for DOM {@link KeyboardEvent}s.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonKeyboardEventNotifierFactory extends CarbonNotifierFactory<CarbonKeyboardEvent> {
	
	public static readonly KEY_PRESS:	CarbonKeyboardEventNotifierFactory = new CarbonKeyboardEventNotifierFactory("keypress");
	public static readonly KEY_DOWN:	CarbonKeyboardEventNotifierFactory = new CarbonKeyboardEventNotifierFactory("keydown");
	public static readonly KEY_UP:		CarbonKeyboardEventNotifierFactory = new CarbonKeyboardEventNotifierFactory("keyup");
	
	protected constructor(eventName: string) {
	
		super(eventName);
	
	}
	
	public getNotifier(source: CarbonContainerable): AventNotifier<CarbonKeyboardEvent> {
		
		let notifier: AventNotifier<CarbonKeyboardEvent> = new AventNotifier<CarbonKeyboardEvent>();
		
		source.getElement().addEventListener(this.getEventName(), (event: Event): void => {
			
			notifier.notify(new CarbonKeyboardEvent<CarbonContainerable, KeyboardEvent>(source, event as KeyboardEvent));
			
		});
		
		return notifier;
		
	}
	
}