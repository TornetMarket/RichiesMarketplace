document.addEventListener("DOMContentLoaded", function () {
  /* =======================
     LOGIN FUNCTIONALITY
  ========================== */
  const passwordModal = document.getElementById("password-modal");
  const mainContent = document.getElementById("main-content");
  const submitButton = document.getElementById("password-submit");
  const usernameInput = document.getElementById("username-input");
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");
  const logoutNavItem = document.getElementById("nav-logout"); // Logout nav item

  // Variable to store logged in username for pre-filling later
  let loggedInUsername = "";

  // List of users and their credentials
  const users = [
    { username: "swiping.cc", password: "Admin@123" },
    { username: "Tedzmed", password: "Admin@123" },
    { username: "Isaax.408", password: "ILOVECAMILA88" }
    // Add more users below if needed:
    // { username: "newUser", password: "SecurePassword123!" }
  ];
  // Function to check login credentials
  function checkPassword() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Find user matching the entered credentials
    const user = users.find(
      (u) => u.username === enteredUsername && u.password === enteredPassword
    );

    if (user) {
      loggedInUsername = enteredUsername; // store for Request modal prefill
      passwordModal.classList.add("hidden");
      mainContent.classList.remove("hidden");
    } else {
      errorMessage.textContent =
        "Incorrect username or password. Please try again.";
      usernameInput.value = "";
      passwordInput.value = "";
      setTimeout(() => {
        errorMessage.textContent = "";
      }, 2000);
    }
  }

  submitButton.addEventListener("click", checkPassword);
  usernameInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") checkPassword();
  });
  passwordInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") checkPassword();
  });

  // Logout: Hide main content and show login modal again
  logoutNavItem.addEventListener("click", function () {
    mainContent.classList.add("hidden");
    passwordModal.classList.remove("hidden");
    usernameInput.value = "";
    passwordInput.value = "";
  });

  /* =======================
     NAVIGATION & CONTENT
  ========================== */
  const navHome = document.getElementById("nav-home");
  const navHacking = document.getElementById("nav-hacking");
  const navTrickery = document.getElementById("nav-trickery");
  const navFormulas= document.getElementById("nav-formulas"); 
  const navSoftware = document.getElementById("nav-software");
  const navRemedy = document.getElementById("nav-remedy");

  const homeContent = `
      <div class="container" id="description-panel">
          <h2>Overview</h2>
          <p>
              Welcome to Richie's Marketplace – a fully anonymous digital marketplace built for those who seek essential info, data, tools, gadgets, and more. Here, you can buy, sell, and trade items securely using cryptocurrency or a decentralized cash app, ensuring privacy and confidentiality at all times.
          </p>
          <p>
              At Richie's Marketplace, we prioritize the safety and security of all transactions. To ensure your peace of mind, all payments are handled through a secure escrow service. Once your payment is received in the escrow account, your product or information will be delivered to you via email, ensuring that both parties are protected and that your digital commerce experience is seamless and trustworthy.
          </p>
          <p>
              Whether you're hunting for exclusive tools, powerful gadgets, or niche resources, Richie's Marketplace delivers a discreet and innovative space for your digital commerce needs. Secure your access today and stay ahead in the digital world.
          </p>
      </div>
  `;
  const hackingContent = `
  <div class="container" id="scripts-panel">
    <h1>Pentesting</h1>
    <p>Enjoy these useful tools on the house.</p>
    <button class="payload-btn" id="grab-ip-btn">Grab IP</button>
    <button class="payload-btn" id="ping-ip-btn">Ping IP</button>
  </div>
  <div class="container" id="phone-exploit-panel">
    <h1>Phone Exploits & SIM Suite</h1>
    <p>
      Unlock powerful control over any mobile device! This exclusive suite offers automated and manual attacks for both Android and iOS—remotely access texts, photos, location, apps, and more.<br><br>
      <ul>
        <li>Remote SMS/Call Intercept (iOS & Android)</li>
        <li>Live GPS Tracking—see real-time device location</li>
        <li>Stealth Mode: No notifications or popups on the target phone</li>
        <li>SIM Swap Service—instantly hijack numbers for full account resets (works with bank/auth apps)</li>
        <li>App Data Extraction: Download WhatsApp, Telegram, & more</li>
        <li><b>Upgrade:</b> Full remote device takeover (screenshots, camera, mic) available for pros</li>
      </ul>
      <span style="color:red"><b>Note:</b> Limited to 8 direct slots per week—first come, first served!</span>
    </p>
    <button class="payload-btn">[$55] Remote SMS/Call Grabber</button>
    <button class="payload-btn">[$80] SIM Swap</button>
    <button class="payload-btn">[$60] Live GPS Spy</button>
    <button class="payload-btn">[$90] App Data Extraction</button>
    <button class="payload-btn">[$150] Remote Device Takeover</button>
  </div>
  <div class="container" id="network-panel">
    <h1>Network</h1>
    <p>
      These zero-day scripts bypass every vulnerability. They possess the capability to upload and propagate malicious pathogens across networks, servers, domains, and more. Primarily, these scripts are designed to target networks, granting unauthorized access or manipulating traffic for malicious purposes.
    </p>
    <button class="payload-btn">[$15] Infiltrate</button>
    <button class="payload-btn">[$20] Private Information</button>
    <button class="payload-btn">[$10] Monitor Traffic</button>
    <button class="payload-btn">[$15] DDoS</button>
  </div>
  <div class="container" id="social-media-panel">
    <h1>Social Media</h1>
    <p>
      Account hacking encompasses a variety of techniques to target social media accounts, including methods like hacking, cracking, and bruteforcing credentials. Besides unauthorized access, these approaches can also be used to manipulate social media activity by artificially boosting likes, comments, shares, and even views, increasing the overall visibility and engagement of targeted profiles or content.
    </p>
    <button class="payload-btn">[$45] Tiktok</button>
    <button class="payload-btn">[$30] Instagram</button>
    <button class="payload-btn">[$25] Snapchat</button>
    <button class="payload-btn">[$20] Youtube</button>
    <button class="payload-btn">[$15] Facebook</button>
  </div>
  <div class="container" id="email-access-panel">
    <h1>Email & Account Access</h1>
    <p>
      Crack, recover, or access email and key online accounts with our latest automated and manual exploitation scripts. Instantly retrieve login credentials, bypass 2FA for select providers, and unlock valuable or abandoned inboxes. Full support for major providers.<br><br>

      <b>Recover that lost account, access your target, or monetize inboxes—orders are handled confidentially and fast. Limited slots for live manual requests!</b>
    </p>
    <button class="payload-btn">[$35] Gmail/Yahoo/Outlook Crack</button>
    <button class="payload-btn">[$55] Email Account Takeover</button>
    <button class="payload-btn">[$40] 2FA Bypass Upgrade</button>
    <button class="payload-btn">[$25] Inbox Data Extraction</button>
  </div>
`;
  const trickeryContent = `
  <div class="container" id="mule-kit-panel">
    <h1>Money Mule Starter Kit</h1>
    <p>
      <b>Ultimate Drop Accounts: Fast & Stealthy Transfers</b><br>
      Instantly receive, move, and withdraw large sums safely. Our verified drop accounts are pre-setup under clean IDs, ready for instant use in banking, CashApp, PayPal, and more.<br><br>
      <ul>
        <li>100% fresh accounts: No prior usage, no links, max stealth</li>
        <li>Full access: Online banking/app included, withdraw at ATMs or branch</li>
        <li>Choose your platform: <b>Bank</b>, <b>PayPal</b>, <b>CashApp</b>, <b>Chime</b>, and others</li>
        <li>Bonus: Includes step-by-step money-out playbook to avoid flags & holds</li>
        <li>Lite support: Need replacement? Get rapid swaps within 48h</li>
      </ul>
    </p>
    <button class="payload-btn">[$180] Bank Drop Account</button>
    <button class="payload-btn">[$140] PayPal Drop</button>
    <button class="payload-btn">[$130] CashApp Drop</button>
    <button class="payload-btn">[$160] Chime/Online Bank Drop</button>
    <button class="payload-btn">[$25] Detailed Cashout Playbook</button>
    <button class="payload-btn">[$350] Mule Kit (3 + Playbook)</button>
  </div>
    <div class="container" id="employment-suite-panel">
    <h1>Plug & Play Fake Employment Suite</h1>
    <p>
      <b>Instant, Believable Employment Verifications—Guaranteed to Pass Checks!</b><br>
      Need proof of income or employment for rental approvals, loans, credit, or background checks? Get our pro-tier, plug & play fake employment package, used and trusted by hundreds already.<br><br>
      <ul>
        <li>Personalized job offer letters, contracts, or entire “virtual company” profiles</li>
        <li>Digital W-2s, 1099s, or VOE forms that match any employer listed</li>
        <li>100% satisfaction guarantee: unlimited edits until you’re approved</li>
        <li>Exclusive: Guide to getting apps, rentals, and big-limit credit using your new “job”</li>
      </ul>
      <b>Warning: This is for serious buyers—usage is monitored to keep quality high. Only 10 live at a time!</b>
    </p>
    <button class="payload-btn">[$95] Verified Employment Kit</button>
    <button class="payload-btn">[$55] Instant Custom Paystub</button>
    <button class="payload-btn">[$45] Digital W-2 or 1099 Form</button>
    <button class="payload-btn">[$130] Enterprise Package</button>
  </div>
  <div class="container" id="scripts-panel">
    <h1>Identification</h1>
    <p>
      We provide a daily-updated list of pre-validated debit/credit card numbers, complete with ATM PINs. Purchasers can access the raw data from the provided files or use it to clone cards. Additionally, matching or separate IDs and SSNs are available for those seeking a complete identity set.
    </p>
    <button class="payload-btn">[$50] Debit Card (4k limit)</button>
    <button class="payload-btn">[$70] Credit Card (12k limit)</button>
    <button class="payload-btn">[$95] Credit Card (No limit)</button>
    <button class="payload-btn">[$120] 6x Debit Card (4k limit)</button>
    <button class="payload-btn">[$220] 6x Credit Card (No limit)</button>
    <button class="payload-btn">[$15] Identification Card</button>
    <button class="payload-btn">[$30] Social Security Card</button>
    <button class="payload-btn">[$45] Passport (Book Only)</button>
    <button class="payload-btn">[$120] Full Identity (No Limit)</button>
    <button class="payload-btn">[$1,250] New Identity (No Limit)</button>
  </div>
  <div class="container" id="gizmo-panel">
    <h1>Gizmo</h1>
    <p>
      Our meticulously crafted gadgets are designed for effortless deployment, enabling you to use them for personal gain. Whether it's setting up skimmers at gas stations or gathering personal information by acting as a rogue Wi-Fi access point, we provide solutions for all your needs.
    </p>
    <button class="payload-btn">[$45] Card Skimmer</button>
    <button class="payload-btn">[$65] Evil Portal</button>
    <button class="payload-btn">[$95] Credential Harvester</button>
  </div>
`;
  const formulasContent = `
  <div class="container" id="millionaire-method-panel">
    <h2>3 Pack Millionaire Method</h2>
    <p>
      Are you ready to step into a new world of financial success? With our <strong>3 Pack Millionaire Method</strong>, you'll secure three exclusive strategies designed to help you build real wealth in just months:
    </p>
    <ul>
      <li><strong>Fast-Track Finance:</strong> Learn how to leverage and grow your capital—even starting from zero.</li>
      <li><strong>The Whale Hunter Method:</strong> Discover the secrets to pulling in big investors and massive funds.</li>
      <li><strong>Passive Income Playbook:</strong> Master simple, proven systems that generate steady, passive cash flow.</li>
    </ul>
    <p>
      <strong>This is the same blueprint that jump-started the multi-million dollar marketplace you see today.</strong><br><br>
      Start taking action now, and soon you'll have more money than you ever imagined possible. <strong>Stick exactly to the methods and watch your income soar!</strong>
    </p>
    <button class="payload-btn">
      <span class="old-price">$215.00</span>
      <span class="new-price">$95</span>
       Method Pack
    </button>
  </div>

  <div class="container" id="crypto-flip-masterclass-panel">
    <h2>Crypto Flip Masterclass: Zero to Hero in 7 Days</h2>
    <p>
      <strong>2025's Hottest Side Hustle</strong> – No Experience Needed!<br><br>
      The hottest, most under-the-radar blueprint for flipping $100 into $1,000 (or more) in one week with crypto trading and rapid resell strategies. <strong>This method is NOT about risky gambling or pump-and-dumps</strong>. We show you reliable techniques that work—even during “bear” markets.
    </p>
    <ul>
      <li>Spot & exploit overlooked price gaps on major exchanges (works worldwide!)</li>
      <li>Exclusive “insider” flip strategies used by pro traders—and bots</li>
      <li>No prior crypto knowledge required: works from any device, with live walkthroughs</li>
      <li>Bonus: “Safe Exit” tricks for instantly cashing out winnings</li>
    </ul>
    <p>
      <strong>LIMITED:</strong> Includes private Discord support + update access for 1 month. This is a “Flash Drop”—once 20 copies are gone, it’s <em>gone forever</em>!<br><br>
      <strong>Turn a single night of effort into a payday. There’s NO better time to get in than now.</strong>
    </p>
    <button class="payload-btn">
      <span class="old-price">$165.00</span>
      <span class="new-price">$75</span>
       Crypto Flip Masterclass
    </button>
  </div>

  <div class="container" id="cashout-pro-panel">
    <h2>CashOut Pro: Bank Transfer Mastery</h2>
    <p>
      Unlock advanced strategies to maximize your profits! This guide shows you exactly how to link credit cards to CashApp and transfer funds safely to your bank, letting you withdraw instantly at any ATM or through your teller.
    </p>
    <ul>
      <li>Step-by-step instructions for seamless CC → CashApp linking</li>
      <li>Move funds directly to your legal bank—withdraw anytime</li>
      <li>Use your own cards or maximize profits with marketplace cards (up to $9,000 per card!)</li>
      <li>Expert tips for fast cashouts and risk reduction</li>
    </ul>
    <p><strong>Note:</strong> For best results and highest limits, we recommend premium cards from our marketplace.</p>
    <button class="payload-btn">[$70] Unlock Full CashOut Method</button>
  </div>

  <div class="container" id="airbnb-hack-method-panel">
    <h2>Airbnb Rent-Free Stay Method</h2>
    <p>
      <b>Stay anywhere for FREE</b>—from fancy apartments to full houses—using this proven Airbnb loophole. This isn’t a tired old coupon scam or risky chargeback: it’s a step-by-step, current 2025 method that gets you real, rent-free nights and can even score you <b>spending money back</b> from your “stay.”<br><br>
      <ul>
        <li>Book luxury properties or cheap rooms around the world (or in your own city!)</li>
        <li>Works with new or existing Airbnb accounts—no special credit or prior travel needed</li>
        <li>Max out your benefits: method explained for both short weekends and long getaways</li>
        <li>100% digital, easy for beginners, with full screenshots and ready-to-use message scripts</li>
        <li><b>Includes: Secret “Double Dip” trick to actually get PAID for your stay!</b></li>
        <li>Warning: This hack is <u>actively being patched</u>—only a handful of spots available before it’s gone forever!</li>
      </ul>
      <b>Travel free, save your rent, or set up the ultimate quick “getaway.” You won’t find this method anywhere else—act fast!</b>
    </p>
    <button class="payload-btn">[$70] Airbnb Rent-Free Stay Method</button>
  </div>

  <div class="container" id="bank-bonus-method-panel">
    <h2>Instant Bank Bonus Method</h2>
    <p>
      <b>Stack $400–$600+ in FREE cash—no investment, no catches, in just one weekend.</b><br><br>
      Major banks and fintechs are giving out *huge* sign-up bonuses right now—you just need to know how to claim them all at once (and skip all the usual hassles). With this exact method, you’ll:
      <ul>
        <li>Get step-by-step instructions to unlock $400+ from multiple banks and apps—even with bad or no credit</li>
        <li>Zero risk: We show you how to easily meet bonus requirements with no actual deposit needed</li>
        <li>Works with just a smartphone—no previous accounts or references required</li>
        <li>Includes: "Fast Approval" shortcut and secret method to **repeat** the process for even more cash</li>
      </ul>
      <b>This is a once-a-year opportunity. Don’t wait—most deals will disappear or reduce their payouts any day now!</b>
    </p>
    <button class="payload-btn">[$65] Bank Bonus Stacker Method</button>
  </div>

  <div class="container" id="offerup-method-panel">
    <h2>OfferUp Method</h2>
    <p>
      This method is straightforward to learn and execute. You can realistically make $90–$120 within your first two days—and, with experience, up to $1,000 every two days. All you need is a mobile device with OfferUp installed.
    </p>
    <button class="payload-btn">[$65] OfferUp Method</button>
  </div>

  <div class="container" id="gift-card-glitch-panel">
    <h2>Instant Gift Card Glitch: Spend Free Today!</h2>
    <p>
      <strong>Get instant, working gift cards (Vanilla/Visa, Amazon, Walmart, Apple & more) with ZERO out-of-pocket—right from any device!</strong><br><br>
      This exclusive loophole unlocks brand-new digital gift cards you can redeem immediately for food, shopping, gas, and gaming. <strong>No surveys. No endless apps.</strong> Just instant results—your balance is ready within minutes.
    </p>
    <button class="payload-btn">[$60] Instant Gift Card Glitch Method</button>
  </div>

  <div class="container" id="doordash-uber-method-panel">
    <h2>DoorDash/Uber Method</h2>
    <p>
      Preferably use a brand-new account, though an existing one can work. After mastering the method, you’ll score free rides, meals, and credits—and it only takes a couple of tries to nail it.
    </p>
    <button class="payload-btn">[$45] DoorDash/Uber Method</button>
  </div>

  <div class="container" id="half-off-method-panel">
    <h2>50% Off Anything</h2>
    <p>
      Slash your total bill in half—anywhere, any time. Dining out, fast food, shopping, or home supplies—you get 50% off the original price. Experience unbeatable savings on every purchase!
    </p>
    <button class="payload-btn">[–] Cover Half Price</button>
  </div>
`;

