const tourData = [
  { location: "Chicago, IL", date: "2/19/20", venue: "The Empty Bottle" },
  { location: "Colombus, OH", date: "2/20/20", venue: "Ace of Cups" },
  { location: "Lancaster, PA", date: "2/21/20", venue: "ABAG" },
  { location: "Jersey City, NJ", date: "2/22/20", venue: "White Eagle Hall" },
  { location: "Philadelphia, PA", date: "2/23/20", venue: "Boot & Saddle" },
  { location: "Albany, CA", date: "2/27/20", venue: "Ivy Room" },
  { location: "Los Angeles, CA", date: "2/28/20", venue: "Bootleg Theater" },
  { location: "Joshua Tree, CA", date: "2/29/20", venue: "Pappy and Harriet's" }
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
            <li class="location">${location}</li>
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