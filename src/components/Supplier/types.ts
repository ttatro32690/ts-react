enum Countries {
    US = "United States",
    CAN = "Canada",
    EU = "Europe",
    CH = "China"
  }

  
interface SupplierProps {
    name: string;
    countryOfOrigin: Countries;
    identifiers?: {
      [key: string]: string | number;
    };
  }
  

  export {Countries, SupplierProps};