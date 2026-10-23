/**
 * Title: JavaScript Algorithm Lab: Record Collection
 * Description: Implements a record collection manager to update, add, or delete properties of musical albums dynamically based on specific conditions.
 * 
 * User Stories & Requirements:
 * 1. Always returns the entire records object.
 * 2. Deletes the property if the value is an empty string ("").
 * 3. Assigns the value to the property if prop is not "tracks" and value is not empty.
 * 4. Creates an empty array and adds the value if prop is "tracks" and the property doesn't exist yet.
 * 5. Pushes the value to the end of the existing tracks array if prop is "tracks" and value is not empty.
 */

const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop !== "tracks") {
    records[id][prop] = value;
  } else if (!records[id].hasOwnProperty("tracks")) {
    records[id].tracks = [value];
  } else {
    records[id].tracks.push(value);
  }

  return records;
}

