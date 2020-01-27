const tourData = [
  { location: "Chicago, IL", date: "2/19/19", venue: "The Empty Bottle" },
  { location: "Colombus, OH", date: "2/20/19", venue: "Ace of Cups" },
  { location: "Lancaster, PA", date: "2/21/19", venue: "ABAG" },
  { location: "Jersey City, NJ", date: "2/22/19", venue: "White Eagle Hall" },
  { location: "Philadelphia, PA", date: "2/23/19", venue: "Boot & Saddle" },
  { location: "Albany, CA", date: "2/27/19", venue: "Ivy Room" },
  { location: "Los Angeles, CA", date: "2/28/19", venue: "Bootleg Theater" },
  { location: "Joshua Tree, CA", date: "2/29/19", venue: "Pappy and Harriet's" }
];


const datesBox = document.querySelector(".datesBox");

function displayDates(){
    const html = tourData
      .map(show => {
        const location = show.location;
        const showDate = show.date;
        const venue = show.venue;
        return `
        <div class="showInfo">
            <li class="title">${location}</li>
            <li class="date">${showDate}</li>
            <li class="venue">${venue}</li>
        </div>
        `;
      })
      .join("");
    datesBox.innerHTML = html;
};

displayDates();

console.log(datesBox);