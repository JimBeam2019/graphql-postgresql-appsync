import { gql } from 'apollo-server';

const typeDefs = gql`
    # enum MEAL_TYPE {
    #     STARTER: 1
    #     MAIN_COURSE: 2
    #     DESERT: 3
    # }

    type Recipe {
        title: String
        type: Int
    }

    type Query {
        recipes: [Recipe]
    }
`;

module.exports = {
    typeDefs
};