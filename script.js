/**
 * YOUTUBE HOMEPAGE CLONE — NEXUS STREAM ENGINE
 * Crimson · Indigo · MediumOrchid · MidnightBlue Edition
 * Features: 20 Video Objects, animated counters, theme transitions,
 * glassmorphism sidebar, chip filters, mic overlays, notification bell, mini-player.
 */

// ==========================================================================
// 1. JAVASCRIPT DATA STRUCTURE (20 richly detailed video objects)
// ==========================================================================
const VIDEOS_DATA = [
    // ═══════════════════════════════════════════════
    //  TELUGU SONGS (4 videos)
    // ═══════════════════════════════════════════════
    {
        id: 1,
        title: "Buttabomma Full Video Song | Ala Vaikunthapurramuloo | Allu Arjun, Pooja Hegde | Thaman S",
        channel: "Aditya Music",
        channelAvatar: "linear-gradient(135deg, #dc143c, #8b0000)",
        thumbnailEmoji: "🎵",
        thumbnailGradient: "linear-gradient(135deg, #4b0082, #8b008b)",
        thumbnailUrl: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=640",
        views: 890000000,
        uploadedAgo: "4 years ago",
        duration: "3:26",
        isLive: false,
        isVerified: true,
        category: "telugu"
    },
    {
        id: 2,
        title: "Samajavaragamana Full Video Song | Ala Vaikunthapurramuloo | Allu Arjun | Sid Sriram | Thaman S",
        channel: "Aditya Music",
        channelAvatar: "linear-gradient(135deg, #dc143c, #8b0000)",
        thumbnailEmoji: "🎶",
        thumbnailGradient: "linear-gradient(135deg, #191970, #4b0082)",
        thumbnailUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=640",
        views: 450000000,
        uploadedAgo: "4 years ago",
        duration: "4:02",
        isLive: false,
        isVerified: true,
        category: "telugu"
    },
    {
        id: 3,
        title: "Inkem Inkem Inkem Kaavaale Full Video Song | Geetha Govindam | Vijay Devarakonda | Sid Sriram",
        channel: "Geetha Arts",
        channelAvatar: "linear-gradient(135deg, #ba55d3, #8b008b)",
        thumbnailEmoji: "💕",
        thumbnailGradient: "linear-gradient(135deg, #8b0000, #dc143c)",
        thumbnailUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=640",
        views: 720000000,
        uploadedAgo: "5 years ago",
        duration: "4:15",
        isLive: false,
        isVerified: true,
        category: "telugu"
    },
    {
        id: 4,
        title: "Srivalli Full Video Song | Pushpa | Allu Arjun, Rashmika | Javed Ali | DSP | Sukumar",
        channel: "T-Series Telugu",
        channelAvatar: "linear-gradient(135deg, #dc143c, #b22222)",
        thumbnailEmoji: "🌺",
        thumbnailGradient: "linear-gradient(135deg, #191970, #000080)",
        thumbnailUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=640",
        views: 650000000,
        uploadedAgo: "3 years ago",
        duration: "3:54",
        isLive: false,
        isVerified: true,
        category: "telugu"
    },

    // ═══════════════════════════════════════════════
    //  STUDY & CODING (4 videos)
    // ═══════════════════════════════════════════════
    {
        id: 5,
        title: "Lofi Hip Hop Radio 📚 Beats to Study / Relax / Focus [24/7 Live Stream]",
        channel: "Lofi Girl",
        channelAvatar: "linear-gradient(135deg, #4169e1, #191970)",
        thumbnailEmoji: "📚",
        thumbnailGradient: "linear-gradient(135deg, #191970, #4b0082)",
        thumbnailUrl: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=640",
        views: 15000000,
        uploadedAgo: "2,345 watching",
        duration: "LIVE",
        isLive: true,
        isVerified: true,
        category: "study"
    },
    {
        id: 6,
        title: "Complete DSA in Java | Data Structures & Algorithms Full Course | Placement Preparation 2025",
        channel: "Apna College",
        channelAvatar: "linear-gradient(135deg, #ba55d3, #6a0dad)",
        thumbnailEmoji: "💻",
        thumbnailGradient: "linear-gradient(135deg, #191970, #4b0082)",
        thumbnailUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=640",
        views: 28000000,
        uploadedAgo: "1 year ago",
        duration: "12:30:00",
        isLive: false,
        isVerified: true,
        category: "study"
    },
    {
        id: 7,
        title: "Physics Wallah GATE CS Full Course | Operating Systems + DBMS + Computer Networks Playlist",
        channel: "Physics Wallah",
        channelAvatar: "linear-gradient(135deg, #6a0dad, #4b0082)",
        thumbnailEmoji: "🎓",
        thumbnailGradient: "linear-gradient(135deg, #4b0082, #191970)",
        thumbnailUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=640",
        views: 8500000,
        uploadedAgo: "6 months ago",
        duration: "8:45:22",
        isLive: false,
        isVerified: true,
        category: "study"
    },
    {
        id: 8,
        title: "JEE / NEET Motivation + Study With Me ☕ Pomodoro Timer | 10 Hour Ambient Study Session",
        channel: "Study Vibes",
        channelAvatar: "linear-gradient(135deg, #ba55d3, #8b008b)",
        thumbnailEmoji: "⏱️",
        thumbnailGradient: "linear-gradient(135deg, #1a0033, #191970)",
        thumbnailUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=640",
        views: 4200000,
        uploadedAgo: "3 months ago",
        duration: "10:00:00",
        isLive: false,
        isVerified: false,
        category: "study"
    },

    // ═══════════════════════════════════════════════
    //  MUSIC (4 videos)
    // ═══════════════════════════════════════════════
    {
        id: 9,
        title: "Taylor Swift - Anti-Hero (Official Music Video) | The Eras Tour Hits Compilation 2025",
        channel: "Taylor Swift",
        channelAvatar: "linear-gradient(135deg, #dc143c, #8b0000)",
        thumbnailEmoji: "🌟",
        thumbnailGradient: "linear-gradient(135deg, #8b0000, #4b0082)",
        thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=640",
        views: 480000000,
        uploadedAgo: "2 years ago",
        duration: "3:21",
        isLive: false,
        isVerified: true,
        category: "music"
    },
    {
        id: 10,
        title: "The Weeknd - Save Your Tears (Official Video) | Ultra HD 4K Remaster",
        channel: "The Weeknd",
        channelAvatar: "linear-gradient(135deg, #191970, #4b0082)",
        thumbnailEmoji: "🎤",
        thumbnailGradient: "linear-gradient(135deg, #0d0221, #4b0082)",
        thumbnailUrl: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=640",
        views: 310000000,
        uploadedAgo: "3 years ago",
        duration: "3:36",
        isLive: false,
        isVerified: true,
        category: "music"
    },
    {
        id: 12,
        title: "Classical Piano Masterworks — Chopin, Beethoven, Debussy | 3-Hour Relaxation Playlist",
        channel: "Musopen",
        channelAvatar: "linear-gradient(135deg, #6a0dad, #4b0082)",
        thumbnailEmoji: "🎹",
        thumbnailGradient: "linear-gradient(135deg, #4b0082, #8b0000)",
        thumbnailUrl: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=640",
        views: 22000000,
        uploadedAgo: "8 months ago",
        duration: "3:02:18",
        isLive: false,
        isVerified: false,
        category: "music"
    },

    // ═══════════════════════════════════════════════
    //  GAMING (4 videos)
    // ═══════════════════════════════════════════════
    {
        id: 13,
        title: "GTA VI — Official Gameplay Reveal Trailer | Rockstar Games 2025 Deep Dive",
        channel: "Rockstar Games",
        channelAvatar: "linear-gradient(135deg, #dc143c, #8b0000)",
        thumbnailEmoji: "🎮",
        thumbnailGradient: "linear-gradient(135deg, #0a0018, #191970)",
        thumbnailUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=640",
        views: 180000000,
        uploadedAgo: "6 months ago",
        duration: "3:47",
        isLive: false,
        isVerified: true,
        category: "gaming"
    },
    {
        id: 14,
        title: "Minecraft Hardcore 100 Days | I Survived 100 Days In The Nether ONLY Challenge",
        channel: "Luke TheNotable",
        channelAvatar: "linear-gradient(135deg, #ba55d3, #6a0dad)",
        thumbnailEmoji: "⛏️",
        thumbnailGradient: "linear-gradient(135deg, #4b0082, #191970)",
        thumbnailUrl: "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=640",
        views: 74000000,
        uploadedAgo: "1 year ago",
        duration: "31:05",
        isLive: false,
        isVerified: true,
        category: "gaming"
    },
    {
        id: 15,
        title: "Elden Ring: Shadow of the Erdtree — Full DLC Walkthrough | All Bosses No Hit Run",
        channel: "Let Me Solo Her",
        channelAvatar: "linear-gradient(135deg, #dc143c, #4b0082)",
        thumbnailEmoji: "⚔️",
        thumbnailGradient: "linear-gradient(135deg, #1a001a, #8b0000)",
        thumbnailUrl: "https://images.unsplash.com/photo-1591522811280-a8759970b03f?q=80&w=640",
        views: 31000000,
        uploadedAgo: "8 months ago",
        duration: "4:22:15",
        isLive: false,
        isVerified: false,
        category: "gaming"
    },
    {
        id: 16,
        title: "Valorant World Championship 2025 LIVE | Grand Finals | Team Liquid vs Sentinels",
        channel: "Valorant Esports",
        channelAvatar: "linear-gradient(135deg, #dc143c, #191970)",
        thumbnailEmoji: "🏆",
        thumbnailGradient: "linear-gradient(135deg, #0a0010, #8b0000)",
        thumbnailUrl: "https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?q=80&w=640",
        views: 9800000,
        uploadedAgo: "842 watching",
        duration: "LIVE",
        isLive: true,
        isVerified: true,
        category: "gaming"
    },

    // ═══════════════════════════════════════════════
    //  PODCASTS (4 videos)
    // ═══════════════════════════════════════════════
    {
        id: 17,
        title: "Joe Rogan Experience #2100 — Elon Musk on AI, Mars, Neuralink & The Future of Humanity",
        channel: "PowerfulJRE",
        channelAvatar: "linear-gradient(135deg, #191970, #000080)",
        thumbnailEmoji: "🎙️",
        thumbnailGradient: "linear-gradient(135deg, #191970, #4b0082)",
        thumbnailUrl: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=640",
        views: 42000000,
        uploadedAgo: "4 months ago",
        duration: "3:02:44",
        isLive: false,
        isVerified: true,
        category: "podcasts"
    },
    {
        id: 18,
        title: "Lex Fridman Podcast — Sam Altman on GPT-5, AGI Timeline & the Future of OpenAI",
        channel: "Lex Fridman",
        channelAvatar: "linear-gradient(135deg, #4b0082, #191970)",
        thumbnailEmoji: "🤖",
        thumbnailGradient: "linear-gradient(135deg, #0d0034, #191970)",
        thumbnailUrl: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=640",
        views: 18000000,
        uploadedAgo: "2 months ago",
        duration: "2:48:31",
        isLive: false,
        isVerified: true,
        category: "podcasts"
    },
    {
        id: 19,
        title: "My First Million Podcast — How to Build a $100M SaaS Business From Zero in 2025",
        channel: "My First Million",
        channelAvatar: "linear-gradient(135deg, #dc143c, #8b0000)",
        thumbnailEmoji: "💰",
        thumbnailGradient: "linear-gradient(135deg, #8b0000, #191970)",
        thumbnailUrl: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=640",
        views: 7600000,
        uploadedAgo: "3 weeks ago",
        duration: "1:22:19",
        isLive: false,
        isVerified: false,
        category: "podcasts"
    },
    {
        id: 20,
        title: "The Tim Ferriss Show — Balancing Creativity & Productivity, Morning Routines of World Leaders",
        channel: "Tim Ferriss",
        channelAvatar: "linear-gradient(135deg, #ba55d3, #4b0082)",
        thumbnailEmoji: "📖",
        thumbnailGradient: "linear-gradient(135deg, #4b0082, #8b0000)",
        thumbnailUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=640",
        views: 5100000,
        uploadedAgo: "1 week ago",
        duration: "58:44",
        isLive: false,
        isVerified: true,
        category: "podcasts"
    }
];

