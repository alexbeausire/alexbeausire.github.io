document.addEventListener("DOMContentLoaded", function () {
    // ---- Phrases -----------------------------------------------------
    const phrases = [
        "Abandon normal instruments",
        "Accept advice",
        "Accretion",
        "A line has two sides",
        "Allow an easement (an easement is the abandonment of a stricture)",
        "An object or system made of or with itself",
        "Are there sections? Consider transitions",
        "Ask people to work against their better judgement",
        "Ask your body",
        "Assemble some of the instruments in a group and treat the group",
        "Balance the consistency principle with the inconsistency principle",
        "Be dirty",
        "Breathe more deeply",
        "Bridges -build -burn",
        "Cascades",
        "Change instrument roles",
        "Change nothing and continue with immaculate consistency",
        "Children's voices -speaking -singing",
        "Cluster analysis",
        "Consider different fading systems",
        "Consult other sources -promising -unpromising",
        "Convert a melodic element into a rhythmic element",
        "Courage!",
        "Cut a vital connection",
        "Decorate, decorate",
        "Define an area as `safe' and use it as an anchor",
        "Destroy -nothing -the most important thing",
        "Discard an axiom",
        "Disconnect from desire",
        "Discover the recipes you are using and abandon them",
        "Distorting time",
        "Do nothing for as long as possible",
        "Don't be afraid of things because they're easy to do",
        "Don't be frightened of cliches",
        "Don't be frightened to display your talents",
        "Don't break the silence",
        "Don't stress one thing more than another",
        "Do something boring",
        "Do the washing up",
        "Do the words need changing?",
        "Do we need holes?",
        "Emphasize differences",
        "Emphasize repetitions",
        "Emphasize the flaws",
        "Faced with a choice, do both (given by Dieter Roth)",
        "Feedback recordings into an acoustic situation",
        "Fill every beat with something",
        "Get your neck massaged",
        "Ghost echoes",
        "Give the game away",
        "Give way to your worst impulse",
        "Go slowly all the way round the outside",
        "Honor thy error as a hidden intention",
        "How would you have done it?",
        "Humanize something free of error",
        "Imagine the music as a moving chain or caterpillar",
        "Imagine the music as a set of disconnected events",
        "Infinitesimal gradations",
        "Intentions -credibility of -nobility of -humility of",
        "Into the impossible",
        "Is it finished?",
        "Is there something missing?",
        "Is the tuning appropriate?",
        "Just carry on",
        "Left channel, right channel, centre channel",
        "Listen in total darkness, or in a very large room, very quietly",
        "Listen to the quiet voice",
        "Look at a very small object, look at its centre",
        "Look at the order in which you do things",
        "Look closely at the most embarrassing details and amplify them",
        "Lowest common denominator check -single beat -single note -single riff",
        "Make a blank valuable by putting it in an exquisite frame",
        "Make an exhaustive list of everything you might do and do the last thing on the list",
        "Make a sudden, destructive unpredictable action; incorporate",
        "Mechanicalize something idiosyncratic",
        "Mute and continue",
        "Only one element of each kind",
        "(Organic) machinery",
        "Overtly resist change",
        "Put in earplugs",
        "Remember those quiet evenings",
        "Remove ambiguities and convert to specifics",
        "Repetition is a form of change",
        "Reverse",
        "Short circuit (example: a man eating peas with the idea that they will improve his virility shovels them straight into his lap)",
        "Shut the door and listen from outside",
        "Simple subtraction",
        "Start the task backwards",
        "Spectrum analysis",
        "Take a break",
        "Take away the elements in order of apparent non-importance",
        "Tape your mouth (given by Ritva Saarikko)",
        "The inconsistency principle",
        "The tape is now the music",
        "Think of the radio",
        "Tidy up",
        "Trust in the you of now",
        "Turn it upside down",
        "Twist the spine",
        "Use an old idea",
        "Use an unacceptable color",
        "Use fewer notes",
        "Use unqualified people",
        "Water",
        "What are you really thinking about just now? Incorporate",
        "What is the reality of the situation?",
        "What mistakes did you make last time? Emphasise them",
        "What would your closest friend do?",
        "What wouldn't you do?",
        "Work at a different speed",
        "You are an engineer",
        "You can only make one dot at a time",
        "You don't have to be ashamed of using your own ideas"
    ];

    // ---- Grab all DOM elements up front ---------------------------------
    const phraseEl = document.getElementById("phrase");
    const browseBtn = document.getElementById("browse-btn");
    const modal = document.getElementById("phrase-modal");
    const closeBtn = document.getElementById("close-modal");
    const listEl = document.getElementById("phrase-list");

    // ---- Daily phrase --------------------------------------------------
    function dayIndex() {
        const today = new Date();
        const dayOfYear = Math.floor(
            (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
        );
        return dayOfYear % phrases.length;
    }

    function updatePhrase() {
        phraseEl.textContent = phrases[dayIndex()];
        highlightCurrentInList();
    }

    // ---- Browse-all modal -----------------------------------------------
    phrases.forEach((phrase, i) => {
        const li = document.createElement("li");
        li.textContent = phrase;
        li.tabIndex = 0;
        li.dataset.index = i;
        li.addEventListener("click", () => {
            phraseEl.textContent = phrase;
            highlightCurrentInList();
            closeModal();
        });
        li.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                li.click();
            }
        });
        listEl.appendChild(li);
    });

    function highlightCurrentInList() {
        const shown = phraseEl.textContent;
        listEl.querySelectorAll("li").forEach((li) => {
            li.classList.toggle("current", li.textContent === shown);
        });
    }

    function openModal() {
        modal.classList.remove("hidden");
        highlightCurrentInList();
        closeBtn.focus();
    }

    function closeModal() {
        modal.classList.add("hidden");
        browseBtn.focus();
    }

    browseBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
    });

    // Now that the list and its elements exist, show today's phrase
    updatePhrase();
    // Check once a minute for the new day, rather than every second
    setInterval(updatePhrase, 60 * 1000);

    // ---- Background slideshow -------------------------------------------
    const images = [
        "images/caleb-george-Lh6X0gXu7eg-unsplash.jpg",
        "images/felix-lam-J7fxkhtOqt0-unsplash.jpg",
        "images/damian-markutt-7N998BynnFw-unsplash.jpg",
        "images/wil-stewart-pHANr-CpbYM-unsplash.jpg",
        "images/nasa-V4ZksNimxLk-unsplash.jpg",
        "images/qingbao-meng-01_igFr7hd4-unsplash.jpg"
    ];

    const layers = [
        document.getElementById("bg-layer-0"),
        document.getElementById("bg-layer-1")
    ];

    const SLIDE_SECONDS = 10;
    let activeLayer = 0;
    let imgIndex = 0;

    // Preload so the crossfade never shows a blank frame
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    function showImage(index) {
        const nextLayer = 1 - activeLayer;
        layers[nextLayer].style.backgroundImage = `url("${images[index]}")`;
        layers[nextLayer].classList.add("active");
        layers[activeLayer].classList.remove("active");
        activeLayer = nextLayer;
    }

    if (images.length) {
        showImage(imgIndex);
        setInterval(() => {
            imgIndex = (imgIndex + 1) % images.length;
            showImage(imgIndex);
        }, SLIDE_SECONDS * 1000);
    }
});
