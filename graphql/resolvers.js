const andrew = {
  name: "Andrew",
  age: 30,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => andrew
  }
};

export default resolvers;
