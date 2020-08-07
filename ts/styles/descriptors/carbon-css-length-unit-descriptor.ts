/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	12:00 PM -- July 06th, 2019.
 *	Project: @carbonui/core
 */

/**
 * An enumeration of valid length units that can be used in to style elements with Carbon.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface CarbonCSSLengthUnitDescriptor {
	
	/**
	 * Relative to the length of the '0' character.
	 */
	readonly ["ch"]:	any;
	
	/**
	 * One metric centimeter.
	 */
	readonly ["cm"]:	any;
	
	/**
	 * Relative to the 'x-getHeight' of the current font.
	 */
	readonly ["em"]:	any;
	
	/**
	 * Relative to the 'x-getHeight' of the current font.
	 */
	readonly ["ex"]:	any;
	
	/**
	 * One imperial inch (96px).
	 */
	readonly ["in"]:	any;
	
	/**
	 * One metric millimeter.
	 */
	readonly ["mm"]:	any;
	
	/**
	 * One pica, where one pica is equivalent to your standard 12pt font.
	 */
	readonly ["pc"]:	any;
	
	/**
	 * Relative to the parent element.
	 */
	readonly ["%"]:		any;
	
	/**
	 * One point, where one point is 1/96th of an inch.
	 */
	readonly ["pt"]:	any;
	
	/**
	 * One pixel.
	 */
	readonly ["px"]:	any;
	
	/**
	 * Relative to the font-size of the root element.
	 */
	readonly ["rem"]:	any;
	
	/**
	 * Relative to 1% of the getHeight of the viewport.
	 */
	readonly ["vh"]:	any;
	
	/**
	 * Relative to 1% of the viewport's larger dimension.
	 */
	readonly ["vmax"]:	any;
	
	/**
	 * Relative to 1% of the viewport's smaller dimension.
	 */
	readonly ["vmin"]:	any;
	
	/**
	 * Relative to 1% of the width of the viewport.
	 */
	readonly ["vw"]:	any;
	
}