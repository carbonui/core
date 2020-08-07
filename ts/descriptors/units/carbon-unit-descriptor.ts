/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:09 AM -- November 09th, 2018.
 *	Project: @carbonui/core
 */

/**
 * Enumerates different applicable CSS unit types.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonUnitDescriptor {
	
	private cssString: string;
	
	protected constructor(cssString: string) {
		
		this.cssString = cssString;
		
	}
	
	public toCSSString(): string {
		
		return this.cssString;
		
	}
	
}