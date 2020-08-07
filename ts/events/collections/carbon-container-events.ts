/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	10:56 PM -- July 21st, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonContainerable } from "../../carbon-containerable";
import { CarbonContainer } from "../../elements/containers/carbon-container";
import { CarbonBaseEvents } from "./carbon-base-events";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonContainerEvents<T extends CarbonContainerable> extends CarbonBaseEvents {
	
	public readonly CHILD_ADDED_TO_CONTAINER: AventNotifier<T>;
	
	public readonly CHILD_REMOVED_FROM_CONTAINER: AventNotifier<T>;
	
	public constructor(element: CarbonContainer<T>,
					   childAdded: AventNotifier<T> = new AventNotifier<T>(),
					   childRemoved: AventNotifier<T> = new AventNotifier<T>()) {
		
		super(element);
		
		this.CHILD_ADDED_TO_CONTAINER = childAdded;
		this.CHILD_REMOVED_FROM_CONTAINER = childRemoved;
		
		this.ELEMENT_ADDED_TO_PAGE.subscribe(() => {
			
			for (let child of element.getAllChildren()) child.getEventManager().ELEMENT_ADDED_TO_PAGE.notify();
			
		});
		
		this.ELEMENT_REMOVED_FROM_PAGE.subscribe(() => {
			
			for (let child of element.getAllChildren()) child.getEventManager().ELEMENT_REMOVED_FROM_PAGE.notify();
			
		});
		
	}
	
}