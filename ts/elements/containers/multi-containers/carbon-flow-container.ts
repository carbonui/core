/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:57 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContainerType } from "../../../types/element-types/carbon-container-type";
import { CarbonMultiContainer } from "../carbon-multi-container";
import { CarbonDirection } from "../../../descriptors/carbon-direction";
import { CarbonAlignment } from "../../../descriptors/carbon-alignment";
import { CarbonFlexWrappingRule } from "../../../descriptors/carbon-flex-wrapping-rule";
import { CarbonContainerable } from "../../../carbon-containerable";

/**
 * A {@link CarbonMultiContainer} in which content flows in accordance to a given direction, alignment, and wrapping style.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonFlowContainer<T extends CarbonContainerable = CarbonContainerable> extends CarbonMultiContainer<T> {
	
	// DOC-ME [12/17/18 @ 2:00 AM] - Documentation required!
	private direction: CarbonDirection;
	
	// DOC-ME [12/17/18 @ 2:00 AM] - Documentation required!
	private alignment: CarbonAlignment;
	
	private wrappingRule: CarbonFlexWrappingRule;
	
	// DOC-ME [12/17/18 @ 1:06 AM] - Documentation required!
	public constructor(direction: CarbonDirection, alignment: CarbonAlignment, wrappingRule?: CarbonFlexWrappingRule,
					   containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		super(containerType);
		
		this.direction = direction;
		this.alignment = alignment;
		this.wrappingRule = (wrappingRule ? wrappingRule : CarbonFlexWrappingRule.NO_WRAP);
		
		// TODO [1/22/19 @ 9:49 PM] - Confirm that the wrappingRule parameter actually does something.
		
		this.setTypeIdentity("carbon-flow-container");
		this.addClasses(this.direction.toString(), this.alignment.toString(), this.wrappingRule.toString());
		
	}
	
	/**
	 * Returns the direction that content flows inside this CarbonFlowContainer as a {@link CarbonDirection}.
	 *
	 * @returns {CarbonDirection} The direction that content flows inside this CarbonFlowContainer.
	 */
	public getDirection(): CarbonDirection {
		
		return this.direction;
		
	}
	
	/**
	 * Attempts to set the content direction of this CarbonFlowContainer to a given {@link CarbonDirection}.
	 *
	 * @param {CarbonDirection} direction The direction to set for this CarbonFlowContainer.
	 * @returns {boolean} true if the given direction was possible (and therefore applied).
	 */
	public setDirection(direction: CarbonDirection): void {
		
		if (direction !== this.direction) {
			
			if (this.direction !== undefined) this.removeClasses(this.direction.toString());
			this.direction = direction;
			this.addClasses(this.direction.toString());
			
		}
		
	}
	
	/**
	 * Returns the alignment of the contents of this CarbonFlowContainer as a {@link CarbonAlignment}.
	 *
	 * @returns {CarbonAlignment} The alignment of the contents of this CarbonFlowContainer.
	 */
	public getAlignment(): CarbonAlignment {
		
		return this.alignment;
		
	}
	
	/**
	 * Attempts to set the content alignment of this CarbonFlowContainer to a given {@link CarbonAlignment}.
	 *
	 * @param {CarbonAlignment} alignment The alignment to set for this CarbonFlowContainer.
	 * @returns {boolean} true if the given alignment was possible (and therefore applied).
	 */
	public setAlignment(alignment: CarbonAlignment): void {
		
		if (alignment !== this.alignment) {
			
			if (this.alignment !== undefined) this.removeClasses(this.alignment.toString());
			this.alignment = alignment;
			this.addClasses(this.alignment.toString());
			
		}
		
	}
	
}