// ==========================================================================
// 2. DOM NODES SELECTORS
// ==========================================================================
const DOM = {
    body: document.body,
    sidebar: document.getElementById('sidebar'),
    sidebarToggleBtn: document.getElementById('sidebarToggleBtn'),
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    skeletonGrid: document.getElementById('skeletonGrid'),
    videoGrid: document.getElementById('videoGrid'),
    noResultsView: document.getElementById('noResultsView'),

    // Header controls
    logoIconWrapper: document.getElementById('logoIconWrapper'),
    searchForm: document.getElementById('searchForm'),
    searchInput: document.getElementById('searchInput'),
    searchBarContainer: document.getElementById('searchBarContainer'),
    notificationBellBtn: document.getElementById('notificationBellBtn'),
    notificationDropdown: document.getElementById('notificationDropdown'),
    micBtn: document.getElementById('micBtn'),

    // Chips scrollbar
    chipsWrapper: document.getElementById('chipsWrapper'),
    chipsContainer: document.getElementById('chipsContainer'),
    chipUnderline: document.getElementById('chipSliderLine'),
    scrollLeftBtn: document.getElementById('scrollLeftBtn'),
    scrollRightBtn: document.getElementById('scrollRightBtn'),

    // Modals & Panels
    voiceModal: document.getElementById('voiceModal'),
    voiceCloseBtn: document.getElementById('voiceCloseBtn'),
    miniPlayer: document.getElementById('miniPlayer'),
    miniCloseBtn: document.getElementById('miniCloseBtn'),
    miniPlayBtn: document.getElementById('miniPlayBtn'),
    miniTitle: document.getElementById('miniTitle'),
    miniChannel: document.getElementById('miniChannel'),
    miniScreenArt: document.getElementById('miniScreenArt'),
    toastPanel: document.getElementById('toastPanel'),

    // List nodes
    sidebarItems: document.querySelectorAll('.sidebar-item'),
    bottomNavItems: document.querySelectorAll('.bottom-nav-item')
};

