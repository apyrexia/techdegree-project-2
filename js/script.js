/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/



// Global Variables

const students = document.getElementsByClassName('student-item');
const itemsDisplayed = 10;

// //Function adding a search bar

// function addSearchBar() {
//    const header = document.querySelector('.page-header');
//    const div = document.createElement('div');
//       div.className = "student-search"
//       header.appendChild(div);
//    const input = document.createElement('input');
//       input.placeholder = "Search for students...";
//       div.appendChild(input);
//    const button = document.createElement('button');
//       button.textContent = "Search";
//       div.appendChild(button);
// }

/*** 
   Function to hide all of the items in the list excepting the range you want to show.

   @param {array} list - A variable representing a list to be passed into the function.
   @param {number} page - A number representing the page number, or range in the list that will be displayed when the function is called.

***/

function showPage(list, page) {
   let startIndex = (page * itemsDisplayed) - itemsDisplayed;
   let endIndex = page * itemsDisplayed;
   
   for (let i = 0; i < list.length; i++) {
      if ( i >= startIndex && i < endIndex ) {
         list[i].style.display = '';
      } else {
         list[i].style.display = 'none';
      }
   }
}

/*** 
   A function that creates and appends functioning pagination links
   
   @param {array} list - A variable representing a list to be passed into the function.

***/

function pageLinks(list) {
   // creating element tree dynamically
   const pageDiv = document.querySelector('.page');
   const paginationDiv = document.createElement('div');
      paginationDiv.className = 'pagination'
      pageDiv.appendChild(paginationDiv);
   const ul = document.createElement('ul');
      paginationDiv.appendChild(ul);
   const pagesNum = Math.ceil(list.length / itemsDisplayed);
   for (let i = 1; i <= pagesNum; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.href = "#"
      a.textContent = i;
      if (i === 1) {
         a.className = "active";
      }
   }
   // adding pagination event calling showPage function
   links = document.querySelectorAll('a');
   for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', (e) => {
         for (let i = 0; i < links.length; i++) {
            links[i].className = '';
         }
         e.target.className = 'active';
         showPage(students, e.target.textContent)
      });
   }
}

// call functions
showPage(students, 1)
pageLinks(students);
// addSearchBar();