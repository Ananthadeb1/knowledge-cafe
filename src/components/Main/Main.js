import React, { useEffect, useState } from "react";
import "./Main.css";
import Course from "../Course/Course";

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

//   useEffect(() => {
//     const storedCart = getShoppingCart();
//     const savedCart = [];
//     // step 1: get id of the addedcourse
//     for (const id in storedCart) {
//       // step 2: get course from courses state by using id
//       const addedcourse = courses.find((course) => course.id === id);
//       if (addedcourse) {
//         // step 3: add quantity
//         const quantity = storedCart[id];
//         addedcourse.quantity = quantity;
//         // step 4: add the added course to the saved cart
//         savedCart.push(addedcourse);
//       }
//       // console.log('added course', addedcourse)
//     }
//     // step 5: set the cart
//     setCart(savedCart);
//   }, [courses]);

  const handleAddToCart = (course) => {
    // cart.push(course); '
    let newCart = [];
    // const newCart = [...cart, course];
    // if course doesn't exist in the cart, then set quantity = 1
    // if exist update quantity by 1
    const exists = cart.find((pd) => pd.id === course.id);
    if (!exists) {
      course.quantity = 1;
      newCart = [...cart, course];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== course.id);
      newCart = [...remaining, exists];
    }

    // setCart(newCart);
    // addToDb(course.id);
  };
  return (
    <div className="main-container">
      <div className="courses-container">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleAddToCart={handleAddToCart}
          ></Course>
        ))}
      </div>
      <div className="cart-container">
        {/* <Cart cart={cart}></Cart> */}
      </div>
    </div>
  );
};

export default Main;
