/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:40 PM -- April 06th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonElement } from "../../../../carbon-element";
import { CarbonControlLeafType } from "../../../../../types/element-types/control-leaves/carbon-control-leaf-type";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonSingleSelectorLeaf extends CarbonElement<HTMLInputElement> {
	
	protected constructor(startSelected: boolean) {
		
		super(CarbonControlLeafType.INPUT);
		this.setTypeIdentity("carbon-single-selector-leaf");
		
		this.setSelected(startSelected);
		
	}
	
	public abstract isSelected(): boolean;
	
	public abstract setSelected(isSelected: boolean): boolean;
	
}