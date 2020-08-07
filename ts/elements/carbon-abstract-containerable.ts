/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	6:28 PM -- July 20th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonContainerable } from "../carbon-containerable";
import { CarbonContainer } from "./containers/carbon-container";
import { CarbonBaseEvents } from "../events/collections/carbon-base-events";

/**
 * An abstract implementation of a CarbonUI CarbonContainerable.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonAbstractContainerable<E extends Element = Element> implements CarbonContainerable<E> {
	
	// DOC-ME [7/21/19 @ 11:42 PM] - Documentation required!
	private typeIdentity: string | undefined;
	
	// DOC-ME [7/21/19 @ 9:41 PM] - Documentation required!
	protected readonly events: CarbonBaseEvents;
	
	/**
	 * The {@link CarbonContainer} that contains this CarbonAbstractContainerable.
	 */
	protected container: CarbonContainer | undefined;
	
	// // DOC-ME [7/21/19 @ 9:41 PM] - Documentation required!
	// private transitionLockManager: LockingQueue;
	
	// DOC-ME [7/21/19 @ 9:41 PM] - Documentation required!
	protected constructor() {
		
		this.events = new CarbonBaseEvents(this);
		// this.transitionLockManager = new LockingQueue();
		
		// TODO [7/19/19 @ 1:34 PM] - Is there a more elegant way to do this?
		(this.getElement() as any)["carbon"] = this;
		
	}
	
	/**
	 * Returns the DOM element that constitutes this CarbonAbstractContainerable.
	 *
	 * @returns {E} The DOM element that constitutes this CarbonAbstractContainerable.
	 */
	public abstract getElement(): E;
	
	// DOC-ME [7/21/19 @ 11:42 PM] - Documentation required!
	public setTypeIdentity(typeIdentity: string): void {
		
		this.addClasses(typeIdentity);
		this.typeIdentity = typeIdentity;
		
	}
	
	// DOC-ME [7/21/19 @ 11:42 PM] - Documentation required!
	public getTypeIdentity(): string {
		
		if (this.typeIdentity === undefined) {
			
			throw new Error("ERR | Attempted to retrieve the type identity of an element that did not have it's type " +
				"identity set. This is an error on the part of the creator of the element and should be fixed as " +
				"such.");
			
		} else return this.typeIdentity;
		
	}
	
	/**
	 * Returns the ID of this CarbonAbstractContainerable.
	 *
	 * This ID serves as both the identifier within the Carbon framework as well as the actual DOM ID of the Element.
	 *
	 * @returns {string} The ID of this CarbonAbstractContainerable.
	 */
	public getID(): string {
		
		return this.getElement().id;
		
	}
	
	/**
	 * Sets the ID of this CarbonAbstractContainerable.
	 *
	 * @param {string} id The string to set as this CarbonAbstractContainerable's ID.
	 */
	public setID(id: string): void {
	
		this.getElement().id = id;
	
	}
	
	/**
	 * Returns true if this CarbonAbstractContainerable has the provided class.
	 *
	 * @param {string} className The name of the class to check for on this CarbonAbstractContainerable.
	 * @returns {boolean} true if this CarbonAbstractContainerable has the provided class.
	 */
	public hasClass(className: string): boolean {
		
		return this.getElement().classList.contains(className);
		
	}
	
	/**
	 * Returns a string array of all of the classes on this CarbonAbstractContainerable.
	 *
	 * @returns {string[]} A string array of all of the classes on this CarbonAbstractContainerable.
	 */
	public getClasses(): string[] {
		
		return Array.from(this.getElement().classList);
		
	}
	
	/**
	 * Adds classes to this CarbonAbstractContainerable.
	 *
	 * @param {string[]} classNames The names of the classes to add to this CarbonAbstractContainerable.
	 */
	public addClasses(...classNames: string[]): void {
	
		for (let className of classNames) this.getElement().classList.add(className);
	
	}
	
	/**
	 * Removes classes from this CarbonAbstractContainerable.
	 *
	 * @param {string[]} classNames The names of the classes to remove from this CarbonAbstractContainerable.
	 */
	public removeClasses(...classNames: string[]): void {
		
		for (let className of classNames) this.getElement().classList.remove(className);
	
	}
	
	/**
	 * If a valid {@link CarbonContainer} is passed, this method returns true if said container contains this
	 * CarbonAbstractContainerable, otherwise returns true if this CarbonAbstractContainerable is inside of ANY
	 * container.
	 *
	 * @param {CarbonContainer} container The container to check for ownership of this CarbonAbstractContainerable.
	 * @returns {boolean} true if the provided container contains this CarbonAbstractContainerable, or if no container
	 * is passed, true if ANY container contains this CarbonAbstractContainerable.
	 */
	public hasContainer(container?: CarbonContainer<CarbonContainerable>): boolean {
		
		if (container) return (this.container === container);
		else return (this.container !== undefined && this.container !== null);
		
	}
	
	/**
	 * Returns the {@link CarbonContainer} to which this CarbonAbstractContainerable belongs, or undefined if this
	 * CarbonAbstractContainerable is not in a container.
	 *
	 * @returns {CarbonContainer} The CarbonContainer to which this CarbonAbstractContainerable belongs, or undefined if
	 * this CarbonAbstractContainerable is not in a container.
	 */
	public getContainer(): CarbonContainer<CarbonContainerable> | undefined {
		
		return this.container;
		
	}
	
	// DOC-ME [7/21/19 @ 9:33 PM] - Documentation required!
	public setContainer(container: CarbonContainer<CarbonContainerable>): void {
		
		// TODO [7/21/19 @ 9:32 PM] - Is this enough to prevent container dichotomy errors?
		
		if (this.hasContainer(container)) return;
		else this.container = container;
		
	}
	
	// // DOC-ME [7/21/19 @ 9:17 PM] - Documentation required!
	// public getTransitionLock(): Promise<Lock> {
	//
	// 	return this.transitionLockManager.getLock();
	//
	// }
	
	/**
	 * Removes this CarbonAbstractContainerable from its container if it is in one.
	 */
	public orphan(): void {
		
		if (this.hasContainer()) {
			
			(this.container as CarbonContainer).getElement().removeChild(this.getElement());
			
			this.container = undefined;
			
			this.events.ELEMENT_REMOVED_FROM_PAGE.notify();
			
		} else return undefined;
	
	}
	
	// DOC-ME [7/21/19 @ 9:40 PM] - Documentation required!
	public getEventManager(): CarbonBaseEvents {
		
		return this.events;
		
	}
	
}