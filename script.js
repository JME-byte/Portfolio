// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Button click handlers
document.querySelector('.hire-btn')?.addEventListener('click', () => {
    alert('Contact form would open here. Email: contact@cypherhawk.com');
});

document.querySelectorAll('.mission-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.mission-card');
        const missionTitle = card.querySelector('.mission-title').textContent;
        alert(`Viewing detailed report for: ${missionTitle}`);
    });
});

document.querySelectorAll('.action-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const btnText = this.textContent.trim();
        alert(`Opening ${btnText} panel...`);
    });
});

// Glitch effect on hover for profile images
const profileImages = document.querySelectorAll('.profile-image, .bio-image');
profileImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.style.animation = 'none';
        setTimeout(() => {
            img.style.animation = 'glitch 0.5s 1';
        }, 10);
    });
});

// Matrix rain effect on background (optional - uncomment to enable)

function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.05';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const letters = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ffff';
        ctx.font = `${fontSize}px monospace`;
        
        drops.forEach((y, i) => {
            const text = letters[Math.floor(Math.random() * letters.length)];
            const x = i * fontSize;
            ctx.fillText(text, x, y * fontSize);
            
            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        });
    }
    
    setInterval(draw, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

createMatrixRain();


// Typing effect for section titles (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all mission cards and skill cards
document.querySelectorAll('.mission-card, .skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Console easter egg
console.log('%c[SYSTEM ACCESS GRANTED]', 'color: #00ffff; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to CYPHERHAWK Security Systems', 'color: #00ffff; font-size: 14px;');
console.log('%cUnauthorized access is prohibited and will be monitored.', 'color: #ff0000; font-size: 12px;');
console.log('%c\nType help() for available commands', 'color: #ffffff; font-size: 12px;');

window.help = function() {
    console.log('%c\nAvailable Commands:', 'color: #00ffff; font-weight: bold;');
    console.log('%c• status() - Check system status', 'color: #ffffff;');
    console.log('%c• missions() - List all missions', 'color: #ffffff;');
    console.log('%c• clearance() - View security clearance', 'color: #ffffff;');
};

window.status = function() {
    console.log('%c[SYSTEM STATUS]', 'color: #00ff00; font-weight: bold;');
    console.log('%cAll systems operational', 'color: #00ff00;');
    console.log('%cSecurity Level: MAXIMUM', 'color: #00ffff;');
    console.log('%cFirewall Status: ACTIVE', 'color: #00ffff;');
};

window.missions = function() {
    console.log('%c[ACTIVE MISSIONS]', 'color: #00ffff; font-weight: bold;');
    console.log('%c1. Enterprise Network Breach', 'color: #ffffff;');
    console.log('%c2. APT Threat Intelligence', 'color: #ffffff;');
    console.log('%c3. High Priority INFOSEC Alert', 'color: #ffffff;');
    console.log('%c4. IOT Device Exploitation', 'color: #ffffff;');
};

window.clearance = function() {
    console.log('%c[SECURITY CLEARANCE]', 'color: #ff0000; font-weight: bold;');
    console.log('%cCLASSIFIED - TOP SECRET', 'color: #ff0000;');
    console.log('%cAccess Level: ALPHA-1', 'color: #00ffff;');
};
