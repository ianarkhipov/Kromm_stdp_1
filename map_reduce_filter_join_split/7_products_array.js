// Тебе надо:
// 1. Вывести объект где ключ - название категории а значение количество товаров в категории
// 2. Вывести объект где ключ- название категории а значение - средняя цена
// 3. Вывести список всех категорий

const products = [
  { name: "Product 1", price: 10, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 12, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 13, category: "Electronics" },
  { name: "Product 7", price: 90, category: "Clothes" },
  { name: "Product 8", price: 14, category: "Electronics" },
];

// Solution for 1.
console.log("1. products count",
  products.reduce((acc, cur)=>{
   if (acc[cur.category]){
     acc[cur.category] += 1
     return acc
   }
   return  {...acc, [cur.category]: 1}
  }, {})
)

// Solution for 2 (first option, with complex code, but nice to understand).
console.log("2. average price, inline solution",
  Object.fromEntries(
    Object.entries(
      products.reduce((acc, cur, idx, array)=> {
          if (acc[cur.category]) {
            acc[cur.category] = [...acc[cur.category], cur.price]
            return acc
          }
          return {...acc, [cur.category]: [cur.price]}
        },
        {}
      )
    )
    .map(([categoryName, prices])=>([categoryName, prices.reduce((acc, curr)=>acc+curr)/prices.length]))
  )
)

// Solution for 2 (step by step option).
const pricesPerCategory = products.reduce((acc, cur, idx, array)=> {
    if (acc[cur.category]) {
      acc[cur.category] = [...acc[cur.category], cur.price]
      return acc
    }
    return {...acc, [cur.category]: [cur.price]}
  },
  {}
)

const averagePriceArrays = Object.entries(pricesPerCategory)
    .map(([categoryName, prices])=>([categoryName, prices.reduce((acc, curr)=>acc+curr)/prices.length]))

const averagePrice = Object.fromEntries(averagePriceArrays)
console.log("2. averagePrice step-by-step", averagePrice)




console.log("3. categories",
  products.reduce(
    (acc, curr, idx, array) => Array.from(new Set([...acc, curr.category])),
    []
  )
)
