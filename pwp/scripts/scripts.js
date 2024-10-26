document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Updated: ${lastModified}`;
});


const products = [
    { id: "fc-1888", name: "Head Over Boots", averagerating: 4.5 },
  
  ];
  
  
  const productSelect = document.getElementById('product');
  products.forEach(product => {
    let option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  
  const footer = document.querySelector('footer');
  footer.innerHTML = `<p>&copy; ${new Date().getFullYear()} Callen Jolley | Last Modified: ${document.lastModified}</p>`;
  
  
  window.addEventListener('resize', function() {
    const screenWidth = window.innerWidth;
    
    
    if (screenWidth < 600) { // For mobile devices
        footer.style.fontSize = "12px";
    } else { 
        footer.style.fontSize = "16px";
    }
  });
  
  
  window.dispatchEvent(new Event('resize'));
  
    


// Smooth scrolling for all internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate items when they come into view
const items = document.querySelectorAll('.page_link');

const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const runAnimations = () => {
    items.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('in-view');
        }
    });
};

window.addEventListener('scroll', runAnimations);
window.addEventListener('load', runAnimations);
