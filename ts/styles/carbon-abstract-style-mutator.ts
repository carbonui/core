/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:32 AM -- July 06th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonStyleMutator } from "./carbon-style-mutator";
import { CarbonElement } from "../elements/carbon-element";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export abstract class CarbonAbstractStyleMutator implements CarbonStyleMutator {
	
	private readonly element: CarbonElement;
	
	private readonly styleName: string;
	
	protected constructor(element: CarbonElement, styleName: string) {
	
		this.element = element;
		this.styleName = styleName;
	
	}
	
	protected getElement(): HTMLElement {
		
		return this.element.getElement();
		
	}
	
	public abstract set(...args: any[]): void;
	
	public unset(): void {
		
		this.getElement().style[this.getStyleName() as any] = "";
		
	}
	
	public isSet(): boolean {
		
		return (
			this.getElement().style[this.getStyleName() as any] !== "" &&
			this.getElement().style[this.getStyleName() as any] !== undefined &&
			this.getElement().style[this.getStyleName() as any] !== null
		);
		
	}
	
	public getStyleName(): string {
		
		return this.styleName;
		
	}
	
	public abstract toCSSString(withStyleName: boolean): string;
	
}