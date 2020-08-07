/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:54 AM -- March 24th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonContainerable } from "../../../carbon-containerable";
import { CarbonMultiContainer } from "../carbon-multi-container";
import { CarbonContainerType } from "../../../types/element-types/carbon-container-type";
import { CarbonAlignment } from "../../../descriptors/carbon-alignment";
import { CarbonAlignmentContainer } from "../single-containers/carbon-alignment-container";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonStackContainer<T extends CarbonContainerable = CarbonContainerable> extends CarbonMultiContainer<CarbonAlignmentContainer<T>> {
	
	private alignment: CarbonAlignment;
	
	// DOC-ME [12/8/18 @ 3:44 PM] - Documentation required!
	public constructor(alignment: CarbonAlignment, containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		this.alignment = alignment;
		this.setTypeIdentity("carbon-stack-container");
		this.addClasses(alignment.toString());
		
	}
	
	public addStackedChild(child: T): void {
		
		let alignmentContainer: CarbonAlignmentContainer<T> = new CarbonAlignmentContainer(this.alignment);
		alignmentContainer.setChild(child);
		this.addChild(alignmentContainer);
		
	}
	
}