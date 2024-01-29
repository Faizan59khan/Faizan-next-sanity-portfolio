import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";

export default defineConfig({
	name: "sanity-nextjs-site",
	title: "Sanity Next.js Site",
	projectId: "dy52opb7",
	dataset: "production",
	basePath: "/studio",
	plugins: [deskTool()],
	schema: { types: schemaTypes },
});
