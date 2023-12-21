(function() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            var perfEntries = performance.getEntriesByType('navigation');
            var loadTime = perfEntries[0].loadEventEnd - perfEntries[0].startTime;
            var resultElement = document.getElementById('res');
            resultElement.innerHTML = 'Время загрузки страницы: ' + loadTime + ' мс';
        });
    });
})();