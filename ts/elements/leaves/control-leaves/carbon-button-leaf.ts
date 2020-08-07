/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:49 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

// DOC-ME [12/8/18 @ 4:52 PM] - Documentation required!
import { CarbonElement } from "../../carbon-element";
import { CarbonControlLeafType } from "../../../types/element-types/control-leaves/carbon-control-leaf-type";

export class CarbonButtonLeaf extends CarbonElement<HTMLButtonElement> {
	
	// DOC-ME [12/8/18 @ 4:52 PM] - Documentation required!
	public constructor(buttonText: string) {
		
		super(CarbonControlLeafType.BUTTON);
		this.setTypeIdentity("carbon-button-leaf");
		this.getElement().setAttribute("type", "button");
		
		this.setText(buttonText);
		
	}
	
	// DOC-ME [12/22/18 @ 4:07 PM] - Documentation required!
	public setText(buttonText: string): void {
		
		this.getElement().value = buttonText;
		
	}
	
	// DOC-ME [12/22/18 @ 4:08 PM] - Documentation required!
	public getText(): string {
		
		return this.getElement().value;
		
	}
	
}