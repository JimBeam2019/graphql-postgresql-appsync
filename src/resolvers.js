const recipes = [
    {
        title: 'Cheese Cake',
        type: 'DESERT'
    },
    {
        title: 'Pizza',
        type: 'MAIN_COURSE'
    }
];

const resolvers = {
    Query: {
        recipes: () => recipes,
    },
};

module.exports = {
    resolvers
};