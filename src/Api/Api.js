import axios from "axios";

export const Api_Host = axios.create({
  baseURL: 'http://127.0.0.1:8000/api'
});

// Interceptor para agregar el token a cada solicitud
Api_Host.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Crear una nueva precotización
export const createPreCotizacion = async (data) => {
     try {
       const response = await Api_Host.post('/precotizacion/', data);
       return response;
     } catch (error) {
       console.error("❌ Error en createPreCotizacion:", error);
       if (error.response) {
         console.log("🔍 Detalles del error:", error.response.data);
         throw new Error(JSON.stringify(error.response.data));
       } else {
         throw new Error("Error en la solicitud. No se recibió respuesta del servidor.");
       }
     }
   };

   export const createServicioPreCotizacion = (data) => Api_Host.post('/precotizacionservicio/', data);

   export const getServicioData = async (id) => Api_Host.get(`/allServiciosData/${id}/`);