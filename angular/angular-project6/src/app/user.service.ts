import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class UserService {
    user = [
        {
            name :'bhanu prakash',
            company:'ust-global'
        },
        {
            name : 'ravanth',
            company: 'ust-global'
        },
        {
            name : 'sucharitha',
            company : 'ust-global'
        },
        {
            name : 'Yashwanth kuamr reddy',
            company : 'capgemini'
        }
    ]
    printDetails(){
        console.log('exicuted')
    }
}