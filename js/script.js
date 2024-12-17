let currentLanguage = 'en';

// Wait for the content to load and hide the loading screen
document.addEventListener('DOMContentLoaded', () => {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500); // Simulate loading time
  }
});

// Function to toggle between home and story content
function showStory() {
  const homePage = document.getElementById('homePage');
  const storyContent = document.getElementById('storyContent');

  if (homePage && storyContent) {
    homePage.style.display = "none"; // Hide the homepage section
    storyContent.classList.add('visible'); // Show the story content
  }
}

// Function to go back to homepage
function goHome() {
  const homePage = document.getElementById('homePage');
  const storyContent = document.getElementById('storyContent');

  if (homePage && storyContent) {
    storyContent.classList.remove('visible'); // Hide story content
    homePage.style.display = "flex"; // Show the homepage section again
  }
}

// Toggle language between English and Indonesian
function toggleLanguage() {
  const title = document.querySelector('h1');
  const storyTitle = document.querySelector('.story-title');
  const totalChapters = document.querySelector('.story-details p');
  const storyStatus = document.querySelector('.story-status');
  const languageBtn = document.querySelector('.language-btn');

  if (title && storyTitle && totalChapters && storyStatus && languageBtn) {
    if (currentLanguage === 'en') {
      // Switch to Indonesian
      title.textContent = 'Bab';
      storyTitle.textContent = 'Perjalanan Zapzo: Pencarian Nebula yang Hilang';
      totalChapters.textContent = 'Total Bab: 10';
      storyStatus.textContent = 'Sedang Berlangsung';
      languageBtn.textContent = 'ID';
      currentLanguage = 'id';
    } else {
      // Switch back to English
      title.textContent = 'Chapters';
      storyTitle.textContent = "Zapzo's Journey: The Quest for the Lost Nebula";
      totalChapters.textContent = 'Total Chapters: 10';
      storyStatus.textContent = 'Ongoing';
      languageBtn.textContent = 'EN';
      currentLanguage = 'en';
    }
  }
}