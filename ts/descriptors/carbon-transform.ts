/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:31 PM -- February 15th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonUnitDescriptor } from "./units/carbon-unit-descriptor";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonTransform {
	
	private cssString: string;
	
	private constructor(cssString: string) {
		
		this.cssString = cssString;
		
	}
	
	public static scale(xFactor: number, yFactor: number): CarbonTransform {
		
		return new CarbonTransform("scale(" + xFactor + ", " + yFactor + ")");
		
	}
	
	public static scaleX(factor: number): CarbonTransform {
		
		return new CarbonTransform("scaleX(" + factor + ")");
		
	}
	
	public static scaleY(factor: number): CarbonTransform {
		
		return new CarbonTransform("scaleY(" + factor + ")");
		
	}
	
	public static scaleZ(factor: number): CarbonTransform {
		
		return new CarbonTransform("scaleZ(" + factor + ")");
		
	}
	
	public static translate(xValue: number, xUnit: CarbonUnitDescriptor, yValue: number, yUnit: CarbonUnitDescriptor): CarbonTransform {
		
		return new CarbonTransform("translate(" + xValue + xUnit.toString() + ", " + yValue + yUnit.toString() + ")");
		
	}
	
	public static translateX(value: number, unit: CarbonUnitDescriptor): CarbonTransform {
		
		return new CarbonTransform("translateX(" + value + unit.toString() + ")");
		
	}
	
	public static translateY(value: number, unit: CarbonUnitDescriptor): CarbonTransform {
		
		return new CarbonTransform("translateY(" + value + unit.toString() + ")");
		
	}
	
	public static translateZ(value: number, unit: CarbonUnitDescriptor): CarbonTransform {
		
		return new CarbonTransform("translateZ(" + value + unit.toString() + ")");
		
	}
	
	public getCSSString(): string {
		
		return this.cssString;
		
	}
	
}