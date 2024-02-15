export class Product{
    // parameterized properties
    constructor(
        public id:number,
        public name:string,
        public imgPath:string,
        public price:number,
        public category:string,
    ){}
}

// private data members
// public getter and setter for that