/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	8:38 PM -- November 14th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainer } from "./carbon-container";
import { CarbonContainerType } from "../../types/element-types/carbon-container-type";
import { CarbonContainerable } from "../../carbon-containerable";

/**
 * A {@link CarbonContainer} that only holds a single element.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonSingleContainer<T extends CarbonContainerable> extends CarbonContainer<T> {
	
	/**
	 * The single CarbonContainerable child of this CarbonSingleContainer.
	 */
	private child: T | undefined = undefined;
	
	/**
	 * Initializes a new CarbonSingleContainer, given a {@link CarbonContainerType}.
	 *
	 * @param {CarbonContainerType} containerType
	 */
	protected constructor(containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		this.setTypeIdentity("carbon-single-container");
		
	}
	
	/**
	 * Sets the child of this CarbonSingleContainer to a given CarbonContainerable.
	 *
	 * @param child The CarbonContainerable to set as this CarbonSingleContainer's child.
	 */
	public setChild(child: T): void {
		
		if (!this.isEmpty()) this.orphanAllChildren();
		this.adoptChild(child);
		this.child = child;
		
	}
	
	/**
	 * Removes and returns the child of this CarbonSingleContainer if it has one, otherwise this method returns
	 * undefined.
	 *
	 * @returns The CarbonContainerable that was removed from this CarbonSingleContainer or null if no child was present.
	 */
	public removeChild(): T | undefined {
		
		if (!this.isEmpty()) this.orphanAllChildren();
		let result: T | undefined = this.child;
		this.child = undefined;
		return result;
		
	}
	
	/**
	 * Returns the CarbonContainerable child of this CarbonSingleContainer if it has one, otherwise this method returns null.
	 *
	 * @returns The CarbonContainerable child of this CarbonSingleContainer or null if no child was present.
	 */
	public getChild(): T | undefined {
		
		return this.child;
		
	}
	
}