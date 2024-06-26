document.addEventListener("DOMContentLoaded", function() {
	const e = document.querySelectorAll('a[href^="#"]');
	for (let n = 0; n < e.length; n++)
		e[n].addEventListener("click", function(e) {
			e.preventDefault();
			const n = this.getAttribute("href")
			  , t = "#" === n || "" === n ? document.documentElement : document.querySelector(n)
			  , o = t.offsetTop;
			window.scrollTo({
				top: o,
				behavior: "smooth"
		})
	})
})
