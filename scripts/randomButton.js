// Array of HTML image links
const linksHTML = [
    '<a href="https://cinni.net/"><img src="images/buttons/cinni_angelbutton3.gif" class="mb-1" alt="cinni button" loading="lazy"></a>',
    '<a href="https://holloetc.neocities.org/"><img src="images/buttons/hollo_88x31.png" class="mb-1" style="width: 88px; height: 31px;" alt="hollo etc. button" loading="lazy"></a>',
    '<a href="https://craft-collector.neocities.org/"><img src="images/buttons/craft-collector_88x31.png" class="mb-1" alt="craft collector button" loading="lazy"></a>',
    '<a href="https://sarenthar.blogspot.com/"><img src="images/buttons/sleepyshaman_88x31.png" class="mb-1" alt="sleepy shaman button" loading="lazy"></a>',
    '<a href="https://pocketnotebook.neocities.org/"><img src="images/buttons/pocketnotebook_88x31.png" class="mb-1" alt="pocketnotebook button" loading="lazy"></a>',
    '<a href="https://peachyvoid.com/"><img src="images/buttons/peachyvoid_88x31.gif" class="mb-1" alt="peachyvoid button" loading="lazy"></a>',
    '<a href="https://snails.town/"><img src="images/buttons/snailstown_88x31.gif" class="mb-1" alt="snails.town button" loading="lazy"></a>',
    '<a href="https://kirb.pet/"><img src="images/buttons/kirbeedia_88x31.gif" class="mb-1" alt="kirb button" loading="lazy"></a>',
    '<a href="https://joroki.neocities.org/"><img src="images/buttons/joroki2_88x31.gif" class="mb-1" alt="joroki button" loading="lazy"></a>',
    '<a href="https://nerdymug.com/"><img src="images/buttons/nerdymug_88x31.png" class="mb-1" alt="nerdymug button" loading="lazy"></a>',
    '<a href="https://zhongvie.neocities.org/"><img src="images/buttons/zhongvie_88x31.png" class="mb-1" alt="zhongvie button" loading="lazy"></a>',
    '<a href="https://mintywyvern.neocities.org/"><img src="images/buttons/mintywyvern_88x31.png" class="mb-1" alt="mintywyvern button" loading="lazy"></a>',
    '<a href="https://blake.earth/"><img src="images/buttons/blakeearth_88x31.gif" class="mb-1" style="width: 88px; height: 31px;" alt="blakeearth button" loading="lazy"></a>',
    '<a href="https://six-letter-notion.neocities.org/"><img src="images/buttons/six-letter-notion_88x31.png" class="mb-1" style="width: 88px; height: 31px;" alt="six letter notion button" loading="lazy"></a>',
    '<a href="https://sunnytea.org/"><img src="images/buttons/sunnytea_88x31.gif" class="mb-1" alt="sunny tea button" loading="lazy"></a>',
    '<a href="https://inkcaps.neocities.org/"><img src="images/buttons/inkcaps_88x31.gif" class="mb-1" alt="inkcaps button" loading="lazy"></a>',
    '<a href="https://prophetesque.gay/"><img src="images/buttons/prophetesque_88x31.png" class="mb-1" alt="prophetesque button" loading="lazy"></a>',
    '<a href="https://ordainedmotion.neocities.org/dir/home"><img src="images/buttons/ordainedmotion_88x31.png" class="mb-1" alt="ordainedmotion button" loading="lazy"></a>',
    '<a href="https://justjennie.neocities.org/"><img src="images/buttons/justjennie_88x31.gif" class="mb-1" alt="just jennie button" loading="lazy"></a>',
    '<a href="https://iloush.neocities.org/"><img src="images/buttons/iloush_88x31.gif" class="mb-1" alt="iloush button" loading="lazy"></a>',
    '<a href="https://sakuradreams.neocities.org/"><img src="images/buttons/sakuradreams_88x31.gif" class="mb-1" alt="sakura dreams button" loading="lazy"></a>',
    '<a href="https://planetaryinfluence.neocities.org/"><img src="images/buttons/planetaryinfluence_88x31.gif" class="mb-1" alt="planetary influence button" loading="lazy"></a>',
    '<a href="https://caminus.quest/"><img src="images/buttons/caminus_88x31.gif" class="mb-1" alt="caminus button" loading="lazy"></a>',
    '<a href="https://sisterdiecutsitsathome.neocities.org/"><img src="images/buttons/sisterdiecuts_88x31.gif" class="mb-1" alt="sister diecuts button" loading="lazy"></a>',
    '<a href="https://slushiecafe.neocities.org/"><img src="images/buttons/slushiecafe_88x31.gif" class="mb-1" alt="slushie cafe button" loading="lazy"></a>',
    '<a href="https://astersarchive.neocities.org/"><img src="images/buttons/astersarchive_88x31.gif" class="mb-1" alt="astersarchive button" loading="lazy"></a>',
    '<a href="https://lazer-bunny.neocities.org/"><img src="images/buttons/lazer-bunny_88x31.gif" class="mb-1" alt="lazer-bunny button" loading="lazy"></a>',
    '<a href="https://sensenotsense.neocities.org/"><img src="images/buttons/sensenotsense_88x31.png" class="mb-1" alt="sensenotsense button" loading="lazy"></a>',
    '<a href="https://lunarlily.neocities.org/"><img src="images/buttons/lunarlily_88x31.gif" class="mb-1" alt="lunarlily button" loading="lazy"></a>',
    '<a href="https://roseyrobertson.neocities.org/"><img src="images/buttons/roseyrobertson_88x31.png" class="mb-1" style="width: 88px; height: 31px;" alt="roseyrobertson button" loading="lazy"></a>',
    '<a href="https://yogomagpie.neocities.org/"><img src="images/buttons/yogomagpie_88x31.gif" class="mb-1" alt="yogomagpie button" loading="lazy"></a>',
    '<a href="https://lostletters.neocities.org/"><img src="images/buttons/lostletters_88x31.gif" class="mb-1" alt="lost letters button" loading="lazy"></a>',
    '<a href="https://fairytale.magicalgurll.com/"><img src="images/buttons/fairytale_88x31.gif" class="mb-1" alt="fairytale button" loading="lazy"></a>',
    '<a href="https://artwork.neocities.org/"><img src="images/buttons/artwork_88x31.gif" class="mb-1" alt="artwork button" loading="lazy"></a>',
    '<a href="https://sweetcharm.net/"><img src="images/buttons/sweetcharm_88x31.gif" class="mb-1" alt="sweetcharm button" loading="lazy"></a>',
    '<a href="https://arunyi.art/"><img src="images/buttons/arunyi_88x31.gif" class="mb-1" alt="arunyi button" loading="lazy"></a>',
    '<a href="https://petrapixel.neocities.org/"><img src="images/buttons/petrapixel_88x31.gif" class="mb-1" alt="petrapixel button" loading="lazy"></a>',
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