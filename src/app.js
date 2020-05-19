export async function getInitialState() {
    return {
        me:null,//window.g_initialProps.user.me,
    };
}

export const ssr = {
    modifyGetInitialPropsCtx: async (ctx) => {
        console.log(ctx,12313)
        ctx.test = "test"
    }
}