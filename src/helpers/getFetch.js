let products = [
  { id:1, name: 'Product 1', price: 100, quantity: 10, desc: 'Product 1 description', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id:2, name: 'Product 2', price: 200, quantity: 20, desc: 'Product 2 description', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80' },
  { id:3, name: 'Product 3', price: 300, quantity: 30, desc: 'Product 3 description', image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
  { id:4, name: 'Product 4', price: 400, quantity: 40, desc: 'Product 4 description', image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80' },  
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