const themes = [
    {
      bodyBg: "radial-gradient(circle at top, #030712 0%, #050816 40%, #000 100%)",
      text: "#e7ecff",
      blockBg: "rgba(10, 16, 40, 0.8)",
      blockBorder: "rgba(133, 179, 255, 0.4)",
      title: "#ffffff"
    },
    {
      bodyBg: "radial-gradient(circle at top, #1c0202 0%, #420909 40%, #000 100%)",
      text: "#ffe6e0",
      blockBg: "rgba(60, 8, 8, 0.85)",
      blockBorder: "rgba(255, 184, 166, 0.7)",
      title: "#ffe6e0"
    },
    {
      bodyBg: "radial-gradient(circle at top, #00110f 0%, #002f29 40%, #000 100%)",
      text: "#e2fff7",
      blockBg: "rgba(0, 40, 33, 0.85)",
      blockBorder: "rgba(160, 245, 215, 0.7)",
      title: "#e2fff7"
    },
    {
      bodyBg: "radial-gradient(circle at top, #06000f 0%, #1b0040 40%, #000 100%)",
      text: "#f2e8ff",
      blockBg: "rgba(35, 3, 80, 0.9)",
      blockBorder: "rgba(210, 180, 255, 0.7)",
      title: "#f7f0ff"
    }
  ];
  
  let currentThemeIndex = 0;

  function applyTheme(theme) {
    document.body.style.background = theme.bodyBg;
    document.body.style.color = theme.text;
  
    const titleEl = document.querySelector(".page-header h1");
    if (titleEl) {
      titleEl.style.color = theme.title || theme.text;
    }
  
    const subtitleEl = document.querySelector(".subtitle");
    if (subtitleEl) {
      subtitleEl.style.color = theme.text;
    }
  
    document.querySelectorAll(".block").forEach(block => {
      block.style.background = theme.blockBg;
      block.style.borderColor = theme.blockBorder;
      block.style.color = theme.text;
    });
  
    const footer = document.querySelector(".page-footer");
    if (footer) {
      footer.style.color = theme.text;
    }
  }

  applyTheme(themes[currentThemeIndex]);


  document.querySelectorAll(".block").forEach(block => {
    block.addEventListener("click", () => {
      currentThemeIndex = (currentThemeIndex + 1) % themes.length;
      applyTheme(themes[currentThemeIndex]);
    });
  });