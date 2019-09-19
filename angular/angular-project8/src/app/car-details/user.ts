export class Car{
    constructor(
        public name : string,
        public model : string,
        public  release : string,
        public cost : string,
        public units : number,
        public id ?:string){}
}