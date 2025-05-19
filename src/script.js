function displayPoem(response){

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay:1,
        cursor: null,
      });
}


function generatePoem(event){
    event.preventDefault();

    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "ac1ob0c23605383a53a4b5df9ca98f4t";
    let prompt = `Generate a poem about ${instructionInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems.Your mission is to generate a 4 line poem in and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    
    axios.get(apiUrl).then(displayPoem);

}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);