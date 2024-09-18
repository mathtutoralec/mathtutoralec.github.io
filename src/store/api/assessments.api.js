import baseApi from "./api";

const listAssessments = {
  query: ({ limit, sort, before, after, search, filterOptions } = {}) => ({
    url: `/assessments/assessments`,
    params: { limit, sort, before, after, search, filterOptions },
  }),
};

const createAssessment = {
  query: ({ body } = {}) => ({
    url: `/assessments/assessments`,
    method: "POST",
    body,
  }),
};

const listAssessmentNames = {
  query: ({} = {}) => ({
    url: `/assessments/assessments/names`,
  }),
};

const readAssessment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessments/${id}`,
  }),
};

const updateAssessment = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/assessments/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteAssessment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessments/${id}`,
    method: "DELETE",
  }),
};

const resetAssessmentDraft = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessments/${id}/resetdraft`,
  }),
};

const publishAssessment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessments/${id}/publish`,
  }),
};

const disableAssessment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessments/${id}/disable`,
  }),
};

const cloneAssessment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessments/${id}/clone`,
  }),
};

const listAssessmentVersions = {
  query: ({ id, number } = {}) => ({
    url: `/assessments/assessments/${id}/list`,
    params: { number },
  }),
};

const listQuestions = {
  query: ({ limit, sort, before, after, search, filterOptions, subjectTags } = {}) => ({
    url: `/assessments/questions`,
    params: { limit, sort, before, after, search, filterOptions, subjectTags },
  }),
};

const createQuestion = {
  query: ({ body } = {}) => ({
    url: `/assessments/questions`,
    method: "POST",
    body,
  }),
};

const listQuestionNames = {
  query: ({} = {}) => ({
    url: `/assessments/questions/names`,
  }),
};

const readQuestion = {
  query: ({ id } = {}) => ({
    url: `/assessments/questions/${id}`,
  }),
};

const updateQuestion = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/questions/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteQuestion = {
  query: ({ id } = {}) => ({
    url: `/assessments/questions/${id}`,
    method: "DELETE",
  }),
};

const resetQuestionDraft = {
  query: ({ id } = {}) => ({
    url: `/assessments/questions/${id}/resetdraft`,
  }),
};

const publishQuestion = {
  query: ({ id } = {}) => ({
    url: `/assessments/questions/${id}/publish`,
  }),
};

const disableQuestion = {
  query: ({ id } = {}) => ({
    url: `/assessments/questions/${id}/disable`,
  }),
};

const cloneQuestion = {
  query: ({ id } = {}) => ({
    url: `/assessments/questions/${id}/clone`,
  }),
};

const listQuestionVersions = {
  query: ({ id, number } = {}) => ({
    url: `/assessments/questions/${id}/list`,
    params: { number },
  }),
};

const listTags = {
  query: ({ limit, sort, before, after, search, filterOptions } = {}) => ({
    url: `/assessments/tags`,
    params: { limit, sort, before, after, search, filterOptions },
  }),
};

const createTag = {
  query: ({ body } = {}) => ({
    url: `/assessments/tags`,
    method: "POST",
    body,
  }),
};

const listNamesTag = {
  query: ({} = {}) => ({
    url: `/assessments/tags/listnames`,
  }),
};

const readTag = {
  query: ({ id } = {}) => ({
    url: `/assessments/tags/${id}`,
  }),
};

const updateTag = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/tags/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteTag = {
  query: ({ id } = {}) => ({
    url: `/assessments/tags/${id}`,
    method: "DELETE",
  }),
};

const listScoringGroups = {
  query: ({ limit, sort, before, after, search, filterOptions } = {}) => ({
    url: `/assessments/scoringgroups`,
    params: { limit, sort, before, after, search, filterOptions },
  }),
};

const createScoringGroup = {
  query: ({ body } = {}) => ({
    url: `/assessments/scoringgroups`,
    method: "POST",
    body,
  }),
};

const listScoringGroupNames = {
  query: ({} = {}) => ({
    url: `/assessments/scoringgroups/listnames`,
  }),
};

const readScoringGroup = {
  query: ({ id } = {}) => ({
    url: `/assessments/scoringgroups/${id}`,
  }),
};

