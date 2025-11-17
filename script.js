// Customer list
const customers = [
    'AFN SPORTS EQUIPMENT SDN BHD',
    'AKER SOLUTIONS',
    'ANSHIN',
    'ARATA AUTO CENTRE SDN BHD',
    'BBCC DEVELOPMENT',
    'CITY UNIVERSITY',
    'CLICKASIA SDN BHD',
    'DATARAN SEGAR HUAT HUAT HUAT FOOD COURT',
    'DHUB',
    'ECRL',
    'EXHIBITION SAMPLE',
    'FedEx-Bukit Jelutong',
    'FedEx-Hitech',
    'FedEx-KLIA',
    'FINEGUARD INDUSTRIES',
    'FOODAGON CONNEXION SDN BHD',
    'FURI GLOBAL SDN BHD',
    'GBB BAKERY',
    'GOOD TIMING FOOD VILLAGE',
    'HONDA LOGISTICS',
    'ISKANDAR EDUCATION ENTERPRISE SDN BHD',
    'ISKANDAR INNOVATIONS SDN BHD',
    'JOYCAMP PJ SDN BHD',
    'KOH TIKI OKR SDN BHD',
    'KUEHNE + NAGEL',
    'LH ELECTRIC & SERVICES',
    'LOTUS\'S STORE (MALAYSIA) SDN BHD',
    'LUXE ACRE SDN BHD',
    'MACRO PERSPECTIVE SDN BHD',
    'MILLENNIUM WELT SDN BHD',
    'NESTLE MANUFACTURING (M) SDN BHD (CHEMBONG)',
    'NESTLE MANUFACTURING (M) SDN BHD (SA)',
    'PERCETAKAN TENAGA',
    'PERODUA MANUFACTURING SDN BHD',
    'REDVEST',
    'SAGA MAKMUR SDN BHD',
    'SEA ASIA SDN BHD',
    'SIN TAI HING',
    'SJK(C) HUA LIAN 3',
    'SJK(C) KEHSENG',
    'SK SAUJANA IMPIAN 2',
    'SMK TELOK DATOK',
    'SUNSET',
    'T7 AERO REPORT',
    'TAYLOR (TEG)',
    'UCSI INTERNATIONAL SCHOOL SB',
    'UPPER HERITAGE SDN BHD',
];

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}

// Open WhatsApp
function openWhatsApp() {
    const whatsappNumber = '60111876933';
    const message = 'Hello, I would like to inquire about your services.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Handle search
function handleSearch(event) {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();
    const customerList = document.getElementById('customerList');
    const customerItems = document.getElementById('customerItems');

    if (searchTerm === '') {
        customerList.style.display = 'none';
        return;
    }

    // Filter customers
    const filteredCustomers = customers.filter(customer =>
        customer.toUpperCase().includes(searchTerm.toUpperCase())
    );

    // Show customer list
    customerList.style.display = 'block';
    customerItems.innerHTML = '';

    if (filteredCustomers.length > 0) {
        filteredCustomers.forEach(customer => {
            const li = document.createElement('li');
            li.className = 'customer-item';
            li.textContent = customer;
            li.onclick = () => selectCustomer(customer);
            customerItems.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.className = 'no-results';
        li.textContent = 'No customers found';
        customerItems.appendChild(li);
    }

    // Handle Enter key
    if (event.key === 'Enter') {
        handleGo();
    }
}

// Select customer from list
function selectCustomer(customer) {
    const searchInput = document.getElementById('searchInput');
    searchInput.value = customer;
    const customerList = document.getElementById('customerList');
    customerList.style.display = 'none';
}

// Handle GO button
function handleGo() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Please type a company name before clicking GO.');
        return;
    }

    // Save company name to localStorage
    localStorage.setItem('companyName', searchTerm);
    
    // Redirect to password page
    window.location.href = 'password.html';
}

// Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
