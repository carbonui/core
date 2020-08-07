/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:12 PM -- January 23rd, 2019.
 *	Project: @carbonui/core
 */

import { CarbonSVGGeometry } from "./carbon-svg-geometry";
import { CarbonAlignment } from "../../../../descriptors/carbon-alignment";
import { CarbonSVGGeometryElementType } from "../../../../types/element-types/content-leaves/carbon-svg-geometry-element-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonSVGCircle extends CarbonSVGGeometry<SVGCircleElement> {
	
	public constructor(radius: number, xOrigin: number, yOrigin: number) {
		
		super(CarbonSVGGeometryElementType.CIRCLE);
		this.setTypeIdentity("carbon-svg-circle");
		
		this.setRadius(radius);
		this.setXOrigin(xOrigin);
		this.setYOrigin(yOrigin);
		
	}
	
	public static createFromCenterPoint(diameter: number, xOrigin: number, yOrigin: number): CarbonSVGCircle {
		
		return new CarbonSVGCircle(diameter / 2, xOrigin, yOrigin);
		
	}
	
	public setRadius(radius: any): void {
		
		this.element.setAttribute("r", radius);
		
	}
	
	public setDiameter(diameter: number): void {
		
		this.element.setAttribute("r", (diameter / 2).toString());
		
	}
	
	public setXOrigin(xOrigin: any): void {
		
		this.element.setAttribute("cx", xOrigin);
		
	}
	
	public setYOrigin(yOrigin: any): void {
		
		this.element.setAttribute("cy", yOrigin);
		
	}
	
	public move(xDelta: any, yDelta: any): void {
		
		return;
		
	}
	
	public scale(factor: any, origin?: CarbonAlignment): void {
		
		return;
		
	}
	
}