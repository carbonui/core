/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:06 PM -- May 23rd, 2019.
 *	Project: @carbonui/core
 */

import { CarbonElementType } from "../carbon-element-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonControlLeafType<E extends HTMLElement = HTMLElement> extends CarbonElementType<E> {
	
	public static readonly CANVAS: CarbonControlLeafType<HTMLCanvasElement>	= new CarbonControlLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLCanvasElement>("canvas")
	);
	
	public static readonly INPUT: CarbonControlLeafType<HTMLInputElement>	= new CarbonControlLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLInputElement>("input")
	);
	
	public static readonly TEXTAREA: CarbonControlLeafType<HTMLTextAreaElement>	= new CarbonControlLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLTextAreaElement>("textarea")
	);
	
	public static readonly BUTTON: CarbonControlLeafType<HTMLButtonElement>	= new CarbonControlLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLButtonElement>("button")
	);
	
	protected constructor(factoryMethod: () => E) {
		
		super(factoryMethod);
		
	}
	
}