const updateScoringGroup = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/scoringgroups/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteScoringGroup = {
  query: ({ id } = {}) => ({
    url: `/assessments/scoringgroups/${id}`,
    method: "DELETE",
  }),
};

const listReportingGroups = {
  query: ({ limit, sort, before, after, search, filterOptions } = {}) => ({
    url: `/assessments/reportinggroups`,
    params: { limit, sort, before, after, search, filterOptions },
  }),
};

const createReportingGroup = {
  query: ({ body } = {}) => ({
    url: `/assessments/reportinggroups`,
    method: "POST",
    body,
  }),
};

const listReportingGroupNames = {
  query: ({} = {}) => ({
    url: `/assessments/reportinggroups/listnames`,
  }),
};

const readReportingGroup = {
  query: ({ id } = {}) => ({
    url: `/assessments/reportinggroups/${id}`,
  }),
};

const updateReportingGroup = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/reportinggroups/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteReportingGroup = {
  query: ({ id } = {}) => ({
    url: `/assessments/reportinggroups/${id}`,
    method: "DELETE",
  }),
};

const listAssessmentDeploymentGroups = {
  query: ({ limit, sort, before, after, search, filterOptions } = {}) => ({
    url: `/assessments/assessmentdeploymentgroups`,
    params: { limit, sort, before, after, search, filterOptions },
  }),
};

const createAssessmentDeploymentGroup = {
  query: ({ body } = {}) => ({
    url: `/assessments/assessmentdeploymentgroups`,
    method: "POST",
    body,
  }),
};

const listNamesAssessmentDeploymentGroup = {
  query: ({} = {}) => ({
    url: `/assessments/assessmentdeploymentgroups/listnames`,
  }),
};

const readAssessmentDeploymentGroup = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeploymentgroups/${id}`,
  }),
};

const updateAssessmentDeploymentGroup = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/assessmentdeploymentgroups/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteAssessmentDeploymentGroup = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeploymentgroups/${id}`,
    method: "DELETE",
  }),
};

const listAssessmentDeployments = {
  query: ({ limit, sort, before, after, search, filterOptions } = {}) => ({
    url: `/assessments/assessmentdeployments`,
    params: { limit, sort, before, after, search, filterOptions },
  }),
};

const createAssessmentDeployment = {
  query: ({ body } = {}) => ({
    url: `/assessments/assessmentdeployments`,
    method: "POST",
    body,
  }),
};

const listAssessmentDeploymentNames = {
  query: ({} = {}) => ({
    url: `/assessments/assessmentdeployments/listnames`,
  }),
};

const listAssessmentDeploymentsAvailableForUser = {
  query: ({ id, limit, sort, before, after, search, filterOptions } = {}) => ({
    url: `/assessments/assessmentdeployments/listavailableforuser`,
    params: { id, limit, sort, before, after, search, filterOptions },
  }),
};

const readAssessmentDeploymentIdByUrlCode = {
  query: ({ code } = {}) => ({
    url: `/assessments/assessmentdeployments/${code}/lookupidbyurlcode`,
  }),
};

const readAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}`,
  }),
};

const updateAssessmentDeployment = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}`,
    method: "DELETE",
  }),
};

const publishAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/publish`,
  }),
};

const disableAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/disable`,
  }),
};

const cloneAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/clone`,
  }),
};

const closeAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/close`,
  }),
};

const validateAssessmentDeploymentUrlCodes = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/validateurlcodes`,
    method: "POST",
    body,
  }),
};

const prePublishAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/prepublish`,
  }),
};

const draftAssessmentDeployment = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/draft`,
  }),
};

const generateAssessmentDeploymentQuestionPools = {
  query: ({ id, count } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/questionpools`,
    params: { count },
  }),
};

