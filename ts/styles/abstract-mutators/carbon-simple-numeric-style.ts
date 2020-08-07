/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:37 AM -- July 06th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonAbstractStyleMutator } from "../carbon-abstract-style-mutator";
import { CarbonCSSLengthUnitDescriptor } from "../descriptors/carbon-css-length-unit-descriptor";
import { CarbonElement } from "../../elements/carbon-element";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonSimpleNumericStyle extends CarbonAbstractStyleMutator {
	
	public constructor(element: CarbonElement, styleName: string) {
		
		super(element, styleName);
		
	}
	
	public getValue(): number | undefined {
		
		if (this.isSet()) {
		
			let cssString: string = this.getElement().style[this.getStyleName() as any];
			let characters: string = "";
			
			for (let index: number = 0; index < cssString.length; index++) {
				
				let currentCharacter: string = cssString.charAt(index);
				
				if (isValueCharacter(currentCharacter)) characters += currentCharacter;
				else break;
				
			}
			
			return parseFloat(characters);
		
		} else return undefined;
		
	}
	
	public getUnit(): (keyof CarbonCSSLengthUnitDescriptor) | undefined {
		
		if (this.isSet()) {
			
			let cssString: string = this.getElement().style[this.getStyleName() as any];
			let characters: string = "";
			
			for (let index: number = cssString.length - 1; index >= 0; index--) {
				
				let currentCharacter: string = cssString.charAt(index);
				
				if (!isValueCharacter(currentCharacter)) characters = currentCharacter + characters;
				else break;
				
			}
			
			return characters.toLowerCase() as keyof CarbonCSSLengthUnitDescriptor;
		
		} else return undefined;
		
	}
	
	public increment(increment: number = 1): void {
		
		if (this.isSet()) {
			
			let value: number = this.getValue() as number;
			let unit: keyof CarbonCSSLengthUnitDescriptor = this.getUnit() as keyof CarbonCSSLengthUnitDescriptor;
			
			this.set(value + increment, unit);
			this.getElement().style[this.getStyleName() as any] = value + unit;
			
		}
		
	}
	
	public decrement(decrement: number = 1): void {
		
		if (this.isSet()) {
			
			let value: number = this.getValue() as number;
			let unit: keyof CarbonCSSLengthUnitDescriptor = this.getUnit() as keyof CarbonCSSLengthUnitDescriptor;
			
			this.set(value - decrement, unit);
			this.getElement().style[this.getStyleName() as any] = value + unit;
			
		}
		
	}
	
	public set(value: number, unit: keyof CarbonCSSLengthUnitDescriptor): void {
	
		this.getElement().style[this.getStyleName() as any] = value + unit;
	
	}
	
	public toCSSString(): string {
		
		return this.getStyleName() + ": " + this.getValue() + this.getUnit();
		
	}
	
}

/**
 * Returns true if the provided string is a valid character that can represent the part of the CSS string that indicates
 * the numeric value of a given tag/rule.
 *
 * @param character The character to check for compliance.
 * @return true if the provided string is a valid character that can represent the part of the CSS string that indicates
 * the numeric value of a given tag/rule.
 */
function isValueCharacter(character: string): boolean {
	
	return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-"].includes(character);
	
}