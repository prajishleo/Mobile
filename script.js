// Target is the page where we should go after clicking the button

function compare(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top; // Displays relative position of the element from top
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	function animation(currentTime) {
		if (startTime === null) {
			startTime = currentTime;
		}
		var timeElasped = currentTime - startTime;
		var run = ease(timeElasped, startPosition, distance, duration);
		window.scrollTo(0, run);
		if (timeElasped < duration) {
			requestAnimationFrame(animation);
		}
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}

	requestAnimationFrame(animation);
}

var button = document.querySelector('button');
button.addEventListener('click', () => {
	compare('.pro', 1000);
});
