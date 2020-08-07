/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:20 PM -- July 06th, 2019.
 *	Project: @carbonui/core
 */

/**
 * A configuration object for a Carbon App.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface CarbonConfig {
	
	readonly preferErrors: boolean;
	
	readonly idPattern: string;
	
	readonly warnOnAppReinitialization: boolean;
	
	readonly errorOnAppReinitialization: boolean;
	
}