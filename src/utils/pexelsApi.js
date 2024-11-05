const urlBase = 'https://api.pexels.com/v1';
const apiKey = 'Av9UYixj2OarcBJnjGlK75gMv8apHHKAxXd0re2k7WpLfHzDKPLfji17'

export const conection = async (query, page, perPage) => {
    try {
        const resp = await fetch(`${urlBase}/search?query=${query}&page=${page}&per_page=${perPage}`, {
            headers: { 
                Authorization: apiKey 
            }
        });
        if (!resp.ok) throw new Error("Error en la peticion");
        return resp.json();
    } catch (error) {
        console.error("Error al conectar con la API:", error);
        throw error;
    }
};