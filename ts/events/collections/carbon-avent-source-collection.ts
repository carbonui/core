/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:18 AM -- August 13th, 2019.
 *	Project: CarbonUI Core
 */

import { AventSource } from "avents";

/**
 * An interface representing a collection of {@link AventSource}s.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export type CarbonAventSourceCollection<T> = {
	
	readonly [P in keyof T]: AventSource<EventType<T[P]>>;

};

type EventType<T> = T extends AventSource<infer E> ? E : void;