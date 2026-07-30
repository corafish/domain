// Array of HTML image links
const linksHTML = [
    '<a href="#"><img src="#" class="mb-1" alt="#" loading="lazy"></a>',
];

// Apply Fisher-Yates Shuffle to array
function myFunction(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}
const shuffleLinks = myFunction(linksHTML);

// Remove commas from resulting array
const displayLinks = shuffleLinks.join(" ");

// Display final array
document.getElementById("button-wall").innerHTML = displayLinks;