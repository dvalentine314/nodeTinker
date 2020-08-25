// node start.js

//import { Subject } from 'rxjs';

let rxjs = require("rxjs");
let rxjsOperators = require("rxjs/operators");

var first = new rxjs.Subject();
var second = new rxjs.Subject();
var destroy$ = new rxjs.Subject();

first.pipe(
    rxjsOperators.takeUntil(destroy$),
    rxjsOperators.switchMap(z => {
        console.log("first:"+z);
        return second;
    })).subscribe(z => {
        console.log("second:" + z);
    });
first.next("1");
second.next("a");
first.next("2");
second.next("b");
first.next("3");
second.next("c");

destroy$.next(true);

first.next("4");
second.next("d");
first.next("5");
second.next("e");
first.next("6");
second.next("f");
first.next("7");
second.next("g");

