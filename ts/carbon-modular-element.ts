/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:35 PM -- December 14th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainerable } from "./carbon-containerable";
import { CarbonAbstractContainerable } from "./elements/carbon-abstract-containerable";

/**
 * DOC-ME [7/21/19 @ 11:57 PM] - Documentation required!
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonModularElement<T extends CarbonContainerable<E>, E extends Element = HTMLElement>
	extends CarbonAbstractContainerable<E> {
	
	private readonly moduleElement: T;
	
	protected constructor(moduleElement: T) {
		
		super();
		
		this.setTypeIdentity("carbon-module");
		this.moduleElement = moduleElement;
		
	}
	
	/**
	 * Returns the CarbonContainerable (T) that this CarbonModularElement wraps.
	 *
	 * @returns {T} The CarbonContainerable (T) that this CarbonModularElement wraps.
	 */
	protected getModuleElement(): T {
		
		return this.moduleElement;
		
	}
	
	public getElement(): E {
		
		return this.moduleElement.getElement();
		
	}
	
}