export default function UserGreeting() {
  const isLoggedIn = true;
  return (
    <>
      <div>Welcome {isLoggedIn ? "Viral" : "Guest"}</div>
      <div>Welcome {isLoggedIn && "Viral"}</div>
    </>
  );
}
