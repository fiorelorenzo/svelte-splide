import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import html from '@rollup/plugin-html';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default async CLIArgs => {
	const urlPrefix = CLIArgs.configUrlPrefix;

	const htmlOptions = {
		template: ({ attributes, bundle, files, publicPath, title }) => {
			const scripts = (files.js || []).map(({ fileName }) => `<script defer src="${urlPrefix || ""}/${fileName}"></script>`).join("\n");

			const css = (files.css || []).map(({ fileName }) => `<link rel="stylesheet" href="${urlPrefix || ""}/${fileName}" />`).join("\n");

			return `<!DOCTYPE html>
<html>
	<head>
		<meta charset='utf-8'>
		<meta name='viewport' content='width=device-width,initial-scale=1'>
		<title>Svelte Splide demo</title>

		<link rel='icon' type='image/png' href='"${urlPrefix || ""}/favicon.png'>
		<link rel='stylesheet' href='"${urlPrefix || ""}/global.css'>
		${css}

		${scripts}
	</head>

	<body>
	</body>
</html>
			`;
		}
	};

	return {
		input: 'src/main.js',
		output: {
			sourcemap: true,
			format: 'iife',
			name: 'app',
			dir: 'build',
			entryFileNames: 'bundle-[hash].js'
		},
		plugins: [
			del({
				targets: ['build/*'],
				runOnce: !production
			}),

			copy({
				targets: [
					{ src: 'public/*', dest: 'build' }
				],
				copyOnce: !production
			}),

			svelte({
				// enable run-time checks when not in production
				dev: !production,
				emitCss: true
			}),

			postcss({
				extract: true,
				minimize: production,
				sourceMap: true,
				plugins: []
			}),

			html(htmlOptions),

			// If you have external dependencies installed from
			// npm, you'll most likely need these plugins. In
			// some cases you'll need additional configuration -
			// consult the documentation for details:
			// https://github.com/rollup/plugins/tree/master/packages/commonjs
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			// In dev mode, call `npm run start` once
			// the bundle has been generated
			!production && serve(),

			// Watch the `public` directory and refresh the
			// browser on changes when not in production
			!production && livereload('public'),

			// If we're building for production (npm run build
			// instead of npm run dev), minify
			production && terser()
		],
		watch: {
			clearScreen: false
		}
	}
};
