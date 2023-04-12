import { Notify } from 'notiflix';

const formEl = document.querySelector('form');
const fieldDelay = document.querySelector('[name="delay"]');
const fieldStep = document.querySelector('[name="step"]');
const fildAmount = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', onSubmit);

function onSubmit (evt) {
  evt.preventDefault();

  let delay = Number(fieldDelay.value);
  const step = Number(fieldStep.value);
  const amount = Number(fildAmount.value);


    for (let i = 1; i <= amount; i =+ 1) {
    createPromise(i, delay)
        .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

    delay += step; 
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`); 
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
    
  })
};





// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
  
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Ok')
//     }
//     reject(`ERROR`)
//   }, 1000);
// });

// promise.then(
//   result => {
//     console.log(`${result}`);
//   },
//   error => {
//     console.log(`${error}`)
//   }
// )

// promise
//   .then(result => {
//     console.log(result);
//     return 5;
//   })
//   .then(x => {
//     console.log(x);
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })

// const makeOrder = dish => {
//   const DELAY = 1000;
//   const passed = Math.random() > 0.5;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (passed) {
//         resolve('Ok')
//       }
//       reject(`ERROR`)
//     }, DELAY);
//   })

//   return promise;
// };

// const p = makeOrder('Ice-cream');

// p.then(onMakeOderSuccess).catch(onMakeOderError);

// function onMakeOderSuccess(result) {
//   console.log('onMakeOderSuccess');
//   console.log(result);
// }

// function onMakeOderError(error) {
//   console.log('onMakeOderError');
//   console.log(error)
// }