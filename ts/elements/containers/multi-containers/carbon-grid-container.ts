/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:40 PM -- April 28th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonContainerable } from "../../../carbon-containerable";
import { CarbonMultiContainer } from "../carbon-multi-container";
import { CarbonContainerType } from "../../../types/element-types/carbon-container-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonGridContainer<T extends CarbonContainerable = CarbonContainerable> extends CarbonMultiContainer<T> {
	
	// DOC-ME [7/21/19 @ 11:47 PM] - Documentation required!
	public constructor(containerType: CarbonContainerType = CarbonContainerType.DIV) {
	
		super(containerType);
		
		this.setTypeIdentity("carbon-grid-container");
	
	}
	
}