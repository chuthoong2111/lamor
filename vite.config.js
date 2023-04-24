const path = require("path");
import * as content from "./src/content.json";
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import helpers from "handlebars-helpers";
// import * as data from "./src/data.json";
export default defineConfig({
	root: path.resolve(__dirname, "src"),

	server: {
		port: 8080,
		hot: true,
	},
	css: {
		devSourcemap: true, // this one
	},
	plugins: [
		handlebars({
			helpers: {
				range: function (start, end) {
					const result = [];
					for (let i = start; i <= end; i++) {
						result.push(i);
					}
					return result;
				},
				ifEqual: function (a, b, options) {
					if (a === b) {
						return options.fn(this);
					} else {
						return options.inverse(this);
					}
				},
			},
			onBeforeSave: function (_Handlebars, res, file) {
				const elem = file.split("//").pop().split("/").length;
				return res.split("{{webRoot}}").join(".".repeat(elem));
			},
			// add data
			context: content,
			// add partial
			partialDirectory: resolve(__dirname, "src", "partials"),
			compileOptions: {
				preventIndent: true,
			},
			reloadOnPartialChange: true,
		}),

		viteStaticCopy({
			targets: [
				{
					src: "assets/images",
					dest: "assets",
				},
			],
		}),
	],
	preview: {
		port: 9090,
	},
	build: {
		// [hash][extname]
		rollupOptions: {
			input: {
				index: resolve(__dirname, "src", "index.html"),
				roomlist: resolve(__dirname, "src", "roomlist.html"),
				tourlist: resolve(__dirname, "src", "tourlist.html"),
				newslist: resolve(__dirname, "src", "newslist.html"),
				tourdetail: resolve(__dirname, "src", "tourdetail.html"),
				roomdetail: resolve(__dirname, "src", "roomdetail.html"),
				gallery: resolve(__dirname, "src", "gallery.html"),
				about: resolve(__dirname, "src", "about.html"),
				contact: resolve(__dirname, "src", "contact.html"),
				booking: resolve(__dirname, "src", "booking.html"),
			},
			output: {
				assetFileNames: (assetInfo) => {
					let extType = assetInfo.name.split(".")[1];
					if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
						extType = "images";
					} else if (/woff|woff2|eot|ttf/.test(extType)) {
						extType = "fonts";
					}
					return `assets/${extType}/[name][extname]`;
				},
				chunkFileNames: "assets/js/[name].js",
				entryFileNames: "assets/js/[name].js",
			},
		},
	},
});
