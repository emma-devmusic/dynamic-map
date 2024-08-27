import { ChangeEvent } from "react";

interface Props {
    value: string;
    setValues: (e: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const SearchBar = ({ value, setValues, handleSubmit }: Props) => {


    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setValues(e.target.value);

    return (
        <form className="relative my-2" onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    id="hs-floating-input-email"
                    className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none shadow focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2"
                    placeholder="you@email.com"
                    value={value}
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="hs-floating-input-email"
                    className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none peer-focus:scale-90 peer-focus:translate-x-0.5 peer-focus:-translate-y-1.5 peer-focus:text-gray-500 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:text-gray-500"
                >
                    Buscar
                </label>
            </div>
            <div className="flex items-center gap-5 mt-2 ms-2">
                <p className="text-sm">Filtros:</p>
                <div className="flex">
                    <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-group-1"/>
                    <label htmlFor="hs-radio-group-1" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Apple</label>
                </div>

                <div className="flex">
                    <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-group-2"/>
                    <label htmlFor="hs-radio-group-2" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Pear</label>
                </div>

                <div className="flex">
                    <input type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-group-3"/>
                    <label htmlFor="hs-radio-group-3" className="text-sm text-gray-500 ms-2 dark:text-neutral-400">Orange</label>
                </div>
            </div>
            <button
                type="submit"
                className="border-[1px] py-2 px-3 rounded-md mt-3"
            >
                Buscar
            </button>
        </form>
    );
};
