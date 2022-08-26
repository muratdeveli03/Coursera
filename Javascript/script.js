function a() {
  return;
  {
    name: "Murat";
  }
}

function b() {
  return {
    name: "Develi",
  };
}
console.log(a());
console.log(b());

// for loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is:" + sum);

function orderChickenWith(sideDish) {
   sideDish= sideDish || " tomatoe sauce"
    console.log("Chicken with" + sideDish);
}
orderChickenWith(" noodles");
orderChickenWith();

