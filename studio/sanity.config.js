// sanity.config.js
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
// import deskStructure from "./studio/deskStructure"; //Jos tämän laittaa, niin pitäsi rakentaa sivurakenne uusiks.
import schemas from "./schemas/schema";
import {
   dashboardTool, 
   projectInfoWidget, 
   projectUsersWidget,

 } from "@sanity/dashboard";

export default defineConfig({
  title: "PortfolioV2",
  projectId: "0wurvw2o",
  dataset: "production",
  plugins: [
    deskTool(
      // {
      // structure: deskStructure
      // }
    ),
    visionTool(),
    dashboardTool({
      widgets: [
        projectInfoWidget({

        }),
        projectUsersWidget(),
      ]
    })
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemas,
  },
  studio: {},
  document: {
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === 'global') {
        return prev.filter((templateItem) => templateItem.templateId != 'settings')
      }
      return prev
    },
    actions: (prev, { schemaType }) => {
      if (schemaType === 'siteConfig') {
        return prev.filter(({ action }) => !['unpublish', 'delete','duplicate'].includes(action))
      }
      return prev
    },
  },
});
