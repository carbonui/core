/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:24 PM -- December 03rd, 2018.
 *	Project: @carbonui/core
 */

import { CarbonSingleContainer } from "../carbon-single-container";
import { CarbonContainerType } from "../../../types/element-types/carbon-container-type";
import { CarbonAlignment } from "../../../descriptors/carbon-alignment";
import { CarbonContainerable } from "../../../carbon-containerable";

/**
 * A container that aligns a singular child within itself.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonAlignmentContainer<T extends CarbonContainerable> extends CarbonSingleContainer<T> {
	
	private alignment: CarbonAlignment;
	
	// DOC-ME [12/8/18 @ 3:44 PM] - Documentation required!
	public constructor(alignment: CarbonAlignment, containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		this.alignment = alignment;
		this.setTypeIdentity("carbon-alignment-container");
		this.addClasses(alignment.toString());
		
	}
	
	public setAlignment(alignment: CarbonAlignment): void {
		
		this.removeClasses(this.alignment.toString());
		this.alignment = alignment;
		this.addClasses(this.alignment.toString());
		
	}
	
}