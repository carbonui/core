/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:48 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonElement } from "../../carbon-element";
import { CarbonTextElementType } from "../../../types/element-types/content-leaves/carbon-text-element-type";
import { CarbonTextElementEvents } from "../../../events/collections/carbon-text-element-events";

/**
 * A {@link CarbonElement} that displays text.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonTextElement extends CarbonElement<HTMLElement> {
	
	protected readonly events: CarbonTextElementEvents;
	
	// DOC-ME [12/14/18 @ 9:52 AM] - Documentation required!
	public constructor(content: string, textType: CarbonTextElementType = CarbonTextElementType.P) {
		
		super(textType);
		this.setTypeIdentity("carbon-text-leaf");
		this.events = new CarbonTextElementEvents(this);
		
		this.setText(content);
		
	}
	
	// DOC-ME [12/14/18 @ 9:52 AM] - Documentation required!
	public setText(content: string): string {
		
		let displaced: string = this.getText();
		this.getElement().innerText = content;
		this.getEventManager().ELEMENT_TEXT_CHANGED.notify(content);
		return displaced;
		
	}
	
	// DOC-ME [12/22/18 @ 4:07 PM] - Documentation required!
	public getText(): string {
		
		return this.getElement().innerText;
		
	}
	
	public getEventManager(): CarbonTextElementEvents {
		
		return this.events;
		
	}
	
}