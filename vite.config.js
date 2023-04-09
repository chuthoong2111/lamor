const path = require("path");
import * as content from "./src/content.json";
import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import { viteStaticCopy } from "vite-plugin-static-copy";

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
				webRoot: function () {
					return "{{webRoot}}";
				},
				config: function (data) {
					return data;
				},
				ifEquals: function (arg1, arg2, options) {
					if (arg1 === arg2) {
						return options.fn(this);
					}
					return options.inverse(this);
				},
				log: function (data) {
					console.log(data);
				},
				limit: function (arr, limit) {
					if (!Array.isArray(arr)) {
						return [];
					}
					return arr.slice(0, limit);
				},
			},
			onBeforeSave: function (_Handlebars, res, file) {
				const elem = file.split("//").pop().split("/").length;
				return res.split("{{webRoot}}").join(".".repeat(elem));
			},
			context: content,
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
				detail: resolve(__dirname, "src", "detail.html"),
				// service: resolve(__dirname, "src", "service.html"),
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
