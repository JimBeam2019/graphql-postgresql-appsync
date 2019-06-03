const recipes = [
    {
        title: 'Cheese Cake',
        type: 1
    },
    {
        title: 'Pizza',
        type: 2
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