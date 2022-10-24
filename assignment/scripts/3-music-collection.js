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
addToCollection('Everything Now', 'Arcade Fire', 2017);
addToCollection('My Cherie Amour', 'Stevie Wonder', 1969);
addToCollection('Bon Iver', 'Bon Iver', 2011);
addToCollection('Rumors', 'Fleetwood Mac', 1977);
addToCollection('Neon Bible', 'Arcade Fire', 2007);
addToCollection('Let It Bleed', 'Rolling Stones', 1969);
addToCollection('Led Zeppelin II', 'Led Zeppelin', 1969);
addToCollection('American Teen', 'Khalid', 2017);
addToCollection('Wasting Light', 'Foo Fighters', 2011);
