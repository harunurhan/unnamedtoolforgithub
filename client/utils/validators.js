export function required(value) {
  return !value ? ['This field cannot be empty'] : [];
}

export function repoName(value) {
  return !value || (value.lastIndexOf('/') < 1) ?
      ['This field must be in user-name/repo-name format'] : [];
}
