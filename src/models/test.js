
export default {
    namespace: 'test',

    state: {
    },
    effects: {
    },
    reducers:{
        setBase(state, { payload }) {
            return {
                ...state,
                base: payload,
            };
        },
        setPage(state, { payload }) {
            return {
                ...state,
                page: payload,
            };
        },
    }
}