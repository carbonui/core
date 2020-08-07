/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:29 PM -- May 23rd, 2019.
 *	Project: @carbonui/core
 */

import { CarbonContentLeafType } from "./carbon-content-leaf-type";
import { CarbonElementType } from "../carbon-element-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonTextElementType extends CarbonContentLeafType<HTMLElement> {
	
	public static readonly H1:	CarbonTextElementType = new CarbonTextElementType("h1");
	public static readonly H2:	CarbonTextElementType = new CarbonTextElementType("h2");
	public static readonly H3:	CarbonTextElementType = new CarbonTextElementType("h3");
	public static readonly H4:	CarbonTextElementType = new CarbonTextElementType("h4");
	public static readonly H5:	CarbonTextElementType = new CarbonTextElementType("h5");
	public static readonly H6:	CarbonTextElementType = new CarbonTextElementType("h6");
	public static readonly P:	CarbonTextElementType = new CarbonTextElementType("p");
	
	private constructor(elementTag: string) {
		
		super(CarbonElementType.getPlainElementFactoryMethod(elementTag));
		
	}
	
}