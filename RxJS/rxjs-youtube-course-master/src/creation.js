import { of, from, Observable, fromEvent } from "rxjs";
import { scan, map } from "rxjs/operators";

// const stream$ = of(1, 2, 3, 4);

// const stream$ = from([1, 2, 3, 4]);

// stream$.subscribe((val) => {
//   console.log(val);
// });

const stream$ = new Observable((observer) => {
  observer.next("First value");

  setTimeout(() => observer.next("After 1000ms"), 1000);

  setTimeout(() => observer.complete(), 1500);

  // setTimeout(() => observer.err67or("Error"));

  setTimeout(() => observer.next("After 3000ms"), 3000);
});

// stream$.subscribe(
//   (val) => {
//     console.log(val);
//   },
//   (err) => {
//     console.log(err);
//   },
//   () => {
//     console.log("complete");
//   }
// );

// stream$.subscribe({
//   next(val) {},
//   error(err) {},
//   complete() {},
// });

fromEvent(document.querySelector("canvas"), "mousemove")
  .pipe(
    map((e) => ({
      x: e.offsetX,
      y: e.offsetY,
      ctx: e.target.getContext("2d"),
    }))
  )
  .subscribe((pos) => {
    pos.ctx.fillRect(pos.x, pos.y, 2, 2);
  });

const clear$ = fromEvent(document.getElementById("clear"), "click");

clear$.subscribe(() => {
  const canvas = document.querySelector("canvas");
  canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
});
