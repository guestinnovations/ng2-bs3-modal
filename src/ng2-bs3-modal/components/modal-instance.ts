import { ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';


export class Modal {
    options
    body
    element
    isShown
    height
    width
    constructor(element, options) {
      this.options = options;
      this.body = document.body;
      this.element = element;
      this.isShown = null;
      this.height = options.height;
      this.width = options.width;
    };
    center(): void {
      this.element.style.left = window.innerWidth / 2 - this.element.getBoundingClientRect().width / 2;
    }
    toggle(target): void {
      return this.isShown ? this.hide() : this.show(target);
    }
    show(target?): void {
      (<HTMLElement>document.querySelector('.app-container')).style.overflow = 'hidden';
      (<HTMLElement>document.body).style.overflow = 'hidden';
      var self = this;
      if (this.isShown) return;
      this.isShown = true;
      this.element.style.display = 'block';
      var div = document.createElement('div');
      div.className = 'modal-backdrop in';
      div.id = 'modal-backdrop';
      let onclick = function(e: any) { 
        e = window.event || e; 
        if(this === e.target) {
          self.hide();
        }
      };
      div.onclick = onclick;
      this.element.addEventListener('click', onclick);
      document.body.appendChild(div);
      this.center();
  
    }
    hide(): void {
      (<HTMLElement>document.querySelector('.app-container')).style.overflow = 'auto';
      (<HTMLElement>document.body).style.overflow = 'auto';
      var self = this;
      if (!this.isShown) return;
      this.isShown = false;
      this.element.style.display = 'none';
      let el = document.querySelector(".modal-backdrop");
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
}

export class ModalInstance {

    private suffix: string = '.ng2-bs3-modal';
    private shownEventName: string = 'shown.bs.modal' + this.suffix;
    private hiddenEventName: string = 'hidden.bs.modal' + this.suffix;
    private $modal: any;

    shown: Observable<void>;
    hidden: Observable<ModalResult>;
    result: any;
    visible: boolean = false;

    constructor(private element: ElementRef, private modal?: Modal) {
        this.init();
    }

    open(): Promise<any> {
        return this.show();
    }

    close(): Promise<any> {
        this.result = ModalResult.Close;
        return this.hide();
    }

    dismiss(): Promise<any> {
        this.result = ModalResult.Dismiss;
        return this.hide();
    }

    destroy(): Promise<any> {
        return this.hide().then(() => {
            // ils nod
        });
    }

    private show(): Promise<any> {
        let promise = toPromise(this.shown);
        this.resetData();
        this.modal.show();
        // this.$modal.modal();
        // return promise;
        return Promise.resolve();
    }

    private hide(): Promise<ModalResult> {
        if (this.modal.isShown) {
            let promise = toPromise(this.hidden);
            // this.$modal.modal('hide');
            this.modal.hide();
            return promise;
        }
        // if (this.$modal && this.visible) {
        // }
        return Promise.resolve(this.result);
    }

    private init() {
        this.$modal = this.element.nativeElement;
        this.modal = new Modal(this.$modal, {});
        // this.$modal.appendTo('body');

        this.shown = fromEvent(this.$modal, this.shownEventName).pipe(
            map(() => {
                this.visible = true;
            }));

        this.hidden = fromEvent(this.$modal, this.hiddenEventName).pipe(
            map(() => {
                let result = (!this.result || this.result === ModalResult.None)
                    ? ModalResult.Dismiss : this.result;

                this.result = ModalResult.None;
                this.visible = false;

                return result;
            }));
    }

    private resetData() {
        // this.$modal.removeData();
        // this.$modal.data('backdrop', booleanOrValue(this.$modal.attr('data-backdrop')));
        // this.$modal.data('keyboard', booleanOrValue(this.$modal.attr('data-keyboard')));
    }
}

function booleanOrValue(value) {
    if (value === 'true')
        return true;
    else if (value === 'false')
        return false;
    return value;
}

function toPromise<T>(observable: Observable<T>): Promise<T> {
    return new Promise((resolve, reject) => {
        observable.subscribe(next => {
            resolve(next);
        });
    });
}

export enum ModalResult {
    None,
    Close,
    Dismiss
}
