// Tab functionality for product section
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.new-tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Set default active tab to 'premium' (Bakpia Premium)
    if (tabButtons.length > 0 && tabContents.length > 0) {
        // Hide all tabs first
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        
        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Find Bakpia Premium tab and set it as active
        const premiumTab = document.querySelector('.new-tab-btn[data-tab="premium"]');
        if (premiumTab) {
            premiumTab.classList.add('active');
            const premiumContent = document.getElementById('premium');
            if (premiumContent) {
                premiumContent.style.display = 'block';
            }
        } else {
            // Fallback to first tab if premium tab not found
            tabButtons[0].classList.add('active');
            tabContents[0].style.display = 'block';
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
