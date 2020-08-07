/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:28 PM -- December 18th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainer } from "./elements/containers/carbon-container";
import { CarbonBaseEvents } from "./events/collections/carbon-base-events";

/**
 * Describes an item that can be placed inside a {@link CarbonContainer}.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export interface CarbonContainerable<E extends Element = Element> {
	
	/**
	 * Returns the Element that this CarbonContainerable represents.
	 *
	 * @returns {E} The Element that this CarbonContainerable represents.
	 */
	getElement(): E;
	
	/**
	 * Returns the string type identity of this CarbonContainerable.
	 *
	 * A CarbonContainerable's type identity is used in a variety of ways to uniquely identify the hierarchical type of
	 * an element.
	 *
	 * @return The string type identity of this CarbonContainerable.
	 */
	getTypeIdentity(): string;
	
	/**
	 * Returns the ID of the Element that this CarbonContainerable represents.
	 *
	 * @returns {string}
	 */
	getID(): string;
	
	/**
	 * Sets the ID of the Element that this CarbonContainerable represents.
	 *
	 * @param {string} id The ID to set as this CarbonContainerable's Element's ID.
	 */
	setID(id: string): void;
	
	/**
	 * Returns true if this CarbonContainerable's DOM element has the provided class.
	 *
	 * @param {string} className The name of the class to check for on this CarbonContainerable's DOM element.
	 * @returns {boolean} true if this CarbonContainerable's DOM element has the provided class.
	 */
	hasClass(className: string): boolean;
	
	/**
	 * Returns a string array of all of the classes on this CarbonContainerable's DOM element.
	 *
	 * @returns {string[]} A string array of all of the classes on this CarbonContainerable's DOM element.
	 */
	getClasses(): string[];
	
	/**
	 * Adds classes to this CarbonContainerable's DOM element.
	 *
	 * @param {string[]} classNames The names of the classes to add to this CarbonContainerable's DOM element.
	 */
	addClasses(...classNames: string[]): void;
	
	/**
	 * Removes classes from this CarbonContainerable's DOM element.
	 *
	 * @param {string[]} classNames The names of the classes to remove from this CarbonContainerable's DOM element.
	 */
	removeClasses(...classNames: string[]): void;
	
	/**
	 * If a CarbonContainer is passed as an argument, this method returns true if that CarbonContainer contains this
	 * CarbonContainerable. If no arguments are passed, this method returns true if this element is in *any* CarbonContainer.
	 *
	 * @param {CarbonContainer} container
	 * @returns {boolean}
	 */
	hasContainer(container?: CarbonContainer): boolean;
	
	/**
	 * Returns the CarbonContainer that contains this CarbonContainerable if one exists, otherwise returns undefined.
	 *
	 * @returns {CarbonContainer} The CarbonContainer that contains this CarbonContainerable if one exists, otherwise returns
	 * undefined.
	 */
	getContainer(): CarbonContainer | undefined;
	
	/**
	 * Sets the CarbonContainer that contains this CarbonContainerable.
	 *
	 * Note that this does not actually affect the DOM - it is merely meant to help prevent multi-containerization.
	 *
	 * @param {CarbonContainer} container
	 */
	setContainer(container: CarbonContainer): void;
	
	// /**
	//  * Gets the transition lock for this CarbonContainerable.
	//  *
	//  * @returns {Promise<Lock>} A {@link Lock}-resolving Promise for the transition lock for this CarbonContainerable.
	//  */
	// getTransitionLock(): Promise<Lock>;
	
	/**
	 * Orphans this CarbonContainerable from its container.
	 */
	orphan(): void;
	
	getEventManager(): CarbonBaseEvents;
	
}