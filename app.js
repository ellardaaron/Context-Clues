var weapons = ['Candle Stick', 'Revolver', 'Knife', 'Rope','Wrench'];
var friends = ['Cornel Mustard', 'Mrs. Peacock', 'Mr. Green', 'Professor Plum', 'The Butler', 'Mr. White','Miss Scarlet'];
var locations = ['Lounge','Kitchen', 'Billiard Room', 'Conservatory', 'Library', 'Dinning Room','Hall', 'Ballroom'];
var count = 100;

for (var i = 1; i < 101; i++) {
    var accusationTxt = document.createElement ('h3','ul');
    var listItem = document.createElement ('button');
    var text = document.createTextNode ('Accusation ' + i);
    listItem.appendChild(text);
    accusationTxt.appendChild(listItem);
    document.body.appendChild(accusationTxt);

    listItem.addEventListener('click', displayAccusation(i));
};

function displayAccusation (index) {
    return function (e) {
        var accusationNumber = e.target.innerText
        alert (accusationNumber + ": I think " + friends [index % friends.length] + " did it in the " + locations [index % locations.length] + " with the " + weapons [index % weapons.length] + "!");
    };
};