// ==========================================================================
// 3. SKELETON SHIMMER SIMULATOR CONTROLLER
// ==========================================================================
function initSkeletonDelay() {
    setTimeout(() => {
        DOM.skeletonGrid.style.display = 'none';
        DOM.videoGrid.style.display = 'grid';

        renderVideoCards(VIDEOS_DATA);
        adjustChipUnderline();
        checkChipsOverflow();
    }, 1000);
}

// ==========================================================================
// 4. VIDEO RENDER DECK SYSTEM
// ==========================================================================
function renderVideoCards(cards) {
    DOM.videoGrid.innerHTML = '';

    if (cards.length === 0) {
        DOM.videoGrid.style.display = 'none';
        DOM.noResultsView.style.display = 'flex';
        return;
    }

    DOM.noResultsView.style.display = 'none';
    DOM.videoGrid.style.display = 'grid';

    cards.forEach((video, index) => {
        const verifiedIcon = video.isVerified
            ? `<i class="fa-solid fa-circle-check verified-icon" title="Verified Creator"></i>`
            : '';

        let badgeHtml = '';
        if (video.isLive) {
            badgeHtml = `
                <div class="live-badge-widget">
                    <span class="live-pulse-dot"></span>
                    <span>LIVE</span>
                </div>
            `;
        } else {
            badgeHtml = `<span class="duration-badge">${video.duration}</span>`;
        }

        const card = document.createElement('article');
        card.className = 'video-card reveal-animate';
        card.style.animationDelay = `${index * 50}ms`;
        card.dataset.id = video.id;
        card.dataset.category = video.category;

        card.innerHTML = `
            <div class="video-thumb-wrapper" style="background: ${video.thumbnailGradient};">
                ${video.thumbnailUrl ? `<img class="video-thumb-pic" src="${video.thumbnailUrl}" alt="${video.title}" loading="lazy" onerror="this.style.display='none';">` : ''}
                <div class="emoji-badge">${video.thumbnailEmoji}</div>
                <button class="heart-overlay-btn ripple-btn" title="Add to favorites" onclick="toggleFavorite(event, ${video.id})">
                    <i class="fa-regular fa-heart"></i>
                </button>
                <div class="play-hover-overlay">
                    <i class="fa-solid fa-play"></i>
                </div>
                <div class="scrubber-preview-line"></div>
                <div class="card-glow-overlay"></div>
                ${badgeHtml}
            </div>

            <div class="video-card-details">
                <div class="channel-pic-wrapper">
                    <div class="creator-avatar" style="background: ${video.channelAvatar}; font-size: 14px; width: 100%; height: 100%;">
                        ${getInitials(video.channel)}
                    </div>
                </div>
                <div class="video-text-meta">
                    <h3 class="video-title" title="${video.title}">${video.title}</h3>
                    <span class="channel-row">
                        ${video.channel}
                        ${verifiedIcon}
                    </span>
                    <span class="stats-row">
                        <span class="stat-counter" data-views="${video.views}">0</span> views • ${video.uploadedAgo}
                    </span>
                </div>
            </div>
        `;

        // 3D Perspective Tilt & Spotlight Glow tracking
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const px = (x / rect.width) - 0.5;
            const py = (y / rect.height) - 0.5;
            const maxTilt = 8;
            card.style.setProperty('--tilt-x', -py * maxTilt);
            card.style.setProperty('--tilt-y', px * maxTilt);
            card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
            card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--tilt-x', 0);
            card.style.setProperty('--tilt-y', 0);
        });

        card.addEventListener('click', (e) => {
            if (!e.target.closest('.creator-avatar, .channel-row')) {
                launchMiniPlayer(video);
            }
        });

        DOM.videoGrid.appendChild(card);
    });

    bindViewCounterObservers();
}

