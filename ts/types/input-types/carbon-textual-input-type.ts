/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:30 PM -- May 24th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonInputType } from "./carbon-input-type";

/**
 * Enumerates different types of textual inputs alongside descriptions of the given type.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonTextualInputType extends CarbonInputType {
	
	public static readonly EMAIL:		CarbonTextualInputType = new CarbonTextualInputType("email");
	public static readonly NUMERIC:		CarbonTextualInputType = new CarbonTextualInputType("number");
	public static readonly PASSWORD:	CarbonTextualInputType = new CarbonTextualInputType("password");
	public static readonly PLAIN:		CarbonTextualInputType = new CarbonTextualInputType("text");
	public static readonly PHONE:		CarbonTextualInputType = new CarbonTextualInputType("tel");
	
	private constructor(typeString: string) {
	
		super(typeString);
	
	}
	
}