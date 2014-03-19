(function ( d, w ) {
    'use strict';
    
    var skillElements = function() {
    	var elements = d.querySelectorAll('div.skill');
    	var skills = [].slice.call(elements);
    	return skills;
    };
    
    var init = function() {
    	var elements = skillElements();
    	for (var i in elements){
    		var skill = elements[i];
    		var arrow = d.createElement('div'),
    		arrowUp = d.createElement('div'),
    		arrowHandle = d.createElement('div');
    		arrow.classList.add('arrow');
    		arrowUp.classList.add('arrow-up');
    		arrowHandle.classList.add('arrow-handle');
       		arrow.appendChild(arrowUp);
       		arrow.appendChild(arrowHandle);
       		skill.appendChild(arrow);
       		skill.parentNode.addEventListener("impress:stepenter", function (event) {
       			var skill = event.target.querySelector('div.skill');
       			var arrow = event.target.querySelector('div.arrow');
       			var grow = skill.dataset['grow'];
       			var start = skill.dataset['start'] || 0;
       			arrow.style.height = parseInt(grow) * 100 + 'px';;
       			arrow.style.bottom = parseInt(start) * 100 + 'px';;
            }, false);
    	}
    };
    init();
    
})(document, window);