function getInitials(name) {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('');
}

function formatViewCount(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace('.0', '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace('.0', '') + 'K';
    return num.toLocaleString();
}

// ==========================================================================
// 5. INTERSECTION OBSERVER — ANIMATED VIEW COUNTER (COUNT UP)
// ==========================================================================
function bindViewCounterObservers() {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target.querySelector('.stat-counter');
                if (counter && !counter.classList.contains('animated')) {
                    counter.classList.add('animated');
                    animateViews(counter, parseInt(counter.dataset.views, 10));
                }
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    DOM.videoGrid.querySelectorAll('.video-card').forEach(c => observer.observe(c));
}

function animateViews(element, target) {
    const duration = 1500;
    const startTime = performance.now();
    function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = Math.sin(progress * (Math.PI / 2));
        element.textContent = formatViewCount(Math.floor(ease * target));
        if (progress < 1) requestAnimationFrame(tick);
        else element.textContent = formatViewCount(target);
    }
    requestAnimationFrame(tick);
}

// ==========================================================================
// 6. COLLAPSIBLE SIDEBAR DRAWERS
// ==========================================================================
function bindSidebarCollapser() {
    DOM.sidebarToggleBtn.addEventListener('click', () => {
        if (window.innerWidth > 1024) {
            DOM.sidebar.classList.toggle('collapsed');
        } else {
            DOM.sidebar.classList.remove('collapsed');
            DOM.sidebar.classList.toggle('drawer-active');
        }
        setTimeout(adjustChipUnderline, 350);
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024 && window.innerWidth > 768) {
            if (!DOM.sidebar.contains(e.target) && !DOM.sidebarToggleBtn.contains(e.target)) {
                DOM.sidebar.classList.remove('drawer-active');
            }
        }
    });
}

