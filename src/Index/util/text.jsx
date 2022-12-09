export const stringToBoldElement = (text) => {
  const shouldBeBold = text
    .split("<b>")
    .map((string, index) => {
      if (string.search("</b>") > 0) {
        const s = string.split("</b>");
        return s[0];
      }
    })
    .filter((value, index, array) => value != undefined);

  var withoutToBold = text;
  shouldBeBold.map((value, index, array) => {
    withoutToBold = withoutToBold.replace(value, "");
  });

  const textArray = withoutToBold.replaceAll("<b>", "").split("</b>");

  const BoldedElement = textArray.map((item, index) => (
    <>
      {item}
      {index !== textArray.length - 1 && (
        <b key={index}>{shouldBeBold[index]}</b>
      )}
    </>
  ));
  return BoldedElement;
};
