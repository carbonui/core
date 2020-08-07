/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:54 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonElement } from "../../../carbon-element";
import { CarbonControlLeafType } from "../../../../types/element-types/control-leaves/carbon-control-leaf-type";

// DOC-ME [12/8/18 @ 4:52 PM] - Documentation required!
export abstract class CarbonSelectorLeaf extends CarbonElement {
	
	// DOC-ME [12/8/18 @ 4:52 PM] - Documentation required!
	protected constructor(type: CarbonControlLeafType) {
		
		// TODO [12/14/18 @ 12:14 PM] - Make a proper type class.
		super(type);
		this.setTypeIdentity("carbon-selector-leaf");
		
	}
	
}