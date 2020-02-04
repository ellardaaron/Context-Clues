var weapons = ['Candle Stick', 'Revolver', 'Knife', 'Rope'];
var friends = ['Katherine', 'Ryan', 'Standing Ryan', 'Jillian'];
var locations = ['Kitchen', 'Laundry Room', 'Living Room', 'Dinning Hall'];
var count = 100

for (var i = 1; i < 101; i++) {
    var accusationTxt = document.createElement ('h3','ul');
    var listItem = document.createElement ('button');
    var text = document.createTextNode ('accusation ' + i);
    listItem.appendChild(text);
    accusationTxt.appendChild(listItem);
    document.body.appendChild(accusationTxt);

    accusationTxt.addEventListener('click', displayAccusation(i))
   

};

function displayAccusation (index) {
    return function (e) {
        var accusationNumber = e.target.innerText
        alert (accusationNumber + ": I think " + friends [index % friends.length] + " did it in the " + locations [index % locations.length] + " with the " + weapons [index % weapons.length])
    }
}











