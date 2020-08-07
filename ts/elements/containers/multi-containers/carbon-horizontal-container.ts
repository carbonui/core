/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:58 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainerType } from "../../../types/element-types/carbon-container-type";
import { CarbonMultiContainer } from "../carbon-multi-container";
import { CarbonContainerable } from "../../../carbon-containerable";

// DOC-ME [12/8/18 @ 4:52 PM] - Documentation required!
export class CarbonHorizontalContainer<T extends CarbonContainerable = CarbonContainerable> extends CarbonMultiContainer<T> {
	
	// DOC-ME [12/8/18 @ 4:53 PM] - Documentation required!
	public constructor(containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		this.setTypeIdentity("carbon-horizontal-container");
		
	}
	
}