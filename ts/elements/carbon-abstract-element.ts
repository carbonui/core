/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:50 PM -- July 21st, 2019.
 *	Project: CarbonUI Core
 */

import { CarbonAbstractContainerable } from "./carbon-abstract-containerable";
import { CarbonElementType } from "../types/element-types/carbon-element-type";

/**
 * DOC-ME [7/21/19 @ 11:56 PM] - Documentation required!
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonAbstractElement<E extends Element = Element> extends CarbonAbstractContainerable<E> {
	
	/**
	 * The actual DOM element that constitutes this CarbonAbstractContainerable.
	 */
	protected readonly element: E;
	
	// DOC-ME [7/21/19 @ 11:56 PM] - Documentation required!
	protected constructor(elementType: CarbonElementType<E>) {
	
		super();
		
		this.element = elementType.create();
		
	}
	
	// DOC-ME [7/21/19 @ 11:56 PM] - Documentation required!
	public getElement(): E {
		
		return this.element;
		
	}
	
}