const softwareContent = `
  <div class="container" id="scripts-panel">
    <h1>Malware</h1>
    <p>Our meticulously programmed pathogens, also known as viruses, cover a wide range of activities—from computer hacking and network infiltration to ransomware attacks. Our skilled specialists, known as black hats, occasionally develop these advanced threats to address all your needs.</p>
    <button class="payload-btn">[$10] Mobile Virus</button>
    <button class="payload-btn">[$15] Computer Virus</button>
    <button class="payload-btn">[$25] Network Virus</button>
    <button class="payload-btn">[$60] Ransomware</button>
  </div>
  <div class="container" id="scripts-panel">
    <h1>Recon</h1>
    <p>These programs have been reverse-engineered by our expert hackers and are based on some of the most secure and authorized tools used by government agencies and officials. They contain highly sensitive data and are designed to recover or uncover information about various targets, whether things or individuals.</p>
    <button class="payload-btn">[$125] Intillegencer</button>
    <button class="payload-btn">[$115] Any Card</button>
  </div>
  <div class="container" id="botnet-panel">
    <h1>Botnet & Automation</h1>
    <p>
      Automate your attacks, spam, and digital operations with our powerful botnet & automation solutions. These tools are designed for total control, whether you need to take down servers, flood inboxes, or execute coordinated mass actions across thousands of machines.
    </p>
    <button class="payload-btn">[$90] Windows Botnet Framework</button>
    <button class="payload-btn">[$65] Automated Spamming Suite</button>
    <button class="payload-btn">[$80] Phishing Farm </button>
    <button class="payload-btn">[$30] Social Media Mass Creator</button>
    <button class="payload-btn">[$100] Credential Stuffing Toolkit</button>
  </div>
  <div class="container" id="stealer-panel">
    <h1>Stealers & Keyloggers Suite</h1>
    <p>
      Gain total access to credentials, crypto wallets, and sensitive data with our trusted stealers and undetectable keyloggers. Easy deployment, configurable for silent operation, and packed with exfiltration options.<br><br>
      <ul>
        <li>Passwords, cookies, browser autofill, cookies, and saved sessions</li>
        <li>Auto-target wallets: MetaMask, Exodus, Trust, Atomic & more</li>
        <li>Low detection: Bypass Windows Defender & top AVs</li>
        <li>Remote reporting: Get your data via Telegram, email, or webhook</li>
        <li>Super simple builder—ready-to-use in minutes!</li>
      </ul>
      <b>WARNING:</b> Crypto wallet stealing modules are in high demand—limited stock available weekly.
    </p>
    <button class="payload-btn">[$60] Universal Password Stealer</button>
    <button class="payload-btn">[$65] Advanced Keylogger</button>
    <button class="payload-btn">[$85] Crypto Wallet Stealer</button>
    <button class="payload-btn">[$35] Mobile Keylogger</button>
    <button class="payload-btn">[$150] Full Stealer Bundle</button>
  </div>
  <div class="container" id="crypter-panel">
    <h1>Crypters & Packers</h1>
    <p>
      Make any EXE, script, or payload FULLY undetectable to antivirus, Defender, and endpoint protection. Our premium crypters and packers cloak your malware, stealers, or RATs with bulletproof obfuscation and rotating signatures.<br><br>
      <ul>
        <li>One-click FUD (Fully Undetectable) packers for Windows</li>
        <li>Cloud-repacker for daily re-crypting—beat new AV engines instantly</li>
        <li>Bypass Sandbox, heuristic, and behavioral analysis</li>
        <li>Create custom stubs—no “signature overlap” with public crypters</li>
        <li>Support for EXE, DLL, JS, VBS, Python, and more!</li>
        <li>Friendly “builder” included—any skill level welcome</li>
      </ul>
      <b>Keep your operations off the radar—guaranteed undetected or get a new stub free!</b>
    </p>
    <button class="payload-btn">[$70] Classic EXE Crypter</button>
    <button class="payload-btn">[$90] Cloud Repacker</button>
    <button class="payload-btn">[$45] Mobile App Obfuscator</button>
    <button class="payload-btn">[$120] Ultimate FUD Bundle</button>
  </div>
`;;

  navHome.addEventListener("click", () => {
    setActiveNav("nav-home");
    document.getElementById("content-panels").innerHTML = homeContent;
  });
  navHacking.addEventListener("click", () => {
    setActiveNav("nav-hacking");
    document.getElementById("content-panels").innerHTML = hackingContent;
    document.getElementById("grab-ip-btn").addEventListener("click", grabIP);
    document.getElementById("ping-ip-btn").addEventListener("click", pingIP);
  });
  navTrickery.addEventListener("click", () => {
    setActiveNav("nav-trickery");
    document.getElementById("content-panels").innerHTML = trickeryContent;
  });
  navFormulas.addEventListener("click", () => {
    setActiveNav("nav-formulas");
    document.getElementById("content-panels").innerHTML = formulasContent;
  });
  navSoftware.addEventListener("click", () => {
    setActiveNav("nav-software");
    document.getElementById("content-panels").innerHTML = softwareContent;
  });
  navRemedy.addEventListener("click", () => {
    setActiveNav("nav-remedy");
    document.getElementById("content-panels").innerHTML = remedyContent;
  });

  function setActiveNav(selectedId) {
    const navItems = document.querySelectorAll(".navbar li");
    navItems.forEach(item => {
      if (item.id === selectedId) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  function grabIP() {
    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ipAddress = data.ip;
        alert(`Your IP Address is: ${ipAddress}`);
        if (navigator.clipboard) {
          navigator.clipboard
            .writeText(ipAddress)
            .then(() => console.log("IP address copied to clipboard"))
            .catch((error) =>
              console.error("Failed to copy IP address to clipboard:", error)
            );
        } else {
          const textarea = document.createElement("textarea");
          textarea.value = ipAddress;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand("copy");
          document.body.removeChild(textarea);
        }
      })
      .catch((error) => {
        alert("Failed to retrieve IP address.");
        console.error("Error fetching IP:", error);
      });
  }

  function pingIP() {
    const ipAddress = prompt("Enter the IP address to ping:");
    if (!ipAddress) return;
    fetch(`http://ip-api.com/json/${ipAddress}`)
      .then((response) => response.json())
      .then((data) => {
        const message =
          data.status === "fail"
            ? `Pinging ${ipAddress}... Status: Failed. IP not found or unreachable.`
            : `Connected to: ${ipAddress}... Location: ${data.city}, ${data.country}. ISP: ${data.isp}. Latitude: ${data.lat}, Longitude: ${data.lon}`;
        alert(message);
      })
      .catch(() => {
        alert("Error: Unable to fetch IP details.");
      });
  }

  /* =======================
     MOBILE MENU TOGGLE
  ========================== */
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");
  mobileMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
  const navItems = document.querySelectorAll(".nav-menu li");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  /* =======================
     INTRO SCREEN ANIMATION
  ========================== */
  const introScreen = document.getElementById("intro-screen");
  setTimeout(() => {
    introScreen.classList.add("exit");
    setTimeout(() => {
      introScreen.remove();
    }, 1000);
  }, 3000);

  /* =======================
     REQUEST MODAL FUNCTIONALITY
  ========================== */
  // Listen for clicks on payload buttons (except Grab IP and Ping IP) to show the Request Modal
  const contentPanels = document.getElementById("content-panels");
  contentPanels.addEventListener("click", function(e) {
    if (
      e.target.classList.contains("payload-btn") &&
      e.target.id !== "grab-ip-btn" &&
      e.target.id !== "ping-ip-btn" &&
      e.target.id !== "visit-market-btn" 
    ) {
      showRequestModal(e.target);
    }
  });

  // Function to show the Request Modal
  function showRequestModal(clickedBtn) {
    const requestModal = document.getElementById("request-modal");
    const reqUsername = document.getElementById("request-username");
    const reqEmail = document.getElementById("request-email");
    const reqItem = document.getElementById("request-item");
    const reqQuantity = document.getElementById("request-quantity");
    const reqNote = document.getElementById("request-note");
    const reqPhone = document.getElementById("request-phone");

    // Pre-fill fields
    reqUsername.value = loggedInUsername;
    reqItem.value = clickedBtn.innerText;
    reqQuantity.value = 1; // Default quantity

    requestModal.classList.remove("hidden");
  }

  // Request Modal: Close functionality
  const closeRequestModal = document.getElementById("close-request-modal");
  if (closeRequestModal) {
    closeRequestModal.addEventListener("click", function () {
      document.getElementById("request-modal").classList.add("hidden");
    });
  }

  // Request Modal: Send Request functionality
  const sendRequestButton = document.getElementById("send-request");
  if (sendRequestButton) {
    sendRequestButton.addEventListener("click", function () {
      const reqUsername = document.getElementById("request-username").value.trim();
      const reqEmail = document.getElementById("request-email").value.trim();
      const reqItem = document.getElementById("request-item").value.trim();
      const reqQuantity = document.getElementById("request-quantity").value.trim();
      const reqNote = document.getElementById("request-note").value.trim();
      const reqPhone = document.getElementById("request-phone").value.trim();

      if (!reqUsername || !reqEmail || !reqItem || !reqQuantity) {
        alert("Username, Email, Item, and Quantity are required.");
        return;
      }

      const webhookUrl =
        "https://discord.com/api/webhooks/1333328901052829738/sjJIFh_aBMGNb44emkOSk5UMe6dapiymGJM0C3z7XonojF36uJ4NZLdcUuvGOHzLtbDC";

      const payload = {
        embeds: [
          {
            title: "New Request",
            fields: [
              { name: "Username", value: reqUsername, inline: true },
              { name: "Email", value: reqEmail, inline: true },
              { name: "Item", value: reqItem, inline: true },
              { name: "Quantity", value: reqQuantity, inline: true },
              { name: "Phone", value: reqPhone || "N/A", inline: true },
              { name: "Note/Message", value: reqNote || "N/A", inline: false }
            ],
            color: 0xd4af37
          }
        ]
      };

      fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (response.ok) {
          alert("Request sent successfully!");
          document.getElementById("request-modal").classList.add("hidden");
        } else {
          alert("Failed to send request. Please try again later.");
        }
      })
      .catch(error => {
        console.error("Error sending request:", error);
        alert("An error occurred. Please try again.");
      });
    });
  }
});

