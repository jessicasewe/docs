window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);  // Get query params from URL
    const apiType = urlParams.get('api');  // Get the "api" parameter (e.g., 'instntmny-local' or 'instntmny-remittance')

    // Define the selectors for each section in your documentation
    const instntmnyLocalPage = '#instntmny-local-page';
    const instntmnyRemittancePage = '#instntmny-remittance-page';
    const instntmnyBillPayPage = '#instntmny-billpay-page';
    const instntmnyBusinessPage = '#instntmny-business-page';

    // Initially hide all sections
    document.querySelector(instntmnyLocalPage).style.display = 'none';
    document.querySelector(instntmnyRemittancePage).style.display = 'none';
    document.querySelector(instntmnyBillPayPage).style.display = 'none';
    document.querySelector(instntmnyBusinessPage).style.display = 'none';

    // Show the relevant API section based on the 'api' parameter in the URL
    if (apiType === 'instntmny-local') {
        document.querySelector(instntmnyLocalPage).style.display = 'block';
    } else if (apiType === 'instntmny-remittance') {
        document.querySelector(instntmnyRemittancePage).style.display = 'block';
    } else if (apiType === 'instntmny-billpay') {
        document.querySelector(instntmnyBillPayPage).style.display = 'block';
    } else if (apiType === 'instntmny-business') {
        document.querySelector(instntmnyBusinessPage).style.display = 'block';
    } else {
        // Default action if no query parameter is found, show the first section or all sections.
        document.querySelector(instntmnyLocalPage).style.display = 'block';  // Show default page
    }

    // Optionally, update the navbar to highlight the active tab
    const localTab = document.querySelector('#local-tab');
    const remittanceTab = document.querySelector('#remittance-tab');
    const billPayTab = document.querySelector('#billpay-tab');
    const businessTab = document.querySelector('#business-tab');

    // Remove the 'active' class from all tabs initially
    localTab.classList.remove('active');
    remittanceTab.classList.remove('active');
    billPayTab.classList.remove('active');
    businessTab.classList.remove('active');

    // Add the 'active' class to the tab corresponding to the 'api' parameter
    if (apiType === 'instntmny-local') {
        localTab.classList.add('active');
    } else if (apiType === 'instntmny-remittance') {
        remittanceTab.classList.add('active');
    } else if (apiType === 'instntmny-billpay') {
        billPayTab.classList.add('active');
    } else if (apiType === 'instntmny-business') {
        businessTab.classList.add('active');
    }
});
