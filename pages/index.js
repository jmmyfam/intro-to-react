import Counter from '../components/Counter';

function Home() {
  const counters = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }];

  return (
    <>
      <h1>The Counters App</h1>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </>
  );
}

export default Home;
