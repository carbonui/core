/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:29 PM -- December 16th, 2018.
 *	Project: @carbonui/core
 */

/**
 * Enumerates possible directions.
 * Used in various places, such as for content flow ({@link CarbonFlowContainer}), or for TODO
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export enum CarbonDirection {
	
	/**
	 * Describes a direction that originates at the 'bottom' and terminates at the 'top'.
	 */
	TO_TOP = "carbon-direction-to-top",
	
	/**
	 * Describes a direction that originates at the 'top' and terminates at the 'bottom'.
	 */
	TO_BOTTOM = "carbon-direction-to-bottom",
	
	/**
	 * Describes a direction that originates at the 'left' and terminates at the 'right'.
	 */
	TO_RIGHT = "carbon-direction-to-right",
	
	/**
	 * Describes a direction that originates at the 'right' and terminates at the 'left'.
	 */
	TO_LEFT = "carbon-direction-to-left"
	
}