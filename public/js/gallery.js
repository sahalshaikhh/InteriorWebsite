document.addEventListener('DOMContentLoaded', function () {
    var dropdownSelect = document.querySelector('.dropdown-select');
    var dropdownOptions = document.querySelector('.dropdown-options');
    var dropdown = document.querySelector('.dropdown');

    // dropdownSelect.addEventListener('click', function () {
    //     console.log("clicked");
    //     dropdownOptions.style.display = (dropdownOptions.style.display === 'block') ? 'none' : 'block';
    // });

    // dropdownOptions.addEventListener('click', function (e) {
    //     if (e.target.tagName === 'A') {
    //         dropdownSelect.textContent = e.target.textContent;
    //         dropdownOptions.style.display = 'none';
    //     }
    // });

    // document.addEventListener('click', function (e) {
    //     if (!dropdown.contains(e.target) && e.target !== dropdownSelect) {
    //         dropdownOptions.style.display = 'none';
    //     }
    // });
    var onClickHandle = document.querySelector(".btn-page");
    var onClickHandleBack = document.querySelector(".btn-page-2");

    var productContainer = document.getElementById("productContainer");

    let page = 1;

    onClickHandle.addEventListener('click', () => {
        // Clear existing content
        productContainer.innerHTML = "";

        page++;

        fetch(`/ApiData?page=${page}`)
            .then(response => response.json())
            .then(data => {

                // Handle the response from the backend
                console.log("Data", data);
                if (data.nbHits != 0) {
                    // Use only the desired data (data.myData)
                    data.myData.forEach(product => {
                        var newProductDiv = document.createElement("div");
                        newProductDiv.classList.add("main-img", "w-[30%]", "mx-4", "my-4", "relative", "ApiDataFetched");
                        newProductDiv.innerHTML = `
                        <img src="${product.image}" class="h-full" alt="Product Image" />
                        <div class="show p-4 absolute text-center top-0 h-full w-full hidden">
                            <h1 class="text-white">${product.name}</h1>
                            <p class="disc text-white">${product.desc}</p>
                            <small class="type text-white">Type: ${product.category}</small><br /><br />
                        </div>
                    `;
                        productContainer.appendChild(newProductDiv);
                    });
                } else {
                    alert("No more products! please go back");
                    onClickHandle.disabled = true;
                    onClickHandle.style.cursor = 'no-drop'
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log(page);


        onClickHandleBack.disabled = false;
        onClickHandleBack.classList.remove("disableBtn")
    })

    onClickHandleBack.addEventListener('click', () => {
        // Clear existing content
        productContainer.innerHTML = "";

        if (page > 1) {
            page--;

            fetch(`/ApiData?page=${page}`)
                .then(response => response.json())
                .then(data => {
                    // Handle the response from the backend
                    console.log("Data", data);

                    // Use only the desired data (data.myData)
                    data.myData.forEach(product => {
                        var newProductDiv = document.createElement("div");
                        newProductDiv.classList.add("main-img", "w-[30%]", "mx-4", "my-6", "relative", "ApiDataFetched");
                        newProductDiv.innerHTML = `
                            <img src="${product.image}" class="h-full" alt="Product Image" />
                            <div class="show p-4 absolute text-center top-0 h-full w-full hidden">
                                <h1 class="text-white">${product.name}</h1>
                                <p class="disc text-white">${product.desc}</p>
                                <small class="type text-white">Type: ${product.category}</small><br /><br />
                            </div>
                        `;
                        productContainer.appendChild(newProductDiv);
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                });

            console.log(page);
        }

        // Disable the "<" button and add a class if it's the first page
        if (page === 1) {
            onClickHandleBack.disabled = true;
            onClickHandleBack.classList.add("disableBtn");
        }
    });

})  