const updateAssessmentDeploymentQuestionPools = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/questionpools`,
    method: "PUT",
    body,
  }),
};

const readAssessmentDeploymentForResponse = {
  query: ({ id, user } = {}) => ({
    url: `/assessments/assessmentdeployments/${id}/readforresponse`,
    params: { user },
  }),
};

const listAssessmentResponses = {
  query: ({ limit, sort, before, after, search, status } = {}) => ({
    url: `/assessments/assessmentresponses`,
    params: { limit, sort, before, after, search, status },
  }),
};

const createAssessmentResponse = {
  query: ({ body } = {}) => ({
    url: `/assessments/assessmentresponses`,
    method: "POST",
    body,
  }),
};

const listAssessmentResponsesForUser = {
  query: ({ id, limit, sort, before, after, search, status } = {}) => ({
    url: `/assessments/assessmentresponses/list/user`,
    params: { id, limit, sort, before, after, search, status },
  }),
};

const listAssessmentResponsesForDeployment = {
  query: ({ id, limit, sort, before, after, search, status } = {}) => ({
    url: `/assessments/assessmentresponses/list/deployment`,
    params: { id, limit, sort, before, after, search, status },
  }),
};

const readAssessmentResponse = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentresponses/${id}`,
  }),
};

const updateAssessmentResponse = {
  query: ({ id, body } = {}) => ({
    url: `/assessments/assessmentresponses/${id}`,
    method: "PUT",
    body,
  }),
};

const deleteAssessmentResponse = {
  query: ({ id } = {}) => ({
    url: `/assessments/assessmentresponses/${id}`,
    method: "DELETE",
  }),
};

const startAssessmentResponse = {
  query: ({ id, user } = {}) => ({
    url: `/assessments/assessmentresponses/${id}/start`,
    params: { user },
  }),
};

const pauseAssessmentResponse = {
  query: ({ id, user } = {}) => ({
    url: `/assessments/assessmentresponses/${id}/pause`,
    params: { user },
  }),
};

const resumeAssessmentResponse = {
  query: ({ id, user } = {}) => ({
    url: `/assessments/assessmentresponses/${id}/resume`,
    params: { user },
  }),
};

const readAssessmentResponseQuestion = {
  query: ({ id, user, questionId } = {}) => ({
    url: `/assessments/assessmentresponses/${id}/question`,
    params: { user, questionId },
  }),
};

const submitAssessmentResponseQuestion = {
  query: ({ id, body, user } = {}) => ({
    url: `/assessments/assessmentresponses/${id}/question`,
    params: { user },
    method: "POST",
    body,
  }),
};

const submitAssessmentResponse = {
  query: ({ id, body, user } = {}) => ({
    url: `/assessments/assessmentresponses/${id}/submit`,
    params: { user },
    method: "POST",
    body,
  }),
};

const readAssessmentResponseToRespond = {
  query: ({ id, user } = {}) => ({
    url: `/assessments/assessmentresponses/${id}/readtorespond`,
    params: { user },
  }),
};

