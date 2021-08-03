const baseUrl = "https://api.nasa.gov/neo/rest/v1"
const apiKey = "LZWsMQAghkuhShU1baz4dLMDRvyE8UOVqtgloCOD"

export const getAsteroidInfo = async (asteroidId:string) => {
    console.log("Retrieve asteroid details for ", asteroidId)
    const result = await fetch(`${baseUrl}/neo/${asteroidId}?api_key=${apiKey}`)

    if (result.status !== 200) {
        console.log("Error while hitting API", result);
        return null;
    }
    const asteroidInfo = await result.json()
    return asteroidInfo
}

export const getRandomAsteroidInfo = async () => {
    console.log("Retrieve random asteroid details")
    const result = await fetch(`${baseUrl}/neo/browse?api_key=DEMO_KEY`)

    if (result.status !== 200) {
        console.log("Error while hitting API", result);
        return null;
    }

    const asteroidsInfo = await result.json()
    const { near_earth_objects: nearEarthObjects } = asteroidsInfo
    const randomIndex = getRandomNumber(0, nearEarthObjects.length)
    console.log('RID', randomIndex, nearEarthObjects[randomIndex])
    const asteroidId = nearEarthObjects[randomIndex].id
    const asteroidInfo = await getAsteroidInfo(asteroidId)
    return asteroidInfo
}

const getRandomNumber = (min:number, max:number) => {
    return Math.floor(Math.random() * (max - min) + min);
}