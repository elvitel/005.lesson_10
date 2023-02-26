let number = prompt('Введіть цифри через кому:').split(',');
alert(`Ви ввели цифри: ${number}.`);

number.sort((a, b) => a - b);
alert(`Цифри відсортовані за зростанням: ${number}.`);

number.splice(1, 3);
alert(`Видалені цифри з другої по четверту: ${number}.`);


