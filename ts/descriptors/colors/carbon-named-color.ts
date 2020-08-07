/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	7:15 PM -- January 26th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonColor } from "./carbon-color";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonNamedColor extends CarbonColor {
	
	public static readonly BLACK: CarbonNamedColor = new CarbonNamedColor("rgba(0, 0, 0, 1)");
	
	public static readonly WHITE: CarbonNamedColor = new CarbonNamedColor("rgba(255, 255, 255, 1)");
	
	public static readonly TRANSPARENT: CarbonNamedColor = new CarbonNamedColor("rgba(0, 0, 0, 0)");
	
	public static readonly RED: CarbonNamedColor = new CarbonNamedColor("rgba(255, 0, 0, 1)");
	
	public static readonly GREEN: CarbonNamedColor = new CarbonNamedColor("rgba(0, 255, 0, 1)");
	
	public static readonly BLUE: CarbonNamedColor = new CarbonNamedColor("rgba(0, 0, 255, 1)");
	
	public static readonly YELLOW: CarbonNamedColor = new CarbonNamedColor("rgba(255, 255, 0, 1)");
	
	public static readonly CYAN: CarbonNamedColor = new CarbonNamedColor("rgba(0, 255, 255, 1)");
	
	private readonly cssString: string;
	
	private constructor(cssString: string) {
		
		super();
		
		this.cssString = cssString;
		
	}
	
	public getCSSString(): string {
		
		return this.cssString;
		
	}
	
}