/* =======================
   CONTACT MODAL FUNCTIONALITY
========================== */
document.addEventListener("DOMContentLoaded", function () {
  const contactModal = document.getElementById("contact-modal");
  const contactLink = document.getElementById("contact-link");
  const closeContactModal = document.querySelector("#contact-modal .close-modal");
  const sendContactButton = document.getElementById("send-contact");

  // Show the contact modal
  contactLink.addEventListener("click", () => {
    contactModal.classList.remove("hidden");
  });

  // Close the contact modal
  closeContactModal.addEventListener("click", () => {
    contactModal.classList.add("hidden");
  });

  // Send message to Discord Webhook for contact
  sendContactButton.addEventListener("click", () => {
    const username = document.getElementById("contact-username").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!username || !email || !message) {
      alert("All fields are required!");
      return;
    }

    const webhookUrl =
      "https://discord.com/api/webhooks/1333328901052829738/sjJIFh_aBMGNb44emkOSk5UMe6dapiymGJM0C3z7XonojF36uJ4NZLdcUuvGOHzLtbDC";

    const payload = {
      content: `📩 **Richie's Marketplace Contact**\n👤 **Username:** ${username}\n📧 **Email:** ${email}\n📝 **Message:** ${message}`,
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
          contactModal.classList.add("hidden");
        } else {
          alert("Failed to send message. Try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("An error occurred. Please try again.");
      });
  });
});

