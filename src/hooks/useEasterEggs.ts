import { useState, useEffect } from 'react';

// --- CONFIGURATION ---
const konamiCode = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
const gherkin = 'gherkin';
const figma = 'figma';
const sql = 'sql';
const pokedex = 'pokedex';
const TOTAL_RIDDLES = 10;

const riddles = {
    1: { title: "The Gamer's Salute", description: "Arrow keys dance up, up, down, down, left, right, left, right, then two letters close the spell. What code from the 80s turns this portfolio into a hand-drawn tale?", solved: false, hint: "A classic code from the 8-bit era. If you know, you know." },
    2: { title: "The Pickle's Flash", description: "A testing framework's name, green and crunchy. Type it out and watch the screen get... lunchy?", solved: false, hint: "It's a syntax for behavior-driven development, not a vegetable." },
    3: { title: "The Designer's Balloon", description: "Where UI dreams are made, five letters spell the tool. Type its name and watch a logo float—think it's cool?", solved: false, hint: "A popular design tool's name might make something float." },
    4: { title: "The Data Wizard's Query", description: "Three letters that pull data from tables with care. Type them fast for a popup that queries \"impressed\" visitors there.", solved: false, hint: "Query the database of this portfolio's visitors." },
    5: { title: "Gotta Type 'Em All", description: "Seven letters, a digital encyclopedia of pocket monsters. Say it aloud and hear \"Who's that...?\" from your computer's speakers.", solved: false, hint: "Who's that Pokémon? Type its name to find out." },
    6: { title: "The Console Welcomer", description: "Open the developer's secret chamber (F12). A message awaits: \"Welcome, fellow analyst!\" it says with a wink. (You're looking at it!)", solved: false, hint: "You're looking at it. This one's a freebie." },
    7: { title: "The ASCII Artist", description: "In the same hidden console, a caffeinated drawing appears—or perhaps a writing tool. Made of symbols and characters, never pixels, always cool. (Look up!)", solved: false, hint: "Also a freebie. The art is part of the welcome." },
    8: { title: "The Hiring Function", description: "Still in console-land, a function beckons with 6 letters and 2 humps in its name. Call upon it to send an email of career-seeking fame.", solved: false, hint: "A sleepy giant blocks the path. Maybe you can wake him up with your email?" },
    9: { title: "The Sleepy Roadblock", description: "Check the console again—a wild creature blocks your way! This lazy Pokémon in the code decided to stay. (Scroll down...)", solved: false, hint: "What's that large, sleeping creature in the console?" },
    10: { title: "The Developer's X-Ray", description: "Hold a single letter key (the one that starts \"developer\"). Red outlines reveal the skeleton of every container, whatever the weather.", solved: false, hint: "Try a developer-focused key combination. Maybe Ctrl+Alt+D?" },
};

// --- HELPER FUNCTIONS ---
const getSolvedCount = () => {
    return Object.keys(riddles).filter(riddleId => {
        return localStorage.getItem(`riddle${riddleId}_solved`) === 'true';
    }).length;
};

const markRiddleAsSolved = (id: number) => {
    if (localStorage.getItem(`riddle${id}_solved`) === 'true') return;

    localStorage.setItem(`riddle${id}_solved`, 'true');
    console.log(`%c[TREASURE ${id}/${TOTAL_RIDDLES} FOUND] 🏆 ${riddles[id].title}!`, 'color: gold; font-weight: bold;');
    
    const solvedCount = getSolvedCount();
    if (solvedCount === TOTAL_RIDDLES) {
        displayFinalReward();
    }
};

const displayFinalReward = () => {
    console.log('%c🏆🏆🏆 YOU HAVE FOUND ALL THE SECRETS! 🏆🏆🏆', 'color: gold; font-size: 2em; font-weight: bold;');
    console.log("As a reward, here's a look at the making of this portfolio: [your-link-here]");
    console.log(`
        ___________
       '._==_==_=_.'
       .-\:      /-.
      | (|:.     |) |
       '-|:.     |-'
         \::.    /
          '::. .'
            ) (
          _.' '._
         '-------'
    `);
};

const showQuestBoard = () => {
    console.groupCollapsed('🤫 Psst... A secret quest awaits. Click here to begin.');
    console.log('%c🎮 Secret Portfolio Easter Eggs 🎮', 'font-size: 2em; font-weight: bold;');
    console.log("You've stumbled into the developer's lair. A dusty old terminal flickers to life... It presents you with 10 challenges to unlock the 'Ultimate Treasure'.");

    Object.values(riddles).forEach((riddle, index) => {
        const status = localStorage.getItem(`riddle${index + 1}_solved`) === 'true' ? '✅ SOLVED' : '⬜️ PENDING';
        console.log(`%c${index + 1}. ${riddle.title}`, 'font-weight: bold;', status);
        console.log(riddle.description);
        if (index + 1 === 9) { // Snorlax ASCII
            console.log(`
                             ,-.
                            / \
                           ;_.-'
      ,                    |   |
     /|   .--._            /   |
    | | .-'    '-.     .-./    |
    | |/         \    |   |    |
    \ |          |   /    |    /
     '|          |  |     |   |
      |          |  |     |   |
      |          |  |     |   |
      |          |   \    /   |
      |          |    '-' |   |
      |          |      | |   |
      |          |      | |   |
      |          |      | |   |
      |          |      | |   |
       \         /      | |   |
        \       /       | |   |
         \     /        |/    |
          '-.-'         '     '
            |                 |
            |                 |
            '-----------------'
            `);
        }
    });

    console.log('\nGood luck, treasure hunter!');
    console.groupEnd();
};

