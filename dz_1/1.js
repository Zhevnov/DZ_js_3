let cels = Number.parseInt(prompt("Введите температуру в градусах цельсия"));

let far = (9 / 5) * cels + 32;

alert(`Цельсий:" + ${cels}, "Фаренгейт:" + ${far.toFixed(1)}.`);
