/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:45 PM -- January 23rd, 2019.
 *	Project: @carbonui/core
 */

import { CarbonColor } from "./carbon-color";

/**
 * Represents a color within the RGBA color spectrum.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonRGBAColor extends CarbonColor {
	
	/**
	 * The red component of the color.
	 */
	private red: number | undefined;
	
	/**
	 * The green component of the color.
	 */
	private green: number | undefined;
	
	/**
	 * The blue component of the color.
	 */
	private blue: number | undefined;
	
	/**
	 * The alpha component of the color.
	 */
	private alpha: number | undefined;
	
	/**
	 * Initializes a new RGBA-type color, given the three required color components and potentially one optional
	 * component (alpha).
	 *
	 * @param {number} red The red value of the color.
	 * @param {number} green The green value of the color.
	 * @param {number} blue The blue value of the color.
	 * @param {number} alpha The alpha value of the color.
	 */
	public constructor(red: number, green: number, blue: number, alpha?: number) {
		
		super();
		
		this.setRedValue(red);
		this.setGreenValue(green);
		this.setBlueValue(blue);
		this.setAlphaValue((alpha ? alpha : 1));
		
	}
	
	public getRedValue(): number {
		
		return this.red as number;
		
	}
	
	public setRedValue(value: number): void {
		
		CarbonColor.rangeCheck("red value", value, 0, 255);
		
		this.red = value;
		
	}
	
	public getGreenValue(): number {
		
		return this.green as number;
		
	}
	
	public setGreenValue(value: number): void {
		
		CarbonColor.rangeCheck("green value", value, 0, 255);
		
		this.green = value;
		
	}
	
	public getBlueValue(): number {
		
		return this.blue as number;
		
	}
	
	public setBlueValue(value: number): void {
		
		CarbonColor.rangeCheck("blue value", value, 0, 255);
		
		this.blue = value;
		
	}
	
	public getAlphaValue(): number {
		
		return this.alpha as number;
		
	}
	
	public setAlphaValue(value: number): void {
		
		CarbonColor.rangeCheck("alpha value", value, 0, 1);
		
		this.alpha = value;
		
	}
	
	/**
	 * Returns a valid CSS color value-string.
	 */
	public getCSSString(): string {
		
		return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
		
	}
	
}