/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:13 AM -- July 22nd, 2019.
 *	Project: @carbonui/core
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
export class CarbonNumericallyValuedElementEvents extends CarbonBaseEvents {
	
	public readonly ELEMENT_VALUE_CHANGED: AventNotifier<number>;
	
	public constructor(element: CarbonContainerable & { getValue(): number }) {
		
		super(element);
		
		this.ELEMENT_VALUE_CHANGED = new AventNotifier<number>();
		
		let previousValue: number = element.getValue();
		
		element.getElement().addEventListener("input", () => {
			
			let value: number = element.getValue();
			
			if (value !== previousValue) {
				
				this.ELEMENT_VALUE_CHANGED.notify(value);
				previousValue = value;
				
			}
			
		});
		
	}
	
}