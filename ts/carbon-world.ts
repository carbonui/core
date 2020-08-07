/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:20 AM -- November 05th, 2018.
 *	Project: @carbonui/core
 */

import { CarbonPage } from "./carbon-page";
import { CarbonFlowContainer } from "./elements/containers/multi-containers/carbon-flow-container";
import { CarbonDirection } from "./descriptors/carbon-direction";
import { CarbonAlignment } from "./descriptors/carbon-alignment";
import { CarbonFlexWrappingRule } from "./descriptors/carbon-flex-wrapping-rule";
import { AventNotifier } from "avents";

/**
 * The CarbonWorld, in which all Pages exists. Represents the entirety of normal page flow.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonWorld extends CarbonFlowContainer<CarbonPage> {
	
	/**
	 * The current page.
	 */
	private page: CarbonPage | undefined;
	
	public constructor() {
		
		super(CarbonDirection.TO_BOTTOM, CarbonAlignment.CENTER, CarbonFlexWrappingRule.NO_WRAP);
		this.setTypeIdentity("carbon-world");
		this.setID(this.getTypeIdentity());
		
		document.body.appendChild(this.getElement());
		
	}
	
	/**
	 * Sets the current page of the CarbonWorld.
	 *
	 * @param {CarbonPage} page The page to set the CarbonWorld to.
	 */
	public setPage(page: CarbonPage): void {
		
		if (this.page === page) return;
		else {
			
			// Set the CarbonWorld page to the new page.
			this.page = page;
			
			// Remove the contents of the CarbonWorld.
			this.orphanAllChildren();
			
			// Adopt the page as a new child.
			this.adoptChild(page);
			
			(page.getEventManager().ELEMENT_ADDED_TO_PAGE as AventNotifier<void>).notify();
			
		}
		
	}
	
	// TODO [2/4/19 @ 2:33 AM] - Should the below functions return Promises or transitions?
	// TODO [2/4/19 @ 2:33 AM] - Remember to remove the elements after the below transitions finish.
	
	// public goToPageLeft(page: CarbonPage): Promise<void> {
	//
	// 	return new Promise<void>((resolve: () => void, reject: (error: Error) => void): void => {
	//
	// 		if (this.page === page) {
	//
	// 			reject(new Error("ERR | Attempted to change the page of the CarbonWorld to the page to which it was " +
	// 				"already set."));
	//
	// 		} else if (this.page === undefined) {
	//
	// 			this.setPage(page);
	//
	// 			// TODO [7/26/19 @ 9:02 PM] - In the future this should still cause an animated transition to the given page.
	//
	// 		} else {
	//
	// 			let oldPage: CarbonPage = this.page;
	//
	// 			this.page = page;
	//
	// 			let transition: CarbonTransition = new CarbonTransition(
	// 				2000,
	// 				CarbonNamedTransitionFunction.EASE_IN_OUT,
	// 				(progress: number): void => {
	//
	// 					oldPage.getElement().style.transform = "translateX(" + progress + "vw)";
	// 					(this.page as CarbonPage).getElement().style.transform = "translateX(" + progress + "vw)";
	//
	// 				},
	// 				[oldPage, this.page],
	// 				0,
	// 				100
	// 			);
	//
	// 			transition.addPreAction(() => {
	//
	// 				this.setDirection(CarbonDirection.TO_LEFT);
	// 				this.setAlignment(CarbonAlignment.RIGHT);
	//
	// 				this.addChild(page);
	//
	// 				page.getEventManager().ELEMENT_ADDED_TO_PAGE.notify();
	//
	// 			});
	//
	// 			transition.addPostAction(() => {
	//
	// 				this.removeChild(oldPage.getID());
	// 				(this.page as CarbonPage).getElement().style.transform = "";
	// 				resolve();
	//
	// 			});
	//
	// 			transition.play();
	//
	// 		}
	//
	// 	});
	//
	// }
	//
	// public goToPageRight(page: CarbonPage): Promise<void> {
	//
	// 	return new Promise<void>((resolve: () => void, reject: (error: Error) => void): void => {
	//
	// 		if (this.page === page) {
	//
	// 			reject(new Error("ERR | Attempted to change the page of the CarbonWorld to the page to which it was " +
	// 				"already set."));
	//
	// 		} else if (this.page === undefined) {
	//
	// 			this.setPage(page);
	//
	// 		} else {
	//
	// 			let oldPage: CarbonPage = this.page;
	//
	// 			this.page = page;
	//
	// 			let transition: CarbonTransition = new CarbonTransition(
	// 				2000,
	// 				CarbonNamedTransitionFunction.EASE_IN_OUT,
	// 				(progress: number): void => {
	//
	// 					oldPage.getElement().style.transform = "translateX(" + progress + "vw)";
	// 					(this.page as CarbonPage).getElement().style.transform = "translateX(" + progress + "vw)";
	//
	// 				},
	// 				[oldPage, this.page],
	// 				0,
	// 				-100
	// 			);
	//
	// 			transition.addPreAction(() => {
	//
	// 				this.setDirection(CarbonDirection.TO_RIGHT);
	// 				this.setAlignment(CarbonAlignment.LEFT);
	//
	// 				this.addChild(page);
	//
	// 				page.getEventManager().ELEMENT_ADDED_TO_PAGE.notify();
	//
	// 			});
	//
	// 			transition.addPostAction(() => {
	//
	// 				this.removeChild(oldPage.getID());
	// 				(this.page as CarbonPage).getElement().style.transform = "translateX(0vw)";
	// 				resolve();
	//
	// 			});
	//
	// 			transition.play();
	//
	// 		}
	//
	// 	});
	//
	// }
	//
	// public goToPageAbove(page: CarbonPage): Promise<void> {
	//
	// 	return new Promise<void>((resolve: () => void, reject: (error: Error) => void): void => {
	//
	// 		if (this.page === page) {
	//
	// 			reject(new Error("ERR | Attempted to change the page of the CarbonWorld to the page to which it was " +
	// 				"already set."));
	//
	// 		} else if (this.page === undefined) {
	//
	// 			this.setPage(page);
	//
	// 		} else {
	//
	// 			let oldPage: CarbonPage = this.page;
	//
	// 			this.page = page;
	//
	// 			let transition: CarbonTransition = new CarbonTransition(
	// 				2000,
	// 				CarbonNamedTransitionFunction.EASE_IN_OUT,
	// 				(progress: number): void => {
	//
	// 					oldPage.getElement().style.transform = "translateY(" + progress + "vh)";
	// 					(this.page as CarbonPage).getElement().style.transform = "translateY(" + progress + "vh)";
	//
	// 				},
	// 				[oldPage, this.page],
	// 				-100,
	// 				0
	// 			);
	//
	// 			transition.addPreAction(() => {
	//
	// 				this.setDirection(CarbonDirection.TO_TOP);
	// 				this.setAlignment(CarbonAlignment.BOTTOM);
	//
	// 				this.addChild(page);
	//
	// 				page.getEventManager().ELEMENT_ADDED_TO_PAGE.notify();
	//
	// 			});
	//
	// 			transition.addPostAction(() => {
	//
	// 				this.removeChild(oldPage.getID());
	// 				(this.page as CarbonPage).getElement().style.transform = "translateX(0vw)";
	// 				resolve();
	//
	// 			});
	//
	// 			transition.play();
	//
	// 		}
	//
	// 	});
	//
	// }
	//
	// public goToPageBelow(page: CarbonPage): Promise<void> {
	//
	// 	return new Promise<void>((resolve: () => void, reject: (error: Error) => void): void => {
	//
	// 		if (this.page === page) {
	//
	// 			reject(new Error("ERR | Attempted to change the page of the CarbonWorld to the page to which it was " +
	// 				"already set."));
	//
	// 		} else if (this.page === undefined) {
	//
	// 			this.setPage(page);
	//
	// 		} else {
	//
	// 			let oldPage: CarbonPage = this.page;
	//
	// 			this.page = page;
	//
	// 			let transition: CarbonTransition = new CarbonTransition(
	// 				2000,
	// 				CarbonNamedTransitionFunction.EASE_IN_OUT,
	// 				(progress: number): void => {
	//
	// 					oldPage.getElement().style.transform = "translateY(" + progress + "vh)";
	// 					(this.page as CarbonPage).getElement().style.transform = "translateY(" + progress + "vh)";
	//
	// 				},
	// 				[oldPage, this.page],
	// 				0,
	// 				-100
	// 			);
	//
	// 			transition.addPreAction(() => {
	//
	// 				this.setDirection(CarbonDirection.TO_BOTTOM);
	// 				this.setAlignment(CarbonAlignment.TOP);
	//
	// 				this.addChild(page);
	//
	// 				page.getEventManager().ELEMENT_ADDED_TO_PAGE.notify();
	//
	// 			});
	//
	// 			transition.addPostAction(() => {
	//
	// 				this.removeChild(oldPage.getID());
	// 				(this.page as CarbonPage).getElement().style.transform = "translateX(0vw)";
	// 				resolve();
	//
	// 			});
	//
	// 			transition.play();
	//
	// 		}
	//
	// 	});
	//
	// }
	
}