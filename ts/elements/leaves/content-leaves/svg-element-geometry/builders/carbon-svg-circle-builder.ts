/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:51 PM -- January 26th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonSVGCircle } from "../carbon-svg-circle";
import { CarbonSVGGeometryBuilder } from "./carbon-svg-geometry-builder";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonSVGCircleBuilder extends CarbonSVGGeometryBuilder<CarbonSVGCircle> {
	
	public constructor() {
		
		super();
		
		this.addRequirements(
			"radius",
			"xOrigin",
			"yOrigin"
		);
		
	}
	
	public withRadius(radius: any): CarbonSVGCircleBuilder {
		
		this.fulfillRequirement("radius", radius);
		
		return this;
		
	}
	
	public withDiameter(diameter: any): CarbonSVGCircleBuilder {
		
		this.fulfillRequirement("radius", diameter / 2);
		
		return this;
		
	}
	
	public withXOrigin(xOrigin: any): CarbonSVGCircleBuilder {
		
		this.fulfillRequirement("xOrigin", xOrigin);
		
		return this;
		
	}
	
	public withYOrigin(yOrigin: any): CarbonSVGCircleBuilder {
		
		this.fulfillRequirement("yOrigin", yOrigin);
		
		return this;
		
	}
	
	public build(): CarbonSVGCircle {
		
		if (this.checkFulfillment()) {
			
			let result: CarbonSVGCircle = new CarbonSVGCircle(
				this.getValueOfRequirement("radius"),
				this.getValueOfRequirement("xOrigin"),
				this.getValueOfRequirement("yOrigin")
			);
			
			if (this.checkFulfillment("strokeWidth")) result.setStrokeWidth(this.getValueOfRequirement("strokeWidth"));
			if (this.checkFulfillment("strokeColor")) result.setStrokeColor(this.getValueOfRequirement("strokeColor"));
			if (this.checkFulfillment("fillColor")) result.setFillColor(this.getValueOfRequirement("fillColor"));
			if (this.checkFulfillment("fillOpacity")) result.setFillOpacity(this.getValueOfRequirement("fillOpacity"));
			
			return result;
			
		} else throw new Error(this.getErrorMessageForIncompleteBuilder());
		
	}
	
}