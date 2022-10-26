async function getData() {
  console.log('fetching');
  const res = await fetch('https://apimocha.com/next13/50posts'); // works fine
  // const res = await fetch('https://apimocha.com/next13/75posts'); // loads forever - the request is sent though.
  const json = await res.json();
  console.log(`finished fetching ${json.length} entries`);
  return json;
}

export default async function Page() {
  const data = await getData();
  return <div>Data length {JSON.stringify(data).length} characters.</div>;
}