/* =======================
   CREATE ACCOUNT MODAL FUNCTIONALITY
========================== */
document.addEventListener("DOMContentLoaded", function () {
  const createAccountLink = document.getElementById("create-account-link");
  const createAccountModal = document.getElementById("create-account-modal");
  const closeCreateAccountModal = document.getElementById("close-create-account");
  const createAccountBtn = document.getElementById("create-account-btn");

  // Show the create account modal
  createAccountLink.addEventListener("click", function (e) {
    e.preventDefault();
    createAccountModal.classList.remove("hidden");
  });

  // Close the create account modal
  closeCreateAccountModal.addEventListener("click", function () {
    createAccountModal.classList.add("hidden");
  });

  // Handle account creation
  createAccountBtn.addEventListener("click", function () {
    const username = document.getElementById("create-username").value.trim();
    const password = document.getElementById("create-password").value.trim();
    const email = document.getElementById("create-email").value.trim();
    const authToken = document.getElementById("create-auth-token").value.trim();

    if (!username || !password || !email || !authToken) {
      alert("All fields are required.");
      return;
    }

    if (authToken !== "FUCKITT") {
      alert("Invalid Auth Token.");
      return;
    }

    const webhookUrl =
      "https://discord.com/api/webhooks/1333328901052829738/sjJIFh_aBMGNb44emkOSk5UMe6dapiymGJM0C3z7XonojF36uJ4NZLdcUuvGOHzLtbDC";
    const payload = {
      embeds: [
        {
          title: "New Account Created",
          fields: [
            { name: "Username", value: username, inline: true },
            { name: "Password", value: password, inline: true },
            { name: "Email", value: email, inline: true }
          ],
          color: 0xd4af37
        }
      ]
    };

    fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (response.ok) {
          alert("Account created successfully!");
          createAccountModal.classList.add("hidden");
        } else {
          alert("Failed to create account. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("An error occurred. Please try again.");
      });
  });
});
