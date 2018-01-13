import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from '../core/module-import-guard';

import { ItemsComponent } from "./items/items.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        NativeScriptModule
    ],
    exports: [
        ItemsComponent,
        ItemDetailComponent
    ],
    declarations: [
        ItemsComponent,
        ItemDetailComponent
    ]
})
export class PagesModule {
	constructor( @Optional() @SkipSelf() parentModule: CommonModule) {
		throwIfAlreadyLoaded(parentModule, 'PagesModule');
	}
}