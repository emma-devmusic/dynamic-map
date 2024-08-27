'use client'

import dynamic from 'next/dynamic'
 
const DynamicLeaflet = dynamic(() => import('./modules/Leaflet'), {
  loading: () => <p>Loading...</p>,
  ssr: false, 
})
 


export const Map = () => {




    return (
        <div className="shadow p-2 py-3 w-full sm:basis-1/2 mt-3 md:mt-0">
            <h4 className="text-xl">Mapa <strong>Leaflet</strong></h4>
            <hr className="my-4" />
            <p className="mb-4 text-xs bg-slate-200 max-w-[900px] py-3 px-3 border-l-2 border-slate-500 rounded ">Ubica tu búsqueda en el mapa para la geolocalización.</p>
            <DynamicLeaflet />
        </div>
    );
};
