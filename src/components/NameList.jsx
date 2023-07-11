function NameList() {
  const names = ["Bruce", "Clark", "Diana"];
  return (
    <div>
      {names.map((name) => {
        return <div key={name}>{name}</div>;
      })}
    </div>
  );
}

export default NameList;
