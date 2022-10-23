import { defineDocumentType, makeSource } from "contentlayer/source-files"

const Post = defineDocumentType(() => ({
  name: "Post",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
  },
}))

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `/**/projects/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The name of the project",
      required: true,
    },
    id: {
      type: "string",
      description: "The id",
      required: true,
    },
    start_date: {
      type: "date",
      description: "The starting date of the post",
      required: false,
    },
    end_date: {
      type: "date",
      description: "The ending date of the post",
      required: false,
    },
    description: {
      type: "string",
      description: "The description",
      required: false,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/projects/${doc._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
})
