// 1
let a = prompt("enter the number");
if (a > +0) {
    console.log("positive", a)
}
else {
    console.log("negative", a)
}

// 2
let q = prompt("enter the number");
for (let i = q; i % 2 == 0; i++) {
    console.log("even number", a);
}
for (let b = q; b % 2 != 0; b++) {
    console.log("odd number", a);
}

// 3
let c = prompt("enter the 1st number");
let d = prompt("enter the 2nd number");
if (c > d) {
    console.log("1st number is greater", c);
}
else {
    console.log("2nd number is greater", d);
}

// 4
let s = prompt("enter the grade");
if (s > 10) {
    console.log("grade A");
}
else if (s > 9) {
    console.log("grade B");
}
else if (s > 8) {
    console.log("grade C");
}
else if (s > 7) {
    console.log("grade D");
}
else if (s > 6) {
    console.log("grade E");
}
else if (s > 5) {
    console.log("grade F");
}
else if (s > 4) {
    console.log("grade G");
}
else {
    console.log("FAIL");
}

// 5
let f = prompt("enter the age");
if (f < 60) {
    if (f >= 18) {
        console.log("ticket price is 200")
    }
    else if (f >= 12) {
        console.log("ticket price is 10")
    }
    else {
        console.log("ticket price is 5")
    }
}
else {
    console.log("ticket price is 15")
}

// 6
let g = prompt("enter the number")
if (g % 4 == 0) {
    console.log("leap year", g)
}
else {
    console.log("not a leap year", g)
}

// 7
{
    let h = prompt("enter the amount");
    if (h <= 50) {
        console.log("discount is 0")
    }
    else if (h >= 100) {
        console.log("discount is 10")
    }
}