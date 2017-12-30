import R from 'ramda';
import immutable from 'seamless-immutable';

const isImmutable = R.has('asMutable');

const convertToJs = state => state.asMutable({ deep: true });

const fromImmutable = R.when(isImmutable, convertToJs);

const toImmutable = raw => immutable(raw);

export default {
  out: (state) => {
    if (state) {
      state.mergeDeep = R.identity; // eslint-disable-line
    }
    return toImmutable(state);
  },
  in: raw => fromImmutable(raw),
};
