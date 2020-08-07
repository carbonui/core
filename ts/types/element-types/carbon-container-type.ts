/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:03 PM -- May 23rd, 2019.
 *	Project: @carbonui/core
 */

import { CarbonElementType } from "./carbon-element-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonContainerType extends CarbonElementType<HTMLElement> {
	
	public static readonly DIV:		CarbonContainerType	= new CarbonContainerType("div");
	public static readonly FOOTER:	CarbonContainerType	= new CarbonContainerType("footer");
	public static readonly HEADER:	CarbonContainerType	= new CarbonContainerType("header");
	public static readonly MAIN:	CarbonContainerType	= new CarbonContainerType("main");
	public static readonly NAV:		CarbonContainerType	= new CarbonContainerType("nav");
	
	private constructor(elementTag: string) {
		
		super(CarbonElementType.getPlainElementFactoryMethod(elementTag));
	
	}
	
}