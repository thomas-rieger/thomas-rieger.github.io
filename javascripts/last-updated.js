// Shows the date of the most recent push to the repository behind this site.
// The date rendered in the HTML is a fallback and is replaced on load.
var lastUpdated = document.getElementById('last-updated');
if (lastUpdated) {
  fetch('https://api.github.com/repos/thomas-rieger/thomas-rieger.github.io')
    .then(function (response) {
      if (!response.ok) { throw new Error('GitHub API returned ' + response.status); }
      return response.json();
    })
    .then(function (repo) {
      var pushedAt = new Date(repo.pushed_at);
      if (isNaN(pushedAt.getTime())) { return; }
      lastUpdated.textContent = pushedAt.toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      lastUpdated.setAttribute('datetime', repo.pushed_at);
    })
    .catch(function () {
      // Offline or rate limited: keep the fallback date already in the page.
    });
}
