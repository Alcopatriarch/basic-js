const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members))
    return false;
  const y = [];
  for (let x = 0; x < members.length; x++) {
    const member = members[x];
    if (typeof member === 'string') {
      const trimmed = member.trim();
      if (trimmed.length > 0) {
        y.push(trimmed[0].toUpperCase());
      }
    }
  }
  if (y.length === 0)
    return false;
  return y.sort().join('');
}

module.exports = {
  createDreamTeam
};
