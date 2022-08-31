let get2022 = data
  .filter((item) => new Date(item.ReleaseDate).getFullYear() === 2022)
  .sort((a, b) => b.Score - a.Score);

const top2022 = document.getElementById("top2022Data");

let top2022Data = "";
for (let i = 0; i < 5; i++) {
  let genre = "";

  get2022[i].Genre.map(
    (item) => (genre += ` <span class="genre">${item}</span>`)
  );

  top2022Data += ` <div class="info-wrapper row-${i + 1}">
  <h3>${i + 1}) ${get2022[i].Title}</h3>
  <div class="detail">
    <span class="date">0${
      new Date(get2022[i].ReleaseDate).getMonth() + 1
    } / ${new Date(get2022[i].ReleaseDate).getFullYear()}</span> |
    <span class="studio">${get2022[i].Studio}</span> |
    <span class="eps">${get2022[i].Episodes} Eps</span> |
    <span class="rating"><i class="fa fa-star"></i> ${get2022[i].Score}</span>
  </div>
  <div class="genre-wrapper">
  ${genre}
  </div>
  <p class="desc">${get2022[i].Description}</p>
</div>
<div class="image-wrapper row-${i + 1}">
  <img src="/assets/images/${get2022[i].Picture}" alt="Umbrella Academy">
</div>
</div>`;
}

top2022.innerHTML = top2022Data;

let getTopAll = data.sort((a, b) => b.Score - a.Score);

const topAll = document.getElementById("topAllData");
console.log(getTopAll);
let topAllData = "";
for (let i = 0; i < 5; i++) {
  let genre = "";

  getTopAll[i].Genre.map(
    (item) => (genre += ` <span class="genre">${item}</span>`)
  );

  topAllData += `
    <article class="card no${i + 1}">
    <div class="container">
      <h3>0${i + 1}</h3>
      <h5>${getTopAll[i].Title}</h5>
      <div class="detail">
        <span class="date">0${
          new Date(getTopAll[i].ReleaseDate).getMonth() + 1
        } / ${new Date(getTopAll[i].ReleaseDate).getFullYear()}</span> |
        <span class="studio">${getTopAll[i].Studio}</span> |
        <span class="eps">${getTopAll[i].Episodes} Eps</span>
        <span class="rating"><i class="fa fa-star"></i> ${
          getTopAll[i].Score
        }</span>
      </div>
      <div class="genre-wrapper">
        ${genre}
      </div>
      <p class="desc">${getTopAll[i].Description}</p>
    </div>
  </article>
    `;
}

let topLowItem = "";

for (let i = 5; i < 10; i++) {
  topLowItem += ` <li>
  <h5><span class="no">${i + 1})</span>${
    getTopAll[i].Title
  }</h5> <span class="rating"><i
  class="fa fa-star"></i> ${getTopAll[i].Score}</span>
</li>`;
}

let topLow = `<div class="card">
<div class="container">
  <ul>
${topLowItem}
  </ul>
</div>
</div>`;

topAllData += topLow;

topAll.innerHTML = topAllData;

const table = document.getElementById("bodyTable");

let contentTable = "";
data.map(
  (item, i) =>
    (contentTable += ` <tr>
<td>${i + 1}.</td>
<td>${item.Title}</td>
<td>${item.ReleaseDate}</td>
<td>${item.Studio}</td>
<td>${item.Episodes}</td>
<td><i class="fa fa-star"></i>${item.Score}</td>
<td><span class="status ${
      item.Status === "watched"
        ? "watched"
        : item.Status === "watching"
        ? "pending"
        : "done"
    }"><i class="fa  ${
      item.Status === "watched"
        ? "fa-check-circle"
        : item.Status === "watching"
        ? "fa-hourglass-half"
        : "fa-history"
    }"></i> ${item.Status}</span></td>
</tr>`)
);

table.innerHTML = contentTable;

let heroCard = document.getElementById("heroCard");

let cardData = heroData
  .map(
    (item, i) => `<div class="card no${i + 1}">
<h5>${item.Title}</h5>
<span>${new Date(item.ReleaseDate).getFullYear()}</span>
</div>`
  )
  .join("");

cardData += `<div class="text-wrapper">
<h5>Top TV Series</h5>
<h3>Chill & Enjoy The Series</h3>
<p class="desc">This is my top tv series that I\'ve ever watched or been watching, this list & rating based
  on my experience & my impression after I watched the series</p>
</div>`;

heroCard.innerHTML = cardData;
