/*
*	Created by Trevor Sears <trevorsears.main@gmail.com>.
*	10:53 PM -- June 11th, 2019.
*	Project: @carbonui/core
*/

/* tslint:disable:align */

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

import { CarbonApp } from "./carbon-app";

declare global {
	
	interface Window {
		
		carbon: CarbonApp;
		
	}

}

// Overarching 'meta' classes.
export { CarbonApp } from "./carbon-app";
export { CarbonConfig } from "./misc/carbon-config";
export { DefaultCarbonConfig } from "./misc/default-carbon-config";

// Module classes.
export { CarbonModule, EventType } from "./module/carbon-module";
export { CarbonModuleEvents } from "./module/carbon-module-events";
export { ModularObject } from "./module/modular-object";

// Top level containerable classes.
export { CarbonContainerable } from "./carbon-containerable";
export { CarbonAbstractContainerable } from "./elements/carbon-abstract-containerable";
export { CarbonAbstractElement } from "./elements/carbon-abstract-element";

// Top level elements.
export { CarbonWorld } from "./carbon-world";
export { CarbonPage } from "./carbon-page";
export { CarbonModularElement } from "./carbon-modular-element";

// Normal Elements
export { CarbonElement } from "./elements/carbon-element";

	// Content Elements
	export { CarbonTextElement } from "./elements/leaves/content-leaves/carbon-text-element";
	export { CarbonImageElement } from "./elements/leaves/content-leaves/carbon-image-element";
	export { CarbonAudioElement } from "./elements/leaves/content-leaves/carbon-audio-element";
	export { CarbonVideoElement } from "./elements/leaves/content-leaves/carbon-video-element";
	
	// Control Elements
	export { CarbonButtonLeaf } from "./elements/leaves/control-leaves/carbon-button-leaf";
	export { CarbonSliderLeaf } from "./elements/leaves/control-leaves/carbon-slider-leaf";
	export { CarbonCanvasLeaf } from "./elements/leaves/control-leaves/carbon-canvas-leaf";
	export { CarbonDrawingCanvasLeaf } from "./elements/leaves/control-leaves/carbon-drawing-canvas-leaf";
		
		// Selector Elements
		export { CarbonSelectorLeaf } from "./elements/leaves/control-leaves/selectors/carbon-selector-leaf";
		
// SVG Elements
export { CarbonSVGElement } from "./elements/leaves/content-leaves/carbon-svg-element";
export { CarbonSVGGeometry } from "./elements/leaves/content-leaves/svg-element-geometry/carbon-svg-geometry";
export { CarbonSVGCircle } from "./elements/leaves/content-leaves/svg-element-geometry/carbon-svg-circle";

	// Builders
	export { CarbonSVGGeometryBuilder } from "./elements/leaves/content-leaves/svg-element-geometry/builders/carbon-svg-geometry-builder";
	export { CarbonSVGCircleBuilder } from "./elements/leaves/content-leaves/svg-element-geometry/builders/carbon-svg-circle-builder";

// Containers
export { CarbonContainer } from "./elements/containers/carbon-container";

	// Single Containers
	export { CarbonSingleContainer } from "./elements/containers/carbon-single-container";
	export { CarbonAlignmentContainer } from "./elements/containers/single-containers/carbon-alignment-container";
	export { CarbonScrollContainer } from "./elements/containers/single-containers/carbon-scroll-container";
	
	// Multi Containers
	export { CarbonMultiContainer } from "./elements/containers/carbon-multi-container";
	export { CarbonFlowContainer } from "./elements/containers/multi-containers/carbon-flow-container";
	export { CarbonGridContainer } from "./elements/containers/multi-containers/carbon-grid-container";
	export { CarbonListContainer } from "./elements/containers/multi-containers/carbon-list-container";
	export { CarbonHorizontalContainer } from "./elements/containers/multi-containers/carbon-horizontal-container";
	export { CarbonVerticalContainer } from "./elements/containers/multi-containers/carbon-vertical-container";
	export { CarbonStackContainer } from "./elements/containers/multi-containers/carbon-stack-container";
	export { CarbonTableContainer } from "./elements/containers/multi-containers/carbon-table-container";
	
// Descriptors
export { CarbonAlignment } from "./descriptors/carbon-alignment";
export { CarbonDirection } from "./descriptors/carbon-direction";
export { CarbonNamedColor } from "./descriptors/colors/carbon-named-color";
export { CarbonFlexWrappingRule } from "./descriptors/carbon-flex-wrapping-rule";

// Types

	// Element Types
	export { CarbonElementType } from "./types/element-types/carbon-element-type";
	export { CarbonContainerType } from "./types/element-types/carbon-container-type";
	export { CarbonContentLeafType } from "./types/element-types/content-leaves/carbon-content-leaf-type";
	export { CarbonTextElementType } from "./types/element-types/content-leaves/carbon-text-element-type";
	export { CarbonSVGGeometryElementType } from "./types/element-types/content-leaves/carbon-svg-geometry-element-type";
	export { CarbonControlLeafType } from "./types/element-types/control-leaves/carbon-control-leaf-type";
	
	// Input Types
	export { CarbonInputType } from "./types/input-types/carbon-input-type";
	export { CarbonTextualInputType } from "./types/input-types/carbon-textual-input-type";
	
// Element Events (Event Managers)
export { CarbonBaseEvents } from "./events/collections/carbon-base-events";
export { CarbonContainerEvents } from "./events/collections/carbon-container-events";
export { CarbonTextElementEvents } from "./events/collections/carbon-text-element-events";
export { CarbonEditableTextElementEvents } from "./events/collections/carbon-editable-text-element-events";
export { CarbonMaskedEditableTextElementEvents } from "./events/collections/carbon-masked-editable-text-element-events";
export { CarbonNumericallyValuedElementEvents } from "./events/collections/carbon-numerically-valued-element-events";

export { CarbonOverlay } from "./overlays/carbon-overlay";
export { CarbonMouseEvent } from "./events/types/carbon-mouse-event";
export { CarbonKeyboardEvent } from "./events/types/carbon-keyboard-event";

export { CurriedParameter } from "./misc/curried-parameter";