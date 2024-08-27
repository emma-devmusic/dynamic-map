import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
{
    countries {
        name,
        capital,
        languages{
            name,
            native
        }
    }
}
`;

export const COUNTRY_FILTER = gql`
query FindCountryByName($name: String) {
  countries(filter: {name: {regex: $name}}) {
    name
    capital
    code
    awsRegion
    continent{
      name
      code
    }
    subdivisions{
      name
      code
    },
    states {
      name
      code
    }
    emoji
  }
}
`
