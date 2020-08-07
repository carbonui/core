/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:48 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonElement } from "../../carbon-element";
import { CarbonContentLeafType } from "../../../types/element-types/content-leaves/carbon-content-leaf-type";

export class CarbonVideoElement extends CarbonElement<HTMLVideoElement> {
	
	public constructor() {
		
		super(CarbonContentLeafType.VIDEO);
		this.setTypeIdentity("carbon-video-leaf");
		
	}
	
}