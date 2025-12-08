fetch('assets/data/social-links.json')
  .then(response => response.json())
  .then(data => {

    // Header links
    document.getElementById("githubLink").href = data.github;
    document.getElementById("twitterLink").href = data.twitter;
    document.getElementById("linkedinLink").href = data.linkedin;

    // Footer links
    document.getElementById("githubFooter").href = data.github;
    document.getElementById("twitterFooter").href = data.twitter;
    document.getElementById("linkedinFooter").href = data.linkedin;

  });
