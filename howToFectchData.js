document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.querySelector('.main-container');

    // Function to create and append stock items
    const renderStocks = (stocksData) => {
        mainContainer.innerHTML = ''; // Clear the container first
        stocksData.forEach(obj => {
            const stockContainer = document.createElement('div');
            stockContainer.className = "stock-container";

            const imageDiv = document.createElement('div');
            imageDiv.className = "image";
            const theImage = document.createElement('img');
            theImage.src = obj.image;
            imageDiv.appendChild(theImage);
            stockContainer.appendChild(imageDiv);

            const inforMation = document.createElement('div');
            inforMation.className = "info";

            const tiTle = document.createElement('div');
            tiTle.className = "title";
            const h4Element = document.createElement('h4');
            h4Element.innerText = obj.title;
            tiTle.appendChild(h4Element);
            inforMation.appendChild(tiTle);

            const coSt = document.createElement('div');
            coSt.className = "cost";
            const spanOne = document.createElement('span');
            spanOne.innerText = obj.cost;
            coSt.appendChild(spanOne);
            inforMation.appendChild(coSt);

            const staRs = document.createElement('div');
            staRs.className = "stars";
            const spanTwo = document.createElement('span');
            spanTwo.innerText = obj.stars;
            staRs.appendChild(spanTwo);
            inforMation.appendChild(staRs);

            stockContainer.appendChild(inforMation);
            mainContainer.appendChild(stockContainer);
        });
    };

    // Function to fetch data from API
    const fetchStocksData = async () => {
        try {
            const response = await fetch('https://api.example.com/stocks'); // Replace with your API endpoint
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            renderStocks(data); // Use the data to render stock items
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    // Initial fetch and render
    fetchStocksData();
});
