/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:48 PM -- April 06th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonSingleSelectorLeaf } from "./carbon-single-selector-leaf";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonCheckboxSingleSelectorLeaf extends CarbonSingleSelectorLeaf {
	
	public constructor(startSelected: boolean = false) {
		
		super(startSelected);
		this.setTypeIdentity("carbon-checkbox-single-selector-leaf");
		
		this.getElement().setAttribute("type", "checkbox");
		
	}
	
	public isSelected(): boolean {
		
		return this.getElement().checked;
		
	}
	
	public setSelected(isSelected: boolean): boolean {
		
		let displaced: boolean = this.isSelected();
		this.getElement().checked = isSelected;
		return displaced;
		
	}
	
}