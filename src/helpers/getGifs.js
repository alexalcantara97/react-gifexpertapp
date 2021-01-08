export const getGifs = async( category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&api_key=j58159FUXX4G55M9gct5kltSHo1OYqUE&limit=10`;
    const resp = await fetch (url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    // console.log(gifs);
    return gifs;
}