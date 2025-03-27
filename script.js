document.addEventListener("DOMContentLoaded", function() {
  const passwordModal = document.getElementById("password-modal");
  const mainContent = document.getElementById("main-content");
  const submitButton = document.getElementById("password-submit");
  const usernameInput = document.getElementById("username-input");
  const passwordInput = document.getElementById("password-input");
  const errorMessage = document.getElementById("error-message");
  const logoutNavItem = document.getElementById("nav-logout"); // Logout nav item

  // List of users and their credentials
  const users = [
    { username: "swiping.cc", password: "admin!" },
    { username: "Tedzmed", password: "Admin!@" },
    // Add more users here
  ];

  // Function to check password and show the main content
  function checkPassword() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered username and password match any of the users
    const user = users.find(u => u.username === enteredUsername && u.password === enteredPassword);

    if (user) {
      // User found, log them in
      passwordModal.classList.add("hidden");
      mainContent.classList.remove("hidden");
    } else {
      // Incorrect username or password
      errorMessage.textContent = "Incorrect username or password. Please try again.";
      usernameInput.value = "";
      passwordInput.value = "";
      setTimeout(() => {
        errorMessage.textContent = "";
      }, 2000);
    }
  }

  // Event listeners for submitting the password
  submitButton.addEventListener("click", checkPassword);
  usernameInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      checkPassword();
    }
  });
  passwordInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      checkPassword();
    }
  });

  // Event listener for logging out from the nav menu
  logoutNavItem.addEventListener("click", function() {
    mainContent.classList.add("hidden"); // Hide main content
    passwordModal.classList.remove("hidden"); // Show the login modal
    usernameInput.value = "";
    passwordInput.value = "";
  });

  const navHome = document.getElementById("nav-home");
  const navHacking = document.getElementById("nav-hacking");
  const navTrickery = document.getElementById("nav-trickery");
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

    <div class="container" id="scripts-panel">
      <h1>Account</h1>
      <p>We offer a daily-updated list of pre-validated accounts for various services, ranging from streaming platforms to account management. Additionally, you can request one of our specialists to gather and provide login credentials for any social media account of your choice, including Instagram, Snapchat, and more.</p>
      <button class="payload-btn">[$10] Netflix/Hulu/HBO/Disney+</button>
      <button class="payload-btn">[$7] CruncyRoll/Peacock/Roku</button>
      <button class="payload-btn">[$7] YoutubeTV/AppleTV/SlingTV </button>
      <button class="payload-btn">[$5] AMC+/Paramount+</button>
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
    <button class="payload-btn" onclick="window.location.href='https://tedzmed.com';">Visit TedzMedz Market</button>
  </div>
`;

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

  navHome.addEventListener("click", () => {
    setActiveNav("nav-home");
    document.getElementById("content-panels").innerHTML = homeContent;
  });

  navHacking.addEventListener("click", () => {
    setActiveNav("nav-hacking");
    document.getElementById("content-panels").innerHTML = hackingContent;

    // Attach event listeners after injecting the content
    document.getElementById("grab-ip-btn").addEventListener("click", grabIP);
    document.getElementById("ping-ip-btn").addEventListener("click", pingIP);
  });

  navTrickery.addEventListener("click", () => {
    setActiveNav("nav-trickery");
    document.getElementById("content-panels").innerHTML = trickeryContent;
  });

  navSoftware.addEventListener("click", () => {
    setActiveNav("nav-software");
    document.getElementById("content-panels").innerHTML = softwareContent;
  });
  
  navRemedy.addEventListener("click", () => {
    setActiveNav("nav-remedy");
    document.getElementById("content-panels").innerHTML = remedyContent;
  });

  function grabIP() {
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        const ipAddress = data.ip;
        alert(`Your IP Address is: ${ipAddress}`);
  
        // Copy the IP address to the clipboard immediately for mobile users
        if (navigator.clipboard) {
          navigator.clipboard.writeText(ipAddress)
            .then(() => {
              console.log('IP address copied to clipboard');
            })
            .catch(error => {
              console.error('Failed to copy IP address to clipboard:', error);
            });
        } else {
          // Fallback for older browsers or if clipboard API is unsupported
          var textarea = document.createElement('textarea');
          textarea.value = ipAddress;
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
          console.log('IP address copied to clipboard');
        }
      })
      .catch(error => {
        alert('Failed to retrieve IP address.');
        console.error('Error fetching IP:', error);
      });
  }
  
  

  function pingIP() {
    const ipAddress = prompt("Enter the IP address to ping:");
    if (!ipAddress) return;

    fetch(`http://ip-api.com/json/${ipAddress}`)
      .then(response => response.json())
      .then(data => {
        const message = data.status === "fail"
          ? `Pinging ${ipAddress}... Status: Failed. IP not found or unreachable.`
          : `Connected to: ${ipAddress}... Location: ${data.city}, ${data.country}. ISP: ${data.isp}. Latitude: ${data.lat}, Longitude: ${data.lon}`;

        alert(message);
      })
      .catch(() => {
        alert("Error: Unable to fetch IP details.");
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  // Toggle the hamburger menu
  mobileMenu.addEventListener("click", function() {
    navMenu.classList.toggle("active");
  });

  // Auto-close the menu when a nav item is selected
  const navItems = document.querySelectorAll(".nav-menu li");
  navItems.forEach(item => {
    item.addEventListener("click", function() {
      // Only remove "active" if it's present (menu is open)
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const introScreen = document.getElementById("intro-screen");

  // Trigger the exit animation after 3 seconds
  setTimeout(() => {
    introScreen.classList.add("exit");
    // Remove the intro screen after the exit animation completes (1s)
    setTimeout(() => {
      introScreen.remove();
    }, 1000); // match the duration of bounceDownFade
  }, 3000);
});
