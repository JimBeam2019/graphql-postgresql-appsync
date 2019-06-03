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
        recipes: [Recipe]
    }
`;

module.exports = {
    typeDefs
};