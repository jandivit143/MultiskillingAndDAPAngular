// ngOnInit, ngOnDestroy
// import { Component, OnDestroy, OnInit } from '@angular/core';

// @Component({
//     selector: 'app-hooks-child',
//     template: ``
// })

// export class HooksChildComponent implements OnInit, OnDestroy {
//     count:number = 0;
//     intervalId:any;
//     constructor() {
//         // Preferrably for Dependency Injection
//         // or basic initialization
//         console.log('HooksChild Constructor called!');
//         this.intervalId = setInterval(() => {
//             this.count++;
//             console.log('Counter is: ' + this.count);
//         },1000);
//     }
    
//     ngOnInit() {
//         // Handle the initialization logic- it is called only once
//         console.log('HooksChild ngOnInit called!');
//     }

//     ngOnDestroy(): void {
//         console.log('HooksChild ngOnDestroy called!');
//         clearInterval(this.intervalId);
//     }
// }

// ngOnChanges and ngDoCheck
// import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
// import { Student } from '../../student';

// @Component({
//     selector: 'app-hooks-child',
//     template: `
//         <h1 class="text-primary">Child Hook Component!</h1>
//         <h4>{{parentData}}!</h4>
//     `
// })

// // export class HooksChildComponent implements OnInit, OnDestroy {
// export class HooksChildComponent implements OnInit, OnChanges, DoCheck {
//     @Input()
//     parentData:string;
//     @Input()
//     student:Student;
//     count:number = 0;
//     intervalId:any;
//     constructor() {
//         this.parentData = '';
//         this.student = {} as Student;
//         // Preferrably for Dependency Injection
//         // or basic initialization
//         console.log('HooksChild Constructor called!');
//         // uncomment the below setInterval code if you uncommented the ngOnDestroy code
//         // this.intervalId = setInterval(() => {
//         //     this.count++;
//         //     console.log('Counter is: ' + this.count);
//         // },1000);
//     }
    
//     ngOnInit() {
//         // Handle the initialization logic- it is called only once
//         console.log('HooksChild ngOnInit called!');
//     }

//     ngOnChanges(changes: SimpleChanges): void {
//         console.log('HooksChild ngOnChanges called! ' + JSON.stringify(changes));
//     }
    
//     ngDoCheck(): void {
//         console.log('HooksChild ngDoCheck called! ' + JSON.stringify(this.student));
        
//     }

//     // ngOnDestroy(): void {
//     //     console.log('HooksChild ngOnDestroy called!');
//     //     clearInterval(this.intervalId);
//     // }

// }

// ngAfterContentInit and ngAfterContentChecked
/**
 * Content - External content projected into the component using content projection.
 *          Way to pass html content from parent component to child component.
 */
// import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
// import { Student } from '../../student';

// @Component({
//     selector: 'app-hooks-child',
//     template: `
//         <h1 class="text-primary">Child Hook Component!</h1>
//         <h4>{{parentData}}!</h4>

//         <!-- for ngAfterContentInit and ngAfterContentChecked -->
//         <ng-content></ng-content>
//     `
// })

// // export class HooksChildComponent implements OnInit, OnDestroy {
// export class HooksChildComponent implements OnInit, OnDestroy, AfterContentInit, AfterContentChecked {
//     @Input()
//     parentData:string;
//     @Input()
//     student:Student;
    
//     // for ngAfterContentInit() lifecycle hook
//     @ContentChild('child')
//     contentChild:ElementRef = {} as ElementRef;
//     count:number = 0;
//     intervalId:any;
//     constructor() {
//         this.parentData = '';
//         this.student = {} as Student;
//         // Preferrably for Dependency Injection
//         // or basic initialization
//         console.log('HooksChild Constructor called!');
//     }
    
//     ngOnInit() {
//         // Handle the initialization logic- it is called only once
//         console.log('HooksChild ngOnInit called!');
//     }
    
//     ngAfterContentInit(): void {
//         // contentChild is accessible here - this gets called only once to do initialization of
//         // such king of contentChild. 
//         console.log('HooksChild ngAfterContentInit called!');
//         this.contentChild.nativeElement.setAttribute('style','color:yellow');
//     }

//     ngAfterContentChecked(): void {
//         // contentChild is accessible here - this gets called many times(every change detection) when you
//         // want to make changes to the content projection. 
//         console.log('HooksChild ngAfterContentChecked called!');
//         if(this.parentData !== 'default')
//             this.contentChild.nativeElement.setAttribute('style','color:'+this.parentData);
//     }

//     ngOnDestroy(): void {
//         console.log('HooksChild ngOnDestroy called!');
//     }
// }

// ngAfterViewInit and AfterViewChecked
import { AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Student } from '../../student';

@Component({
    selector: 'app-hooks-child',
    template: `
        <h1 class="text-primary" #childHook>Child Hook Component!</h1>
        <h1 class="text-primary" #childHook>Child Hook Component!</h1>
        <h4>{{parentData}}!</h4>

        <!-- for ngAfterContentInit and ngAfterContentChecked -->
        <ng-content></ng-content>
    `
})

// export class HooksChildComponent implements OnInit, OnDestroy {
export class HooksChildComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
    @Input()
    parentData:string;
    @Input()
    student:Student;
    
    // // for ngAfterViewInit() lifecycle hook with ViewChild
    // @ViewChild('childHook')
    // viewChild:ElementRef = {} as ElementRef;

    // // for ngAfterViewInit() lifecycle hook with ViewChildren
    @ViewChildren('childHook')
    viewChildren:QueryList<any>;
    count:number = 0;
    intervalId:any;
    constructor() {
        this.parentData = '';
        this.student = {} as Student;
        // Preferrably for Dependency Injection
        // or basic initialization
        console.log('HooksChild Constructor called!');
        this.viewChildren = {} as QueryList<any>;
    }
    
    ngOnInit() {
        // Handle the initialization logic- it is called only once
        console.log('HooksChild ngOnInit called!');
    }
    
    ngAfterViewInit(): void {
        console.log('HooksChild ngAfterViewInit called!');
        // this.viewChild.nativeElement.setAttribute('style','background-color:palegreen');

        // for ViewChildren
        this.viewChildren.first.nativeElement.style.backgroundColor = 'red';
        this.viewChildren.last.nativeElement.style.backgroundColor = 'yellow';
    }
    
    ngAfterViewChecked(): void {
        console.log('HooksChild AfterViewChecked called!');
        // if(this.parentData !== 'default')
        //     this.viewChild.nativeElement.setAttribute('style','background-color:'+this.parentData);
    }

    ngOnDestroy(): void {
        console.log('HooksChild ngOnDestroy called!');
    }
}