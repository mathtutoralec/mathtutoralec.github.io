import baseApi from "./api";
import { getPrefixFromKey } from "utils/files";

/**
 * Returns a URL to be used for uploading a file
 *
 * key: mandatory key value for the file
 * expires: defaults to 5 mins, in seconds
 * mimeType: mimeType startsWith restriction (e.g. image/), overrides extension
 * extension: extension to convert to mimeType
 */
const getFileManagerCreateFileUrl = {
  query: ({ key, expires, extension, mimeType, path }) => ({
    url: `/file-manager/files/url/create`,
    method: "POST",
    body: { key, expires, extension, mimeType, path },
  }),
  invalidatesTags: (result, err, args) => [{ type: "FileManager", id: args?.path }],
};

/**
 * Returns a form to be used for uploading files. The form can have a policy bound
 * to it to control size and content type of the uploaded file.
 *
 * The policy differentiates this from getCreateUrl.
 *
 * key: mandatory key value for the file
 * expires: defaults to 5 mins, in seconds
 * mimeType: mimeType startsWith restriction (e.g. image/), overrides extension
 * extension: extension to convert to mimeType
 * maxSize: optional value in bytes
 */
const getFileManagerPostForm = {
  query: ({ key, expires, mimeType, extension, maxSize }) => ({
    url: `/file-manager/files/url/form`,
    method: "POST",
    body: { key, expires, mimeType, extension, maxSize },
  }),
};

/**
 * Get a signed URL for reading a private file
 *
 * key: mandatory key value for the file
 * expires: defaults to 5 mins, in seconds
 */
const getFileManagerReadFileUrl = {
  query: ({ key, expires }) => ({
    url: `/file-manager/files/url/read`,
    method: "POST",
    body: { key, expires },
  }),
};

/**
 * List files and directories in the given prefix directory, e.g. user-management/profile-pictures/public/
 * will list all files and directories in the public profile pictures directory.
 *
 * prefix: The parent directory to check, e.g. user-management/profile-pictures
 */
const listFileManagerFiles = {
  query: ({ prefix, token }) => ({
    url: `/file-manager/files/list`,
    method: "POST",
    body: { prefix, token },
  }),
  providesTags: (result, error, args) => [
    { type: "FileManager", id: !!args.prefix ? args?.prefix : "root" },
  ],
};

/**
 * Delete multiple files in the given keys array
 *
 * keys: The keys of files to delete, e.g ["user-management/profile-pictures/public/001"]
 */
const deleteFileManagerFile = {
  query: ({ keys }) => ({
    url: `/file-manager/files/delete`,
    method: "POST",
    body: { keys },
  }),
  invalidatesTags: (result, error, args) =>
    args.keys.map(key => ({ type: "FileManager", id: getPrefixFromKey(key) })),
};

/**
 * Copy a file from a source bucket and key to a destination bucket and key.
 *
 * Buckets are optional and the process.env.S3_BUCKET will be used if not provided
 */
const copyFileManagerFile = {
  query: ({ source, destination }) => ({
    url: `/file-manager/files/copy`,
    method: "POST",
    body: { source, destination },
  }),
  invalidatesTags: (result, error, args) => [
    { type: "FileManager", id: getPrefixFromKey(args.source.key) },
    { type: "FileManager", id: getPrefixFromKey(args.destination.key) },
  ],
};

// Moves a file from the source path to the destination path
const moveFileManagerFile = {
  query: ({ source, destination }) => ({
    url: `/file-manager/files/move`,
    method: "POST",
    body: { source, destination },
  }),
  invalidatesTags: (result, error, args) => [
    { type: "FileManager", id: getPrefixFromKey(args.source.key) },
    { type: "FileManager", id: getPrefixFromKey(args.destination.key) },
  ],
};

/**
 * Get file info for file at a given key
 */
const readFileManagerFileInfo = {
  query: ({ key }) => ({
    url: `/file-manager/files/info`,
    method: "POST",
    body: { key },
  }),
  providesTags: (result, error, args) => [{ type: "FileManager", id: args?.key }],
};

/**
 * Check if a file exists at a given key
 */
const fileManagerFileExists = {
  query: ({ key }) => ({
    url: `/file-manager/files/exists`,
    method: "POST",
    body: { key },
  }),
};

/**
 * Get the content of a given file and convert based on type.
 *
 * Types can be json, yaml or utf-8
 */
const getFileManagerFileContent = {
  query: ({ key, type = "utf8" }) => ({
    url: `/file-manager/files/content`,
    method: "POST",
    body: { key, type },
  }),
};

/**
 * Upload file contents to a given key with the specified type
 *
 * Types can be json, yaml or utf-8
 */
const writeFileManagerFileContent = {
  query: ({ key, content, type = "utf8" }) => ({
    url: `/file-manager/files/write`,
    method: "POST",
    body: { key, content, type },
  }),
};

/**

 */
const listFileManagerEvents = {
  query: ({
    limit,
    before,
    after,
    sort,
    fields,
    search,
    eventName,
    sourceIPAddress,
    key,
    service,
    operation,
    contentType,
  } = {}) => ({
    url: `/file-manager/events`,
    params: {
      limit,
      before,
      after,
      sort,
      fields,
      search,
      eventName,
      sourceIPAddress,
      key,
      service,
      operation,
      contentType,
    },
  }),
};

const endpoints = builder => ({
  getFileManagerCreateFileUrl: builder.mutation(getFileManagerCreateFileUrl),
  getFileManagerPostForm: builder.mutation(getFileManagerPostForm),
  getFileManagerReadFileUrl: builder.query(getFileManagerReadFileUrl),
  listFileManagerFiles: builder.query(listFileManagerFiles),

  deleteFileManagerFile: builder.mutation(deleteFileManagerFile),
  copyFileManagerFile: builder.mutation(copyFileManagerFile),
  moveFileManagerFile: builder.mutation(moveFileManagerFile),

  readFileManagerFileInfo: builder.query(readFileManagerFileInfo),
  fileManagerFileExists: builder.query(fileManagerFileExists),

  getFileManagerFileContent: builder.query(getFileManagerFileContent),
  writeFileManagerFileContent: builder.mutation(writeFileManagerFileContent),

  listFileManagerEvents: builder.query(listFileManagerEvents),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["FileManager"] });

export default api;
