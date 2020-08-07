/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:34 PM -- May 23rd, 2019.
 *	Project: @carbonui/core
 */

import { CarbonContentLeafType } from "./carbon-content-leaf-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonSVGGeometryElementType<E extends SVGGraphicsElement = SVGGraphicsElement> extends CarbonContentLeafType<E> {
	
	public static readonly CIRCLE:		CarbonSVGGeometryElementType<SVGCircleElement> = new CarbonSVGGeometryElementType<SVGCircleElement>("circle");
	public static readonly LINE:		CarbonSVGGeometryElementType<SVGLineElement> = new CarbonSVGGeometryElementType<SVGLineElement>("line");
	public static readonly PATH:		CarbonSVGGeometryElementType<SVGPathElement> = new CarbonSVGGeometryElementType<SVGPathElement>("path");
	public static readonly POLYGON:		CarbonSVGGeometryElementType<SVGPolygonElement> = new CarbonSVGGeometryElementType<SVGPolygonElement>("polygon");
	public static readonly RECT:		CarbonSVGGeometryElementType<SVGRectElement> = new CarbonSVGGeometryElementType<SVGRectElement>("rect");
	public static readonly TEXT:		CarbonSVGGeometryElementType<SVGTextElement> = new CarbonSVGGeometryElementType<SVGTextElement>("text");
	public static readonly TEXTPATH:	CarbonSVGGeometryElementType<SVGTextPathElement> = new CarbonSVGGeometryElementType<SVGTextPathElement>("textpath");
	
	private constructor(elementTag: string) {
		
		super((): E => document.createElementNS("http://www.w3.org/2000/svg", elementTag) as E);
		
	}
	
}