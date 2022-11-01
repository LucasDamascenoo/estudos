//1

console.log(!true, !false);

//2
const animals = ["macaco", "tucano", "elefante", "pavão", "hipopótamo"];

if (!animals.includes("leao")) {
  console.log("Leao n existe no array");
} else {
  console.log("Leao existe no array");
}

// 3

const randomNumbers = [59, 61, 73, 57, 35, 73, 21, 87, 43];
let sum = 0;
let limite = 139;

for (let i = 0; i < randomNumbers.length; i++) {
  if (sum > limite) {
    console.log(
      `a Soma ultrapassou o limite ${limite}, o resultado da soma é ${sum}`
    );
    break;
  }

  sum += randomNumbers[i];
}

//4
