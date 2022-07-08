let products = [
  { id:1, name: 'Product 1', price: 200, quantity: 10, desc: 'Product 1 description', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',category: 'basics'},
  { id:2, name: 'Product 2', price: 200, quantity: 20, desc: 'Product 2 description', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',category: 'basics' },
  { id:3, name: 'Product 3', price: 300, quantity: 30, desc: 'Product 3 description', image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',category: 'basics' },
  { id:4, name: 'Product 4', price: 300, quantity: 40, desc: 'Product 4 description', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',category: 'basics' },  
  { id:5, name: 'Product 5', price: 200, quantity: 10, desc: 'Product 5 description', image: 'https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1179&q=80',category: 'hot-offers' },	
  { id:6, name: 'Product 6', price: 800, quantity: 10, desc: 'Product 6 description', image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80',category: 'hot-offers' },
  { id:7, name: 'Product 7', price: 700, quantity: 10, desc: 'Product 7 description', image: 'https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80',category: 'hot-offers' },
  { id:8, name: 'Product 8', price: 600, quantity: 10, desc: 'Product 8 description', image: 'https://images.unsplash.com/photo-1600185365778-7875a359b924?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',category: 'hot-offers'},
  { id:9, name: 'Product 9', price: 300, quantity: 10, desc: 'Product 9 description', image: 'https://images.unsplash.com/photo-1603808033587-935942847de4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80',category: 'new-deals' },
  { id:10, name: 'Product 10', price: 300, quantity: 10, desc: 'Product 10 description', image: 'https://images.unsplash.com/photo-1494496195158-c3becb4f2475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',category: 'new-deals' },
];

export const getFetch = new Promise((resolve, reject) => { 
    let condition = true;

    if(condition) {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    } else {
        reject('Error');
    }   
});