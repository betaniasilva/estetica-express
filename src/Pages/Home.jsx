
export default function Home() {

  return (
    <>
      <div id="sidebar">
        <nav>
          <ul>
            <li>
              <a href={`/authenticate`}>Login</a>
            </li>
            <li>
              <a href={`/authenticate`}>Register</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}