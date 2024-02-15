import { Component, OnInit } from '@angular/core';
import { Student } from '../../student';

@Component({
    selector: 'app-hooks',
    template: `
        <h1 class="text-warning">Parent Hook Component!</h1>
        <br />
        <!-- <input type="text" (blur)="handleData($event);" /> -->
        
        <!-- using template reference variable -->
        <input type="text" (blur)="handleData(input.value);" #input />
        <br />
        <h3>Simple Form</h3>
        <p>Student Name:- <input type="text" [(ngModel)]="name" /></p>
        <p>Student Marks:- <input type="text" [(ngModel)]="marks" /></p>
        <p><button (click)="updateStudent();">Update Student!</button></p>
        <br />
        <app-hooks-child [parentData]="data" [student]="student">
            <!-- for ngContent -->
            <h1 #child>This is child content 1 from parent component!</h1>
        </app-hooks-child>
    `
})

export class HooksComponent implements OnInit {
    data:string;
    student:Student;
    name:string;
    marks:number;
    constructor() {
        this.data = 'default';
        this.student = new Student();
        this.name='Sachin';
        this.marks=88.45;
    }

    // handleData(evt:any){
    //     this.data = evt.target.value;
    // }

    // using template reference variable
    handleData(val:any){
        this.data = val;
    }

    updateStudent(){
        // this.student.name = this.name;
        // this.student.marks = this.marks;

        // if we want the ngOnChanges to be called, there has to be reference change for the reference type like
        // array, object, functions etc.
        // when angular checks component's input for change it uses === for dirty checking.
        // For arrays/objects this means the reference types only are dirty checked.


        // so as there is no change in the reference so there is no dirty checking and hence no
        // ngOnChanges called.
        // 1st solution would be - allocating new memory and then making the changes to the new object.
        // this.student = new Student();
        // this.student.name = this.name;
        // this.student.marks = this.marks;

        // 2nd solution - go for ngDoCheck
        this.student.name = this.name;
        this.student.marks = this.marks;
    }

    ngOnInit() { }
}