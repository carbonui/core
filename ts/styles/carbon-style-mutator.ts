/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:48 PM -- December 24th, 2018.
 *	Project: @carbonui/core
 */

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface CarbonStyleMutator {
	
	set(...args: any[]): void;
	
	unset(): void;
	
	isSet(): boolean;
	
	getStyleName(): string;
	
	toCSSString(withStyleName: boolean): string;
	
}