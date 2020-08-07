/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:27 PM -- February 15th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonUnitDescriptor } from "./carbon-unit-descriptor";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonAngleUnitDescriptor extends CarbonUnitDescriptor {
	
	public static readonly DEG: CarbonAngleUnitDescriptor = new CarbonAngleUnitDescriptor("deg");
	
	public static readonly GRAD: CarbonAngleUnitDescriptor = new CarbonAngleUnitDescriptor("grad");
	
	public static readonly RAD: CarbonAngleUnitDescriptor = new CarbonAngleUnitDescriptor("rad");
	
	public static readonly TURN: CarbonAngleUnitDescriptor = new CarbonAngleUnitDescriptor("turn");
	
	private constructor(cssString: string) {
		
		super(cssString);
		
	}
	
}