const JavaPractice = () => {
  let num = 50;
  num += 3;
  console.log(num);

  const num1 = 20;
  const num2 = 10;
  console.log(num1 === num2);

  const dataTypes = "My Name is Yogi";
  let name = null;
  console.log(name);

  let isTrue = !true;
  console.log(isTrue);

  const sum = num1 + num2;

  const arrayOne = [1, 2, 3, 4, 5];
  arrayOne.push(10);
  console.log(arrayOne);

  const objOne = {
    name: "Yogi",
    age: "24",
    email: "yogi@gmail.com",
  };
  objOne["phone"] = "9843";
  objOne.email = "yogi9843@gmail.com";
  console.log(objOne);

  function addNumbers(a, b) {
   
    // if (a && b) {
    //   console.log(a, b);
  }
  

  // return a + b;
  return a > 50 ? 0 : a + b;

  return (
    <div>
      We are learning JavaScript
      <h1>{num}</h1>
      <p>
        {name} {dataTypes}
      </p>
      <h2>{sum}</h2>
      {arrayOne} <h3>{"Name: " + objOne.name}</h3>
      {"Age: " + objOne.age} <p>{"email: " + objOne.email}</p>
      {addNumbers}
    </div>
  );
};

export default JavaPractice;
