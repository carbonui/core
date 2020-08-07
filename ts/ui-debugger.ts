/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:39 AM -- November 09th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonWorld } from "./carbon-world";
import { CarbonPage } from "./carbon-page";

/**
 * An ease-of-debugging tool through which all of the various UI elements can be accessed.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class UIDebugger {
	
	private static instance: UIDebugger;
	
	public static readonly World: object = CarbonWorld;
	public static readonly Page: object = CarbonPage;
	public static readonly Element: object = Element;
	
	private constructor() { /* Do nothing. */ }
	
	public static getInstance(): UIDebugger {
		
		if (!UIDebugger.instance) UIDebugger.instance = new UIDebugger();
		return UIDebugger.instance;
		
	}
	
}