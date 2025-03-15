const yearChamber = document.getElementById("currentyear");
const modified = document.getElementById("lastModified")

const today = new Date();

// This line below shows current year
yearChamber.innerHTML = `${today.getFullYear()}`;

// This line below show the time the page was modified last. Updated everytime the page refreshes
modified.innerHTML = `Last Modification: ${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
		timeStyle: "long"
	}
).format(today).replace(",","")}`; 