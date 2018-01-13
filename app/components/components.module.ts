import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

// import { ItemComponent } from './item/item.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        
    ],
    declarations: [

    ]
})
export class ComponentsModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ComponentsModule');
	}
}