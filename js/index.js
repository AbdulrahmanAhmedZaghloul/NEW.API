let allget = [];
let baaf = document.getElementById("baaf");
let Pizze = document.getElementById("pizze");
let salad = document.getElementById("salad");
let pasta = document.getElementById("Pasta");
let chicken = document.getElementById("chicken");

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////beef///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

async function beef() {
  let getpromt = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=beef`
  );
  allget = await getpromt.json();
  allget = allget.recipes;
  displayrec1();
}

function displayrec1() {
  let cartoona = ``;
  for (let i = 0; i < allget.length; i++) {
    cartoona += `
<div class="col-md-4">
   
    <div class="rewe">
       <img class="w-75" src="${allget[i].image_url}">
       <h3 class="color-mine py-1">${allget[i].title}</h3>
      <p>${allget[i].publisher}</p>

    </div>

</div>
       `;
  }

  document.getElementById("recipesRow").innerHTML = cartoona;
}

baaf.addEventListener("click", function () {
  beef();
});

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////pizza///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

async function Pizza() {
  let getpromt = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=Pizza`
  );
  allget = await getpromt.json();
  allget = allget.recipes;
  displayrec2();
}

function displayrec2() {
  let cartoona = ``;
  for (let i = 0; i < allget.length; i++) {
    cartoona += `
<div class="col-md-4">
   
    <div class="rewe">
       <img class="w-75" src="${allget[i].image_url}">
       <h3 class="color-mine py-1">${allget[i].title}</h3>
      <p>${allget[i].publisher}</p>

    </div>

</div>
       `;
  }

  document.getElementById("recipesRow").innerHTML = cartoona;
}

Pizze.addEventListener("click", function () {
  Pizza();
});

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////salad///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

async function Salad() {
  let getpromt = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=Salad`
  );
  allget = await getpromt.json();
  allget = allget.recipes;
  displayrec3();
}

function displayrec3() {
  let cartoona = ``;
  for (let i = 0; i < allget.length; i++) {
    cartoona += `
<div class="col-md-4">
   
    <div class="rewe">
       <img class="w-75" src="${allget[i].image_url}">
       <h3 class="color-mine py-1">${allget[i].title}</h3>
      <p>${allget[i].publisher}</p>

    </div>

</div>
       `;
  }

  document.getElementById("recipesRow").innerHTML = cartoona;
}

salad.addEventListener("click", function () {
  Salad();
});

//////////////////////////////////////////////////////////////////////////////////////////////////
///////////Past///////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

async function Past() {
  let getpromt = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=pasta`
  );
  allget = await getpromt.json();
  allget = allget.recipes;
  displayrec4();
}

function displayrec4() {
  let cartoona = ``;
  for (let i = 0; i < allget.length; i++) {
    cartoona += `
<div class="col-md-4">
    <div class="rewe">
       <img class="w-75" src="${allget[i].image_url}">
       <h3 class="color-mine py-1">${allget[i].title}</h3>
      <p>${allget[i].publisher}</p>

    </div>
</div>
       `;
  }

  document.getElementById("recipesRow").innerHTML = cartoona;
}
Pasta.addEventListener("click", function () {
  Past();
});

//////////////////////////////////////////////////////////////////////////////////////////////////
////////////chicken//////////////
/////////////////////////////////////////////////////////////////////////////////////////////////

async function cken() {
  let getpromt = await fetch(
    `https://forkify-api.herokuapp.com/api/search?&q=chicken`
  );
  allget = await getpromt.json();
  allget = allget.recipes;
  displayrec5();
}

function displayrec5() {
  let cartoona = ``;
  for (let i = 0; i < allget.length; i++) {
    cartoona += `
<div class="col-md-4">
    <div class="rewe">
       <img class="w-75" src="${allget[i].image_url}">
       <h3 class="color-mine py-1">${allget[i].title}</h3>
      <p>${allget[i].publisher}</p>

    </div>
</div>
       `;
  }

  document.getElementById("recipesRow").innerHTML = cartoona;
}
chicken.addEventListener("click", function () {
  cken();
});
