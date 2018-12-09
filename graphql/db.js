export const people = [
  {
    id: "0",
    name: "Andrew",
    age: 30,
    gender: "male"
  },
  {
    id: 1,
    name: "Ryan",
    age: 29,
    gender: "male"
  },
  {
    id: 2,
    name: "Connie",
    age: 26,
    gender: "female"
  },
  {
    id: 3,
    name: "Jeff",
    age: 11,
    gender: "male"
  },
  {
    id: 4,
    name: "Tender",
    age: 44,
    gender: "female"
  },
  {
    id: 5,
    name: "Lucy",
    age: 15,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => id === people.id);
  return filteredPeople[0];
};
