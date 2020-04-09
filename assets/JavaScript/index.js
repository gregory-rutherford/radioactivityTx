const tourData = [
  
];

const oldTourDates = [
  { location: "Chicago, IL", date: "2/19/20", venue: "The Empty Bottle" },
  { location: "Colombus, OH", date: "2/20/20", venue: "Ace of Cups" },
  { location: "Lancaster, PA", date: "2/21/20", venue: "ABAG" },
  { location: "Jersey City, NJ", date: "2/22/20", venue: "White Eagle Hall" },
  { location: "Philadelphia, PA", date: "2/23/20", venue: "Boot & Saddle" },
  { location: "Albany, CA", date: "2/27/20", venue: "Ivy Room" },
  { location: "Los Angeles, CA", date: "2/28/20", venue: "Bootleg Theater" },
  { location: "Joshua Tree, CA", date: "2/29/20", venue: "Pappy and Harriet's" },
];

const cancelledDates = [
  { location: "San Antonio, TX", date: "3/26/20", venue: "Paper Tiger" },
  { location: "Austin, TX", date: "3/27/20", venue: "Hotel Vegas" },
  { location: "Denton, TX", date: "3/28/20", venue: "Dan's Silverleaf" },
  { location: "Exeter, UK", date: "5/14/20", venue: "The Cavern" },
  { location: "Bristol, UK", date: "5/15/20", venue: "The Crofters Rights" },
  { location: "Birmingham, UK", date: "5/17/20", venue: "The Dark Horse" },
  { location: "Manchester, UK", date: "5/18/20", venue: "The Peer Hat" },
  { location: "Nottingham, UK", date: "5/19/20", venue: "JT Soar" },
  { location: "Edinburgh, UK", date: "5/20/20", venue: "The Banshee Labyrinth" },
  { location: "Newcastle, UK", date: "5/21/20", venue: "The Cluny" },
  { location: "Stoke On Trent, UK", date: "5/21/20", venue: "Pilgrims Pit" },
  { location: "Sheffield, UK", date: "5/23/20", venue: "Delicious Clam" },
  { location: "London, UK", date: "5/24/20", venue: "The Lexington" },
  { location: "Madison, WI", date: "6/12/20", venue: "High Noon Saloon" },
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