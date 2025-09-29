//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function stripArticle(str) {
  return str.replace(/^(a |an |the )/i, ""); 
}

bands.sort((a, b) => {
  let strA = stripArticle(a).toLowerCase();
  let strB = stripArticle(b).toLowerCase();
  return strA.localeCompare(strB);
});

let ulItems = document.getElementById("bands");
bands.forEach(val=>{
	let newli = document.createElement("li");
	newli.textContent = val;
	ulItems.appendChild(newli);
});