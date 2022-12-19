import { Helmet as Header } from "react-helmet";

function Helmet({ name }) {
  var name_ = name.toString().toLowerCase();

  const pagename_ = allFirstUpperCase(
    PagesTitles[name_] ? PagesTitles[name_] : name_
  );

  return (
    <Header>
      {name_ == "home" && <meta charSet="utf-8" />}

      <title>{pagename_}</title>
      {PagesTitles[name_] && (
        <link rel="canonical" href={`https://digitalscudero.com.br/${name_}`} />
      )}
    </Header>
  );
}

export default Helmet;

const PagesTitles = {
  home: "Digital Scudero",
  cases: "Cases",
  partners: "Nossos Parceiros",
  services: "Nossos Serviços",
  methods: "Metodologia",
  contact: "Contato",
};

function allFirstUpperCase(string) {
  const split = string.split(" ");
  const arrayUp = split.map((e) => e.charAt(0).toUpperCase() + e.slice(1));
  return arrayUp.join(" ");
}
