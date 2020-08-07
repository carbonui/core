/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	11:53 AM -- July 16th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonConfig } from "./carbon-config";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class DefaultCarbonConfig implements CarbonConfig {
	
	public readonly preferErrors: boolean = true;
	
	public readonly idPattern: string = "3l3n";
	
	public readonly warnOnAppReinitialization: boolean = true;
	
	public readonly errorOnAppReinitialization: boolean = false;
	
}