export function required(value) {
  return !value ? ['This field cannot be empty'] : [];
}

// TODO: remove unused validator
export function repoName(value) {
  return !value || (value.lastIndexOf('/') < 1) ?
      ['This field must be in user-name/repo-name format'] : [];
}
