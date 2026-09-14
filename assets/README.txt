ASSETS FOLDER
=============

To show your real profile photo in the About section:

1. Save the "President" announcement image (or any clear photo of yourself) 
   as:  assets/profile.jpg

2. Then replace this block in index.html (inside about__photo-frame):

   <div class="about__photo-mock"> ... </div>

   With:

   <img src="assets/profile.jpg" alt="Naqiya Tabassum" />

The CSS is already set up to display it correctly (object-fit: cover, 
object-position: center top, border-radius: var(--radius-lg)).
