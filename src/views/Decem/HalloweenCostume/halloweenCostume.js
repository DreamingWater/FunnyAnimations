// Get all the emoji elements and the costume image
const emojiElements = document.querySelectorAll('.emoji');
const costumeImage = document.getElementById('costume-image');

// Add click event listener for each emoji
emojiElements.forEach(emoji => {
    emoji.addEventListener('click', function () {
        // Remove "selected" class from all emojis
        emojiElements.forEach(e => e.classList.remove('selected'));

        // Add "selected" class to the clicked emoji
        this.classList.add('selected');

        // Remove the "hidden" class to show the image
        costumeImage.classList.remove('hidden');

        // Update the costume image based on the selected emoji's alt attribute
        const selectedEmojiAlt = this.alt;
        costumeImage.src = generateCostume(selectedEmojiAlt);
    });
});

// Function to generate costume image based on emoji alt
function generateCostume(emojiAlt) {
    if (emojiAlt === 'emoji1') {
        return 'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f921/u1f921_u1f47b.png?fbx';
    } else if (emojiAlt === 'emoji2') {
        return 'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f608/u1f608_u1f47b.png?fbx';
    } else if (emojiAlt === 'emoji3') {
        return 'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f47b/u1f47b_u1f383.png?fbx';
    } else if (emojiAlt === 'emoji4') {
        return 'https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u1f4a9/u1f4a9_u1f47b.png?fbx';
    } else if (emojiAlt === 'emoji5') {
        return 'https://www.gstatic.com/android/keyboard/emojikitchen/20230803/u1f47e/u1f47e_u1f47b.png?fbx';
    }
}