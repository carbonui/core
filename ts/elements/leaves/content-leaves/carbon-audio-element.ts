/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:49 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonElement } from "../../carbon-element";
import { CarbonContentLeafType } from "../../../types/element-types/content-leaves/carbon-content-leaf-type";

/**
 * A {@link CarbonElement} that plays audio in some capacity.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonAudioElement extends CarbonElement<HTMLAudioElement> {
	
	// DOC-ME [12/14/18 @ 9:40 AM] - Documentation required!
	public constructor() {
		
		super(CarbonContentLeafType.AUDIO);
		this.setTypeIdentity("carbon-audio-leaf");
		
	}
	
}