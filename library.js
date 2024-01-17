
document.addEventListener('DOMContentLoaded', function () {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then(function (response) {
            return response.json();
        })
        .then(function (books) {
            displayBooks(books);
        })
        .catch(function (error) {
            console.error('Error fetching books:', error);
        });
});

function displayBooks(books) {
    const bookContainer = document.getElementById('bookContainer');

    books.forEach(function (book) {
        const card = document.createElement('div');
        card.className = 'col-md-4 lg-3';

        card.innerHTML = `
            <div class="card">
                <img src="${book.img}" class="card-img-top" alt="Book Cover">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">Price: $${book.price}</p>
                </div>
            </div>
        `;

        bookContainer.appendChild(card);
    });
}

