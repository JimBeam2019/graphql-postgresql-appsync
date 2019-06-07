import { gql } from 'apollo-server';

const typeDefs = gql`

  enum MealType {
    STARTER
    MAIN_COURSE
    DESERT
  }

  type Recipe {
    title: String
    type: MealType!
  }

  type Query {
    info: String
    cookbook: [Recipe!]
  }
`;

module.exports = typeDefs;
