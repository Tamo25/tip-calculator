let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
var extensions = [".com", ".net", ".us", ".io"];
var mixedDomains = [];

for (var i = 0; i < pronoun.length; i++) {
  for (var j = 0; j < adj.length; j++) {
    for (var k = 0; k < noun.length; k++) {
      for (var l = 0; l < extensions.length; l++) {
        var domain = pronoun[i] + adj[j] + noun[k] + extensions[l];
        mixedDomains.push(domain);
        console.log(domain);
      }
    }
  }
}