// ==========================================================================
// 7. ROTATING SUN/MOON THEME CONTROLLER & LOCAL STORAGE
// ==========================================================================
function initThemePersist() {
    const cached = localStorage.getItem('ytCloneTheme');
    if (cached === 'dark') {
        DOM.body.className = 'dark-mode';
        DOM.themeIcon.className = 'fa-solid fa-sun';
    } else {
        DOM.body.className = 'light-mode';
        DOM.themeIcon.className = 'fa-solid fa-moon';
    }
}

function bindThemeToggle() {
    DOM.themeToggleBtn.addEventListener('click', () => {
        DOM.themeToggleBtn.classList.add('rotating');
        const rect = DOM.themeToggleBtn.getBoundingClientRect();
        const isDark = DOM.body.classList.contains('dark-mode');
        const circle = document.createElement('div');
        circle.className = 'theme-transition-circle';
        circle.style.left = `${rect.left + rect.width / 2}px`;
        circle.style.top = `${rect.top + rect.height / 2}px`;
        circle.style.backgroundColor = isDark ? '#ffffff' : '#0f0f0f';
        DOM.body.appendChild(circle);
        circle.offsetWidth;
        circle.classList.add('active');

        setTimeout(() => {
            if (isDark) {
                DOM.body.className = 'light-mode';
                DOM.themeIcon.className = 'fa-solid fa-moon';
                localStorage.setItem('ytCloneTheme', 'light');
            } else {
                DOM.body.className = 'dark-mode';
                DOM.themeIcon.className = 'fa-solid fa-sun';
                localStorage.setItem('ytCloneTheme', 'dark');
            }
        }, 300);

        setTimeout(() => { DOM.themeToggleBtn.classList.remove('rotating'); }, 600);
        setTimeout(() => { circle.remove(); }, 600);
    });
}

