document.addEventListener('DOMContentLoaded', () => {

            // --- Case Study Data ---
            // CLIENT INFO REMOVED from project-5
            const caseStudies = {
                // --- PERSONAL PROJECTS ---
                'project-1': {
                    title: 'Sourdough Starter Tracker',
                    hook: 'A simple PWA to manage feeding schedules for my unruly starter, "Bread Pitt".',
                    img: 'https://placehold.co/800x400/84cc16/ffffff?text=Sourdough+Tracker',
                    context: {
                        role: "Baker / Designer / Engineer",
                        team: "Just me and Bread Pitt",
                        timeline: "One weekend",
                        toolkit: "PWA, JavaScript, localStorage" // UPDATED: Point #35
                    },
                    problem: { // ACT I
                        title: "ACT I: The Problem (The Sticky Situation)",
                        body: "My sourdough starter, 'Bread Pitt', was needy. I kept forgetting its feeding schedule. Sticky notes were everywhere. My kitchen looked like a scene from *A Beautiful Mind*. I needed a simple, digital tool that would just tell me what to do and when."
                    },
                    investigation: { // ACT II
                        title: "ACT II: The Process (The Floury Mess)",
                        body: "I didn't need a complex app. I needed a button. My 'user research' was me, standing in my kitchen, covered in flour, wishing for a simpler way. The 'Aha!' moment was realizing this should be a Progressive Web App (PWA) so it would feel like a native app on my phone, but with zero installation."
                    },
                    solution: { // ACT III
                        title: "ACT III: The Solution (The Rise)",
                        body: "A super-minimalist single-page app. It has one big button: 'I just fed Bread Pitt.' When clicked, it resets a 12-hour timer. The background color changes based on the starter's 'hunger' level (Green = Happy, Yellow = Hungry, Red = STARVING). It uses localStorage to persist the timer and sends a browser notification when it's time to feed."
                    },
                    results: { // EPILOGUE
                        title: "EPILOGUE: The Impact (The Perfect Loaf)",
                        // UPDATED: Point #36 (Elaborate Results)
                        body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Bread Pitt is thriving and my bread is 10% more consistent.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Mastered PWA fundamentals, including browser notifications and localStorage.</li></ul>"
                    },
                    reflection: {
                        title: "The Reflection", // UPDATED: Point #34 (Standardize Title)
                        body: "This project was a joy. It's a reminder that the 'simplest' tools can be the most delightful. It's also proof that I can (and will) apply complex problem-solving (PWA, localStorage, notifications) to even the silliest of personal problems."
                    }
                },
                'project-2': {
                    title: 'Vinyl Album Scrambler',
                    hook: "Can't decide what to spin? This app picks for me. (It's always The Smiths).",
                    img: 'https://placehold.co/800x400/ec4899/ffffff?text=Vinyl+Scrambler',
                    context: {
                        role: "DJ / Developer",
                        team: "Me, myself, and my record collection",
                        timeline: "One evening",
                        toolkit: "JavaScript, JSON, Discogs API" // UPDATED: Point #35
                    },
                    problem: {
                        title: "ACT I: The Problem (Analysis Paralysis)",
                        body: "I have a decent vinyl collection, but I'm lazy. I'd stand in front of it, paralyzed by choice, and end up just putting on 'The Queen is Dead' for the 500th time. I needed a way to randomize my *physical* collection."
                    },
                    investigation: {
                        title: "ACT II: The Process (The Digital Crate Dig)",
                        body: "I first scraped my Discogs collection into a JSON file. This was the 'creative mess'—just a giant list of albums. I realized I didn't just want a random album. I wanted *serendipity*. I needed to be able to filter by 'vibe' (e.g., 'Chill Sunday', 'Party', 'Sad Boy Hours')."
                    },
                    solution: {
                        title: "ACT III: The Solution (The Needle Drop)",
                        body: "A single-page app built with simple JS. It has a few 'vibe' buttons. You click one, and it fetches my JSON, filters by the vibe tag, and then 'flips' through album covers with a satisfying animation before landing on one. It's pure, unnecessary, delightful digital-analog interaction."
                    },
                    results: {
                        title: "EPILOGUE: The Impact",
                        // UPDATED: Point #37 (Elaborate Results)
                        body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> I listen to a 30% wider range of my record collection.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Practiced API data scraping and simple DOM-based animations.</li></ul>"
                    },
                    reflection: {
                        title: "The Reflection",
                        body: "This was a perfect exercise in 'design for delight.' It serves no productive purpose, which is why I love it. It's a tiny piece of digital art that solves a tiny, personal problem in a fun, tactile way."
                    }
                },
                'project-3': {
                    title: 'AI Tupperware Picker',
                    hook: 'Using ML to (try to) solve my "which container" problem. A noble failure.',
                    img: 'https://placehold.co/800x400/0d9488/ffffff?text=AI+Tupperware+Picker',
                    context: {
                        role: "Data Scientist / Comedian",
                        team: "My leftover curry vs. The Machine",
                        timeline: "Two weeks of confusion",
                        toolkit: "Python, MobileNet, TensorFlow.js" // UPDATED: Point #35
                    },
                    problem: {
                        title: "ACT I: The Problem (The Container Conundrum)",
                        body: "I have a joke in my bio about guessing the right Tupperware. It's not really a joke. I'm terrible at it. I always pick one that's way too big or comically small. My hypothesis: could I use a simple ML model to help?"
                    },
                    investigation: { // ACT II
                        title: "ACT II: The Process (The 'Data' Collection)", // UPDATED: Point #32 (Bug Fix)
                        body: "This was the absurd part. For two weeks, I took pictures of my leftovers *before* and *after* container-ing them. I logged the food type, approximate volume (e.g., 'half a bowl of soup'), and the 'correct' container I eventually used. My 'dataset' was a mess of 30 photos and a very judgmental CSV file."
                    },
                    solution: { // ACT III
                        title: "ACT III: The Solution (The 'Intelligent' Suggestion)", // UPDATED: Point #33 (Bug Fix)
                        body: "I tried to use a simple image classification model (using a pre-trained model like MobileNet) to identify 'type' of leftover (e.g., 'liquid', 'solid', 'pile') and 'volume'. The app would then suggest, 'This looks like a job for the 8oz round container.' The result? It was *hilariously* wrong. It suggested my largest glass container for three lonely olives."
                    },
                    results: { // EPILOGUE
                        title: "EPILOGUE: The Impact (The Humbling)",
                        // UPDATED: Point #38 (Elaborate Results)
                        body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> A hilarious failure that correctly identifies leftovers 15% of the time.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> A profound, hands-on lesson in 'garbage in, garbage out' and the data-hungry nature of ML.</li></ul>"
                    },
                    reflection: {
                        title: "The Reflection",
                        body: "This is my favorite 'project.' It shows my willingness to experiment, my technical curiosity (I *did* deploy a model!), and my ability to find value (and humor) in failure. I'm a better analyst because I know what *doesn't* work, and this project is the funniest proof I have."
                    }
                },
                
                // --- NEW: PROFESSIONAL PROJECTS (Point #3) ---
                'project-4': {
                    title: 'Designing a Scalable EHS Platform',
                    hook: 'How we built a scalable EHS platform that cut client audit prep time by 40%.',
                    img: 'https://placehold.co/800x400/06b6d4/ffffff?text=EHS+Platform+Dashboard+(Anonymized)',
                    context: {
                        role: "Lead Business Analyst",
                        team: "7-member cross-functional squad",
                        timeline: "6 Months",
                        toolkit: "Jira, Gherkin, Figma, SQL, Power BI"
                    },
                    problem: {
                        title: "ACT I: The Problem (The Audit Nightmare)",
                        body: "Our clients were drowning in spreadsheets and disparate systems for Environmental, Health, and Safety (EHS) tracking. Preparing for audits was a manual, month-long nightmare, and they had zero real-time visibility into their compliance status. They needed a single, scalable source of truth."
                    },
                    investigation: {
                        title: "ACT II: The Process (The Discovery & Design)",
                        body: "I led discovery workshops with stakeholders (from plant managers to C-suite execs) to map *hundreds* of processes. We found the biggest pains: Incident Management and Audit Tracking. I partnered with our UX team to prototype new, streamlined workflows in Figma, focusing on 'at-a-glance' dashboards. I translated these into over 50 Gherkin user stories for our dev squad, defining clear acceptance criteria for complex GRI and SASB compliance logic."
                    },
                    solution: {
                        title: "ACT III: The Solution (The Single Source of Truth)",
                        body: "We delivered a modular EHS platform with a centralized dashboard. I designed the Power BI integration specs, allowing real-time data from incident forms to populate compliance widgets. My Gherkin stories ensured that complex logic (like OSHA recordability) was built correctly the first time, and I managed the UAT plan in Zephyr, resulting in a 98% pass rate on first execution."
                    },
                    results: {
                        title: "EPILOGUE: The Impact",
                        body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Reduced client audit preparation time by an average of <strong>40%</strong>.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Improved real-time compliance visibility from ~20% to <strong>95%</strong>.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> Solidified my ability to translate complex, high-stakes regulatory requirements (ESG/EHS) into actionable, testable user stories that developers love.</li></ul>"
                    },
                    reflection: {
                        title: "The Reflection",
                        body: "This project proved that good BA work isn't just about 'gathering requirements'—it's about empathy-driven design. By focusing on the *human* frustration of the plant manager, we built a tool that wasn't just compliant, but genuinely useful. It cemented my passion for the ESG/EHS domain."
                    }
                },
                // CLIENT INFO REMOVED
                'project-5': {
                    title: 'Enterprise QMS Modules',
                    hook: 'Streamlining complex lab test data workflows for global industry leaders.',
                    img: 'https://placehold.co/800x400/3b82f6/ffffff?text=QMS+Workflow+(Anonymized)',
                    context: {
                        role: "Integration BA",
                        team: "Client Stakeholders, Dev Squad",
                        timeline: "Ongoing",
                        toolkit: "Azure DevOps, Gherkin, Postman, SQL"
                    },
                    problem: {
                        title: "ACT I: The Problem (The Data Bottleneck)",
                        body: "Global automotive leaders have intense Quality Management (QMS) standards. Their lab test data for new parts (PPAP) was getting stuck in siloed systems. A 'non-conformity' issue in one plant wasn't visible to an engineering team in another. This was slow, expensive, and risky."
                    },
                    investigation: {
                        title: "ACT II: The Process (Speaking API & Gherkin)",
                        body: "My job was to be the translator. I dove deep with client-side engineers to understand their *exact* data workflow. I then documented the REST API specifications in Postman and Swagger, defining every endpoint and payload needed to connect their systems to ours. For the front-end modules, I wrote Gherkin stories that read like plain English but contained all the business logic: 'Given I am a Quality Engineer, When I upload a PPAP document, Then the system should...'"
                    },
                    solution: {
                        title: "ACT III: The Solution (The Synchronized Workflow)",
                        body: "We created automated, API-driven workflows for PPAP and Non-Conformity modules. The Gherkin stories I wrote became the 'single source of truth' for devs and QA, drastically reducing ambiguity. The Postman collections I built became the core of our integration testing, ensuring data flowed correctly from day one."
                    },
                    results: {
                        title: "EPILOGUE: The Impact",
                        body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Automated data syncing for PPAP and product lifecycle, saving an estimated <strong>200+</strong> man-hours per month per client.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> Created a shared, unambiguous language (Gherkin) that aligned business, dev, and QA teams.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> How to reverse-engineer complex, legacy enterprise systems and write crystal-clear API documentation and user stories that bridge the gap.</li></ul>"
                    },
                    reflection: {
                        title: "The Reflection",
                        body: "This project was all about deep, technical empathy. I had to understand the world of a quality engineer *and* the world of a REST API. I learned that 'Gherkin' isn't just a syntax; it's a tool for building shared understanding. I found I love making the highly technical perfectly clear."
                    }
                },
                'project-6': {
                    title: 'AI/ML in Compliance',
                    hook: 'Spearheading a predictive AI initiative to improve early risk detection by 20%.',
                    img: 'https://placehold.co/800x400/a855f7/ffffff?text=Predictive+Risk+Model+(Concept)',
                    context: {
                        role: "BA / Data Analyst",
                        team: "Data Science, Product Management",
                        timeline: "3 Months (Analysis Phase)",
                        toolkit: "SQL, Power BI, Python (Conceptual), Jira"
                    },
                    problem: {
                        title: "ACT I: The Problem (Reacting vs. Predicting)",
                        body: "Our clients were great at *reacting* to compliance issues (e.g., an incident happened, so we log it). But they had no way of *predicting* them. They had terabytes of historical data, but it was just sitting there. The C-suite asked, 'Can you use AI to tell us where the next risk is?'"
                    },
                    investigation: {
                        title: "ACT II: The Process (Finding the Signal in the Noise)",
                        body: "I was tasked with the analysis to see if this was even possible. I spent a month in SQL, querying and joining data from Audit, Incident, and Risk modules. I was looking for patterns. I found a strong correlation between 'near-miss' reports and future recordable incidents. I used Power BI to visualize this, proving to stakeholders that a predictive model was viable."
                    },
                    solution: {
                        title: "ACT III: The Solution (The AI Business Case)",
                        body: "I didn't build the model, but I built the *case* for it. I defined the business requirements for an AI/ML feature. I specified the data inputs (e.g., 'near-miss frequency', 'audit scores') and the desired output (a 'Facility Risk Score'). This analysis and visualization directly led to the project getting greenlit and staffed with a full data science team."
                    },
                    results: {
                        title: "EPILOGUE: The Impact",
                        body: "<ul><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> My analysis and business case directly led to a <strong>$500k</strong> strategic initiative being funded.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Result:</strong> The resulting (in-progress) model is projected to improve early risk detection by <strong>20%</strong>.</li><li class='!pl-8 !mb-2 before:content-['✓'] before:text-green-600 before:absolute before:left-0 before:top-1'><strong>Learning:</strong> How to use my data science background to act as a bridge, translating a vague business goal ('use AI') into a specific, data-driven, and actionable project for a technical team.</li></ul>"
                    },
                    reflection: {
                        title: "The Reflection",
                        body: "This project was my favorite kind of work. It combined my skills in data science (SQL, Power BI, predictive analytics) with my core BA role (stakeholder management, requirements definition). I wasn't just taking notes; I was finding the story in the data and using it to build a compelling case for innovation."
                    }
                }
            };

            // --- Modal Elements ---
            const modal = document.getElementById('modal');
            const modalContentTarget = document.getElementById('modal-content-target');
            const closeModalBtn = document.getElementById('close-modal');
            const projectCards = document.querySelectorAll('.project-card');
            
            // --- NEW: Theme Toggle ---
            const themeToggleBtn = document.getElementById('theme-toggle');

            // --- NEW: Theme Init Function ---
            const initTheme = () => {
                // 1. Check localStorage
                const userTheme = localStorage.getItem('theme');
                
                // 2. Check system preference
                const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (userTheme === 'light') {
                    // User explicitly chose light
                    document.documentElement.classList.remove('dark');
                } else if (userTheme === 'dark') {
                    // User explicitly chose dark
                    document.documentElement.classList.add('dark');
                } else if (systemIsDark) {
                    // No user choice, but system is dark
                    document.documentElement.classList.add('dark');
                } else {
                    // Default to dark as per user request
                     document.documentElement.classList.add('dark');
                }
            };

            // --- NEW: Theme Toggle Click Listener ---
            themeToggleBtn.addEventListener('click', () => {
                // Toggle the 'dark' class on <html>
                const isDark = document.documentElement.classList.toggle('dark');
                // Save the user's choice to localStorage
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            });


            // --- Open Modal Function ---
            const openModal = (projectId) => {
                const data = caseStudies[projectId];
                if (!data) return;

                // Build the "Visual Essay" from our data
                // NEW: Added [data-animate] for stagger
                // LIGHT MODE FIX: Added explicit text-stone-800, text-stone-700 colors for light mode
                modalContentTarget.innerHTML = `
                    <div class="p-8 md:p-12">
                        <img src="${data.img}" alt="${data.title}" class="w-full rounded-md mb-6 shadow-md" data-animate>
                        <h2 class="font-display text-4xl font-bold mb-4 text-stone-800 dark:text-stone-100" data-animate>${data.title}</h2>
                        <p class="font-hand text-xl text-stone-600 mb-6 dark:text-stone-400" data-animate>${data.hook}</p>
                        
                        <!-- UPDATED: Point #35 (grid-cols-4) -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 text-center" data-animate>
                            <div class="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                                <h4 class="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Role</h4>
                                <p class="font-body font-medium text-stone-700 dark:text-stone-200">${data.context.role}</p>
                            </div>
                            <div class="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                                <h4 class="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Team</h4>
                                <p class="font-body font-medium text-stone-700 dark:text-stone-200">${data.context.team}</p>
                            </div>
                            <div class="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                                <h4 class="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Timeline</h4>
                                <p class="font-body font-medium text-stone-700 dark:text-stone-200">${data.context.timeline}</p>
                            </div>
                             <!-- UPDATED: Point #35 -->
                            <div class="bg-stone-100 dark:bg-stone-700 p-4 rounded-md">
                                <h4 class="font-mono text-sm uppercase text-stone-500 dark:text-stone-400 mb-1">Toolkit</h4>
                                <p class="font-body font-medium text-stone-700 dark:text-stone-200">${data.context.toolkit}</p>
                            </div>
                        </div>

                        <div class="prose prose-lg max-w-none space-y-6 prose-manifesto" data-animate>
                            <div>
                                <h3 class="font-display text-2xl mb-2 about-section-header">${data.problem.title}</h3>
                                <p>${data.problem.body}</p>
                            </div>
                            <div>
                                <h3 class="font-display text-2xl mb-2 about-section-header">${data.investigation.title}</h3>
                                <p>${data.investigation.body}</p>
                            </div>
                            <div>
                                <h3 class="font-display text-2xl mb-2 about-section-header">${data.solution.title}</h3>
                                <p>${data.solution.body}</p>
                            </div>
                            <div>
                                <h3 class="font-display text-2xl mb-2 about-section-header">${data.results.title}</h3>
                                <!-- UPDATED: Changed from <p> to <div> to support <ul> -->
                                <!-- LIGHT MODE FIX: Added explicit text-stone-700 for light mode -->
                                <div class="font-body text-stone-700 dark:text-stone-300">${data.results.body}</div>
                            </div>
                            <div>
                                <h3 class="font-display text-2xl mb-2 about-section-header">${data.reflection.title}</h3>
                                <p>${data.reflection.body}</p>
                            </div>
                        </div>
                    </div>
                `;
                
                // Show the modal
                modal.classList.remove('invisible', 'opacity-0');
                modal.classList.add('is-open');
                
                // NEW: Part 3.8 - "Depth of Field" & "Scroll Jank" fix
                const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = `${scrollbarWidth}px`;
                document.getElementById('main-content').classList.add('modal-open');

                // NEW: Part 4.4 - Trigger stagger
                staggerModalContent();
            };

            // --- Close Modal Function ---
            const closeModal = () => {
                // NEW: Part 4.4 - Reverse stagger
                reverseStaggerModalContent(() => {
                    modal.classList.add('invisible', 'opacity-0');
                    modal.classList.remove('is-open');
                    
                    // NEW: Part 3.8 - "Depth of Field" & "Scroll Jank" fix
                    document.body.style.overflow = 'auto'; // Unlock scrolling
                    document.body.style.paddingRight = '0';
                    document.getElementById('main-content').classList.remove('modal-open');
                    
                    // Clear content for next open
                    setTimeout(() => {
                        modalContentTarget.innerHTML = '';
                    }, 300); // Wait for animation
                });
            };
            
            // --- NEW: Part 4.4 / 4.7 - Modal Stagger Functions ---
            const staggerModalContent = () => {
                const elements = modalContentTarget.querySelectorAll('[data-animate]');
                elements.forEach((el, index) => {
                    const delay = index * 80; // 80ms between each element
                    setTimeout(() => {
                        el.style.opacity = '1';
                        // UPDATED: Part 4.9 - Swoop animation
                        el.style.transform = 'translateY(0) translateX(0)';
                    }, delay);
                });
            };
            
            const reverseStaggerModalContent = (callback) => {
                const elements = Array.from(modalContentTarget.querySelectorAll('[data-animate]')).reverse();
                if (elements.length === 0) {
                    callback();
                    return;
                }
                elements.forEach((el, index) => {
                    const delay = index * 40;
                    setTimeout(() => {
                        el.style.opacity = '0';
                        // UPDATED: Part 4.9 - Swoop animation
                        el.style.transform = 'translateY(20px) translateX(-10px)';
                        
                        // If this is the last element, trigger the callback
                        if (index === elements.length - 1) {
                            setTimeout(callback, delay + 50); // Wait for animation to finish
                        }
                    }, delay);
                });
            };

            // --- NEW: File Cabinet Tab Logic ---
            const initFileCabinet = () => {
                const tabButtons = document.querySelectorAll('.tab-button');
                const tabPanels = document.querySelectorAll('.tab-panel');

                tabButtons.forEach(button => {
                    button.addEventListener('click', () => {
                        // UPDATED: Use full ID from data-tab for robustness (Point #27)
                        const targetTabId = button.dataset.tab; 

                        // Deactivate all
                        tabButtons.forEach(btn => btn.classList.remove('active'));
                        tabPanels.forEach(panel => panel.classList.remove('active'));

                        // Activate clicked
                        button.classList.add('active');
                        const targetPanel = document.getElementById(targetTabId);
                        if (targetPanel) {
                            targetPanel.classList.add('active');
                        }
                    });
                });
            };

            // --- NEW: Set Current Year in Footer (Point #46) ---
            const initFooterYear = () => {
                const yearSpan = document.getElementById('current-year');
                if (yearSpan) {
                    yearSpan.textContent = new Date().getFullYear();
                }
            };

            // --- Event Listeners ---
            projectCards.forEach(card => {
                card.addEventListener('click', () => {
                    openModal(card.dataset.project);
                });
            });

            closeModalBtn.addEventListener('click', closeModal);
            
            // NEW: CV Button Jiggle on Click
            const cvButton = document.getElementById('cv-button');
            cvButton.addEventListener('click', (e) => {
                // Add jiggle class
                cvButton.classList.add('jiggle-click');
                // Remove class after animation finishes
                setTimeout(() => {
                    cvButton.classList.remove('jiggle-click');
                }, 400); // Match animation duration
            });

            // Close modal on outside click
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Close modal with 'Escape' key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.classList.contains('is-open')) {
                    closeModal();
                }
            });

            // --- Nav Link Smooth Scrolling ---
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    // Don't hijack the modal links
                    if (this.closest('.modal')) return; 

                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        // NEW: Check for skip link
                        // Manually set focus for skip link
                        if (targetId === '#main-content') {
                            targetElement.setAttribute('tabindex', '-1');
                            targetElement.focus();
                        }
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // --- P3: "Living Desktop" Mouse Parallax ---
            const initMouseParallax = () => {
                // Only run this on devices with a fine-grained pointer (a mouse)
                if (!window.matchMedia('(pointer: fine)').matches) {
                    return;
                }

                window.addEventListener('mousemove', (e) => {
                    // Get mouse position relative to center of screen (for parallax)
                    const x = e.clientX - window.innerWidth / 2;
                    const y = e.clientY - window.innerHeight / 2;
                    document.body.style.setProperty('--mouse-x', x);
                    document.body.style.setProperty('--mouse-y', y);
                    
                    // Get cursor position in pixels (for old cursor light)
                    document.body.style.setProperty('--cursor-x', e.clientX + 'px');
                    document.body.style.setProperty('--cursor-y', e.clientY + 'px');

                    // NEW: Get cursor position in percentage (for new Part 3.2 light)
                    const x_pct = (e.clientX / window.innerWidth) * 100;
                    const y_pct = (e.clientY / window.innerHeight) * 100;
                    document.body.style.setProperty('--mouse-x-pct', `${x_pct}%`);
                    document.body.style.setProperty('--mouse-y-pct', `${y_pct}%`);
                });
            };

            // --- P4: "Cinematic Flow" Scroll Animations ---
            const initScrollAnimations = () => {
                const animatedElements = document.querySelectorAll('.fade-in-up');
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            // Stop observing once it's visible
                            observer.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1 // Trigger when 10% of the element is visible
                });

                animatedElements.forEach(el => {
                    observer.observe(el);
                });
                
                // NEW: Part 6.1 - Image loading class
                const imageElements = document.querySelectorAll('.project-image');
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.addEventListener('load', () => {
                                entry.target.classList.remove('animate-pulse');
                            }, { once: true });
                            imageObserver.unobserve(entry.target);
                        }
                    });
                }, {
                    threshold: 0.1
                });
                imageElements.forEach(el => {
                    imageObserver.observe(el);
                });
            };

            // --- NEW: Scroll Interaction for Background ---
            const initScrollInteraction = () => {
                window.addEventListener('scroll', () => {
                    // Update a CSS variable with the scroll position
                    document.body.style.setProperty('--scroll-y', window.scrollY);
                }, { passive: true }); // Performance optimization
            };

            // --- NEW: Click Ripple Interaction ---
            const initClickRipple = () => {
                const rippleContainer = document.getElementById('click-ripple-container');
                document.body.addEventListener('click', (e) => {
                    // Don't ripple on interactive elements
                    if (e.target.closest('a, button, .project-card, .modal-content')) {
                        return;
                    }
                    
                    // NEW: Don't ripple if modal is open
                    if (modal.classList.contains('is-open')) {
                        return;
                    }

                    const ripple = document.createElement('div');
                    ripple.className = 'ripple';
                    ripple.style.width = ripple.style.height = '50px';
                    // Center the ripple on the cursor
                    ripple.style.left = (e.clientX - 25) + 'px';
                    ripple.style.top = (e.clientY - 25) + 'px';
                    
                    rippleContainer.appendChild(ripple);

                    // Clean up the ripple element after the animation
                    setTimeout(() => {
                        ripple.remove();
                    }, 600); // Must match animation duration
                });
            };


            // --- Initialize everything ---
            initTheme(); // <-- NEW: Run theme logic on load
            initMouseParallax();
            initScrollAnimations();
            initScrollInteraction(); // Initialize new scroll interaction
            initClickRipple(); // Initialize new click interaction
            initFileCabinet(); // <-- NEW: Initialize file cabinet
            initFooterYear(); // <-- NEW: Initialize footer year
            
            // NEW: Part 6.1 - Hide preloader on window.load
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', () => {
                setTimeout(() => { // Add a tiny delay so it doesn't flash
                    preloader.style.opacity = '0';
                    preloader.style.visibility = 'hidden';
                    setTimeout(() => preloader.remove(), 500); // Remove from DOM
                }, 300);
            });

        });