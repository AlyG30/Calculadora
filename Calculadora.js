

// Calculadora visual conectada al HTML
function getValues() {
	const v1 = parseFloat(document.getElementById('v1').value) || 0;
	const v2 = parseFloat(document.getElementById('v2').value) || 0;
	return {v1, v2};
}

function pretty(x) {
	if (!isFinite(x)) return String(x);
	return Math.round((x + Number.EPSILON) * 1e12) / 1e12;
}

window.addEventListener('DOMContentLoaded', function() {
	const display = document.getElementById('display');

	document.getElementById('btnSum').addEventListener('click', () => {
		const {v1, v2} = getValues();
		display.textContent = pretty(v1 + v2);
	});

	document.getElementById('btnSub').addEventListener('click', () => {
		const {v1, v2} = getValues();
		display.textContent = pretty(v1 - v2);
	});

	document.getElementById('btnMul').addEventListener('click', () => {
		const {v1, v2} = getValues();
		display.textContent = pretty(v1 * v2);
	});

	document.getElementById('btnDiv').addEventListener('click', () => {
		const {v1, v2} = getValues();
		display.textContent = pretty(v1 / v2);
	});
});

