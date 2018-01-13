import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { ItemService } from './item/item.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        ItemService
    ]
})
export class ServicesModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'ServiceModule');
	}
}