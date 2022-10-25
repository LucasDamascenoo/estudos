// compara as medias dos 2 times e dizer qual a maior
// só existe vencedor se o score for > 100
// pode haver empate entre as equipes

let averageDolphins = (97 + 95 + 112) / 3;
let averageKoalas = (97 + 95 + 112) / 3;

if (averageDolphins && averageKoalas >= 100) {
  if (averageDolphins > averageKoalas) {
    console.log(
      `Dolphins teve uma média de ${averageDolphins} e venceu os Koalas`
    );
  } else if (averageKoalas > averageDolphins) {
    console.log(
      `Koalas teve uma média de ${averageKoalas} e venceu os Dolphins`
    );
  } else {
    console.log(
      `Os times tiveram uma média igual e empataram na competição. Doplhins ${averageDolphins}. Koalas ${averageKoalas} `
    );
  }
} else {
  console.log(
    "Os times não tiveram uma média maior que 100 e não houve vencedores"
  );
}
