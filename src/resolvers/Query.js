import { merge } from 'lodash';

import InfoResolvers from './query/InfoResolvers';
import RecipeResolvers from './query/RecipeResolvers';

const Query = merge(InfoResolvers, RecipeResolvers);

module.exports = Query;
