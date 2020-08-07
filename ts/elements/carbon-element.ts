/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	2:34 AM -- November 03rd, 2018.
 *	Project: @carbonui/core
 */

import { CarbonElementType } from "../types/element-types/carbon-element-type";
import { CarbonAbstractElement } from "./carbon-abstract-element";
import { CarbonStyleDeclaration } from "../styles/carbon-style-declaration";

/**
 * The most basic form of an element, CarbonElement serves as the base-most abstract implementation of an item that can
 * exist on the page.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonElement<E extends HTMLElement = HTMLElement> extends CarbonAbstractElement<E> {
	
	private styleCollection: CarbonStyleDeclaration;
	
	// DOC-ME [12/8/18 @ 4:35 PM] - Documentation required!
	public constructor(elementType: CarbonElementType<E>) {
		
		super(elementType);
		
		this.setTypeIdentity("carbon-element");
		this.styleCollection = new CarbonStyleDeclaration(this);
		
	}
	
	public getStyleDeclaration(): CarbonStyleDeclaration {
		
		return this.styleCollection;
		
	}
	
	public setFocusability(focusability: boolean): void {
		
		// This can be fixed once HTML and SVG elements have segregated classes.
		
		// TODO [7/19/19 @ 1:34 PM] - Is there a more elegant way to do this?
		(this.getElement() as any)["tabIndex"] = (focusability ? 0 : -1);
		
	}
	
	public focus(): void {
		
		if (this.getElement() instanceof HTMLElement) {
			
			(this.getElement() as unknown as HTMLElement).focus();
			
		}
		
	}
	
}