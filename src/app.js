export const ssr = {
    modifyGetInitialPropsCtx: async (ctx) => {
        console.log(ctx,12313)
        ctx.test = "test"
    }
}