// ==========================================================================
// 8. HORIZONTAL CHIPS SCROLL AND HIGHLIGHT UNDERLINE SLIDER
// ==========================================================================
function adjustChipUnderline() {
    const active = DOM.chipsContainer.querySelector('.chip.active');
    if (!active) return;
    DOM.chipUnderline.style.left = `${active.offsetLeft}px`;
    DOM.chipUnderline.style.width = `${active.offsetWidth}px`;
}

function checkChipsOverflow() {
    const c = DOM.chipsContainer;
    const overflow = c.scrollWidth > c.clientWidth;
    DOM.scrollLeftBtn.style.display = overflow && c.scrollLeft > 5 ? 'flex' : 'none';
    DOM.scrollRightBtn.style.display = overflow && (c.scrollWidth - c.clientWidth - c.scrollLeft) > 5 ? 'flex' : 'none';
}

function bindChipsControls() {
    DOM.scrollLeftBtn.addEventListener('click', () => DOM.chipsContainer.scrollBy({ left: -200, behavior: 'smooth' }));
    DOM.scrollRightBtn.addEventListener('click', () => DOM.chipsContainer.scrollBy({ left: 200, behavior: 'smooth' }));
    DOM.chipsContainer.addEventListener('scroll', checkChipsOverflow);

    DOM.chipsContainer.addEventListener('click', (e) => {
        const chip = e.target.closest('.chip');
        if (!chip) return;
        DOM.chipsContainer.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        adjustChipUnderline();
        filterVideos(chip.dataset.category);
    });

    window.addEventListener('resize', () => { adjustChipUnderline(); checkChipsOverflow(); });
}

function filterVideos(category) {
    if (category === 'all') {
        renderVideoCards(VIDEOS_DATA);
    } else {
        const filtered = VIDEOS_DATA.filter(video => {
            if (category === 'live') return video.isLive;
            if (category === 'mixes') return video.category === 'study' || video.category === 'music';
            return video.category === category;
        });
        renderVideoCards(filtered);
    }
    DOM.searchInput.value = '';
}

// ==========================================================================
// 9. DYNAMIC SEARCH FILTRATION
// ==========================================================================
function bindSearchFilters() {
    DOM.searchForm.addEventListener('submit', () => {
        const query = DOM.searchInput.value.trim().toLowerCase();
        if (query === '') { renderVideoCards(VIDEOS_DATA); return; }

        DOM.chipsContainer.querySelectorAll('.chip').forEach(c => {
            c.classList.toggle('active', c.dataset.category === 'all');
        });
        adjustChipUnderline();

        const filtered = VIDEOS_DATA.filter(v =>
            v.title.toLowerCase().includes(query) ||
            v.channel.toLowerCase().includes(query) ||
            v.category.toLowerCase().includes(query)
        );
        renderVideoCards(filtered);
    });

    DOM.searchInput.addEventListener('focus', () => {
        DOM.searchBarContainer.querySelector('.search-form').classList.add('focused');
    });
    DOM.searchInput.addEventListener('blur', () => {
        DOM.searchBarContainer.querySelector('.search-form').classList.remove('focused');
    });
}

// ==========================================================================
// 10. MICROPHONE DIALOG VOICE MODAL SEARCH
// ==========================================================================
function bindVoiceMic() {
    DOM.micBtn.addEventListener('click', () => {
        DOM.voiceModal.classList.add('active');
        setTimeout(() => {
            document.getElementById('voiceHeader').textContent = '"Gaming Highlights 2025"';
            setTimeout(() => {
                DOM.voiceModal.classList.remove('active');
                DOM.searchInput.value = 'gaming';
                DOM.searchForm.dispatchEvent(new Event('submit'));
                document.getElementById('voiceHeader').textContent = 'Listening...';
            }, 1000);
        }, 2000);
    });

    DOM.voiceModal.addEventListener('click', (e) => {
        if (e.target === DOM.voiceModal || e.target.closest('#voiceCloseBtn')) {
            DOM.voiceModal.classList.remove('active');
            document.getElementById('voiceHeader').textContent = 'Listening...';
        }
    });
}

// ==========================================================================
// 11. NOTIFICATION BELL EXPANSION DROPDOWN
// ==========================================================================
function bindNotificationBell() {
    DOM.notificationBellBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        DOM.notificationDropdown.classList.toggle('active');
        DOM.notificationBellBtn.classList.remove('shake');
    });

    document.addEventListener('click', (e) => {
        if (!DOM.notificationDropdown.contains(e.target) && !DOM.notificationBellBtn.contains(e.target)) {
            DOM.notificationDropdown.classList.remove('active');
        }
    });
}

