
// FREEZE HERE ... 

interface Options {
    root: Element | Document | null;
    threshold: number | number[];
    rootMargin?: string;
}

const options: Options = {
    root: null,
    threshold: 0,
    rootMargin: "0px"
};

const callback: IntersectionObserverCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log("Element is in view:", entry.target);
        }
    });
};

const sectionObserver = new IntersectionObserver(callback, options);

const section = document.getElementById("mySection");
if (section) {
    sectionObserver.observe(section);
}