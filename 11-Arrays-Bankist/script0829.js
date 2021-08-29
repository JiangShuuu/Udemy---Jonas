'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);

// 0829-5
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

// 0829-5

// 0828-4
const createUesrnames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
}; //stw
createUesrnames(accounts);
console.log(accounts);
// 0828-4

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('--------');

movements.forEach(function (movement, i) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
*/

/////////////////////////////////////////////////
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'g', 'h', 'i', 'j'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(1));
console.log(arr.reverse());

//////////
console.log(arr.concat(arr2));
console.log([arr.join('r'), ...arr2]);
*/

/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key) {
  console.log(`${key}: ${value}`);
});
*/

// C #1
/* 
const checkDogs = function (dogJulia, dogsKate) {
  const dogJuliaCorrected = dogJulia.slice();
  dogJuliaCorrected.splice(0, 1);
  dogJuliaCorrected.splice(-2);

  const dogs = dogJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 👻`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
*/
/*
const Juliadata1 = [3, 5, 2, 12, 7];
const Katedata1 = [4, 1, 15, 8, 3];
const Juliadata2 = [9, 16, 6, 8, 3];
const Katedata2 = [10, 5, 6, 1, 4];


const Julia = Juliadata1.concat(Juliadata2);
const Kate = Katedata1.concat(Katedata2);

const numpop = function () {
  Julia.forEach(function (age, i) {
    const type = age < 1 ? 'puppy' : 'adult';
    console.log(`${i + 1}: ${type}`);
  });
};

console.log(numpop());
*/

/* 0829-1
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurTousd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurTousd;
// });

const movementsUSD = movements.map(mov => mov * eurTousd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurTousd);
console.log(movementsUSDfor);

// const movementsDes = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

const movementsDes = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDes);
*/

/* 0829-2
// const user = 'Steven Thomas Williams'; //stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(function (name) {
//     return name[0];
//   })
//   .join('');
// console.log(username);
// ------
// const user = 'Steven Thomas Williams'; //stw
// const username = user
//   .toLowerCase()
//   .split(' ')
//   .map(name => name[0])
//   .join('');
// console.log(username);

// --------
// const createUesrnames = function (user) {
//   const username = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return username;
// }; //stw
// console.log(createUesrnames('Steven Thomas Williams');
*/

/* 0829-3
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

const withdrawals = movements.filter(mov2 => mov2 < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);
*/

/* 0829-4
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// //accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0); // ,0是初始值
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur);

console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);


/* 0829-5
// Maximum value
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

console.log(max);
*/

// C#2
let data1 = [5, 2, 4, 1, 15, 8, 3];
let data2 = [16, 6, 10, 5, 6, 1, 4];
let newdata = data1.concat(data2);

//1.
let adultage = [];
for (const sum of newdata) {
  if (sum <= 2) {
    adultage.push(sum * 2);
  } else if (sum > 2) {
    adultage.push(16 + sum * 4);
  }
}
console.log(adultage);

//2.
const withdrawage = adultage.filter(function (age) {
  return age >= 18;
});
console.log(withdrawage);

//3.
const balance = withdrawage.reduce(function (num, i) {
  return num + i;
});

let avgbalance = Math.round(balance / withdrawage.length);

console.log(balance);
console.log(avgbalance);
