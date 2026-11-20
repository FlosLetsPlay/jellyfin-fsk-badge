(function () {
  const FSK_LOGOS = {
    "FSK-0": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-0.png",
    "FSK 0": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-0.png",
    "FSK-6": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-6.png",
    "FSK 6": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-6.png",
    "FSK-12": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-12.png",
    "FSK 12": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-12.png",
    "FSK-16": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-16.png",
    "FSK 16": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-16.png",
    "FSK-18": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-18.png",
    "FSK 18": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-18.png",
    "Unrated": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/fsk-folgt.png",
    "Infoprogramm": "https://raw.githubusercontent.com/FlosLetsPlay/jellyfin-fsk-badge/refs/heads/main/fsk-badges/lehrprogramm.png",
  };

function formatFskTitle(text) {
    if (text === "Unrated") {
      return "von der FSK ungeprüft";
    }

    if (text === "Lernprogramme") {
      return "Lernprogramm gemäß §14 JuSchG";
    }

    const match = text.match(/\d+/);
    if (!match) return text;
    if (match[0] === "0") return "Freigegeben ohne Altersbeschränkung";

    return `Freigabe ab ${match[0]} Jahren`;
  }

  function replaceOfficialRatings(root = document) {
    const items = root.querySelectorAll("div.mediaInfoOfficialRating");

    items.forEach((el) => {
      if (el.dataset.fskDone === "true") return;

      const text = (el.textContent || "").trim();
      const logoUrl = FSK_LOGOS[text];
      if (!logoUrl) return;

      const label = formatFskTitle(text);

      const img = document.createElement("img");
      img.src = logoUrl;
      img.alt = label;
      img.title = label;
      img.loading = "lazy";
      img.style.height = "60px";
      img.style.width = "auto";
      img.style.display = "block";

      el.style.background = "transparent";
      el.style.border = "none";
      el.style.padding = "0";

      el.replaceChildren(img);
      el.dataset.fskDone = "true";
    });
  }

  replaceOfficialRatings();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.matches?.("div.mediaInfoOfficialRating")) {
            replaceOfficialRatings(node.parentElement || document);
          } else if (node.querySelector?.("div.mediaInfoOfficialRating")) {
            replaceOfficialRatings(node);
          }
        }
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
