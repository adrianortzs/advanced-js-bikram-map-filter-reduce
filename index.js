//RESUELVE LOS EJERCICIOS AQUI
let numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados() {
    return numbers.map((n) => n ** n);
}


let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let result2 = foodList.map(function (comida) {
    let texto = '';
    if (comida == 'Pizza') {
        texto = 'Como soy de Italia, amo comer Pizza';
    }
    else if (comida == 'Ramen') {
        texto = 'Como soy de Japón, amo comer Ramen';
    }
    else if (comida == 'Paella') {
        texto = 'Como soy de Valencia, amo comer Paella';
    }
    else if (comida == 'Entrecot') {
        texto = 'Aunque no como carne, el Entrecot es sabroso';
    }
    return texto;
})


const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];


let result3 = staff.map(function (persona) {
    return (persona.name + ' es ' + persona.role + ' y le gusta ' + persona.hobbies[0] + ' y ' + persona.hobbies[1]); 
});


const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter(num => {
    if (num % 2 !==0){return num;}
} );


const foodList2 =[
    {
      name: 'Tempeh',
      isVeggie: true
    },
    {
      name: 'Cheesbacon burguer',
      isVeggie: false
    },
    {
      name: 'Tofu burguer',
      isVeggie: true
    },
    {
      name: 'Entrecot',
      isVeggie: false
    }];
let foodListFiltered = foodList2.filter((food) => { 
    if (food.isVeggie == true) {
        return food;
    }
})


let result5 = foodListFiltered.map((food) => {
    if (food.name == 'Tempeh') {
        return (`Que rico Tempeh me voy a comer!`);
    }
    else if (food.name == 'Tofu burguer') {
        return (`Que rica Tofu burguer me voy a comer!`);
    }
})


const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];

  let result6 = inventory.filter((item) => {
    return item.price > 300;
  }).map((item => item.name));
  

let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce(function(acc, num) {
    return acc * num;
})

const sentenceElements = [
    'Me',
    'llamo',
    'Alex',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
  ];
  
  // Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'
  
  let result8 = sentenceElements.reduce(function (acc, palabra) {
    return acc + palabra + ' ';
  }, '')
  result8 = result8.slice(0, -1);

  
  const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ]; 

  
let result9 = books.filter(function(book){
    return book.category == "code";
})  .map(function(book){
    return book.price;
    })
    .reduce(function(acc, book){
    return (acc + book) ;
    })
// Resultado --> 60