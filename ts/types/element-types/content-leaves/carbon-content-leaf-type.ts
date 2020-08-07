/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:39 PM -- May 23rd, 2019.
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
export class CarbonContentLeafType<E extends Element> extends CarbonElementType<E> {
	
	public static readonly AUDIO:		CarbonContentLeafType<HTMLAudioElement>	= new CarbonContentLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLAudioElement>("audio")
	);
	
	public static readonly CANVAS:		CarbonContentLeafType<HTMLCanvasElement>	= new CarbonContentLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLCanvasElement>("canvas")
	);
	
	public static readonly IMG:			CarbonContentLeafType<HTMLImageElement>	= new CarbonContentLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLImageElement>("img")
	);
	
	public static readonly PROGRESS:	CarbonContentLeafType<HTMLProgressElement>	= new CarbonContentLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLProgressElement>("progress")
	);
	
	public static readonly SVG:			CarbonContentLeafType<SVGSVGElement>		= new CarbonContentLeafType(
		(): SVGSVGElement => document.createElementNS("http://www.w3.org/2000/svg", "svg") as unknown as SVGSVGElement
	);
	
	public static readonly VIDEO:		CarbonContentLeafType<HTMLVideoElement>	= new CarbonContentLeafType(
		CarbonElementType.getPlainElementFactoryMethod<HTMLVideoElement>("video")
	);
	
	protected constructor(factoryMethod: () => E) {
	
		super(factoryMethod);
	
	}
	
}