/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:51 PM -- November 14th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainer } from "./carbon-container";
import { CarbonContainerType } from "../../types/element-types/carbon-container-type";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 * A {@link CarbonContainer} that can hold multiple {@link CarbonElement}s.
 *
 * @see CarbonSingleContainer
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonMultiContainer<T extends CarbonContainerable> extends CarbonContainer<T> {
	
	/**
	 * Initializes a new CarbonMultiContainer with a given {@link CarbonContainerType}.
	 *
	 * @param {CarbonContainerType} containerType
	 */
	protected constructor(containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		this.setTypeIdentity("carbon-multi-container");
		
	}
	
	/**
	 * Adds a child {@link CarbonElement} to this CarbonMultiContainer.
	 *
	 * @param child The child to add to this CarbonMultiContainer.
	 * @returns {string} The ID of the newly added child.
	 */
	public addChild(child: T): string {
		
		return this.adoptChild(child);
		
	}
	
	/**
	 * Adds children {@link CarbonElement}s to this CarbonMultiContainer in bulk.
	 *
	 * @param children The children to add to this CarbonMultiContainer.
	 * @returns {string[]} The IDs of the newly added children in insertion order.
	 */
	public addChildren(...children: T[]): string[] {
		
		let ids: string[] = [];
		
		for (let child of children) ids.push(this.addChild(child));
		
		return ids;
		
	}
	
	// DOC-ME [3/14/19 @ 3:19 PM] - Documentation required!
	public addBefore(child: T, before: T): string {
		
		return this.adoptChild(child, before);
		
	}
	
	/**
	 * Returns a child of of this CarbonMultiContainer with the given ID if it exists, otherwise this method returns null.
	 *
	 * @param {string} id The ID of the {@link CarbonElement} to retrieve.
	 * @returns A child of of this CarbonMultiContainer with the given ID if it exists, otherwise null.
	 */
	public getChild(id: string): T | undefined {
		
		return this.children.get(id);
		
	}
	
	/**
	 * Returns an array of all of the children of this CarbonMultiContainer.
	 *
	 * @returns {T[]} An array of all of the children of this CarbonMultiContainer.
	 */
	public getAllChildren(): T[] {
		
		return this.children.valueSet();
		
	}
	
	/**
	 * Removes and returns a child of of this CarbonMultiContainer with the given ID if it exists, otherwise this method
	 * returns null.
	 *
	 * @param {string} id The ID of the {@link CarbonElement} to remove.
	 * @returns A child of of this CarbonMultiContainer with the given ID if it exists, otherwise null.
	 */
	public removeChild(id: string): T | undefined {
		
		return this.orphanChild(id);
		
	}
	
	/**
	 * Removes all of this CarbonMultiContainer's children.
	 */
	public removeAllChildren(): void {
		
		for (let element of this.getAllChildren()) element.orphan();
		
	}
	
}