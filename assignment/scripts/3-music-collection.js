console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished){
    const newAddition = title + artist + yearPublished;
    newAddition.title = title;
    newAddition.artist = artist;
    newAddition.yearPublished = yearPublished;
    collection.push(newAddition);
    return newAddition;
}

addToCollection('In Rainbows', 'Radiohead', 2007);
console.log('First Album:', collection.push);
addToCollection('Everything Now', 'Arcade Fire', 2017);
console.log('Second Album:', collection.push);
addToCollection('My Cherie Amour', 'Stevie Wonder', 1969);
console.log('Third Album:', collection.push);
addToCollection('Bon Iver', 'Bon Iver', 2011);
console.log('Fourth Album:', collection.push);
addToCollection('Rumors', 'Fleetwood Mac', 1977);
console.log('Fifth Album:', collection.push);
addToCollection('Neon Bible', 'Arcade Fire', 2007);
console.log('Sixth Album:', collection.push);
addToCollection('Let It Bleed', 'Rolling Stones', 1969);
console.log('Seventh Album:', collection.push);
addToCollection('Led Zeppelin II', 'Led Zeppelin', 1969);
console.log('Eighth Album:', collection.push);
addToCollection('American Teen', 'Khalid', 2017);
console.log('Ninth Album:', collection.push);
addToCollection('Wasting Light', 'Foo Fighters', 2011);
console.log('Tenth Album:', collection.push);
