import data from './data/countries.json'
export async function GET(request: Request) {
 
    
    
    return Response.json(data)
}