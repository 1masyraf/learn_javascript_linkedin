/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */

//SOLUTION TRAINER (PKAI MAP())

import backpackData from "./components/data.js";

// map() through the backpackData array to make a new backpackContent array.
const backpackContent = backpackData.map((backpack) => {
  //backpack param now hold single backpack object in backpackData array

  //create new element called article
  let newArticle = document.createElement("article");
  //add the class "backpack" to the article element
  newArticle.classList.add("backpack");
  //add id attribute to the article class and assigned the respective backpack id value
  newArticle.setAttribute("id", backpack.id);

  //the content that will be output to the user
  newArticle.innerHTML = `

      <figure class="backpack__image">
      <img src=${backpack.image} alt="" />
      </figure>
      <h1 class="backpack__name">${backpack.name}</h1>
      <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
`;

  return newArticle;
});

// Get the main
const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article.
backpackContent.forEach((backpack) => {
  main.append(backpack);
});

//NOOB SOLUTION (SOLUTION ACAP SENDIRI)

// import data from "./components/data.js";

// for (const singleObject in data) {
//   const content = `
//     <figure class="backpack__image">
//       <img src=${data[singleObject].image} alt="" />
//     </figure>
//     <h1 class="backpack__name">${data[singleObject].name}</h1>
//     <ul class="backpack__features">
//       <li class="packprop backpack__volume">Volume:<span> ${
//         data[singleObject].volume
//       }l</span></li>
//       <li class="packprop backpack__color">Color:<span> ${
//         data[singleObject].color
//       }</span></li>
//       <li class="backpack__age">Age:<span> ${data[
//         singleObject
//       ].backpackAge()} days old</span></li>
//       <li class="packprop backpack__pockets">Number of pockets:<span> ${
//         data[singleObject].pocketNum
//       }</span></li>
//       <li class="packprop backpack__strap">Left strap length:<span> ${
//         data[singleObject].strapLength.left
//       } inches</span></li>
//       <li class="packprop backpack__strap">Right strap length:<span> ${
//         data[singleObject].strapLength.right
//       } inches</span></li>
//       <li class="feature backpack__lid">Lid status:<span> ${
//         data[singleObject].lidOpen ? "open" : "closed"
//       }</span></li>
//     </ul>
// `;

//   const main = document.querySelector(".maincontent");

//   const newArticle = document.createElement("article");
//   newArticle.classList.add("backpack");
//   newArticle.setAttribute("id", data[singleObject].id);
//   newArticle.innerHTML = content;

//   main.append(newArticle);
// }
