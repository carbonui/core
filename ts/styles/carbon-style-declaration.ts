/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:14 AM -- December 19th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonStyleMutator } from "./carbon-style-mutator";
import { CarbonSimpleNumericStyle } from "./abstract-mutators/carbon-simple-numeric-style";
import { CarbonElement } from "../elements/carbon-element";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonStyleDeclaration {
	
	private element: CarbonElement;
	
	public constructor(element: CarbonElement) {
		
		this.element = element;
		
	}
	
	// public readonly background: CarbonStyleMutator;
	//
	// public readonly backgroundAttachment: CarbonStyleMutator;
	//
	// public readonly backgroundColor: CarbonStyleMutator;
	//
	// public readonly backgroundImage: CarbonStyleMutator;
	//
	// public readonly backgroundPosition: CarbonStyleMutator;
	//
	// public readonly backgroundRepeat: CarbonStyleMutator;
	//
	// public readonly border: CarbonStyleMutator;
	//
	// public readonly borderBottom: CarbonStyleMutator;
	//
	// public readonly borderBottomColor: CarbonStyleMutator;
	//
	// public readonly borderBottomStyle: CarbonStyleMutator;
	//
	// public readonly borderBottomWidth: CarbonStyleMutator;
	//
	// public readonly borderColor: CarbonStyleMutator;
	//
	// public readonly borderLeft: CarbonStyleMutator;
	//
	// public readonly borderLeftColor: CarbonStyleMutator;
	//
	// public readonly borderLeftStyle: CarbonStyleMutator;
	//
	// public readonly borderLeftWidth: CarbonStyleMutator;
	//
	// public readonly borderRight: CarbonStyleMutator;
	//
	// public readonly borderRightColor: CarbonStyleMutator;
	//
	// public readonly borderRightStyle: CarbonStyleMutator;
	//
	// public readonly borderRightWidth: CarbonStyleMutator;
	//
	// public readonly borderStyle: CarbonStyleMutator;
	//
	// public readonly borderTop: CarbonStyleMutator;
	//
	// public readonly borderTopColor: CarbonStyleMutator;
	//
	// public readonly borderTopStyle: CarbonStyleMutator;
	//
	// public readonly borderTopWidth: CarbonStyleMutator;
	//
	// public readonly borderWidth: CarbonStyleMutator;
	//
	// public readonly clear: CarbonStyleMutator;
	//
	// public readonly clip: CarbonStyleMutator;
	//
	// public readonly color: CarbonStyleMutator;
	//
	// public readonly cursor: CarbonStyleMutator;
	//
	// public readonly display: CarbonStyleMutator;
	//
	// public readonly filter: CarbonStyleMutator;
	//
	// public readonly cssFloat: CarbonStyleMutator;
	//
	// public readonly font: CarbonStyleMutator;
	//
	// public readonly fontFamily: CarbonStyleMutator;
	//
	// public readonly fontSize: CarbonStyleMutator;
	//
	// public readonly fontVariant: CarbonStyleMutator;
	//
	// public readonly fontWeight: CarbonStyleMutator;
	
	public readonly height: CarbonSimpleNumericStyle = new CarbonSimpleNumericStyle(this.element, "height");
	
	public readonly left: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "left");
	
	// public readonly letterSpacing: CarbonStyleMutator;
	//
	// public readonly lineHeight: CarbonStyleMutator;
	//
	// public readonly listStyle: CarbonStyleMutator;
	//
	// public readonly listStyleImage: CarbonStyleMutator;
	//
	// public readonly listStylePosition: CarbonStyleMutator;
	//
	// public readonly listStyleType: CarbonStyleMutator;
	//
	// public readonly margin: CarbonStyleMutator;
	//
	public readonly marginBottom: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "margin-bottom");

	public readonly marginLeft: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "margin-left");

	public readonly marginRight: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "margin-right");

	public readonly marginTop: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "margin-top");
	//
	// public readonly overflow: CarbonStyleMutator;
	//
	// public readonly padding: CarbonStyleMutator;
	//
	public readonly paddingBottom: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "padding-bottom");

	public readonly paddingLeft: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "padding-left");

	public readonly paddingRight: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "padding-right");

	public readonly paddingTop: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "padding-top");

	// public readonly pageBreakAfter: CarbonStyleMutator;
	//
	// public readonly pageBreakBefore: CarbonStyleMutator;
	//
	// public readonly position: CarbonStyleMutator;
	
	public readonly right: CarbonSimpleNumericStyle = new CarbonSimpleNumericStyle(this.element, "right");
	
	// public readonly strokeDashArray: CarbonStyleMutator;
	//
	// public readonly strokeDashOffset: CarbonStyleMutator;
	//
	// public readonly strokeWidth: CarbonStyleMutator;
	//
	// public readonly textAlign: CarbonStyleMutator;
	//
	// public readonly textDecoration: CarbonStyleMutator;
	//
	// public readonly textIndent: CarbonStyleMutator;
	//
	// public readonly textTransform: CarbonStyleMutator;
	
	public readonly top: CarbonSimpleNumericStyle = new CarbonSimpleNumericStyle(this.element, "top");
	
	// public readonly verticalAlign: CarbonStyleMutator;
	//
	// public readonly visibility: CarbonStyleMutator;
	
	public readonly width: CarbonStyleMutator = new CarbonSimpleNumericStyle(this.element, "width");
	
	// public readonly zIndex: CarbonStyleMutator;
	
}