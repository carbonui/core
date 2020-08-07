/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:47 PM -- July 06th, 2019.
 *	Project: @carbonui/core
 */

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface CarbonCssAngleUnit {
	
	/**
	 * One standard degree of rotation, where a full circle is 360deg.
	 */
	readonly ["deg"]: any;
	
	/**
	 * One mathematical 'gradian', where a full circle is 400grad.
	 */
	readonly ["grad"]: any;
	
	/**
	 * One mathematical 'radian', where a full circle is 2pi radians.
	 */
	readonly ["rad"]: any;
	
	/**
	 * One full turn, equal to 360deg.
	 */
	readonly ["turn"]: any;

}