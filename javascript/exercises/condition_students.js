const actualPoints = 75;
const graduationLimit = 75;
const studentName = "Marie Dlouhá";

if (actualPoints >= graduationLimit) {
  console.log(`${studentName} prospěl/a s ${actualPoints} body.`);
} else {
  console.log(
    `${studentName} neprospěl/a s ${actualPoints}, limit byl ${graduationLimit} bodů, chybělo mu/jí ještě ${
      graduationLimit - actualPoints
    } bodů`
  );
  console.log(
    studentName +
      " neprospěl/a s " +
      actualPoints +
      " bodů, limit byl " +
      graduationLimit +
      " chybělo mu/jí ještě " +
      (graduationLimit - actualPoints) +
      " bodů"
  );
}
