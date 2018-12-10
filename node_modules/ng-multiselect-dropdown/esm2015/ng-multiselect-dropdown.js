import { Component, HostListener, forwardRef, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef, Directive, ElementRef, Pipe, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ListItem {
    /**
     * @param {?} source
     */
    constructor(source) {
        if (typeof source === 'string') {
            this.id = this.text = source;
        }
        if (typeof source === 'object') {
            this.id = source.id;
            this.text = source.text;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

const DROPDOWN_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MultiSelectComponent),
    multi: true
};
const noop = () => { };
class MultiSelectComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this._data = [];
        this.selectedItems = [];
        this.isDropdownOpen = false;
        this._placeholder = 'Select';
        this.filter = new ListItem(this.data);
        this.defaultSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'text',
            enableCheckAll: true,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            allowSearchFilter: false,
            limitSelection: -1,
            clearSearchFilter: true,
            maxHeight: 197,
            itemsShowLimit: 999999999999,
            searchPlaceholderText: 'Search',
            closeDropDownOnSelection: false
        };
        this.disabled = false;
        this.onFilterChange = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onDeSelect = new EventEmitter();
        this.onSelectAll = new EventEmitter();
        this.onDeSelectAll = new EventEmitter();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        if (value) {
            this._placeholder = value;
        }
        else {
            this._placeholder = 'Select';
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set settings(value) {
        if (value) {
            this._settings = Object.assign(this.defaultSettings, value);
        }
        else {
            this._settings = Object.assign(this.defaultSettings);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set data(value) {
        if (!value) {
            this._data = [];
        }
        else {
            const /** @type {?} */ _items = value.filter((item) => {
                if (typeof item === 'string' || (typeof item === 'object' && item && item[this._settings.idField] && item[this._settings.textField])) {
                    return item;
                }
            });
            this._data = _items.map((item) => typeof item === 'string'
                ? new ListItem(item)
                : new ListItem({
                    id: item[this._settings.idField],
                    text: item[this._settings.textField]
                }));
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onFilterTextChange($event) {
        this.onFilterChange.emit($event);
    }
    /**
     * @param {?} $event
     * @param {?} item
     * @return {?}
     */
    onItemClick($event, item) {
        if (this.disabled) {
            return false;
        }
        const /** @type {?} */ found = this.isSelected(item);
        // tslint:disable-next-line:max-line-length
        const /** @type {?} */ allowAdd = this._settings.limitSelection === -1 || (this._settings.limitSelection > 0 && this.selectedItems.length < this._settings.limitSelection);
        if (!found) {
            if (allowAdd) {
                this.addSelected(item);
            }
        }
        else {
            this.removeSelected(item);
        }
        if (this._settings.singleSelection && this._settings.closeDropDownOnSelection) {
            this.closeDropdown();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== undefined && value !== null && value.length > 0) {
            if (this._settings.singleSelection) {
                try {
                    if (value.length >= 1) {
                        const /** @type {?} */ firstItem = value[0];
                        this.selectedItems = [
                            typeof firstItem === 'string'
                                ? new ListItem(firstItem)
                                : new ListItem({
                                    id: firstItem[this._settings.idField],
                                    text: firstItem[this._settings.textField]
                                })
                        ];
                    }
                }
                catch (/** @type {?} */ e) {
                    // console.error(e.body.msg);
                }
            }
            else {
                const /** @type {?} */ _data = value.map((item) => typeof item === 'string'
                    ? new ListItem(item)
                    : new ListItem({
                        id: item[this._settings.idField],
                        text: item[this._settings.textField]
                    }));
                if (this._settings.limitSelection > 0) {
                    this.selectedItems = _data.splice(0, this._settings.limitSelection);
                }
                else {
                    this.selectedItems = _data;
                }
            }
        }
        else {
            this.selectedItems = [];
        }
        this.onChangeCallback(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCallback = fn;
    }
    /**
     * @return {?}
     */
    onTouched() {
        this.closeDropdown();
        this.onTouchedCallback();
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    trackByFn(index, item) {
        return item.id;
    }
    /**
     * @param {?} clickedItem
     * @return {?}
     */
    isSelected(clickedItem) {
        let /** @type {?} */ found = false;
        this.selectedItems.forEach(item => {
            if (clickedItem.id === item.id) {
                found = true;
            }
        });
        return found;
    }
    /**
     * @return {?}
     */
    isLimitSelectionReached() {
        return this._settings.limitSelection === this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    isAllItemsSelected() {
        return this._data.length === this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    showButton() {
        if (!this._settings.singleSelection) {
            if (this._settings.limitSelection > 0) {
                return false;
            }
            // this._settings.enableCheckAll = this._settings.limitSelection === -1 ? true : false;
            return true; // !this._settings.singleSelection && this._settings.enableCheckAll && this._data.length > 0;
        }
        else {
            // should be disabled in single selection mode
            return false;
        }
    }
    /**
     * @return {?}
     */
    itemShowRemaining() {
        return this.selectedItems.length - Number(this._settings.itemsShowLimit);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addSelected(item) {
        if (this._settings.singleSelection) {
            this.selectedItems = [];
            this.selectedItems.push(item);
        }
        else {
            this.selectedItems.push(item);
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onSelect.emit(this.emittedValue(item));
    }
    /**
     * @param {?} itemSel
     * @return {?}
     */
    removeSelected(itemSel) {
        this.selectedItems.forEach(item => {
            if (itemSel.id === item.id) {
                this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
            }
        });
        this.onChangeCallback(this.emittedValue(this.selectedItems));
        this.onDeSelect.emit(this.emittedValue(itemSel));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    emittedValue(val) {
        const /** @type {?} */ selected = [];
        if (Array.isArray(val)) {
            val.map(item => {
                if (item.id === item.text) {
                    selected.push(item.text);
                }
                else {
                    selected.push(this.objectify(item));
                }
            });
        }
        else {
            if (val) {
                if (val.id === val.text) {
                    return val.text;
                }
                else {
                    return this.objectify(val);
                }
            }
        }
        return selected;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    objectify(val) {
        const /** @type {?} */ obj = {};
        obj[this._settings.idField] = val.id;
        obj[this._settings.textField] = val.text;
        return obj;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    toggleDropdown(evt) {
        evt.preventDefault();
        if (this.disabled && this._settings.singleSelection) {
            return;
        }
        this.isDropdownOpen = !this.isDropdownOpen;
    }
    /**
     * @return {?}
     */
    closeDropdown() {
        this.isDropdownOpen = false;
        // clear search text
        if (this._settings.clearSearchFilter) {
            this.filter.text = '';
        }
    }
    /**
     * @return {?}
     */
    toggleSelectAll() {
        if (this.disabled) {
            return false;
        }
        if (!this.isAllItemsSelected()) {
            this.selectedItems = this._data.slice();
            this.onSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        else {
            this.selectedItems = [];
            this.onDeSelectAll.emit(this.emittedValue(this.selectedItems));
        }
        this.onChangeCallback(this.emittedValue(this.selectedItems));
    }
}
MultiSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-multiselect-dropdown',
                template: `<div tabindex="=0" (blur)="onTouched()" class="multiselect-dropdown" (clickOutside)="closeDropdown()">
  <div [class.disabled]="disabled">
    <span tabindex="-1" class="dropdown-btn" (click)="toggleDropdown($event)">
      <span *ngIf="selectedItems.length == 0">{{_placeholder}}</span>
      <span class="selected-item" *ngFor="let item of selectedItems;trackBy: trackByFn;let k = index" [hidden]="k > _settings.itemsShowLimit-1">
        {{item.text}}
        <a style="padding-top:2px;padding-left:2px;color:white" (click)="onItemClick($event,item)">x</a>
      </span>
      <span style="float:right !important;padding-right:4px">
        <span style="padding-right: 6px;" *ngIf="itemShowRemaining()>0">+{{itemShowRemaining()}}</span>
        <span [ngClass]="isDropdownOpen ? 'dropdown-up' : 'dropdown-down'"></span>
      </span>
    </span>
  </div>
    <div class="dropdown-list" [hidden]="!isDropdownOpen">
         <ul *ngIf="_settings.enableCheckAll && !_settings.limitSelection">
            <li (click)="toggleSelectAll()" *ngIf="_data.length > 0 && !_settings.singleSelection" class="multiselect-item-checkbox" style="border-bottom: 1px solid #ccc;padding:10px">
                <input type="checkbox" [checked]="isAllItemsSelected()" [disabled]="disabled || isLimitSelectionReached()"/>
                <div>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>
            </li>
             <li class="filter-textbox" *ngIf="_settings.allowSearchFilter">
                <input type="text" [readOnly]="disabled" [placeholder]="_settings.searchPlaceholderText" [(ngModel)]="filter.text"  (ngModelChange)="onFilterTextChange($event)">
            </li>
        </ul>
         <ul [style.maxHeight] = "_settings.maxHeight+'px'">
            <li *ngFor="let item of _data | ng2ListFilter:filter; let i = index;" (click)="onItemClick($event,item)" class="multiselect-item-checkbox">
                <input type="checkbox" [checked]="isSelected(item)" [disabled]="disabled || (isLimitSelectionReached() && !isSelected(item))"/>
                <div>{{item.text}}</div>
            </li>
            <li *ngIf="_data.length == 0">
                <h5>No data available</h5>
            </li>
        </ul>
    </div>
  <div class="dropdown-list" [hidden]="!isDropdownOpen">
    <ul>
      <li (click)="toggleSelectAll()" *ngIf="showButton()" class="multiselect-item-checkbox" style="border-bottom: 1px solid #ccc;padding:10px">
        <input type="checkbox" [checked]="isAllItemsSelected()" [disabled]="disabled" />
        <div class='select-all-text'>{{!isAllItemsSelected() ? _settings.selectAllText : _settings.unSelectAllText}}</div>
      </li>
      <li class="filter-textbox" *ngIf="_settings.allowSearchFilter">
        <input type="text" [readOnly]="disabled" [placeholder]="_settings.searchPlaceholderText" [(ngModel)]="filter.text">
      </li>
    </ul>
    <ul [style.maxHeight]="_settings.maxHeight+'px'">
      <li *ngFor="let item of _data | ng2ListFilter:filter; let i = index;" (click)="onItemClick($event,item)" class="multiselect-item-checkbox">
        <input type="checkbox" [checked]="isSelected(item)" [disabled]="disabled || (isLimitSelectionReached() && !isSelected(item))"
        />
        <div>{{item.text}}</div>
      </li>
      <li *ngIf="_data.length == 0">
        <h5>No data available</h5>
      </li>
    </ul>
  </div>
</div>
`,
                styles: [`.multiselect-dropdown{position:relative;width:100%}.multiselect-dropdown .dropdown-btn{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown .dropdown-btn .selected-item{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left}.multiselect-dropdown .dropdown-btn .selected-item a{text-decoration:none}.multiselect-dropdown .dropdown-btn .selected-item:hover{-webkit-box-shadow:1px 1px #959595;box-shadow:1px 1px #959595}.multiselect-dropdown .dropdown-btn .dropdown-down{display:inline-block;top:10px;width:0;height:0;border-top:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .dropdown-btn .dropdown-up{display:inline-block;width:0;height:0;border-bottom:10px solid #adadad;border-left:10px solid transparent;border-right:10px solid transparent}.multiselect-dropdown .disabled>span{background-color:#eceeef}.dropdown-list{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;-webkit-box-shadow:0 1px 5px #959595;box-shadow:0 1px 5px #959595}.dropdown-list ul{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list li{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list .filter-textbox{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list .filter-textbox input{border:0;width:100%;padding:0 0 0 26px}.dropdown-list .filter-textbox input:focus{outline:0}.multiselect-item-checkbox input[type=checkbox]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox input[type=checkbox]:focus+div:before,.multiselect-item-checkbox input[type=checkbox]:hover+div:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox input[type=checkbox]:active+div:before{-webkit-transition-duration:0s;transition-duration:0s}.multiselect-item-checkbox input[type=checkbox]+div{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox input[type=checkbox]+div:before{-webkit-box-sizing:content-box;box-sizing:content-box;content:'';color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;-webkit-transition:all .4s ease;transition:all .4s ease}.multiselect-item-checkbox input[type=checkbox]+div:after{-webkit-box-sizing:content-box;box-sizing:content-box;content:'';position:absolute;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50%;transform-origin:50%;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;-o-border-image:none;border-image:none;-webkit-transform:rotate(-45deg) scale(0);transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox input[type=checkbox]:disabled+div:before{border-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:disabled:focus+div:before .multiselect-item-checkbox input[type=checkbox]:disabled:hover+div:before{background-color:inherit}.multiselect-item-checkbox input[type=checkbox]:disabled:checked+div:before{background-color:#ccc}.multiselect-item-checkbox input[type=checkbox]:checked+div:after{content:'';-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out;-webkit-transform:rotate(-45deg) scale(1);transform:rotate(-45deg) scale(1)}.multiselect-item-checkbox input[type=checkbox]:checked+div:before{-webkit-animation:.2s ease-in borderscale;animation:.2s ease-in borderscale;background:#337ab7}@-webkit-keyframes borderscale{50%{-webkit-box-shadow:0 0 0 2px #337ab7;box-shadow:0 0 0 2px #337ab7}}@keyframes borderscale{50%{-webkit-box-shadow:0 0 0 2px #337ab7;box-shadow:0 0 0 2px #337ab7}}`],
                providers: [DROPDOWN_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
MultiSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];
MultiSelectComponent.propDecorators = {
    "placeholder": [{ type: Input },],
    "disabled": [{ type: Input },],
    "settings": [{ type: Input },],
    "data": [{ type: Input },],
    "onFilterChange": [{ type: Output, args: ['onFilterChange',] },],
    "onSelect": [{ type: Output, args: ['onSelect',] },],
    "onDeSelect": [{ type: Output, args: ['onDeSelect',] },],
    "onSelectAll": [{ type: Output, args: ['onSelectAll',] },],
    "onDeSelectAll": [{ type: Output, args: ['onDeSelectAll',] },],
    "onTouched": [{ type: HostListener, args: ['blur',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ClickOutsideDirective {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new EventEmitter();
    }
    /**
     * @param {?} event
     * @param {?} targetElement
     * @return {?}
     */
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const /** @type {?} */ clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
ClickOutsideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[clickOutside]'
            },] },
];
/** @nocollapse */
ClickOutsideDirective.ctorParameters = () => [
    { type: ElementRef, },
];
ClickOutsideDirective.propDecorators = {
    "clickOutside": [{ type: Output },],
    "onClick": [{ type: HostListener, args: ['document:click', ['$event', '$event.target'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ListFilterPipe {
    /**
     * @param {?} items
     * @param {?} filter
     * @return {?}
     */
    transform(items, filter) {
        if (!items || !filter) {
            return items;
        }
        return items.filter((item) => this.applyFilter(item, filter));
    }
    /**
     * @param {?} item
     * @param {?} filter
     * @return {?}
     */
    applyFilter(item, filter) {
        return !(filter.text && item.text && item.text.toLowerCase().indexOf(filter.text.toLowerCase()) === -1);
    }
}
ListFilterPipe.decorators = [
    { type: Pipe, args: [{
                name: 'ng2ListFilter',
                pure: false
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgMultiSelectDropDownModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgMultiSelectDropDownModule
        };
    }
}
NgMultiSelectDropDownModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MultiSelectComponent, ClickOutsideDirective, ListFilterPipe],
                exports: [MultiSelectComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { MultiSelectComponent, NgMultiSelectDropDownModule, ClickOutsideDirective as ɵb, ListFilterPipe as ɵc, DROPDOWN_CONTROL_VALUE_ACCESSOR as ɵa };
//# sourceMappingURL=ng-multiselect-dropdown.js.map
