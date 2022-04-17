const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was  94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs  300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  //create a new variable
  let newStory = storyText;

  //create 3 more varibales, xitem, yitem, zitem
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  //place: insertx: : inserty: :insertz:
  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);



  if(customName.value !== '') {
    const name = customName.value;
    //step 4 - find bob, replace name
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    //replace 300 with formula for conversion formula
    const weight = Math.round(300 * 0.071429) + " stone";
    // let stringWeight = weight.toString();
    //turn weight into a string
    //add string and stone together to create one string
      //convert Math.round to a string and set to stone -
    newStory = newStory.replace(' 300 pounds', weight);

    const temperature =  Math.round((94 - 32) / 1.8 ) + "  centigrade";
    newStory = newStory.replace(' 94 fahrenheit', temperature);
    //convert fahrenheit to centigrade


    //replace values in string with temp and weight variables
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
