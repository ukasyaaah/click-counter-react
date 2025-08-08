 const container = document.getElementById("root");
      const root = ReactDOM.createRoot(container);

      // Destructuring
      function Header({ author }) {
        return (
          <h1 className="heading">
            Belajar React bareng {author ? author : "Ukhasyah"}
          </h1>
        );
      }

      function Teks({ like }) {
        return <span>{like ? like : 0} </span>;
      }

      function Button({ teks, onClick }) {
        return <button onClick={onClick}> {teks} </button>;
      }

      function HomePage() {
        const students = ["Ari", "Aster", "Afif"];
        const [likes, setLikes] = React.useState(0);
        const [like, setLike] = React.useState(0);

        function increment() {
          setLike(like + 1);
        }

        function decrement() {
          like <= 0 ? setLike(0) : setLike(like - 1);
        }

        function reset() {
          setLike(0);
        }

        function handleClick() {
          setLikes(likes + 1);
        }

        return (
          <>
            <Header author />
            <Header author="Zufar" />
            <Header author="Hani" />
            <ul>
              {students.map((student) => (
                // tanda elemen dgn nilai unik
                <li key={student}>{student}</li>
              ))}
            </ul>
            <button onClick={handleClick}> Like {likes} </button>
            <br />

            <Button onClick={increment} teks={"+"} />
            <Teks like={like >= 10 ? "Done" : like} />
            <Button onClick={decrement} teks={"-"} />
            <Button onClick={reset} teks={"reset"} />
          </>
        );
      }
      root.render(<HomePage />);