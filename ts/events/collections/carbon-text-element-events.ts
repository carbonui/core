/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:06 PM -- July 21st, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonBaseEvents } from "./carbon-base-events";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonTextElementEvents extends CarbonBaseEvents {
	
	public readonly ELEMENT_TEXT_CHANGED: AventNotifier<string>;
	
	public constructor(element: CarbonContainerable) {
		
		super(element);
		
		this.ELEMENT_TEXT_CHANGED = new AventNotifier<string>();
		
	}
	
}