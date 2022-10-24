console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    newAddition.title = title;
    newAddition.artist = artist;
    newAddition.yearPublished = yearPublished;
    collection.push(newAddition);
    return newAddition;
}

addToCollection('In Rainbows', 'Radiohead', 2007);
console.log(newAddition);