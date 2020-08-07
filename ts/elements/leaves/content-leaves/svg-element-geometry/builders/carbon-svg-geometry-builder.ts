/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:45 PM -- January 26th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonSVGGeometry } from "../carbon-svg-geometry";
import { CarbonColor } from "../../../../../descriptors/colors/carbon-color";
import { BuilderBase } from "../../../../../refactor/builder-base";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonSVGGeometryBuilder<E extends CarbonSVGGeometry<SVGGraphicsElement>> extends BuilderBase<E> {
	
	protected constructor() {
		
		super();
		
		this.addOptionals(
			"strokeWidth",
			"strokeColor",
			"fillColor",
			"fillOpacity"
		);
		
	}
	
	public withStrokeWidth(strokeWidth: number): CarbonSVGGeometryBuilder<E> {
		
		this.fulfillRequirement("strokeWidth", strokeWidth);
		
		return this;
		
	}
	
	public withStrokeColor(strokeColor: CarbonColor): CarbonSVGGeometryBuilder<E> {
		
		this.fulfillRequirement("strokeColor", strokeColor);
		
		return this;
		
	}
	
	public withFillColor(fillColor: CarbonColor): CarbonSVGGeometryBuilder<E> {
		
		this.fulfillRequirement("fillColor", fillColor);
		
		return this;
		
	}
	
	public withFillOpacity(fillOpacity: number): CarbonSVGGeometryBuilder<E> {
		
		this.fulfillRequirement("fillOpacity", fillOpacity);
		
		return this;
		
	}
	
}