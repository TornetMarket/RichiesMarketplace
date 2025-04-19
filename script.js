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
    <div class="container" id="scripts-panel">
      <h1>Network</h1>
      <p>These zero-day scripts bypass every vulnerability. They possess the capability to upload and propagate malicious pathogens across networks, servers, domains, and more. Primarily, these scripts are designed to target networks, granting unauthorized access or manipulating traffic for malicious purposes.</p>
      <button class="payload-btn">[$15] Infiltrate</button>
      <button class="payload-btn">[$20] Private Information</button>
      <button class="payload-btn">[$10] Monitor Traffic</button>
      <button class="payload-btn">[$15] DDoS</button>
    </div>
  `;
  const trickeryContent = `
    <div class="container" id="scripts-panel">
      <h1>Identification</h1>
      <p>We provide a daily-updated list of pre-validated debit/credit card numbers, complete with ATM PINs. Purchasers can access the raw data from the provided files or use it to clone cards. Additionally, matching or separate IDs and SSNs are available for those seeking a complete identity set.</p>
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
    <div class="container" id="scripts-panel">
      <h1>Gizmo</h1>
      <p>Our meticulously crafted gadgets are designed for effortless deployment, enabling you to use them for personal gain. Whether it's setting up skimmers at gas stations or gathering personal information by acting as a rogue Wi-Fi access point, we provide solutions for all your needs.</p>
      <button class="payload-btn">[$45] Card Skimmer</button>
      <button class="payload-btn">[$65] Evil Portal</button>
      <button class="payload-btn">[$95] Credential Harvester</button>
    </div>
  `;
  const formulasContent= `      
    <div class="container" id="millionaire-method-panel">
      <h2>3 Pack Millionaire Method</h2>
      <p>
        Are you ready to step into a new world of financial success? With our <b>3 Pack Millionaire Method</b>, you'll secure three exclusive strategies designed to help you build real wealth in just months:
        <ul>
          <li><b>Fast-Track Finance:</b> Learn how to leverage and grow your capital—even starting from zero.</li>
          <li><b>The Whale Hunter Method:</b> Discover the secrets to pulling in big investors and massive funds.</li>
          <li><b>Passive Income Playbook:</b> Master simple, proven systems that generate steady, passive cash flow.</li>
        </ul>
        <b>This is the same blueprint that jump-started the multi-million dollar marketplace you see today.</b>
        <br><br>
        Start taking action now, and soon you'll have more money than you ever imagined possible. <b>Stick exactly to the methods and watch your income soar!</b> Once you get the hang of it, the sky’s the limit—and you can add your own twist for even bigger cashflow.<br><br>
        <b>Ready to claim your spot? This special bundle won't last long!</b>
      </p>
      <button class="payload-btn">
        <span class="old-price">$175.00</span>
        <span class="new-price">$75</span>
        &nbsp;Method Pack
      </button>
    </div>
    <div class="container" id="offerup-method-panel">
      <h2>OfferUp Method</h2>
      <p>
        This method is relatively simple to learn and execute. You can realistically make $90–$120 within your first two days. With just a bit of experience—which usually takes about two days—you could be earning up to $1,000 every two days. Once you master the process, making as much as $1,000 a day is possible. All you need is a mobile device with access to the App Store to download OfferUp.
      </p>
      <button class="payload-btn">[$65] OfferUp Method</button>
    </div>
    <div class="container" id="doordash-uber-method-panel">
      <h2>DoorDash/Uber Method</h2>
      <p>
        This method is fairly simple to do—all you need is preferably a brand new account, though an existing one can work as well. After mastering the method, usually within your first two tries, you'll be able to get free rides, meals, and credits with ease.
      </p>
      <button class="payload-btn">[$45] DoorDash/Uber Method</button>
    </div>
    <div class="container" id="half-off-method-panel">
      <h2>50% Off Anything</h2>
      <p>
        Slash your total bill in half—anywhere, anytime. Whether you're dining out, grabbing fast food, or shopping for home improvement supplies, this method helps you get what you want for just 50% of the original price. Experience unbeatable savings on every purchase!
      </p>
      <button class="payload-btn">[$] Cover Half Price</button>
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
  `;
  const remedyContent = `
  <div class="container" id="scripts-panel">
    <h1>Marijuana</h1>
    <p>Our carefully curated plants are nurtured and processed to provide a wide range of premium products, including top-tier flowers, concentrated oils, edibles, beverages, and more. Our potent flowers can be enjoyed in various ways. Not sure how much to start with? Begin with an eighth or go all in with up to a pound. Whatever your needs, we've got you covered.</p>
    <button class="payload-btn" id="visit-market-btn" onclick="window.location.href='https://tedzmed.com';">Visit TedzMedz Market</button>
  </div>
  `;

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
