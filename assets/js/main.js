const calcTax = () => {
  const netToGross = document.querySelector("#nettozubrutto").checked;
  const grossToNet = document.querySelector("#bruttozunetto").checked;
  const taxValue19 = document.querySelector("#nineteenpercent").checked;
  const taxValue7 = document.querySelector("#sevenpercent").checked;
  let input = Number(document.querySelector("#input").value);
  let outputOne = document.querySelector(".outputone");
  let outputTwo = document.querySelector(".outputtwo");
  const currency = " €";

  if (netToGross) {
    if (taxValue19) {
      outputTwo.innerHTML = ((input / 100) * 119).toFixed(2);
    } else if (taxValue7) {
      outputTwo.innerHTML = ((input / 100) * 107).toFixed(2);
    }
    outputOne.innerHTML = (outputTwo.innerHTML - input).toFixed(2);
    outputOne.innerHTML = outputOne.innerHTML.replace(".", ",") + currency;
    outputTwo.innerHTML = outputTwo.innerHTML.replace(".", ",") + currency;
  }

  if (grossToNet) {
    if (taxValue19) {
      outputOne.innerHTML = ((input / 100) * 19).toFixed(2);
    } else if (taxValue7) {
      outputOne.innerHTML = ((input / 100) * 7).toFixed(2);
    }
    outputTwo.innerHTML = (input - outputOne.innerHTML).toFixed(2);
    outputOne.innerHTML = outputOne.innerHTML.replace(".", ",") + currency;
    outputTwo.innerHTML = outputTwo.innerHTML.replace(".", ",") + currency;
  }
};

const netGrossTitle = document.querySelector("#netgrosstitle");
const netGrossTitleWithoutTax = document.querySelector(
  "#netgrosstitle_withouttax"
);
const netToGross = document.querySelector("#nettozubrutto").checked;
const grossToNet = document.querySelector("#bruttozunetto").checked;
const outputOne = document.querySelector(".outputone");

const changeTxtOne = () => {
  netGrossTitle.innerHTML = "Bruttobetrag(Endpreis)";
  netGrossTitleWithoutTax.innerHTML =
    "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro*";
};

const changeTxtTwo = () => {
  netGrossTitle.innerHTML = "Nettobetrag";
  netGrossTitleWithoutTax.innerHTML =
    "Bruttobetrag (Preis mit Mehrwertsteuer) in Euro*";
};
