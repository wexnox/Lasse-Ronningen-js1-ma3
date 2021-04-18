// Question 2
// Make a call to the following API endpoint:
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating

// Loop through the results and display the following properties in HTML, but only for the first eight results:
// name
// rating
// number of tags (not the tag details, just the amount of tags)

// The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

// Be sure to handle any potential errors in the code.

// Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
const url =
  "https://api.rawg.io/api/games?key=9f2ddd85529c480fbb86c3450d82d4b2&dates=2019-01-01,2019-12-31&ordering=-rating";

const proxy = "https://noroffcors.herokuapp.com/";
const corsFix = proxy + url;
const resultsContainer = document.querySelector(".results");

async function makeAPIGamesCall() {
  try {
    const response = await fetch(corsFix);

    const all = await response.json();

    const game = all.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < game.length; i++) {
      if (i === 8) {
        break;
      }
      resultsContainer.innerHTML += `<div class="result">${game[i].name}.
                                                  Rating ${game[i].rating}.
                                              Tag length ${game[i].tags.length}
                                     </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = alert("error", error);
  }
}
makeAPIGamesCall();
