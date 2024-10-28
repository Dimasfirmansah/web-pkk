document.addEventListener('DOMContentLoaded', function () {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.2 
            };

            const callback = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        observer.unobserve(entry.target);
                    }
                });
            };
            const observer = new IntersectionObserver(callback, options);
            const elements = document.querySelectorAll('.animate');
            elements.forEach(element => observer.observe(element));
        });