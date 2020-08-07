/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	9:37 PM -- July 21st, 2019.
 *	Project: CarbonUI Core
 */

import { AventNotifier } from "avents";
import { CarbonContainer } from "../../elements/containers/carbon-container";
import { CarbonContainerable } from "../../carbon-containerable";
import { CarbonMouseEvent } from "../types/carbon-mouse-event";
import { CarbonMouseEventNotifierFactory } from "../notifier-factories/carbon-mouse-event-notifier-factory";

/**
 * A collection of events that all CarbonAbstractContainerables expose.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonBaseEvents {
	
	/**
	 * A {@link AventNotifier} dispatched whenever the element is clicked (mouse down + mouse up).
	 */
	public readonly ELEMENT_MOUSE_CLICKED: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever the element is double clicked.
	 */
	public readonly ELEMENT_MOUSE_DOUBLE_CLICKED: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever the element is right clicked.
	 */
	public readonly ELEMENT_MOUSE_RIGHT_CLICKED: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever the mouse is depressed over the element.
	 */
	public readonly ELEMENT_MOUSE_DOWN: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever the mouse is released over the element.
	 */
	public readonly ELEMENT_MOUSE_UP: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever the mouse enters the element.
	 */
	public readonly ELEMENT_MOUSE_ENTER: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever the mouse leaves the element.
	 */
	public readonly ELEMENT_MOUSE_LEAVE: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever the mouse moves while hovering the element.
	 */
	public readonly ELEMENT_MOUSE_MOVE: AventNotifier<CarbonMouseEvent>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever this element is added to the page.
	 */
	public readonly ELEMENT_ADDED_TO_PAGE: AventNotifier<void>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever this element is removed from the page.
	 */
	public readonly ELEMENT_REMOVED_FROM_PAGE: AventNotifier<void>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever this element is added to a container, reporting the container to
	 * which it was added.
	 */
	public readonly ELEMENT_ADDED_TO_CONTAINER: AventNotifier<CarbonContainer>;
	
	/**
	 * A {@link AventNotifier} dispatched whenever this element is removed from a container, reporting the container
	 * to which is was removed.
	 */
	public readonly ELEMENT_REMOVED_FROM_CONTAINER: AventNotifier<CarbonContainer>;
	
	public constructor(element: CarbonContainerable) {
		
		console.trace("Initialized new CarbonBaseEvents class.");
		
		this.ELEMENT_MOUSE_CLICKED			= CarbonMouseEventNotifierFactory.MOUSE_CLICK.getNotifier(element);
		this.ELEMENT_MOUSE_DOUBLE_CLICKED	= CarbonMouseEventNotifierFactory.MOUSE_DOUBLE_CLICK.getNotifier(element);
		this.ELEMENT_MOUSE_RIGHT_CLICKED	= CarbonMouseEventNotifierFactory.MOUSE_RIGHT_CLICK.getNotifier(element);
		this.ELEMENT_MOUSE_DOWN				= CarbonMouseEventNotifierFactory.MOUSE_DOWN.getNotifier(element);
		this.ELEMENT_MOUSE_UP				= CarbonMouseEventNotifierFactory.MOUSE_UP.getNotifier(element);
		this.ELEMENT_MOUSE_ENTER			= CarbonMouseEventNotifierFactory.MOUSE_ENTER.getNotifier(element);
		this.ELEMENT_MOUSE_LEAVE			= CarbonMouseEventNotifierFactory.MOUSE_LEAVE.getNotifier(element);
		this.ELEMENT_MOUSE_MOVE				= CarbonMouseEventNotifierFactory.MOUSE_MOVE.getNotifier(element);
		
		this.ELEMENT_ADDED_TO_PAGE			= new AventNotifier<void>();
		this.ELEMENT_REMOVED_FROM_PAGE		= new AventNotifier<void>();
		this.ELEMENT_ADDED_TO_CONTAINER		= new AventNotifier<CarbonContainer>();
		this.ELEMENT_REMOVED_FROM_CONTAINER	= new AventNotifier<CarbonContainer>();
		
	}
	
}