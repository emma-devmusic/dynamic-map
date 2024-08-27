
export interface CountriesData {
    countries: Country[];
}

export interface Country {
    name:         string;
    capital:      string;
    code:         string;
    awsRegion:    string;
    continent:    Continent;
    subdivisions: Continent[];
    states:       Continent[];
    emoji:        string;
}

export interface Continent {
    name: string;
    code: null | string;
}
