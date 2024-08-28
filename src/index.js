console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    function handleImages() {
        fetch(imgUrl)
          .then(response => response.json())
          .then(data => {
            console.log("Image data received:", data);
            const imageContainer = document.getElementById("dog-image-container");
            data.message.forEach(imageUrl => {
              const imgElement = document.createElement("img");
              imgElement.src = imageUrl;
              imageContainer.appendChild(imgElement);
            });
          })
          .catch(error => console.log("Image fetch error:", error)
  )};
  handleImages();

    function handleBreedList() {
        fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            
            const breedList = data.message;
            const ulElement = document.getElementById("dog-breeds");
            
          for (const breed in breedList) {
            const liElement = document.createElement("li");
            liElement.textContent = breed;
            ulElement.appendChild(liElement);
            
        }
        handleTextColor();
    })
    
    .catch(error => console.log("Breed list fetch error:", error));
    
}

handleBreedList();
handleSelectBreedFilter()
});

function handleTextColor() {
  const liElements = document.querySelectorAll("li");
  console.log('Grabbed breed list', liElements)

  liElements.forEach(function(li) {
    li.addEventListener("click", function() {
      this.style.color = "red";
      
    });
  });
}


function handleSelectBreedFilter() {
  const dropdown = document.getElementById("breed-dropdown");
  console.log("Grabbed dropdown", dropdown);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let ii = 4; ii < alphabet.length; ii++) {
  const letter = alphabet[ii];
  const option = document.createElement("option");
  option.value = letter;
  option.text = letter;
  dropdown.add(option)
  }
 dropdown.addEventListener("change", function() {
    const selectedLetter = dropdown.value;
  console.log("Selected letter -", selectedLetter);
    
    

    const breedList = document.getElementById("dog-breeds");
    const breedElements = breedList.getElementsByTagName("li")

    for (let ii = 0; ii < breedElements.length; ii++) {
      const breedElement = breedElements[ii];
      const breedName = breedElement.textContent;

      if (breedName.startsWith(selectedLetter)) {
        breedElement.style.display = "block";
    } else {
        breedElement.style.display = "none";
    
    }};
  });
} 

 


