document.addEventListener("DOMContentLoaded", () => {
    const movies = [
        { title: "MARCO", image: "https://m.media-amazon.com/images/M/MV5BMDNkZmZlOWEtMjIxYS00MzMwLTg4ODYtMDRmNzY2NjY3NDdkXkEyXkFqcGc@._V1_.jpg" },
        { title: "Avengers", image: "assets/movie2.jpg" },
        { title: "Interstellar", image: "assets/movie3.jpg" },
        { title: "The Dark Knight", image: "assets/movie4.jpg" },
        { title: "Titanic", image: "assets/movie5.jpg" }
    ];

    const movieList = document.getElementById("movie-list");

    // Function to display movies with delay effect
    function displayMovies(filteredMovies) {
        movieList.innerHTML = "";
        filteredMovies.forEach((movie, index) => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            movieDiv.style.animation = `fadeInUp 0.5s ease ${index * 0.1}s forwards`; // Staggered Animation
            movieDiv.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}">
                <p>${movie.title}</p>
            `;
            movieList.appendChild(movieDiv);
        });
    }

    // Initial movie load
    displayMovies(movies);

    // Search functionality
    document.getElementById("search-bar").addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
        displayMovies(filteredMovies);
    });

    // Shrink Header on Scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("shrink");
        } else {
            header.classList.remove("shrink");
        }
    });


});
const video = document.querySelector('video');
const container = document.querySelector('.container');

container.addEventListener('mouseenter', () => {
    video.play();
});

container.addEventListener('mouseleave', () => {
    video.pause();
});
