// Tab functionality for product section
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Set default active tab (first tab)
    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons[0].classList.add('active');
        tabContents[0].style.display = 'block';
        
        // Hide all other tabs
        for (let i = 1; i < tabContents.length; i++) {
            tabContents[i].style.display = 'none';
        }
    }
    
    // Add click event to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
            
            // Show the selected tab content
            const tabId = this.getAttribute('data-tab');
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) {
                selectedTab.style.display = 'block';
                console.log('Showing tab:', tabId);
            } else {
                console.error('Tab content not found for:', tabId);
            }
        });
    });
    
    // Log all tab IDs for debugging
    console.log('Available tab buttons:', Array.from(tabButtons).map(btn => btn.getAttribute('data-tab')));
    console.log('Available tab contents:', Array.from(tabContents).map(content => content.id));
});
