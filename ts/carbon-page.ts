/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:21 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainerType } from "./types/element-types/carbon-container-type";
import { CarbonAlignmentContainer } from "./elements/containers/single-containers/carbon-alignment-container";
import { CarbonAlignment } from "./descriptors/carbon-alignment";
import { CarbonContainerable } from "./carbon-containerable";

/**
 * One full-viewport page within the {@link CarbonWorld}.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonPage<T extends CarbonContainerable = CarbonContainerable> extends CarbonAlignmentContainer<T> {
	
	public constructor(alignment: CarbonAlignment = CarbonAlignment.CENTER) {
		
		super(alignment, CarbonContainerType.DIV);
		this.setTypeIdentity("carbon-page");
		
	}
	
}