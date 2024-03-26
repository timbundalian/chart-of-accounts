// pops an alertbox when an underconstruction working button is clicked
document.getElementById("click").onclick = function() {alertBox()};

function alertBox() {
	alert("Hi, button is working.\nHowever, this is a test only!\nThank you for using!");
}
// end of code


// returns the current, previous or next year that stands for the school year.
// 'if' statement returns the previous year + current year if current month is from the month of january to july.
// 'else' statement returns the current year + next year if current month is from august to december.
// should only be used for current situation.
// statements can be used separately, just create new function/condition etc.

if (new Date().getMonth() < 7) {
	const year = {
		currentYear: new Date().getFullYear(),
		prevYear: new Date().getFullYear() - 1,
		schoolYear: function() {
			return this.prevYear + "-" + this.currentYear;
		}
	}
	document.getElementById("schoolYear").innerHTML = year.schoolYear();
} else {
	const year = {
		currentYear: new Date().getFullYear(),
		nextYear: new Date().getFullYear() + 1,
		schoolYear: function() {
			return this.currentYear + "-" + this.nextYear;
		}
	}
	document.getElementById("schoolYear").innerHTML = year.schoolYear();
}
// end of code