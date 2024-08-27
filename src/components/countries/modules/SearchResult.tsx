import { CountriesData, Country } from "@/types/countries";


interface Props {
    loading: boolean;
    data: CountriesData;
}

export const SearchResult = ({loading, data}:Props) => {

    
    return (
        <>
            {
                loading
                    ? <div>Cargando...</div>
                    : data.countries.map((country: Country) => (
                        <div key={country.code} className="border-b border-gray-200 p-4 hover:bg-gray-100 hover:cursor-pointer transition-all">
                            <h5 className="text-sm font-bold">{country.name} - {country.emoji}</h5>
                        </div>
                    ))
            }
        </>
    );
};
