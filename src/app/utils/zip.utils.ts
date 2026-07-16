export function esZipCodeIllinois(zipCode: string | number): boolean {
  const zipStr = String(zipCode).trim();
  const zip5 = zipStr.substring(0, 5);
  const regexDigitos = /^\d{5}$/;
  if (!regexDigitos.test(zip5)) {
    return false;
  }
  const zipInt = parseInt(zip5, 10);
  return zipInt >= 60001 && zipInt <= 62999;
}
