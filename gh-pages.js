var ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/nemo-omen/bit-patterns.git',
    user: {
      name: 'nemo-omen',
      email: 'nemo-omen@gmail.com'
    }
  },
  () => {
    console.log('Looks like a deploy actually happened!');
  }
)