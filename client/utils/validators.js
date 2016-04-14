export function required(value) {
  return !value ? ['This field cannot be empty'] : [];
}

<<<<<<< HEAD
// TODO: remove unused validator
=======
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
export function repoName(value) {
  return !value || (value.lastIndexOf('/') < 1) ?
      ['This field must be in user-name/repo-name format'] : [];
}
