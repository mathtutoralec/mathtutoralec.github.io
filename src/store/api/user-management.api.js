import baseApi from "./api";

const listUserManagementUsers = {
  query: ({ sort, fields, limit, before, after, search } = {}) => ({
    url: `/user-management/users`,
    params: { sort, fields, limit, before, after, search },
  }),
  providesTags: () => [{ type: "UserManagement", id: `Users` }],
};

const listUserManagementOrganisationUsers = {
  query: ({ id, sort, fields, limit, before, after, search }) => ({
    url: `/user-management/users/organisation/${id}`,
    params: { sort, fields, limit, before, after, search },
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Organisation_${args?.id}_Users` },
  ],
};

const updateUserManagementUserProfilePicture = {
  query: ({ id, body }) => ({
    url: `/user-management/users/${id}/profilepicture`,
    method: "PUT",
    body,
  }),
};

const deleteUserManagementUserProfilePicture = {
  query: ({ id }) => ({
    url: `/user-management/users/${id}/profilepicture`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Users_${args?.id}` },
    { type: "UserManagement", id: `Users` },
  ],
};

const createUserManagementUser = {
  query: ({ body }) => ({
    url: `/user-management/users`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [
    { type: "UserManagement", id: `Users` },
    { type: "UserManagement", id: "User_Email_Unique" },
  ],
};

const checkUserManagementUserEmailUnique = {
  query: ({ email }) => ({
    url: `/user-management/users/exists`,
    params: { email },
  }),
  providesTags: () => [{ type: "UserManagement", id: "User_Email_Unique" }],
};

const readUserManagementUser = {
  query: ({ id }) => ({
    url: `/user-management/users/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "UserManagement", id: `Users_${args?.id}` }],
};

const updateUserManagementUser = {
  query: ({ id, body }) => ({
    url: `/user-management/users/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Users_${args?.id}` },
    { type: "UserManagement", id: `Users` },
  ],
};

const deleteUserManagementUser = {
  query: ({ id }) => ({
    url: `/user-management/users/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Users_${args?.id}` },
    { type: "UserManagement", id: `Users` },
  ],
};

const listUserManagementOrganisations = {
  query: ({ types, disabled, sort, fields, limit, before, after, search } = {}) => ({
    url: `/user-management/organisations`,
    params: { types, disabled, sort, fields, limit, before, after, search },
  }),
  providesTags: () => [{ type: "UserManagement", id: `Organisations` }],
};

const listUserManagementOrganisationChildren = {
  query: ({ id, types, disabled, sort, fields, limit, before, after, search } = {}) => ({
    url: `/user-management/organisations/${id}/children`,
    params: { types, disabled, sort, fields, limit, before, after, search },
  }),
};

const createUserManagementOrganisation = {
  query: ({ body }) => ({
    url: `/user-management/organisations`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [
    { type: "UserManagement", id: `Organisations` },
    { type: "UserManagement", id: "Organisations_Name_Unique" },
  ],
};

const checkUserManagementOrganisationNameUnique = {
  query: ({ name }) => ({
    url: `/user-management/organisations/exists`,
    params: { name },
  }),
  providesTags: () => [{ type: "UserManagement", id: "Organisations_Name_Unique" }],
};

const readUserManagementOrganisation = {
  query: ({ id }) => ({
    url: `/user-management/organisations/${id}`,
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Organisations_${args?.id}` },
  ],
};

const readUserManagementOrganisationByName = {
  query: ({ name }) => ({
    url: `/user-management/organisations/name/${name}`,
  }),
  providesTags: result => [{ type: "UserManagement", id: `Organisations_${result?.id}` }],
};

const updateUserManagementOrganisation = {
  query: ({ id, body }) => ({
    url: `/user-management/organisations/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Organisations_${args?.id}` },
    { type: "UserManagement", id: `Organisations` },
  ],
};

const deleteUserManagementOrganisation = {
  query: ({ id }) => ({
    url: `/user-management/organisations/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Organisations_${args?.id}` },
    { type: "UserManagement", id: `Organisations` },
  ],
};

const listUserManagementOrganisationCategories = {
  query: ({ id, sort, fields, limit, before, after, search } = {}) => ({
    url: `/user-management/categories/organisation/${id}`,
    params: { sort, fields, limit, before, after, search },
  }),
  providesTags: () => [{ type: "UserManagement", id: `Categories` }],
};

const createUserManagementCategory = {
  query: ({ body }) => ({
    url: `/user-management/categories`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "UserManagement", id: `Categories` }],
};

const readUserManagementCategory = {
  query: ({ id }) => ({
    url: `/user-management/categories/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "UserManagement", id: `Categories_${args?.id}` }],
};

const updateUserManagementCategory = {
  query: ({ id, body }) => ({
    url: `/user-management/categories/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Categories_${args?.id}` },
    { type: "UserManagement", id: `Categories` },
  ],
};

const deleteUserManagementCategory = {
  query: ({ id }) => ({
    url: `/user-management/categories/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Categories_${args?.id}` },
    { type: "UserManagement", id: `Categories` },
  ],
};

const listUserManagementFoldersInCategory = {
  query: ({ id, format = "tree" }) => ({
    url: `/user-management/folders/category/${id}`,
    params: { format },
  }),
  providesTags: () => [{ type: "UserManagement", id: `Folders` }],
};

const listUserManagementFoldersInCategoryByName = {
  query: ({ name, organisationalEntity }) => ({
    url: `/user-management/folders/category/name/${name}/${organisationalEntity}`,
  }),
  providesTags: () => [{ type: "UserManagement", id: `Folders` }],
};

const listUserManagementFolderChildren = {
  query: ({ id, format }) => ({
    url: `/user-management/folders/${id}/children`,
    params: { format },
  }),
  providesTags: () => [{ type: "UserManagement", id: `Folders` }],
};

const createUserManagementFolder = {
  query: ({ body }) => ({
    url: `/user-management/folders`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "UserManagement", id: `Folders` }],
};

const readUserManagementFolder = {
  query: ({ id }) => ({
    url: `/user-management/folders/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "UserManagement", id: `Folders_${args?.id}` }],
};

const readUserManagementFolderByPath = {
  query: ({ id }) => ({
    url: `/user-management/folders/${id}/path`,
  }),
  providesTags: result => [{ type: "UserManagement", id: `Folders_${result?.id}` }],
};

const updateUserManagementFolder = {
  query: ({ id, body }) => ({
    url: `/user-management/folders/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Folders_${args?.id}` },
    { type: "UserManagement", id: `Folders` },
  ],
};

const deleteUserManagementFolder = {
  query: ({ id }) => ({
    url: `/user-management/folders/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Folders_${args?.id}` },
    { type: "UserManagement", id: `Folders` },
  ],
};

const listUserManagementUsersForFolder = {
  query: ({ id, sort, fields, limit, before, after, search, detached }) => ({
    url: `/user-management/users/folder/${id}`,
    params: { sort, fields, limit, before, after, search, detached },
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Folders_${args?.id}_Users` },
  ],
};

const listUserManagementUsersForPolicy = {
  query: ({ id, sort, fields, limit, before, after, search, detached }) => ({
    url: `/user-management/users/policy/${id}`,
    params: { sort, fields, limit, before, after, search, detached },
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Policies_${args?.id}_Users` },
  ],
};

const listUserManagementFoldersForUser = {
  query: ({ id, sort, fields, limit, before, after, search, detached }) => ({
    url: `/user-management/folders/user/${id}`,
    params: { sort, fields, limit, before, after, search, detached },
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Users_${args?.id}_Folders` },
  ],
};

const listUserManagementFoldersForPolicy = {
  query: ({ id, sort, fields, limit, before, after, search, detached }) => ({
    url: `/user-management/folders/policy/${id}`,
    params: { sort, fields, limit, before, after, search, detached },
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Policies_${args?.id}_Folders` },
  ],
};

const listUserManagementPoliciesForUser = {
  query: ({ id, sort, fields, limit, before, after, search, detached }) => ({
    url: `/user-management/policies/user/${id}`,
    params: { sort, fields, limit, before, after, search, detached },
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Users_${args?.id}_Policies` },
  ],
};

const listUserManagementPoliciesForFolder = {
  query: ({ id, sort, fields, limit, before, after, search, detached }) => ({
    url: `/user-management/policies/folder/${id}`,
    params: { sort, fields, limit, before, after, search, detached },
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `Folders_${args?.id}_Policies` },
  ],
};

const addUserManagementFolderUsers = {
  query: ({ id, body }) => ({
    url: `/user-management/folders/${id}/add`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    // TODO invalidate users based on IDs
    { type: "UserManagement", id: `Folders_${args?.id}_Users` },
  ],
};

const removeUserManagementFolderUsers = {
  query: ({ id, body }) => ({
    url: `/user-management/folders/${id}/remove`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    // TODO invalidate users based on IDs
    { type: "UserManagement", id: `Folders_${args?.id}_Users` },
  ],
};

const moveUserManagementFolderUser = {
  query: ({ id, from, to }) => ({
    url: `/user-management/folders/${id}/move/${from}/${to}`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Folders_${args?.from}_Users` },
    { type: "UserManagement", id: `Folders_${args?.to}_Users` },
  ],
};

const listUserManagementSystemPolicies = {
  query: ({ sort, fields, limit, before, after, search }) => ({
    url: `/user-management/policies/system`,
    params: { sort, fields, limit, before, after, search },
  }),
  providesTags: () => [{ type: "UserManagement", id: `Policies` }],
};

const createUserManagementSystemPolicy = {
  query: ({ body }) => ({
    url: `/user-management/policies/system`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "UserManagement", id: `Policies` }],
};

const listUserManagementOrganisationPolicies = {
  query: ({ id, sort, fields, limit, before, after, search }) => ({
    url: `/user-management/policies/organisation/${id}`,
    params: { sort, fields, limit, before, after, search },
  }),
  providesTags: () => [{ type: "UserManagement", id: `Policies` }],
};

const createUserManagementPolicy = {
  query: ({ body }) => ({
    url: `/user-management/policies`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [{ type: "UserManagement", id: `Policies` }],
};

const readUserManagementPolicy = {
  query: ({ id }) => ({
    url: `/user-management/policies/${id}`,
  }),
  providesTags: (result, error, args) => [{ type: "UserManagement", id: `Policies_${args?.id}` }],
};

const updateUserManagementPolicy = {
  query: ({ id, body }) => ({
    url: `/user-management/policies/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Policies_${args?.id}` },
    { type: "UserManagement", id: `Policies` },
  ],
};

const deleteUserManagementPolicy = {
  query: ({ id }) => ({
    url: `/user-management/policies/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Policies_${args?.id}` },
    { type: "UserManagement", id: `Policies` },
  ],
};

const attachUserManagementPolicyToUser = {
  query: ({ id, userId }) => ({
    url: `/user-management/policies/${id}/attach_user/${userId}`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Users_${args?.userId}` },
    { type: "UserManagement", id: `Users_${args?.userId}_Policies` },
  ],
};

const detachUserManagementPolicyToUser = {
  query: ({ id, userId }) => ({
    url: `/user-management/policies/${id}/detach_user/${userId}`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Users_${args?.userId}` },
    { type: "UserManagement", id: `Users_${args?.userId}_Policies` },
  ],
};

const attachUserManagementPolicyToFolder = {
  query: ({ id, folderId }) => ({
    url: `/user-management/policies/${id}/attach_folder/${folderId}`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Folders_${args?.folderId}` },
    { type: "UserManagement", id: `Folders_${args?.folderId}_Policies` },
  ],
};

const detachUserManagementPolicyToFolder = {
  query: ({ id, folderId }) => ({
    url: `/user-management/policies/${id}/detach_folder/${folderId}`,
    method: "PUT",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `Folders_${args?.folderId}` },
    { type: "UserManagement", id: `Folders_${args?.folderId}_Policies` },
  ],
};

const listUserManagementOrganisationTypes = {
  query: ({ sort, fields, limit, before, after, search }) => ({
    url: `/user-management/organisationtypes`,
    params: { sort, fields, limit, before, after, search },
  }),
  providesTags: () => [{ type: "UserManagement", id: `OrganisationTypes` }],
};

const readUserManagementOrganisationType = {
  query: ({ id }) => ({
    url: `/user-management/organisationtypes/${id}`,
  }),
  providesTags: (result, error, args) => [
    { type: "UserManagement", id: `OrganisationTypes_${args?.id}` },
  ],
};

const readUserManagementOrganisationTypeByName = {
  query: ({ name }) => ({
    url: `/user-management/organisationtypes/name/${name}`,
  }),
  providesTags: result => [{ type: "UserManagement", id: `OrganisationTypes_${result?.id}` }],
};

const checkUserManagementOrganisationTypeNameUnique = {
  query: ({ name }) => ({
    url: `/user-management/organisationtypes/exists`,
    params: { name },
  }),
  providesTags: () => [{ type: "UserManagement", id: "Organisation_Type_Name_Unique" }],
};

const createUserManagementOrganisationType = {
  query: ({ body }) => ({
    url: `/user-management/organisationtypes`,
    method: "POST",
    body,
  }),
  invalidatesTags: () => [
    { type: "UserManagement", id: `OrganisationTypes` },
    { type: "UserManagement", id: "Organisation_Type_Name_Unique" },
  ],
};

const updateUserManagementOrganisationType = {
  query: ({ id, body }) => ({
    url: `/user-management/organisationtypes/${id}`,
    method: "PUT",
    body,
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `OrganisationTypes_${args?.id}` },
    { type: "UserManagement", id: `OrganisationTypes` },
  ],
};

const deleteUserManagementOrganisationType = {
  query: ({ id }) => ({
    url: `/user-management/organisationtypes/${id}`,
    method: "DELETE",
  }),
  invalidatesTags: (result, error, args) => [
    { type: "UserManagement", id: `OrganisationTypes_${args?.id}` },
    { type: "UserManagement", id: `OrganisationTypes` },
  ],
};

const readUserManagementUserPermissions = {
  query: ({ id }) => ({
    url: `/user-management/permissions/user/${id}`,
    method: "GET",
  }),
};

const updateUserManagementUserPermissions = {
  query: ({ id }) => ({
    url: `/user-management/permissions/user/${id}`,
    method: "PUT",
  }),
};

const endpoints = builder => ({
  listUserManagementUsers: builder.query(listUserManagementUsers),
  listUserManagementOrganisationUsers: builder.query(listUserManagementOrganisationUsers),
  updateUserManagementUserProfilePicture: builder.mutation(updateUserManagementUserProfilePicture),
  deleteUserManagementUserProfilePicture: builder.mutation(deleteUserManagementUserProfilePicture),
  checkUserManagementUserEmailUnique: builder.query(checkUserManagementUserEmailUnique),
  createUserManagementUser: builder.mutation(createUserManagementUser),
  readUserManagementUser: builder.query(readUserManagementUser),
  updateUserManagementUser: builder.mutation(updateUserManagementUser),
  deleteUserManagementUser: builder.mutation(deleteUserManagementUser),

  listUserManagementOrganisations: builder.query(listUserManagementOrganisations),
  listUserManagementOrganisationChildren: builder.query(listUserManagementOrganisationChildren),
  createUserManagementOrganisation: builder.mutation(createUserManagementOrganisation),
  checkUserManagementOrganisationNameUnique: builder.query(
    checkUserManagementOrganisationNameUnique
  ),
  readUserManagementOrganisation: builder.query(readUserManagementOrganisation),
  readUserManagementOrganisationByName: builder.query(readUserManagementOrganisationByName),
  updateUserManagementOrganisation: builder.mutation(updateUserManagementOrganisation),
  deleteUserManagementOrganisation: builder.mutation(deleteUserManagementOrganisation),

  listUserManagementOrganisationCategories: builder.query(listUserManagementOrganisationCategories),
  createUserManagementCategory: builder.mutation(createUserManagementCategory),
  readUserManagementCategory: builder.query(readUserManagementCategory),
  updateUserManagementCategory: builder.mutation(updateUserManagementCategory),
  deleteUserManagementCategory: builder.mutation(deleteUserManagementCategory),

  listUserManagementFoldersInCategory: builder.query(listUserManagementFoldersInCategory),
  listUserManagementFoldersInCategoryByName: builder.query(
    listUserManagementFoldersInCategoryByName
  ),
  listUserManagementFolderChildren: builder.query(listUserManagementFolderChildren),
  createUserManagementFolder: builder.mutation(createUserManagementFolder),
  readUserManagementFolder: builder.query(readUserManagementFolder),
  readUserManagementFolderByPath: builder.query(readUserManagementFolderByPath),
  updateUserManagementFolder: builder.mutation(updateUserManagementFolder),
  deleteUserManagementFolder: builder.mutation(deleteUserManagementFolder),

  listUserManagementFoldersForUser: builder.query(listUserManagementFoldersForUser),
  listUserManagementFoldersForPolicy: builder.query(listUserManagementFoldersForPolicy),
  addUserManagementFolderUsers: builder.mutation(addUserManagementFolderUsers),
  removeUserManagementFolderUsers: builder.mutation(removeUserManagementFolderUsers),
  moveUserManagementFolderUser: builder.mutation(moveUserManagementFolderUser),
  listUserManagementUsersForFolder: builder.query(listUserManagementUsersForFolder),
  listUserManagementUsersForPolicy: builder.query(listUserManagementUsersForPolicy),

  listUserManagementSystemPolicies: builder.query(listUserManagementSystemPolicies),
  createUserManagementSystemPolicy: builder.mutation(createUserManagementSystemPolicy),
  listUserManagementOrganisationPolicies: builder.query(listUserManagementOrganisationPolicies),
  createUserManagementPolicy: builder.mutation(createUserManagementPolicy),
  readUserManagementPolicy: builder.query(readUserManagementPolicy),
  updateUserManagementPolicy: builder.mutation(updateUserManagementPolicy),
  deleteUserManagementPolicy: builder.mutation(deleteUserManagementPolicy),
  listUserManagementPoliciesForUser: builder.query(listUserManagementPoliciesForUser),
  listUserManagementPoliciesForFolder: builder.query(listUserManagementPoliciesForFolder),

  attachUserManagementPolicyToUser: builder.mutation(attachUserManagementPolicyToUser),
  detachUserManagementPolicyToUser: builder.mutation(detachUserManagementPolicyToUser),

  attachUserManagementPolicyToFolder: builder.mutation(attachUserManagementPolicyToFolder),
  detachUserManagementPolicyToFolder: builder.mutation(detachUserManagementPolicyToFolder),

  listUserManagementOrganisationTypes: builder.query(listUserManagementOrganisationTypes),
  createUserManagementOrganisationType: builder.mutation(createUserManagementOrganisationType),
  checkUserManagementOrganisationTypeNameUnique: builder.query(
    checkUserManagementOrganisationTypeNameUnique
  ),
  readUserManagementOrganisationType: builder.query(readUserManagementOrganisationType),
  readUserManagementOrganisationTypeByName: builder.query(readUserManagementOrganisationTypeByName),
  updateUserManagementOrganisationType: builder.mutation(updateUserManagementOrganisationType),
  deleteUserManagementOrganisationType: builder.mutation(deleteUserManagementOrganisationType),

  readUserManagementUserPermissions: builder.query(readUserManagementUserPermissions),
  updateUserManagementUserPermissions: builder.mutation(updateUserManagementUserPermissions),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["UserManagement"] });

export default api;
