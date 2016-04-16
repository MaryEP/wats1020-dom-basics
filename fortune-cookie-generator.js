// Fortune Cookie Generator 
/* (in html) Add an `onclick` attribute to the "Make My Fortune!" button so it 
executes the `generateFortuneCookie()` function when it is clicked.
  
* In the `fortune-cookie-generator.js` create the logic to display a fortune:
    * Select the `#fortune-cookie-text` element.
    * Append the current text in the `#fortune-cookie-text` element as a list item (`li`) 
    within the `#previous-fortunes-container` list.
    * Select a random fortune cookie saying from the `fortunesList` Array.
    * Replace the `innerText`(or innerHTML) of the `#fortune-cookie-text` element with the data 
    you selected from `fortunesList`.
* Make sure a fortune is generated each time the user clicks the button.
*/
var generateFortuneCookie = function() {
  
  // TODO: Update Previous Fortunes list (usedFortunes) with current `innerHTML`value of 
        //`#fortune-cookie-text`. 
        // 1. Create a new `li` element with the `document.createElement()` method.
        // 2. Set `innerHTML` of that element equal to the `innerHTML` of the 
       //`#fortune-cookie-text` element.
	//if((fortunesList.length) > 0) {
	//var produceFortune = fortunesList[Math.floor(Math.random() * fortunesList.length)];
	//produceFortune.textContent = newFortune;
	//textContent=document.getElementByTagName(fortune-cookie-text).innerHTML;
var fortunesList = [
    "You cannot love life until you live the life you love.",
    "Be on the lookout for coming events; They cast their shadows beforehand.",
    "Land is always on the mind of a flying bird.",
    "The man or woman you desire feels the same about you.",
    "Meeting adversity well is the source of your strength.",
    "A dream you have will come true.",
    "Our deeds determine us, as much as we determine our deeds.",
    "Never give up. You're not a failure if you don't give up.",
    "You will become great if you believe in yourself.",
    "There is no greater pleasure than seeing your loved ones prosper.",
    "You will marry your lover.",
    "The greatest love is self-love.",
    "A very attractive person has a message for you.",
    "You already know the answer to the questions lingering inside your head.",
    "It is now, and in this world, that we must live.",
    "You must try, or hate yourself for not trying.",
    "You can make your own happiness.",
    "The greatest risk is not taking one.",
    "The love of your life is stepping into your planet this summer.",
    "Love can last a lifetime, if you want it to.",
    "Adversity is the parent of virtue.",
    "Serious trouble will bypass you.",
    "A short stranger will soon enter your life with blessings to share.",
    "Now is the time to try something new.",
    "Wealth awaits you very soon.",
    "If you feel you are right, stand firmly by your convictions.",
    "If winter comes, can spring be far behind?",
    "Keep your eye out for someone special.",
    "You are very talented in many ways.",
    "A stranger, is a friend you have not spoken to yet.",
    "A new voyage will fill your life with untold memories.",
    "You will travel to many exotic places in your lifetime.",
    "Your ability for accomplishment will follow with success.",
    "Nothing astonishes men so much as common sense and plain dealing.",
    "It's amazing how much good you can do if you dont care who gets the credit.",
    "Everyone agrees. You are the best.",
    "Life consists not in holding good cards, but in playing those you hold well.",
    "Jealousy doesn't open doors, it closes them!",
    "It's better to be alone sometimes.",
    "When fear hurts you, conquer it and defeat it!",
    "Let the deeds speak.",
    "You will be called in to fulfill a position of high honor and responsibility.",
    "The man on the top of the mountain did not fall there.",
    "You will conquer obstacles to achieve success.",
    "Joys are often the shadows, cast by sorrows.",
    "Fortune favors the brave.",
	];
	
var fortuneCookieText=document.getElementById("fortune-cookie-text");

var liFortuneList = document.createElement('li');

liFortuneList.innerText = fortuneCookieText.innerText;  
	//document.getElementByTagName(liFortuneList).innerText = actualFortune.textContent
	
var usedFortunes = document.getElementById('previous-fortunes-container');
	
usedFortunes.appendChild(liFortuneList);
	//object.appendchild(element to append)
	//Select `#previous-fortunes-container`(usedFortunes) and use`appendChild(element)' 
  //to add an html element to append `li` element created above.

	fortuneCookieText.innerText=fortunesList[Math.floor(Math.random() * fortunesList.length)];
}
//document.getElementById('previous-fortunes-container').appendChild('usedFortunes').innerHTML;
//or .appendChild(liFortuneList);
	
//var newFortune = fortunesList[Math.floor(Math.random() * fortunesList.length)];
	//actualFortune.textContent = newFortune;

 //document.getElementByClassName('generate-button').addEventListener('click', generateFortuneCookie()); 
//function generateFortuneCookie() {
      
var caution = function() {
alert ("Fortune Teller is not responsible for the fortune you receive, nor for any subsequent actions.");
}


