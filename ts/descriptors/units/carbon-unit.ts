/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:19 PM -- December 21st, 2018.
 *	Project: @carbonui/core
 */

import { CarbonUnitDescriptor } from "./carbon-unit-descriptor";

/**
 * Describes a CSS length/getHeight/width in both it's magnitude (a number) and measurement (a {@link CarbonUnitDescriptor}).
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonUnit {
	
	private value: number;
	private measurement: CarbonUnitDescriptor;
	
	public constructor(value: number, measurement: CarbonUnitDescriptor) {
		
		this.value = value;
		this.measurement = measurement;
		
	}
	
	public set(value: number): void {
		
		this.value = value;
		
	}
	
	public increment(difference?: number): number {
		
		this.value = this.value + (difference ? difference : 1);
		return this.value;
		
	}
	
	public decrement(difference?: number): number {
		
		this.value = this.value - (difference ? difference : 1);
		return this.value;
		
	}
	
	public changeMeasurement(measurement: CarbonUnitDescriptor): void {
		
		this.measurement = measurement;
		
	}
	
	public getNumericValue(): number {
		
		return this.value;
		
	}
	
	public getUnitType(): CarbonUnitDescriptor {
		
		return this.measurement;
		
	}
	
	public toString(): string {
		
		return this.value + this.measurement.toString();
		
	}
	
}