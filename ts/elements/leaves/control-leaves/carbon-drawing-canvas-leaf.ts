/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	3:44 PM -- March 28th, 2019.
 *	Project: @carbonui/core
 */

import { CarbonCanvasLeaf } from "./carbon-canvas-leaf";
import { CarbonColor } from "../../../descriptors/colors/carbon-color";
import { CarbonNamedColor } from "../../../descriptors/colors/carbon-named-color";
import { CarbonMouseEvent } from "../../../events/types/carbon-mouse-event";

/**
 *
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class CarbonDrawingCanvasLeaf extends CarbonCanvasLeaf {
	
	private brushDown: boolean = false;
	
	private previousX: number | undefined;
	
	private previousY: number | undefined;
	
	public constructor(strokeColor: CarbonColor = CarbonNamedColor.BLACK, strokeSize: number = 100) {
	
		super();
		
		this.setStrokeColor(strokeColor);
		this.setStrokeSize(strokeSize);
		this.context.lineJoin = "round";
		this.context.lineCap = "round";
		
		this.getEventManager().ELEMENT_MOUSE_DOWN.subscribe((): any => this.brushDown = true);
		this.getEventManager().ELEMENT_MOUSE_UP.subscribe((): any => this.brushDown = false);
		this.getEventManager().ELEMENT_MOUSE_LEAVE.subscribe((): any => this.brushDown = false);
		this.getEventManager().ELEMENT_MOUSE_MOVE.subscribe((notification: CarbonMouseEvent): void => {
			
			if ((!this.brushDown) || (this.previousX === undefined) || (this.previousY === undefined)) {
				
				this.previousX = notification.getPageX() - this.getElement().getBoundingClientRect().left;
				this.previousY = notification.getPageY() - this.getElement().getBoundingClientRect().top;
				
			} else if (this.brushDown) {
				
				this.context.beginPath();
				this.context.moveTo(this.previousX, this.previousY);
				
				this.previousX = notification.getPageX() - this.getElement().getBoundingClientRect().left;
				this.previousY = notification.getPageY() - this.getElement().getBoundingClientRect().top;
				
				this.context.lineTo(this.previousX, this.previousY);
				this.context.stroke();
				this.context.closePath();
				
			}
		
		});
	
	}
	
	public setStrokeColor(strokeColor: CarbonColor): void {
		
		this.context.strokeStyle = strokeColor.getCSSString();
		
	}
	
	public setStrokeSize(strokeSize: number): void {
		
		this.context.lineWidth = strokeSize;
		
	}
	
	public clear(): void {
	
		this.context.clearRect(0, 0, this.getElement().width, this.getElement().height);
		
	}
	
}