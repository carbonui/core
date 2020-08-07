/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:28 PM -- February 15th, 2019.
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
export class CarbonLengthUnitDescriptor extends CarbonUnitDescriptor {
	
	public static readonly CH: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("ch");
	
	public static readonly CM: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("cm");
	
	public static readonly EM: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("em");
	
	public static readonly EX: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("ex");
	
	public static readonly IN: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("in");
	
	public static readonly MM: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("mm");
	
	public static readonly PC: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("pc");
	
	public static readonly PERCENT: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("%");
	
	public static readonly PT: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("pt");
	
	public static readonly PX: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("px");
	
	public static readonly REM: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("rem");
	
	public static readonly VH: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("vh");
	
	public static readonly VMAX: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("vmax");
	
	public static readonly VMIN: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("vmin");
	
	public static readonly VW: CarbonLengthUnitDescriptor = new CarbonLengthUnitDescriptor("vw");
	
	private constructor(cssString: string) {
		
		super(cssString);
		
	}
	
}