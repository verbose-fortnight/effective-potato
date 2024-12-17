let currentLanguage = 'en';

// Function to toggle between home and story content
function showStory() {
  document.getElementById('homePage').style.display = "none"; // Hide the homepage section
  document.getElementById('storyContent').style.display = "block"; // Show the story content
}

// Function to go back to homepage
function goHome() {
  document.getElementById('storyContent').style.display = "none"; // Hide story content
  document.getElementById('homePage').style.display = "flex"; // Show the homepage section again
}

// Toggle language between English and Indonesian
function toggleLanguage() {
  if (currentLanguage === 'en') {
    document.querySelector('h1').textContent = 'Bab';
    document.querySelector('.story-title').textContent = 'Perjalanan Zapzo: Pencarian Nebula yang Hilang';
    document.querySelector('.story-details p').textContent = 'Total Bab: 10';
    document.querySelector('.story-status').textContent = 'Sedang Berlangsung';
    currentLanguage = 'id';
    document.querySelector('.language-btn').textContent = 'ID';
  } else {
    document.querySelector('h1').textContent = 'Chapters';
    document.querySelector('.story-title').textContent = 'Zapzo\'s Journey: The Quest for the Lost Nebula';
    document.querySelector('.story-details p').textContent = 'Total Chapters: 10';
    document.querySelector('.story-status').textContent = 'Ongoing';
    currentLanguage = 'en';
    document.querySelector('.language-btn').textContent = 'EN';
  }
}