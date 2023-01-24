import "./MinhaFuncao.css";

function MinhaFuncao() {
  let array = [
    "banana",
    "apple",
    "orange",
    "watermelon",
    "tomatoes",
    "slamano",
    "mais coisas",
    "salve marlito",
    "kkkkkkkjjj",
    "chega",
  ];

  return (
    <div>
      {array.map((item) => (
        <h1 className="TituloFoda">{item}</h1>
      ))}
    </div>
  );
}

export default MinhaFuncao;
