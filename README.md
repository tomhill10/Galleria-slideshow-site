# Galleria-slideshow-site

Frontend Mentor - Galleria slideshow site - HTML CSS JAVASCRIPT

## Stuff I learned:

- trying to force GRID to do what you want might mean that flexbox is the answer. Those 4 hours I will never get back.

- "pointer-events" a usefull css attribute that allows the mouse to ignor that element. Had an issue where the hover on the image would be interrupted due to the text-div.

- I managed to get the JSON data to parce into the webpage okay. Now need to figureout how to load the data of the picture to a website template!
-- Changed this to fetch() as it doesn't require the use of Jquery 

Learning the important of eventListeners in JS. Had some trouble with the element in HTML not being found as it hadn't been loaded into the DOM. 
- To fix this I put the eventListeners inside the function that pushes the elements into the DOM apon loading the JSON data.

MediaQ took a while trying to get eveything to fit nicely. It's not exactly how I wanted it but I'm happy enough with the outcome for now.

I'm happy with this project. I didn't get time to add a bar at the bottom of the screen depending on how far along you were. There is also some work to be done on general sizing of elements like the pop-up windows for the "view picture". 

The showNext() and showPrev() functions proved to be quite challanging and I feel like I have duplicated code in places. But after much trial and error it works at the moment so I'll be leaving it as is. I should possibly look at how to properly manage my scope accross the JS file. 
- Also need to think about how I am naming variables. Alot I kept the same through different funtions to try and make it uniform but I think this added to my confusion later down the line. 


Any comments or reviews are most welcome. Thanks!



