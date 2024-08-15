import axios from 'axios';


// start of ==> on click add Cart
let Quant = 1;
export const addCart = async (a, b, x, d, c, t, o, w) => {
  let isExitsting = false;
  const result = await axios.get("http://localhost:8000/cart")
  // console.log(result.data.length);
  if (result.data.length === 0) {
    const order = {
      imageUrl: x, productName: a, price: b, Quant: Quant, discountedPrice: d, categories: c, trademarks: t, color: o, weight: w
    };
    axios.post("http://localhost:8000/cart", order)
    console.log(order);
  }
  else {
    result.data.map((cart) => {
      if (a === cart.productName) {
        cart.Quant += 1;
        const order = {
          imageUrl: x,
          productName: a,
          price: b,
          Quant: cart.Quant,
          discountedPrice: d,
          categories: c,
          trademarks: t,
          color: o,
          weight: w,
        };
        axios.put(`http://localhost:8000/cart/${cart.id}`, order);
        isExitsting = true;
      }
    });

    if (isExitsting == false) {
      const order = {
        imageUrl: x,
        productName: a,
        price: b,
        Quant: Quant,
        discountedPrice: d,
        categories: c,
        trademarks: t,
        color: o,
        weight: w,
      };
      axios.post("http://localhost:8000/cart", order);
    }
  }
}
// end of ==> on click add Cart




// let totalPrice = 0;
// let totalPro = 0;


// export const loadCart = async () => {
//   const result = await axios.get("http://localhost:8000/cart");
//   setData(result.data);

//   result.data.map((prices) => {
//     totalPrice += prices.Quant * Number(prices.price);
//     totalPro += prices.Quant;
//   });
//   setTotal(totalPrice.toFixed(0));
//   setNamCar(totalPro);
// };
// // console.log(totalPro);
// // console.log(setNamCar);

// const deletOrder = async (id) => {
//     await axios.delete(`http://localhost:8000/cart/${id}`);
//     loadCart();
// };





// start dic and inc 
export const incDec = async (qut, ib, c, proName, price) => {
  if (c === "dec") {
    if (qut === 1) {
      qut = 1;
    } else {
      qut -= 1;
    }
  } else {
    if (qut === 20) {
      qut = 20;
      alert("Quantity Cnnot Exceed 20!");
      return;
    }
    else {
      qut += 1;
    }
  }
  const order = { productName: proName, price: price, Quant: qut }
  await axios.put(`http://localhost:8000/cart/${ib}`, order)
  // loadCart();

}