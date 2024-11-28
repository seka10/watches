const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 800,
});

ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1200,
});

ScrollReveal().reveal(".container .text-left", {
    ...scrollRevealOption,
    origin: "left",
    delay: 1800,
});

ScrollReveal().reveal(".container .text-right", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
});

ScrollReveal().reveal(".container .explore  ", {
    duration: 1000,
    delay: 2200,
});


ScrollReveal().reveal(".container .print", {
    duration: 1000,
    delay: 2500,
});


ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 2700,
});
ScrollReveal().reveal(".container .h5", {
    duration: 1000,
    delay: 3000,
    interval:500,
});

ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 3500,
    
});

