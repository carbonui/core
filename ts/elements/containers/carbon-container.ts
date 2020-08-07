/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:53 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainerType } from "../../types/element-types/carbon-container-type";
import { CarbonContainerable } from "../../carbon-containerable";
import { CarbonElement } from "../carbon-element";
import { CarbonIDMap } from "../../misc/carbon-id-map";
import { CarbonContainerEvents } from "../../events/collections/carbon-container-events";

/**
 * Defines the most basic form of a container for {@link CarbonElement}s. Provides protected methods for operating on the
 * CarbonContainer's DOM object. CarbonContainers are optionally typed, with the least-specific type being an CarbonElement - but
 * if a more specific type of element
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonContainer<T extends CarbonContainerable = CarbonContainerable> extends CarbonElement<HTMLElement> {
	
	/**
	 * The children of this CarbonContainer as stored inside of a CarbonIDMap.
	 */
	protected children: CarbonIDMap<T>;
	
	protected readonly events: CarbonContainerEvents<T>;
	
	/**
	 * A pass-through constructor that 'casts' the provided {@link CarbonContainerType} to an {@link CarbonElementType} and
	 * passes the appropriate classes through to the super.
	 *
	 * Removes a {@link CarbonElement} with a given ID from this CarbonContainer's DOM object as well as its
	 *
	 * @param {CarbonContainerType} containerType The CarbonContainerType of this CarbonContainer.
	 */
	protected constructor(containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		this.setTypeIdentity("carbon-container");
		
		if (this.hasContainer()) this.children = (this.getContainer() as CarbonContainer).children.getChildMap();
		else this.children = window.carbon.getMasterIDMap().getChildMap();
		
		this.events = new CarbonContainerEvents<T>(this);
		
	}
	
	/**
	 * Appends a child to this CarbonContainer's DOM object as well as its {@link CarbonIDMap}.
	 *
	 * @param element The {@link CarbonElement} to append to this CarbonContainer.
	 * @param beforeElement The CarbonElement before which to append the previously specified element.
	 * @returns {string} The ID of the newly created T.
	 */
	protected adoptChild(element: T, beforeElement?: T): string {
		
		if (element.hasContainer === undefined) {
			
			try {
				
				element.hasContainer(this);
				
			} catch (e) {
				
				let error: Error = e as Error;
				
				console.log(error);
				
				console.log(element);
				
			}
			
		}
		
		if (element.hasContainer(this)) return element.getID();
		// else if (element.hasContainer()) throw new CarbonContainerDichotomyError();
		else if (element.hasContainer()) {
			
			throw new Error("ERR | Container dichotomy error... attempted to add an element to more than one " +
				"container.");
			
		} else {
			
			if (beforeElement === undefined) this.getElement().appendChild(element.getElement());
			else this.getElement().insertBefore(element.getElement(), beforeElement.getElement());
			
			this.getEventManager().CHILD_ADDED_TO_CONTAINER.notify(element);
			
			element.setContainer(this);
			return this.children.add(element);
			
		}
		
	}
	
	/**
	 * Removes a {@link CarbonElement} with a given ID from this CarbonContainer's DOM object as well as its
	 * {@link CarbonIDMap}.
	 *
	 * @param {string} id The ID of the {@link CarbonElement} to orphan.
	 * @returns A child of of this CarbonContainer with the given ID if it exists, otherwise null.
	 */
	protected orphanChild(id: string): T | undefined {
		
		if (this.hasChild(id)) {
			
			let result: T = this.children.remove(id) as T;
			result.orphan();
			return result;
			
		} else return undefined;
		
	}
	
	/**
	 * Removes all of the children of this CarbonContainer, returning true if any children were actually removed.
	 *
	 * @returns {boolean} A boolean indicating whether or not any children were actually removed.
	 */
	protected orphanAllChildren(): boolean {
		
		let element: Element = this.getElement();
		
		if (element.hasChildNodes()) {
			
			while (element.firstChild) element.removeChild(element.firstChild);
			return true;
			
		} else return false;
		
	}
	
	/**
	 * Returns true if this CarbonContainer has a CarbonElement with the provided ID.
	 *
	 * @param {string} id The to check for inside this CarbonContainer.
	 * @returns {boolean} true if this CarbonContainer has a CarbonElement with the provided ID.
	 */
	public hasChild(id: string): boolean {
		
		return this.children.contains(id);
		
	}
	
	public getAllChildren(): T[] {
		
		return this.children.valueSet();
		
	}
	
	/**
	 * Returns true if this CarbonContainer has no children.
	 *
	 * @returns {boolean} true if this CarbonContainer has no children.
	 */
	public isEmpty(): boolean {
		
		return this.children.isEmpty();
		
	}
	
	public getEventManager(): CarbonContainerEvents<T> {
		
		return this.events;
		
	}
	
}