// ==========================================================================
// 12. FLOATING BOTTOM-RIGHT MINI-PLAYER
// ==========================================================================
function launchMiniPlayer(video) {
    DOM.miniTitle.textContent = video.title;
    DOM.miniChannel.textContent = video.channel;

    if (video.thumbnailUrl) {
        DOM.miniScreenArt.textContent = '';
        DOM.miniScreenArt.style.backgroundImage = `url('${video.thumbnailUrl}')`;
        DOM.miniScreenArt.style.backgroundSize = 'cover';
        DOM.miniScreenArt.style.backgroundPosition = 'center';
    } else {
        DOM.miniScreenArt.textContent = video.thumbnailEmoji;
        DOM.miniScreenArt.style.background = video.thumbnailGradient;
        DOM.miniScreenArt.style.backgroundImage = 'none';
    }

    DOM.miniPlayer.classList.add('active');
    DOM.miniPlayBtn.querySelector('i').className = 'fa-solid fa-pause';
}

function bindMiniPlayer() {
    DOM.miniCloseBtn.addEventListener('click', () => DOM.miniPlayer.classList.remove('active'));
    DOM.miniPlayBtn.addEventListener('click', () => {
        const icon = DOM.miniPlayBtn.querySelector('i');
        icon.className = icon.classList.contains('fa-pause') ? 'fa-solid fa-play' : 'fa-solid fa-pause';
    });
}

// ==========================================================================
// 13. SIDEBAR AND BOTTOM NAV BUTTON ACTIONS & TOASTS
// ==========================================================================
function triggerToast(message) {
    DOM.toastPanel.textContent = message;
    DOM.toastPanel.classList.add('active');
    setTimeout(() => DOM.toastPanel.classList.remove('active'), 2500);
}

function bindNavigationTriggers() {
    DOM.sidebarItems.forEach(item => {
        item.addEventListener('click', () => {
            if (item.id === 'sidebarHomeBtn') {
                DOM.sidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                DOM.chipsContainer.querySelectorAll('.chip').forEach(c => {
                    c.classList.toggle('active', c.dataset.category === 'all');
                });
                adjustChipUnderline();
                renderVideoCards(VIDEOS_DATA);
            } else {
                triggerToast("Coming soon");
            }
        });
    });

    DOM.bottomNavItems.forEach(item => {
        item.addEventListener('click', () => {
            DOM.bottomNavItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            if (item.id === 'mobileHomeBtn') renderVideoCards(VIDEOS_DATA);
            else triggerToast("Coming soon");
        });
    });
}

// ==========================================================================
// 14. MATERIAL RIPPLE INJECTOR
// ==========================================================================
function injectRipples() {
    document.body.addEventListener('click', e => {
        const target = e.target.closest('.ripple-btn, .sidebar-item, .chip, .bottom-nav-item');
        if (!target) return;
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const rect = target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}

// ==========================================================================
// 15. LOGO IDLE BOUNCE LOOP
// ==========================================================================
function initLogoIdleBounce() {
    setInterval(() => {
        DOM.logoIconWrapper.classList.add('idle-bounce');
        setTimeout(() => DOM.logoIconWrapper.classList.remove('idle-bounce'), 800);
    }, 5000);
}

// ==========================================================================
// 16. PAGE INITIATOR BOOTSTRAPPER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    initThemePersist();
    bindThemeToggle();
    bindSidebarCollapser();
    bindChipsControls();
    bindSearchFilters();
    bindVoiceMic();
    bindNotificationBell();
    bindMiniPlayer();
    bindNavigationTriggers();
    injectRipples();
    initLogoIdleBounce();
    initSkeletonDelay();
});

// ==========================================================================
// 17. GLOBAL HEART/FAVORITE TOGGLE HANDLER
// ==========================================================================
window.toggleFavorite = function(event, videoId) {
    event.stopPropagation();
    const button = event.currentTarget;
    const icon = button.querySelector('i');
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        icon.className = 'fa-solid fa-heart';
        triggerToast("Added to Favorites ♥");
    } else {
        icon.className = 'fa-regular fa-heart';
        triggerToast("Removed from Favorites");
    }
    const video = VIDEOS_DATA.find(v => v.id === videoId);
    if (video) video.isFavorite = button.classList.contains('active');
};
