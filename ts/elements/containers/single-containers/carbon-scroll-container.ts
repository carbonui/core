/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:30 AM -- February 06th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonContainerable } from "../../../carbon-containerable";
import { CarbonSingleContainer } from "../carbon-single-container";
import { CarbonContainerType } from "../../../types/element-types/carbon-container-type";

/**
 * A container that scrolls over the content of a singular child.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonScrollContainer<T extends CarbonContainerable> extends CarbonSingleContainer<T> {
	
	private scrollX: boolean = true;
	
	private scrollY: boolean = false;
	
	// DOC-ME [12/8/18 @ 3:44 PM] - Documentation required!
	public constructor(scrollY?: boolean, scrollX?: boolean, containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		
		this.setTypeIdentity("carbon-scroll-container");
		
		if (scrollX !== undefined) this.scrollX = scrollX;
		if (scrollY !== undefined) this.scrollY = scrollY;
		
		if (this.scrollX) this.addClasses("scroll-x");
		if (this.scrollY) this.addClasses("scroll-y");
		
	}
	
}