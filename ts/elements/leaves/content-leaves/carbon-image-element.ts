/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:48 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonElement } from "../../carbon-element";
import { CarbonContentLeafType } from "../../../types/element-types/content-leaves/carbon-content-leaf-type";

/**
 * A {@link CarbonElement} that displays an image.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonImageElement extends CarbonElement<HTMLImageElement> {
	
	// DOC-ME [12/14/18 @ 9:51 AM] - Documentation required!
	public constructor(imageURI: string) {
		
		super(CarbonContentLeafType.IMG);
		this.setTypeIdentity("carbon-image-leaf");
		
		this.setSource(imageURI);
		
	}
	
	// DOC-ME [12/14/18 @ 4:23 PM] - Documentation required!
	public setSource(imageURI: string): void {
		
		this.getElement().src = imageURI;
		
	}
	
	public getSource(): string {
		
		return this.getElement().src;
		
	}
	
}