/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:52 PM -- July 30th, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonNotifierFactory } from "./carbon-notifier-factory";
import { CarbonMouseEvent } from "../types/carbon-mouse-event";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 * Various {@link AventNotifier} factories for DOM {@link MouseEvent}s.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonMouseEventNotifierFactory extends CarbonNotifierFactory<CarbonMouseEvent> {
	
	public static readonly MOUSE_CLICK:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("click");
	public static readonly MOUSE_DOUBLE_CLICK:	CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("dblclick");
	public static readonly MOUSE_RIGHT_CLICK:	CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("contextmenu");
	public static readonly MOUSE_DOWN:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("mousedown");
	public static readonly MOUSE_UP:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("mouseup");
	public static readonly MOUSE_ENTER:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("mouseenter");
	public static readonly MOUSE_LEAVE:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("mouseleave");
	public static readonly MOUSE_MOVE:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("mousemove");
	public static readonly MOUSE_OVER:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("mouseover");
	public static readonly MOUSE_OUT:			CarbonMouseEventNotifierFactory = new CarbonMouseEventNotifierFactory("mouseout");
	
	protected constructor(eventName: string) {
	
		super(eventName);
	
	}
	
	public getNotifier(source: CarbonContainerable): AventNotifier<CarbonMouseEvent> {
		
		let notifier: AventNotifier<CarbonMouseEvent> = new AventNotifier<CarbonMouseEvent>();
		
		// FIX-ME [2/4/20 @ 10:07 AM] - Need to detach initialization from addition of EventListener.
		
		/*
		 * At construction-time, the element of the underlying CarbonElement may not yet be initialized. For this
		 * reason, we need to
		 */
		
		source.getElement().addEventListener(this.getEventName(), (event: Event): void => {
			
			notifier.notify(new CarbonMouseEvent<CarbonContainerable, MouseEvent>(source, event as MouseEvent));
			
		});
		
		return notifier;
		
	}
	
}