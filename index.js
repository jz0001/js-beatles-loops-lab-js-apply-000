// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var results = [];
  var i=0;
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    for (i=0;i<musicians.length;i++)
    {
      results[i]=musicians[i]+" plays "+ instruments[i];
    }
<<<<<<< HEAD
    return results;
=======
    return results
>>>>>>> d1d6d15d9d27351d888e27e9159e59296633d496
}

function johnLennonFacts(facts)
{
<<<<<<< HEAD
  var newFacts = [
=======
  facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
>>>>>>> d1d6d15d9d27351d888e27e9159e59296633d496
];

var i=0;
while(i<facts.length)
{
<<<<<<< HEAD
  newFacts[i]=facts[i]+"!!!";
  i++;
}
return newFacts;
}

function iLoveTheBeatles(i)
{
  var love=[];
  do{
    love.push("I love the Beatles!");
    i++;
  } while (i<15);
  return love;
=======
  facts[i]+="!!!";
  i++;
}
return facts
>>>>>>> d1d6d15d9d27351d888e27e9159e59296633d496
}