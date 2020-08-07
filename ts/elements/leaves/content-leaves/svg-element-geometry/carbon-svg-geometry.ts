/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:16 PM -- January 23rd, 2019.
 *	Project: @carbonui/core
 */

import { CarbonAlignment } from "../../../../descriptors/carbon-alignment";
import { CarbonColor } from "../../../../descriptors/colors/carbon-color";
import { CarbonSVGGeometryElementType } from "../../../../types/element-types/content-leaves/carbon-svg-geometry-element-type";
import { CarbonAbstractElement } from "../../../carbon-abstract-element";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonSVGGeometry<E extends SVGGraphicsElement> extends CarbonAbstractElement<E> {
	
	protected constructor(geometryType: CarbonSVGGeometryElementType<E>) {
		
		super(geometryType);
		
		this.setTypeIdentity("carbon-svg-geometry");
		
	}
	
	public abstract move(xDelta: number, yDelta: number): void;
	
	public abstract scale(factor: number, origin?: CarbonAlignment): void;
	
	public setStrokeWidth(strokeWidth: any): void {
		
		this.element.setAttribute("stroke-width", strokeWidth);
		
	}
	
	public setStrokeColor(strokeColor: CarbonColor): void {
		
		/*
		 * TODO [1/23/19 @ 4:52 PM]
		 * 	These properties should be bindable and talk with a Carbon CSS system rather than directly with the stylesheet.
		 */
		
		this.element.setAttribute("stroke", strokeColor.getCSSString());
		
	}
	
	public setFillColor(fillColor: CarbonColor): void {
		
		this.element.setAttribute("fill", fillColor.getCSSString());
		
	}
	
	public setFillOpacity(fillOpacity: number): void {
		
		// TODO [1/26/19 @ 7:28 PM] - This should only ever be between 0 and 1 (0 <= x <= 1).
		this.element.setAttribute("fill-opacity", fillOpacity.toString());
		
	}
	
}