// --- WINDOW-LEVEL FUNCTIONS ---
const defineWindowFunctions = () => {
    (window as any).checkProgress = () => {
        console.clear();
        const solvedCount = getSolvedCount();
        console.log(`%c--- QUEST JOURNAL ---`, 'color: yellow; font-size: 1.5em;');
        console.log(`You have found ${solvedCount} out of ${TOTAL_RIDDLES} secrets.`);
        
        Object.entries(riddles).forEach(([id, riddle]) => {
            const status = localStorage.getItem(`riddle${id}_solved`) === 'true' ? '✅ SOLVED' : '⬜️ PENDING';
            console.log(`${id}. ${riddle.title}: ${status}`);
        });
        
        if (solvedCount === TOTAL_RIDDLES) {
            displayFinalReward();
        }
    };

    (window as any).help = () => {
        console.clear();
        showQuestBoard();
    };

    (window as any).hint = (riddleNumber: number) => {
        if (riddles[riddleNumber]) {
            console.log(`%cHint for Riddle #${riddleNumber}:`, 'color: cyan;', riddles[riddleNumber].hint);
        } else {
            console.warn('Invalid riddle number. Try a number between 1 and 10.');
        }
    };

    (window as any).matrix = () => {
        console.clear();
        const canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '9999';
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let columns = Math.floor(width / 20);
        const drops = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = '#0F0';
            ctx.font = '15px monospace';

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                ctx.fillText(text, i * 20, drops[i] * 20);

                if (drops[i] * 20 > height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        setTimeout(() => {
            clearInterval(interval);
            document.body.removeChild(canvas);
        }, 10000);
    };

    (window as any).cucumber = () => {
        console.log('Nope, not that green thing! 🥒');
    };

    (window as any).snorlax = {
        wakeUp: (email: string) => {
            if (!email || !email.includes('@')) {
                console.warn('Snorlax stirs, but goes back to sleep. (Try again with your email address as a string.)');
                return;
            }
            console.log('%cWaking up! Sending that email... 🚀', 'color: green; font-size: 1.2em;');
            window.location.href = `mailto:sumanthudupi858@gmail.com?subject=I woke Snorlax! (Console Easter Egg)&body=My email is: ${email}`;
            markRiddleAsSolved(8);
            markRiddleAsSolved(9);
        }
    };

    window.onerror = (message, source, lineno, colno, error) => {
        console.log('💥 Uh oh! You broke something. Or maybe... you just found an 11th secret? (Probably not, you just broke it.)');
    };

    console.log({ 'portfolioSecrets': { 'level_1': 'You found me!', 'level_2': { 'hint': 'Check the network tab...' } } });
};


// --- THE MAIN HOOK ---
export const useEasterEggs = () => {
  const [keySequence, setKeySequence] = useState<string[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [figmaVisible, setFigmaVisible] = useState(false);
  const [isSketchbookModeActive, setIsSketchbookModeActive] = useState(false);
  const [sketchbookBadgeVisible, setSketchbookBadgeVisible] = useState(false);

  // Initialize on mount
  useEffect(() => {
    const isFirstVisit = localStorage.getItem('hasVisited') === null;

    if (isFirstVisit) {
        console.log('Booting secret_quest.exe...');
        setTimeout(() => console.log('[■■■......] 30%'), 500);
        setTimeout(() => console.log('[■■■■■■...] 70%'), 1000);
        setTimeout(() => console.log('[■■■■■■■■■■] 100%'), 1500);
        setTimeout(() => {
            showQuestBoard();
            console.table({ 'Coffee Consumed': '1,492 cups', 'Lines of Code': 82109, 'Bugs Squashed': '9,001+', 'Sanity': 'Questionable' });
            console.warn('Warning: Solving these riddles may lead to uncontrollable fun.');
            markRiddleAsSolved(6); // Console Welcomer
            markRiddleAsSolved(7); // ASCII Artist
        }, 1600);
        localStorage.setItem('hasVisited', 'true');
    } else {
        const solvedCount = getSolvedCount();
        if (solvedCount < TOTAL_RIDDLES) {
            console.log(`Welcome back, treasure hunter! You've already found ${solvedCount}/${TOTAL_RIDDLES} secrets. Keep going!`);
            showQuestBoard();
        } else {
            (window as any).checkProgress();
        }
    }

    defineWindowFunctions();

    const onKeyDown = (e: KeyboardEvent) => {
        setKeySequence((prev) => [...prev, e.key.toLowerCase()]);

        // Dev mode with Ctrl+Alt+D
        if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'd') {
            document.body.classList.toggle('dev-mode-x-ray');
            console.log('X-Ray vision activated! 🕵️');
            markRiddleAsSolved(10);
        }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Handle key sequences for riddles
  useEffect(() => {
    const sequence = keySequence.join('').toLowerCase();
    const konamiSequence = keySequence.slice(-10);

    console.log('konamiCode:', konamiCode);
    console.log('konamiSequence:', konamiSequence);
    console.log('Comparison:', konamiSequence.toString() === konamiCode.toString());

    if (konamiSequence.toString() === konamiCode.toString()) {
        const newSketchbookModeState = !isSketchbookModeActive;
        setIsSketchbookModeActive(newSketchbookModeState);
        document.body.classList.toggle('sketchbook-mode');
        console.log('Sketchbook mode toggled. Current body classList:', document.body.classList.value);

        if (newSketchbookModeState) {
            setToastMessage("Sketchbook Mode Activated! Time to get creative.");
            const audio = new Audio('/audio/binder-clip.mp3');
            audio.play();
            console.log("'sketchbook-mode' class is now active.");
            setSketchbookBadgeVisible(true);
        } else {
            setToastMessage("Sketchbook Mode Deactivated. Back to reality.");
            const audio = new Audio('/audio/sneeze.mp3');
            audio.play();
            console.log("'sketchbook-mode' class is now inactive.");
            setSketchbookBadgeVisible(false);
        }
        markRiddleAsSolved(1);
        setKeySequence([]);
    }

    if (sequence.includes(gherkin)) {
        document.body.classList.add('gherkin-flash');
        setToastMessage("makes the page go brine-d?");
        setTimeout(() => document.body.classList.remove('gherkin-flash'), 500);
        markRiddleAsSolved(2);
        setKeySequence([]);
    }
    
    if (sequence.includes(figma)) {
        setFigmaVisible(true);
        setTimeout(() => setFigmaVisible(false), 4000);
        markRiddleAsSolved(3);
        setKeySequence([]);
    }

    if (sequence.includes(sql)) {
        setToastMessage('SELECT * FROM portfolio.visitors WHERE status = \'impressed\'');
        markRiddleAsSolved(4);
        setKeySequence([]);
    }

    if (sequence.includes(pokedex)) {
        console.log(`
              ,,,,,,,,,,
            ,' ;  ;  ; ',
           /,,,;,,;,;,,\ 
          |,,,,;,,;,;,,,|
          |,,,,;,,;,;,,,|
          |,,,,;,,;,;,,,|
           \,,,;,,;,;,,/ 
            ',,;,;,;,,' 
              '''''
        `);
        const audio = new Audio('/audio/pokemon-captured.mp3');
        audio.play();
        setTimeout(() => console.log("It's Sumanth!"), 2000);
        markRiddleAsSolved(5);
        setKeySequence([]);
    }

    if (keySequence.length > 20) {
        setKeySequence(keySequence.slice(-10));
    }
  }, [keySequence, isSketchbookModeActive]);

  // Add CSS for new effects
  useEffect(() => {
    const styleId = 'easter-egg-styles';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
        console.log('Created and appended style element with ID:', styleId);
    }

    styleElement.innerHTML = 
        `.sketchbook-mode * {
            font-family: 'Permanent Marker', 'Comic Sans MS', 'Chalkduster', cursive !important;
            background-color: #fff8dc !important; /* Lighter, creamier background */
            border-color: #8b4513 !important; /* Darker, more prominent border */
            color: #4a2c2a !important; /* Darker text for contrast */
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); /* Add a subtle shadow */
            transition: all 0.3s ease-in-out; /* Smooth transitions */
        }
        .sketchbook-mode {
            background-color: #fff8dc;
            border: 8px dashed #8b4513; /* Dashed border for a hand-drawn feel */
            box-shadow: 5px 5px 15px rgba(0,0,0,0.4); /* More pronounced shadow */
            filter: sepia(0.5) saturate(1.5) contrast(1.1) brightness(1.2); /* Stronger filter */
            animation: wobble 5s infinite alternate ease-in-out; /* Subtle wobble animation */
        }
        @keyframes wobble {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(0.5deg); }
            50% { transform: rotate(-0.5deg); }
            75% { transform: rotate(0.3deg); }
            100% { transform: rotate(0deg); }
        }
        .gherkin-flash {
            animation: flash-green 0.5s;
        }
        @keyframes flash-green {
            0% { background-color: lightgreen; }
            100% { background-color: transparent; }
        }
        .dev-mode-x-ray * {
            outline: 1px solid red !important;
        }
    
`;
    console.log('Style element innerHTML set for:', styleId, 'Content length:', styleElement.innerHTML.length);
  }, []);

  return { toastMessage, setToastMessage, figmaVisible, isSketchbookModeActive, sketchbookBadgeVisible };
};