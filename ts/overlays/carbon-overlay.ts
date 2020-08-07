/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:19 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

// import { AventSubscription } from "avents";
import { CarbonContainerType } from "../types/element-types/carbon-container-type";
import { CarbonOverlayState } from "./carbon-overlay-state";
import { CarbonDirection } from "../descriptors/carbon-direction";
import { CarbonAlignment } from "../descriptors/carbon-alignment";
import { CarbonContainerable } from "../carbon-containerable";
import { CarbonAlignmentContainer } from "../elements/containers/single-containers/carbon-alignment-container";
import { CarbonElement } from "../elements/carbon-element";
import { CarbonBaseEvents } from "../events/collections/carbon-base-events";

// type TransitionInfo = {
//
// 	type: string;
// 	unit: string;
// 	beginValue: number;
// 	endValue: number;
//
// };

/**
 * An class representing any UI element that does not interrupt CarbonPage flow ('position: fixed' for those that
 * understand CSS positioning).
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonOverlay<C extends CarbonContainerable = CarbonElement> {
	
	private alignment: CarbonAlignment;
	
	protected container: CarbonAlignmentContainer<C>;
	
	// private transitionDirection: CarbonDirection;
	
	protected state: CarbonOverlayState;
	
	// private isMouseHovering: boolean = false;
	
	protected readonly events: CarbonBaseEvents;
	
	public constructor(alignment: CarbonAlignment,
					   transitionDirection: CarbonDirection = CarbonDirection.TO_BOTTOM,
					   containerType: CarbonContainerType = CarbonContainerType.DIV) {
		
		this.container = new CarbonAlignmentContainer(CarbonAlignment.CENTER, containerType);
		this.state = CarbonOverlayState.HIDDEN;
		
		this.alignment = alignment;
		// this.transitionDirection = transitionDirection;
		
		this.setAlignment(alignment, transitionDirection);
		
		this.container.setTypeIdentity("carbon-overlay");
		// this.container.getEventManager().ELEMENT_MOUSE_ENTER.subscribe(() => { this.isMouseHovering = true; });
		// this.container.getEventManager().ELEMENT_MOUSE_LEAVE.subscribe(() => { this.isMouseHovering = false; });
		
		this.events = new CarbonBaseEvents(this.container);
		
	}
	
	// private static getDefaultTransitionDirection(alignment: CarbonAlignment): CarbonDirection {
	//
	// 	switch (alignment) {
	//
	// 		case CarbonAlignment.UPPER_LEFT:	return CarbonDirection.TO_TOP;
	//
	// 		case CarbonAlignment.TOP:			return CarbonDirection.TO_TOP;
	//
	// 		case CarbonAlignment.UPPER_RIGHT:	return CarbonDirection.TO_TOP;
	//
	// 		case CarbonAlignment.LEFT:			return CarbonDirection.TO_LEFT;
	//
	// 		case CarbonAlignment.CENTER:		return CarbonDirection.TO_BOTTOM;
	//
	// 		case CarbonAlignment.RIGHT:			return CarbonDirection.TO_RIGHT;
	//
	// 		case CarbonAlignment.LOWER_LEFT:	return CarbonDirection.TO_BOTTOM;
	//
	// 		case CarbonAlignment.BOTTOM:		return CarbonDirection.TO_BOTTOM;
	//
	// 		case CarbonAlignment.LOWER_RIGHT:	return CarbonDirection.TO_BOTTOM;
	//
	// 	}
	//
	// }
	
	private static getOverlayAlignmentClass(alignment: CarbonAlignment): string {
		
		return ("carbon-overlay" + alignment.toString().substring(3));
		
	}
	
	// private static getTransitionInfo(isCurrentlyShown: boolean,
	// 								 alignment: CarbonAlignment,
	// 								 transitionDirection: CarbonDirection = CarbonOverlay.getDefaultTransitionDirection(alignment)): TransitionInfo {
	//
	// 	let type: string = "translateY";
	// 	let unit: string = "%";
	// 	let beginValue: number;
	// 	let endValue: number;
	//
	// 	let isNormalTransition: boolean = (transitionDirection === CarbonOverlay.getDefaultTransitionDirection(alignment));
	//
	// 	if (isNormalTransition) {
	//
	// 		if (alignment === CarbonAlignment.CENTER) {
	//
	// 			unit = "vh";
	// 			beginValue = (isCurrentlyShown ? 0 : 100);
	// 			endValue = (isCurrentlyShown ? 100 : 0);
	//
	// 		} else if ((alignment === CarbonAlignment.LEFT) || alignment === CarbonAlignment.RIGHT) {
	//
	// 			type = "translateX";
	//
	// 			if (alignment === CarbonAlignment.LEFT) {
	//
	// 				beginValue = (isCurrentlyShown ? 0 : -100);
	// 				endValue = (isCurrentlyShown ? -100 : 0);
	//
	// 			} else {
	//
	// 				beginValue = (isCurrentlyShown ? 0 : 100);
	// 				endValue = (isCurrentlyShown ? 100 : 0);
	//
	// 			}
	//
	// 		} else if ((alignment === CarbonAlignment.TOP) || (alignment === CarbonAlignment.UPPER_LEFT) || (alignment === CarbonAlignment.UPPER_RIGHT)) {
	//
	// 			beginValue = (isCurrentlyShown ? 0 : -100);
	// 			endValue = (isCurrentlyShown ? -100 : 0);
	//
	// 		} else {
	//
	// 			beginValue = (isCurrentlyShown ? 0 : 100);
	// 			endValue = (isCurrentlyShown ? 100 : 0);
	//
	// 		}
	//
	// 	} else {
	//
	// 		if (transitionDirection === CarbonDirection.TO_TOP) {
	//
	// 			unit = "vh";
	// 			beginValue = (isCurrentlyShown ? 0 : -100);
	// 			endValue = (isCurrentlyShown ? -100 : 0);
	//
	// 		} else if (transitionDirection === CarbonDirection.TO_BOTTOM) {
	//
	// 			unit = "vh";
	// 			beginValue = (isCurrentlyShown ? 0 : 100);
	// 			endValue = (isCurrentlyShown ? 100 : 0);
	//
	// 		} else if (transitionDirection === CarbonDirection.TO_LEFT) {
	//
	// 			type = "translateX";
	// 			unit = "vw";
	// 			beginValue = (isCurrentlyShown ? 0 : -100);
	// 			endValue = (isCurrentlyShown ? -100 : 0);
	//
	// 		} else {
	//
	// 			type = "translateX";
	// 			unit = "vw";
	// 			beginValue = (isCurrentlyShown ? 0 : 100);
	// 			endValue = (isCurrentlyShown ? 100 : 0);
	//
	// 		}
	//
	// 	}
	//
	// 	return {
	//
	// 		type,
	// 		unit,
	// 		beginValue,
	// 		endValue
	//
	// 	};
	//
	// }
	
	public setAlignment(alignment: CarbonAlignment, transitionDirection?: CarbonDirection): void {
		
		this.container.removeClasses(CarbonOverlay.getOverlayAlignmentClass(this.alignment));
		
		this.alignment = alignment;
		// if (transitionDirection !== undefined) this.transitionDirection = transitionDirection;
		
		this.container.addClasses(CarbonOverlay.getOverlayAlignmentClass(this.alignment));
		
	}
	
	public setChild(child: C): void {
		
		this.container.setChild(child);
		
	}
	
	public async show(): Promise<void> {
		
		// TODO [12/13/19 @ 4:37 PM] - Loop the overlay system into the module system to allow for animated overlays.
		
		// if (
		// 	(this.state !== CarbonOverlayState.VISIBLE) &&
		// 	(this.state !== CarbonOverlayState.DESTROYED) &&
		// 	(this.state !== CarbonOverlayState.TRANSITIONING)) {
		//
		// 	let info: TransitionInfo = CarbonOverlay.getTransitionInfo(false, this.alignment, this.transitionDirection);
		//
		// 	let transition: CarbonTransition = new CarbonTransition(
		// 		2000,
		// 		CarbonNamedTransitionFunction.EASE_IN_OUT,
		// 		(progress: number): void => {
		//
		// 			this.container.getElement().style.transform = info.type + "(" + progress + info.unit + ")";
		//
		// 		},
		// 		[ this.container ],
		// 		info.beginValue,
		// 		info.endValue
		// 	);
		//
		// 	transition.addPreAction(() => {
		//
		// 		this.state = CarbonOverlayState.TRANSITIONING;
		//
		// 		this.container.getElement().style.transform = (info.type + "(" + info.beginValue + info.unit + ")");
		//
		// 		document.body.appendChild(this.container.getElement());
		//
		// 		this.getEventManager().ELEMENT_ADDED_TO_PAGE.notify();
		//
		// 	});
		//
		// 	transition.addPostAction(() => {
		//
		// 		this.container.getElement().style.transform = "";
		// 		this.state = CarbonOverlayState.VISIBLE;
		//
		// 	});
		//
		// 	await transition.play();
		//
		// }
		
	}
	
	public async hide(): Promise<void> {
		
		// if (
		// 	(this.state !== CarbonOverlayState.HIDDEN) &&
		// 	(this.state !== CarbonOverlayState.DESTROYED) &&
		// 	(this.state !== CarbonOverlayState.TRANSITIONING)) {
		//
		// 	let info: TransitionInfo = CarbonOverlay.getTransitionInfo(true, this.alignment, this.transitionDirection);
		//
		// 	let transition: CarbonTransition = new CarbonTransition(
		// 		2000,
		// 		CarbonNamedTransitionFunction.EASE_IN_OUT,
		// 		(progress: number): void => {
		//
		// 			this.container.getElement().style.transform = info.type + "(" + progress + info.unit + ")";
		//
		// 		},
		// 		[ this.container ],
		// 		info.beginValue,
		// 		info.endValue
		// 	);
		//
		// 	transition.addPreAction(() => {
		//
		// 		this.state = CarbonOverlayState.TRANSITIONING;
		//
		// 		this.container.getElement().style.transform = (info.type + "(" + info.beginValue + info.unit + ")");
		//
		// 		document.body.appendChild(this.container.getElement());
		//
		// 	});
		//
		// 	transition.addPostAction(() => {
		//
		// 		this.container.getElement().style.transform = "";
		// 		document.body.removeChild(this.container.getElement());
		// 		this.state = CarbonOverlayState.HIDDEN;
		//
		// 	});
		//
		// 	await transition.play();
		//
		// }
		
	}
	
	public async scheduleHide(milliseconds: number, hoverTimeout?: number): Promise<void> {
		
		return new Promise<void>((resolve: () => void): void => {
			
			// hoverTimeout = (hoverTimeout !== undefined ? hoverTimeout : (milliseconds / 2));
			// let leaveSubscription: AventSubscription<CarbonMouseEvent>;
			// let enterSubscription: AventSubscription<CarbonMouseEvent>;
			//
			// setTimeout(() => {
			//
			// 	if (this.isMouseHovering) {
			//
			// 		let timeoutID: number;
			//
			// 		leaveSubscription = this.container.getEventManager().ELEMENT_MOUSE_LEAVE.subscribe(() => {
			//
			// 			if (timeoutID !== undefined) clearTimeout(timeoutID);
			//
			// 			timeoutID = window.setTimeout(() => {
			//
			// 				leaveSubscription.unsubscribe();
			// 				enterSubscription.unsubscribe();
			//
			// 				this.hide().then(() => resolve());
			//
			// 			}, hoverTimeout);
			//
			// 		});
			//
			// 		enterSubscription = this.container.getEventManager().ELEMENT_MOUSE_ENTER.subscribe(() => {
			//
			// 			if (timeoutID !== undefined) clearTimeout(timeoutID);
			//
			// 		});
			//
			// 	} else this.hide().then(() => resolve());
			//
			// }, milliseconds);
			
		});
		
	}
	
	public async destroy(): Promise<void> {
		
		if (this.state !== CarbonOverlayState.DESTROYED) {
			
			this.state = CarbonOverlayState.DESTROYED;
			this.container.orphan();
			
		}
		
	}
	
	public getEventManager(): CarbonBaseEvents {
	
		return this.events;
	
	}
	
}