const endpoints = builder => ({
  istAssessments: builder.query(listAssessments),
  createAssessment: builder.mutation(createAssessment),
  listAssessmentNames: builder.query(listAssessmentNames),
  readAssessment: builder.query(readAssessment),
  updateAssessment: builder.mutation(updateAssessment),
  deleteAssessment: builder.mutation(deleteAssessment),
  resetAssessmentDraft: builder.query(resetAssessmentDraft),
  publishAssessment: builder.query(publishAssessment),
  disableAssessment: builder.query(disableAssessment),
  cloneAssessment: builder.query(cloneAssessment),
  listAssessmentVersions: builder.query(listAssessmentVersions),
  listQuestions: builder.query(listQuestions),
  createQuestion: builder.mutation(createQuestion),
  listQuestionNames: builder.query(listQuestionNames),
  readQuestion: builder.query(readQuestion),
  updateQuestion: builder.mutation(updateQuestion),
  deleteQuestion: builder.mutation(deleteQuestion),
  resetQuestionDraft: builder.query(resetQuestionDraft),
  publishQuestion: builder.query(publishQuestion),
  disableQuestion: builder.query(disableQuestion),
  cloneQuestion: builder.query(cloneQuestion),
  listQuestionVersions: builder.query(listQuestionVersions),
  listTags: builder.query(listTags),
  createTag: builder.mutation(createTag),
  listNamesTag: builder.query(listNamesTag),
  readTag: builder.query(readTag),
  updateTag: builder.mutation(updateTag),
  deleteTag: builder.mutation(deleteTag),
  listScoringGroups: builder.query(listScoringGroups),
  createScoringGroup: builder.mutation(createScoringGroup),
  listScoringGroupNames: builder.query(listScoringGroupNames),
  readScoringGroup: builder.query(readScoringGroup),
  updateScoringGroup: builder.mutation(updateScoringGroup),
  deleteScoringGroup: builder.mutation(deleteScoringGroup),
  listReportingGroups: builder.query(listReportingGroups),
  createReportingGroup: builder.mutation(createReportingGroup),
  listReportingGroupNames: builder.query(listReportingGroupNames),
  readReportingGroup: builder.query(readReportingGroup),
  updateReportingGroup: builder.mutation(updateReportingGroup),
  deleteReportingGroup: builder.mutation(deleteReportingGroup),
  listAssessmentDeploymentGroups: builder.query(listAssessmentDeploymentGroups),
  createAssessmentDeploymentGroup: builder.mutation(createAssessmentDeploymentGroup),
  listNamesAssessmentDeploymentGroup: builder.query(listNamesAssessmentDeploymentGroup),
  readAssessmentDeploymentGroup: builder.query(readAssessmentDeploymentGroup),
  updateAssessmentDeploymentGroup: builder.mutation(updateAssessmentDeploymentGroup),
  deleteAssessmentDeploymentGroup: builder.mutation(deleteAssessmentDeploymentGroup),
  listAssessmentDeployments: builder.query(listAssessmentDeployments),
  createAssessmentDeployment: builder.mutation(createAssessmentDeployment),
  listAssessmentDeploymentNames: builder.query(listAssessmentDeploymentNames),
  listAssessmentDeploymentsAvailableForUser: builder.query(
    listAssessmentDeploymentsAvailableForUser
  ),
  readAssessmentDeploymentIdByUrlCode: builder.query(readAssessmentDeploymentIdByUrlCode),
  readAssessmentDeployment: builder.query(readAssessmentDeployment),
  updateAssessmentDeployment: builder.mutation(updateAssessmentDeployment),
  deleteAssessmentDeployment: builder.mutation(deleteAssessmentDeployment),
  publishAssessmentDeployment: builder.query(publishAssessmentDeployment),
  disableAssessmentDeployment: builder.query(disableAssessmentDeployment),
  cloneAssessmentDeployment: builder.query(cloneAssessmentDeployment),
  closeAssessmentDeployment: builder.query(closeAssessmentDeployment),
  validateAssessmentDeploymentUrlCodes: builder.mutation(validateAssessmentDeploymentUrlCodes),
  prePublishAssessmentDeployment: builder.query(prePublishAssessmentDeployment),
  draftAssessmentDeployment: builder.query(draftAssessmentDeployment),
  generateAssessmentDeploymentQuestionPools: builder.query(
    generateAssessmentDeploymentQuestionPools
  ),
  updateAssessmentDeploymentQuestionPools: builder.mutation(
    updateAssessmentDeploymentQuestionPools
  ),
  readAssessmentDeploymentForResponse: builder.query(readAssessmentDeploymentForResponse),
  listAssessmentResponses: builder.query(listAssessmentResponses),
  createAssessmentResponse: builder.mutation(createAssessmentResponse),
  listAssessmentResponsesForUser: builder.query(listAssessmentResponsesForUser),
  listAssessmentResponsesForDeployment: builder.query(listAssessmentResponsesForDeployment),
  readAssessmentResponse: builder.query(readAssessmentResponse),
  updateAssessmentResponse: builder.mutation(updateAssessmentResponse),
  deleteAssessmentResponse: builder.mutation(deleteAssessmentResponse),
  startAssessmentResponse: builder.query(startAssessmentResponse),
  pauseAssessmentResponse: builder.query(pauseAssessmentResponse),
  resumeAssessmentResponse: builder.query(resumeAssessmentResponse),
  readAssessmentResponseQuestion: builder.query(readAssessmentResponseQuestion),
  submitAssessmentResponseQuestion: builder.mutation(submitAssessmentResponseQuestion),
  submitAssessmentResponse: builder.mutation(submitAssessmentResponse),
  readAssessmentResponseToRespond: builder.query(readAssessmentResponseToRespond),
});

const api = baseApi
  .injectEndpoints({ endpoints, overrideExisting: false })
  .enhanceEndpoints({ addTagTypes: ["Assessments"] });

export default api;
