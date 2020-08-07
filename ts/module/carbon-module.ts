/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:05 PM -- December 13th, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonModuleEvents } from "./carbon-module-events";

export type EventType<B, E extends keyof B> = B[E] extends AventNotifier<infer U> ? U : never;

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface CarbonModule<B> {

	onConstruction?(event: EventType<CarbonModuleEvents<B>, "CONSTRUCTION">): void;
	
	onDestruction?(event: EventType<CarbonModuleEvents<B>, "DESTRUCTION">): void;

}