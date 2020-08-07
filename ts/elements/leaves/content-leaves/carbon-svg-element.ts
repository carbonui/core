/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	5:12 AM -- December 17th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonContentLeafType } from "../../../types/element-types/content-leaves/carbon-content-leaf-type";
import { CarbonIDMap } from "../../../misc/carbon-id-map";
import { CarbonAbstractElement } from "../../carbon-abstract-element";
import { CarbonSVGGeometry } from "./svg-element-geometry/carbon-svg-geometry";

/**
 * A {@link CarbonElement} that displays an SVG (scalable vector graphic).
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonSVGElement<G extends CarbonSVGGeometry<SVGGraphicsElement> = CarbonSVGGeometry<SVGGeometryElement>>
	extends CarbonAbstractElement<SVGSVGElement> {
	
	private static readonly SVG_ATTRIBUTES: string[] = [
		"xmlns",
		"width",
		"height",
		"viewBox",
		"fill",
		"stroke",
		"stroke-width",
		"stroke-linecap",
		"stroke-linejoin"
	];
	
	private childGeometry: CarbonIDMap<G>;
	
	public constructor(svgURI?: string) {
		
		super(CarbonContentLeafType.SVG);
		
		this.setTypeIdentity("carbon-svg-element");
		
		// if (this.hasContainer()) this.childGeometry = this.getContainer().children.getChildMap(this);
		// else
		
		// TODO [1/26/19 @ 4:39 PM] - This should use the above code to get a child IdentityMap from the parent
		//  container.
		this.childGeometry = window.carbon.getMasterIDMap().getChildMap();
		
		if (svgURI) this.addGeometryFromSource(svgURI);
		
	}
	
	public addGeometryFromSource(svgURI: string): void {
		
		if ((/\.svg$/).test(svgURI)) {
			
			let xhr: XMLHttpRequest = new XMLHttpRequest();
			xhr.open("GET", svgURI);
			
			xhr.onloadend = (): void => {
				
				if ((xhr.responseXML !== null) && (xhr.responseXML.documentElement.tagName.toLowerCase() === "svg")) {
					
					let svg: Element = xhr.responseXML.documentElement;
					
					this.getElement().innerHTML = svg.innerHTML;
					
					let attributes: NamedNodeMap = svg.attributes;
					
					for (let key of attributes) this.getElement().setAttribute(key.name, key.value);
					
					for (let geometry of this.childGeometry.valueSet()) {
						
						this.getElement().appendChild(geometry.getElement());
						
					}
					
				} else throw new Error("Attempted to initialize a new CarbonSVGElement with a non-SVG file.");
				
			};
			
			xhr.send();
			
		} else throw new Error("Attempted to initialize a new CarbonSVGElement with a non-SVG file.");
		
	}
	
	public setSource(svgURI: string): void {
		
		this.reset();
		this.addGeometryFromSource(svgURI);
		
	}
	
	public addGeometry(...geometry: G[]): void {
		
		for (let element of geometry) {
			
			this.childGeometry.add(element);
			this.element.appendChild(element.getElement());
			
		}
		
		// if (geometry.hasContainer(this)) return geometry.getID();
		// else if (geometry.hasContainer()) throw new CarbonContainerDichotomyError();
		// else {
		//
		// 	this.getElement().appendChild(geometry.getElement());
		// 	geometry.setContainer(this);
		// 	return this.children.add(geometry);
		//
		// }
		
	}
	
	/**
	 * Removes all of the child components of this CarbonSVGElement.
	 */
	private reset(): void {
		
		let element: Element = this.getElement();
		if (element.hasChildNodes()) while (element.firstChild) element.removeChild(element.firstChild);
		for (let attribute in CarbonSVGElement.SVG_ATTRIBUTES) element.removeAttribute(attribute);
		
	}
	
}