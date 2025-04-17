<script>
  const topics = [
    { name: 'Cardiology', path: '/docs/cardiology/index.md' },
    { name: 'Endocrinology', path: '/docs/endocrinology/index.md' },
    // Add more as needed
  ];
</script>

<h1>Welcome to BPT Study App</h1>

<ul>
  {#each topics as topic}
    <li><a href={topic.path} target="_blank">{topic.name}</a></li>
  {/each}
</ul>
