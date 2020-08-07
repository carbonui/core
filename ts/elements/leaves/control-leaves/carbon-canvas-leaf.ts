/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:16 PM -- March 28th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonElement } from "../../carbon-element";
import { CarbonControlLeafType } from "../../../types/element-types/control-leaves/carbon-control-leaf-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonCanvasLeaf extends CarbonElement<HTMLCanvasElement> {
	
	protected readonly context: CanvasRenderingContext2D;
	
	public constructor() {
		
		super(CarbonControlLeafType.CANVAS);
		this.setTypeIdentity("carbon-canvas-leaf");
		
		this.context = this.getElement().getContext("2d") as CanvasRenderingContext2D;
		
	}
	
	public correctSizing(): void {
		
		let heightString: string | null = getComputedStyle(this.getElement()).height;
		let widthString: string | null = getComputedStyle(this.getElement()).width;
		
		if ((heightString !== null) && (widthString !== null)) {
			
			this.getElement().height = parseFloat(heightString.substring(0, heightString.length - 2));
			this.getElement().width = parseFloat(widthString.substring(0, widthString.length - 2));
			
		} else {
			
			throw new Error("ERR | Required computed styles were returned as null. Failed to correct the sizing of " +
				"the relevant CarbonCanvasLeaf.");
			
		}
		
	}
	
}