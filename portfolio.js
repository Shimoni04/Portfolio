const menuToggle = document.querySelector(".toggle");
const showcase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
	menuToggle.classList.toggle("active");
	showcase.classList.toggle("active");
});
// TypedJS
var typed = new Typed("#element", {
	strings: [
		"[  Web Designer  ]",
		"[  UI/UX Designer  ]",
		"[  Web Developer  ]",
	],
	typeSpeed: 60,
	backSpeed: 35,
	smartBackspace: true, // this is a default
	loop: true,
	onComplete: function (self) {
		// Manually trigger backspace after typing completes
		// self.cursor.remove();
		setTimeout(function () {
			self.backspace(self, self.strings[self.strPos].length);
		}, 1000); // Adjust delay as needed
	},
});
//Menu Link New Page Transition
var app = (function () {
	let pages = [];
	let links = [];

	document.addEventListener("DOMContentLoaded", function () {
		pages = document.querySelectorAll("[data-page]");
		links = document.querySelectorAll('[data-role="link"]');
		//pages[0].className = "active";  - already done in the HTML
		[].forEach.call(links, function (link) {
			link.addEventListener("click", navigate);
		});
	});
	function navigate(ev) {
		ev.preventDefault();
		let id = ev.currentTarget.href.split("#")[1];
		[].forEach.call(pages, function (page) {
			if (page.id === id) {
				page.classList.add("active");
			} else {
				page.classList.remove("active");
			}
		});
		return false;
	}

	return {
		pages,
		links,
		xhr: ajax,
	};
})();
//Let's Connect Button Click Animation
function openPage() {
	// Replace "page.html" with the actual path to your HTML file
	window.location.href = "/contact.html";
}
//Contact Page
function addClass() {
	document.body.classList.add("sent");
}

sendLetter.addEventListener("click", addClass);

// Get the textarea element
const textarea = document.getElementById("Textarea");

// Add input event listener to the textarea
textarea.addEventListener("input", function () {
	// Check if textarea value is empty
	if (textarea.value === "") {
		// Restore placeholder text if textarea is empty
		textarea.setAttribute("placeholder", "Enter your message...");
	} else {
		// Clear placeholder text if textarea is not empty
		textarea.removeAttribute("placeholder");
	}
});
