'use client'
import { useQuery } from "@apollo/client";
import { SearchBar } from "./modules/SearchBar";
import { COUNTRY_FILTER } from "@/services/queries/countries";
import { useState } from "react";
import { capitalizeEachWord } from "@/helpers/functions";
import { CountriesData } from "@/types/countries";
import { SearchResult } from "./modules/SearchResult";

export const Countries = () => {

    const [values, setValues] = useState<string>('')
    const [country, setCountry] = useState<string>('')

    

    const { data, loading, error } = useQuery<CountriesData>(COUNTRY_FILTER, {
        variables: { name: country }
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCountry(capitalizeEachWord(values))
    }

    if (error) return <pre>{error.message}</pre>
    return (
        <div className="shadow p-2 py-3 sm:basis-1/2">
            <h4 className="text-xl">Información de <strong>Paises</strong></h4>
            <hr className="my-4" />
            <SearchBar
                setValues={setValues}
                value={values}
                handleSubmit={handleSubmit}
            />
            <p className="mb-4 text-xs bg-slate-200 max-w-[900px] py-3 px-3 border-l-2 border-slate-500 rounded ">Realiza una búsqueda por <strong>nombre</strong> de país, <strong>región</strong> o <strong>Código ISO</strong>.</p>
            { data && <SearchResult loading={loading} data={data} /> }
        </div>
    );
};
