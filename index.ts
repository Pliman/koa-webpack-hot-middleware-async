import * as webpackHotMiddleware from 'webpack-hot-middleware'

export default (compiler, options?) => {
	let hot = webpackHotMiddleware(compiler, options)

	return async function (ctx, next) {
		let originalEnd = ctx.res.end;

		await new Promise((resolve) => {
			ctx.res.end = function() {
				originalEnd.apply(this, arguments)
				resolve()
			}

			hot(ctx.req, ctx.res, function () {
				resolve()
			})
		})

		await next()
	}
}


