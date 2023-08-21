const sections = document.querySelectorAll(".section");
const sectionsButtons = document.querySelectorAll(".controls");
const sectionButton = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
	//Button click acttive class
	for (let i = 0; i < sectionButton.length; i++) {
		sectionButton[i].addEventListener("click", function () {
			let currentButton = document.querySelectorAll(".active-btn");
			currentButton[0].className = currentButton[0].className.replace(
				"active-btn",
				""
			);
			this.className += " active-btn";
		});
	}

	//Sections active class
	allSections.addEventListener("click", (e) => {
		const id = e.target.dataset.id;
		if (id) {
			//remove selected from the other buttons
			sectionsButtons.forEach((button) => {
				button.classList.remove("active");
			});

			//hide other sections
			sections.forEach((section) => {
				section.classList.remove("active");
			});

			const element = document.getElementById(id);
			element.classList.add("active");
		}
	});

	//Toggle theme

	const themeBtn = document.querySelector(".theme-btn");
	themeBtn.addEventListener("click", () => {
		let element = document.body;
		element.classList.toggle("light-mode");
	});

	//Submit form
	document.getElementById("submitBtn").onclick = function () {
		document.getElementById("submitForm").submit();
	};
}

PageTransitions();
