function CountryName ({params}:{params:{country_name:string}}) 
{
    return(
        <div>
            <h1>This is Countries Page : {params.country_name} </h1><br />
        </div>
    )
}
export default CountryName